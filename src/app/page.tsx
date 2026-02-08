"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Cpu, Zap, Monitor, ArrowRight } from "lucide-react";
import PCScroll from "@/components/PCScroll";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#10002B] text-white selection:bg-[#FDC500] selection:text-[#240046]">

      {/* Navigation - Fixed with specific design */}
      <Navbar />

      {/* Scrollytelling Component */}
      <PCScroll />

      {/* Features Section */}
      <section className="relative w-full py-32 px-4 bg-[#10002B] z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {/* Card 1 */}
          <motion.div
            className="glass-card p-10 flex flex-col items-start relative overflow-hidden group h-full min-h-[400px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C77DFF]/20 blur-[80px] rounded-full group-hover:bg-[#C77DFF]/30 transition-all"></div>
            <div className="p-4 rounded-2xl bg-[#240046]/50 mb-6 text-[#C77DFF] border border-white/10 shadow-inner">
              <Cpu size={40} />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Custom Configs</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Choose every component from CPU to cooling. Real-time compatibility checks ensure a perfect build.
            </p>
            <div className="mt-auto flex items-center text-[#FDC500] text-lg font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
              Configure Now <ArrowRight size={24} className="ml-2" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="glass-card p-10 flex flex-col items-start relative overflow-hidden group h-full min-h-[400px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDC500]/20 blur-[80px] rounded-full group-hover:bg-[#FDC500]/30 transition-all"></div>
            <div className="p-4 rounded-2xl bg-[#240046]/50 mb-6 text-[#FDC500] border border-white/10 shadow-inner">
              <Zap size={40} />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Fast Delivery</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Get your custom rig delivered in record time. Priority assembly and testing for urgent needs.
            </p>
            <div className="mt-auto flex items-center text-[#FDC500] text-lg font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
              Learn More <ArrowRight size={24} className="ml-2" />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="glass-card p-10 flex flex-col items-start relative overflow-hidden group h-full min-h-[400px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-[80px] rounded-full group-hover:bg-white/20 transition-all"></div>
            <div className="p-4 rounded-2xl bg-[#240046]/50 mb-6 text-white border border-white/10 shadow-inner">
              <Monitor size={40} />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Pro Workstations</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Engineered for professionals. Optimized for 3D rendering, video editing, and AI development.
            </p>
            <div className="mt-auto flex items-center text-[#FDC500] text-lg font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
              Explore Workstations <ArrowRight size={24} className="ml-2" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0a001a] py-12 px-8 z-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-[#FDC500]">Xorigg</div>
          <div className="flex gap-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-gray-600 text-sm">
            © 2026 Xorigg Inc. All rights reserved.
          </div>
        </div>
      </footer>

    </main>
  );
}
