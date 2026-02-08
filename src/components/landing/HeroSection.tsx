"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, FileText } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#10002B]">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#240046] rounded-full blur-[120px] opacity-50 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C77DFF] rounded-full blur-[120px] opacity-20 animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-[#FDC500]/10 border border-[#FDC500]/20 text-[#FDC500] text-sm font-medium tracking-wider mb-6">
                        LOVE AT FIRST BOOT
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-6 drop-shadow-2xl">
                        BUILT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C77DFF] to-[#FDC500]">PERFECTION.</span><br />
                        POWERED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDC500] to-[#C77DFF]">INTELLIGENCE.</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Stop guessing. Start building. Whether you need an AI-optimized workstation or a flagship gaming rig, XO Rig delivers transparency, performance, and obsession in every build.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <Link href="/builder" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-[#C77DFF] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 overflow-hidden">
                            <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                            <span className="relative flex items-center gap-3">
                                <Cpu className="w-5 h-5" />
                                Build My PC with AI
                            </span>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <Link href="/marketplace" className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                            <span className="mr-2 flex items-center gap-3">
                                <FileText className="w-5 h-5 text-[#FDC500]" />
                                Get Verified Quotes
                            </span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* SEO Keywords Hidden but present structurally or visible as tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-16 flex flex-wrap justify-center gap-4 text-white/30 text-sm font-mono"
                >
                    <span>Custom PC India</span> •
                    <span>Gaming Workstation</span> •
                    <span>Deep Learning Rigs</span> •
                    <span>Verified Sellers</span>
                </motion.div>
            </div>
        </section>
    );
}
