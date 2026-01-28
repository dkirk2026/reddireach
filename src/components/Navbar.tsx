"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.webp" alt="ReddiReach" width={140} height={48} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-[#ff4500] transition-colors">
              Who We Are
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-[#ff4500] transition-colors">
              Our Approach
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-[#ff4500] transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-[#ff4500] transition-colors">
              FAQ
            </Link>
            <Link
              href="#contact"
              className="bg-[#ff4500] hover:bg-[#cc3700] text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Let&apos;s Chat
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
                Who We Are
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-[#ff4500] transition-colors">
                Our Approach
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-[#ff4500] transition-colors">
                Testimonials
              </Link>
              <Link href="#faq" className="text-gray-600 hover:text-[#ff4500] transition-colors">
                FAQ
              </Link>
              <Link
                href="#contact"
                className="bg-[#ff4500] hover:bg-[#cc3700] text-white px-6 py-2 rounded-full font-medium transition-colors text-center"
              >
                Let&apos;s Chat
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
