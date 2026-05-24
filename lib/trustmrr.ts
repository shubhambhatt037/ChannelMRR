// Read env lazily — when this module is imported via `tsx` with dotenv loaded
// at the top of a script, ESM hoists imports above the dotenv.config() call,
// so top-level `process.env.X` reads would happen before .env.local is loaded.
function getBase() {
	return process.env.TRUSTMRR_API_BASE || "https://trustmrr.com/api/v1";
}
function getKey() {
	return process.env.TRUSTMRR_API_KEY || "";
}

export type TrustMrrChannel = { slug: string; category: string | null };

export type TrustMrrListItem = {
	name: string;
	slug: string;
	icon: string | null;
	description: string | null;
	website: string | null;
	country: string | null;
	foundedDate: string | null;
	category: string | null;
	paymentProvider: string | null;
	targetAudience: string | null;
	revenue: { last30Days: number; mrr: number; total: number };
	customers: number;
	activeSubscriptions: number;
	askingPrice: number | null;
	growth30d: number | null;
	growthMRR30d: number | null;
	rank: number | null;
	onSale: boolean;
	xHandle: string | null;
};

export type TrustMrrDetail = TrustMrrListItem & {
	xFollowerCount: number | null;
	techStack: TrustMrrChannel[];
	marketingChannels: TrustMrrChannel[];
	cofounders: { name: string | null }[];
};

async function request<T>(path: string, attempt = 0): Promise<T> {
	const key = getKey();
	if (!key) throw new Error("TRUSTMRR_API_KEY not set");
	const res = await fetch(`${getBase()}${path}`, {
		headers: { Authorization: `Bearer ${key}` },
		cache: "no-store",
	});
	if (res.status === 429 && attempt < 3) {
		// Honor Retry-After if present, otherwise back off ~45s (the upstream
		// window is per-minute) and try again.
		const retryAfter = Number(res.headers.get("retry-after")) || 45;
		console.warn(`[trustmrr] 429 on ${path}, backing off ${retryAfter}s (attempt ${attempt + 1}/3)`);
		await new Promise((r) => setTimeout(r, retryAfter * 1000));
		return request<T>(path, attempt + 1);
	}
	if (!res.ok) {
		const body = await res.text().catch(() => "");
		throw new Error(`TrustMRR ${res.status}: ${body.slice(0, 200)}`);
	}
	return res.json();
}

export async function listStartups(page: number, limit = 50) {
	return request<{
		data: TrustMrrListItem[];
		meta: { total: number; page: number; limit: number; hasMore: boolean };
	}>(`/startups?page=${page}&limit=${limit}`);
}

export async function getStartup(slug: string) {
	return request<{ data: TrustMrrDetail }>(`/startups/${slug}`);
}

export const RATE_LIMIT_PER_MIN = 20;
// 60000 / 20 = 3000ms minimum. +500ms padding because the upstream's sliding
// window is strict — we were hitting 429s with smaller padding.
export const SAFE_INTERVAL_MS = Math.ceil(60_000 / RATE_LIMIT_PER_MIN) + 500;

export function sleep(ms: number) {
	return new Promise((r) => setTimeout(r, ms));
}
