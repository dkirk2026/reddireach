"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ScoreChecker from "@/components/ScoreChecker";

type Difficulty = "Quick Win" | "Medium" | "Advanced";

interface ChecklistItem {
  id: string;
  title: string;
  why: string;
  difficulty: Difficulty;
}

interface ChecklistSection {
  id: string;
  title: string;
  items: ChecklistItem[];
}

const sections: ChecklistSection[] = [
  {
    id: "ai-crawler-access",
    title: "AI Crawler Access",
    items: [
      {
        id: "robots-txt",
        title: "robots.txt allows AI crawlers",
        why: "AI models like GPTBot, ClaudeBot, and PerplexityBot check your robots.txt before indexing. Blocking them means your content never enters AI training data or retrieval systems.",
        difficulty: "Quick Win",
      },
      {
        id: "cdn-firewall",
        title: "No CDN/firewall rules blocking AI bots",
        why: "Cloudflare, Sucuri, and other WAFs sometimes block AI crawlers by default. If the bot can't reach your pages, AI can't recommend you.",
        difficulty: "Medium",
      },
      {
        id: "llms-txt",
        title: "llms.txt file with AI-friendly site description",
        why: "An llms.txt file gives AI models a concise, structured summary of your brand, services, and key pages — like a cheat sheet for LLMs.",
        difficulty: "Quick Win",
      },
      {
        id: "sitemap-accessible",
        title: "Sitemap submitted and accessible",
        why: "AI crawlers use your sitemap to discover and prioritize pages. A missing or broken sitemap means important content gets missed.",
        difficulty: "Quick Win",
      },
    ],
  },
  {
    id: "website-foundations",
    title: "Website Foundations",
    items: [
      {
        id: "page-speed",
        title: "Pages load in under 3 seconds",
        why: "Slow pages get crawled less frequently and may be deprioritized by AI systems that factor in page quality signals.",
        difficulty: "Medium",
      },
      {
        id: "semantic-html",
        title: "Semantic HTML (header, nav, main, footer)",
        why: "AI models parse HTML structure to understand content hierarchy. Semantic tags help them distinguish your main content from navigation and boilerplate.",
        difficulty: "Medium",
      },
      {
        id: "real-text",
        title: "Content is real text, not in images/iframes/heavy JS",
        why: "AI crawlers can't read text embedded in images or rendered only via JavaScript. If your content isn't in the HTML, it doesn't exist to AI.",
        difficulty: "Medium",
      },
      {
        id: "mobile-responsive",
        title: "Mobile-responsive design",
        why: "Google's mobile-first indexing affects the data AI models train on. A poor mobile experience can reduce your visibility across the board.",
        difficulty: "Medium",
      },
      {
        id: "ssl-https",
        title: "SSL/HTTPS on all pages",
        why: "HTTPS is a basic trust signal. AI models trained on web data may deprioritize or skip insecure pages entirely.",
        difficulty: "Quick Win",
      },
    ],
  },
  {
    id: "structured-data",
    title: "Structured Data & Schema",
    items: [
      {
        id: "org-schema",
        title: "Organization schema on homepage",
        why: "Organization schema tells AI exactly who you are, what you do, and how to categorize your brand. It's the foundation of entity recognition.",
        difficulty: "Medium",
      },
      {
        id: "faq-schema",
        title: "FAQ schema on relevant pages",
        why: "FAQ schema presents your answers in a structured Q&A format that AI models can directly extract and cite in responses.",
        difficulty: "Medium",
      },
      {
        id: "product-service-schema",
        title: "Product/Service schema where applicable",
        why: "When someone asks AI 'What does [brand] offer?', product and service schema provides the structured data for a complete, accurate answer.",
        difficulty: "Advanced",
      },
      {
        id: "breadcrumb-schema",
        title: "Breadcrumb schema for navigation",
        why: "Breadcrumbs help AI models understand your site hierarchy and how pages relate to each other, improving context for every page.",
        difficulty: "Quick Win",
      },
    ],
  },
  {
    id: "brand-authority",
    title: "Brand Authority Signals",
    items: [
      {
        id: "about-page",
        title: "Detailed About page with team/founder info",
        why: "AI models assess E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). A detailed About page with real people builds entity authority.",
        difficulty: "Medium",
      },
      {
        id: "contact-info",
        title: "Clear contact info and address",
        why: "Verifiable contact information is a trust signal that helps AI models confirm your business is legitimate and established.",
        difficulty: "Quick Win",
      },
      {
        id: "testimonials-cases",
        title: "Customer testimonials and case studies",
        why: "Social proof on your site gives AI models evidence of your track record, making them more confident recommending you.",
        difficulty: "Medium",
      },
      {
        id: "credentials",
        title: "Credentials, certifications, or awards listed",
        why: "Third-party validation signals expertise. AI models weigh these authority markers when deciding which brands to recommend.",
        difficulty: "Quick Win",
      },
      {
        id: "consistent-brand",
        title: "Consistent brand name and messaging across pages",
        why: "Inconsistent naming confuses AI entity recognition. If your brand appears differently across pages, AI may not connect them as one entity.",
        difficulty: "Quick Win",
      },
    ],
  },
  {
    id: "content-ai",
    title: "Content for AI Consumption",
    items: [
      {
        id: "bluf",
        title: "Lead with the answer first (BLUF)",
        why: "AI models extract answers from the beginning of content. Burying the answer below intros and filler means it may never get cited.",
        difficulty: "Quick Win",
      },
      {
        id: "heading-hierarchy",
        title: "Clear heading hierarchy (H1 → H2 → H3)",
        why: "Proper heading structure helps AI models parse your content into logical sections, making it easier to extract relevant answers.",
        difficulty: "Quick Win",
      },
      {
        id: "short-paragraphs",
        title: "Short paragraphs (2-3 sentences)",
        why: "AI models work best with concise, digestible chunks. Long paragraphs make it harder to extract clean, quotable answers.",
        difficulty: "Quick Win",
      },
      {
        id: "stats-sources",
        title: "Statistics, data points, cited sources",
        why: "AI models prefer citing content backed by data. Pages with specific numbers and sources are treated as more authoritative.",
        difficulty: "Medium",
      },
      {
        id: "audience-questions",
        title: "Answer specific audience questions",
        why: "AI search is question-driven. Content that directly answers the questions your audience asks is exactly what AI models look for.",
        difficulty: "Medium",
      },
      {
        id: "update-quarterly",
        title: "Update key pages quarterly",
        why: "AI models factor in content freshness. Stale pages lose authority over time as newer, more relevant content enters the training data.",
        difficulty: "Medium",
      },
    ],
  },
  {
    id: "off-site",
    title: "Off-Site Presence & Mentions",
    items: [
      {
        id: "reddit-mentions",
        title: "Brand mentioned in Reddit discussions",
        why: "Reddit is one of the primary sources AI models reference for authentic recommendations. Positive Reddit mentions directly influence AI suggestions.",
        difficulty: "Advanced",
      },
      {
        id: "review-platforms",
        title: "Listed on review platforms (G2, Capterra, Trustpilot)",
        why: "Review platforms are high-authority sources AI models pull from. Having a presence with real reviews builds the citation network AI relies on.",
        difficulty: "Medium",
      },
      {
        id: "best-of-articles",
        title: 'Featured in "best of" or comparison articles',
        why: "Listicles and comparison posts are exactly the format AI models draw from when generating recommendations. Being included means being recommended.",
        difficulty: "Advanced",
      },
      {
        id: "community-active",
        title: "Active in industry communities/forums",
        why: "Community participation creates authentic brand mentions across the web — the kind of organic signals AI models trust most.",
        difficulty: "Advanced",
      },
      {
        id: "nap-consistent",
        title: "Consistent NAP across directories",
        why: "Name, Address, Phone consistency across directories helps AI models build a complete, accurate entity profile for your business.",
        difficulty: "Medium",
      },
      {
        id: "video-content",
        title: "YouTube/video content about brand",
        why: "YouTube transcripts are indexed by AI models. Video content creates another surface for your brand to appear in AI-generated answers.",
        difficulty: "Advanced",
      },
    ],
  },
  {
    id: "tracking",
    title: "Tracking & Measurement",
    items: [
      {
        id: "ai-referral-traffic",
        title: "Monitor AI referral traffic in analytics",
        why: "You can't improve what you don't measure. Tracking AI referrals shows whether your optimization efforts are actually driving traffic.",
        difficulty: "Medium",
      },
      {
        id: "test-brand-mentions",
        title: "Test brand mentions in AI chat tools regularly",
        why: "Regularly asking ChatGPT, Claude, and Perplexity about your category reveals whether your brand is being recommended — and how.",
        difficulty: "Quick Win",
      },
      {
        id: "branded-search-volume",
        title: "Track branded search volume trends",
        why: "Rising branded search volume indicates growing brand awareness, which correlates with AI recommendation frequency.",
        difficulty: "Medium",
      },
      {
        id: "gsc-setup",
        title: "Google Search Console set up and monitored",
        why: "GSC shows how search engines see your site — crawl errors, indexing issues, and query data that directly affects your AI visibility foundation.",
        difficulty: "Quick Win",
      },
      {
        id: "post-purchase-survey",
        title: 'Post-purchase "how did you hear about us?" survey',
        why: "AI referrals are hard to attribute. A simple survey captures the growing number of customers who found you through AI recommendations.",
        difficulty: "Quick Win",
      },
    ],
  },
];

