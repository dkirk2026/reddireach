import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  ourWork: [
    { name: "Our Approach", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" }
  ],
  services: [
    { name: "Pricing", href: "/pricing" },
    { name: "GEO Services", href: "/geo" },
    { name: "AI SEO Checklist", href: "/checklist" },
  ],
  company: [
    { name: "About Us", href: "#features" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "https://calendly.com/kirkco/chat" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" }
  ]
};

export default function Footer() {
  return (
    <footer role="contentinfo" aria-label="Site footer" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.webp" alt="ReddiReach" width={160} height={56} className="h-14 w-auto invert" />
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              The leading Reddit marketing and AI search optimization agency for brands, startups and small businesses.
            </p>
            {/* Social Links */}
            <div className="flex gap-4" role="list" aria-label="Social media links">
              <a
                href="https://www.linkedin.com/company/105312582"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#ff4500] rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Connect with us on LinkedIn"
                role="listitem"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Work</h3>
            <ul className="space-y-3">
              {footerLinks.ourWork.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-[#ff4500] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-[#ff4500] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ff4500] transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="hover:text-[#ff4500] transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-[#ff4500] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ReddiReach. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with care for Reddit marketers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
