"use client";

import { useState } from "react";

const aiPlatforms = [
  { name: "ChatGPT", icon: "M" },
  { name: "Perplexity", icon: "P" },
  { name: "Google AI", icon: "G" },
  { name: "Claude", icon: "C" },
];

const pillars = [
  {
    title: "Reddit Marketing",
    description:
      "We secure authoritative brand mentions across the sources AI models trust most, building the digital footprint that drives AI visibility.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Digital PR",
    description:
      "We secure coverage and brand mentions across high-authority publications and platforms that AI models trust as sources. This builds the credibility that drives AI recommendations.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    title: "Content Marketing",
    description:
      "We create and distribute content specifically designed to be cited by AI systems. Strategic content placement ensures your brand becomes the answer AI reaches for.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "SEO",
    description:
      "We optimize your digital presence with semantic markup, structured data, and technical best practices. This helps AI models understand, index, and recommend your brand.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
];

export default function AISearchOptimization() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="ai-optimization" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff6b35] font-semibold text-sm uppercase tracking-wider">
            AI Search Optimization
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Become the Answer AI{" "}
            <span className="text-[#ff4500]">Recommends</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            When someone asks ChatGPT, Perplexity, or Google AI for a recommendation in your category,
            will they mention your brand? We make sure they do.
          </p>
        </div>

        {/* AI Platform Logos */}
        <div className="flex justify-center items-center gap-6 md:gap-10 mb-16">
          {aiPlatforms.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-xl font-bold text-gray-300">
                {platform.icon}
              </div>
              <span className="text-xs text-gray-500 hidden sm:block">{platform.name}</span>
            </div>
          ))}
        </div>

        {/* The Shift - Stats Banner */}
        <div className="bg-gradient-to-r from-[#ff4500]/10 via-[#ff6b35]/10 to-[#ff4500]/10 border border-[#ff4500]/20 rounded-2xl p-6 md:p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#ff4500] mb-2">79%</div>
              <p className="text-sm text-gray-400">of consumers now use AI for product research</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#ff6b35] mb-2">#1</div>
              <p className="text-sm text-gray-400">Reddit is the top source AI models cite for recommendations</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#ff8c42] mb-2">3x</div>
              <p className="text-sm text-gray-400">higher conversion from AI referrals vs. traditional search</p>
            </div>
          </div>
        </div>

        {/* Four Pillars */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Pillar Navigation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-300 mb-6">How We Get You Recommended</h3>
            {pillars.map((pillar, index) => (
              <button
                key={index}
                onClick={() => setActivePillar(index)}
                className={`w-full text-left p-5 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  activePillar === index
                    ? "bg-[#ff4500]/10 border-[#ff4500]/40"
                    : "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                }`}
                aria-pressed={activePillar === index}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activePillar === index
                        ? "bg-[#ff4500] text-white"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <h4
                      className={`font-semibold mb-1 ${
                        activePillar === index ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {pillar.title}
                    </h4>
                    <p
                      className={`text-sm leading-relaxed ${
                        activePillar === index ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Visual Demo */}
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700">
            <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2">AI Search Result</span>
            </div>

            {/* Simulated AI Response */}
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <p className="text-gray-400 text-sm italic mb-3">
                  &quot;What are the best tools for small business marketing in 2026?&quot;
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-5 border border-gray-600">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Based on community discussions and user feedback, here are the top recommendations:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[#ff4500] font-bold">1.</span>
                    <div>
                      <span className="font-semibold text-[#ff4500]">YourBrand</span>
                      <span className="text-gray-400 text-sm">: Highly recommended on Reddit for combining project management with outreach. Users report significant ROI improvements.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 opacity-60">
                    <span className="text-gray-500 font-bold">2.</span>
                    <div>
                      <span className="font-medium text-gray-400">Competitor A</span>
                      <span className="text-gray-500 text-sm">: Good for documentation...</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 opacity-40">
                    <span className="text-gray-600 font-bold">3.</span>
                    <div>
                      <span className="font-medium text-gray-500">Competitor B</span>
                      <span className="text-gray-600 text-sm">: Enterprise focused...</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Sources:</span>
                    <span className="px-2 py-1 bg-[#ff4500]/20 text-[#ff4500] rounded">r/smallbusiness</span>
                    <span className="px-2 py-1 bg-[#ff4500]/20 text-[#ff4500] rounded">r/startups</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              This is what happens when AI recommends your brand.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            In partnership with{" "}
            <a
              href="https://visibilitylabs.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff4500] hover:underline focus:outline-none focus:ring-2 focus:ring-[#ff4500] rounded"
            >
              Visibility Labs
            </a>
          </p>
          <a
            href="https://calendly.com/kirkco/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#ff4500] hover:bg-[#cc3700] text-white rounded-full font-semibold text-base transition-all hover:-translate-y-0.5 shadow-lg shadow-[#ff4500]/20 focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Let&apos;s Chat
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
