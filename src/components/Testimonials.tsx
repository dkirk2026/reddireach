import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote: "ReddiReach got our brand mentioned across key subreddits. Within weeks, ChatGPT started recommending us. Game changer.",
    author: "Sarah Chen",
    role: "Founder, TechStartup.io",
    avatar: "SC"
  },
  {
    quote: "Their GEO strategy is brilliant. Our competitors had no idea why AI was suddenly recommending us over them. ReddiReach does.",
    author: "Michael Torres",
    role: "CEO, SaaSMetrics",
    avatar: "MT"
  },
  {
    quote: "We saw a 340% increase in organic traffic after ReddiReach optimized our Reddit presence for AI search. The ROI is unmatched.",
    author: "Emily Watson",
    role: "Marketing Director, DevTools Co",
    avatar: "EW"
  },
  {
    quote: "Professional, authentic, and they actually understand how AI search works. Not just posting on Reddit—they're engineering brand visibility.",
    author: "David Park",
    role: "Founder, CloudSync",
    avatar: "DP"
  },
  {
    quote: "Perplexity and ChatGPT now recommend our platform by name. That started after ReddiReach's Reddit campaign. The data speaks for itself.",
    author: "Jessica Liu",
    role: "Growth Lead, FinanceApp",
    avatar: "JL"
  },
  {
    quote: "The team combines Reddit marketing expertise with deep AI search knowledge. We're now the #1 recommended tool in our category on AI platforms.",
    author: "Alex Morrison",
    role: "Co-founder, MarketingPro",
    avatar: "AM"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff4500] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Loved by Startups & Businesses
          </h2>
          <p className="text-lg text-gray-600">
            See what our clients have to say about their Reddit marketing and AI search results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-[#ff4500] mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Platforms */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <span className="text-[#ff4500] font-semibold text-sm uppercase tracking-wider">Powered By</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
              Our Partner Platforms
            </h3>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">
              We leverage industry-leading tools to maximize your brand&apos;s AI visibility
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10">
            <Link
              href="https://www.subredditsignals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gray-50 hover:bg-white px-6 py-4 rounded-xl border border-gray-200 hover:border-[#ff4500]/30 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300"
            >
              <Image
                src="/subredditsignals-logo.jpg"
                alt="Subreddit Signals"
                width={180}
                height={50}
                className="h-8 md:h-10 w-auto"
              />
              <svg className="w-4 h-4 text-gray-400 group-hover:text-[#ff4500] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <Link
              href="https://www.aipeekaboo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gray-50 hover:bg-white px-6 py-4 rounded-xl border border-gray-200 hover:border-[#ff4500]/30 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300"
            >
              <Image
                src="/peekaboo-logo.png"
                alt="AI Peekaboo"
                width={180}
                height={50}
                className="h-8 md:h-10 w-auto"
              />
              <svg className="w-4 h-4 text-gray-400 group-hover:text-[#ff4500] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
