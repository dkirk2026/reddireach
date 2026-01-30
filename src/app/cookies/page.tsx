import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | ReddiReach",
  description: "ReddiReach Cookie Policy - Learn about how we use cookies and similar technologies.",
};

export default function CookiePolicy() {
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
          <h1 className="text-4xl font-bold text-gray-900">Cookie Policy</h1>
          <p className="mt-4 text-gray-600">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray max-w-none">
        <section aria-labelledby="what-are-cookies">
          <h2 id="what-are-cookies">What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.
          </p>
        </section>

        <section aria-labelledby="how-we-use">
          <h2 id="how-we-use">How We Use Cookies</h2>
          <p>Kirk &amp; Co., LLC, doing business as ReddiReach (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), uses cookies for the following purposes:</p>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            We use analytics cookies to understand how visitors interact with our website. This helps us improve our website and services. These cookies collect information anonymously.
          </p>

          <h3>Functional Cookies</h3>
          <p>
            These cookies allow the website to remember choices you make (such as your preferred language) and provide enhanced, more personalized features.
          </p>

          <h3>Marketing Cookies</h3>
          <p>
            These cookies may be set through our site by advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other sites.
          </p>
        </section>

        <section aria-labelledby="third-party">
          <h2 id="third-party">Third-Party Cookies</h2>
          <p>
            Some cookies on our website are set by third-party services. These include:
          </p>
          <ul>
            <li>Google Analytics - for website usage analysis</li>
            <li>Social media platforms - for sharing functionality</li>
            <li>Marketing tools - for understanding campaign effectiveness</li>
          </ul>
        </section>

        <section aria-labelledby="managing-cookies">
          <h2 id="managing-cookies">Managing Cookies</h2>
          <p>
            You can control and manage cookies in several ways:
          </p>
          <h3>Browser Settings</h3>
          <p>
            Most web browsers allow you to control cookies through their settings. You can usually find these in the &quot;Options&quot; or &quot;Preferences&quot; menu of your browser.
          </p>
          <ul>
            <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies</li>
            <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies</li>
            <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies</li>
            <li><strong>Edge:</strong> Settings &gt; Privacy &gt; Cookies</li>
          </ul>

          <h3>Opt-Out Links</h3>
          <p>
            You can opt out of certain third-party cookies:
          </p>
          <ul>
            <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
            <li>Network Advertising Initiative: <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">NAI Opt-out</a></li>
          </ul>
        </section>

        <section aria-labelledby="cookie-consent">
          <h2 id="cookie-consent">Cookie Consent</h2>
          <p>
            When you first visit our website, you will be shown a cookie consent banner. You can choose to accept or decline non-essential cookies. You can change your preferences at any time.
          </p>
        </section>

        <section aria-labelledby="impact">
          <h2 id="impact">Impact of Disabling Cookies</h2>
          <p>
            If you choose to disable cookies, some features of our website may not function properly. Essential cookies cannot be disabled as they are necessary for the website to work.
          </p>
        </section>

        <section aria-labelledby="updates">
          <h2 id="updates">Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Please check this page periodically for updates.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact">Contact Us</h2>
          <p>
            If you have questions about our use of cookies, please contact us through our website contact form.
          </p>
        </section>
      </article>
    </main>
  );
}
