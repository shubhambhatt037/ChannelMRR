import { prisma } from "@/lib/db/prisma/client";
import {
	getStartup,
	listStartups,
	SAFE_INTERVAL_MS,
	sleep,
	type TrustMrrListItem,
	type TrustMrrDetail,
} from "@/lib/trustmrr";

/**
 * Neon drops idle connections aggressively. Wrap each DB call in a retry that
 * catches transient connection errors (P1001/P1017/ECONNRESET) and tries again
 * with exponential backoff.
 */
async function withRetry<T>(fn: () => Promise<T>, attempts = 12): Promise<T> {
	let lastErr: unknown;
	for (let i = 0; i < attempts; i++) {
		try {
			return await fn();
		} catch (e: unknown) {
			lastErr = e;
			const code = (e as { code?: string })?.code;
			const msg = e instanceof Error ? e.message : String(e);
			const transient =
				code === "P1001" ||
				code === "P1017" ||
				code === "P1008" ||
				code === "P1002" ||
				/closed the connection|Connection reset|ECONNRESET|ENOTFOUND|EAI_AGAIN|getaddrinfo|fetch failed|network|timed? ?out/i.test(
					msg,
				);
			if (!transient) throw e;
			// Exponential backoff capped at 60s — survives ~10 min of network outage total.
			const wait = Math.min(60_000, 1000 * 2 ** Math.min(i, 6));
			console.warn(
				`[sync] transient error (${code ?? "net"}) attempt ${i + 1}/${attempts}, retrying in ${wait}ms…`,
			);
			await sleep(wait);
		}
	}
	throw lastErr;
}

function toDate(s: string | null | undefined) {
	if (!s) return null;
	const d = new Date(s);
	return Number.isNaN(d.getTime()) ? null : d;
}

function startupListData(item: TrustMrrListItem) {
	return {
		name: item.name,
		icon: item.icon,
		description: item.description,
		website: item.website,
		country: item.country,
		category: item.category,
		targetAudience: item.targetAudience,
		paymentProvider: item.paymentProvider,
		foundedDate: toDate(item.foundedDate),
		xHandle: item.xHandle,
		rank: item.rank ?? null,
		mrr: item.revenue?.mrr ?? null,
		revenueTotal: item.revenue?.total ?? null,
		revenueLast30Days: item.revenue?.last30Days ?? null,
		activeSubscriptions: item.activeSubscriptions ?? null,
		growth30d: item.growth30d ?? null,
		growthMRR30d: item.growthMRR30d ?? null,
		onSale: item.onSale ?? false,
		askingPrice: item.askingPrice ?? null,
	};
}

export async function upsertListPage(items: TrustMrrListItem[]) {
	for (const item of items) {
		const data = startupListData(item);
		await withRetry(() =>
			prisma.startup.upsert({
				where: { slug: item.slug },
				create: { slug: item.slug, ...data },
				update: data,
			}),
		);
	}
}

export async function syncList(opts: { onProgress?: (p: number, total: number) => void } = {}) {
	let page = 1;
	let total = 0;
	let processed = 0;
	while (true) {
		const res = await listStartups(page, 50);
		total = res.meta.total;
		await upsertListPage(res.data);
		processed += res.data.length;
		opts.onProgress?.(processed, total);
		if (!res.meta.hasMore) break;
		page += 1;
		await sleep(SAFE_INTERVAL_MS);
	}

	await withRetry(() =>
		prisma.syncState.upsert({
			where: { id: "singleton" },
			create: { id: "singleton", lastListSyncAt: new Date(), totalStartups: total },
			update: { lastListSyncAt: new Date(), totalStartups: total },
		}),
	);

	return { total, processed };
}

export async function upsertDetail(detail: TrustMrrDetail) {
	const data = {
		...startupListData(detail),
		detailFetchedAt: new Date(),
	};
	await withRetry(() =>
		prisma.startup.upsert({
			where: { slug: detail.slug },
			create: { slug: detail.slug, ...data },
			update: data,
		}),
	);

	await withRetry(() =>
		prisma.marketingChannel.deleteMany({ where: { startupSlug: detail.slug } }),
	);
	await withRetry(() => prisma.techStack.deleteMany({ where: { startupSlug: detail.slug } }));

	if (detail.marketingChannels?.length) {
		await withRetry(() =>
			prisma.marketingChannel.createMany({
				data: detail.marketingChannels.map((c) => ({
					startupSlug: detail.slug,
					slug: c.slug,
					category: c.category,
				})),
				skipDuplicates: true,
			}),
		);
	}
	if (detail.techStack?.length) {
		await withRetry(() =>
			prisma.techStack.createMany({
				data: detail.techStack.map((c) => ({
					startupSlug: detail.slug,
					slug: c.slug,
					category: c.category,
				})),
				skipDuplicates: true,
			}),
		);
	}
}

/**
 * Fetch details for up to `limit` startups whose detail has not been fetched
 * recently. Used by both seed and the periodic cron endpoint.
 */
export async function syncDetailBatch(
	limit: number,
	staleAfterMs = 1000 * 60 * 60 * 24 * 7,
	options: { random?: boolean } = {},
) {
	const staleBefore = new Date(Date.now() - staleAfterMs);

	let targets: { slug: string }[];
	if (options.random) {
		// Random sampling — spreads the seed across the whole catalog so the
		// leaderboard fills with real channel data quickly, rather than
		// processing rank-ordered startups (which skew toward empty channels).
		targets = await withRetry(() =>
			prisma.$queryRaw<{ slug: string }[]>`
				SELECT slug FROM startup
				WHERE "detailFetchedAt" IS NULL OR "detailFetchedAt" < ${staleBefore}
				ORDER BY random()
				LIMIT ${limit}
			`,
		);
	} else {
		targets = await withRetry(() =>
			prisma.startup.findMany({
				where: {
					OR: [{ detailFetchedAt: null }, { detailFetchedAt: { lt: staleBefore } }],
				},
				// NULLs first so brand-new startups are fetched before refreshing
				// already-fetched ones. In Postgres, plain `asc` puts NULL last.
				orderBy: [{ detailFetchedAt: { sort: "asc", nulls: "first" } }, { rank: "asc" }],
				take: limit,
				select: { slug: true },
			}),
		);
	}

	let count = 0;
	const errors: { slug: string; error: string }[] = [];
	for (const t of targets) {
		try {
			const res = await getStartup(t.slug);
			await upsertDetail(res.data);
			count += 1;
		} catch (e) {
			const msg = e instanceof Error ? e.message : String(e);
			errors.push({ slug: t.slug, error: msg });
			// If the slug 404s on the detail endpoint, stamp detailFetchedAt
			// anyway so we don't keep re-picking it forever. The startup row
			// stays in the DB (it came from the list endpoint) but is excluded
			// from "pending" calculations.
			if (/TrustMRR 404/.test(msg)) {
				await withRetry(() =>
					prisma.startup.update({
						where: { slug: t.slug },
						data: { detailFetchedAt: new Date() },
					}),
				).catch(() => {});
			}
		}
		await sleep(SAFE_INTERVAL_MS);
	}

	await withRetry(() =>
		prisma.syncState.upsert({
			where: { id: "singleton" },
			create: {
				id: "singleton",
				lastDetailSyncAt: new Date(),
				detailsFetched: count,
			},
			update: {
				lastDetailSyncAt: new Date(),
				detailsFetched: { increment: count },
			},
		}),
	);

	return { processed: count, attempted: targets.length, errors };
}
