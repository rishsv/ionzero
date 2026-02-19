"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { useTheme } from "next-themes";

const sizes = [
    {
        size: "1-Litre",
        desc: "Common size for laboratory and small industrial use.",
        imageDark: "/assets/products/ionzero_1l.png",
        imageLight: "/assets/products/b1l.png",
    },
    {
        size: "5-Litre",
        desc: "Common size for laboratory and small industrial use.",
        imageDark: "/assets/products/ionzero_5l.png",
        imageLight: "/assets/products/b5l.png",
    },
    {
        size: "20-Litre",
        desc: "For larger lab requirements and commercial applications.",
        imageDark: "/assets/products/ionzero_20l.png",
        imageLight: "/assets/products/b20l.png",
    },
    {
        size: "50-Litre",
        desc: "For larger lab storage and distribution.",
        imageDark: "/assets/products/ionzero_50l.png",
        imageLight: "/assets/products/b50l.png",
    },
    { size: "200-Litre Drums", desc: "For industrial, bulk requirements.", imageDark: "/assets/products/tanker.png", imageLight: "/assets/products/tankerb.png" },
    { size: "1000-Litre IBC", desc: "For very large industrial applications.", imageDark: "/assets/products/tanker.png", imageLight: "/assets/products/tankerb.png" },
    { size: "Bulk Tankers", desc: "For large-scale manufacturing processes.", imageDark: "/assets/products/tanker.png", imageLight: "/assets/products/tankerb.png" },
    {
        size: "Cubitainers",
        desc: "Flexible, space-saving (1L to 25L).",
        imageDark: "/assets/products/ionzero_1l.png",
        imageLight: "/assets/products/b1l.png",
    },
];

export default function ProductSizes() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = require("react").useState(false);

    require("react").useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Section id="products" className="bg-background border-t border-border">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-12">
                    <div className="max-w-2xl px-6 lg:px-0">
                        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-8 text-muted">
                            Scalable Logistics
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-heading font-thin uppercase tracking-[-0.02em] mb-4 leading-none">
                            Container <br />
                            <span className="font-black italic">& Solutions</span>
                        </h3>
                    </div>
                </div>

                {/* Sizes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {sizes.map((item, i) => (
                        <motion.div
                            key={item.size}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group flex flex-col p-8 border border-border hover:border-foreground/20 transition-all hover:bg-accent h-full"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-3xl font-black text-foreground/5 group-hover:text-foreground/10 transition-colors">
                                    0{i + 1}
                                </span>
                                <div className="relative w-28 h-28 overflow-hidden grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all">
                                    {mounted ? (
                                        <Image
                                            src={
                                                resolvedTheme === "dark"
                                                    ? item.imageDark ?? item.imageLight
                                                    : item.imageLight ?? item.imageDark
                                            }
                                            alt={item.size}
                                            fill
                                            className="object-contain p-3"
                                        />
                                    ) : (
                                        <div className="w-full h-full" />
                                    )}
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground mb-4 leading-tight">
                                    {item.size}
                                </h4>
                                <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-muted leading-loose">
                                    {item.desc}
                                </p>
                                {/* Removed Technical Datasheet Available section */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
