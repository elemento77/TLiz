/**
 * Home Page — Sales Conversion Landing Page
 * Design: Neo-Brutalist Commerce
 * Typography: Space Grotesk (display) + DM Sans (body)
 * Colors: Off-white cream, charcoal, burnt orange, forest green, danger red
 */

import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
}
