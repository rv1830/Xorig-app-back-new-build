"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import MarketplaceForm from "@/components/marketplace/MarketplaceForm";
import { ShieldCheck, Image as ImageIcon, Gavel, History } from "lucide-react";

export default function MarketplacePage() {
    return (
        <main className="min-h-screen bg-[#10002B] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#FDC500] rounded-full blur-[150px] opacity-10 animate-pulse" />
                </div>

                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[#C77DFF] font-bold tracking-widest text-sm uppercase mb-4 block"
                        >
                            The New Way to Buy
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
                        >
                            Real Quotes.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDC500] to-[#C77DFF]">Real Sellers.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-xl max-w-2xl mx-auto"
                        >
                            Describe exactly what you need. Verified sellers compete to offer you the best deal with real photos and live stock updates.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Left Col: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <MarketplaceForm />
                        </motion.div>

                        {/* Right Col: Benefits & Process */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-12"
                        >
                            {/* Live Ticker (Mock) */}
                            <div className="bg-[#240046]/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <h4 className="font-bold text-white text-sm">Live Activity</h4>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        "Verified Seller 'TechHut' quoted ₹22,500 for Audio Technica M50x",
                                        "User 'Rahul_G' saved ₹5,000 on RTX 4070 Ti build",
                                        "New Request: '32GB RAM Kit 6000MHz White RGB' - 3 Sellers notified"
                                    ].map((item, i) => (
                                        <div key={i} className="text-xs text-gray-400 border-l-2 border-[#C77DFF] pl-3 py-1">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-8">
                                <Benefit
                                    icon={<ShieldCheck className="w-6 h-6 text-[#FDC500]" />}
                                    title="No Fake Listings"
                                    desc="Every quote allows for chat and photo verification before you pay. No bait-and-switch tactics."
                                />
                                <Benefit
                                    icon={<ImageIcon className="w-6 h-6 text-[#C77DFF]" />}
                                    title="Real Photos, Real Stock"
                                    desc="Sellers must upload current photos of the actual box/product. You see what you get."
                                />
                                <Benefit
                                    icon={<Gavel className="w-6 h-6 text-[#FDC500]" />}
                                    title="XO Rig Escrow"
                                    desc="Your money is held safely by us until the product is delivered and verified."
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* How It Works Steps */}
            <section className="py-24 border-t border-white/5 bg-[#0a001a]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-black text-center mb-16">The Quotation Flow</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: "1", title: "Post Requirement", desc: "Start with 'Headphones under 20k' or 'Monitor for coding'." },
                            { step: "2", title: "Sellers Compete", desc: "Verified vendors reply with their best price and photos." },
                            { step: "3", title: "Choose & Pay", desc: "Select the best value. We handle payment and logistics." }
                        ].map((s, i) => (
                            <div key={i} className="relative p-8 bg-white/5 rounded-3xl border border-white/5 text-center group hover:bg-white/10 transition-colors">
                                <div className="text-6xl font-black text-white/5 absolute top-4 right-6 group-hover:text-white/10 transition-colors">{s.step}</div>
                                <h3 className="text-xl font-bold text-[#FDC500] mb-4 relative z-10">{s.title}</h3>
                                <p className="text-gray-400 relative z-10">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

function Benefit({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
