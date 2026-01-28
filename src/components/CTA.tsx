"use client";

import { useState } from "react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#ff4500] via-[#ff6b35] to-[#ff8c42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Want to Expand your Business through AI Search and Reddit Marketing?
          </h2>
          <p className="text-lg md:text-xl text-orange-100 mb-4">
            Join the 500+ companies we&apos;ve provided consulting and marketing services for.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-white mb-10">
            Get your brand recommended by AI today!
          </p>

          {/* Calendly / Chat CTA */}
          {!submitted ? (
            <div className="space-y-6">
              <p className="text-orange-100 text-lg">Grab a time to chat here:</p>
              <button
                onClick={() => setSubmitted(true)}
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#ff4500] rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Let&apos;s Chat
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-lg mx-auto">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Thanks for your interest!</h3>
              <p className="text-orange-100">We&apos;ll be in touch within 24 hours to schedule your free consultation.</p>
            </div>
          )}

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>500+ companies served</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>GEO + Reddit experts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
