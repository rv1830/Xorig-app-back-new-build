"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertCircle, Box, Monitor, Plug, Power, Wifi, Sparkles, Video } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SetupGuidePage() {
    const steps = [
        {
            icon: Box,
            title: "Unbox Safely",
            description: "Place the box on a flat surface. Avoid cutting deep with sharp objects. Locate accessories box first.",
            color: "#C77DFF"
        },
        {
            icon: Plug,
            title: "Remove Internal Instapak",
            description: "WARNING: Your PC has internal foam padding (Instapak) inside the glass panel. Gently remove the glass panel, pull out the expanding foam carefully, then reattach the glass.",
            color: "#FDC500"
        },
        {
            icon: Monitor,
            title: "Connect Monitor (Correctly!)",
            description: "CRITICAL: Connect your HDMI/DisplayPort cable directly into the GRAPHICS CARD (horizontal slots usually lower down), NOT the motherboard (vertical slots top left). Connecting to the motherboard will give no display on most gaming PCs.",
            alert: true,
            color: "#FDC500"
        },
        {
            icon: Power,
            title: "Power On",
            description: "Flip the PSU switch at the back to 'I' (On). Press the power button on the top/front of the case.",
            color: "#C77DFF"
        },
        {
            icon: Wifi,
            title: "Connect & Update",
            description: "Attach the Wi-Fi antenna (if included) to the back gold connectors. Connect to internet. Windows is pre-activated, just let it update drivers.",
            color: "#FFFFFF"
        }
    ];

    return (
        <main className="min-h-screen bg-[#0B001E] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-x-hidden relative">
            <Navbar />

            {/* --- Global Background Atmosphere --- */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#C77DFF] rounded-full blur-[150px] opacity-[0.08]" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#FDC500] rounded-full blur-[120px] opacity-[0.05]" />
            </div>

            <section className="pt-32 pb-20 px-6 relative z-10">
                <div className="container mx-auto max-w-4xl">
                    
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-[#FDC500]" />
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Phase 03: Deployment</span>
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                            READY TO <span className="text-[#FDC500]">BOOT?</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Don't rush the excitement. Follow these steps to ensure your Xorig machine is set up for peak performance.
                        </p>
                    </motion.div>

                    {/* Step-by-Step Guide */}
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group p-8 rounded-[2rem] border transition-all duration-500 ${
                                    step.alert
                                        ? "bg-[#FDC500]/5 border-[#FDC500]/40 shadow-[0_0_40px_-10px_rgba(253,197,0,0.2)]"
                                        : "bg-white/[0.03] border-white/10 hover:border-white/20"
                                } flex flex-col md:flex-row gap-8 items-start backdrop-blur-md`}
                            >
                                {/* Step Icon */}
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl transition-transform group-hover:scale-110 duration-300 ${
                                    step.alert ? "bg-[#FDC500] text-[#0B001E]" : "bg-[#1A052A] text-white border border-white/10"
                                }`}>
                                    <step.icon className="w-8 h-8" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className={`text-2xl font-black flex items-center gap-3 ${step.alert ? "text-[#FDC500]" : "text-white"}`}>
                                            <span className="opacity-30 font-mono text-lg">0{index + 1}</span>
                                            {step.title}
                                        </h3>
                                        {step.alert && (
                                            <span className="flex h-3 w-3 relative">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FDC500] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FDC500]"></span>
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-400 leading-relaxed text-lg font-light">
                                        {step.description}
                                    </p>
                                    
                                    {step.alert && (
                                        <div className="mt-4 p-4 rounded-xl bg-black/40 border border-[#FDC500]/20 flex items-center gap-3">
                                            <AlertCircle className="w-5 h-5 text-[#FDC500] shrink-0" />
                                            <p className="text-xs text-[#FDC500] font-bold uppercase tracking-wider">Most common mistake - Check twice!</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Support Section */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-20 text-center bg-gradient-to-br from-[#240046] to-[#0B001E] border border-white/10 p-12 rounded-[2.5rem] relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-3xl font-black mb-4 relative z-10">Still Stuck?</h3>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10 text-lg">
                            Don't force anything, bhai. If you're unsure, message us. We'll hop on a video call to guide you.
                        </p>
                        <Link
                            href="https://wa.me/918901089898"
                            target="_blank"
                            className="relative z-10 inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white font-black rounded-2xl hover:scale-105 transition-all shadow-[0_10px_30px_-10px_rgba(37,211,102,0.5)]"
                        >
                            <Video className="w-5 h-5" />
                            Live Video Support
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}