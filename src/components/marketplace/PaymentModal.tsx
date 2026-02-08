"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Script from "next/script";
import { Build } from "@/data/marketplace";

interface PaymentModalProps {
    build: Build | null;
    onClose: () => void;
}

export default function PaymentModal({ build, onClose }: PaymentModalProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    if (!build) return null;

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // 1. Create Order via our API
            const res = await fetch("/api/payment/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    buildName: build.name,
                    buildTier: build.tier,
                    amount: build.priceValue,
                    customerName: formData.name,
                    customerEmail: formData.email,
                    customerPhone: formData.phone
                })
            });

            const data = await res.json();

            if (!data.success) {
                throw new Error(data.error || "Payment initiation failed");
            }

            // 2. Initialize Cashfree SDK (Client Side)
            // @ts-ignore - cashfree is loaded via script
            const cashfree = new Cashfree({
                mode: process.env.NEXT_PUBLIC_CASHFREE_ENV || "sandbox"
            });

            // 3. Redirect to Payment
            await cashfree.checkout({
                paymentSessionId: data.paymentSessionId,
                redirectTarget: "_self", // Or _blank if preferred
                returnUrl: `${window.location.origin}/marketplace/success?order_id=${data.orderId}`
            });

        } catch (err: any) {
            console.error(err);
            setError(err.message || "Something went wrong. Please try again.");
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
                {/* Load Cashfree SDK */}
                <Script src="https://sdk.cashfree.com/js/v3/cashfree.js" strategy="lazyOnload" />

                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    className="bg-[#10002B] border border-white/20 p-8 rounded-3xl max-w-md w-full relative shadow-2xl"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <h3 className="text-2xl font-bold mb-1 font-heading">Complete Purchase</h3>
                    <p className="text-gray-400 text-sm mb-6">Enter your details to proceed securely.</p>

                    {/* Order Summary */}
                    <div className="bg-white/5 p-4 rounded-xl mb-6 flex justify-between items-center border border-white/10">
                        <div>
                            <div className="text-xs text-[#C77DFF] font-black uppercase tracking-wider">{build.tier}</div>
                            <div className="font-bold text-white">{build.name}</div>
                        </div>
                        <div className="text-[#FDC500] font-bold text-lg">{build.price}</div>
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded-lg text-sm mb-4 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handlePayment} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-400 mb-1 ml-1">Full Name</label>
                            <input
                                required
                                type="text"
                                placeholder="Ravi Kumar"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C77DFF] transition-colors"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-400 mb-1 ml-1">Email Address</label>
                            <input
                                required
                                type="email"
                                placeholder="ravi@example.com"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C77DFF] transition-colors"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-400 mb-1 ml-1">Phone Number</label>
                            <input
                                required
                                type="tel"
                                placeholder="9876543210"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C77DFF] transition-colors"
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#FDC500] hover:bg-[#eec110] text-[#10002B] font-black py-4 rounded-xl mt-4 transition-all shadow-lg hover:shadow-[#FDC500]/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                                </>
                            ) : (
                                "Pay Now"
                            )}
                        </button>
                    </form>

                    <div className="mt-4 flex justify-center items-center gap-2 text-xs text-gray-500">
                        <span>Secured by Cashfree Payments</span>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
