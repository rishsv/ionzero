"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Section
            id="hero"
            className="relative min-h-[110vh] flex items-center justify-center overflow-hidden px-0 py-0"
        >
            {/* Hero Content */}
            <div className="relative z-20 w-full max-w-[1600px] mx-auto px-8 lg:px-24">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Overline Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mb-8"
                    >
                        <span className="text-[10px] font-bold tracking-[0.4em] text-muted/60">
                            <span className="font-ion normal-case">Ion</span>
                            <span className="font-zero">ZERO</span>
                            <span className="font-ion normal-case"> Ultra-Pure Grade DI/DM Water by MKT Aqua</span>
                        </span>
                    </motion.div>

                    {/* Main Headline - Minimalist & Bold */}
                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl md:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.9]"
                        >
                            The Ultimate <br /><span className="text-gradient italic">Standard</span>
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="text-xl md:text-2xl font-thin uppercase tracking-[0.2em] leading-tight"
                        >
                            For Critical Precision
                        </motion.h2>
                    </div>

                    {/* Detailed Body Copy */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1.2 }}
                        className="max-w-3xl mx-auto mb-16 space-y-6"
                    >
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed text-muted">
                            In high-stakes environments, water isn&apos;t just a solvent—it's a critical component. <span className="font-ion normal-case">Ion</span><span className="font-zero">ZERO</span> Ultra-Pure Grade DI/DM Water by MKT Aqua is engineered for industries where even parts-per-billion contamination can lead to catastrophic failure.
                        </p>
                        <p className="text-[10px] font-medium uppercase tracking-[0.1em] leading-loose text-muted/80">
                            Our water undergoes a rigorous multi-stage purification sequence to ensure it reaches the highest possible ionic and organic purity levels.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-10"
                    >
                        <Link
                            href="/products"
                            className="px-14 py-6 bg-foreground text-background text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-muted transition-all rounded-none ring-1 ring-foreground/20"
                        >
                            Catalog
                        </Link>
                        <a
                            href="https://forms.gle/gDSFKW5YGvnSf8Ea8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-14 py-6 border border-foreground/20 text-foreground text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-foreground hover:text-background transition-all rounded-none"
                        >
                            Request
                        </a>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
