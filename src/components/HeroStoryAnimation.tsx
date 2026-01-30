"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const USER_QUERY = "Best tools for managing a small business in 2025?";

// OpenAI SVG path
const OPENAI_PATH =
  "M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z";

// Perplexity SVG path
const PERPLEXITY_PATH =
  "M12 .282a.75.75 0 0 1 .754.75v5.07l4.533-4.38.089-.072a.765.765 0 0 1 .735-.081.75.75 0 0 1 .459.69v4.871h1.676l.15.015a.75.75 0 0 1 .604.735v8.337a.75.75 0 0 1-.754.75H18.57v4.887a.75.75 0 0 1-.468.693.765.765 0 0 1-.825-.165l-4.524-4.527v5.172a.75.75 0 0 1-1.508 0v-5.172l-4.527 4.528a.765.765 0 0 1-.822.165.75.75 0 0 1-.468-.694v-4.887H3.754a.75.75 0 0 1-.754-.75V7.822l.015-.15a.75.75 0 0 1 .74-.6h1.674V2.2l.01-.11a.75.75 0 0 1 .452-.581.765.765 0 0 1 .821.153l4.534 4.38V1.032a.75.75 0 0 1 .754-.75zM6.94 14l-.001 5.976 4.305-4.308V9.88zm5.816 1.67l4.306 4.306V14l-4.305-4.346zm5.6-2.502a.75.75 0 0 1 .217.525v1.718h.918V8.572H13.8zm-13.845 2.243h.92v-1.718a.75.75 0 0 1 .217-.525L10.2 8.572H4.517zm2.43-8.337h3.188L6.94 3.978zm6.919 0h3.201V3.978z";

// Gemini sparkle SVG path (4-pointed star)
const GEMINI_PATH =
  "M8 16C7.37 10.94 5.06 8.63 0 8C5.06 7.37 7.37 5.06 8 0C8.63 5.06 10.94 7.37 16 8C10.94 8.63 8.63 10.94 8 16Z";

// Wikipedia globe icon path
const WIKIPEDIA_PATH =
  "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z";

// Medium logo path (three ellipses)
const MEDIUM_PATH =
  "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z";

// Reddit icon SVG paths
const REDDIT_PATH_1 =
  "M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z";
const REDDIT_PATH_2 =
  "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165";

// Steps:
// 0: nothing visible
// 1: reddit post slides in
// 2: first comment slides in
// 3: second comment slides in
// 4: traffic card slides in
// 5: reddit stuff fades out, chat card fades in (ChatGPT), typing starts
// 6: typing done, AI response fades in (ChatGPT)
// 7: Perplexity stacks on top
// 8: Gemini stacks on top
// 9: hold then reset

