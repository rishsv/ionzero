"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export default function Section({ children, className, id, delay = 0 }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={cn("py-32 px-6 relative overflow-hidden", className)}
        >
            {/* Ambient Mist Reveal */}
            <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
                <motion.div
                    animate={{ x: ["-10%", "10%"], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,var(--foreground)_0%,transparent_70%)] opacity-5"
                />
            </div>
            <div className="relative z-10">
                {children}
            </div>
        </motion.section>
    );
}
