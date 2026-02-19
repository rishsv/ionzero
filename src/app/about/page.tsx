"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Droplets, ShieldCheck, Microscope } from "lucide-react";
import Image from "next/image";
import SetharuthalWater from "@/components/ui/SetharuthalWater";

export default function AboutPage() {
    return (
        <div className="pt-20 relative min-h-screen">
            <SetharuthalWater />

            {/* Hero Section */}
            <Section className="bg-background/20 backdrop-blur-sm border-b border-border min-h-[90vh] flex items-center justify-center z-10 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-items-center w-full px-8 lg:px-12">
                    <div className="text-center lg:text-left max-w-xl w-full">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold tracking-[0.6em] uppercase mb-12 text-muted"
                        >
                            The Pursuit of Zero
                        </motion.h2>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-6xl md:text-8xl font-thin uppercase tracking-[-0.04em] mb-12 leading-[0.8] flex flex-col items-center lg:items-start"
                        >
                            <span>Engineered</span>
                            <span className="font-black italic">Purity</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[11px] font-bold uppercase tracking-[0.2em] leading-loose text-muted max-w-md mx-auto lg:mx-0"
                        >
                            <span className="font-ion normal-case">Ion</span><span className="font-zero">ZERO</span> by MKT Aqua is born from the intersection of advanced fluid dynamics and pharmaceutical-grade filtration standards. Our mission is the total elimination of ionic interference.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-xl aspect-video flex items-center justify-center"
                    >
                        <Image
                            src="/assets/about-precision.png"
                            alt="Ultra-pure water focus"
                            width={650}
                            height={450}
                            className="object-contain opacity-70 grayscale hover:opacity-100 transition-opacity duration-1000"
                        />
                    </motion.div>
                </div>
            </Section>

            {/* Why Choose Section */}
            <Section className="bg-accent/30 border-b border-border">
                <div className="max-w-7xl mx-auto text-center px-6">
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-thin uppercase tracking-[-0.02em] mb-12 leading-tight">
                            Why Choose the <br />
                            <span className="font-black italic"><span className="font-ion normal-case">Ion</span><span className="font-zero">ZERO</span> Process?</span>
                        </h2>
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed text-muted mx-auto max-w-2xl px-6">
                            While standard DI/DM water uses separate stages, our Mixed Bed Polishing acts as thousands of mini-stages in a single vessel, ensuring absolute neutrality.
                        </p>
                    </div>

                    <div className="space-y-24">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="flex flex-col items-center gap-6">
                                <ShieldCheck className="w-8 h-8 text-foreground" />
                                <div className="space-y-2">
                                    <h4 className="font-bold uppercase tracking-[0.1em] text-[10px]">Ionic Capture</h4>
                                    <p className="text-muted text-[9px] leading-relaxed uppercase tracking-[0.05em]">
                                        Near-perfect neutral pH and maximum resistance.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-6">
                                <Microscope className="w-8 h-8 text-foreground" />
                                <div className="space-y-2">
                                    <h4 className="font-bold uppercase tracking-[0.1em] text-[10px]">Purity Target</h4>
                                    <p className="text-muted text-[9px] leading-relaxed uppercase tracking-[0.05em]">
                                        Targets contaminants standard systems miss.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-6">
                                <Droplets className="w-8 h-8 text-foreground" />
                                <div className="space-y-2">
                                    <h4 className="font-bold uppercase tracking-[0.1em] text-[10px]">Zero Scaling</h4>
                                    <p className="text-muted text-[9px] leading-relaxed uppercase tracking-[0.05em]">
                                        Prevent mineral scaling in sensitive tools.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="py-16 border-y border-border/50 max-w-4xl mx-auto">
                            <h3 className="text-[32px] md:text-[40px] font-black text-muted/30 mb-8 uppercase tracking-tighter">MIXED BED POLISHING</h3>
                            <p className="text-sm font-medium text-foreground italic leading-relaxed max-w-xl mx-auto">
                                &quot;Mixed Bed systems provide a much more thorough exchange, resulting in higher resistivity and a more stable pH than dual bed systems.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Custom Solutions Section */}
            <Section className="bg-background">
                <div className="max-w-7xl mx-auto text-center px-6">
                    <div className="mb-24">
                        <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-8 text-muted italic">Precision at any scale</h2>
                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-[-0.02em]">Custom Solutions for <span className="text-gradient">Every Scale</span></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Laboratory & Research",
                                desc: "Precision-grade water for titration, spectroscopy, and molecular biology where trace elements can skew results."
                            },
                            {
                                title: "Industrial Manufacturing",
                                desc: "High-volume supply for plating, chemical blending, and precision cleaning in the aerospace and automotive sectors."
                            },
                            {
                                title: "Energy & Power",
                                desc: "Ultra-pure feed water for high-pressure boilers and turbines to maximize heat transfer efficiency and prevent corrosion."
                            }
                        ].map((solution, i) => (
                            <div key={i} className="p-12 border border-border hover:bg-accent hover:border-foreground/10 transition-all group">
                                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 group-hover:italic transition-all">{solution.title}</h4>
                                <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted leading-loose max-w-xs mx-auto">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
