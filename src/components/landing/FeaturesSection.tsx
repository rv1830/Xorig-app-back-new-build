"use client";

import { motion } from "framer-motion";
import { Cpu, Users, Award, Truck, CheckCircle, BrainCircuit } from "lucide-react";

const features = [
    {
        icon: <Cpu className="w-8 h-8 text-[#FDC500]" />,
        title: "Purpose-Driven Builds",
        desc: "Not random parts. Every component chosen for your specific use-case, ensuring maximum performance per rupee.",
    },
    {
        icon: <BrainCircuit className="w-8 h-8 text-[#C77DFF]" />,
        title: "AI-Powered Intelligence",
        desc: "Tell us your budget and goal. We utilize AI to determine the perfect configuration for your needs.",
    },
    {
        icon: <Users className="w-8 h-8 text-[#FDC500]" />,
        title: "Verified Hardware Sellers",
        desc: "Compare real quotes, real current stock, and actual photos from verified vendors across India.",
    },
    {
        icon: <Truck className="w-8 h-8 text-[#C77DFF]" />,
        title: "End-to-End Fulfillment",
        desc: "From the shop shelf to your desktop. We handle procurement, assembly, testing, and secure delivery.",
    },
    {
        icon: <Award className="w-8 h-8 text-[#FDC500]" />,
        title: "India-First Pricing",
        desc: "Optimized for Indian market availability. We track local pricing and stock to give you honest estimates.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-[#10002B] relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/4 w-[30%] h-[30%] bg-[#240046] rounded-full blur-[100px] opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#FDC500] font-mono tracking-widest text-sm uppercase">Why Choose XO Rig?</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tight">
                        Built Different. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C77DFF] to-[#FDC500]">Built Right.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#C77DFF]/50 transition-all hover:shadow-[0_0_30px_-5px_rgba(199,125,255,0.3)] group"
                        >
                            <div className="bg-[#240046]/50 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FDC500] transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                    {/* Last card spans if odd or just is decorative */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#240046] to-[#10002B] rounded-2xl p-8 border border-[#FDC500]/20 flex flex-col justify-center items-center text-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />
                        <CheckCircle className="w-12 h-12 text-[#FDC500] mb-4" />
                        <h3 className="text-2xl font-black text-white mb-2">Join 1000+ Builders</h3>
                        <p className="text-gray-400 text-sm mb-6">Trusted by gamers, creators, and engineers across India.</p>
                        <button className="px-6 py-2 bg-[#FDC500] text-[#10002B] font-bold rounded-lg hover:bg-white transition-colors">
                            Start Your Build
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
