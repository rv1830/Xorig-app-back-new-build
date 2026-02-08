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
        { name: "Instagram", icon: Instagram, href: "https://instagram.com/xorig.gg" },
        { name: "Twitter", icon: Twitter, href: "https://twitter.com/xorig" },
        { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/xorig" },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-[#10002B] via-[#240046] to-[#10002B] border-t border-white/10">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C77DFF]/5 via-transparent to-[#FDC500]/5 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 py-16">
                {/* Top Section - Newsletter CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 p-10 rounded-3xl bg-gradient-to-r from-[#C77DFF]/10 to-[#FDC500]/10 border border-white/10"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-3xl font-black text-white mb-2">Stay in the Loop</h3>
                            <p className="text-gray-300">Get updates on new builds, exclusive deals, and PC tips.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="group px-8 py-4 bg-[#FDC500] text-[#10002B] rounded-xl font-bold text-lg hover:bg-white transition-all flex items-center gap-2"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative h-14 w-auto">
                                <Image
                                    src="/Xofull.svg"
                                    alt="Xorig"
                                    width={160}
                                    height={56}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Building custom high-performance PCs with precision, transparency, and obsession. Every component matters.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a href="mailto:hello@xorig.gg" className="flex items-center gap-3 text-gray-300 hover:text-[#FDC500] transition-colors group">
                                <Mail className="w-5 h-5" />
                                <span className="text-sm">hello@xorig.gg</span>
                            </a>
                            <a href="tel:+918901089898" className="flex items-center gap-3 text-gray-300 hover:text-[#FDC500] transition-colors group">
                                <Phone className="w-5 h-5" />
                                <span className="text-sm">+91 8901089898</span>
                            </a>
                            <div className="flex items-start gap-3 text-gray-300">
                                <MapPin className="w-5 h-5 mt-0.5" />
                                <span className="text-sm">1123, Sector-6, Bahadurgarh<br />Haryana – 124507, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#FDC500] mb-6">Product</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-[#FDC500] transition-all group-hover:w-3" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#FDC500] mb-6">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-[#FDC500] transition-all group-hover:w-3" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#FDC500] mb-6">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-[#FDC500] transition-all group-hover:w-3" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} XO Rig Computers Pvt. Ltd. All rights reserved.
                            <span className="block md:inline md:ml-4 mt-1 md:mt-0 text-xs">
                                CIN: U47411HR2026PTC140738 | GSTIN: 06AAACX6158R1ZL
                            </span>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#FDC500] hover:bg-[#FDC500]/10 hover:border-[#FDC500]/50 transition-all"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="mt-6 text-center text-xs text-gray-500">
                        Business Hours: Monday to Saturday, 9:00 AM to 6:00 PM (IST)
                    </div>
                </div>
            </div>
        </footer>
    );
}
