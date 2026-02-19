"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Pill, Cpu, FlaskConical, Thermometer, Zap } from "lucide-react";

const industries = [
    {
        name: "Pharmaceutical Production",
        desc: "Meets stringent USP/EP standards for manufacturing and rinsing high-value batches.",
        icon: Pill,
    },
    {
        name: "Analytical Laboratories",
        desc: "Ideal for reagent makeup, HPLC, and sensitive analytical testing where trace elements skew results.",
        icon: FlaskConical,
    },
    {
        name: "Electronics & Semiconductors",
        desc: "Ultrapure water for wafer cleaning and circuit board manufacturing where purity is non-negotiable.",
        icon: Cpu,
    },
    {
        name: "Battery Maintenance",
        desc: "Prevents mineral buildup in lead-acid and lithium-ion cooling systems for longevity.",
        icon: Thermometer,
    },
    {
        name: "High-Pressure Boilers",
        desc: "Final-stage feed water to prevent mineral scaling and corrosion in critical turbines.",
        icon: Zap,
    },
];

export default function Industries() {
    return (
        <Section id="solutions" className="bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                    <div className="max-w-2xl px-6 lg:px-0">
                        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-8 text-muted">
                            Engineered for Excellence
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-heading font-thin uppercase tracking-[-0.02em] mb-4 leading-none">
                            Critical <br />
                            <span className="font-black italic">Performance</span>
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-1">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative aspect-[4/5] border-[var(--hairline)] border-border dark:border-0 p-8 flex flex-col justify-between hover:bg-foreground overflow-hidden transition-all duration-700"
                        >
                            <div className="z-10">
                                <industry.icon className="w-8 h-8 text-foreground group-hover:text-background transition-colors duration-500 mb-6" />
                                <h4 className="text-xs font-bold uppercase tracking-tight text-foreground group-hover:text-background transition-colors duration-500 mb-4 leading-tight">
                                    {industry.name}
                                </h4>
                                <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-muted group-hover:text-background/60 transition-colors duration-500 leading-relaxed">
                                    {industry.desc}
                                </p>
                            </div>

                            <div className="z-10 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-[8px] font-bold uppercase tracking-widest text-background border-b border-background pb-1">
                                    Engineering Support
                                </span>
                            </div>

                            {/* Hover background effect */}
                            <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
