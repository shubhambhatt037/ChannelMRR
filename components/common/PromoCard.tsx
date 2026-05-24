import { ArrowRight, Sparkles } from "lucide-react";

export default function PromoCard() {
	return (
		<a
			href="https://ideafast.pro?utm_source=channelmrr&utm_medium=promocard"
			target="_blank"
			rel="noopener"
			className="block rounded-xl border border-border bg-gradient-to-br from-primary/10 via-card to-card hover:from-primary/15 transition group"
		>
			<div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
				<div className="size-12 shrink-0 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
					<Sparkles className="size-6 text-primary" />
				</div>

				<div className="flex-1 min-w-0">
					<div className="flex items-center gap-2 mb-1.5">
						<span className="text-xs uppercase tracking-wider text-primary font-semibold">
							From the same maker
						</span>
					</div>
					<h3 className="text-lg md:text-xl font-bold leading-tight">
						Don't have an idea yet? Find one you're actually built to solve.
					</h3>
					<p className="text-sm text-muted-foreground mt-2 leading-relaxed">
						IdeaFast matches your skills and interests to real problems people
						are complaining about — on Reddit and across public forums. Stop
						guessing what to build.
					</p>
				</div>

				<div className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm group-hover:gap-2.5 transition-all">
					Try IdeaFast
					<ArrowRight className="size-4" />
				</div>
			</div>
		</a>
	);
}
