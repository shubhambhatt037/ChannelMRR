/**
 * One-time seed: pulls the full TrustMRR startup directory + marketing-channel
 * detail for each. Honors the 20 req/min API rate limit.
 *
 *   npm run seed
 *   npm run seed -- --details-only
 *   npm run seed -- --limit=200
 *
 * Safe to re-run: upserts on slug, only re-fetches details older than 7 days
 * (or missing). Survives Neon connection drops with retry/backoff.
 */
import { config as loadEnv } from "dotenv";
// `override: true` makes values from .env.local win over any pre-existing
// shell env vars (e.g. a stale `export TRUSTMRR_API_KEY=""` in ~/.zshrc).
const r1 = loadEnv({ path: ".env.local", override: true });
const r2 = loadEnv({ override: true });
console.log(
	"[seed] dotenv .env.local parsed:",
	r1.parsed ? Object.keys(r1.parsed).length : "none",
);
console.log(
	"[seed] dotenv .env parsed:",
	r2.parsed ? Object.keys(r2.parsed).length : "none",
);
console.log(
	"[seed] process.env.TRUSTMRR_API_KEY at start:",
	process.env.TRUSTMRR_API_KEY ? `set (${process.env.TRUSTMRR_API_KEY.slice(0, 8)}…)` : "EMPTY",
);
console.log(
	"[seed] process.env.DATABASE_URL at start:",
	process.env.DATABASE_URL ? "set" : "EMPTY",
);

import { syncDetailBatch, syncList } from "../lib/sync";

async function main() {
	const detailsOnly = process.argv.includes("--details-only");
	const random = process.argv.includes("--random");
	const limitArg = process.argv.find((a) => a.startsWith("--limit="));
	const limit = limitArg ? Number(limitArg.split("=")[1]) : Number.POSITIVE_INFINITY;

	if (!process.env.DATABASE_URL) {
		console.error("[seed] DATABASE_URL not set (checked .env.local and env)");
		process.exit(1);
	}
	if (!process.env.TRUSTMRR_API_KEY) {
		console.error("[seed] TRUSTMRR_API_KEY not set");
		process.exit(1);
	}

	if (!detailsOnly) {
		console.log("[seed] syncing startup list…");
		const { total, processed } = await syncList({
			onProgress: (p, t) => console.log(`  list: ${p}/${t}`),
		});
		console.log(`[seed] list done: ${processed}/${total}`);
	}

	console.log("[seed] syncing details (this can take hours due to 20 req/min cap)…");
	let totalProcessed = 0;
	const batchSize = 50;
	while (totalProcessed < limit) {
		const batch = Math.min(batchSize, limit - totalProcessed);
		const res = await syncDetailBatch(batch, 0, { random });
		totalProcessed += res.processed;
		console.log(
			`  details: +${res.processed} (errors: ${res.errors.length}) — running total ${totalProcessed}`,
		);
		if (res.errors.length > 0) {
			// Surface up to 3 distinct error messages so we can see what's actually failing
			const seen = new Set<string>();
			for (const e of res.errors) {
				if (seen.has(e.error)) continue;
				seen.add(e.error);
				console.log(`    ↳ error on ${e.slug}: ${e.error}`);
				if (seen.size >= 3) break;
			}
		}
		if (res.attempted === 0) {
			console.log("[seed] no more pending startups.");
			break;
		}
	}
	console.log(`[seed] done. ${totalProcessed} details fetched.`);
	process.exit(0);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
