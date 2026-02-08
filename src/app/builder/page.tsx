"use client";

import Navbar from "@/components/Navbar";
import BuilderChat from "@/components/builder/BuilderChat";
import { motion } from "framer-motion";

export default function BuilderPage() {
  return (
    <main className="min-h-screen bg-[#10002B] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-hidden relative">
      <Navbar />

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#240046] rounded-full blur-[150px] opacity-40 animate-pulse" />
         <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#C77DFF] rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex flex-col items-center">
        
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
                <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl backdrop-blur-sm text-center">
                    <h3 className="text-[#FDC500] font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
            ))}
        </div>

      </div>
    </main>
  );
}
