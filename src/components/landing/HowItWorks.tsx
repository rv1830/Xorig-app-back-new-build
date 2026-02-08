"use client";

import { motion } from "framer-motion";
import { 
    MapPin, FileText, Package, Wrench, Truck, 
    Zap, AlertCircle, CheckCircle2 
} from "lucide-react";

// --- Data: The 5-Step Process ---
const steps = [
    {
        step: "01",
        title: "Intent + City",
        desc: "Tell us your goal and location. We need to know where the parts are coming from.",
        icon: <MapPin className="w-6 h-6" />,
        meta: "Input"
    },
    {
        step: "02",
        title: "The Blueprint",
        desc: "We share AI-optimized builds or a custom quote based on real-time stock.",
        icon: <FileText className="w-6 h-6" />,
        meta: "24 Hrs"
    },
    {
        step: "03",
        title: "Procurement",
        desc: "We source genuine components from verified offline distributors.",
        icon: <Package className="w-6 h-6" />,
        meta: "3-9 Days"
    },
    {
        step: "04",
        title: "Build & Validate",
        desc: "Assembly, cable management, stress tests, and thermal benchmarking.",
        icon: <Wrench className="w-6 h-6" />,
        meta: "Precision"
    },
    {
        step: "05",
        title: "Dispatch",
        desc: "Secure packaging and insured delivery straight to your setup.",
        icon: <Truck className="w-6 h-6" />,
        meta: "~10-20 Days"
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-[#0B001E] relative overflow-hidden">
            
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#C77DFF] rounded-full blur-[150px] opacity-[0.08]" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#FDC500] rounded-full blur-[120px] opacity-[0.05]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                
                {/* --- 1. Header & Value Prop --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Best of both worlds: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">Online Speed.</span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDC500] to-[#FFD54F]">Offline Pricing.</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        XO sits at the intersection of online marketplaces and offline distributors to get you the best value — 
                        then we do the part most people can't: <span className="text-white font-medium">picking the right components for your use-case.</span>
                    </p>
                </motion.div>

                {/* --- 2. Myth vs Reality --- */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mb-32 max-w-5xl mx-auto"
                >
                    <div className="bg-[#1A052A] p-8 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none border border-red-500/10 relative overflow-hidden group">
                        <div className="absolute top-4 right-4 text-red-500/20 group-hover:text-red-500/40 transition-colors">
                            <AlertCircle className="w-12 h-12" />
                        </div>
                        <h3 className="text-red-400 font-mono text-sm uppercase tracking-widest mb-2">The Myth</h3>
                        <p className="text-2xl font-bold text-white mb-2">"You can't game without a GPU."</p>
                        <p className="text-gray-500 text-sm">Usually leads to overspending on budget builds or buying bad cheap cards.</p>
                    </div>

                    <div className="bg-gradient-to-br from-[#240046] to-[#15002B] p-8 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none border border-[#FDC500]/30 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#FDC500]/5 pointer-events-none" />
                        <div className="absolute top-4 right-4 text-[#FDC500]/20">
                            <CheckCircle2 className="w-12 h-12" />
                        </div>
                        <h3 className="text-[#FDC500] font-mono text-sm uppercase tracking-widest mb-2">The Reality</h3>
                        <p className="text-2xl font-bold text-white mb-2">APUs change the game.</p>
                        <p className="text-gray-300 text-sm">
                            Modern chips deliver great results at certain budgets — <span className="text-white font-semibold">if the configuration is done correctly.</span> That's what we're here for.
                        </p>
                    </div>
                </motion.div>

                {/* --- 3. The Timeline (5 Steps) --- */}
                <div className="relative pb-10">
                    <div className="text-center mb-20">
                        <span className="text-[#C77DFF] font-mono text-xs uppercase tracking-[0.2em] border border-[#C77DFF]/30 px-3 py-1 rounded-full">The Roadmap</span>
                        <h3 className="text-3xl font-bold text-white mt-4">Ask XO What Fits</h3>
                        <p className="text-gray-400 text-sm mt-2">From "I'm not sure" to "Why does this feel so fast?"</p>
                    </div>

                    {/* Desktop Connector Line */}
                    <div className="hidden md:block absolute top-[165px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#ffffff]/10 to-transparent z-0">
                        <motion.div 
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#FDC500]/50 to-transparent blur-sm"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
                        {steps.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="relative z-10 group mt-4" // Added Margin Top for the whole block
                            >
                                <div className="flex flex-col items-center text-center">
                                    {/* Icon Container with more Top Margin */}
                                    <div className="relative mb-10 mt-2"> 
                                        <div className="w-16 h-16 rounded-2xl bg-[#10002B] border border-white/10 flex items-center justify-center text-white group-hover:border-[#FDC500] group-hover:shadow-[0_0_20px_-5px_rgba(253,197,0,0.3)] transition-all duration-300 z-10 relative">
                                            {item.icon}
                                        </div>
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#240046] border border-white/10 flex items-center justify-center text-xs font-mono text-[#C77DFF] z-20">
                                            {item.step}
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#FDC500] transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-400 text-xs leading-relaxed mb-5 min-h-[60px]">
                                        {item.desc}
                                    </p>
                                    
                                    <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono uppercase text-gray-300 tracking-wider">
                                        {item.meta}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- 4. Trust Footer --- */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 text-center"
                >
                    <div className="flex items-center gap-2 text-[#FDC500]">
                        <Zap className="w-5 h-5 fill-current" />
                        <span className="font-bold text-lg">100+ Builds Shipped</span>
                    </div>
                    <span className="hidden md:block text-gray-600">•</span>
                    <p className="text-gray-400">
                        Zero "random parts" energy. Validated for Indian conditions.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}