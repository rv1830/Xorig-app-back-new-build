"use client";

import { motion } from "framer-motion";
import { MessageSquare, Cpu, CreditCard } from "lucide-react";

const steps = [
    {
        step: "01",
        title: "Tell Us Your Budget & Purpose",
        desc: "“Gaming PC under ₹80,000” or “Music production workstation”. Just type it in.",
        icon: <MessageSquare className="w-8 h-8" />,
        color: "from-[#FDC500] to-[#FFD54F]",
    },
    {
        step: "02",
        title: "Get Recommendations or Quotes",
        desc: "Choose between AI-generated builds or real competitive quotes from verified sellers.",
        icon: <Cpu className="w-8 h-8" />,
        color: "from-[#C77DFF] to-[#E0AAFF]",
    },
    {
        step: "03",
        title: "Pay Securely & Relax",
        desc: "We handle procurement, assembly, testing, and delivery. You just power it on.",
        icon: <CreditCard className="w-8 h-8" />,
        color: "from-[#FDC500] to-[#C77DFF]",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-[#0B001E] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        From Idea to <span className="text-[#FDC500]">Power Button.</span>
                    </h2>
                    <p className="text-gray-400">Three simple steps to your dream rig.</p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#FDC500]/20 via-[#C77DFF]/20 to-[#FDC500]/20 z-0" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} p-[2px] mb-8 shadow-lg shadow-${step.color.split(' ')[1]}/20`}>
                                <div className="w-full h-full bg-[#10002B] rounded-full flex items-center justify-center text-white relative overflow-hidden hover:scale-105 transition-transform duration-300">
                                    <span className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
                                    {step.icon}
                                </div>
                            </div>

                            <div className="absolute top-0 right-0 left-0 bg-[#FDC500] w-8 h-8 rounded-full flex items-center justify-center font-bold text-[#10002B] text-sm -mt-3 mx-auto border-2 border-[#10002B]">
                                {step.step}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
