import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma/client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * Returns the distinct values used to populate filter dropdowns.
 * Cached for 5 minutes to avoid hammering the DB on every page load.
 */
export async function GET() {
	const [categories, audiences, countries, channels, founders, syncState] = await Promise.all([
		prisma.startup.groupBy({
			by: ["category"],
			where: { category: { not: null }, detailFetchedAt: { not: null } },
			_count: { _all: true },
			orderBy: { _count: { category: "desc" } },
		}),
		prisma.startup.groupBy({
			by: ["targetAudience"],
			where: { targetAudience: { not: null }, detailFetchedAt: { not: null } },
			_count: { _all: true },
			orderBy: { _count: { targetAudience: "desc" } },
		}),
		prisma.startup.groupBy({
			by: ["country"],
			where: { country: { not: null }, detailFetchedAt: { not: null } },
			_count: { _all: true },
			orderBy: { _count: { country: "desc" } },
		}),
		prisma.marketingChannel.groupBy({
			by: ["category"],
			where: { category: { not: null } },
			_count: { _all: true },
		}),
		prisma.startup.groupBy({
			by: ["xHandle"],
			where: { xHandle: { not: null }, detailFetchedAt: { not: null } },
			_count: { _all: true },
			orderBy: { _count: { xHandle: "desc" } },
			take: 200,
		}),
		prisma.syncState.findUnique({ where: { id: "singleton" } }),
	]);

	return NextResponse.json({
		categories: categories.map((c) => ({ value: c.category, count: c._count._all })),
		audiences: audiences.map((c) => ({ value: c.targetAudience, count: c._count._all })),
		countries: countries.map((c) => ({ value: c.country, count: c._count._all })),
		channelCategories: channels.map((c) => ({ value: c.category, count: c._count._all })),
		founders: founders.map((c) => ({ value: c.xHandle, count: c._count._all })),
		sync: syncState,
	});
}
