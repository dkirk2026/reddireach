import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ReddiReach",
  description: "ReddiReach Terms of Service - The terms and conditions governing your use of our services.",
  alternates: {
    canonical: "https://reddireach.com/terms",
  },
};

export default function TermsOfService() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-[#ff4500] hover:text-[#cc3700] mb-6 focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:ring-offset-2 rounded"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          <p className="mt-4 text-gray-600">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray max-w-none">
        <section aria-labelledby="agreement">
          <h2 id="agreement">Agreement to Terms</h2>
          <p>
            By accessing or using the website and services of Kirk &amp; Co., LLC, doing business as ReddiReach (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section aria-labelledby="services">
          <h2 id="services">Our Services</h2>
          <p>
            ReddiReach provides Reddit marketing and Generative Engine Optimization (GEO) services. Our services include:
          </p>
          <ul>
            <li>Reddit marketing strategy and consultation</li>
            <li>Organic Reddit engagement services</li>
            <li>AI search optimization (GEO)</li>
            <li>Brand visibility monitoring</li>
          </ul>
        </section>

        <section aria-labelledby="user-responsibilities">
          <h2 id="user-responsibilities">User Responsibilities</h2>
          <p>When using our services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not use our services for any unlawful purpose</li>
            <li>Not misrepresent your identity or affiliation</li>
            <li>Respect intellectual property rights</li>
          </ul>
        </section>

        <section aria-labelledby="platform-compliance">
          <h2 id="platform-compliance">Platform Compliance</h2>
          <p>
            Our services are designed to comply with Reddit&apos;s Terms of Service and community guidelines. We do not engage in:
          </p>
          <ul>
            <li>Vote manipulation or brigading</li>
            <li>Spam or unsolicited commercial messages</li>
            <li>Fake accounts or astroturfing</li>
            <li>Any activity that violates Reddit&apos;s policies</li>
          </ul>
        </section>

        <section aria-labelledby="payment">
          <h2 id="payment">Payment Terms</h2>
          <p>
            Payment terms will be outlined in your service agreement. All fees are non-refundable unless otherwise specified in writing. We reserve the right to modify our pricing at any time.
          </p>
        </section>

        <section aria-labelledby="intellectual-property">
          <h2 id="intellectual-property">Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, and software, is the property of ReddiReach or its licensors and is protected by intellectual property laws.
          </p>
        </section>

        <section aria-labelledby="limitation">
          <h2 id="limitation">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Kirk &amp; Co., LLC (DBA ReddiReach) shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
          </p>
        </section>

        <section aria-labelledby="disclaimer">
          <h2 id="disclaimer">Disclaimer</h2>
          <p>
            Our services are provided &quot;as is&quot; without warranties of any kind. We do not guarantee specific results, rankings, or outcomes from our marketing services.
          </p>
        </section>

        <section aria-labelledby="termination">
          <h2 id="termination">Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services at any time for any reason, including violation of these terms.
          </p>
        </section>

        <section aria-labelledby="governing-law">
          <h2 id="governing-law">Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
          </p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes">Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact">Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact us through our website contact form.
          </p>
        </section>
      </article>
    </main>
  );
}
