import { z } from "zod";
import type { Prisma } from "../prisma/generated/prisma";

export const FilterSchema = z.object({
	minMrr: z.coerce.number().nonnegative().optional(),
	maxMrr: z.coerce.number().nonnegative().optional(),
	categories: z.array(z.string()).optional(),
	audiences: z.array(z.string()).optional(),
	countries: z.array(z.string()).optional(),
	founder: z.string().optional(),
	channelCategory: z.string().optional(),
});
export type FilterInput = z.infer<typeof FilterSchema>;

export function parseFiltersFromSearchParams(sp: URLSearchParams): FilterInput {
	const arr = (k: string) => {
		const v = sp.getAll(k);
		if (v.length === 0) return undefined;
		if (v.length === 1 && v[0].includes(",")) return v[0].split(",").map((s) => s.trim()).filter(Boolean);
		return v;
	};
	return FilterSchema.parse({
		minMrr: sp.get("minMrr") ?? undefined,
		maxMrr: sp.get("maxMrr") ?? undefined,
		categories: arr("category"),
		audiences: arr("audience"),
		countries: arr("country"),
		founder: sp.get("founder") ?? undefined,
		channelCategory: sp.get("channelCategory") ?? undefined,
	});
}

export function buildStartupWhere(f: FilterInput): Prisma.StartupWhereInput {
	const where: Prisma.StartupWhereInput = {};
	if (f.minMrr != null || f.maxMrr != null) {
		where.mrr = {};
		if (f.minMrr != null) where.mrr.gte = f.minMrr;
		if (f.maxMrr != null) where.mrr.lte = f.maxMrr;
	}
	if (f.categories?.length) where.category = { in: f.categories };
	if (f.audiences?.length) where.targetAudience = { in: f.audiences };
	if (f.countries?.length) where.country = { in: f.countries };
	if (f.founder) where.xHandle = { equals: f.founder, mode: "insensitive" };
	// Only consider startups whose detail has been fetched so channel data is meaningful
	where.detailFetchedAt = { not: null };
	return where;
}
