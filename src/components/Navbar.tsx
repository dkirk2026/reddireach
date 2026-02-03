"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sectionIds = ["features", "how-it-works", "testimonials", "faq", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Set Home as active when at top
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("/");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
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
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-600 hover:text-[#ff4500] hover:bg-orange-50"
                  : "text-gray-700 hover:text-[#ff4500] hover:bg-white/60"
              } ${activeSection === link.href ? "text-[#ff4500]" : ""}`}
            >
              {link.label}
              {activeSection === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#ff4500] rounded-full" />
              )}
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
            { label: "GEO", href: "/geo" },
            { label: "Blog", href: "/blog" },
            { label: "Pricing", href: "/pricing" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-600 hover:text-[#ff4500] hover:bg-orange-50"
                  : "text-gray-700 hover:text-[#ff4500] hover:bg-white/60"
              } ${activeSection === link.href ? "text-[#ff4500]" : ""}`}
            >
              {link.label}
              {activeSection === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#ff4500] rounded-full" />
              )}
            </Link>
          ))}
          <a
            href="https://calendly.com/kirkco/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-[#ff4500] hover:bg-[#cc3700] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange-200/50"
          >
            Let&apos;s Chat
          </a>
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
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
          id="mobile-menu"
          role="menu"
          aria-hidden={!isMenuOpen}
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
              { label: "GEO", href: "/geo" },
              { label: "Blog", href: "/blog" },
              { label: "Pricing", href: "/pricing" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 hover:text-[#ff4500] hover:bg-orange-50 rounded-xl transition-colors font-medium ${
                  activeSection === link.href
                    ? "text-[#ff4500] bg-orange-50"
                    : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href="https://calendly.com/kirkco/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#ff4500] hover:bg-[#cc3700] text-white px-4 py-3 rounded-xl font-semibold transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Let&apos;s Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
