"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { MARKETPLACE_DATA } from "@/data/marketplace";
import Navbar from "@/components/Navbar";
import { ArrowRight, CheckCircle } from "lucide-react";

interface Props {
    params: Promise<{ intent: string }>;
}

export default async function IntentPage({ params }: Props) {
    // Await params (Next.js 15 requirement)
    const { intent: intentId } = await params;

    // Find the intent from MARKETPLACE_DATA
    const intent = MARKETPLACE_DATA.find((i) => i.id === intentId);

    // If intent not found, show 404
    if (!intent) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#10002B] text-white">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-[#FDC500] to-[#C77DFF] bg-clip-text text-transparent">
                        {intent.name}
                    </h1>
                    <p className="text-2xl text-gray-300 mb-8">
                        {intent.description}
                    </p>
                </div>

                {/* What Matters Section */}
                <div className="max-w-5xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        What Matters for <span className="text-[#FDC500]">{intent.name}</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {intent.whatMatters.map((matter, idx) => (
                            <div
                                key={idx}
                                className="flex gap-3 items-start p-4 bg-white/5 rounded-xl border border-white/10"
                            >
                                <CheckCircle className="w-6 h-6 text-[#FDC500] flex-shrink-0 mt-1" />
                                <p className="text-gray-300">{matter}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subcategories Grid */}
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Choose Your <span className="text-[#C77DFF]">Specific Use Case</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {intent.subcategories.map((sub) => (
                            <Link
                                key={sub.id}
                                href={`/marketplace/${intent.id}/${sub.id}`}
                                className="group relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-[#C77DFF] transition-all hover:shadow-[0_0_30px_-5px_rgba(199,125,255,0.3)]"
                            >
                                <h3 className="text-xl font-bold mb-2 group-hover:text-[#FDC500] transition-colors">
                                    {sub.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {sub.description}
                                </p>
                                <div className="flex items-center gap-2 text-[#C77DFF] font-bold text-sm">
                                    View Builds
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                                {sub.builds.length > 0 && (
                                    <div className="absolute top-4 right-4 bg-[#FDC500] text-[#10002B] text-xs font-bold px-3 py-1 rounded-full">
                                        {sub.builds.length} builds
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="max-w-3xl mx-auto mt-20 text-center p-8 bg-gradient-to-r from-[#C77DFF]/10 to-[#FDC500]/10 rounded-3xl border border-white/10">
                    <h3 className="text-2xl font-bold mb-4">Not sure which one fits you?</h3>
                    <p className="text-gray-400 mb-6">
                        Our AI builder will ask you the right questions and recommend the perfect build.
                    </p>
                    <Link
                        href="/builder"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#FDC500] text-[#10002B] font-bold rounded-xl hover:bg-white transition-all"
                    >
                        Use AI Builder
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
