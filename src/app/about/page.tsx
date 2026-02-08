"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Heart, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0B001E] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-x-hidden">
            <Navbar />

            {/* --- Global Background Atmosphere (Consistent with other pages) --- */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#C77DFF] rounded-full blur-[150px] opacity-[0.08]" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#FDC500] rounded-full blur-[120px] opacity-[0.05]" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="text-xs font-mono text-[#FDC500] tracking-widest uppercase">The XO Mission</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                        BUILT BY<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDC500] to-[#C77DFF]">PC LOVERS.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Buying hardware in India is confusing, fragmented, and misleading. <br className="hidden md:block" />
                        <strong className="text-white font-bold">We fixed it.</strong>
                    </p>
                </motion.div>
            </section>

            {/* Manifesto / Core Beliefs */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left Column: Text Content */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-black text-[#FDC500] mb-8 uppercase tracking-widest flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-[#FDC500]"></span>
                                Our Belief System
                            </h2>
                            <ul className="space-y-10">
                                <li className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#1A052A] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#FDC500] group-hover:shadow-[0_0_20px_-5px_rgba(253,197,0,0.3)] transition-all duration-300">
                                        <Heart className="w-6 h-6 text-[#FDC500]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FDC500] transition-colors">Life-First Builds</h3>
                                        <p className="text-gray-400 leading-relaxed">Your PC should match your life, not just trends. Whether you're a coder, creator, or gamer, the hardware serves <i>you</i>.</p>
                                    </div>
                                </li>
                                <li className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#1A052A] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#C77DFF] group-hover:shadow-[0_0_20px_-5px_rgba(199,125,255,0.3)] transition-all duration-300">
                                        <ShieldCheck className="w-6 h-6 text-[#C77DFF]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C77DFF] transition-colors">Transparency, Not Guesswork</h3>
                                        <p className="text-gray-400 leading-relaxed">Hardware specs, pricing, and availability should be clear. No hidden costs. No "call for price".</p>
                                    </div>
                                </li>
                                <li className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#1A052A] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#FDC500] group-hover:shadow-[0_0_20px_-5px_rgba(253,197,0,0.3)] transition-all duration-300">
                                        <Zap className="w-6 h-6 text-[#FDC500]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FDC500] transition-colors">Excitement, Not Stress</h3>
                                        <p className="text-gray-400 leading-relaxed">Buying tech should feel amazing from the first click to the first boot. We remove the headache.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Right Column: Visual Card */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30, rotate: 3 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                            whileHover={{ rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-square flex flex-col justify-center items-center text-center p-12 bg-gradient-to-br from-[#240046] to-[#15002B] rounded-3xl border border-white/10 shadow-2xl transition-transform duration-500 group"
                        >
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-[#C77DFF]/5 rounded-3xl pointer-events-none group-hover:bg-[#C77DFF]/10 transition-colors" />
                            
                            {/* Decorative Background Text */}
                            <h2 className="text-[12rem] font-black text-white/[0.02] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">XO</h2>
                            
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                                    XO = <span className="text-[#C77DFF] drop-shadow-[0_0_15px_rgba(199,125,255,0.5)]">LOVE</span>
                                </h3>
                                <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                                    RIG = <span className="text-[#FDC500] drop-shadow-[0_0_15px_rgba(253,197,0,0.5)]">POWER</span>
                                </h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-32 px-4 text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to feel the difference?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/builder" className="group px-8 py-4 bg-[#FDC500] text-[#10002B] font-bold rounded-xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_4px_20px_-5px_rgba(253,197,0,0.3)] flex items-center justify-center gap-2">
                            Start Building <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/marketplace" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all hover:border-white/20">
                            Explore Pre-Builts
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}