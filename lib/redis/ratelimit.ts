import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let redis: Redis | null = null;
function getRedis() {
	if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
		return null;
	}
	if (!redis) redis = Redis.fromEnv();
	return redis;
}

let apiLimiter: Ratelimit | null = null;
function getApiLimiter() {
	const r = getRedis();
	if (!r) return null;
	if (!apiLimiter) {
		apiLimiter = new Ratelimit({
			redis: r,
			limiter: Ratelimit.slidingWindow(60, "60 s"),
			analytics: true,
			prefix: "rl:api",
		});
	}
	return apiLimiter;
}

export async function enforceApiRateLimit(identifier: string): Promise<{
	ok: boolean;
	limit: number;
	remaining: number;
	reset: number;
}> {
	const limiter = getApiLimiter();
	if (!limiter) {
		return { ok: true, limit: 0, remaining: 0, reset: 0 };
	}
	const { success, limit, remaining, reset } = await limiter.limit(identifier);
	return { ok: success, limit, remaining, reset };
}

export function getClientIdentifier(req: Request): string {
	const fwd = req.headers.get("x-forwarded-for");
	if (fwd) return fwd.split(",")[0].trim();
	const real = req.headers.get("x-real-ip");
	if (real) return real;
	return "anonymous";
}
