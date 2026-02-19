"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Footer() {
    const { resolvedTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer className="bg-background border-t-[var(--hairline)] border-border py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                {/* Brand Section */}
                <div className="flex flex-col items-center md:items-start gap-6 lg:col-span-1 text-center md:text-left">
                    <Link href="/" className="flex items-center gap-3 group justify-center md:justify-start">
                        <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
                            {mounted && (
                                <Image
                                    src={resolvedTheme === "dark" ? "/logo-black.png" : "/logowhite.png"}
                                    alt="ionzero logo"
                                    fill
                                    className={cn("object-contain transition-all duration-300")}
                                />
                            )}
                        </div>
                        <span className="text-xl font-heading tracking-tight uppercase text-foreground">
                            <span className="font-ion normal-case">Ion</span>
                            <span className="font-zero">ZERO</span>
                        </span>
                    </Link>
                    <p className="text-muted text-xs leading-relaxed max-w-xs uppercase tracking-wider mx-auto md:mx-0">
                        The ultimate standard for critical precision. Ultra-pure water for pharmaceutical, analytical, and industrial excellence.
                    </p>
                </div>

                {/* Navigation Section */}
                <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
                    <h4 className="text-foreground text-[10px] font-bold uppercase tracking-[0.4em] mb-2">
                        Navigation
                    </h4>
                    <div className="flex flex-col gap-3">
                        <Link href="/" className="text-muted hover:text-foreground text-[10px] font-bold uppercase tracking-[0.2em] transition-all">Home</Link>
                        <Link href="/products" className="text-muted hover:text-foreground text-[10px] font-bold uppercase tracking-[0.2em] transition-all">Products</Link>
                        <Link href="/about" className="text-muted hover:text-foreground text-[10px] font-bold uppercase tracking-[0.2em] transition-all">About</Link>
                        <Link href="/contact" className="text-muted hover:text-foreground text-[10px] font-bold uppercase tracking-[0.2em] transition-all">Contact</Link>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col items-center md:items-start gap-6 lg:col-span-2 text-center md:text-left w-full">
                    <h4 className="text-foreground text-[10px] font-bold uppercase tracking-[0.4em] mb-2">
                        Reach Purity
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                            <Mail className="w-4 h-4 text-muted shrink-0" />
                            <div className="flex flex-col gap-1">
                                <span className="text-[8px] font-bold text-muted uppercase tracking-widest">Email</span>
                                <a href="mailto:ionzero.off@gmail.com" className="text-xs font-bold text-foreground hover:text-muted transition-colors uppercase tracking-tight">ionzero.off@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                            <Phone className="w-4 h-4 text-muted shrink-0" />
                            <div className="flex flex-col gap-1">
                                <span className="text-[8px] font-bold text-muted uppercase tracking-widest">WhatsApp</span>
                                <a
                                    href="https://wa.me/919489810099?text=Hi%20IonZERO%20team%2C%20I%20would%20like%20to%20enquire%20about%20DI%2FDM%20water."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-bold text-foreground hover:text-muted transition-colors uppercase tracking-tight"
                                >
                                    +91 94898 10099
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:col-span-2">
                            <MapPin className="w-4 h-4 text-muted shrink-0" />
                            <div className="flex flex-col gap-1">
                                <span className="text-[8px] font-bold text-muted uppercase tracking-widest">Address</span>
                                <p className="text-xs font-bold text-foreground uppercase tracking-tight leading-relaxed">
                                    440/2A1F, Sirupuzhalpettai village,<br />
                                    Gummidipoondi, Tiruvallur - 601 201
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t-[var(--hairline)] border-border flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-muted text-[8px] font-bold uppercase tracking-[0.3em]">
                    © {new Date().getFullYear()} <span className="font-ion normal-case">Ion</span><span className="font-zero">ZERO</span> Ultra-Pure Grade DI/DM Water by MKT Aqua. Clear Purity.
                </p>
                <div className="flex gap-8">
                    <Link href="#" className="text-muted hover:text-foreground text-[8px] font-bold uppercase tracking-[0.3em] transition-all">Privacy Policy</Link>
                    <Link href="#" className="text-muted hover:text-foreground text-[8px] font-bold uppercase tracking-[0.3em] transition-all">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
