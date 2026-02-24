"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceImageSlider = ({ images, title }) => {
    const [index, setIndex] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // every 3 seconds
        return () => clearInterval(interval);
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl border border-neutral-800">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Image
                        src={images[index]}
                        alt={`${title} - Slide ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center rounded-2xl"
                    />
                </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
                <>
                    <button
                        onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
                        className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/60 p-3 rounded-full text-white hover:text-yellow-400 transition z-10"
                        aria-label="Previous Slide"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => setIndex((prev) => (prev + 1) % images.length)}
                        className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/60 p-3 rounded-full text-white hover:text-yellow-400 transition z-10"
                        aria-label="Next Slide"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </>
            )}

            {/* Decorative glows */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-red-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none" />
        </div>
    );
};

export default ServiceImageSlider;
