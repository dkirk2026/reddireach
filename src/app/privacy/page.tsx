import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ReddiReach",
  description: "ReddiReach Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-4 text-gray-600">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray max-w-none">
        <section aria-labelledby="introduction">
          <h2 id="introduction">Introduction</h2>
          <p>
            Kirk &amp; Co., LLC, doing business as ReddiReach (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section aria-labelledby="information-collection">
          <h2 id="information-collection">Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Fill out contact forms on our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a consultation</li>
            <li>Engage with our services</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Company name</li>
            <li>Phone number</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
          </ul>
        </section>

        <section aria-labelledby="information-use">
          <h2 id="information-use">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Analyze website usage and optimize user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section aria-labelledby="information-sharing">
          <h2 id="information-sharing">Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Professional advisors (lawyers, accountants)</li>
            <li>Law enforcement when required by law</li>
          </ul>
        </section>

        <section aria-labelledby="your-rights">
          <h2 id="your-rights">Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section aria-labelledby="data-security">
          <h2 id="data-security">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section aria-labelledby="contact-us">
          <h2 id="contact-us">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please contact us through our website contact form.
          </p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>
      </article>
    </main>
  );
}
