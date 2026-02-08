"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

function PaymentStatus() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const orderId = searchParams.get("order_id");

    const [status, setStatus] = useState<"loading" | "success" | "pending" | "failed">("loading");
    const [details, setDetails] = useState<any>(null);

    useEffect(() => {
        if (!orderId) {
            setStatus("failed");
            return;
        }

        const verifyPayment = async () => {
            try {
                const res = await fetch(`/api/payment/verify-payment/${orderId}`);
                const data = await res.json();

                if (data.success && data.orderStatus === "PAID") {
                    setStatus("success");
                    setDetails(data);
                } else if (data.orderStatus === "ACTIVE" || data.orderStatus === "PENDING") {
                    setStatus("pending");
                } else {
                    setStatus("failed");
                }
            } catch (error) {
                console.error("Verification failed", error);
                setStatus("failed");
            }
        };

        verifyPayment();
    }, [orderId]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
            {status === "loading" && (
                <>
                    <Loader2 className="w-16 h-16 text-[#FDC500] animate-spin mb-6" />
                    <h2 className="text-2xl font-bold">Verifying Payment...</h2>
                    <p className="text-gray-400 mt-2">Please wait while we confirm your transaction.</p>
                </>
            )}

            {status === "success" && (
                <>
                    <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 border border-green-500/50">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-black mb-2 text-white">Payment Successful!</h2>
                    <p className="text-gray-400 mb-6 max-w-md">
                        Thank you for your order. Your build request has been received and our team will contact you shortly.
                    </p>
                    {details && (
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 w-full max-w-md mb-8">
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-400">Order ID</span>
                                <span className="font-mono font-bold">{orderId}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-400">Amount</span>
                                <span className="font-bold text-[#FDC500]">₹{details.orderAmount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Status</span>
                                <span className="text-green-400 font-bold">PAID</span>
                            </div>
                        </div>
                    )}
                    <Link
                        href="/marketplace"
                        className="bg-[#FDC500] text-[#10002B] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-[#FDC500]/25 transition-all flex items-center gap-2"
                    >
                        Browse More Builds <ArrowRight className="w-5 h-5" />
                    </Link>
                </>
            )}

            {status === "pending" && (
                <>
                    <Loader2 className="w-16 h-16 text-blue-400 animate-spin mb-6" />
                    <h2 className="text-2xl font-bold">Payment Pending</h2>
                    <p className="text-gray-400 mt-2 max-w-md">
                        Your payment is being processed by the bank. Please wait a moment or check back later.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all"
                    >
                        Check Status Again
                    </button>
                </>
            )}

            {status === "failed" && (
                <>
                    <div className="w-20 h-20 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mb-6 border border-red-500/50">
                        <AlertCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-black mb-2 text-white">Payment Failed</h2>
                    <p className="text-gray-400 mb-6 max-w-md">
                        The transaction could not be completed. Please try again or contact support.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="/marketplace"
                            className="bg-[#C77DFF] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#b55ae8] transition-all"
                        >
                            Try Again
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white/10 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
                        >
                            Contact Support
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default function SuccessPage() {
    return (
        <main className="min-h-screen bg-[#10002B] text-white selection:bg-[#FDC500] selection:text-[#240046]">
            <Navbar />
            <div className="container mx-auto pt-32 px-6">
                <Suspense fallback={<div className="text-center p-12">Loading...</div>}>
                    <PaymentStatus />
                </Suspense>
            </div>
        </main>
    );
}
