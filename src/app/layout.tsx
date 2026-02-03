import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  title: "ReddiReach | #1 Reddit Marketing and AI Search Optimization Agency",
  description: "Boost your brand's visibility on Reddit and AI search engines like ChatGPT, Claude, Perplexity, and Google AI. ReddiReach offers organic Reddit marketing and GEO (Generative Engine Optimization) services for brands, startups, and small businesses.",
  keywords: "Reddit marketing, Reddit advertising, organic marketing, startup marketing, small business marketing, GEO, generative engine optimization, AI search optimization, ChatGPT marketing, Perplexity SEO",
  authors: [{ name: "ReddiReach" }],
  creator: "ReddiReach",
  publisher: "ReddiReach",
  metadataBase: new URL("https://reddireach.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reddireach.com",
    siteName: "ReddiReach",
    title: "ReddiReach | #1 Reddit Marketing and AI Search Optimization Agency",
    description: "Boost your brand's visibility on Reddit and AI search engines like ChatGPT, Claude, Perplexity, and Google AI. Organic Reddit marketing and GEO services for brands, startups, and small businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReddiReach - Reddit Marketing & AI Search Optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReddiReach | #1 Reddit Marketing and AI Search Optimization Agency",
    description: "Boost your brand's visibility on Reddit and AI search engines. Organic marketing and GEO services for brands, startups and small businesses.",
    images: ["/og-image.png"],
    creator: "@reddireach",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ReddiReach",
    url: "https://reddireach.com",
    logo: "https://reddireach.com/logo.webp",
    description: "Expert Reddit marketing and AI search optimization services for brands, startups and small businesses.",
    foundingDate: "2024",
    sameAs: [
      "https://twitter.com/reddireach",
      "https://linkedin.com/company/reddireach",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["English"],
    },
    serviceArea: {
      "@type": "Place",
      name: "Worldwide",
    },
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reddit Marketing & GEO Services",
    provider: {
      "@type": "Organization",
      name: "ReddiReach",
    },
    description: "Organic Reddit marketing and Generative Engine Optimization (GEO) services to boost your brand's visibility on Reddit and AI search engines like ChatGPT, Claude, Perplexity, and Google AI.",
    serviceType: "Digital Marketing",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Reddit Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reddit Marketing",
            description: "Authentic engagement and brand mentions across relevant subreddits",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GEO - Generative Engine Optimization",
            description: "Optimize your brand's presence for AI search engines like ChatGPT and Perplexity",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C3W16CY6DX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C3W16CY6DX');
          `}
        </Script>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#ff4500] focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
