"use client";

import { motion } from "framer-motion";
import { 
    Cpu, Users, Award, Truck, CheckCircle, BrainCircuit, 
    Gamepad2, Palette, Cuboid, MonitorPlay, Briefcase, ArrowRight 
} from "lucide-react";

// --- Data: Core Features ---
const features = [
    {
        icon: <Cpu className="w-6 h-6 text-[#FDC500]" />,
        title: "Purpose-Driven Builds",
        desc: "Not random parts. Every component chosen for maximum performance per rupee.",
    },
    {
        icon: <BrainCircuit className="w-6 h-6 text-[#C77DFF]" />,
        title: "AI-Powered Intelligence",
        desc: "Tell us your budget and goal. We utilize AI to determine the perfect config.",
    },
    {
        icon: <Users className="w-6 h-6 text-[#FDC500]" />,
        title: "Verified Hardware Sellers",
        desc: "Real quotes, real stock, and actual photos from verified vendors across India.",
    },
    {
        icon: <Truck className="w-6 h-6 text-[#C77DFF]" />,
        title: "End-to-End Fulfillment",
        desc: "Procurement, assembly, testing, and secure delivery to your desktop.",
    },
    {
        icon: <Award className="w-6 h-6 text-[#FDC500]" />,
        title: "India-First Pricing",
        desc: "Optimized for Indian market availability. We track local pricing for honest estimates.",
    },
];

// --- Data: Use Case Categories ---
const categories = [
    {
        icon: <Gamepad2 className="w-8 h-8" />,
        title: "Gaming",
        sub: "Esports, AAA, High Refresh",
        desc: "FPS-focused builds designed for high refresh rates and smooth frame pacing.",
        color: "from-red-500 to-orange-500"
    },
    {
        icon: <Cuboid className="w-8 h-8" />,
        title: "Graphics & 3D",
        sub: "Blender, CAD, Maya",
        desc: "Heavy viewport stability and rendering power for complex geometries.",
        color: "from-blue-400 to-indigo-500"
    },
    {
        icon: <BrainCircuit className="w-8 h-8" />,
        title: "AI Workstations",
        sub: "Training + Inference",
        desc: "VRAM-first architectures specifically built for LLMs and Stable Diffusion.",
        color: "from-emerald-400 to-teal-500"
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Photo & Video",
        sub: "Premiere, After Effects",
        desc: "Optimized for smooth timelines, quick scrubbing, and lightning-fast exports.",
        color: "from-pink-500 to-rose-500"
    },
    {
        icon: <MonitorPlay className="w-8 h-8" />,
        title: "Streaming",
        sub: "OBS, Twitch, YouTube",
        desc: "Stable streams and clean encodes without sacrificing your gameplay FPS.",
        color: "from-purple-500 to-violet-500"
    },
    {
        icon: <Briefcase className="w-8 h-8" />,
        title: "Office Core",
        sub: "Multitasking, Silent",
        desc: "Snappy, silent, and reliable daily drivers that never slow you down.",
        color: "from-gray-400 to-gray-600"
    }
];

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-[#0B001E] relative overflow-hidden">
            
            {/* --- Global Background Atmosphere --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[#C77DFF] rounded-full blur-[120px] opacity-[0.06]" />
                <div className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] bg-[#FDC500] rounded-full blur-[120px] opacity-[0.04]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                
                {/* PART 1: THE XO Standard */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-[#FDC500] font-mono tracking-[0.2em] text-[10px] font-bold uppercase py-1 px-3 border border-[#FDC500]/20 rounded-full bg-[#FDC500]/5 mb-6">
                        The XO Standard
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                        Built Different. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C77DFF] to-[#FDC500]">Built Right.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.3 }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-[#C77DFF]/30 hover:bg-white/[0.08] transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-[#1A052A] p-3 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FDC500] transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* CTA Card embedded in grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#240046] to-[#0B001E] rounded-2xl p-6 border border-[#FDC500]/30 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:shadow-[0_0_40px_-10px_rgba(253,197,0,0.3)] transition-all"
                    >
                        <CheckCircle className="w-10 h-10 text-[#FDC500] mb-3" />
                        <h3 className="text-xl font-black text-white mb-1">Join 1000+ Builders</h3>
                        <p className="text-gray-400 text-xs mb-4">Trusted by gamers & engineers across India.</p>
                        <button className="px-6 py-2 bg-[#FDC500] text-[#10002B] text-sm font-black rounded-lg hover:bg-white transition-all transform active:scale-95">
                            Start Your Build
                        </button>
                    </motion.div>
                </div>

                {/* PART 2: THE PHILOSOPHY */}
                <div className="relative py-16 mb-24 rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C77DFF]/5 to-transparent pointer-events-none" />
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center px-6"
                    >
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                            You don't need to understand PCs.<br />
                            <span className="text-[#C77DFF]">You just need to understand you.</span>
                        </h3>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Most buyers get stuck comparing specs they don't actually need. 
                            <strong className="text-white"> XO builds around outcomes</strong> — 
                            FPS, export time, viewport smoothness, and AI VRAM headroom — 
                            so your money lands where performance actually shows up.
                        </p>
                    </motion.div>
                </div>

                {/* PART 3: CATEGORIES */}
                <div className="mb-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
                    >
                        <div>
                            <span className="text-[#FDC500] font-mono text-sm uppercase tracking-widest">Identify Your Goal</span>
                            <h2 className="text-3xl md:text-5xl font-black text-white mt-2">Find your category.</h2>
                        </div>
                        <div className="h-[1px] flex-grow bg-white/10 mx-6 hidden md:block" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#C77DFF] to-[#FDC500] rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10 scale-90" />
                                
                                <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 group-hover:bg-[#110121] group-hover:border-white/20">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${cat.color} shadow-lg shadow-black/20`}>
                                            <div className="text-white">{cat.icon}</div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#FDC500] group-hover:border-[#FDC500] transition-all">
                                            <ArrowRight className="w-5 h-5 text-white group-hover:text-[#10002B] transition-colors" />
                                        </div>
                                    </div>

                                    <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-[#FDC500] transition-colors">{cat.title}</h4>
                                    <p className="text-[10px] font-mono text-[#C77DFF] mb-4 uppercase tracking-wider font-bold">{cat.sub}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {cat.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}