import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FounderQuotes from "@/components/FounderQuotes";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AISearchOptimization from "@/components/AISearchOptimization";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <FounderQuotes />
        <Features />
        <HowItWorks />
        <AISearchOptimization />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
