"use client";

import { motion } from "framer-motion";
import { Build } from "@/data/marketplace";
import { Check, Cpu, HardDrive, Layers, Zap } from "lucide-react";

interface BuildCardProps {
    build: Build;
    onBuy: (build: Build) => void;
}

export default function BuildCard({ build, onBuy }: BuildCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative bg-[#1a0038] border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#C77DFF]/20 transition-all flex flex-col h-full"
        >
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-[#240046] to-[#10002B] relative flex items-center justify-center overflow-hidden">
                {/* In a real app, use next/image here */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />
                <Cpu className="w-16 h-16 text-white/10 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#FDC500] text-[#10002B] text-xs font-black px-2 py-1 rounded-md uppercase tracking-wide">
                    {build.tier}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#C77DFF] transition-colors">{build.name}</h3>
                <div className="text-2xl font-black text-[#FDC500] mb-4">{build.price}</div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {build.bestFor.map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold px-2 py-1 bg-white/5 text-gray-400 rounded-md border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-sm text-gray-400 mb-6 italic leading-relaxed border-l-2 border-[#C77DFF]/50 pl-3">
                    "{build.whyItWorks}"
                </p>

                <div className="space-y-2 mb-8 bg-black/20 p-4 rounded-xl text-sm">
                    {Object.entries(build.specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between items-center border-b border-white/5 last:border-0 pb-1 last:pb-0">
                            <span className="text-gray-500 font-medium">{key}</span>
                            <span className="text-gray-200 font-bold text-right truncate max-w-[60%]">{val}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-auto flex gap-3">
                    <button
                        onClick={() => onBuy(build)}
                        className="flex-1 bg-[#C77DFF] hover:bg-[#b55ae8] text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-[#C77DFF]/25 active:scale-95"
                    >
                        Buy Now
                    </button>
                    <button className="px-4 py-3 border border-white/10 hover:bg-white/5 rounded-xl text-white font-bold transition-colors">
                        Customize
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
