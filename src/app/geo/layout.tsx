import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Search Optimization (GEO) | ReddiReach",
  description:
    "Get your brand recommended by ChatGPT, Claude, Perplexity, and Google AI. Generative Engine Optimization services for brands, startups, and small businesses.",
  keywords:
    "GEO, generative engine optimization, AI search optimization, ChatGPT marketing, Claude AI, Perplexity SEO, Google AI, AI recommendations, LLM optimization, AI visibility",
  alternates: {
    canonical: "https://reddireach.com/geo",
  },
  openGraph: {
    title: "AI Search Optimization (GEO) | ReddiReach",
    description:
      "Get your brand recommended by ChatGPT, Claude, Perplexity, and Google AI. Dominate AI-powered search with GEO services.",
    type: "website",
    url: "https://reddireach.com/geo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReddiReach GEO - AI Search Optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Optimization (GEO) | ReddiReach",
    description:
      "Get your brand recommended by ChatGPT, Claude, Perplexity, and Google AI. GEO services for brands, startups, and small businesses.",
    images: ["/og-image.png"],
  },
};

export default function GEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
