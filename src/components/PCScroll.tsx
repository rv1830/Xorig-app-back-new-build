"use client";

import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 192; // Found 192 images in the directory
const IMAGES_FOLDER = "/PC_Design";

export default function PCScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Scroll progress for the entire container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll to frame index
    // input: [0, 1] -> output: [0, FRAME_COUNT - 1]
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let count = 0;

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                // Construct filename: 00001.jpg, 00010.jpg, etc.
                const filename = i.toString().padStart(5, "0") + ".jpg";
                img.src = `${IMAGES_FOLDER}/${filename}`;

                await new Promise<void>((resolve) => {
                    img.onload = () => {
                        count++;
                        setLoadedCount(count);
                        resolve();
                    };
                    img.onerror = () => {
                        console.warn(`Failed to load image: ${filename}`);
                        resolve(); // Continue even if error
                    }
                });
                loadedImages.push(img);
            }

            setImages(loadedImages);
            setIsLoading(false);
        };

        loadImages();
    }, []);

    // Draw to canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Handle high DPI displays settings
        const render = () => {
            const idx = Math.floor(frameIndex.get());
            const image = images[idx];

            if (image) {
                // Resize canvas to match window while maintaining aspect ratio or contain
                // Logic: we want the image to act like "object-fit: contain" within the viewport

                // Set canvas logic size to window size
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                // Calculate scale to contain image
                const scale = Math.min(
                    canvas.width / image.width,
                    canvas.height / image.height
                );

                // Center position
                const x = (canvas.width - image.width * scale) / 2;
                const y = (canvas.height - image.height * scale) / 2;

                // Clear and draw
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
            }
        };

        // Initial draw
        render();

        // Subscribe to scroll changes to re-render
        const unsubscribe = frameIndex.on("change", () => {
            requestAnimationFrame(render);
        });

        // Also handle resize
        window.addEventListener('resize', render);

        return () => {
            unsubscribe();
            window.removeEventListener('resize', render);
        };
    }, [images, frameIndex, isLoading]);


    return (
        <div ref={containerRef} className="h-[400vh] w-full relative bg-[#10002B]">

            {/* Loading State */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#10002B] text-[#FDC500]"
                    >
                        <div className="w-16 h-16 border-4 border-[#FDC500]/20 border-t-[#FDC500] rounded-full animate-spin mb-4"></div>
                        <p className="font-mono text-sm tracking-widest">LOADING SEQUENCE {Math.round((loadedCount / FRAME_COUNT) * 100)}%</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sticky Canvas & Overlays */}
            <div className="sticky top-20 h-[calc(100vh-3.5rem)] w-full overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-contain" />

                {/* Text Overlays - Inside sticky container to stay with canvas */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <TextOverlays scrollYProgress={scrollYProgress} />
                </div>
            </div>

        </div>
    );
}

function TextOverlays({ scrollYProgress }: { scrollYProgress: any }) {
    // 0% - Centered
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

    // 25% - Left Aligned
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.3], [20, 0]);

    // 60% - Right Aligned
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.7], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.65], [20, 0]);

    // 90% - Centered CTA
    const opacity4 = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);
    const y4 = useTransform(scrollYProgress, [0.85, 0.95], [20, 0]);

    return (
        <div className="w-full h-full max-w-7xl mx-auto px-6 flex flex-col justify-center relative">

            {/* Beat 1: 0% */}
            <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex items-center justify-center text-center">
                <div className="bg-black/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10 shadow-2xl">
                    <h2 className="text-6xl md:text-9xl font-black text-[#FDC500] tracking-tighter mb-4 drop-shadow-lg">Xorig</h2>
                    <p className="text-white text-2xl tracking-[0.5em] font-bold uppercase drop-shadow-md">Custom PCs, Built for Your Life. </p>
                </div>
            </motion.div>

            {/* Beat 2: 25% Left */}
            <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-0 flex items-center justify-start md:pl-20">
                <div className="text-left p-8 ">
                    <h2 className="text-5xl md:text-8xl font-black text-[#FDC500] tracking-tighter mb-4 leading-none drop-shadow-lg">BUILT FOR<br />PRECISION.</h2>
                    <p className="text-white text-xl tracking-widest font-bold uppercase drop-shadow-md">Every detail, measured</p>
                </div>
            </motion.div>

            {/* Beat 3: 60% Right */}
            <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-0 flex items-center justify-end md:pr-20">
                <div className="text-right p-8 ">
                    <h2 className="text-5xl md:text-8xl font-black text-[#FDC500] tracking-tighter mb-4 leading-none drop-shadow-lg">LAYERED<br />ENGINEERING.</h2>
                    <p className="text-white text-xl tracking-widest font-bold uppercase drop-shadow-md">See what's inside</p>
                </div>
            </motion.div>

            {/* Beat 4: 90% Centered */}
            <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute inset-0 flex items-center justify-center text-center">
                <div className="bg-black/10 backdrop-blur-sm p-10 rounded-3xl border border-white/10 shadow-2xl">
                    <h2 className="text-6xl md:text-8xl font-black text-[#FDC500] tracking-tighter mb-6 drop-shadow-lg">ASSEMBLED.<br />READY.</h2>
                    <p className="text-white text-xl tracking-widest font-bold uppercase mb-8 drop-shadow-md">Scroll back to replay</p>
                    <button className="pointer-events-auto px-10 py-4 bg-[#FDC500] text-[#240046] rounded-full font-black text-xl hover:scale-105 transition-transform shadow-lg hover:shadow-[#FDC500]/50">
                        PRE-ORDER NOW
                    </button>
                </div>
            </motion.div>

        </div>
    );
}
