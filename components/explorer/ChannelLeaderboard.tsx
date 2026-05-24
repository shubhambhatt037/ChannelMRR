"use client";

import Link from "next/link";
import { channelLabel, formatMrr } from "@/lib/utils";
import type { AggregateResponse } from "./ChannelExplorer";

function CategoryBadge({ category }: { category: string | null }) {
	if (!category) return null;
	const colors: Record<string, string> = {
		social: "bg-blue-500/15 text-blue-400 border-blue-500/30",
		organic: "bg-green-500/15 text-green-400 border-green-500/30",
		community: "bg-purple-500/15 text-purple-400 border-purple-500/30",
		paid: "bg-orange-500/15 text-orange-400 border-orange-500/30",
		other: "bg-gray-500/15 text-gray-400 border-gray-500/30",
	};
	const cls = colors[category] ?? colors.other;
	return (
		<span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border ${cls}`}>
			{category}
		</span>
	);
}

export default function ChannelLeaderboard({
	data,
	loading,
	error,
}: {
	data: AggregateResponse | null;
	loading: boolean;
	error: string | null;
}) {
	if (error) {
		return (
			<div className="py-12 text-center text-destructive">
				<p>Failed to load: {error}</p>
			</div>
		);
	}

	if (loading && !data) {
		return (
			<div className="py-12 text-center text-muted-foreground">
				<p>Loading channels…</p>
			</div>
		);
	}

	if (!data || data.channels.length === 0) {
		return (
			<div className="py-12 text-center text-muted-foreground space-y-2">
				<p>No startups match these filters yet.</p>
				<p className="text-xs">
					Marketing channels are pulled from the TrustMRR API; new startups appear as the sync
					completes.
				</p>
			</div>
		);
	}

	const max = data.channels[0]?.count ?? 1;

	return (
		<div>
			<div className="flex items-baseline justify-between mb-6">
				<div>
					<h2 className="text-lg font-semibold">Marketing channels</h2>
					<p className="text-xs text-muted-foreground mt-1">
						Across <span className="text-foreground">{data.startupCount.toLocaleString()}</span>{" "}
						matching startups
					</p>
				</div>
				<div className="text-xs text-muted-foreground">
					{data.totalChannelImpressions.toLocaleString()} total channel mentions
				</div>
			</div>

			<ol className="space-y-2">
				{data.channels.map((c, i) => {
					const width = Math.max(2, (c.count / max) * 100);
					return (
						<li
							key={c.slug}
							className="rounded-lg border border-border bg-secondary/40 hover:bg-secondary transition group"
						>
							<div className="px-4 py-3 flex items-center gap-4">
								<div className="text-muted-foreground text-sm w-6 tabular-nums">
									{String(i + 1).padStart(2, "0")}
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex items-center gap-2 mb-1.5">
										<span className="font-semibold truncate">{channelLabel(c.slug)}</span>
										<CategoryBadge category={c.category} />
									</div>
									<div className="h-1.5 bg-background rounded-full overflow-hidden">
										<div
											className="h-full bg-primary rounded-full transition-all"
											style={{ width: `${width}%` }}
										/>
									</div>
								</div>
								<div className="text-right">
									<div className="text-sm font-semibold tabular-nums">{c.count}</div>
									<div className="text-[10px] text-muted-foreground tabular-nums">
										{c.percentage.toFixed(1)}%
									</div>
								</div>
							</div>
							{c.startups.length > 0 ? (
								<div className="px-4 pb-3 -mt-1 flex flex-wrap gap-1.5">
									{c.startups.map((s) => (
										<Link
											key={s.slug}
											href={`https://trustmrr.com/startup/${s.slug}`}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-background border border-border text-xs hover:border-primary/50 transition"
										>
											{s.icon ? (
												// eslint-disable-next-line @next/next/no-img-element
												<img src={s.icon} alt="" className="size-4 rounded-sm object-cover" />
											) : null}
											<span className="truncate max-w-[120px]">{s.name}</span>
											{s.mrr != null ? (
												<span className="text-muted-foreground">{formatMrr(s.mrr)}</span>
											) : null}
										</Link>
									))}
								</div>
							) : null}
						</li>
					);
				})}
			</ol>
		</div>
	);
}
