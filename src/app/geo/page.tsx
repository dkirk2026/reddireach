"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pillars = [
  {
    title: "Reddit Marketing",
    description:
      "We secure authoritative brand mentions across the sources AI models trust most, building the digital footprint that drives AI visibility.",
    details: [
      "Identify high-impact subreddits in your industry",
      "Create authentic, value-driven discussions",
      "Build genuine community presence",
      "Monitor and respond to brand mentions",
    ],
  },
  {
    title: "Digital PR",
    description:
      "We secure coverage and brand mentions across high-authority publications and platforms that AI models trust as sources.",
    details: [
      "Placements in industry publications",
      "Expert contributor opportunities",
      "Podcast and interview coordination",
      "News and feature coverage",
    ],
  },
  {
    title: "Content Marketing",
    description:
      "We create and distribute content specifically designed to be cited by AI systems.",
    details: [
      "AI-optimized content structure",
      "Strategic content distribution",
      "Answer-focused content creation",
      "Thought leadership positioning",
    ],
  },
  {
    title: "Technical SEO",
    description:
      "We optimize your digital presence with semantic markup, structured data, and technical best practices.",
    details: [
      "Schema markup implementation",
      "llms.txt and AI crawler optimization",
      "Site structure improvements",
      "Citation and source optimization",
    ],
  },
];

const stats = [
  {
    value: "79%",
    label: "of consumers now use AI for product research",
  },
  {
    value: "#1",
    label: "Reddit is the top source AI models cite for recommendations",
  },
  {
    value: "3x",
    label: "higher conversion from AI referrals vs. traditional search",
  },
];

const faqs = [
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer:
      "GEO is the practice of optimizing your brand's presence across the sources that AI models use when generating responses. When someone asks ChatGPT or Perplexity for a recommendation, the AI draws from its training data and real-time sources. GEO ensures your brand is positively represented in those sources.",
  },
  {
    question: "How is GEO different from traditional SEO?",
    answer:
      "Traditional SEO optimizes for search engine rankings. GEO optimizes for AI recommendations. While SEO focuses on keywords and backlinks, GEO focuses on authentic discussions, authoritative mentions, and being the answer AI systems reach for when users ask questions.",
  },
  {
    question: "Why does Reddit matter for AI search?",
    answer:
      "Reddit is one of the primary data sources that AI models reference for product recommendations and discussions. When users ask AI assistants for advice, the AI often cites or references Reddit discussions. Brands mentioned positively on Reddit are significantly more likely to be recommended by AI.",
  },
  {
    question: "How do you measure AI search visibility?",
    answer:
      "We regularly query major AI platforms (ChatGPT, Claude, Perplexity, Google AI) for relevant terms in your industry and track how often your brand is mentioned, recommended, or cited in responses. We provide detailed reports showing your AI visibility over time.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Initial improvements in brand mentions and Reddit presence are typically visible within 2-4 weeks. AI search visibility improvements follow within 1-3 months as AI models incorporate new discussions into their responses.",
  },
];

export default function GEOPage() {
  const [activePillar, setActivePillar] = useState(0);

  // Schema markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Generative Engine Optimization (GEO)",
    provider: {
      "@type": "Organization",
      name: "ReddiReach",
      url: "https://reddireach.com",
    },
    description:
      "AI search optimization services to help your brand get recommended by ChatGPT, Perplexity, Claude, and other AI assistants.",
    serviceType: "Digital Marketing",
    areaServed: "Worldwide",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-[#ff6b35] font-semibold text-sm uppercase tracking-wider">
                AI Search Optimization
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Become the Answer AI{" "}
                <span className="text-[#ff4500]">Recommends</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-10">
                When someone asks ChatGPT, Claude, Perplexity, or Google AI for a
                recommendation in your category, will they mention your brand?
                We make sure they do.
              </p>

              <a
                href="https://calendly.com/kirkco/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ff4500] hover:bg-[#cc3700] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-[#ff4500]/20"
              >
                Get Your Brand Recommended
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
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold text-[#ff4500] mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Search Landscape Has Changed
              </h2>
              <p className="text-lg text-gray-600">
                More people are asking AI assistants for product recommendations
                instead of searching Google. When they ask &quot;What&apos;s the
                best tool for X?&quot; - is your brand the answer?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-red-800 mb-4">
                  Without GEO
                </h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    AI recommends competitors instead
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Invisible to AI-powered search
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Missing high-intent buyers
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Falling behind as AI adoption grows
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  With GEO
                </h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    AI recommends YOUR brand first
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Visible across all AI platforms
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Capture ready-to-buy customers
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Stay ahead of the competition
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How We Do It */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Get You Recommended
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our four-pillar approach ensures your brand is visible across
                every source that AI models trust.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left: Pillar Navigation */}
              <div className="space-y-4">
                {pillars.map((pillar, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePillar(index)}
                    className={`w-full text-left p-5 rounded-xl border transition-all ${
                      activePillar === index
                        ? "bg-white border-[#ff4500] shadow-lg"
                        : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-bold ${
                          activePillar === index
                            ? "bg-[#ff4500] text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h3
                          className={`font-semibold mb-1 ${
                            activePillar === index
                              ? "text-[#ff4500]"
                              : "text-gray-900"
                          }`}
                        >
                          {pillar.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right: Details Panel */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pillars[activePillar].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {pillars[activePillar].description}
                </p>
                <h4 className="font-semibold text-gray-900 mb-4">
                  What&apos;s included:
                </h4>
                <ul className="space-y-3">
                  {pillars[activePillar].details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#ff4500] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-xl border border-gray-200"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-gray-900">
                    {faq.question}
                    <svg
                      className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get AI Working For You?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Book a free strategy call to learn how we can make your brand the
              answer AI recommends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/kirkco/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ff4500] hover:bg-[#cc3700] text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Book a Free Call
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
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                View Pricing
              </Link>
            </div>
            <p className="text-gray-500 mt-6 text-sm">
              In partnership with{" "}
              <a
                href="https://visibilitylabs.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff4500] hover:underline"
              >
                Visibility Labs
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
