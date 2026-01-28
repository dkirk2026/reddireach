"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: centered nav — left links · logo · right links + CTA */}
        <div className="hidden md:flex items-center justify-center gap-1">
          {[
            { label: "Home", href: "/" },
            { label: "Who We Are", href: "#features" },
            { label: "Our Approach", href: "#how-it-works" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-600 hover:text-[#ff4500] hover:bg-orange-50"
                  : "text-gray-700 hover:text-[#ff4500] hover:bg-white/60"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Center logo */}
          <Link href="/" className="flex-shrink-0 mx-4">
            <Image
              src="/logo.webp"
              alt="ReddiReach"
              width={120}
              height={80}
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-12" : "h-16"
              }`}
              priority
            />
          </Link>

          {[
            { label: "Testimonials", href: "#testimonials" },
            { label: "Blog", href: "#" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-600 hover:text-[#ff4500] hover:bg-orange-50"
                  : "text-gray-700 hover:text-[#ff4500] hover:bg-white/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-2 bg-[#ff4500] hover:bg-[#cc3700] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange-200/50"
          >
            Let&apos;s Chat
          </Link>
        </div>

        {/* Mobile: logo centered, hamburger on right */}
        <div className="flex md:hidden justify-between items-center">
          <div className="w-10" /> {/* Spacer to balance hamburger */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.webp"
              alt="ReddiReach"
              width={120}
              height={80}
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-10" : "h-14"
              }`}
              priority
            />
          </Link>
          <button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-1 border border-gray-100">
            {[
              { label: "Home", href: "/" },
              { label: "Who We Are", href: "#features" },
              { label: "Our Approach", href: "#how-it-works" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Blog", href: "#" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-gray-600 hover:text-[#ff4500] hover:bg-orange-50 rounded-xl transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#contact"
                className="block bg-[#ff4500] hover:bg-[#cc3700] text-white px-4 py-3 rounded-xl font-semibold transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Let&apos;s Chat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