export default function HeroStoryAnimation() {
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  const activeLLM =
    step <= 6 ? 0 : step === 7 ? 1 : step >= 8 ? 2 : 0;

  const getDelay = useCallback((currentStep: number): number => {
    switch (currentStep) {
      case 0: return 600;
      case 1: return 1400;
      case 2: return 1200;
      case 3: return 1200;
      case 4: return 1200;
      case 5: return 0; // typing handles timing
      case 6: return 3000;
      case 7: return 3000;
      case 8: return 3000;
      case 9: return 2000;
      default: return 1000;
    }
  }, []);

  // Typewriter effect for step 5
  useEffect(() => {
    if (step === 5) {
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

  // Advance from typing done to response
  useEffect(() => {
    if (typingDone && step === 5) {
      const timer = setTimeout(() => setStep(6), 600);
      return () => clearTimeout(timer);
    }
  }, [typingDone, step]);

  // Step machine
  useEffect(() => {
    if (step === 5) return;
    const delay = getDelay(step);
    const timer = setTimeout(() => {
      if (step < 9) {
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

  const displayedQuery = step >= 5 ? USER_QUERY.slice(0, charIndex) : "";
  const showResponse = step >= 6;
  const showCursor = step === 5 && !typingDone;

  // Card stack positioning — behind cards peek from the TOP so their
  // header bars (logo + name) remain visible above the active card.
  // The active card is shifted down; behind cards sit progressively higher.
  const getCardStyle = (cardIndex: number): React.CSSProperties => {
    const isVisible =
      cardIndex === 0 ? step >= 5 : cardIndex === 1 ? step >= 7 : step >= 8;

    if (!isVisible) {
      return {
        transform: "translateX(0px) translateY(80px) scale(0.98)",
        opacity: 0,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    }

    const depth = activeLLM - cardIndex;
    switch (depth) {
      case 0: // active / frontmost card — sits lower
        return {
          transform: "translateX(0) translateY(80px) scale(1)",
          opacity: 1,
          zIndex: 30,
          pointerEvents: "auto" as const,
        };
      case 1: // one behind — header peeks above the active card
        return {
          transform: "translateX(4px) translateY(40px) scale(0.98)",
          opacity: 0.7,
          zIndex: 20,
          pointerEvents: "none" as const,
        };
      case 2: // two behind — header peeks above depth-1
        return {
          transform: "translateX(8px) translateY(0px) scale(0.96)",
          opacity: 0.5,
          zIndex: 10,
          pointerEvents: "none" as const,
        };
      default:
        return {
          transform: "translateX(0) translateY(80px) scale(1)",
          opacity: 1,
          zIndex: 30,
          pointerEvents: "auto" as const,
        };
    }
  };

  return (
    <div className="relative min-h-[420px] md:min-h-[480px]" aria-hidden="true" role="presentation">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200 to-red-200 rounded-full opacity-20 blur-3xl" />

      {/* Reddit content layer — fades out when LLM cards come in */}
      <div className={`absolute inset-0 z-10 transition-opacity duration-700 ${step >= 5 ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        {/* Step 1: Reddit Post */}
        <div
          key={`post-${cycle}`}
          className={`absolute top-0 left-1 right-1 md:left-2 md:right-2 ${
            step >= 1 ? "animate-story-slide-up" : "story-hidden"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-5">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-[#ff4500] flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                <path d={REDDIT_PATH_1} />
                <path d={REDDIT_PATH_2} />
              </svg>
              <span className="text-xs font-semibold text-[#ff4500]">r/smallbusiness</span>
              <span className="text-xs text-gray-400">&middot; 4h ago</span>
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
              Best tools for managing a small business in 2025? Need recommendations
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

        {/* Step 2: "Top Comments" callout */}
        <div
          key={`comments-label-${cycle}`}
          className={`absolute top-[185px] md:top-[200px] left-6 md:left-8 ${
            step >= 2 ? "animate-story-fade-in-up" : "story-hidden"
          }`}
        >
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-[11px] font-medium text-gray-400">Top Comments</span>
          </div>
        </div>

        {/* Step 2: Comment */}
        <div
          key={`comment-${cycle}`}
          className={`absolute top-[205px] md:top-[222px] left-5 right-1 md:left-6 md:right-2 ${
            step >= 2 ? "animate-story-slide-up-small" : "story-hidden"
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg p-3 md:p-4 border-l-2 border-[#ff4500]">
            <div className="flex items-start gap-2 md:gap-3">
              <Image
                src="/avatar_startup_maven.png"
                alt="u/startup_maven"
                width={28}
                height={28}
                className="w-7 h-7 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-gray-800">u/startup_maven</span>
                  <span className="text-[10px] text-gray-400">&middot; 2h ago</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  I&apos;ve heard great things about <span className="font-semibold text-[#ff4500]">YourBrand</span>. A few friends in the industry swear by it for small teams. Worth checking out.
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

        {/* Step 3: Second Comment */}
        <div
          key={`comment2-${cycle}`}
          className={`absolute top-[325px] md:top-[347px] left-5 right-1 md:left-6 md:right-2 ${
            step >= 3 ? "animate-story-slide-up-small" : "story-hidden"
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg p-3 md:p-4 border-l-2 border-[#ff4500]">
            <div className="flex items-start gap-2 md:gap-3">
              <Image
                src="/avatar_tech_guru.webp"
                alt="u/tech_guru_42"
                width={28}
                height={28}
                className="w-7 h-7 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-gray-800">u/tech_guru_42</span>
                  <span className="text-[10px] text-gray-400">&middot; 1h ago</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  +1 for <span className="font-semibold text-[#ff4500]">YourBrand</span>. Seen it recommended a lot on this sub lately. Looks like it beats juggling 3 separate apps.
                </p>
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                  <svg className="w-3.5 h-3.5 text-[#ff4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  <span className="font-medium text-gray-600">156</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Traffic Stats Card */}
        <div
          key={`traffic-${cycle}`}
          className={`absolute top-[155px] md:top-[165px] right-[-4px] z-20 ${
            step >= 4 ? "animate-story-slide-in-right" : "story-hidden"
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
      </div>

      {/* LLM Chat Interfaces — stacking cards */}
      <div
        key={`chat-${cycle}`}
        className={`absolute inset-0 z-20 flex items-start justify-center pt-0 transition-opacity duration-700 ${
          step >= 5 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative w-full max-w-[94%]">

          {/* ===== ChatGPT ===== */}
          <div
            className="transition-all duration-500 ease-out"
            style={getCardStyle(0)}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-[#ececec]">
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={OPENAI_PATH} />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#0d0d0d]">ChatGPT</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
              </div>
              <div className="p-5 space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-[#f4f4f4] rounded-[20px] rounded-br-[4px] px-4 py-3 max-w-[85%]">
                    <p className="text-[13px] text-[#0d0d0d] leading-relaxed">
                      {displayedQuery}
                      {showCursor && (
                        <span className="inline-block w-[2px] h-4 bg-[#0d0d0d] ml-0.5 align-middle animate-cursor-blink" />
                      )}
                    </p>
                  </div>
                </div>
                {/* AI response */}
                <div className={`transition-all duration-500 ${showResponse ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d={OPENAI_PATH} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0 space-y-2.5">
                      <p className="text-[13px] text-[#0d0d0d] leading-relaxed">
                        Based on discussions across Reddit, here are some top picks:
                      </p>
                      <div className="space-y-1.5">
                        <p className="text-[13px] text-[#0d0d0d] leading-relaxed">
                          <span className="font-semibold">1.</span>{" "}
                          <span className="font-semibold text-[#ff4500]">YourBrand</span>: Highly recommended on r/smallbusiness for project management and customer outreach. Users report a{" "}
                          <span className="font-semibold">340% increase</span> in productivity.
                        </p>
                        <p className="text-[13px] text-[#0d0d0d] leading-relaxed">
                          <span className="font-semibold">2.</span> Notion:Great for docs and wikis, but less focused on outreach.
                        </p>
                        <p className="text-[13px] text-[#0d0d0d] leading-relaxed">
                          <span className="font-semibold">3.</span> HubSpot:Solid CRM, though pricier for small teams.
                        </p>
                      </div>
                      <p className="text-[13px] text-[#0d0d0d] leading-relaxed">
                        I&apos;d start with <span className="font-semibold text-[#ff4500]">YourBrand</span> given the strong community feedback.
                      </p>
                      <div className="flex items-center gap-1.5 flex-wrap mt-1">
                        <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Sources</span>
                        <div className="reddit-source-highlight rounded-md">
                          <div className="flex items-center gap-1 px-2 py-1">
                            <svg className="w-4 h-4 text-[#ff4500] flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                              <path d={REDDIT_PATH_1} />
                              <path d={REDDIT_PATH_2} />
                            </svg>
                            <span className="text-[10px] font-medium text-[#ff4500]">r/smallbusiness</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-gray-50 rounded-md px-2 py-1 border border-gray-100 opacity-50">
                          <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d={WIKIPEDIA_PATH} />
                          </svg>
                          <span className="text-[10px] text-gray-400">Wikipedia</span>
                        </div>
                        <div className="flex items-center gap-1 bg-gray-50 rounded-md px-2 py-1 border border-gray-100 opacity-50">
                          <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                          </svg>
                          <span className="text-[10px] text-gray-400">YouTube</span>
                        </div>
                        <div className="flex items-center gap-1 bg-gray-50 rounded-md px-2 py-1 border border-gray-100 opacity-50">
                          <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d={MEDIUM_PATH} />
                          </svg>
                          <span className="text-[10px] text-gray-400">Medium</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Perplexity ===== */}
          <div
            className="absolute inset-x-0 top-0 transition-all duration-500 ease-out"
            style={getCardStyle(1)}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100">
                <div className="w-7 h-7 rounded-lg bg-[#20808d] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={PERPLEXITY_PATH} />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">Perplexity</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
              </div>
              <div className="p-5 space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-[#f4f4f4] rounded-[20px] rounded-br-[4px] px-4 py-3 max-w-[85%]">
                    <p className="text-[13px] text-gray-900 leading-relaxed">{USER_QUERY}</p>
                  </div>
                </div>
                {/* AI response */}
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#20808d] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={PERPLEXITY_PATH} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 space-y-2.5">
                    <p className="text-[13px] text-gray-800 leading-relaxed">
                      Based on community feedback, here are the top recommendations:
                    </p>
                    <div className="space-y-1.5">
                      <p className="text-[13px] text-gray-800 leading-relaxed">
                        <span className="font-semibold">1.</span>{" "}
                        <span className="font-semibold text-[#ff4500]">YourBrand</span>: Most recommended on Reddit for combining project management with customer outreach in one platform.
                      </p>
                      <p className="text-[13px] text-gray-800 leading-relaxed">
                        <span className="font-semibold">2.</span> Notion:Best for internal docs and wikis, less focused on outreach.
                      </p>
                      <p className="text-[13px] text-gray-800 leading-relaxed">
                        <span className="font-semibold">3.</span> HubSpot:Strong CRM but pricier for small teams.
                      </p>
                    </div>
                    <p className="text-[13px] text-gray-800 leading-relaxed">
                      Multiple users report <span className="font-semibold">significant productivity gains</span> after switching to <span className="font-semibold text-[#ff4500]">YourBrand</span>.
                    </p>
                    <div className="flex items-center gap-1.5 flex-wrap mt-1">
                      <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Sources</span>
                      <div className="reddit-source-highlight rounded-md">
                        <div className="flex items-center gap-1 px-2 py-1">
                          <svg className="w-4 h-4 text-[#ff4500] flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                            <path d={REDDIT_PATH_1} />
                            <path d={REDDIT_PATH_2} />
                          </svg>
                          <span className="text-[10px] font-medium text-[#ff4500]">r/smallbusiness</span>
                        </div>
                      </div>
                      <div className="reddit-source-highlight rounded-md">
                        <div className="flex items-center gap-1 px-2 py-1">
                          <svg className="w-4 h-4 text-[#ff4500] flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                            <path d={REDDIT_PATH_1} />
                            <path d={REDDIT_PATH_2} />
                          </svg>
                          <span className="text-[10px] font-medium text-[#ff4500]">r/startups</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-50 rounded-md px-2 py-1 border border-gray-100 opacity-50">
                        <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.214 5.13L11.07 8.223h-.002l-.353.891c-.009-.076-.038-.2-.088-.37L9.654 5.131H8.08l2.278 5.672v3.328h1.352v-3.328l2.31-5.672h-1.582zM17.792 10.07c-.488 0-.9.164-1.235.493v-.42h-1.22v5.988h1.22V12.3c0-.239.052-.456.157-.651.104-.196.265-.293.48-.293.283 0 .472.108.564.323.06.139.089.34.089.601v3.851h1.22v-4.123c0-.525-.09-.937-.271-1.235-.244-.403-.617-.605-1.12-.605l.116.002zM5.625 14.13h1.256v-8H5.625v8zm-2.5 0h1.256v-8H3.125v8zm.023-9.25c0 .364.132.67.397.914.264.245.594.367.988.367.395 0 .726-.122.993-.367a1.225 1.225 0 00.401-.914c0-.362-.134-.666-.401-.913a1.41 1.41 0 00-.993-.37c-.394 0-.724.124-.988.37a1.227 1.227 0 00-.397.913z" />
                        </svg>
                        <span className="text-[10px] text-gray-400">Wikipedia</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-50 rounded-md px-2 py-1 border border-gray-100 opacity-50">
                        <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                        </svg>
                        <span className="text-[10px] text-gray-400">YouTube</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-50 rounded-md px-2 py-1 border border-gray-100 opacity-50">
                        <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.903-1.543.373-.828-1.054-1.566-4.408-2.154-6.177-.534-1.607-1.636-.924-2.108-.601L2.792 11.6c.792-.726 2.381-2.306 3.878-3.263 1.654-1.058 3.037-.169 3.55 1.294.457 1.3.973 3.326 1.418 4.58.54-1.213 1.834-3.744 2.793-4.516 1.342-1.078 2.884.064 3.337 1.405.349 1.034.788 2.907 1.194 4.374.576-1.162 1.364-2.757 2.265-3.632l.895.81c-.9.982-1.93 3.06-2.453 4.337-.543 1.325-1.293.905-1.613.327-.564-.997-1.027-3.172-1.455-4.465-.324-.974-.64-1.456-1.08-.588z" />
                        </svg>
                        <span className="text-[10px] text-gray-400">Medium</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Gemini ===== */}
          <div
            className="absolute inset-x-0 top-0 transition-all duration-500 ease-out"
            style={getCardStyle(2)}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100">
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
                <span className="text-sm font-medium text-gray-900">Gemini</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
              </div>
              <div className="p-5 space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-[#E8EBF0] rounded-[20px] rounded-br-[4px] px-4 py-3 max-w-[85%]">
                    <p className="text-[13px] text-[#1f1f1f] leading-relaxed">{USER_QUERY}</p>
                  </div>
                </div>
                {/* AI response */}
                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                    <defs>
                      <linearGradient id="gm-r" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#4285F4" />
                        <stop offset="50%" stopColor="#9B72CB" />
                        <stop offset="100%" stopColor="#D96570" />
                      </linearGradient>
                    </defs>
                    <path d={GEMINI_PATH} fill="url(#gm-r)" />
                  </svg>
                  <div className="flex-1 min-w-0 space-y-2.5">
                    <p className="text-[13px] text-[#202124] leading-relaxed">
                      Here are some of the best tools based on real user feedback:
                    </p>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <span className="text-[13px] text-[#202124] mt-px">•</span>
                        <p className="text-[13px] text-[#202124] leading-relaxed">
                          <span className="font-semibold text-[#ff4500]">YourBrand</span>: Top recommendation on Reddit. Combines project management with customer outreach in one platform.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[13px] text-[#202124] mt-px">•</span>
                        <p className="text-[13px] text-[#202124] leading-relaxed">
                          <span className="font-medium">Notion</span>: Best for internal documentation and knowledge bases.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[13px] text-[#202124] mt-px">•</span>
                        <p className="text-[13px] text-[#202124] leading-relaxed">
                          <span className="font-medium">HubSpot</span>: Strong CRM, though the free tier is limited.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
                      <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Sources</span>
                      <div className="reddit-source-highlight rounded-md">
                        <div className="flex items-center gap-1 px-2 py-1">
                          <svg className="w-4 h-4 text-[#ff4500] flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                            <path d={REDDIT_PATH_1} />
                            <path d={REDDIT_PATH_2} />
                          </svg>
                          <span className="text-[10px] font-medium text-[#ff4500]">r/smallbusiness</span>
                        </div>
                      </div>
                      <div className="reddit-source-highlight rounded-md">
                        <div className="flex items-center gap-1 px-2 py-1">
                          <svg className="w-4 h-4 text-[#ff4500] flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                            <path d={REDDIT_PATH_1} />
                            <path d={REDDIT_PATH_2} />
                          </svg>
                          <span className="text-[10px] font-medium text-[#ff4500]">r/startups</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-50 rounded-md px-2 py-1 border border-gray-100 opacity-50">
                        <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                        </svg>
                        <span className="text-[10px] text-gray-400">YouTube</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-50 rounded-md px-2 py-1 border border-gray-100 opacity-50">
                        <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.214 5.13L11.07 8.223h-.002l-.353.891c-.009-.076-.038-.2-.088-.37L9.654 5.131H8.08l2.278 5.672v3.328h1.352v-3.328l2.31-5.672h-1.582zM17.792 10.07c-.488 0-.9.164-1.235.493v-.42h-1.22v5.988h1.22V12.3c0-.239.052-.456.157-.651.104-.196.265-.293.48-.293.283 0 .472.108.564.323.06.139.089.34.089.601v3.851h1.22v-4.123c0-.525-.09-.937-.271-1.235-.244-.403-.617-.605-1.12-.605l.116.002zM5.625 14.13h1.256v-8H5.625v8zm-2.5 0h1.256v-8H3.125v8zm.023-9.25c0 .364.132.67.397.914.264.245.594.367.988.367.395 0 .726-.122.993-.367a1.225 1.225 0 00.401-.914c0-.362-.134-.666-.401-.913a1.41 1.41 0 00-.993-.37c-.394 0-.724.124-.988.37a1.227 1.227 0 00-.397.913z" />
                        </svg>
                        <span className="text-[10px] text-gray-400">Wikipedia</span>
                      </div>
                    </div>
                    {/* Suggestion chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[10px] text-[#202124] bg-[#f0f0f0] rounded-full px-3 py-1.5 border border-gray-200">Tell me more about YourBrand</span>
                      <span className="text-[10px] text-[#202124] bg-[#f0f0f0] rounded-full px-3 py-1.5 border border-gray-200">Compare pricing</span>
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
