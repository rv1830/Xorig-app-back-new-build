"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, use } from "react";
import { MARKETPLACE_DATA } from "@/data/marketplace";
import type { Build } from "@/data/marketplace";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Footer Import kiya
import PaymentModal from "@/components/marketplace/PaymentModal";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";

interface Props {
    params: Promise<{ intent: string; subcategory: string }>;
}

export default function SubcategoryPage({ params }: Props) {
    // Use React.use() for async params in client component
    const { intent: intentId, subcategory: subcategoryId } = use(params);
    const [modalBuild, setModalBuild] = useState<Build | null>(null);

    // Find intent
    const intent = MARKETPLACE_DATA.find((i) => i.id === intentId);
    if (!intent) notFound();

    // Find subcategory
    const subcategory = intent.subcategories.find((s) => s.id === subcategoryId);
    if (!subcategory) notFound();

    return (
        <main className="min-h-screen bg-[#0B001E] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-x-hidden relative">
            <Navbar />

            {/* --- Global Background Atmosphere --- */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#C77DFF] rounded-full blur-[150px] opacity-[0.08]" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#FDC500] rounded-full blur-[120px] opacity-[0.05]" />
            </div>

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-8">
                    <Link href="/marketplace" className="text-gray-400 hover:text-white">
                        Marketplace
                    </Link>
                    <span className="text-gray-600">/</span>
                    <Link href={`/marketplace/${intent.id}`} className="text-gray-400 hover:text-white">
                        {intent.name}
                    </Link>
                    <span className="text-gray-600">/</span>
                    <span className="text-[#FDC500]">{subcategory.name}</span>
                </div>

                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-[#FDC500] to-[#C77DFF] bg-clip-text text-transparent">
                        {subcategory.name}
                    </h1>
                    <p className="text-xl text-gray-300">
                        {subcategory.description}
                    </p>
                </div>

                {/* Builds Grid */}
                {subcategory.builds.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {subcategory.builds.map((build, idx) => (
                            <div
                                key={idx}
                                className="relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#C77DFF] transition-all"
                            >
                                {/* Tier Badge */}
                                <div className="absolute -top-3 left-6 px-4 py-1 bg-[#C77DFF] text-white text-xs font-bold rounded-full">
                                    {build.tier}
                                </div>

                                {/* Image Placeholder */}
                                <div className="w-full h-48 bg-gradient-to-br from-[#C77DFF]/20 to-[#FDC500]/20 rounded-2xl mb-6 flex items-center justify-center">
                                    <Zap className="w-16 h-16 text-[#FDC500]" />
                                </div>

                                {/* Build Info */}
                                <h3 className="text-2xl font-black mb-2">{build.name}</h3>
                                <p className="text-3xl font-black text-[#FDC500] mb-4">{build.price}</p>

                                {/* Best For */}
                                <div className="space-y-2 mb-6">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Best For:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {build.bestFor.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Why It Works */}
                                <p className="text-sm text-gray-400 mb-6 italic">
                                    "{build.whyItWorks}"
                                </p>

                                {/* Specs */}
                                <div className="space-y-2 mb-6">
                                    {Object.entries(build.specs).map(([key, value]) => (
                                        <div key={key} className="flex justify-between text-sm">
                                            <span className="text-gray-400">{key}</span>
                                            <span className="font-bold text-right ml-2">{value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <button
                                    onClick={() => setModalBuild(build)}
                                    className="block w-full py-3 bg-[#FDC500] text-[#10002B] font-bold text-center rounded-xl hover:bg-white transition-all shadow-[0_4px_15px_-5px_rgba(253,197,0,0.3)]"
                                >
                                    Order This Build
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto text-center p-12 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                        <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
                        <p className="text-gray-400 mb-6">
                            We're crafting the perfect builds for {subcategory.name}. Check back soon!
                        </p>
                        <Link
                            href={`/marketplace/${intent.id}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C77DFF] text-white font-bold rounded-xl hover:bg-[#b55ae8] transition-all"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to {intent.name}
                        </Link>
                    </div>
                )}

                {/* Bottom CTA */}
                {subcategory.builds.length > 0 && (
                    <div className="max-w-3xl mx-auto mt-16 text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                        <h3 className="text-2xl font-bold mb-4">Want custom specs?</h3>
                        <p className="text-gray-400 mb-6">
                            These are pre-configured builds. Use our AI builder for fully custom recommendations.
                        </p>
                        <Link
                            href="/builder"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FDC500] text-[#10002B] font-bold rounded-xl hover:bg-white transition-all shadow-[0_4px_20px_-5px_rgba(253,197,0,0.4)]"
                        >
                            Build Custom PC
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                )}
            </div>

            {/* Payment Modal */}
            <AnimatePresence>
                {modalBuild && (
                    <PaymentModal
                        build={modalBuild}
                        onClose={() => setModalBuild(null)}
                    />
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}