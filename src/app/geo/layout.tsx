import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Recommended by ChatGPT & Perplexity | GEO Services | ReddiReach",
  description:
    "79% of consumers use AI for product research. We put your brand in the answers. GEO services for brands, startups, and small businesses.",
  keywords:
    "GEO, generative engine optimization, AI search optimization, ChatGPT marketing, Claude AI, Perplexity SEO, Google AI, AI recommendations, LLM optimization, AI visibility",
  alternates: {
    canonical: "https://reddireach.com/geo",
  },
  openGraph: {
    title: "Get Recommended by ChatGPT & Perplexity | GEO Services | ReddiReach",
    description:
      "79% of consumers use AI for product research. We put your brand in the answers. GEO services for brands, startups, and small businesses.",
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
    title: "Get Recommended by ChatGPT & Perplexity | GEO Services | ReddiReach",
    description:
      "79% of consumers use AI for product research. We put your brand in the answers. GEO services for brands, startups, and small businesses.",
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
