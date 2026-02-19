"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What is the difference between regular water and DI/DM water?",
        answer: "Regular tap or bottled water contains dissolved minerals, ions, and organic compounds that can interfere with sensitive processes. DI/DM (Deionized/Demineralized) water has virtually all these impurities removed, achieving resistivity up to 18.2 MΩ·cm - making it essential for applications where even trace contamination can cause failure.",
    },
    {
        question: "What is the difference between RO and DI/DM?",
        answer: (
            <>
                Reverse Osmosis (RO) removes the bulk of contaminants (approx. 98%), while Deionization (DI) and Demineralization (DM) 'polish' the water to remove the final remaining ions and minerals. Using both in sequence, as <span className="font-ion normal-case">Ion</span><span className="font-zero">ZERO</span> by MKT Aqua does, provides the highest purity levels achievable.
            </>
        ),
    },
    {
        question: "Why is Mixed Bed better than Dual Bed?",
        answer: "Dual bed systems (separate tanks) often have 'leakage' of certain ions. Mixed Bed systems provide a much more thorough exchange, resulting in higher resistivity and a more stable pH.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section id="faq" className="bg-background border-t border-border">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-muted">
                        Knowledge Base
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                        Frequently <br />
                        <span className="text-gradient">Asked Questions</span>
                    </h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-border/50 rounded-none overflow-hidden transition-all">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-accent transition-colors"
                            >
                                <span className="font-bold uppercase tracking-tight text-foreground">{faq.question}</span>
                                {openIndex === i ? <Minus className="w-4 h-4 text-foreground" /> : <Plus className="w-4 h-4 text-foreground" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-muted text-sm leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
