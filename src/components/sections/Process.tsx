"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Droplets, Zap, Filter, Beaker, CheckCircle } from "lucide-react";

const stages = [
    {
        title: "Reverse Osmosis (RO)",
        desc: "Removes 95–99% of bulk contaminants through high-pressure membrane filtration.",
        icon: Filter,
    },
    {
        title: "UV Sterilization",
        desc: "Destroys DNA and eliminates microbial growth using intense ultraviolet light.",
        icon: Zap,
    },
    {
        title: "Cation Exchange",
        desc: "Targets and removes positively charged metal ions from the fluid.",
        icon: Droplets,
    },
    {
        title: "Anion Exchange",
        desc: "Targets and removes negatively charged non-metal ions for increased purity.",
        icon: Beaker,
    },
    {
        title: "Mixed Bed Polishing",
        desc: "The ultimate 'polishing' stage where cation and anion resins are blended to catch any remaining trace impurities, delivering ultra-high resistivity.",
        icon: CheckCircle,
        highlight: true,
    },
];

export default function Process() {
    return (
        <Section id="process" className="bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-8 text-muted">
                        Our Multi-Stage Purification Process
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-thin uppercase tracking-[-0.02em] mb-4 leading-none">
                        We don&apos;t just filter water; <br />
                        <span className="font-black italic">We Refine It</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {stages.map((stage, i) => (
                        <motion.div
                            key={stage.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 transition-all border-[var(--hairline)] flex flex-col justify-between ${stage.highlight
                                ? "bg-foreground border-foreground text-background"
                                : "bg-accent border-border text-foreground hover:bg-background"
                                }`}
                        >
                            <div>
                                <stage.icon className={`w-6 h-6 mb-8 ${stage.highlight ? "text-background" : "text-foreground"}`} />
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 min-h-[2.5rem]">
                                    {stage.title}
                                </h4>
                                <p className={`text-[9px] font-medium uppercase tracking-[0.1em] leading-loose ${stage.highlight ? "text-background/70" : "text-muted"}`}>
                                    {stage.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 p-12 glass border-[var(--hairline)] border-border dark:border-0 text-center max-w-4xl mx-auto ring-1 ring-foreground/5 dark:ring-0 items-center justify-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted italic leading-loose max-w-2xl mx-auto">
                        &quot;<span className="font-ion normal-case">Ion</span><span className="font-zero">ZERO</span> DI/DM Water by MKT Aqua is ultra-pure deionized and demineralized water polished through a mixed bed ion-exchange system for the most critical and sensitive applications.&quot;
                    </p>
                </div>
            </div>
        </Section>
    );
}
