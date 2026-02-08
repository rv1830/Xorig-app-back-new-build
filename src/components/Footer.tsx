"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: "AI Builder", href: "/builder" },
            { name: "Marketplace", href: "/marketplace" },
            { name: "Gaming PCs", href: "/marketplace/gaming" },
            { name: "AI Workstations", href: "/marketplace/ai-workstations" },
        ],
        support: [
            { name: "About Us", href: "/about" },
            { name: "Contact", href: "/contact" },
            { name: "Delivery Process", href: "/delivery-process" },
            { name: "Warranty Support", href: "/warranty-support" },
            { name: "Setup Guide", href: "/setup-guide" },
            { name: "Trust & Safety", href: "/trust-safety" },
        ],
        legal: [
            { name: "Terms & Conditions", href: "/legal/terms" },
            { name: "Privacy Policy", href: "/legal/privacy" },
            { name: "Cancellation & Refund", href: "/legal/cancellation-refund" },
            { name: "Shipping & Exchange", href: "/legal/shipping-exchange" },
        ],
    };

    const socialLinks = [
        { 
            name: "Instagram", 
            icon: Instagram, 
            href: "https://instagram.com/xorig.gg",
            color: "text-pink-500",
            hoverBg: "hover:bg-pink-500/10",
            hoverBorder: "hover:border-pink-500/50"
        },
        { 
            name: "Twitter", 
            icon: Twitter, 
            href: "https://twitter.com/xorig",
            color: "text-blue-400",
            hoverBg: "hover:bg-blue-400/10",
            hoverBorder: "hover:border-blue-400/50"
        },
        { 
            name: "LinkedIn", 
            icon: Linkedin, 
            href: "https://linkedin.com/company/xorig",
            color: "text-blue-600",
            hoverBg: "hover:bg-blue-600/10",
            hoverBorder: "hover:border-blue-600/50"
        },
    ];

    return (
        <footer className="relative bg-[#0B001E] border-t border-white/5 overflow-hidden">
            
            {/* --- Global Background Atmosphere (Consistent with other pages) --- */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] left-[10%] w-[600px] h-[600px] bg-[#C77DFF] rounded-full blur-[150px] opacity-[0.05]" />
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#FDC500] rounded-full blur-[120px] opacity-[0.03]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-16 z-10">
                
                {/* Top Section - Newsletter CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 p-10 rounded-3xl bg-gradient-to-r from-[#C77DFF]/10 to-[#FDC500]/10 border border-white/10 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                        <div>
                            <h3 className="text-3xl font-black text-white mb-2">Stay in the Loop</h3>
                            <p className="text-gray-300">Get updates on new builds, exclusive deals, and PC tips.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="group px-8 py-4 bg-[#FDC500] text-[#10002B] rounded-xl font-bold text-lg hover:bg-white transition-all flex items-center gap-2 shadow-[0_4px_20px_-5px_rgba(253,197,0,0.3)] hover:shadow-[0_4px_25px_-5px_rgba(253,197,0,0.5)] transform hover:-translate-y-1"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative h-14 w-auto">
                                {/* Use your actual Logo component or Image here */}
                                <h2 className="text-4xl font-black text-white tracking-tighter">
                                    XO<span className="text-[#FDC500]">RIG</span>
                                </h2>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-8 leading-relaxed text-sm max-w-sm">
                            Building custom high-performance PCs with precision, transparency, and obsession. Every component matters because your workflow matters.
                        </p>

                        {/* Contact Info with Colored Icons */}
                        <div className="space-y-4">
                            <a href="mailto:hello@xorig.gg" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-[#C77DFF]/10 flex items-center justify-center group-hover:bg-[#C77DFF]/20 transition-colors">
                                    <Mail className="w-5 h-5 text-[#C77DFF]" />
                                </div>
                                <span className="text-sm font-medium">hello@xorig.gg</span>
                            </a>
                            <a href="tel:+918901089898" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-[#FDC500]/10 flex items-center justify-center group-hover:bg-[#FDC500]/20 transition-colors">
                                    <Phone className="w-5 h-5 text-[#FDC500]" />
                                </div>
                                <span className="text-sm font-medium">+91 8901089898</span>
                            </a>
                            <div className="flex items-start gap-4 text-gray-300 group">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors shrink-0">
                                    <MapPin className="w-5 h-5 text-blue-500" />
                                </div>
                                <span className="text-sm leading-snug mt-1">1123, Sector-6, Bahadurgarh<br />Haryana – 124507, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FDC500] mb-6 border-b border-white/10 pb-2 inline-block">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-all text-sm flex items-center gap-2 group"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#FDC500] group-hover:scale-150 transition-all" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        
                        {/* Copyright */}
                        <div className="text-gray-500 text-xs text-center md:text-left leading-relaxed">
                            <p>© {currentYear} XO Rig Computers Pvt. Ltd. All rights reserved.</p>
                            <p className="mt-1 opacity-70">
                                CIN: U47411HR2026PTC140738 | GSTIN: 06AAACX6158R1ZL
                            </p>
                        </div>

                        {/* Social Links with Specific Colors */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color} ${social.hoverBg} ${social.hoverBorder} hover:scale-110`}
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="mt-8 text-center">
                         <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] uppercase tracking-wider text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Business Hours: Mon-Sat, 9:00 AM - 6:00 PM (IST)
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}