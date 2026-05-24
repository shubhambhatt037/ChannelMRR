/**
 * Spot-check what's in the DB so far.
 * Run: `npx tsx scripts/inspect.ts`
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local", override: true });
loadEnv({ override: true });

import { prisma } from "../lib/db/prisma/client";

async function main() {
	const rows = await prisma.startup.findMany({
		where: { detailFetchedAt: { not: null } },
		select: {
			slug: true,
			name: true,
			rank: true,
			_count: { select: { marketingChannels: true } },
		},
		orderBy: { rank: "asc" },
		take: 100,
	});

	console.table(
		rows.map((s) => ({
			rank: s.rank,
			name: s.name.slice(0, 30),
			channels: s._count.marketingChannels,
		})),
	);

	const totalChannels = await prisma.marketingChannel.count();
	const withChannels = await prisma.startup.count({
		where: { marketingChannels: { some: {} } },
	});
	console.log("");
	console.log(`Startups with ≥1 channel : ${withChannels}`);
	console.log(`Total channel rows       : ${totalChannels}`);
	await prisma.$disconnect();
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
