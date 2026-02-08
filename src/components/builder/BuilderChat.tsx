"use client";

import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Sparkles, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    id: string;
    sender: "user" | "ai";
    text: string;
    type?: "text" | "build-preview" | "options";
    data?: any;
}

const SUGGESTED_PROMPTS = [
    "Gaming PC under ₹80,000 for 1440p",
    "Workstation for After Effects & Blender",
    "budget office PC under 40k",
    "Streaming setup with dual monitors",
];

export default function BuilderChat() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            sender: "ai",
            text: "Hello! I'm XQrjg AI. Tell me what you want to build today. Be as specific or vague as you like.",
            type: "text",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            sender: "user",
            text: input,
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate AI thinking
        setTimeout(() => {
            setIsTyping(false);
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                sender: "ai",
                text: "I can help with that! Based on your budget of roughly ₹80k, I'd suggest focusing on the GPU. Here's a starting point:",
                type: "build-preview", // In a real app, this would render a card
                data: {
                    name: "Mid-Range Beast",
                    cpu: "Ryzen 5 7600",
                    gpu: "RTX 4060 Ti",
                    price: "₹82,500",
                }
            };
            setMessages((prev) => [...prev, aiMsg]);
        }, 1500);
    };

    return (
        <div className="flex flex-col h-[600px] w-full max-w-4xl mx-auto bg-[#1a0b2e]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative">

            {/* Header */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#10002B]/50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C77DFF] to-[#FDC500] p-[1px]">
                        <div className="w-full h-full rounded-full bg-[#10002B] flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-[#FDC500]" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-sm">XQrjg Constructor AI</h3>
                        <p className="text-xs text-[#C77DFF] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Online
                        </p>
                    </div>
                </div>
                <button className="text-xs text-gray-400 hover:text-white flex items-center gap-1 bg-white/5 py-1.5 px-3 rounded-lg hover:bg-white/10 transition-colors">
                    <Plus className="w-3 h-3" /> New Chat
                </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-[#240046] scrollbar-track-transparent" ref={scrollRef}>
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-4 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        {msg.sender === "ai" && (
                            <div className="w-8 h-8 rounded-full bg-[#240046] flex flex-shrink-0 items-center justify-center border border-white/10 mt-1">
                                <Bot className="w-4 h-4 text-[#C77DFF]" />
                            </div>
                        )}

                        <div className={`max-w-[80%] space-y-2`}>
                            <div
                                className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                        ? "bg-[#C77DFF] text-[#10002B] rounded-tr-none font-medium"
                                        : "bg-white/5 text-gray-200 rounded-tl-none border border-white/5"
                                    }`}
                            >
                                {msg.text}
                            </div>

                            {/* Render Build Preview if applicable */}
                            {msg.type === "build-preview" && msg.data && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-4 bg-[#10002B] rounded-xl border border-[#FDC500]/30 shadow-lg mt-2 w-full"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="font-bold text-[#FDC500]">{msg.data.name}</h4>
                                        <span className="text-white font-mono">{msg.data.price}</span>
                                    </div>
                                    <div className="space-y-2 text-xs text-gray-400 mb-4">
                                        <div className="flex justify-between border-b border-white/5 pb-1"><span>CPU</span> <span className="text-white">{msg.data.cpu}</span></div>
                                        <div className="flex justify-between border-b border-white/5 pb-1"><span>GPU</span> <span className="text-white">{msg.data.gpu}</span></div>
                                    </div>
                                    <button className="w-full py-2 bg-[#240046] hover:bg-[#C77DFF] text-white hover:text-[#10002B] text-xs font-bold rounded-lg transition-colors uppercase tracking-wider">
                                        View Full Parts List
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        {msg.sender === "user" && (
                            <div className="w-8 h-8 rounded-full bg-[#FDC500] flex flex-shrink-0 items-center justify-center border border-white/10 mt-1">
                                <User className="w-4 h-4 text-[#10002B]" />
                            </div>
                        )}
                    </motion.div>
                ))}

                {isTyping && (
                    <div className="flex gap-4 justify-start">
                        <div className="w-8 h-8 rounded-full bg-[#240046] flex flex-shrink-0 items-center justify-center border border-white/10 mt-1">
                            <Bot className="w-4 h-4 text-[#C77DFF]" />
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-1">
                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#10002B]/80 border-t border-white/5">

                {/* Suggestions */}
                {messages.length === 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none mask-fade-right">
                        {SUGGESTED_PROMPTS.map((prompt, i) => (
                            <button
                                key={i}
                                onClick={() => setInput(prompt)}
                                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 transition-colors"
                            >
                                {prompt}
                            </button>
                        ))}
                    </div>
                )}

                <div className="relative flex items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Describe your dream PC..."
                        className="w-full bg-[#0a001a] text-white pl-4 pr-12 py-4 rounded-xl border border-white/10 focus:border-[#C77DFF] focus:ring-1 focus:ring-[#C77DFF] outline-none placeholder:text-gray-600 transition-all font-medium"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isTyping}
                        className="absolute right-2 p-2 bg-[#C77DFF] hover:bg-[#b55ae8] text-[#10002B] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
