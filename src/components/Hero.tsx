import Link from "next/link";
import HeroStoryAnimation from "./HeroStoryAnimation";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full">
              <span className="text-[#ff4500] text-sm font-medium">
                AI Search + Reddit Marketing Experts
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ready to have{" "}
              <span className="gradient-text">AI recommend</span>{" "}
              your brand?
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Our marketing agency specializes in getting your brand recommended by AI using Reddit and GEO.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ff4500] hover:bg-[#cc3700] text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-200"
              >
                Let&apos;s Chat
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 hover:border-[#ff4500] text-gray-700 hover:text-[#ff4500] rounded-full font-semibold text-lg transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicator */}
            <p className="text-gray-500 text-base pt-2">
              Join the <span className="font-semibold text-gray-800">500+</span> happy clients our team has served to date
            </p>
          </div>

          {/* Right Content - Animated Story Sequence */}
          <HeroStoryAnimation />
        </div>
      </div>
    </section>
  );
}
