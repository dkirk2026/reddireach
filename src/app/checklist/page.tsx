import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChecklistClient from "./ChecklistClient";

export const metadata: Metadata = {
  title: "AI Search Optimization Checklist | ReddiReach",
  description:
    "35 actionable items to help your brand get discovered, cited, and recommended by AI search tools like ChatGPT, Claude, Perplexity, and Google AI.",
  alternates: {
    canonical: "https://reddireach.com/checklist",
  },
  openGraph: {
    title: "AI Search Optimization Checklist | ReddiReach",
    description:
      "35 actionable items to help your brand get discovered and recommended by AI search tools.",
    url: "https://reddireach.com/checklist",
    type: "website",
    images: [
      {
        url: "https://reddireach.com/og-checklist.png",
        width: 1200,
        height: 630,
        alt: "AI Search Optimization Checklist — 35 items to get your brand recommended by AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Optimization Checklist | ReddiReach",
    description:
      "35 actionable items to help your brand get discovered and recommended by AI search tools.",
    images: ["https://reddireach.com/og-checklist.png"],
  },
};

const checklistSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "AI Search Optimization Checklist",
  description:
    "35 actionable items to help your brand get discovered, cited, and recommended by AI search tools like ChatGPT, Claude, Perplexity, and Google AI.",
  step: [
    {
      "@type": "HowToSection",
      name: "AI Crawler Access",
      itemListElement: [
        { "@type": "HowToStep", text: "Ensure robots.txt allows AI crawlers" },
        { "@type": "HowToStep", text: "Check no CDN/firewall rules block AI bots" },
        { "@type": "HowToStep", text: "Add llms.txt file with AI-friendly site description" },
        { "@type": "HowToStep", text: "Submit and verify sitemap accessibility" },
      ],
    },
    {
      "@type": "HowToSection",
      name: "Website Foundations",
      itemListElement: [
        { "@type": "HowToStep", text: "Ensure pages load in under 3 seconds" },
        { "@type": "HowToStep", text: "Use semantic HTML (header, nav, main, footer)" },
        { "@type": "HowToStep", text: "Make content real text, not images or heavy JS" },
        { "@type": "HowToStep", text: "Implement mobile-responsive design" },
        { "@type": "HowToStep", text: "Enable SSL/HTTPS on all pages" },
      ],
    },
    {
      "@type": "HowToSection",
      name: "Structured Data & Schema",
      itemListElement: [
        { "@type": "HowToStep", text: "Add Organization schema on homepage" },
        { "@type": "HowToStep", text: "Add FAQ schema on relevant pages" },
        { "@type": "HowToStep", text: "Add Product/Service schema where applicable" },
        { "@type": "HowToStep", text: "Add Breadcrumb schema for navigation" },
      ],
    },
    {
      "@type": "HowToSection",
      name: "Brand Authority Signals",
      itemListElement: [
        { "@type": "HowToStep", text: "Create detailed About page with team info" },
        { "@type": "HowToStep", text: "Display clear contact info and address" },
        { "@type": "HowToStep", text: "Add customer testimonials and case studies" },
        { "@type": "HowToStep", text: "List credentials, certifications, or awards" },
        { "@type": "HowToStep", text: "Keep consistent brand name across pages" },
      ],
    },
    {
      "@type": "HowToSection",
      name: "Content for AI Consumption",
      itemListElement: [
        { "@type": "HowToStep", text: "Lead with the answer first (BLUF)" },
        { "@type": "HowToStep", text: "Use clear heading hierarchy (H1, H2, H3)" },
        { "@type": "HowToStep", text: "Write short paragraphs (2-3 sentences)" },
        { "@type": "HowToStep", text: "Include statistics and cited sources" },
        { "@type": "HowToStep", text: "Answer specific audience questions" },
        { "@type": "HowToStep", text: "Update key pages quarterly" },
      ],
    },
    {
      "@type": "HowToSection",
      name: "Off-Site Presence & Mentions",
      itemListElement: [
        { "@type": "HowToStep", text: "Get brand mentioned in Reddit discussions" },
        { "@type": "HowToStep", text: "List on review platforms (G2, Capterra, Trustpilot)" },
        { "@type": "HowToStep", text: "Get featured in best-of or comparison articles" },
        { "@type": "HowToStep", text: "Participate in industry communities and forums" },
        { "@type": "HowToStep", text: "Ensure consistent NAP across directories" },
        { "@type": "HowToStep", text: "Create YouTube/video content about brand" },
      ],
    },
    {
      "@type": "HowToSection",
      name: "Tracking & Measurement",
      itemListElement: [
        { "@type": "HowToStep", text: "Monitor AI referral traffic in analytics" },
        { "@type": "HowToStep", text: "Test brand mentions in AI chat tools regularly" },
        { "@type": "HowToStep", text: "Track branded search volume trends" },
        { "@type": "HowToStep", text: "Set up and monitor Google Search Console" },
        { "@type": "HowToStep", text: "Add post-purchase 'how did you hear about us?' survey" },
      ],
    },
  ],
};

export default function ChecklistPage() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(checklistSchema) }}
      />
      <ChecklistClient />
      <Footer />
    </>
  );
}
