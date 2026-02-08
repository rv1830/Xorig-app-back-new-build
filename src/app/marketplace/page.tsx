"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { MARKETPLACE_DATA, Build } from "@/data/marketplace";
import BuildCard from "@/components/marketplace/BuildCard";
import PaymentModal from "@/components/marketplace/PaymentModal";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, ChevronRight, X } from "lucide-react";

export default function MarketplacePage() {
    const [selectedIntentId, setSelectedIntentId] = useState<string>("gaming");
    const [modalBuild, setModalBuild] = useState<Build | null>(null);

    // Derive current data from selection
    const currentIntent = MARKETPLACE_DATA.find(i => i.id === selectedIntentId) || MARKETPLACE_DATA[0];

    return (
        <main className="min-h-screen bg-[#10002B] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-x-hidden">
            <Navbar />

            {/* Hero Header */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#1a0038] to-[#10002B] relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C77DFF] rounded-full blur-[150px] opacity-10 pointer-events-none" />

                <div className="container mx-auto max-w-7xl">
                    <h1 className="text-4xl md:text-6xl font-black mb-4">
                        Shop by <span className="text-[#FDC500]">Intent.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        Pick what you're building for — we'll show the builds tuned for that job. No guesswork.
                    </p>

                    {/* Intent Tabs */}
                    <div className="flex flex-wrap gap-2 mt-8 overflow-x-auto pb-4 scrollbar-hide">
                        {MARKETPLACE_DATA.map(intent => (
                            <button
                                key={intent.id}
                                onClick={() => setSelectedIntentId(intent.id)}
                                className={`
                            px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap border
                            ${selectedIntentId === intent.id
                                        ? 'bg-[#FDC500] text-[#10002B] border-[#FDC500] shadow-[0_0_20px_rgba(253,197,0,0.3)] scale-105'
                                        : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'}
                        `}
                            >
                                {intent.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-12 px-6">
                <div className="container mx-auto max-w-7xl">

                    {/* Intent Description & What Matters */}
                    <motion.div
                        key={selectedIntentId} // Re-render animation on change
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
                    >
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                {currentIntent.name} PCs
                                <span className="text-sm font-normal text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                    {currentIntent.subcategories.reduce((acc, sub) => acc + sub.builds.length, 0)} Options
                                </span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-[#C77DFF] pl-4">
                                {currentIntent.description}
                            </p>
                        </div>

                        <div className="bg-[#240046]/30 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-[#FDC500] font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                                <Info className="w-4 h-4" /> What We Optimize For
                            </h3>
                            <ul className="space-y-2">
                                {currentIntent.whatMatters.map((point, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-300 items-start">
                                        <Check className="w-4 h-4 text-[#C77DFF] mt-0.5 shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Subcategories & Builds */}
                    <div className="space-y-20">
                        {currentIntent.subcategories.map((sub) => (
                            <div key={sub.id} id={sub.id} className="scroll-mt-32">
                                <div className="flex items-end justify-between border-b border-white/10 pb-4 mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group flex items-center gap-2 cursor-pointer hover:text-[#C77DFF] transition-colors">
                                            {sub.name}
                                            <ChevronRight className="w-5 h-5 opacity-50" />
                                        </h3>
                                        <p className="text-gray-500 text-sm">{sub.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {sub.builds.map((build, idx) => (
                                        <BuildCard
                                            key={idx}
                                            build={build}
                                            onBuy={(b) => setModalBuild(b)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Payment Modal */}
            <AnimatePresence>
                {modalBuild && (
                    <PaymentModal
                        build={modalBuild}
                        onClose={() => setModalBuild(null)}
                    />
                )}
            </AnimatePresence>

        </main>
    );
}
