"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import { MARKETPLACE_DATA } from "@/data/marketplace";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Footer Import kiya
import { ArrowRight, CheckCircle } from "lucide-react";

interface Props {
    params: Promise<{ intent: string }>;
}

export default function IntentPage({ params }: Props) {
    // Await params using React.use() for Client Component compatibility in Next.js 15
    const { intent: intentId } = use(params);

    // Find the intent from MARKETPLACE_DATA
    const intent = MARKETPLACE_DATA.find((i) => i.id === intentId);

    // If intent not found, show 404
    if (!intent) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0B001E] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-x-hidden relative">
            <Navbar />

            {/* --- Global Background Atmosphere --- */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#C77DFF] rounded-full blur-[150px] opacity-[0.08]" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#FDC500] rounded-full blur-[120px] opacity-[0.05]" />
            </div>

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-[#FDC500] to-[#C77DFF] bg-clip-text text-transparent">
                        {intent.name}
                    </h1>
                    <p className="text-2xl text-gray-300 mb-8 font-light">
                        {intent.description}
                    </p>
                </div>

                {/* What Matters Section */}
                <div className="max-w-5xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-tighter">
                        What Matters for <span className="text-[#FDC500]">{intent.name}</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {intent.whatMatters.map((matter, idx) => (
                            <div
                                key={idx}
                                className="flex gap-3 items-start p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all"
                            >
                                <CheckCircle className="w-6 h-6 text-[#FDC500] flex-shrink-0 mt-0.5" />
                                <p className="text-gray-300 leading-relaxed">{matter}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subcategories Grid */}
                <div className="max-w-6xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-tighter">
                        Choose Your <span className="text-[#C77DFF]">Specific Use Case</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {intent.subcategories.map((sub) => (
                            <Link
                                key={sub.id}
                                href={`/marketplace/${intent.id}/${sub.id}`}
                                className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-[#C77DFF] transition-all hover:shadow-[0_0_40px_-10px_rgba(199,125,255,0.2)] flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#FDC500] transition-colors">
                                        {sub.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                        {sub.description}
                                    </p>
                                </div>
                                
                                <div className="flex items-center gap-2 text-[#C77DFF] font-bold text-sm">
                                    View Builds
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>

                                {sub.builds.length > 0 && (
                                    <div className="absolute top-6 right-6 bg-[#FDC500] text-[#10002B] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                                        {sub.builds.length} builds
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-[#240046] to-[#0B001E] rounded-[2rem] border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[#FDC500]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-3xl font-bold mb-4 relative z-10">Not sure which one fits you?</h3>
                    <p className="text-gray-400 mb-8 relative z-10 text-lg">
                        Our AI builder will ask you the right questions and recommend the perfect build.
                    </p>
                    <Link
                        href="/builder"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-[#FDC500] text-[#10002B] font-bold rounded-2xl hover:bg-white transition-all shadow-[0_10px_30px_-10px_rgba(253,197,0,0.5)] relative z-10"
                    >
                        Use AI Builder
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}