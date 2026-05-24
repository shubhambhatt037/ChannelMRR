/**
 * Quick progress check: how many startups have we ingested marketing-channel
 * data for? Run: `npm run status`.
 */
import { config as loadEnv } from "dotenv";
loadEnv({ path: ".env.local", override: true });
loadEnv({ override: true });

import { prisma } from "../lib/db/prisma/client";

async function main() {
	const [done, pending, totalChannels, syncState] = await Promise.all([
		prisma.startup.count({ where: { detailFetchedAt: { not: null } } }),
		prisma.startup.count({ where: { detailFetchedAt: null } }),
		prisma.marketingChannel.count(),
		prisma.syncState.findUnique({ where: { id: "singleton" } }),
	]);
	const total = done + pending;
	const pct = total === 0 ? 0 : ((done / total) * 100).toFixed(1);
	const remainingMinutes = Math.ceil((pending * 3.2) / 60);

	console.log("");
	console.log(`Startups indexed   : ${done.toLocaleString()} / ${total.toLocaleString()} (${pct}%)`);
	console.log(`Still pending      : ${pending.toLocaleString()}`);
	console.log(`Channel rows total : ${totalChannels.toLocaleString()}`);
	console.log(`ETA at 20 req/min  : ~${remainingMinutes} minutes`);
	if (syncState?.lastDetailSyncAt) {
		console.log(`Last detail sync   : ${syncState.lastDetailSyncAt.toISOString()}`);
	}
	if (syncState?.lastListSyncAt) {
		console.log(`Last list sync     : ${syncState.lastListSyncAt.toISOString()}`);
	}
	console.log("");

	await prisma.$disconnect();
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
