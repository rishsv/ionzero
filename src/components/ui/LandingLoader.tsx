"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function LandingLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setTimeout(() => setIsLoading(false), 3500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Pulsing Water Drop Shadow */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: [0, 0.1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-[600px] h-[600px] bg-foreground/10 rounded-full blur-[100px]"
                    />

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-20 h-20 mb-12"
                        >
                            {mounted && (
                                <Image
                                    src={resolvedTheme === "dark" ? "/logo-black.png" : "/logowhite.png"}
                                    alt="ionzero logo"
                                    fill
                                    className={cn("object-contain transition-all")}
                                />
                            )}
                        </motion.div>

                        <div className="overflow-hidden mb-4">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="text-4xl tracking-[0.2em] text-foreground"
                            >
                                <span className="font-ion normal-case">Ion</span>
                                <span className="font-zero">ZERO</span>
                            </motion.h1>
                        </div>

                        <div className="w-48 h-[var(--hairline)] bg-border relative overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                className="absolute inset-0 bg-foreground"
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            className="text-[10px] font-bold tracking-[0.4em] uppercase text-muted mt-6"
                        >
                            Purity Engineered.
                        </motion.p>
                    </div>

                    {/* Ambient Water Particles during loading */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none opacity-20">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bottom-0 w-[1px] bg-foreground"
                                initial={{ height: 0, x: `${20 * i + 10}%` }}
                                animate={{ height: [0, 100, 0], opacity: [0, 1, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.4,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
