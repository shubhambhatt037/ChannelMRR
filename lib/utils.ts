import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatCompactNumber(n: number) {
	if (!Number.isFinite(n)) return "—";
	const abs = Math.abs(n);
	if (abs >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
	if (abs >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
	if (abs >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
	return `${Math.round(n)}`;
}

export function formatMrr(n: number | null | undefined) {
	if (n == null) return "—";
	return `$${formatCompactNumber(n)}`;
}

export function channelLabel(slug: string) {
	return slug
		.split("-")
		.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
		.join(" ");
}
