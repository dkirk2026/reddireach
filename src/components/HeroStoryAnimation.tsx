"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const USER_QUERY = "Best tools for managing a small business in 2026";

// OpenAI SVG path
const OPENAI_PATH =
  "M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z";

// Perplexity SVG path
const PERPLEXITY_PATH =
  "M12 .282a.75.75 0 0 1 .754.75v5.07l4.533-4.38.089-.072a.765.765 0 0 1 .735-.081.75.75 0 0 1 .459.69v4.871h1.676l.15.015a.75.75 0 0 1 .604.735v8.337a.75.75 0 0 1-.754.75H18.57v4.887a.75.75 0 0 1-.468.693.765.765 0 0 1-.825-.165l-4.524-4.527v5.172a.75.75 0 0 1-1.508 0v-5.172l-4.527 4.528a.765.765 0 0 1-.822.165.75.75 0 0 1-.468-.694v-4.887H3.754a.75.75 0 0 1-.754-.75V7.822l.015-.15a.75.75 0 0 1 .74-.6h1.674V2.2l.01-.11a.75.75 0 0 1 .452-.581.765.765 0 0 1 .821.153l4.534 4.38V1.032a.75.75 0 0 1 .754-.75zM6.94 14l-.001 5.976 4.305-4.308V9.88zm5.816 1.67l4.306 4.306V14l-4.305-4.346zm5.6-2.502a.75.75 0 0 1 .217.525v1.718h.918V8.572H13.8zm-13.845 2.243h.92v-1.718a.75.75 0 0 1 .217-.525L10.2 8.572H4.517zm2.43-8.337h3.188L6.94 3.978zm6.919 0h3.201V3.978z";

// Gemini sparkle SVG path (4-pointed star)
const GEMINI_PATH =
  "M8 16C7.37 10.94 5.06 8.63 0 8C5.06 7.37 7.37 5.06 8 0C8.63 5.06 10.94 7.37 16 8C10.94 8.63 8.63 10.94 8 16Z";

// Reddit icon SVG paths
const REDDIT_PATH_1 =
  "M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z";
const REDDIT_PATH_2 =
  "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165";

// Steps:
// 0: nothing visible
// 1: reddit post
// 2: comment
// 3: traffic card
// 4: chat card appears (ChatGPT), user query starts typing
// 5: typing done, AI response fades in (ChatGPT)
// 6: cross-fade to Perplexity
// 7: cross-fade to Gemini
// 8: hold then reset

