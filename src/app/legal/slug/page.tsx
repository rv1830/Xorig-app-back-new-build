"use client";

import { useParams, notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import { LEGAL_PAGES } from "@/data/legal";

export default function LegalPage() {
    const params = useParams();
    const slug = params.slug as string;
    const pageData = LEGAL_PAGES[slug];

    if (!pageData) {
        // In Next.js App Router, dynamic params are strings, checking the key is safe.
        // If not found, show 404.
        return (
            <main className="min-h-screen bg-[#10002B] text-white flex items-center justify-center">
                <Navbar />
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-400">The legal document you are looking for does not exist.</p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#10002B] text-white selection:bg-[#FDC500] selection:text-[#240046]">
            <Navbar />
            <section className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-black mb-12 border-b border-white/20 pb-8 text-[#FDC500]">
                        {pageData.title}
                    </h1>
                    
                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-[#FDC500] prose-a:text-[#C77DFF] prose-strong:text-white prose-li:text-gray-300 text-gray-300">
                        <ReactMarkdown>
                            {pageData.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </section>
        </main>
    );
}
