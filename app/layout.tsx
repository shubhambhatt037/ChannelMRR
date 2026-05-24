import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { generateSEOMetadata } from "@/lib/seo";

const jetbrains = JetBrains_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = generateSEOMetadata();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body className={`${jetbrains.variable} font-mono antialiased bg-background text-foreground`}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
