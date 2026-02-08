"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, FileCheck, PackageSearch, Cpu, CheckCircle2, Truck, Home, Sparkles } from "lucide-react";

export default function DeliveryProcessPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const steps = [
        {
            icon: ShoppingCart,
            title: "Order Placed",
            description: "You confirm your dream build. We verify specs, compatibility, and stock availability instantly.",
            color: "#C77DFF"
        },
        {
            icon: FileCheck,
            title: "Expert Review",
            description: "Our engineers double-check your configuration. If we see a better value optimization, we tell you.",
            color: "#FDC500"
        },
        {
            icon: PackageSearch,
            title: "Precision Sourcing",
            description: "We pick brand-new, sealed components from authorized distributors. No refurbished nonsense.",
            color: "#C77DFF"
        },
        {
            icon: Cpu,
            title: "Professional Assembly",
            description: "Built by humans, not assembly lines. Cable management so clean you'll want to frame it.",
            color: "#FDC500"
        },
        {
            icon: CheckCircle2,
            title: "Stress Testing",
            description: "We run it hot so you don't have to. 24-hour stability tests on CPU, GPU, and memory.",
            color: "#C77DFF"
        },
        {
            icon: Truck,
            title: "Armored Shipping",
            description: "Packed with expanding foam (Instapak) inside. Multi-layer bubble wrap outside. Fully insured.",
            color: "#FDC500"
        },
        {
            icon: Home,
            title: "Safe Arrival",
            description: "Unbox and play. Your custom Xorig PC arrives ready to dominate.",
            color: "#FFFFFF"
        }
    ];

    return (
        <main className="min-h-screen bg-[#10002B] text-white selection:bg-[#FDC500] selection:text-[#240046]">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 text-center">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-[#FDC500]" />
                        <span className="text-sm font-medium text-gray-300">From our lab to your setup</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
                    >
                        Your PC's Journey
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        We don't just ship boxes. We engineer experiences. Here's how your Xorig rig comes to life.
                    </motion.p>
                </div>
            </section>

            {/* Timeline Process */}
            <section ref={containerRef} className="py-20 px-6 relative overflow-hidden">
                <div className="container mx-auto max-w-4xl relative">

                    {/* Central Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full" />
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FDC500] via-[#C77DFF] to-[#FDC500] md:-translate-x-1/2 rounded-full origin-top"
                    />

                    <div className="space-y-24">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <TimelineItem key={index} step={step} index={index} isEven={isEven} />
                            );
                        })}
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}

function TimelineItem({ step, index, isEven }: { step: any, index: number, isEven: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Content Side */}
            <div className="flex-1 pl-16 md:pl-0 md:text-right w-full">
                <div className={`${isEven ? "md:text-left" : "md:text-right"}`}>
                    <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
            </div>

            {/* Icon Node */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-[#10002B] border-4 border-[#10002B] z-10 flex items-center justify-center">
                <div
                    className="w-full h-full rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    style={{ backgroundColor: step.color }}
                >
                    <step.icon className="w-6 h-6 text-[#10002B]" />
                </div>
            </div>

            {/* Spacer for Flex Alignment */}
            <div className="flex-1 hidden md:block" />
        </motion.div>
    );
}
