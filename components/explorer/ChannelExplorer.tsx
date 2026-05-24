"use client";

import { useEffect, useMemo, useState } from "react";
import FilterBar, { type Filters } from "./FilterBar";
import ChannelLeaderboard from "./ChannelLeaderboard";

export type Facet = { value: string; count: number };

export type Facets = {
	categories: Facet[];
	audiences: Facet[];
	countries: Facet[];
	channelCategories: Facet[];
	founders: Facet[];
	sync: {
		lastListSyncAt: string | null;
		lastDetailSyncAt: string | null;
		totalStartups: number;
		detailsFetched: number;
	} | null;
};

export type AggregateResponse = {
	startupCount: number;
	totalChannelImpressions: number;
	channels: {
		slug: string;
		category: string | null;
		count: number;
		percentage: number;
		startups: { slug: string; name: string; icon: string | null; mrr: number | null }[];
	}[];
};

const DEFAULT_FILTERS: Filters = {
	minMrr: undefined,
	maxMrr: undefined,
	categories: [],
	audiences: [],
	countries: [],
	founder: "",
	channelCategory: "",
};

function filtersToQuery(f: Filters) {
	const p = new URLSearchParams();
	if (f.minMrr != null && f.minMrr !== "") p.set("minMrr", String(f.minMrr));
	if (f.maxMrr != null && f.maxMrr !== "") p.set("maxMrr", String(f.maxMrr));
	if (f.categories.length) p.set("category", f.categories.join(","));
	if (f.audiences.length) p.set("audience", f.audiences.join(","));
	if (f.countries.length) p.set("country", f.countries.join(","));
	if (f.founder) p.set("founder", f.founder);
	if (f.channelCategory) p.set("channelCategory", f.channelCategory);
	return p.toString();
}

export default function ChannelExplorer() {
	const [facets, setFacets] = useState<Facets | null>(null);
	const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
	const [data, setData] = useState<AggregateResponse | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("/api/facets")
			.then((r) => r.json())
			.then(setFacets)
			.catch((e) => setError(String(e)));
	}, []);

	const query = useMemo(() => filtersToQuery(filters), [filters]);

	useEffect(() => {
		let abort = false;
		setLoading(true);
		setError(null);
		fetch(`/api/channels/aggregate?${query}`)
			.then(async (r) => {
				if (!r.ok) {
					const body = await r.json().catch(() => ({}));
					throw new Error(body.error || `HTTP ${r.status}`);
				}
				return r.json();
			})
			.then((json) => {
				if (!abort) setData(json);
			})
			.catch((e) => {
				if (!abort) setError(e.message || String(e));
			})
			.finally(() => {
				if (!abort) setLoading(false);
			});
		return () => {
			abort = true;
		};
	}, [query]);

	return (
		<div className="space-y-6">
			<FilterBar
				facets={facets}
				value={filters}
				onChange={setFilters}
				onReset={() => setFilters(DEFAULT_FILTERS)}
			/>

			<div className="rounded-xl border border-border bg-card p-6">
				<ChannelLeaderboard data={data} loading={loading} error={error} />
			</div>

			{facets?.sync ? (
				<p className="text-xs text-muted-foreground text-center">
					{facets.sync.detailsFetched.toLocaleString()} of{" "}
					{facets.sync.totalStartups.toLocaleString()} startups indexed with marketing-channel
					data
					{facets.sync.lastDetailSyncAt
						? ` · last refresh ${new Date(facets.sync.lastDetailSyncAt).toLocaleString()}`
						: ""}
				</p>
			) : null}
		</div>
	);
}
