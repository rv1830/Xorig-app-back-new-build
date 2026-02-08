"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle, MapPin } from "lucide-react";

const reviews = [
    {
        name: "Rahul",
        location: "Mumbai",
        role: "3D Artist",
        quote: "Perfect for my Blender workflows. XO understood exactly what I needed.",
        tag: "Custom Workstation",
        color: "text-[#C77DFF]" // Purple for creative
    },
    {
        name: "Priya",
        location: "Bangalore",
        role: "Pro Gamer",
        quote: "Smooth 240fps gaming. No regrets, no compromises.",
        tag: "Esports Build",
        color: "text-[#FDC500]" // Yellow for gaming
    },
    {
        name: "Amit",
        location: "Delhi",
        role: "ML Engineer",
        quote: "AI training finally makes sense. The VRAM headroom is exactly right.",
        tag: "AI Rig",
        color: "text-emerald-400" // Green for AI
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-[#0B001E] relative overflow-hidden">
            
            {/* --- Background Atmosphere (Matched to HowItWorks) --- */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#C77DFF] rounded-full blur-[150px] opacity-[0.08]" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#FDC500] rounded-full blur-[120px] opacity-[0.05]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-6 h-6 fill-[#FDC500] text-[#FDC500]" />
                            ))}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            Builders are <span className="text-[#FDC500]">Talking.</span>
                        </h2>
                        <p className="text-gray-400 text-lg">Real performance in real setups across India.</p>
                    </motion.div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#1A052A]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl relative group overflow-hidden hover:border-[#FDC500]/20 transition-all"
                        >
                            {/* Decorative Large Quote Icon */}
                            <Quote className="absolute top-4 right-6 w-24 h-24 text-white/5 rotate-180 group-hover:scale-110 transition-transform duration-500" />

                            {/* Review Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    {/* Tag / Badge */}
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-gray-300 mb-6">
                                        <CheckCircle className="w-3 h-3 text-[#FDC500]" />
                                        Verified Purchase: <span className={review.color}>{review.tag}</span>
                                    </div>

                                    {/* Quote Text */}
                                    <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-6">
                                        "{review.quote}"
                                    </p>
                                </div>

                                {/* User Info */}
                                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-white`}>
                                        {review.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{review.name}</h4>
                                        <div className="flex items-center gap-1 text-xs text-gray-400">
                                            <MapPin className="w-3 h-3" />
                                            {review.location}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#C77DFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}