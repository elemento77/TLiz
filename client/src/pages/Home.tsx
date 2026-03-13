/**
 * Home Page — Tarot da Liz
 * Design: Esoteric Dark — Cormorant Garamond + DM Sans
 * Colors: Void black, deep indigo, gold, parchment, smoke
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      <main>
        <HeroSection />
        <div id="depoimentos">
          <SocialProofSection />
        </div>
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
}
