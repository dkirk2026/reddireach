import Link from "next/link";
import HeroStoryAnimation from "./HeroStoryAnimation";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-200/60 bg-orange-50/50 rounded-full">
              <svg className="w-4 h-4 text-[#ff4500] flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z" />
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165" />
              </svg>
              <span className="text-[#ff4500] text-xs font-medium tracking-wide">
                Reddit is the #1 source LLMs use to answer questions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              Ready to have{" "}
              <span className="gradient-text">AI recommend</span>{" "}
              your brand?
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
              Our marketing agency specializes in getting your brand recommended by AI using Reddit and GEO.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#ff4500] hover:bg-[#cc3700] text-white rounded-full font-semibold text-base transition-all hover:-translate-y-0.5 shadow-md shadow-orange-200/40"
              >
                Let&apos;s Chat
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 rounded-full font-semibold text-base transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicator */}
            <p className="text-gray-500 text-sm opacity-60">
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
