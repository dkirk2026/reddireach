"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-xl font-bold text-gray-800">ReddiReach</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-[#ff4500] transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-[#ff4500] transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-[#ff4500] transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-[#ff4500] transition-colors">
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="bg-[#ff4500] hover:bg-[#cc3700] text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="#features" className="text-gray-600 hover:text-[#ff4500] transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-[#ff4500] transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-[#ff4500] transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-[#ff4500] transition-colors">
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="bg-[#ff4500] hover:bg-[#cc3700] text-white px-6 py-2 rounded-full font-medium transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
