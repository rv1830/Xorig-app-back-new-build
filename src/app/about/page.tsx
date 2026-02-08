"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Heart, Zap, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#10002B] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 text-center">
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-[#C77DFF] rounded-full blur-[200px] opacity-10 animate-pulse" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                        BUILT BY<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDC500] to-[#C77DFF]">PC LOVERS.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Buying hardware in India is confusing, fragmented, and misleading. <br />
                        <strong className="text-white font-bold">We fixed it.</strong>
                    </p>
                </motion.div>
            </section>

            {/* Manifesto / Core Beliefs */}
            <section className="py-20 bg-[#0a001a] border-y border-white/5">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-black text-[#FDC500] mb-8 uppercase tracking-widest">Our Believe System</h2>
                            <ul className="space-y-8">
                                <li className="flex gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FDC500] group-hover:text-[#10002B] transition-colors">
                                        <Heart className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Life-First Builds</h3>
                                        <p className="text-gray-400">Your PC should match your life, not just trends. Whether you're a coder, creator, or gamer, the hardware serves <i>you</i>.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#C77DFF] group-hover:text-[#10002B] transition-colors">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Transparency, Not Guesswork</h3>
                                        <p className="text-gray-400">Hardware specs, pricing, and availability should be clear. No hidden costs. No "call for price".</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FDC500] group-hover:text-[#10002B] transition-colors">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Excitement, Not Stress</h3>
                                        <p className="text-gray-400">Buying tech should feel amazing from the first click to the first boot. We remove the headache.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="relative aspect-square flex flex-col justify-center items-center text-center p-12 bg-gradient-to-br from-[#240046] to-[#10002B] rounded-3xl border border-white/10 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />
                            <h2 className="text-9xl font-black text-white/5 absolute top-4 left-4">XO</h2>
                            <div className="relative z-10">
                                <h3 className="text-6xl font-black text-white mb-2 tracking-tighter">XO = <span className="text-[#C77DFF]">LOVE</span></h3>
                                <h3 className="text-6xl font-black text-white tracking-tighter">RIG = <span className="text-[#FDC500]">POWER</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-32 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-8">Ready to feel the difference?</h2>
                    <div className="flex justify-center gap-6">
                        <a href="/builder" className="px-8 py-4 bg-[#FDC500] text-[#10002B] font-bold rounded-xl hover:bg-white transition-colors">Start Building</a>
                        <a href="/marketplace" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">Get Quotes</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
