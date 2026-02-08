"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorks from "@/components/landing/HowItWorks";
import UseCasesSection from "@/components/landing/UseCases";
import PCScroll from "@/components/PCScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B001E] text-white selection:bg-[#FDC500] selection:text-[#240046]">
      <Navbar />

      {/* Immersive Scroll Experience - Moved to Top */}
      <section className="relative w-full">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0B001E] to-transparent z-10 pointer-events-none" />
        <PCScroll />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a001a] to-transparent z-10 pointer-events-none" />
      </section>

      <HeroSection />

      <FeaturesSection />

      <HowItWorks />

      <UseCasesSection />

      <Footer />
    </main>
  );
}
