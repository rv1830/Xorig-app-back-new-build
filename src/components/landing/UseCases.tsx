"use client";

import { motion } from "framer-motion";
import { Gamepad, Monitor, Mic, Video, Building2, Brain, Play } from "lucide-react";
import Link from "next/link";

// Updated to match MARKETPLACE_DATA
const useCases = [
    {
        icon: <Gamepad className="w-6 h-6 text-[#FDC500]" />,
        title: "Gaming",
        desc: "FPS-optimized & AAA titles at Max Settings.",
        href: "/marketplace?intent=gaming",
        color: "bg-[#FDC500]/10 border-[#FDC500]/20",
    },
    {
        icon: <Monitor className="w-6 h-6 text-[#C77DFF]" />,
        title: "Graphics & 3D",
        desc: "Blender, CAD, & Rendering workhorses.",
        href: "/marketplace?intent=graphics-3d",
        color: "bg-[#C77DFF]/10 border-[#C77DFF]/20",
    },
    {
        icon: <Brain className="w-6 h-6 text-green-400" />,
        title: "AI Workstations",
        desc: "High VRAM builds for Training & Inference.",
        href: "/marketplace?intent=ai-workstations",
        color: "bg-green-500/10 border-green-500/20",
    },
    {
        icon: <Video className="w-6 h-6 text-blue-400" />,
        title: "Photo & Video",
        desc: "Smooth scrub, fast export (Premiere/Davinci).",
        href: "/marketplace?intent=photo-video",
        color: "bg-blue-500/10 border-blue-500/20",
    },
    {
        icon: <Play className="w-6 h-6 text-red-400" />,
        title: "Streaming",
        desc: "Stream + Game without dropped frames.",
        href: "/marketplace?intent=streaming-production",
        color: "bg-red-500/10 border-red-500/20",
    },
    {
        icon: <Building2 className="w-6 h-6 text-orange-400" />,
        title: "Office",
        desc: "Silent, reliable daily productivity.",
        href: "/marketplace?intent=office",
        color: "bg-orange-500/10 border-orange-500/20",
    },
];

export default function UseCasesSection() {
    return (
        <section className="py-24 bg-[#10002B]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                        Built for <span className="text-[#FDC500]">Your Intent.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We don't sell random specs. We build for what you actually do.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {useCases.map((useCase, idx) => (
                        <Link href={useCase.href} key={idx} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className={`flex items-start gap-4 p-6 rounded-2xl border ${useCase.color} backdrop-blur-sm bg-[#1a0038]/50 hover:bg-[#240046] transition-all h-full`}
                            >
                                <div className={`p-4 rounded-xl bg-black/20 shrink-0`}>
                                    {useCase.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1 group-hover:text-[#FDC500] transition-colors">{useCase.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">{useCase.desc}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
