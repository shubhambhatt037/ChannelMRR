import { NextResponse } from "next/server";
import { syncDetailBatch, syncList } from "@/lib/sync";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

function isAuthorized(req: Request) {
	const secret = process.env.CRON_SECRET;
	if (!secret) return false;
	const auth = req.headers.get("authorization");
	return auth === `Bearer ${secret}`;
}

/**
 * Runs each invocation:
 *  - quick `syncList` on the first page (~1 req) to catch newly-added startups
 *  - up to ~15 detail fetches per minute (keeps us inside TrustMRR's 20/min cap)
 *
 * Vercel cron pings this hourly (see vercel.json).
 */
export async function GET(req: Request) {
	if (!isAuthorized(req)) {
		return NextResponse.json({ error: "unauthorized" }, { status: 401 });
	}

	const url = new URL(req.url);
	const mode = url.searchParams.get("mode") ?? "incremental";
	const batchSize = Number(url.searchParams.get("batch") ?? 15);

	if (mode === "list") {
		const result = await syncList();
		return NextResponse.json({ ok: true, mode, result });
	}

	const detail = await syncDetailBatch(batchSize);
	return NextResponse.json({ ok: true, mode, detail });
}
