"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, Camera, Search, CheckCircle } from "lucide-react";

export default function MarketplaceForm() {
    const [request, setRequest] = useState("");
    const [category, setCategory] = useState("Audio");
    const [budget, setBudget] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate API
        setTimeout(() => {
            setSubmitted(false);
            setRequest("");
            setBudget("");
            alert("Request sent to verified sellers!");
        }, 2000);
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">

            {/* Success Overlay */}
            {submitted && (
                <div className="absolute inset-0 bg-[#10002B]/90 z-20 flex flex-col items-center justify-center text-center p-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6"
                    >
                        <CheckCircle className="w-10 h-10 text-[#10002B]" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Request Broadcasted!</h3>
                    <p className="text-gray-400">Verified sellers are being notified. Expect quotes within 2 hours.</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-[#FDC500] text-sm font-bold mb-2 uppercase tracking-wide">
                        What are you looking for?
                    </label>
                    <div className="relative">
                        <textarea
                            value={request}
                            onChange={(e) => setRequest(e.target.value)}
                            placeholder="e.g. Over-ear headphones for mixing, flat response, comfortable for long sessions..."
                            className="w-full bg-[#0a001a] text-white p-4 rounded-xl border border-white/10 focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none h-32 resize-none placeholder:text-gray-600 transition-all"
                            required
                        />
                        <button type="button" className="absolute bottom-3 right-3 text-gray-500 hover:text-white transition-colors">
                            <Camera className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-[#C77DFF] text-sm font-bold mb-2 uppercase tracking-wide">
                            Category
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full bg-[#0a001a] text-white p-3 rounded-xl border border-white/10 focus:border-[#C77DFF] outline-none appearance-none cursor-pointer"
                        >
                            <option>PC Components</option>
                            <option>Peripherals (Mouse, Keyboards)</option>
                            <option>Audio Gear</option>
                            <option>Monitors</option>
                            <option>Laptops</option>
                            <option>Custom Build Request</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-[#C77DFF] text-sm font-bold mb-2 uppercase tracking-wide">
                            Max Budget (₹)
                        </label>
                        <input
                            type="number"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            placeholder="20000"
                            className="w-full bg-[#0a001a] text-white p-3 rounded-xl border border-white/10 focus:border-[#C77DFF] outline-none placeholder:text-gray-600"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#C77DFF] to-[#FDC500] text-[#10002B] font-black text-lg py-4 rounded-xl hover:shadow-[0_0_30px_-5px_rgba(199,125,255,0.4)] transition-all flex items-center justify-center gap-2 group"
                >
                    Broadcast Request
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-xs text-gray-500 mt-4">
                    By submitting, you agree to receive quotes from verified vendors only. No spam.
                </p>
            </form>
        </div>
    );
}
