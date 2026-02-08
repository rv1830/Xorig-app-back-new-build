"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Cpu, Headphones, AlertTriangle } from "lucide-react";

export default function WarrantyPage() {
    return (
        <main className="min-h-screen bg-[#10002B] text-white selection:bg-[#FDC500] selection:text-[#240046]">
            <Navbar />

            <section className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-[#FDC500]">Warranty Support</h1>
                    <p className="text-xl text-gray-300 mb-12">
                        We stand by our builds. Your Xorig PC comes with comprehensive coverage so you can game and create without worry.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <ShieldCheck className="w-10 h-10 text-[#C77DFF] mb-4" />
                            <h3 className="text-2xl font-bold mb-2">3-Year Manufacturer Warranty</h3>
                            <p className="text-gray-400">
                                Every component (CPU, GPU, RAM, Motherboard, PSU, SSD) carries its individual manufacturer warranty, typically 3 to 10 years. We help you facilitate RMAs.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <Headphones className="w-10 h-10 text-[#FDC500] mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Lifetime Technical Support</h3>
                            <p className="text-gray-400">
                                Something acting up? Drivers crashing? Frame drops? Our team is available via WhatsApp and remote desktop to troubleshoot software issues for the life of your PC.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#white]/5 border border-l-4 border-[#FDC500] bg-white/5 p-8 rounded-r-2xl mb-12">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-[#FDC500]" />
                            How to Claim Warranty
                        </h3>
                        <ol className="list-decimal list-inside space-y-3 text-gray-300">
                            <li><strong>Contact Us First:</strong> Send us a message on WhatsApp (+91 8901089898) with your Invoice ID.</li>
                            <li><strong>Remote Diagnosis:</strong> We'll try to fix it via AnyDesk/TeamViewer to rule out software issues.</li>
                            <li><strong>Component RMA:</strong> If a part is faulty, we'll guide you to the nearest service center or arrange a pickup (shipping charges may apply for standalone RMA).</li>
                        </ol>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <h3>What is NOT Covered?</h3>
                        <ul>
                            <li>Physical damage due to mishandling, drops, or liquid spills.</li>
                            <li>Electrical surges (we highly recommend using a UPS).</li>
                            <li>Damage caused by unauthorized overclocking or BIOS modifications beyond Xorig's shipment settings.</li>
                            <li>Software corruption due to viruses, malware, or pirated games/software.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
