import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma/client";
import { buildStartupWhere, parseFiltersFromSearchParams } from "@/lib/filters";
import { enforceApiRateLimit, getClientIdentifier } from "@/lib/redis/ratelimit";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
	const id = getClientIdentifier(req);
	const rl = await enforceApiRateLimit(id);
	if (!rl.ok) {
		return NextResponse.json({ error: "rate_limited" }, { status: 429 });
	}

	const url = new URL(req.url);
	const filters = parseFiltersFromSearchParams(url.searchParams);
	const where = buildStartupWhere(filters);

	const matchingStartups = await prisma.startup.findMany({
		where,
		select: {
			slug: true,
			name: true,
			icon: true,
			mrr: true,
			marketingChannels: {
				where: filters.channelCategory ? { category: filters.channelCategory } : undefined,
				select: { slug: true, category: true },
			},
		},
	});

	const startupCount = matchingStartups.length;
	const totalChannelImpressions = matchingStartups.reduce(
		(acc, s) => acc + s.marketingChannels.length,
		0,
	);

	const byChannel = new Map<
		string,
		{
			slug: string;
			category: string | null;
			count: number;
			startups: { slug: string; name: string; icon: string | null; mrr: number | null }[];
		}
	>();

	for (const s of matchingStartups) {
		for (const ch of s.marketingChannels) {
			const existing = byChannel.get(ch.slug);
			if (existing) {
				existing.count += 1;
				if (existing.startups.length < 6) {
					existing.startups.push({ slug: s.slug, name: s.name, icon: s.icon, mrr: s.mrr });
				}
			} else {
				byChannel.set(ch.slug, {
					slug: ch.slug,
					category: ch.category,
					count: 1,
					startups: [{ slug: s.slug, name: s.name, icon: s.icon, mrr: s.mrr }],
				});
			}
		}
	}

	const channels = Array.from(byChannel.values())
		.map((c) => ({
			...c,
			percentage: startupCount === 0 ? 0 : (c.count / startupCount) * 100,
		}))
		.sort((a, b) => b.count - a.count);

	return NextResponse.json({
		startupCount,
		totalChannelImpressions,
		channels,
		filters,
	});
}
