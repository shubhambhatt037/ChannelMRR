"use client";

import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Facets } from "./ChannelExplorer";

export type Filters = {
	minMrr: number | "" | undefined;
	maxMrr: number | "" | undefined;
	categories: string[];
	audiences: string[];
	countries: string[];
	founder: string;
	channelCategory: string;
};

const REVENUE_PRESETS: { label: string; min?: number; max?: number }[] = [
	{ label: "Any revenue" },
	{ label: "$0 – $500", min: 0, max: 500 },
	{ label: "$500 – $1k", min: 500, max: 1000 },
	{ label: "$1k – $10k", min: 1000, max: 10000 },
	{ label: "$10k – $100k", min: 10000, max: 100000 },
	{ label: "$100k+", min: 100000 },
];

function MultiSelect({
	label,
	options,
	values,
	onChange,
}: {
	label: string;
	options: { value: string; count: number }[];
	values: string[];
	onChange: (v: string[]) => void;
}) {
	const [open, setOpen] = useState(false);
	const [q, setQ] = useState("");
	const filtered = options
		.filter((o) => o.value.toLowerCase().includes(q.toLowerCase()))
		.slice(0, 200);

	const toggle = (v: string) => {
		if (values.includes(v)) onChange(values.filter((x) => x !== v));
		else onChange([...values, v]);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<button
					type="button"
					className="flex items-center gap-2 px-3 py-2 rounded-md bg-secondary border border-border text-sm hover:bg-accent transition"
				>
					<span className="text-muted-foreground">{label}</span>
					{values.length > 0 ? (
						<span className="px-1.5 py-0.5 rounded bg-primary/20 text-primary text-xs font-medium">
							{values.length}
						</span>
					) : null}
					<ChevronDown className="size-3.5 text-muted-foreground" />
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-72 p-0 bg-popover border-border" align="start">
				<div className="p-2 border-b border-border">
					<Input
						placeholder={`Search ${label.toLowerCase()}…`}
						value={q}
						onChange={(e) => setQ(e.target.value)}
						className="h-8 bg-secondary border-border"
					/>
				</div>
				<div className="max-h-72 overflow-y-auto py-1">
					{filtered.length === 0 ? (
						<div className="px-3 py-4 text-xs text-muted-foreground text-center">No matches</div>
					) : (
						filtered.map((o) => {
							const checked = values.includes(o.value);
							return (
								<button
									type="button"
									key={o.value}
									onClick={() => toggle(o.value)}
									className={cn(
										"w-full flex items-center justify-between px-3 py-1.5 text-sm hover:bg-accent",
										checked && "bg-accent/50",
									)}
								>
									<span className="flex items-center gap-2">
										<span
											className={cn(
												"size-4 rounded border border-border flex items-center justify-center",
												checked && "bg-primary border-primary",
											)}
										>
											{checked ? <Check className="size-3 text-primary-foreground" /> : null}
										</span>
										<span className="truncate max-w-[150px]">{o.value}</span>
									</span>
									<span className="text-xs text-muted-foreground">{o.count}</span>
								</button>
							);
						})
					)}
				</div>
				{values.length > 0 ? (
					<div className="p-2 border-t border-border">
						<button
							type="button"
							onClick={() => onChange([])}
							className="w-full text-xs text-muted-foreground hover:text-foreground"
						>
							Clear
						</button>
					</div>
				) : null}
			</PopoverContent>
		</Popover>
	);
}

function RevenueRange({
	min,
	max,
	onChange,
}: {
	min: number | "" | undefined;
	max: number | "" | undefined;
	onChange: (min: number | "" | undefined, max: number | "" | undefined) => void;
}) {
	const [open, setOpen] = useState(false);

	const activePreset = REVENUE_PRESETS.find((p) => p.min === min && p.max === max);
	const label = activePreset?.label ?? (min || max ? `$${min ?? "0"} – $${max ?? "∞"}` : "Any revenue");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<button
					type="button"
					className="flex items-center gap-2 px-3 py-2 rounded-md bg-secondary border border-border text-sm hover:bg-accent transition"
				>
					<span className="text-muted-foreground">MRR:</span>
					<span>{label}</span>
					<ChevronDown className="size-3.5 text-muted-foreground" />
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-72 p-2 bg-popover border-border" align="start">
				<div className="flex flex-col gap-1">
					{REVENUE_PRESETS.map((p) => {
						const isActive = p.min === min && p.max === max;
						return (
							<button
								type="button"
								key={p.label}
								onClick={() => {
									onChange(p.min ?? "", p.max ?? "");
									setOpen(false);
								}}
								className={cn(
									"text-left px-2 py-1.5 rounded text-sm hover:bg-accent",
									isActive && "bg-accent",
								)}
							>
								{p.label}
							</button>
						);
					})}
				</div>
				<div className="mt-2 pt-2 border-t border-border">
					<div className="text-xs text-muted-foreground mb-2">Custom</div>
					<div className="flex gap-2">
						<Input
							type="number"
							placeholder="Min"
							value={min ?? ""}
							onChange={(e) => onChange(e.target.value === "" ? "" : Number(e.target.value), max)}
							className="h-8 bg-secondary border-border"
						/>
						<Input
							type="number"
							placeholder="Max"
							value={max ?? ""}
							onChange={(e) => onChange(min, e.target.value === "" ? "" : Number(e.target.value))}
							className="h-8 bg-secondary border-border"
						/>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}

export default function FilterBar({
	facets,
	value,
	onChange,
	onReset,
}: {
	facets: Facets | null;
	value: Filters;
	onChange: (f: Filters) => void;
	onReset: () => void;
}) {
	const hasAny =
		value.minMrr ||
		value.maxMrr ||
		value.categories.length ||
		value.audiences.length ||
		value.countries.length ||
		value.founder ||
		value.channelCategory;

	return (
		<div className="rounded-xl border border-border bg-card p-4">
			<div className="flex flex-wrap gap-2 items-center">
				<RevenueRange
					min={value.minMrr}
					max={value.maxMrr}
					onChange={(min, max) => onChange({ ...value, minMrr: min, maxMrr: max })}
				/>
				<MultiSelect
					label="Market"
					options={facets?.categories ?? []}
					values={value.categories}
					onChange={(v) => onChange({ ...value, categories: v })}
				/>
				<MultiSelect
					label="Audience"
					options={facets?.audiences ?? []}
					values={value.audiences}
					onChange={(v) => onChange({ ...value, audiences: v })}
				/>
				<MultiSelect
					label="Country"
					options={facets?.countries ?? []}
					values={value.countries}
					onChange={(v) => onChange({ ...value, countries: v })}
				/>
				<MultiSelect
					label="Founder"
					options={facets?.founders ?? []}
					values={value.founder ? [value.founder] : []}
					onChange={(v) => onChange({ ...value, founder: v[0] ?? "" })}
				/>
				<MultiSelect
					label="Channel type"
					options={facets?.channelCategories ?? []}
					values={value.channelCategory ? [value.channelCategory] : []}
					onChange={(v) => onChange({ ...value, channelCategory: v[0] ?? "" })}
				/>

				{hasAny ? (
					<Button
						variant="ghost"
						size="sm"
						onClick={onReset}
						className="ml-auto text-muted-foreground hover:text-foreground"
					>
						<X className="size-3.5 mr-1" /> Reset
					</Button>
				) : null}
			</div>
		</div>
	);
}
