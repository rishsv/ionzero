"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface RainDrop {
    id: number;
    x: number;
    delay: number;
    duration: number;
    opacity: number;
    scale: number;
}

export default function RainSystem() {
    const [drops, setDrops] = useState<RainDrop[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initial batch of drops
        const initialDrops = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 0.8 + Math.random() * 0.5,
            opacity: 0.1 + Math.random() * 0.4,
            scale: 0.5 + Math.random() * 1,
        }));
        setDrops(initialDrops);
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            <AnimatePresence>
                {drops.map((drop) => (
                    <RainDropComponent key={drop.id} drop={drop} />
                ))}
            </AnimatePresence>

            {/* Ambient Mist/Fog */}
            <div className="absolute inset-0 bg-foreground/[0.02] backdrop-blur-[2px] pointer-events-none" />
        </div>
    );
}

function RainDropComponent({ drop }: { drop: RainDrop }) {
    const [isSplashing, setIsSplashing] = useState(false);

    return (
        <>
            <motion.div
                className="absolute w-[1px] bg-gradient-to-b from-transparent via-foreground/40 to-foreground/20"
                style={{
                    left: `${drop.x}%`,
                    height: `${40 * drop.scale}px`,
                    opacity: drop.opacity
                }}
                initial={{ top: "-10%" }}
                animate={{ top: "100%" }}
                transition={{
                    duration: drop.duration,
                    repeat: Infinity,
                    delay: drop.delay,
                    ease: "linear",
                }}
                onUpdate={(latest) => {
                    if (typeof latest.top === "string" && parseFloat(latest.top) > 95) {
                        setIsSplashing(true);
                        setTimeout(() => setIsSplashing(false), 500);
                    }
                }}
            />

            {/* Splash Effect on "Floor" (approximately 100% top) */}
            <AnimatePresence>
                {isSplashing && (
                    <motion.div
                        className="absolute bottom-0"
                        style={{ left: `${drop.x}%` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Split Particles */}
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-[2px] h-[2px] bg-foreground/30 rounded-full"
                                initial={{ x: 0, y: 0 }}
                                animate={{
                                    x: (i - 1.5) * 15 * Math.random(),
                                    y: -10 * Math.random() - 5,
                                    opacity: [1, 0],
                                    scale: [1, 0]
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                        ))}
                        {/* Ripple */}
                        <motion.div
                            className="absolute w-6 h-1 border border-foreground/10 rounded-[50%] -translate-x-1/2"
                            initial={{ scale: 0, opacity: 0.5 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
