import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing | ReddiReach - Reddit Marketing & GEO Services",
  description:
    "Transparent pricing for Reddit marketing and AI search optimization services. Reddit Growth from $1,495/month. AI Search Optimization from $4,995/month. Get your brand recommended by ChatGPT, Claude, Perplexity, and Google AI.",
  keywords:
    "Reddit marketing pricing, GEO pricing, AI search optimization cost, Reddit advertising cost, generative engine optimization pricing",
  alternates: {
    canonical: "https://reddireach.com/pricing",
  },
  openGraph: {
    title: "Pricing | ReddiReach - Reddit Marketing & GEO Services",
    description:
      "Transparent pricing for Reddit marketing and AI search optimization. Reddit Growth from $1,495/month. AI Search Optimization from $4,995/month.",
    type: "website",
    url: "https://reddireach.com/pricing",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReddiReach Pricing - Reddit Marketing & GEO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | ReddiReach - Reddit Marketing & GEO",
    description:
      "Transparent pricing for Reddit marketing and AI search optimization services for brands, startups, and small businesses.",
    images: ["/og-image.png"],
  },
};

const plans = [
  {
    name: "Reddit Growth",
    price: "$1,495",
    period: "/month",
    description: "Perfect for businesses wanting to scale with Reddit Marketing",
    features: [
      "10 targeted subreddits",
      "20 engagements per month",
      "Basic reporting",
      "Email support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "AI Search Optimization",
    price: "$4,995",
    period: "/month",
    description: "Perfect for businesses that want to show up in AI search results",
    features: [
      "20 targeted subreddits",
      "30 engagements per month",
      "Digital PR mentions",
      "Content marketing",
      "SEO site optimization",
      "Advanced reporting",
      "Email support",
      "Monthly phone call",
    ],
    highlighted: true,
    cta: "Start Growing",
  },
  {
    name: "Custom",
    price: "Custom",
    period: "",
    description: "Major scale for brands that want to take the world by storm",
    features: [
      "Unlimited subreddits",
      "Unlimited engagements",
      "Digital PR mentions",
      "Content marketing",
      "SEO site optimization",
      "Custom analytics integration",
      "Dedicated account manager",
      "Priority support",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

const faqs = [
  {
    question: "What's included in each plan?",
    answer:
      "Each plan includes different levels of service tailored to your business needs. Our Reddit Growth plan focuses on building authentic Reddit presence, while our AI Search Optimization plan includes comprehensive services like Digital PR, content marketing, and SEO optimization to help your brand get recommended by AI assistants.",
  },
  {
    question: "How long until I see results?",
    answer:
      "AI search optimization is a long-term strategy. It typically takes 3-6 months to start seeing AI search engines pick up and recommend your brand. Reddit engagement results are often visible sooner, within 4-8 weeks.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can upgrade your plan at any time. Downgrades can be made at the end of each 6-month commitment period.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We do not offer refunds. Our services require significant upfront investment in strategy, research, and content creation. We recommend booking a call to ensure our services are the right fit before committing.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "Yes, we require a minimum 6-month commitment. AI search optimization and authentic Reddit marketing take time to show results, and a 6-month engagement allows us to execute a comprehensive strategy and demonstrate meaningful ROI.",
  },
  {
    question: "Can you work with my existing marketing team?",
    answer:
      "Absolutely. We regularly collaborate with in-house teams and other agencies. We'll integrate seamlessly with your existing workflows and marketing strategy.",
  },
];

export default function PricingPage() {
  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Pricing/Product Schema for SEO
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ReddiReach Marketing Services",
    description: "Reddit marketing and AI search optimization services for brands, startups, and small businesses",
    brand: {
      "@type": "Brand",
      name: "ReddiReach",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Reddit Growth",
        description: "Reddit marketing services including 10 targeted subreddits and 20 engagements per month",
        price: "1495",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://reddireach.com/pricing",
      },
      {
        "@type": "Offer",
        name: "AI Search Optimization",
        description: "Comprehensive GEO services including Reddit marketing, Digital PR, content marketing, and SEO optimization",
        price: "4995",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://reddireach.com/pricing",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-white">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
        />

        {/* Hero Section */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your business needs.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-b from-[#ff4500] to-[#cc3700] text-white shadow-2xl shadow-orange-200 scale-105"
                      : "bg-gray-50 border border-gray-200 hover:shadow-lg"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h2
                      className={`text-xl font-semibold mb-2 ${
                        plan.highlighted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.name}
                    </h2>
                    <div className="flex items-baseline justify-center gap-1">
                      <span
                        className={`text-4xl font-bold ${
                          plan.highlighted ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={
                          plan.highlighted ? "text-orange-100" : "text-gray-500"
                        }
                      >
                        {plan.period}
                      </span>
                    </div>
                    <p
                      className={`mt-2 text-sm ${
                        plan.highlighted ? "text-orange-100" : "text-gray-500"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 ${
                            plan.highlighted
                              ? "text-orange-200"
                              : "text-[#ff4500]"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span
                          className={
                            plan.highlighted ? "text-white" : "text-gray-600"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://calendly.com/kirkco/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 px-6 rounded-full font-semibold text-center transition-all ${
                      plan.highlighted
                        ? "bg-white text-[#ff4500] hover:bg-gray-100"
                        : "bg-[#ff4500] text-white hover:bg-[#cc3700]"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Approach to AI Search Optimization
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Strategic Research",
                  description:
                    "We identify the platforms, communities, and sources that AI models trust and reference when making recommendations.",
                },
                {
                  title: "Authentic Presence",
                  description:
                    "Build genuine brand presence across Reddit, publications, and other sources that influence AI responses.",
                },
                {
                  title: "Content Optimization",
                  description:
                    "Create and optimize content designed to be cited and referenced by AI assistants.",
                },
                {
                  title: "Performance Tracking",
                  description:
                    "Monitor your brand's visibility across AI platforms and track progress over time.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#ff4500]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-[#ff4500]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-xl border border-gray-200"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-gray-900">
                    {faq.question}
                    <svg
                      className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 mb-8">
              Book a free strategy call to discuss your goals and find the right
              plan for your business.
            </p>
            <a
              href="https://calendly.com/kirkco/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff4500] hover:bg-[#cc3700] text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Book a Free Call
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
