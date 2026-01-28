"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What makes ReddiReach different from other marketing agencies?",
    answer: "We specialize exclusively in Reddit marketing. Our team consists of experienced Redditors who understand the platform's unique culture, rules, and community dynamics. We focus on organic, authentic engagement rather than spammy tactics that get you banned."
  },
  {
    question: "Is Reddit marketing really effective for businesses?",
    answer: "Absolutely. Reddit has over 50 million daily active users who are highly engaged and often in a research/buying mindset. Reddit traffic typically converts 2-3x better than social media traffic because users are actively seeking solutions and recommendations."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients start seeing increased traffic and engagement within the first 2-4 weeks. However, building a strong Reddit presence is a long-term strategy. The best results come from consistent, authentic participation over 3-6 months."
  },
  {
    question: "Will my posts get removed or account banned?",
    answer: "Our team follows all Reddit guidelines and subreddit rules meticulously. We use established accounts with good karma and focus on providing genuine value. Our approach has a 99%+ success rate with no bans or significant post removals."
  },
  {
    question: "What subreddits will you target for my business?",
    answer: "During our discovery call, we'll research and identify 10-50+ relevant subreddits based on your industry, target audience, and goals. We focus on communities where your ideal customers are actively discussing problems your product solves."
  },
  {
    question: "Can I see examples of your work?",
    answer: "Due to the nature of organic Reddit marketing, we keep our clients' campaigns confidential to maintain authenticity. However, we can share anonymized case studies and metrics during your consultation call."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#ff4500] font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Reddit marketing with ReddiReach.
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
