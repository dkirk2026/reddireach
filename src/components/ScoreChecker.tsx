"use client";

import { useState, useEffect, useCallback } from "react";

interface Breakdown {
  domainQuality: number;
  industryOpportunity: number;
  aiDiscoverability: number;
}

interface ScoreResult {
  score: number;
  breakdown: Breakdown;
}

const ANALYSIS_STEPS = [
  "Resolving domain information...",
  "Scanning for structured data & schema markup...",
  "Checking AI citation sources...",
  "Evaluating brand mentions across LLM training data...",
  "Analyzing industry competitive landscape...",
  "Calculating AI search visibility score...",
];

function ScoreGauge({ score }: { score: number }) {
  const percentage = (score / 10) * 100;
  const color =
    score <= 3 ? "#ef4444" : score <= 5 ? "#f97316" : score <= 7 ? "#eab308" : "#22c55e";

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeDasharray={`${percentage}, 100`}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{score}</span>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">
          AI Visibility Score
        </p>
        <p className="text-xs text-gray-500">out of 10</p>
      </div>
    </div>
  );
}

function BreakdownItem({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const color =
    value <= 3 ? "bg-red-400" : value <= 5 ? "bg-orange-400" : value <= 7 ? "bg-yellow-400" : "bg-green-400";

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-700">{label}</p>
      </div>
      <div className="w-24 bg-gray-100 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-700 ease-out ${color}`}
          style={{ width: `${(value / 10) * 100}%` }}
        />
      </div>
      <span className="text-sm font-medium text-gray-600 w-6 text-right">
        {value}
      </span>
    </div>
  );
}

function AnalyzingState({ step }: { step: number }) {
  const progress = ((step + 1) / ANALYSIS_STEPS.length) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <svg
          className="animate-spin h-5 w-5 text-[#ff4500]"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        <p className="text-sm font-medium text-gray-700">
          {ANALYSIS_STEPS[step]}
        </p>
      </div>

      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full bg-[#ff4500] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-1.5">
        {ANALYSIS_STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            {i < step ? (
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : i === step ? (
              <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-[#ff4500] rounded-full animate-pulse" />
              </div>
            ) : (
              <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-gray-200 rounded-full" />
              </div>
            )}
            <span className={`text-xs ${i <= step ? "text-gray-700" : "text-gray-400"}`}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ScoreChecker() {
  const [website, setWebsite] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [pendingResult, setPendingResult] = useState<ScoreResult | null>(null);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const showResult = useCallback(() => {
    if (pendingResult) {
      setResult(pendingResult);
      setPendingResult(null);
      setAnalyzing(false);
      setAnalysisStep(0);
    }
  }, [pendingResult]);

  // Step through analysis stages
  useEffect(() => {
    if (!analyzing) return;

    if (analysisStep < ANALYSIS_STEPS.length - 1) {
      // Variable timing: 600-1200ms per step
      const delay = 600 + Math.random() * 600;
      const timer = setTimeout(() => setAnalysisStep((s) => s + 1), delay);
      return () => clearTimeout(timer);
    }

    // On the last step, wait a beat then show results (if API is done)
    if (pendingResult) {
      const timer = setTimeout(showResult, 800);
      return () => clearTimeout(timer);
    }
  }, [analyzing, analysisStep, pendingResult, showResult]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!website.trim()) return;

    setAnalyzing(true);
    setAnalysisStep(0);
    setError("");
    setResult(null);
    setPendingResult(null);

    try {
      const res = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ website: website.trim() }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      const data: ScoreResult = await res.json();

      // Store the result — the step effect will reveal it after the animation finishes
      setPendingResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setAnalyzing(false);
      setAnalysisStep(0);
    }
  }

  if (result) {
    return (
      <div className="space-y-5">
        <ScoreGauge score={result.score} />

        <div className="space-y-2.5">
          <BreakdownItem label="Domain Quality" value={result.breakdown.domainQuality} />
          <BreakdownItem label="Industry Opportunity" value={result.breakdown.industryOpportunity} />
          <BreakdownItem label="AI Discoverability" value={result.breakdown.aiDiscoverability} />
        </div>

        <p className="text-sm text-gray-500">
          {result.score <= 5
            ? "Your brand may be invisible to AI search. A full review can uncover quick wins."
            : "There's room to improve. See exactly what AI sees (and misses) about your brand."}
        </p>

        {!emailSubmitted ? (
          <div className="space-y-3 pt-1">
            <p className="text-sm font-medium text-gray-700">
              Want our full AI search optimization checklist?
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.trim()) return;
                setEmailSubmitted(true);
                // Fire-and-forget email capture
                fetch("/api/score", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: email.trim(), website }),
                }).catch(() => {});
                window.location.href = "/checklist";
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 border-2 border-gray-200 rounded-full text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#ff4500] focus:ring-2 focus:ring-[#ff4500]/20 transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-7 py-3 bg-[#ff4500] hover:bg-[#cc3700] text-white rounded-full font-semibold text-base transition-all hover:-translate-y-0.5 shadow-md shadow-orange-200/40 focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:ring-offset-2 whitespace-nowrap"
              >
                Get the Checklist
              </button>
            </form>
            <p className="text-xs text-gray-400">
              No newsletter, no spam. Just the checklist.
            </p>
          </div>
        ) : null}

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://calendly.com/kirkco/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#ff4500] hover:bg-[#cc3700] text-white rounded-full font-semibold text-base transition-all hover:-translate-y-0.5 shadow-md shadow-orange-200/40 focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:ring-offset-2"
          >
            Get Your Full AI Search Review
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <button
            onClick={() => {
              setResult(null);
              setWebsite("");
              setEmail("");
              setEmailSubmitted(false);
            }}
            className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 rounded-full font-semibold text-base transition-all focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Check Another
          </button>
        </div>
      </div>
    );
  }

  if (analyzing) {
    return <AnalyzingState step={analysisStep} />;
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Enter your website URL"
          className="flex-1 px-5 py-3.5 border-2 border-gray-200 rounded-full text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#ff4500] focus:ring-2 focus:ring-[#ff4500]/20 transition-all"
        />
        <button
          type="submit"
          disabled={!website.trim()}
          className="inline-flex items-center justify-center px-7 py-3.5 bg-[#ff4500] hover:bg-[#cc3700] text-white rounded-full font-semibold text-base transition-all hover:-translate-y-0.5 shadow-md shadow-orange-200/40 focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:ring-offset-2 disabled:opacity-50 disabled:hover:translate-y-0 whitespace-nowrap"
        >
          Check Your AI Visibility
        </button>
      </form>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
