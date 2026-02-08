"use client";

import Navbar from "@/components/Navbar";
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
        <main className="min-h-screen bg-[#10002B] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-x-hidden">
            <Navbar />

            <section className="pt-32 pb-20 px-4 bg-[#10002B] text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <div className="w-24 h-24 bg-[#240046] rounded-full mx-auto flex items-center justify-center border-4 border-[#FDC500] mb-8 shadow-[0_0_50px_rgba(253,197,0,0.3)]">
                        <ShieldCheck className="w-12 h-12 text-[#FDC500]" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black mb-6">
                        Buying Hardware Should be <span className="text-[#FDC500]">Safe, Not scary.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We've built a multi-layer trust system to ensure you get exactly what you pay for. No fake listings. No risk.
                    </p>
                </motion.div>

                <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trustFeatures.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#FDC500]/50 transition-all text-left group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#240046]/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FDC500] transition-colors">
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
                        className="bg-gradient-to-br from-[#FDC500] to-[#e6b200] rounded-2xl p-8 flex flex-col justify-center items-center text-center text-[#10002B]"
                    >
                        <ShieldCheck className="w-12 h-12 mb-4 animate-bounce" />
                        <h3 className="text-2xl font-black mb-2">100% Buyer Protection</h3>
                        <p className="text-sm font-medium opacity-90">Every transaction is covered by our XO Guarantee.</p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
