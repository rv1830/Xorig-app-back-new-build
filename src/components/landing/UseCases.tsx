"use client";

import { motion } from "framer-motion";
import { Gamepad, Video, Mic, Terminal, Building2 } from "lucide-react";

const useCases = [
    {
        icon: <Gamepad className="w-6 h-6" />,
        title: "Pro Gamers",
        desc: "FPS-optimized configs for Valorant, CS2, & AAA titles.",
        color: "bg-red-500/10 text-red-400 border-red-500/20",
    },
    {
        icon: <Video className="w-6 h-6" />,
        title: "Video Editors & 3D",
        desc: "Davinci Resolve & Blender workhorses. CUDA power.",
        color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
        icon: <Mic className="w-6 h-6" />,
        title: "Music Producers",
        desc: "Ultra-quiet builds with massive RAM for VSTs.",
        color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
        icon: <Terminal className="w-6 h-6" />,
        title: "Devs & AI Engineers",
        desc: "Linux-ready, Docker optimized, local LLM runners.",
        color: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
        icon: <Building2 className="w-6 h-6" />,
        title: "Startups & Offices",
        desc: "Reliable, scalable fleet deployment.",
        color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    },
];

export default function UseCasesSection() {
    return (
        <section className="py-24 bg-[#10002B]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                        Built for <span className="text-[#FDC500]">Every User.</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {useCases.map((useCase, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className={`flex items-center gap-4 p-5 rounded-xl border ${useCase.color} backdrop-blur-sm hover:bg-white/5 transition-all cursor-default w-full md:w-auto`}
                        >
                            <div className={`p-3 rounded-lg ${useCase.color.split(" ")[0]}`}>
                                {useCase.icon}
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-white">{useCase.title}</h4>
                                <p className="text-xs text-gray-400">{useCase.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
