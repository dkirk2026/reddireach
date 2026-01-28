const testimonials = [
  {
    quote: "ReddiReach transformed our Reddit presence. We went from zero to 50k monthly visitors from Reddit alone. Their authentic approach really works.",
    author: "Sarah Chen",
    role: "Founder, TechStartup.io",
    avatar: "SC"
  },
  {
    quote: "The team understands Reddit culture better than anyone. They helped us launch successfully on r/startups and got our product in front of exactly the right audience.",
    author: "Michael Torres",
    role: "CEO, SaaSMetrics",
    avatar: "MT"
  },
  {
    quote: "I was skeptical about Reddit marketing, but ReddiReach proved me wrong. Our conversion rate from Reddit traffic is 3x higher than other channels.",
    author: "Emily Watson",
    role: "Marketing Director, DevTools Co",
    avatar: "EW"
  },
  {
    quote: "Professional, transparent, and incredibly effective. They don't just post content—they build genuine community relationships that last.",
    author: "David Park",
    role: "Founder, CloudSync",
    avatar: "DP"
  },
  {
    quote: "The analytics and insights they provide are invaluable. We now understand exactly what resonates with our Reddit audience.",
    author: "Jessica Liu",
    role: "Growth Lead, FinanceApp",
    avatar: "JL"
  },
  {
    quote: "Best investment we made in 2024. Reddit is now our #1 source of qualified leads, all thanks to ReddiReach's strategy.",
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
            See what our clients have to say about their Reddit marketing results.
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

        {/* Logos section */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {["TechCrunch", "ProductHunt", "Y Combinator", "Indie Hackers", "Hacker News"].map((company, index) => (
              <div key={index} className="text-xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
