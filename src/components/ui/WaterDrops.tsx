"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Drop {
    id: number;
    x: string;
    delay: number;
    duration: number;
}

export default function WaterDrops() {
    const [drops, setDrops] = useState<Drop[]>([]);
    const [splashes, setSplashes] = useState<{ id: number; x: string }[]>([]);

    useEffect(() => {
        const newDrops = Array.from({ length: 12 }).map((_, i) => ({
            id: Date.now() + i,
            x: `${Math.random() * 100}%`,
            delay: Math.random() * 5,
            duration: 2 + Math.random() * 2,
        }));
        setDrops(newDrops);
    }, []);

    const handleSplash = (id: number, x: string) => {
        setSplashes((prev) => [...prev, { id, x }]);
        setTimeout(() => {
            setSplashes((prev) => prev.filter((s) => s.id !== id));
        }, 1000);
    };

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {drops.map((drop) => (
                <motion.div
                    key={drop.id}
                    className="absolute w-[1px] h-[40px] bg-gradient-to-b from-transparent via-foreground/30 to-foreground/10"
                    initial={{ top: "-10%", x: drop.x, opacity: 0 }}
                    animate={{ top: "90%", opacity: [0, 0.8, 0] }}
                    transition={{
                        duration: drop.duration,
                        repeat: Infinity,
                        delay: drop.delay,
                        ease: "linear",
                    }}
                    onUpdate={(latest) => {
                        if (typeof latest.top === "string" && parseFloat(latest.top) > 89) {
                            // Trigger splash slightly before it disappears
                        }
                    }}
                />
            ))}

            {/* Splash Effects */}
            {drops.map((drop) => (
                <div key={`container-${drop.id}`} className="absolute w-full h-full">
                    <motion.div
                        className="absolute bottom-[10%]"
                        style={{ left: drop.x }}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 2],
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: drop.delay + drop.duration - 0.1, // Sync with drop landing
                            ease: "easeOut",
                        }}
                    >
                        {/* Splitting droplets */}
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-foreground/20 rounded-full"
                                animate={{
                                    x: [(i - 1.5) * 10, (i - 1.5) * 30],
                                    y: [0, -20, 10],
                                    opacity: [1, 0],
                                }}
                                transition={{
                                    duration: 0.5,
                                    repeat: Infinity,
                                    delay: drop.delay + drop.duration - 0.1,
                                }}
                            />
                        ))}
                        {/* Ripple */}
                        <motion.div
                            className="absolute w-4 h-1 border border-foreground/10 rounded-[50%]"
                            animate={{ scale: [1, 4], opacity: [0.5, 0] }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: drop.delay + drop.duration - 0.1,
                            }}
                        />
                    </motion.div>
                </div>
            ))}
        </div>
    );
}
