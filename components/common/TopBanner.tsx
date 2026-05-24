import { ArrowRight, Sparkles } from "lucide-react";

export default function TopBanner() {
	return (
		<a
			href="https://www.ideafast.pro/?utm_source=channelmrr&utm_medium=topbanner"
			target="_blank"
			rel="noopener noreferrer"
			className="block w-full bg-primary/15 border-b border-primary/30 hover:bg-primary/20 transition group"
		>
			<div className="mx-auto max-w-6xl px-6 py-2.5 flex items-center justify-center gap-2 text-sm">
				<Sparkles className="size-3.5 text-primary" />
				<span className="text-foreground">
					Still looking for what to build?{" "}
					<span className="font-semibold text-primary">IdeaFast</span> finds{" "}
					<span className="font-semibold">startup ideas you're built to solve</span>
				</span>
				<ArrowRight className="size-3.5 text-primary group-hover:translate-x-0.5 transition" />
			</div>
		</a>
	);
}
