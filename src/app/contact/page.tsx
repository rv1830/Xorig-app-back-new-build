"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        intent: "",
        budget: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // TODO: Integrate with actual form submission API
        setTimeout(() => setSubmitted(false), 5000);
    };

    const cities = [
        "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
        "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Other"
    ];

    const intents = [
        "Gaming", "Graphics & 3D", "AI Workstations",
        "Photo & Video Editing", "Streaming & Production", "Office", "Not Sure"
    ];

    return (
        <main className="min-h-screen bg-[#0B001E] text-white selection:bg-[#FDC500] selection:text-[#240046] overflow-x-hidden">
            <Navbar />

            {/* --- Global Background Atmosphere (Consistent with other pages) --- */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#C77DFF] rounded-full blur-[150px] opacity-[0.08]" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#FDC500] rounded-full blur-[120px] opacity-[0.05]" />
            </div>

            {/* Hero Section */}
            <section className="pt-32 pb-12 px-6 relative">
                <div className="container mx-auto max-w-6xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                            <span className="text-xs font-mono text-[#FDC500] tracking-widest uppercase">We Are Online</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            Talk to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDC500] to-[#C77DFF]">XO</span>. <br className="hidden md:block" />
                            Get clarity in under <span className="text-[#FDC500] underline decoration-wavy decoration-[#C77DFF]/50 underline-offset-8">60 minutes.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                            Share your intent and city — we'll recommend builds that actually make sense.
                        </p>
                    </motion.div>

                    {/* Quick Stats Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
                        {[
                            { icon: Clock, label: "60 min response", value: "Guaranteed" },
                            { icon: CheckCircle2, label: "100+ PCs", value: "Shipped" },
                            { icon: Sparkles, label: "6+ years", value: "Experience" },
                            { icon: MapPin, label: "Pan-India", value: "Delivery" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#1A052A]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-[#FDC500]/30 transition-colors"
                            >
                                <stat.icon className="w-8 h-8 text-[#FDC500] mx-auto mb-3" />
                                <p className="text-2xl font-black text-white mb-1">{stat.value}</p>
                                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content: Form & Contact Info */}
            <section className="pb-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Left: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            {/* Form Background Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#C77DFF]/20 to-[#FDC500]/20 rounded-[2rem] blur-xl opacity-50" />

                            <div className="relative bg-[#130326] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
                                <h2 className="text-3xl font-black mb-2 flex items-center gap-3">
                                    Get Build Options <Sparkles className="w-6 h-6 text-[#FDC500]" />
                                </h2>
                                <p className="text-gray-400 mb-8">Tell us what you need — we'll recommend builds that fit.</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-300 mb-2 ml-1">Name</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Your name"
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all focus:bg-white/[0.07]"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-300 mb-2 ml-1">Phone</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="+91 98765 43210"
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all focus:bg-white/[0.07]"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-300 mb-2 ml-1">Email</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="you@example.com"
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all focus:bg-white/[0.07]"
                                            required
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-300 mb-2 ml-1">City</label>
                                            <div className="relative">
                                                <select
                                                    value={formData.city}
                                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all appearance-none cursor-pointer focus:bg-white/[0.07]"
                                                    required
                                                >
                                                    <option value="" className="bg-[#10002B]">Select city</option>
                                                    {cities.map(city => (
                                                        <option key={city} value={city} className="bg-[#10002B]">{city}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                    <ArrowRight className="w-4 h-4 rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-300 mb-2 ml-1">Intent</label>
                                            <div className="relative">
                                                <select
                                                    value={formData.intent}
                                                    onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all appearance-none cursor-pointer focus:bg-white/[0.07]"
                                                    required
                                                >
                                                    <option value="" className="bg-[#10002B]">Select intent</option>
                                                    {intents.map(intent => (
                                                        <option key={intent} value={intent} className="bg-[#10002B]">{intent}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                    <ArrowRight className="w-4 h-4 rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-300 mb-2 ml-1">Budget Range</label>
                                        <input
                                            type="text"
                                            value={formData.budget}
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                            placeholder="e.g. ₹60,000 – ₹80,000"
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all focus:bg-white/[0.07]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-300 mb-2 ml-1">
                                            Tell us more <span className="text-gray-500 font-normal">(optional)</span>
                                        </label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Describe your use case, software you'll run, performance expectations..."
                                            rows={4}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all resize-none focus:bg-white/[0.07]"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitted}
                                        className="w-full bg-gradient-to-r from-[#C77DFF] to-[#FDC500] text-[#10002B] font-black text-lg py-4 rounded-xl hover:shadow-[0_0_30px_-5px_rgba(199,125,255,0.4)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.01]"
                                    >
                                        {submitted ? (
                                            <>
                                                <CheckCircle2 className="w-6 h-6" />
                                                Request Sent!
                                            </>
                                        ) : (
                                            <>
                                                Get My Options
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-gray-500 font-mono">
                                        Avg. Response: &lt; 60 mins (Mon-Sat, 9-6 IST)
                                    </p>
                                </form>
                            </div>
                        </motion.div>

                        {/* Right: Contact Methods */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8 lg:sticky lg:top-32"
                        >
                            <div className="mb-10">
                                <h2 className="text-3xl font-black mb-4">Or reach us directly</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Choose your preferred way to connect. We're here to help you find the perfect build.
                                </p>
                            </div>

                            {/* WhatsApp Card */}
                            <Link
                                href="https://wa.me/918901089898"
                                target="_blank"
                                className="block group"
                            >
                                <div className="relative bg-gradient-to-br from-green-500/[0.08] to-transparent border border-green-500/20 rounded-2xl p-6 hover:border-green-500/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.2)] hover:bg-green-500/[0.12]">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <MessageCircle className="w-7 h-7 text-green-400" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors">Chat on WhatsApp</h3>
                                                <ArrowRight className="w-5 h-5 text-green-500/50 -rotate-45 group-hover:rotate-0 transition-transform" />
                                            </div>
                                            <p className="text-gray-400 mb-3 text-sm">
                                                Fastest way to get answers. Share requirements instantly.
                                            </p>
                                            <p className="text-green-400 font-mono text-sm tracking-wide">+91 8901089898</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Email Card */}
                            <Link
                                href="mailto:hello@xorig.gg"
                                className="block group"
                            >
                                <div className="relative bg-gradient-to-br from-[#C77DFF]/[0.08] to-transparent border border-[#C77DFF]/20 rounded-2xl p-6 hover:border-[#C77DFF]/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(199,125,255,0.2)] hover:bg-[#C77DFF]/[0.12]">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-[#C77DFF]/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <Mail className="w-7 h-7 text-[#C77DFF]" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <h3 className="text-xl font-bold group-hover:text-[#C77DFF] transition-colors">Email Us</h3>
                                                <ArrowRight className="w-5 h-5 text-[#C77DFF]/50 -rotate-45 group-hover:rotate-0 transition-transform" />
                                            </div>
                                            <p className="text-gray-400 mb-3 text-sm">
                                                For detailed requirements or custom invoices.
                                            </p>
                                            <p className="text-[#C77DFF] font-mono text-sm tracking-wide">hello@xorig.gg</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Phone Card */}
                            <Link
                                href="tel:+918901089898"
                                className="block group"
                            >
                                <div className="relative bg-gradient-to-br from-[#FDC500]/[0.08] to-transparent border border-[#FDC500]/20 rounded-2xl p-6 hover:border-[#FDC500]/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(253,197,0,0.2)] hover:bg-[#FDC500]/[0.12]">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 bg-[#FDC500]/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <Phone className="w-7 h-7 text-[#FDC500]" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <h3 className="text-xl font-bold group-hover:text-[#FDC500] transition-colors">Call Us</h3>
                                                <ArrowRight className="w-5 h-5 text-[#FDC500]/50 -rotate-45 group-hover:rotate-0 transition-transform" />
                                            </div>
                                            <p className="text-gray-400 mb-3 text-sm">
                                                Speak with experts. Mon-Sat, 9 AM - 6 PM IST.
                                            </p>
                                            <p className="text-[#FDC500] font-mono text-sm tracking-wide">+91 8901089898</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Office Location */}
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2">Our Location</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            1123, Sector-6,<br />
                                            Bahadurgarh, Haryana – 124507, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-20 px-6 border-t border-white/5 bg-[#130326]">
                <div className="container mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl md:text-4xl font-black mb-12">
                        Why customers <span className="text-[#FDC500]">trust XO</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Intent-First Approach",
                                desc: "We build PCs around what you do, not random specs from a spreadsheet."
                            },
                            {
                                title: "Best Value Sourcing",
                                desc: "Online marketplace speed mixed with offline distributor pricing."
                            },
                            {
                                title: "60-Min Response",
                                desc: "Get expert recommendations fast during business hours. No bots."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.05] transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-[#C77DFF]">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}