const STORAGE_KEY = "ai-checklist-state";

const difficultyColors: Record<Difficulty, string> = {
  "Quick Win": "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-purple-100 text-purple-700",
};

const totalItems = sections.reduce((acc, s) => acc + s.items.length, 0);

export default function ChecklistClient() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const [showScoreChecker, setShowScoreChecker] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // ignore
    }
  }, [checked, mounted]);

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checked).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalItems) * 100);

  const sectionProgress = (section: ChecklistSection) =>
    section.items.filter((item) => checked[item.id]).length;

  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero */}
      <section className="bg-gray-50 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#ff6b35] font-semibold text-sm uppercase tracking-wider">
            Free Resource
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
            The AI Search Optimization{" "}
            <span className="text-[#ff4500]">Checklist</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            35 actionable items to help your brand get discovered, cited, and
            recommended by AI search tools like ChatGPT, Claude, Perplexity,
            and Google AI.
          </p>

          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-6">
            Whether you just ran your{" "}
            <button
              onClick={() => setShowScoreChecker((s) => !s)}
              className="text-[#ff4500] hover:underline font-medium"
            >
              free AI visibility score
            </button>{" "}
            or you&apos;re starting from scratch, this checklist covers everything
            from technical foundations to off-site brand signals. Work through it
            yourself, or{" "}
            <a
              href="https://calendly.com/kirkco/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff4500] hover:underline"
            >
              book a free review
            </a>{" "}
            and we&apos;ll prioritize the items that matter most for your brand.
          </p>

          {showScoreChecker && (
            <div className="max-w-xl mx-auto mb-8 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-left">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Check Your AI Visibility Score</h3>
                <button
                  onClick={() => setShowScoreChecker(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close score checker"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ScoreChecker />
            </div>
          )}

          {/* Progress counter */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
            <div className="w-48 bg-gray-100 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full bg-[#ff4500] transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {completedCount}/{totalItems} complete ({progressPercent}%)
            </span>
          </div>
        </div>
      </section>

      {/* Content with sidebar */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            {/* Sticky sidebar TOC — desktop only */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28 space-y-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Sections
                </p>
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-[#ff4500] hover:bg-orange-50 transition-colors"
                  >
                    <span className="truncate">{section.title}</span>
                    <span className="text-xs text-gray-400 ml-2">
                      {mounted
                        ? `${sectionProgress(section)}/${section.items.length}`
                        : `0/${section.items.length}`}
                    </span>
                  </a>
                ))}
              </nav>
            </aside>

            {/* Checklist sections */}
            <article className="space-y-16">
              {sections.map((section, sIdx) => (
                <div key={section.id} id={section.id} className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#ff4500] text-white font-bold text-sm">
                      {sIdx + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                    {mounted && (
                      <span className="text-sm text-gray-400 ml-auto">
                        {sectionProgress(section)}/{section.items.length}
                      </span>
                    )}
                  </div>

                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <label
                        key={item.id}
                        className={`flex items-start gap-4 p-5 rounded-xl border cursor-pointer transition-all ${
                          checked[item.id]
                            ? "bg-green-50 border-green-200"
                            : "bg-white border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={!!checked[item.id]}
                          onChange={() => toggle(item.id)}
                          className="mt-1 w-5 h-5 rounded border-gray-300 text-[#ff4500] focus:ring-[#ff4500] accent-[#ff4500] flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`font-medium ${
                                checked[item.id]
                                  ? "text-green-800 line-through"
                                  : "text-gray-900"
                              }`}
                            >
                              {item.title}
                            </span>
                            <span
                              className={`text-xs font-medium px-2 py-0.5 rounded-full ${difficultyColors[item.difficulty]}`}
                            >
                              {item.difficulty}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            <span className="font-medium text-gray-600">
                              Why it matters:
                            </span>{" "}
                            {item.why}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

      {/* Bridge */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Many of the off-site items above — Reddit mentions, review platform
            listings, and &quot;best of&quot; features — are the hardest to do on
            your own. That&apos;s exactly what{" "}
            <Link href="/geo" className="text-[#ff4500] font-medium hover:underline">
              Generative Engine Optimization (GEO)
            </Link>{" "}
            is designed for.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Checking Items Off?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Some items on this list are quick DIY fixes. Others need expert
            help. Book a free review and we&apos;ll show you exactly what to
            prioritize.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/kirkco/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#ff4500] hover:bg-[#cc3700] text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Book a Free AI Optimization Review
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <Link
              href="/geo"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Learn About Our GEO Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
