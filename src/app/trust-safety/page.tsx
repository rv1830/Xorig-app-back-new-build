"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Footer Imported
import { ShieldCheck, Lock, Award, RotateCcw, Truck } from "lucide-react";
import { motion } from "framer-motion";

const trustFeatures = [
    {
        title: "Verified Sellers Only",
        description: "Every seller on XO Rig is thoroughly vetted, verified for business authenticity (GST/KYC), and maintains a minimum rating.",
        icon: <Award className="w-8 h-8 text-[#FDC500]" />
    },
    {
        title: "Escrow-Based Payments",
        description: "We hold your payment securely. Funds are only released to the seller after you confirm delivery and product condition.",
        icon: <Lock className="w-8 h-8 text-[#C77DFF]" />
    },
    {
        title: "Image Verification",
        description: "Sellers must upload real-time photos of the product/box before shipping to ensure transparency.",
        icon: <ShieldCheck className="w-8 h-8 text-[#FDC500]" />
    },
    {
        title: "Dispute Resolution",
        description: "If something goes wrong, our support team steps in immediately. Full refund guarantee on incorrect or damaged items.",
        icon: <RotateCcw className="w-8 h-8 text-[#C77DFF]" />
    },
    {
        title: "Secure Logistics",
        description: "We partner with premium courier services to ensure your high-value hardware is handled with care and fully insured.",
        icon: <Truck className="w-8 h-8 text-[#FDC500]" />
    }
];

export default function TrustPage() {
    return (
        <main className="min-h-screen bg-[#0B001E] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-x-hidden relative">
            <Navbar />

            {/* --- Global Background Atmosphere --- */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#C77DFF] rounded-full blur-[150px] opacity-[0.08]" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#FDC500] rounded-full blur-[120px] opacity-[0.05]" />
            </div>

            <section className="pt-32 pb-20 px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <div className="w-24 h-24 bg-[#1A052A] rounded-full mx-auto flex items-center justify-center border-4 border-[#FDC500] mb-8 shadow-[0_0_50px_rgba(253,197,0,0.3)] backdrop-blur-md">
                        <ShieldCheck className="w-12 h-12 text-[#FDC500]" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Buying Hardware Should be <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDC500] to-[#C77DFF]">Safe, Not scary.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        We've built a multi-layer trust system to ensure you get exactly what you pay for. No fake listings. No risk.
                    </p>
                </motion.div>

                <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {trustFeatures.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 hover:border-[#FDC500]/30 hover:bg-white/[0.08] transition-all text-left group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#240046] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(199,125,255,0.2)] transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FDC500] transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* Trust Seal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-br from-[#FDC500] to-[#e6b200] rounded-[2rem] p-8 flex flex-col justify-center items-center text-center text-[#10002B] shadow-[0_20px_40px_-15px_rgba(253,197,0,0.4)]"
                    >
                        <ShieldCheck className="w-16 h-16 mb-4 animate-bounce" />
                        <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter">100% Buyer Protection</h3>
                        <p className="text-sm font-bold opacity-80 italic">"Every transaction is covered by our XO Guarantee."</p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}