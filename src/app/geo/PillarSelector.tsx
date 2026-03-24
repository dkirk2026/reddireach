"use client";

import { useState } from "react";

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

export default function PillarSelector() {
  const [activePillar, setActivePillar] = useState(0);

  return (
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
  );
}
