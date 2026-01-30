import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reddireach.com";

export const metadata: Metadata = {
  // Basic Meta
  title: {
    default: "ReddiReach | AI Visibility Through Reddit Marketing",
    template: "%s | ReddiReach",
  },
  description:
    "Get your brand recommended by ChatGPT, Perplexity, and AI search. ReddiReach specializes in Reddit marketing and GEO (Generative Engine Optimization) to boost your AI visibility.",
  keywords: [
    "Reddit marketing",
    "AI visibility",
    "GEO",
    "Generative Engine Optimization",
    "ChatGPT marketing",
    "AI search optimization",
    "Reddit advertising",
    "organic marketing",
    "startup marketing",
    "brand visibility",
    "Perplexity marketing",
    "AI recommendations",
    "Reddit SEO",
    "social media marketing",
  ],
  authors: [{ name: "ReddiReach" }],
  creator: "ReddiReach",
  publisher: "ReddiReach",

  // Canonical & Base
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Robots
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

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ReddiReach",
    title: "ReddiReach | AI Visibility Through Reddit Marketing",
    description:
      "Get your brand recommended by ChatGPT, Perplexity, and AI search. Expert Reddit marketing and GEO strategies for startups and businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReddiReach - AI Visibility Through Reddit Marketing",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "ReddiReach | AI Visibility Through Reddit Marketing",
    description:
      "Get your brand recommended by ChatGPT, Perplexity, and AI search. Expert Reddit marketing and GEO strategies.",
    images: ["/og-image.png"],
    creator: "@reddireach",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Theme
  other: {
    "theme-color": "#ff4500",
    "msapplication-TileColor": "#ff4500",
  },

  // Verification (add your IDs when you have them)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ReddiReach",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.webp`,
      },
      description:
        "ReddiReach specializes in Reddit marketing and Generative Engine Optimization (GEO) to help brands get recommended by AI search platforms like ChatGPT and Perplexity.",
      sameAs: [
        // Add social media URLs when available
        // "https://twitter.com/reddireach",
        // "https://linkedin.com/company/reddireach",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "ReddiReach",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Expert Reddit marketing and AI visibility optimization services",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "ReddiReach | AI Visibility Through Reddit Marketing",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Get your brand recommended by ChatGPT, Perplexity, and AI search through expert Reddit marketing and GEO strategies.",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Reddit Marketing & AI Visibility",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Professional Reddit marketing services that leverage Generative Engine Optimization (GEO) to boost your brand's visibility in AI search results.",
      serviceType: "Digital Marketing",
      areaServed: "Worldwide",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
