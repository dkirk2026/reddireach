export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#ff4500] via-[#ff6b35] to-[#ff8c42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get AI to recommend your brand
          </h2>
          <p className="text-lg md:text-xl text-orange-100 mb-10">
            Book a free call. We&apos;ll show you exactly which subreddits and AI models matter for your niche.
          </p>

          {/* Calendly CTA */}
          <div className="space-y-6">
            <a
              href="https://calendly.com/kirkco/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#ff4500] rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#ff4500]"
            >
              Book a Free Consultation
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <ul className="mt-10 flex flex-wrap justify-center gap-8 text-white/80" aria-label="Service highlights">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free consultation</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>500+ companies served</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>GEO + Reddit experts</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
