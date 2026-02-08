"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MARKETPLACE_DATA } from "@/data/marketplace";
import { X } from "lucide-react";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function MegaDropdown({ open, onClose }: Props) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop for mobile */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                        onClick={onClose}
                    />

                    {/* Desktop Dropdown */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="hidden lg:block fixed left-1/2 -translate-x-1/2 top-16
            w-[min(1100px,90vw)] max-w-7xl rounded-3xl
            bg-[#0B001E]/95 backdrop-blur-2xl border border-white/10 shadow-2xl z-50"
                        onMouseLeave={onClose}
                    >
                        <div className="grid grid-cols-6 gap-6 p-8">
                            {MARKETPLACE_DATA.map((intent) => (
                                <div key={intent.id} className="space-y-3">
                                    {/* Intent title */}
                                    <Link
                                        href={`/marketplace/${intent.id}`}
                                        onClick={onClose}
                                        className="block text-xs font-extrabold uppercase tracking-widest text-[#FDC500] hover:opacity-80"
                                    >
                                        {intent.name} →
                                    </Link>

                                    {/* Subcategories */}
                                    <ul className="space-y-2">
                                        {intent.subcategories.slice(0, 4).map((sub) => (
                                            <li key={sub.id}>
                                                <Link
                                                    href={`/marketplace/${intent.id}/${sub.id}`}
                                                    onClick={onClose}
                                                    className="block text-sm text-gray-300 hover:text-[#FDC500] transition-colors"
                                                >
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="border-t border-white/10 px-8 py-4 text-xs text-gray-400">
                            Not sure? Pick your intent anyway — XO guides the exact build.
                        </div>
                    </motion.div>

                    {/* Mobile Dropdown */}
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="lg:hidden fixed right-0 top-0 bottom-0 w-[85vw] max-w-sm
            bg-[#0B001E]/98 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-50
            overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-[#0B001E] border-b border-white/10 px-6 py-4 flex items-center justify-between">
                            <h3 className="text-lg font-black text-white">Find a Solution</h3>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {MARKETPLACE_DATA.map((intent) => (
                                <div key={intent.id} className="space-y-3">
                                    {/* Intent title */}
                                    <Link
                                        href={`/marketplace/${intent.id}`}
                                        onClick={onClose}
                                        className="block text-sm font-extrabold uppercase tracking-widest text-[#FDC500] hover:opacity-80"
                                    >
                                        {intent.name} →
                                    </Link>

                                    {/* Subcategories */}
                                    <ul className="space-y-2 pl-4 border-l-2 border-white/10">
                                        {intent.subcategories.map((sub) => (
                                            <li key={sub.id}>
                                                <Link
                                                    href={`/marketplace/${intent.id}/${sub.id}`}
                                                    onClick={onClose}
                                                    className="block text-sm text-gray-300 hover:text-[#FDC500] transition-colors py-1"
                                                >
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="sticky bottom-0 bg-[#0B001E] border-t border-white/10 px-6 py-4 text-xs text-gray-400">
                            Not sure? Pick your intent anyway — XO guides the exact build.
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
