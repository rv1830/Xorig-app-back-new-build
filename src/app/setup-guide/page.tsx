"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertCircle, Box, Monitor, Plug, Power, Wifi } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SetupGuidePage() {
    const steps = [
        {
            icon: Box,
            title: "Unbox Safely",
            description: "Place the box on a flat surface. Avoid cutting deep with sharp objects. Locate accessories box first."
        },
        {
            icon: Plug,
            title: "Remove Internal Instapak",
            description: "WARNING: Your PC has internal foam padding (Instapak) inside the glass panel. Gently remove the glass panel, pull out the expanding foam carefully, then reattach the glass."
        },
        {
            icon: Monitor,
            title: "Connect Monitor (Correctly!)",
            description: "CRITICAL: Connect your HDMI/DisplayPort cable directly into the GRAPHICS CARD (horizontal slots usually lower down), NOT the motherboard (vertical slots top left). Connecting to the motherboard will give no display on most gaming PCs.",
            alert: true
        },
        {
            icon: Power,
            title: "Power On",
            description: "Flip the PSU switch at the back to 'I' (On). Press the power button on the top/front of the case."
        },
        {
            icon: Wifi,
            title: "Connect & Update",
            description: "Attach the Wi-Fi antenna (if included) to the back gold connectors. Connect to internet. Windows is pre-activated, just let it update drivers."
        }
    ];

    return (
        <main className="min-h-screen bg-[#10002B] text-white selection:bg-[#FDC500] selection:text-[#240046]">
            <Navbar />

            <section className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#FDC500]">Setup Guide</h1>
                        <p className="text-xl text-gray-300">
                            Got your Xorig PC? Follow these steps to get gaming in minutes.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-2xl border ${step.alert
                                        ? "bg-[#FDC500]/10 border-[#FDC500] shadow-[0_0_30px_-5px_rgba(253,197,0,0.3)]"
                                        : "bg-white/5 border-white/10"
                                    } flex flex-col md:flex-row gap-6 items-start`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${step.alert ? "bg-[#FDC500] text-[#10002B]" : "bg-white/10 text-white"
                                    }`}>
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${step.alert ? "text-[#FDC500]" : "text-white"}`}>
                                        {index + 1}. {step.title}
                                        {step.alert && <AlertCircle className="w-5 h-5 animate-pulse" />}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-white/5 border border-white/10 p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-4">Still stuck?</h3>
                        <p className="text-gray-400 mb-6">
                            Don't force anything. If you're unsure, message us. We'll guide you on video call.
                        </p>
                        <Link
                            href="https://wa.me/918901089898"
                            target="_blank"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#128C7E] transition-colors"
                        >
                            WhatsApp Support (+91 8901089898)
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
