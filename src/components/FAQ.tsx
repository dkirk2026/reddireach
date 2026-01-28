"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is marketing on Reddit worth it?",
    answer: "Yes. Marketing on Reddit can be highly effective due to its vast, engaged user base and niche communities, especially due to Reddit being cited as a top source of AI search training data. By participating authentically in relevant subreddits, businesses can connect directly with their target audience, fostering trust and engagement. However, it's crucial to approach Reddit marketing with authenticity and respect for community norms to avoid negative backlash."
  },
  {
    question: "What is Your Pricing?",
    answer: "Our pricing varies based on the scope of your campaign, the number of subreddits targeted, and the level of GEO optimization needed. We offer customized plans for startups and small businesses. Contact us for a free consultation and personalized quote."
  },
  {
    question: "How does Reddit influence AI search results?",
    answer: "Reddit is one of the primary data sources used by major AI models for training. When your brand is discussed positively and authentically across relevant subreddits, AI search engines like ChatGPT, Perplexity, and Google AI are more likely to recommend your brand in response to user queries."
  },
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer: "GEO is the practice of optimizing your brand's presence across sources that AI models use for generating responses. Since Reddit is a top training data source for LLMs, strategic Reddit marketing directly improves how often and how favorably AI recommends your brand."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients start seeing increased Reddit engagement within the first 2-4 weeks. AI search visibility improvements typically follow within 1-3 months as AI models incorporate new Reddit data into their responses. Consistent, authentic participation drives the best long-term results."
  },
  {
    question: "Will my posts get removed or account banned?",
    answer: "Our team follows all Reddit guidelines and subreddit rules meticulously. We focus on providing genuine value to communities rather than spammy promotion. Our approach has a 99%+ success rate with no bans or significant post removals."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#ff4500] font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Reddit marketing and AI search optimization with ReddiReach.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[#ff4500] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Can&apos;t find the answer you&apos;re looking for? Reach out to our team.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#ff4500] font-semibold hover:underline"
          >
            Contact us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
