"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t border-gray-200 shadow-lg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h2 id="cookie-consent-title" className="text-lg font-semibold text-gray-900 mb-1">
              We value your privacy
            </h2>
            <p id="cookie-consent-description" className="text-sm text-gray-600">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
              By clicking &quot;Accept All&quot;, you consent to our use of cookies.
              Read our{" "}
              <Link href="/cookies" className="text-[#ff4500] hover:underline focus:outline-none focus:ring-2 focus:ring-[#ff4500] rounded">
                Cookie Policy
              </Link>{" "}
              for more information.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={acceptEssential}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Essential Only
            </button>
            <button
              onClick={acceptAll}
              className="px-5 py-2.5 text-sm font-medium text-white bg-[#ff4500] hover:bg-[#cc3700] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:ring-offset-2"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
