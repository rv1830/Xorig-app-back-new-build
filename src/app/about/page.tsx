"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Zap, ShieldCheck, ArrowRight, CheckCircle2, Sparkles, Rocket } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0B001E] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-x-hidden relative">
            <Navbar />

            {/* --- Global Background Atmosphere --- */}
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
                        We love PC building — and we want you to feel it too. <br />
                        Buying a PC shouldn't feel like homework. <strong className="text-white font-bold">It should feel like excitement.</strong>
                    </p>
                </motion.div>
            </section>

            {/* Manifesto / Core Beliefs */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h2 className="text-3xl font-black text-[#FDC500] uppercase tracking-widest flex items-center gap-3">
                                    <span className="w-8 h-[2px] bg-[#FDC500]"></span>
                                    Our Promise
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    XO Rig exists so buyers can stop drowning in conflicting advice. 
                                    You tell us what you want to do, and we take responsibility for the build — from the right part choices to a clean, tested final machine.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: <Sparkles className="w-5 h-5" />, text: "Intent-first recommendations" },
                                    { icon: <Zap className="w-5 h-5" />, text: "Best value sourcing" },
                                    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Clean builds + validation" },
                                    { icon: <Rocket className="w-5 h-5" />, text: "Guided buying experience" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#C77DFF]/50 transition-colors">
                                        <div className="text-[#C77DFF]">{item.icon}</div>
                                        <span className="text-sm font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30, rotate: 3 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                            whileHover={{ rotate: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-square flex flex-col justify-center items-center text-center p-12 bg-gradient-to-br from-[#240046] to-[#15002B] rounded-3xl border border-white/10 shadow-2xl transition-transform duration-500 group"
                        >
                            <div className="absolute inset-0 bg-[#C77DFF]/5 rounded-3xl group-hover:bg-[#C77DFF]/10 transition-colors" />
                            <h2 className="text-[12rem] font-black text-white/[0.02] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">XO</h2>
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

            {/* Experience Section */}
            <section className="py-20 bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-12">BE CAREFREE.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-4xl">🧘‍♂️</div>
                            <h3 className="text-xl font-bold text-[#FDC500]">You Sit Back</h3>
                            <p className="text-gray-400">No more checking 10 different YouTube benchmarks or forum threads.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-4xl">🛠️</div>
                            <h3 className="text-xl font-bold text-[#C77DFF]">We Engineer</h3>
                            <p className="text-gray-400">Every cable, every screw, and every driver update is handled by experts.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-4xl">📦</div>
                            <h3 className="text-xl font-bold text-white">XO Delivers</h3>
                            <p className="text-gray-400">Your dream build arrives at your doorstep, battle-tested and ready to go.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-32 px-4 text-center relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">STILL DROWNING IN SPECS?</h2>
                    <p className="text-gray-400 text-lg mb-10">Let us take the responsibility. Build with XO.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/builder" className="group px-10 py-5 bg-[#FDC500] text-[#10002B] font-bold rounded-2xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_4px_25px_-5px_rgba(253,197,0,0.4)] flex items-center justify-center gap-2">
                            Build Your Dream <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}