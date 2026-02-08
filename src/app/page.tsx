"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorks from "@/components/landing/HowItWorks";
import UseCasesSection from "@/components/landing/UseCases";
import PCScroll from "@/components/PCScroll";
import Link from "next/link"; // Added missing import for Footer links

export default function Home() {
  return (
    <main className="min-h-screen bg-[#10002B] text-white selection:bg-[#FDC500] selection:text-[#240046]">
      <Navbar />

      {/* Immersive Scroll Experience - Moved to Top */}
      <section className="relative w-full">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#10002B] to-transparent z-10 pointer-events-none" />
        <PCScroll />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a001a] to-transparent z-10 pointer-events-none" />
      </section>

      <HeroSection />

      <FeaturesSection />

      <HowItWorks />

      <UseCasesSection />

      {/* Footer */}
      <footer className="w-full bg-[#0a001a] py-16 px-8 z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-3xl font-black text-[#FDC500] mb-6 tracking-tighter">XQrjg</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Custom PCs built for your life, not just trends.
              Verified sellers, AI recommendations, and premium engineering.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/builder" className="hover:text-[#FDC500] transition-colors">AI PC Builder</Link></li>
              <li><Link href="/marketplace" className="hover:text-[#FDC500] transition-colors">Quotation Market</Link></li>
              <li><Link href="/about" className="hover:text-[#FDC500] transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/trust-safety" className="hover:text-[#FDC500] transition-colors">Trust & Safety</Link></li>
              <li><a href="#" className="hover:text-[#FDC500] transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-[#FDC500] transition-colors">Warranty Claims</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Stay Connected</h4>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FDC500] hover:text-[#10002B] transition-all cursor-pointer">
                Twitter
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C77DFF] hover:text-[#10002B] transition-all cursor-pointer">
                Insta
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-xs font-mono">
            © 2026 XQrjg Inc. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-gray-600 text-xs font-mono uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
