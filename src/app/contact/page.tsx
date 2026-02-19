"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-20">
            <Section id="contact-details" className="bg-background py-32">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
                    <div className="flex-1">
                        <h2 className="text-xs font-bold tracking-[0.5em] uppercase mb-8 text-muted">
                            Liaison & Purity
                        </h2>
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
                            Absolute <br />
                            <span className="text-gradient italic">Support</span>
                        </h1>
                        <p className="text-muted text-sm uppercase tracking-widest leading-relaxed mb-16 max-w-lg">
                            Whether for analytical compliance, laboratory excellence, or industrial scale logistics, our engineering team ensures the ultimate standard.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center border border-border rounded-none">
                                        <Mail className="w-4 h-4 text-foreground" />
                                    </div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted">Email</h4>
                                </div>
                                <p className="text-sm font-bold text-foreground uppercase tracking-tight">ionzero.off@gmail.com</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center border border-border rounded-none">
                                        <Phone className="w-4 h-4 text-foreground" />
                                    </div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted">WhatsApp</h4>
                                </div>
                                <a
                                    href="https://wa.me/919489810099?text=Hi%20IonZERO%20team%2C%20I%20would%20like%20to%20enquire%20about%20DI%2FDM%20water."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-bold text-foreground uppercase tracking-tight hover:text-muted transition-colors"
                                >
                                    +91 94898 10099
                                </a>
                            </div>
                            <div className="sm:col-span-2 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center border border-border rounded-none">
                                        <MapPin className="w-4 h-4 text-foreground" />
                                    </div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted">Operations</h4>
                                </div>
                                <p className="text-sm font-bold text-foreground uppercase tracking-tight leading-relaxed">
                                    440/2A1F, Sirupuzhalpettai village,<br />
                                    Gummidipoondi, Tiruvallur - 601 201
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 glass border border-border/50 dark:border-0 p-12 md:p-16 rounded-none relative flex flex-col justify-center items-center text-center">
                        <div className="absolute top-0 right-0 p-8">
                            <span className="text-[8px] font-bold uppercase tracking-[0.8em] text-muted/30">Form // DI-01</span>
                        </div>

                        <div className="w-full max-w-lg space-y-10">
                            <div className="text-left">
                                <h3 className="text-2xl font-thin uppercase tracking-tight text-foreground mb-4">Purity Request Portal</h3>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted leading-relaxed">Please specify your diagnostic or industrial requirements below.</p>
                            </div>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3 text-left border-l border-border pl-6">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted/60">01 // Identity</label>
                                        <input type="text" className="w-full bg-transparent border-b border-border py-2 text-xs text-foreground focus:border-foreground outline-none transition-all uppercase tracking-widest placeholder:text-muted/20" placeholder="Full Name" required />
                                    </div>
                                    <div className="space-y-3 text-left border-l border-border pl-6">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted/60">02 // Enterprise</label>
                                        <input type="text" className="w-full bg-transparent border-b border-border py-2 text-xs text-foreground focus:border-foreground outline-none transition-all uppercase tracking-widest placeholder:text-muted/20" placeholder="Organization" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3 text-left border-l border-border pl-6">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted/60">03 // Access</label>
                                        <input type="email" className="w-full bg-transparent border-b border-border py-2 text-xs text-foreground focus:border-foreground outline-none transition-all uppercase tracking-widest placeholder:text-muted/20" placeholder="Email@Work" required />
                                    </div>
                                    <div className="space-y-3 text-left border-l border-border pl-6">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted/60">04 // Liaison</label>
                                        <input type="tel" className="w-full bg-transparent border-b border-border py-2 text-xs text-foreground focus:border-foreground outline-none transition-all uppercase tracking-widest placeholder:text-muted/20" placeholder="+91 XXXX" required />
                                    </div>
                                </div>

                                <div className="space-y-3 text-left border-l border-border pl-6">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted/60">05 // Classification</label>
                                    <select className="w-full bg-transparent border-b border-border py-2 text-xs text-foreground focus:border-foreground outline-none transition-all uppercase tracking-widest appearance-none cursor-pointer">
                                        <option className="bg-background">Ultra-Pure Grade (18.2 MΩ)</option>
                                        <option className="bg-background">Analytical Grade</option>
                                        <option className="bg-background">Industrial Supply</option>
                                        <option className="bg-background">Bulk / IBC Logistics</option>
                                        <option className="bg-background">Technical Consultation</option>
                                    </select>
                                </div>

                                <div className="space-y-3 text-left border-l border-border pl-6">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted/60">06 // Specifications</label>
                                    <textarea rows={2} className="w-full bg-transparent border-b border-border py-2 text-xs text-foreground focus:border-foreground outline-none transition-all uppercase tracking-widest placeholder:text-muted/20 resize-none" placeholder="Target resistivity / Volume / Frequency"></textarea>
                                </div>

                                <a
                                    href="https://forms.gle/gDSFKW5YGvnSf8Ea8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-6 bg-foreground text-background font-black uppercase tracking-[0.5em] text-[10px] hover:bg-muted transition-all rounded-none flex items-center justify-center gap-4 group"
                                >
                                    Transmit to Google Forms <Send className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
