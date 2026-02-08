"use client";

import { motion } from "framer-motion";
import { 
    Cpu, Users, Award, Truck, CheckCircle, BrainCircuit, 
    Gamepad2, Palette, Cuboid, Video, MonitorPlay, Briefcase, ArrowRight 
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
        color: "from-gray-200 to-gray-400"
    }
];

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-[#0B001E] relative overflow-hidden">
            
            {/* --- Global Background Atmosphere --- */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#C77DFF] rounded-full blur-[150px] opacity-[0.08]" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#FDC500] rounded-full blur-[120px] opacity-[0.05]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                
                {/* ---------------------------------------------------- */}
                {/* PART 1: WHY CHOOSE XO RIG (Trust Features)           */}
                {/* ---------------------------------------------------- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#FDC500] font-mono tracking-[0.2em] text-xs font-bold uppercase py-1 px-3 border border-[#FDC500]/20 rounded-full bg-[#FDC500]/5">
                        The XO Standard
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mt-6 tracking-tight">
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
                            whileHover={{ y: -10, scale: 1.02 }} // EFFECT ADDED HERE
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.3 }}
                            className="bg-[#1A052A]/40 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-[#C77DFF]/30 hover:bg-white/[0.06] hover:shadow-[0_10px_30px_-10px_rgba(199,125,255,0.2)] transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-[#240046]/80 p-3 rounded-lg border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#10002B]">
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
                        whileHover={{ y: -10, scale: 1.02 }} // EFFECT ADDED HERE
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#240046] to-[#10002B] rounded-xl p-6 border border-[#FDC500]/30 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:shadow-[0_0_40px_-10px_rgba(253,197,0,0.3)] transition-all"
                    >
                        <CheckCircle className="w-10 h-10 text-[#FDC500] mb-3" />
                        <h3 className="text-xl font-black text-white mb-1">Join 1000+ Builders</h3>
                        <p className="text-gray-400 text-xs mb-4">Trusted by gamers & engineers across India.</p>
                        <button className="px-5 py-2 bg-[#FDC500] text-[#10002B] text-sm font-extrabold rounded-lg hover:bg-white transition-all transform hover:translate-y-[-2px]">
                            Start Your Build
                        </button>
                    </motion.div>
                </div>

                {/* ---------------------------------------------------- */}
                {/* PART 2: THE PHILOSOPHY (Bridge Section)              */}
                {/* ---------------------------------------------------- */}
                <div className="relative py-12 mb-20 border-t border-b border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C77DFF]/5 to-transparent pointer-events-none" />
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
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

                {/* ---------------------------------------------------- */}
                {/* PART 3: CATEGORIES (Interactive Grid)                */}
                {/* ---------------------------------------------------- */}
                <div className="mb-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4"
                    >
                        <div>
                            <span className="text-[#FDC500] font-mono text-sm uppercase tracking-widest">Identify Your Goal</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Find your build category</h2>
                        </div>
                        <div className="h-[1px] flex-grow bg-white/10 mx-6 hidden md:block" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10, scale: 1.02 }} // EFFECT ADDED HERE
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#C77DFF] to-[#FDC500] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                                
                                <div className="h-full bg-[#1A052A] border border-white/10 rounded-2xl p-6 relative overflow-hidden group-hover:bg-[#15032b] transition-colors shadow-none group-hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                                    {/* Icon Header */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.color} bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm border border-white/10`}>
                                            <div className="text-white">{cat.icon}</div>
                                        </div>
                                        <ArrowRight className="text-white/20 group-hover:text-[#FDC500] group-hover:translate-x-1 transition-all" />
                                    </div>

                                    {/* Content */}
                                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#C77DFF] transition-colors">{cat.title}</h4>
                                    <p className="text-xs font-mono text-[#FDC500] mb-3 uppercase tracking-wide opacity-80">{cat.sub}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3 mt-auto">
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