export default function HeroStoryAnimation() {
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  const activeLLM =
    step <= 5 ? 0 : step === 6 ? 1 : step >= 7 ? 2 : 0;

  const getDelay = useCallback((currentStep: number): number => {
    switch (currentStep) {
      case 0: return 600;
      case 1: return 1400;
      case 2: return 1400;
      case 3: return 1200;
      case 4: return 0;
      case 5: return 2500;
      case 6: return 2500;
      case 7: return 2500;
      case 8: return 2000;
      default: return 1000;
    }
  }, []);

  useEffect(() => {
    if (step === 4) {
      setCharIndex(0);
      setTypingDone(false);
      typingRef.current = setInterval(() => {
        setCharIndex((prev) => {
          if (prev >= USER_QUERY.length) {
            if (typingRef.current) clearInterval(typingRef.current);
            setTypingDone(true);
            return prev;
          }
          return prev + 1;
        });
      }, 45);
      return () => {
        if (typingRef.current) clearInterval(typingRef.current);
      };
    }
  }, [step]);

  useEffect(() => {
    if (typingDone && step === 4) {
      const timer = setTimeout(() => setStep(5), 600);
      return () => clearTimeout(timer);
    }
  }, [typingDone, step]);

  useEffect(() => {
    if (step === 4) return;
    const delay = getDelay(step);
    const timer = setTimeout(() => {
      if (step < 8) {
        setStep((prev) => prev + 1);
      } else {
        setStep(0);
        setCharIndex(0);
        setTypingDone(false);
        setCycle((prev) => prev + 1);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [step, getDelay]);

  const displayedQuery = step >= 4 ? USER_QUERY.slice(0, charIndex) : "";
  const showResponse = step >= 5;
  const showCursor = step === 4 && !typingDone;

  return (
    <div className="relative min-h-[400px] md:min-h-[500px]" aria-hidden="true" role="presentation">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200 to-red-200 rounded-full opacity-20 blur-3xl" />

      {/* Step 1: Reddit Post */}
      <div
        key={`post-${cycle}`}
        className={`absolute top-0 left-1 right-1 md:left-2 md:right-2 z-10 ${
          step >= 1 ? "animate-story-slide-up" : "story-hidden"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-[#ff4500] rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 16 16">
                <path d={REDDIT_PATH_1} />
                <path d={REDDIT_PATH_2} />
              </svg>
            </div>
            <span className="text-xs font-semibold text-[#ff4500]">r/smallbusiness</span>
            <span className="text-xs text-gray-400">&middot; 4h ago</span>
          </div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
            Best tools for managing a small business in 2026? Need recommendations
          </h4>
          <p className="text-xs text-gray-500 mb-3 leading-relaxed">
            Hey everyone, I&apos;m looking for tools that help with project management and customer outreach. Any suggestions from people who&apos;ve actually used them?
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              <span className="font-medium text-gray-600">847</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>234 comments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Comment */}
      <div
        key={`comment-${cycle}`}
        className={`absolute top-[185px] md:top-[200px] left-5 right-1 md:left-6 md:right-2 z-10 ${
          step >= 2 ? "animate-story-slide-up-small" : "story-hidden"
        }`}
      >
        <div className="bg-white rounded-xl shadow-lg p-3 md:p-4 border-l-2 border-[#ff4500]">
          <div className="flex items-start gap-2 md:gap-3">
            <div className="w-7 h-7 bg-orange-200 rounded-full flex-shrink-0 flex items-center justify-center">
              <span className="text-[10px] font-bold text-orange-700">SM</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-gray-800">u/startup_maven</span>
                <span className="text-[10px] text-gray-400">&middot; 2h ago</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                I&apos;ve been using <span className="font-semibold text-[#ff4500]">YourBrand</span> for 6 months and it&apos;s been a game-changer. Highly recommend for small teams.
              </p>
              <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                <svg className="w-3.5 h-3.5 text-[#ff4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                <span className="font-medium text-gray-600">392</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Traffic Stats Card */}
      <div
        key={`traffic-${cycle}`}
        className={`absolute top-[155px] md:top-[165px] right-[-4px] z-20 ${
          step >= 3 ? "animate-story-slide-in-right" : "story-hidden"
        }`}
      >
        <div className="bg-white rounded-xl shadow-xl px-3 py-2.5 md:px-4 md:py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex items-end gap-[3px] h-8">
              {[3, 5, 4, 7, 10].map((h, i) => (
                <div
                  key={i}
                  className="w-[5px] rounded-full bg-green-400"
                  style={{ height: `${h * 3}px`, opacity: 0.5 + i * 0.12 }}
                />
              ))}
            </div>
            <div>
              <div className="text-sm font-bold text-green-600">+340%</div>
              <div className="text-[10px] text-gray-500">traffic increase</div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps 4-8: LLM Chat Interface — three platform-accurate cards that cross-fade */}
      <div
        key={`chat-${cycle}`}
        className={`absolute bottom-0 left-1 right-1 md:left-2 md:right-2 z-10 ${
          step >= 4 ? "animate-story-fade-in-up" : "story-hidden"
        }`}
      >
        <div className="relative min-h-[248px] md:min-h-[260px]">

          {/* ===== ChatGPT — white bg, gray pill bubble, black circle avatar ===== */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${activeLLM === 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#ececec]">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={OPENAI_PATH} />
                  </svg>
                </div>
                <span className="text-xs font-medium text-[#0d0d0d]">ChatGPT</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-gray-200" />
                  <div className="w-2 h-2 rounded-full bg-gray-200" />
                  <div className="w-2 h-2 rounded-full bg-gray-200" />
                </div>
              </div>
              <div className="p-4 space-y-3 flex-1">
                {/* User message: right-aligned gray pill, bottom-right corner tighter */}
                <div className="flex justify-end">
                  <div className="bg-[#f4f4f4] rounded-[20px] rounded-br-[4px] px-3.5 py-2.5 max-w-[85%]">
                    <p className="text-xs text-[#0d0d0d] leading-relaxed">
                      {displayedQuery}
                      {showCursor && (
                        <span className="inline-block w-[2px] h-3.5 bg-[#0d0d0d] ml-0.5 align-middle animate-cursor-blink" />
                      )}
                    </p>
                  </div>
                </div>
                {/* AI response: no bubble, black circle avatar, plain text on white */}
                <div className={`transition-all duration-500 ${showResponse ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                  <div className="flex gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d={OPENAI_PATH} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#0d0d0d] leading-relaxed">
                        Based on Reddit discussions, I&apos;d recommend{" "}
                        <span className="font-semibold text-[#ff4500]">YourBrand</span> —
                        users on r/smallbusiness report significant productivity gains
                        and excellent customer support.
                      </p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <div className="w-3.5 h-3.5 bg-[#ff4500] rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 16 16">
                            <path d={REDDIT_PATH_1} />
                            <path d={REDDIT_PATH_2} />
                          </svg>
                        </div>
                        <span className="text-[10px] text-[#6e6e73]">r/smallbusiness</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Perplexity — paper bg, query as heading, sources row, Answer label, teal citations ===== */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${activeLLM === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="bg-[#F3F3EE] rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#e4e3d4]">
                <div className="w-6 h-6 rounded-lg bg-[#20808d] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={PERPLEXITY_PATH} />
                  </svg>
                </div>
                <span className="text-xs font-medium text-[#13343B]">Perplexity</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#d5d4c8]" />
                  <div className="w-2 h-2 rounded-full bg-[#d5d4c8]" />
                  <div className="w-2 h-2 rounded-full bg-[#d5d4c8]" />
                </div>
              </div>
              <div className="p-4 space-y-2.5 flex-1">
                {/* Query as bold heading — no bubble */}
                <h4 className="text-[13px] font-semibold text-[#1a1a1a] leading-snug">
                  {USER_QUERY}
                </h4>
                {/* Sources row with source card */}
                <div className="flex items-start gap-1.5">
                  <span className="text-[8px] text-[#8b8b80] font-semibold uppercase tracking-wider mt-1.5">Sources</span>
                  <div className="flex items-center gap-1.5 bg-white rounded-lg px-2 py-1.5 border border-[#e4e3d4]">
                    <div className="w-3.5 h-3.5 bg-[#ff4500] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 16 16">
                        <path d={REDDIT_PATH_1} />
                        <path d={REDDIT_PATH_2} />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] font-medium text-[#1a1a1a] leading-tight block truncate">Best tools for small business</span>
                      <span className="text-[8px] text-[#8b8b80] leading-tight block">reddit.com</span>
                    </div>
                    <span className="text-[8px] bg-[#DEF7F9] text-[#1FB8CD] font-bold rounded-full w-4 h-4 flex items-center justify-center flex-shrink-0 ml-0.5">1</span>
                  </div>
                </div>
                {/* Answer label with Perplexity icon */}
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#1FB8CD]" fill="currentColor" viewBox="0 0 24 24">
                    <path d={PERPLEXITY_PATH} />
                  </svg>
                  <span className="text-[11px] font-bold text-[#1FB8CD]">Answer</span>
                </div>
                {/* Response: no avatar, inline [1] citation */}
                <p className="text-xs text-[#2d2d2d] leading-relaxed">
                  Based on Reddit discussions, I&apos;d recommend{" "}
                  <span className="font-semibold text-[#ff4500]">YourBrand</span> —
                  users on r/smallbusiness report significant productivity gains
                  and excellent customer support.
                  <span className="inline-flex items-center justify-center w-4 h-4 text-[8px] font-bold bg-[#DEF7F9] text-[#1FB8CD] rounded-full ml-1 align-text-top">1</span>
                </p>
              </div>
            </div>
          </div>

          {/* ===== Gemini — cool off-white bg, blue-gray bubble, gradient sparkle, suggestion chips ===== */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${activeLLM === 2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="bg-[#F8F9FA] rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#e8eaed]">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                  <defs>
                    <linearGradient id="gm-h" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#4285F4" />
                      <stop offset="50%" stopColor="#9B72CB" />
                      <stop offset="100%" stopColor="#D96570" />
                    </linearGradient>
                  </defs>
                  <path d={GEMINI_PATH} fill="url(#gm-h)" />
                </svg>
                <span className="text-xs font-medium text-[#202124]">Gemini</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#dadce0]" />
                  <div className="w-2 h-2 rounded-full bg-[#dadce0]" />
                  <div className="w-2 h-2 rounded-full bg-[#dadce0]" />
                </div>
              </div>
              <div className="p-4 space-y-3 flex-1">
                {/* User message: right-aligned blue-gray pill */}
                <div className="flex justify-end">
                  <div className="bg-[#DDE3EA] rounded-[20px] rounded-br-[4px] px-3.5 py-2.5 max-w-[85%]">
                    <p className="text-xs text-[#1f1f1f] leading-relaxed">{USER_QUERY}</p>
                  </div>
                </div>
                {/* AI response: gradient sparkle avatar, no bubble */}
                <div className="flex gap-2.5">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                    <defs>
                      <linearGradient id="gm-r" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#4285F4" />
                        <stop offset="50%" stopColor="#9B72CB" />
                        <stop offset="100%" stopColor="#D96570" />
                      </linearGradient>
                    </defs>
                    <path d={GEMINI_PATH} fill="url(#gm-r)" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[#202124] leading-relaxed">
                      Based on Reddit discussions, I&apos;d recommend{" "}
                      <span className="font-semibold text-[#ff4500]">YourBrand</span> —
                      users on r/smallbusiness report significant productivity gains
                      and excellent customer support.
                    </p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="w-3.5 h-3.5 bg-[#ff4500] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 16 16">
                          <path d={REDDIT_PATH_1} />
                          <path d={REDDIT_PATH_2} />
                        </svg>
                      </div>
                      <span className="text-[10px] text-[#5f6368]">r/smallbusiness</span>
                    </div>
                    {/* Suggestion chips */}
                    <div className="flex gap-1.5 mt-2.5">
                      <span className="text-[9px] text-[#202124] bg-[#E8EAED] rounded-full px-2.5 py-1 border border-[#dadce0]">Tell me more</span>
                      <span className="text-[9px] text-[#202124] bg-[#E8EAED] rounded-full px-2.5 py-1 border border-[#dadce0]">Compare options</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
