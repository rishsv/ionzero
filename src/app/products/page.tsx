"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Check, ShieldCheck, Beaker } from "lucide-react";

const products = [
    {
        name: "ion",
        nameBold: "ZERO",
        nameRest: " Ultra-Pure DI/DM Water by MKT Aqua",
        grade: "Type I / Grade A",
        resistivity: "18.2 MΩ·cm",
        toc: "< 50 ppb",
        usage: "Critical laboratory analysis, chromatography, and semiconductor cleaning.",
    },
    {
        name: "ion",
        nameBold: "ZERO",
        nameRest: " Industrial DI/DM Water by MKT Aqua",
        grade: "Type II / Grade B",
        resistivity: "10-15 MΩ·cm",
        toc: "< 200 ppb",
        usage: "Battery maintenance, boiler feed water, and industrial chemical blending.",
    }
];

const packaging = [
    { size: "1-Litre", container: "HDPE Bottle", count: "12 per case" },
    { size: "5-Litre", container: "HDPE Bottle", count: "4 per case" },
    { size: "20-Litre", container: "HDPE Carboy", count: "Individual" },
    { size: "50-Litre", container: "Jerrican", count: "Individual" },
    { size: "200-Litre", container: "Steel Drum", count: "Individual" },
    { size: "1000-Litre", container: "IBC Tote", count: "Industrial Bulk" },
];

import Image from "next/image";

export default function ProductsPage() {
    return (
        <div className="pt-20">
            <Section className="bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-6 text-muted">
                                Standard Components
                            </h2>
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.8]">
                                Product <br />
                                <span className="text-gradient italic">Specifications</span>
                            </h1>
                            <p className="text-muted text-[10px] font-bold uppercase tracking-widest max-w-sm">
                                Absolute compliance through real-time monitoring of resistivity and TOC levels.
                            </p>
                        </div>
                        <div className="relative aspect-video glass overflow-hidden rounded-none dark:border-0">
                            <Image
                                src="/assets/products-spec.png"
                                alt="Precision Laboratory Water"
                                fill
                                className="object-cover opacity-80"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
                        {products.map((product, i) => (
                            <motion.div
                                key={`product-${i}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-background p-12 border-[var(--hairline)] border-border rounded-none hover:bg-accent transition-all duration-500"
                            >
                                <h3 className="text-3xl font-bold uppercase tracking-tight mb-2 text-foreground">
                                    {product.name}<span className="font-black">{product.nameBold}</span>{product.nameRest}
                                </h3>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block mb-12">{product.grade}</span>

                                <div className="grid grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Resistivity</span>
                                        <p className="text-xl font-black text-foreground">{product.resistivity}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted">TOC Level</span>
                                        <p className="text-xl font-black text-foreground">{product.toc}</p>
                                    </div>
                                </div>

                                <p className="text-sm text-muted mb-8 leading-relaxed">
                                    {product.usage}
                                </p>

                                <ul className="space-y-3 mb-12">
                                    {["USP/EP Compliant", "Endotoxin Free", "Ion Exchange Polished"].map(text => (
                                        <li key={text} className="flex items-center gap-2 text-xs font-medium text-foreground">
                                            <Check className="w-3 h-3 text-muted" /> {text}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mb-20">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-foreground">Packaging Options</h2>
                        <p className="text-muted text-sm max-w-xl">
                            From precision laboratory bottles to massive industrial totes, <span className="font-ion normal-case">Ion</span><span className="font-zero">ZERO</span> by MKT Aqua scales to your specific volume requirements.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="py-4 text-[10px] font-bold uppercase tracking-widest text-muted">Size</th>
                                    <th className="py-4 text-[10px] font-bold uppercase tracking-widest text-muted">Container Type</th>
                                    <th className="py-4 text-[10px] font-bold uppercase tracking-widest text-muted">Shipping Units</th>
                                    <th className="py-4 text-[10px] font-bold uppercase tracking-widest text-muted">Request</th>
                                </tr>
                            </thead>
                            <tbody>
                                {packaging.map((pkg, i) => (
                                    <tr key={pkg.size} className="border-b border-border/50 hover:bg-accent transition-colors">
                                        <td className="py-6 text-sm font-bold text-foreground">{pkg.size}</td>
                                        <td className="py-6 text-sm text-muted uppercase tracking-tight">{pkg.container}</td>
                                        <td className="py-6 text-sm text-muted">{pkg.count}</td>
                                        <td className="py-6">
                                            <button className="text-[10px] font-bold uppercase tracking-widest text-foreground hover:underline">Quote</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>
        </div>
    );
}
