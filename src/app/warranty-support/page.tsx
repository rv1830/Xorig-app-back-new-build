"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Headphones, AlertTriangle, Hammer, Zap, BadgeCheck, FileText } from "lucide-react";

export default function WarrantyPage() {
    return (
        <main className="min-h-screen bg-[#0B001E] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-x-hidden relative">
            <Navbar />

            {/* --- Global Background Atmosphere --- */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#C77DFF] rounded-full blur-[150px] opacity-[0.08]" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#FDC500] rounded-full blur-[120px] opacity-[0.05]" />
            </div>

            <section className="pt-32 pb-20 px-6 relative z-10">
                <div className="container mx-auto max-w-5xl">
                    
                    {/* Header Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-[#C77DFF]/30 bg-[#C77DFF]/5 text-[#C77DFF] text-xs font-bold uppercase tracking-widest mb-4">
                            XO Assurance
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                            WE GOT YOUR <span className="text-[#FDC500]">BACK.</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Buying a PC is an investment. We ensure your hardware stays protected so you can focus on winning.
                        </p>
                    </motion.div>

                    {/* Main Warranty Cards */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ShieldCheck className="w-24 h-24" />
                            </div>
                            <ShieldCheck className="w-12 h-12 text-[#C77DFF] mb-6" />
                            <h3 className="text-2xl font-bold mb-3">Multi-Year Manufacturer Warranty</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Every part inside an XO Rig carries its original individual warranty (3-10 years). We act as your single point of contact to handle the headache of RMAs.
                            </p>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Headphones className="w-24 h-24" />
                            </div>
                            <Headphones className="w-12 h-12 text-[#FDC500] mb-6" />
                            <h3 className="text-2xl font-bold mb-3">Lifetime Technical Support</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Stuck on a driver update? Games crashing? Our engineers provide remote troubleshooting via AnyDesk for the entire life of your machine.
                            </p>
                        </motion.div>
                    </div>

                    {/* Claims Process Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
                            <Zap className="w-6 h-6 text-[#FDC500] fill-[#FDC500]" />
                            The Claim Protocol
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { step: "01", icon: <FileText/>, title: "Report", desc: "WhatsApp us your Invoice ID and a photo/video of the issue." },
                                { step: "02", icon: <Zap/>, title: "Diagnose", desc: "Remote session to rule out software glitches or bugs." },
                                { step: "03", icon: <BadgeCheck/>, title: "Resolve", desc: "Guided RMA or pickup for faulty hardware components." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl relative">
                                    <span className="text-4xl font-black text-white/5 absolute top-4 right-4">{item.step}</span>
                                    <div className="text-[#FDC500] mb-4">{item.icon}</div>
                                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Exclusion List (Bento Style) */}
                    <div className="bg-[#1A052A] rounded-[2.5rem] p-10 border border-red-500/20 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-red-400">
                                <AlertTriangle className="w-6 h-6" />
                                Boundary Conditions
                            </h3>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                                {[
                                    "Physical damage or liquid spills.",
                                    "Electrical surges (Use a UPS, bhai!)",
                                    "Unauthorized BIOS or Hardware mods.",
                                    "Software corruption due to Pirated content.",
                                    "Natural wear and tear of cosmetics.",
                                    "Third-party repair attempts."
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                                        <span className="text-sm md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 opacity-5">
                            <Hammer className="w-64 h-64 text-red-500" />
                        </div>
                    </div>

                    {/* Support CTA */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-20 text-center p-10 bg-gradient-to-br from-[#240046] to-[#0B001E] rounded-3xl border border-white/10"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-white">Need Support Right Now?</h3>
                        <p className="text-gray-400 mb-8 max-w-md mx-auto italic">"Our team is faster than your ping."</p>
                        <a 
                            href="https://wa.me/918901089898" 
                            target="_blank"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:scale-105 transition-transform"
                        >
                            Message on WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}