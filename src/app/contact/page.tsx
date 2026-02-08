"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles } from "lucide-react";
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
        <main className="min-h-screen bg-[#10002B] text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FDC500] rounded-full blur-[200px] opacity-5" />

                <div className="container mx-auto max-w-6xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            Talk to <span className="bg-gradient-to-r from-[#FDC500] to-[#C77DFF] bg-clip-text text-transparent">XO</span>. Get clarity in under{" "}
                            <span className="text-[#FDC500]">60 minutes.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            Share your intent and city — we'll recommend builds that actually make sense.
                        </p>
                    </motion.div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
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
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
                            >
                                <stat.icon className="w-8 h-8 text-[#FDC500] mx-auto mb-3" />
                                <p className="text-2xl font-black text-white mb-1">{stat.value}</p>
                                <p className="text-sm text-gray-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            {/* Background Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#C77DFF]/20 to-[#FDC500]/20 rounded-3xl blur-2xl" />

                            <div className="relative bg-[#1a0038]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10">
                                <h2 className="text-3xl font-black mb-2">Get Build Options</h2>
                                <p className="text-gray-400 mb-8">Tell us what you need — we'll recommend builds that fit.</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-300 mb-2">Name</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Your name"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-300 mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="+91 98765 43210"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="you@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all"
                                            required
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-300 mb-2">City</label>
                                            <select
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all appearance-none cursor-pointer"
                                                required
                                            >
                                                <option value="" className="bg-[#10002B]">Select city</option>
                                                {cities.map(city => (
                                                    <option key={city} value={city} className="bg-[#10002B]">{city}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-300 mb-2">Intent</label>
                                            <select
                                                value={formData.intent}
                                                onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all appearance-none cursor-pointer"
                                                required
                                            >
                                                <option value="" className="bg-[#10002B]">Select intent</option>
                                                {intents.map(intent => (
                                                    <option key={intent} value={intent} className="bg-[#10002B]">{intent}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-300 mb-2">Budget Range</label>
                                        <input
                                            type="text"
                                            value={formData.budget}
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                            placeholder="e.g. ₹60,000 – ₹80,000"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-300 mb-2">
                                            Tell us more <span className="text-gray-500 font-normal">(optional)</span>
                                        </label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Describe your use case, software you'll run, performance expectations..."
                                            rows={4}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitted}
                                        className="w-full bg-gradient-to-r from-[#C77DFF] to-[#FDC500] text-[#10002B] font-black text-lg py-4 rounded-xl hover:shadow-[0_0_30px_-5px_rgba(199,125,255,0.4)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                                    >
                                        {submitted ? (
                                            <>
                                                <CheckCircle2 className="w-5 h-5" />
                                                Submitted!
                                            </>
                                        ) : (
                                            <>
                                                Get My Options
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-sm text-gray-500">
                                        Replies within 60 minutes (business hours: Mon-Sat, 9 AM - 6 PM IST)
                                    </p>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Methods */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-black mb-6">Or reach us directly</h2>
                                <p className="text-gray-400 mb-8">
                                    Choose your preferred way to connect. We're here to help you find the perfect build.
                                </p>
                            </div>

                            {/* WhatsApp */}
                            <Link
                                href="https://wa.me/918901089898"
                                target="_blank"
                                className="block group"
                            >
                                <div className="relative bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <MessageCircle className="w-7 h-7 text-green-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                                                Chat on WhatsApp
                                            </h3>
                                            <p className="text-gray-400 mb-3">
                                                Fastest way to get answers. Share your requirements and get instant build recommendations.
                                            </p>
                                            <p className="text-green-400 font-mono text-sm">+91 8901089898</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Email */}
                            <Link
                                href="mailto:hello@xorig.gg"
                                className="block group"
                            >
                                <div className="relative bg-gradient-to-br from-[#C77DFF]/10 to-[#FDC500]/5 border border-white/10 rounded-2xl p-6 hover:border-[#C77DFF]/40 transition-all hover:shadow-[0_0_30px_-5px_rgba(199,125,255,0.3)]">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-[#C77DFF]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-7 h-7 text-[#C77DFF]" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-[#C77DFF] transition-colors">
                                                Email Us
                                            </h3>
                                            <p className="text-gray-400 mb-3">
                                                Send detailed requirements or custom configuration requests.
                                            </p>
                                            <p className="text-[#C77DFF] font-mono text-sm">hello@xorig.gg</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Phone */}
                            <Link
                                href="tel:+918901089898"
                                className="block group"
                            >
                                <div className="relative bg-gradient-to-br from-[#FDC500]/10 to-[#FDC500]/5 border border-white/10 rounded-2xl p-6 hover:border-[#FDC500]/40 transition-all hover:shadow-[0_0_30px_-5px_rgba(253,197,0,0.3)]">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-[#FDC500]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-7 h-7 text-[#FDC500]" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-[#FDC500] transition-colors">
                                                Call Us
                                            </h3>
                                            <p className="text-gray-400 mb-3">
                                                Speak with our experts directly. Mon-Sat, 9 AM - 6 PM IST.
                                            </p>
                                            <p className="text-[#FDC500] font-mono text-sm">+91 8901089898</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Office Location */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2">Our Location</h3>
                                        <p className="text-gray-400">
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
            <section className="py-16 px-6 bg-gradient-to-b from-transparent to-[#1a0038]/50">
                <div className="container mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">
                        Why customers <span className="text-[#FDC500]">trust XO</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {[
                            {
                                title: "Intent-First Approach",
                                desc: "We build PCs around what you do, not random specs."
                            },
                            {
                                title: "Best Value Sourcing",
                                desc: "Online marketplace speed + offline distributor pricing."
                            },
                            {
                                title: "60-Min Response",
                                desc: "Get expert recommendations fast, during business hours."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h3 className="text-xl font-bold mb-3 text-[#C77DFF]">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
