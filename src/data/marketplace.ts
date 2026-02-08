
// Step Id: 109
// src/data/marketplace.ts
// This is the SINGLE SOURCE OF TRUTH for all Intents, Categories, and Builds.
// Use this across the Home, Marketplace, and Product pages.

export interface Build {
    tier: "XO Spark" | "XO Pulse" | "XO Nova" | "XO Apex";
    name: string;
    price: string;
    priceValue: number; // Raw number for payments
    image: string;
    bestFor: string[];
    whyItWorks: string;
    specs: {
        Processor: string;
        Graphics: string;
        RAM: string;
        Storage: string;
        [key: string]: string;
    };
}

export interface SubCategory {
    id: string; // e.g. "competitive-fps"
    name: string; // e.g. "Competitive FPS"
    description: string;
    builds: Build[];
}

export interface Intent {
    id: string; // e.g. "gaming"
    name: string; // e.g. "Gaming"
    description: string;
    whatMatters: string[];
    subcategories: SubCategory[];
}

export const MARKETPLACE_DATA: Intent[] = [
    {
        id: "gaming",
        name: "Gaming",
        description: "Esports, AAA, high refresh, smooth frames.",
        whatMatters: [
            "Frame rate stability at your target resolution",
            "GPU horsepower for high settings without compromise",
            "Fast RAM and CPU for competitive edge",
            "Thermal headroom for marathon sessions",
            "Future-proof performance for upcoming titles"
        ],
        subcategories: [
            {
                id: "competitive-fps",
                name: "Competitive FPS",
                description: "High FPS esports gaming",
                builds: [
                    {
                        tier: "XO Spark",
                        name: "Esports Starter",
                        price: "₹45,000",
                        priceValue: 45000,
                        image: "/images/builds/gaming-spark.jpg",
                        bestFor: ["1080p 144Hz", "Valorant", "CS2"],
                        whyItWorks: "APU power meets competitive FPS needs with zero GPU cost.",
                        specs: {
                            Processor: "Ryzen 5 5600G",
                            Graphics: "Integrated Vega",
                            RAM: "16GB DDR4",
                            Storage: "512GB NVMe"
                        }
                    },
                    {
                        tier: "XO Pulse",
                        name: "Competitive Edge",
                        price: "₹75,000",
                        priceValue: 75000,
                        image: "/images/builds/gaming-pulse.jpg",
                        bestFor: ["1080p 240Hz", "Apex Legends", "Overwatch 2"],
                        whyItWorks: "Dedicated GPU brings smooth high-refresh gaming without breaking the bank.",
                        specs: {
                            Processor: "Ryzen 5 5600",
                            Graphics: "RTX 4060",
                            RAM: "16GB DDR4",
                            Storage: "1TB NVMe"
                        }
                    },
                    {
                        tier: "XO Nova",
                        name: "Esports Pro",
                        price: "₹1,10,000",
                        priceValue: 110000,
                        image: "/images/builds/gaming-nova.jpg",
                        bestFor: ["1440p 240Hz", "Tournament-ready", "Zero lag"],
                        whyItWorks: "Maximum FPS stability with headroom for streaming capture.",
                        specs: {
                            Processor: "Ryzen 7 5700X",
                            Graphics: "RTX 4070",
                            RAM: "32GB DDR4",
                            Storage: "2TB NVMe"
                        }
                    }
                ]
            },
            {
                id: "aaa-gaming",
                name: "AAA Gaming (1080p / 1440p)",
                description: "Modern AAA titles at high settings",
                builds: [
                    {
                        tier: "XO Pulse",
                        name: "AAA Starter",
                        price: "₹85,000",
                        priceValue: 85000,
                        image: "/images/builds/aaa-pulse.jpg",
                        bestFor: ["1080p Ultra", "60+ FPS", "Modern titles"],
                        whyItWorks: "Handles AAA games at high settings with room to grow.",
                        specs: {
                            Processor: "Ryzen 5 5600",
                            Graphics: "RTX 4060 Ti",
                            RAM: "16GB DDR4",
                            Storage: "1TB NVMe"
                        }
                    },
                    {
                        tier: "XO Nova",
                        name: "AAA Performance",
                        price: "₹1,35,000",
                        priceValue: 135000,
                        image: "/images/builds/aaa-nova.jpg",
                        bestFor: ["1440p Ultra", "Ray tracing", "High refresh"],
                        whyItWorks: "Ray tracing enabled with smooth frame rates at 1440p.",
                        specs: {
                            Processor: "Ryzen 7 7700X",
                            Graphics: "RTX 4070 Ti",
                            RAM: "32GB DDR5",
                            Storage: "2TB NVMe Gen4"
                        }
                    },
                    {
                        tier: "XO Apex",
                        name: "AAA Ultimate",
                        price: "₹2,20,000",
                        priceValue: 220000,
                        image: "/images/builds/aaa-apex.jpg",
                        bestFor: ["4K Ultra", "Max settings", "Future-proof"],
                        whyItWorks: "No compromises. Play everything maxed out.",
                        specs: {
                            Processor: "Ryzen 9 7900X",
                            Graphics: "RTX 4080 Super",
                            RAM: "64GB DDR5",
                            Storage: "4TB NVMe Gen4"
                        }
                    }
                ]
            },
            {
                id: "high-refresh",
                name: "High Refresh + High Settings",
                description: "240Hz+ gaming experience",
                builds: []
            },
            {
                id: "gaming-streaming",
                name: "Gaming + Streaming",
                description: "Stream while you game",
                builds: []
            }
        ]
    },
    {
        id: "graphics-3d",
        name: "Graphics & 3D",
        description: "Blender, CAD workflows, heavy viewport stability.",
        whatMatters: [
            "GPU VRAM for complex scenes and high-res textures",
            "CPU multi-core performance for faster renders",
            "Viewport responsiveness during modeling",
            "RAM capacity for large projects",
            "Storage speed for asset libraries"
        ],
        subcategories: [
            {
                id: "blender",
                name: "Blender (3D Modeling + Rendering)",
                description: "3D modeling and rendering workflows",
                builds: [
                    {
                        tier: "XO Pulse",
                        name: "Blender Starter",
                        price: "₹95,000",
                        priceValue: 95000,
                        image: "/images/builds/blender-pulse.jpg",
                        bestFor: ["Learning 3D", "Small projects", "Viewport work"],
                        whyItWorks: "Balanced CPU and GPU for modeling and moderate rendering.",
                        specs: {
                            Processor: "Ryzen 7 5700X",
                            Graphics: "RTX 4060 Ti 16GB",
                            RAM: "32GB DDR4",
                            Storage: "1TB NVMe"
                        }
                    },
                    {
                        tier: "XO Nova",
                        name: "Blender Pro",
                        price: "₹1,55,000",
                        priceValue: 155000,
                        image: "/images/builds/blender-nova.jpg",
                        bestFor: ["Professional work", "Fast renders", "Complex scenes"],
                        whyItWorks: "VRAM headroom and CPU cores slice through render times.",
                        specs: {
                            Processor: "Ryzen 9 7900X",
                            Graphics: "RTX 4070 Ti 12GB",
                            RAM: "64GB DDR5",
                            Storage: "2TB NVMe Gen4"
                        }
                    },
                    {
                        tier: "XO Apex",
                        name: "Blender Studio",
                        price: "₹2,75,000",
                        priceValue: 275000,
                        image: "/images/builds/blender-apex.jpg",
                        bestFor: ["Studio work", "Production renders", "Max detail"],
                        whyItWorks: "Professional rendering power with maximum VRAM and core count.",
                        specs: {
                            Processor: "Ryzen 9 7950X",
                            Graphics: "RTX 4090 24GB",
                            RAM: "128GB DDR5",
                            Storage: "4TB NVMe Gen4"
                        }
                    }
                ]
            },
            {
                id: "cad",
                name: "CAD (2D/3D)",
                description: "Professional CAD work",
                builds: []
            },
            {
                id: "visualization",
                name: "Visualization & Rendering",
                description: "Professional rendering workloads",
                builds: []
            }
        ]
    },
    {
        id: "ai-workstations",
        name: "AI Workstations",
        description: "VRAM-first builds for training + inference.",
        whatMatters: [
            "GPU VRAM capacity for model size",
            "CUDA core count for training speed",
            "PCIe bandwidth for data throughput",
            "System RAM for data preprocessing",
            "Storage speed for dataset loading"
        ],
        subcategories: [
            {
                id: "starter-ai",
                name: "Starter AI (Single GPU)",
                description: "Entry-level AI and ML work",
                builds: [
                    {
                        tier: "XO Pulse",
                        name: "AI Starter",
                        price: "₹1,10,000",
                        priceValue: 110000,
                        image: "/images/builds/ai-pulse.jpg",
                        bestFor: ["Learning ML", "Small models", "Inference"],
                        whyItWorks: "16GB VRAM gets you started with modern AI workflows.",
                        specs: {
                            Processor: "Ryzen 7 5700X",
                            Graphics: "RTX 4060 Ti 16GB",
                            RAM: "32GB DDR4",
                            Storage: "2TB NVMe"
                        }
                    },
                    {
                        tier: "XO Nova",
                        name: "AI Developer",
                        price: "₹1,85,000",
                        priceValue: 185000,
                        image: "/images/builds/ai-nova.jpg",
                        bestFor: ["Training models", "Research work", "24GB VRAM"],
                        whyItWorks: "24GB VRAM opens doors to larger models and faster training.",
                        specs: {
                            Processor: "Ryzen 9 7900X",
                            Graphics: "RTX 4090 24GB",
                            RAM: "64GB DDR5",
                            Storage: "4TB NVMe Gen4"
                        }
                    }
                ]
            },
            {
                id: "pro-ai",
                name: "Pro AI (High VRAM)",
                description: "Professional AI training",
                builds: []
            },
            {
                id: "heavy-training",
                name: "Heavy Training (Max VRAM)",
                description: "Maximum VRAM for large models",
                builds: []
            },
            {
                id: "creator-ai-hybrid",
                name: "Creator + AI Hybrid",
                description: "Content creation meets AI",
                builds: []
            }
        ]
    },
    {
        id: "photo-video",
        name: "Photo & Video Editing",
        description: "Smooth timelines, fast exports.",
        whatMatters: [
            "GPU acceleration for effects and previews",
            "CPU multi-threading for export speed",
            "Fast NVMe storage for scratch disks",
            "RAM for smooth timeline scrubbing",
            "Color accuracy and calibration support"
        ],
        subcategories: [
            {
                id: "photo-editing",
                name: "Photo Editing",
                description: "Professional photo editing",
                builds: []
            },
            {
                id: "4k-video",
                name: "4K Video Editing",
                description: "4K video workflows",
                builds: [
                    {
                        tier: "XO Pulse",
                        name: "4K Editor",
                        price: "₹95,000",
                        priceValue: 95000,
                        image: "/images/builds/video-pulse.jpg",
                        bestFor: ["4K editing", "Premiere Pro", "DaVinci Resolve"],
                        whyItWorks: "GPU acceleration and fast storage keep timelines smooth.",
                        specs: {
                            Processor: "Ryzen 7 5700X",
                            Graphics: "RTX 4060 Ti",
                            RAM: "32GB DDR4",
                            Storage: "2TB NVMe"
                        }
                    },
                    {
                        tier: "XO Nova",
                        name: "4K Pro",
                        price: "₹1,45,000",
                        priceValue: 145000,
                        image: "/images/builds/video-nova.jpg",
                        bestFor: ["4K multicam", "Color grading", "Fast exports"],
                        whyItWorks: "More cores and VRAM handle complex timelines effortlessly.",
                        specs: {
                            Processor: "Ryzen 9 7900X",
                            Graphics: "RTX 4070 Ti",
                            RAM: "64GB DDR5",
                            Storage: "4TB NVMe Gen4"
                        }
                    }
                ]
            },
            {
                id: "motion-graphics",
                name: "Motion Graphics",
                description: "After Effects and motion work",
                builds: []
            }
        ]
    },
    {
        id: "streaming-production",
        name: "Streaming & Production",
        description: "Stable streams, clean encodes, quiet reliability.",
        whatMatters: [
            "CPU encoding capability for quality streams",
            "GPU NVENC for efficient encoding",
            "Reliable network card and connectivity",
            "Quiet cooling for clean audio",
            "Multi-monitor support"
        ],
        subcategories: [
            {
                id: "streaming-starter",
                name: "Streaming Starter",
                description: "Start your streaming journey",
                builds: []
            },
            {
                id: "streaming-pro",
                name: "Streaming Pro",
                description: "Professional streaming setup",
                builds: [
                    {
                        tier: "XO Nova",
                        name: "Stream Pro",
                        price: "₹1,25,000",
                        priceValue: 125000,
                        image: "/images/builds/stream-nova.jpg",
                        bestFor: ["1080p60 stream", "Gaming + OBS", "Clean encoding"],
                        whyItWorks: "CPU and GPU work together for quality streams without frame drops.",
                        specs: {
                            Processor: "Ryzen 7 7700X",
                            Graphics: "RTX 4070",
                            RAM: "32GB DDR5",
                            Storage: "2TB NVMe"
                        }
                    }
                ]
            },
            {
                id: "creator-studio",
                name: "Creator Studio (Stream + Edit)",
                description: "Complete creator workflow",
                builds: []
            }
        ]
    },
    {
        id: "office",
        name: "Office",
        description: "Snappy, silent, dependable daily drivers.",
        whatMatters: [
            "Snappy responsiveness for daily tasks",
            "Silent operation for focused work",
            "Reliability and build quality",
            "Energy efficiency",
            "Upgrade flexibility"
        ],
        subcategories: [
            {
                id: "everyday-value",
                name: "Everyday Value",
                description: "Reliable daily computing",
                builds: [
                    {
                        tier: "XO Spark",
                        name: "Office Essential",
                        price: "₹35,000",
                        priceValue: 35000,
                        image: "/images/builds/office-spark.jpg",
                        bestFor: ["Daily tasks", "Web browsing", "Office apps"],
                        whyItWorks: "Snappy SSD and modern CPU make everything feel instant.",
                        specs: {
                            Processor: "Ryzen 5 5600G",
                            Graphics: "Integrated",
                            RAM: "16GB DDR4",
                            Storage: "512GB NVMe"
                        }
                    }
                ]
            },
            {
                id: "silent-office",
                name: "Silent Office",
                description: "Whisper-quiet productivity",
                builds: [
                    {
                        tier: "XO Pulse",
                        name: "Silent Productivity",
                        price: "₹55,000",
                        priceValue: 55000,
                        image: "/images/builds/office-pulse.jpg",
                        bestFor: ["Quiet work", "All-day reliability", "Zero distractions"],
                        whyItWorks: "Passive cooling and quality components ensure whisper-quiet operation.",
                        specs: {
                            Processor: "Ryzen 5 5600",
                            Graphics: "Integrated",
                            RAM: "16GB DDR4",
                            Storage: "1TB NVMe"
                        }
                    }
                ]
            },
            {
                id: "heavy-multitasking",
                name: "Heavy Multitasking",
                description: "Power through multiple apps",
                builds: []
            }
        ]
    }
];
