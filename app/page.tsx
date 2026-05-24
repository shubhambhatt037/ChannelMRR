import ChannelExplorer from "@/components/explorer/ChannelExplorer";
import { Star } from "lucide-react";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<main className="mx-auto max-w-6xl px-6 pt-12 pb-24">
				<header className="text-center mb-12">
					<div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
						<Star className="size-4 fill-primary text-primary" />
						<span className="font-semibold">ChannelMRR</span>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
						The marketing channels
						<br /> behind verified startup revenue
					</h1>
					<p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
						Filter ~7,000 startups from TrustMRR by revenue, market, audience, country or
						founder — see exactly which channels they use, ranked by frequency.
					</p>
				</header>

				<ChannelExplorer />
			</main>
		</div>
	);
}
