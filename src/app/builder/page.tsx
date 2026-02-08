"use client";

import Navbar from "@/components/Navbar";
import BuilderChat from "@/components/builder/BuilderChat";
import Footer from "@/components/Footer"; 
import { motion } from "framer-motion";

export default function BuilderPage() {
  return (
    <main className="min-h-screen bg-[#0B001E] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-x-hidden relative">
      
      {/* --- Under Development Note --- */}
      <div className="fixed top-24 right-4 z-50 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-red-500/10 border border-red-500/50 backdrop-blur-md px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="text-red-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">
            Under Development
          </span>
        </motion.div>
      </div>

      <Navbar />

      {/* --- Global Background Atmosphere --- */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#C77DFF] rounded-full blur-[150px] opacity-[0.08]" />
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#FDC500] rounded-full blur-[120px] opacity-[0.05]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-2xl"
        >
            <span className="inline-block py-1 px-3 rounded-full bg-[#C77DFF]/10 border border-[#C77DFF]/20 text-[#C77DFF] text-xs font-bold tracking-widest mb-4 uppercase">
                AI Architect v1.0
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                Not a Configurator.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDC500] to-[#C77DFF]">A Brain.</span>
            </h1>
            <p className="text-gray-400 text-lg">
                Tell us your budget, games, or software. Our AI understands compatibility, bottlenecks, and Indian market availability.
            </p>
        </motion.div>

        {/* Chat Component */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full"
        >
            <BuilderChat />
        </motion.div>

        {/* Features Grid below Chat */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {[
                { title: "Smart Budgeting", desc: "Knows exactly where to spend and where to save." },
                { title: "Zero Bottlenecks", desc: "Ensures CPU and GPU are perfectly matched." },
                { title: "Real Availability", desc: "Only suggests parts currently in stock in India." }
            ].map((feature, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 transition-colors">
                    <h3 className="text-[#FDC500] font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
            ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}