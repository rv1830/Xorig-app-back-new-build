"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MegaDropdown from "./nav/MegaDropdown";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "AI Builder", href: "/builder" },
        { name: "Marketplace", href: "/marketplace" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center pt-4 px-4 pointer-events-none">
            <nav
                className={`
          pointer-events-auto
          flex items-center justify-between 
          transition-all duration-500 ease-in-out
          ${scrolled
                        ? "w-full max-w-[1200px] h-14 px-6 rounded-2xl bg-[#10002B]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                        : "w-full max-w-[1400px] h-18 px-8 rounded-none bg-transparent border-transparent"
                    }
        `}
            >
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group relative">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#FDC500]/10 border border-[#FDC500]/20 group-hover:bg-[#FDC500]/20 group-hover:border-[#FDC500]/40 transition-all shadow-inner"
                    >
                        <Zap className="w-5 h-5 text-[#FDC500] fill-[#FDC500]/20" />
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-xl bg-[#FDC500]/10 blur-sm"
                        />
                    </motion.div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tighter text-white uppercase italic leading-none">Xorigg</span>
                        <span className="text-[8px] text-[#FDC500] font-bold tracking-[0.2em] uppercase mt-0.5">AI Engine</span>
                    </div>
                </Link>

                {/* Desktop Links - Floating Hover Effect */}
                <div className="hidden lg:flex items-center gap-1">
                    {/* Find a solution - Mega Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setSolutionsOpen(true)}
                    >
                        <button
                            className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-[#FDC500] transition-all rounded-lg hover:bg-[#FDC500]/5 relative group"
                        >
                            Find a solution
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FDC500] transition-all group-hover:w-1/2" />
                        </button>

                        <MegaDropdown
                            open={solutionsOpen}
                            onClose={() => setSolutionsOpen(false)}
                        />
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-[#FDC500] transition-all rounded-lg hover:bg-[#FDC500]/5 relative group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FDC500] transition-all group-hover:w-1/2" />
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button asChild size="sm" className="h-10 px-6 rounded-xl font-bold bg-[#FDC500] text-[#10002B] shadow-lg shadow-[#FDC500]/20 hover:shadow-[#FDC500]/40 hover:bg-yellow-300 transition-all">
                        <Link href="/contact">Talk to an Expert</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center gap-3">
                    <button
                        className="p-2 rounded-xl bg-white/5 border border-white/10 text-white transition-all active:scale-90"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu - Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-4 top-24 z-[99] lg:hidden p-8 rounded-[2.5rem] bg-[#10002B]/95 backdrop-blur-2xl border border-white/10 shadow-2xl pointer-events-auto"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {/* Find a solution button */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0 }}
                            >
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        setSolutionsOpen(true);
                                    }}
                                    className="w-full text-2xl font-black tracking-tighter uppercase italic text-[#FDC500] hover:opacity-80 transition-colors py-3 bg-[#FDC500]/10 rounded-xl border border-[#FDC500]/20"
                                >
                                    Find a solution →
                                </button>
                            </motion.div>

                            {navLinks.map((link, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (i + 1) * 0.1 }}
                                    key={link.name}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-2xl font-black tracking-tighter uppercase italic text-white hover:text-[#FDC500] transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="h-px bg-white/20 my-2" />

                            <div className="flex flex-col gap-4">
                                <Button asChild className="h-14 rounded-2xl font-bold text-lg shadow-xl shadow-[#FDC500]/20 bg-[#FDC500] text-[#10002B] hover:bg-white">
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                                        Talk to an Expert
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
