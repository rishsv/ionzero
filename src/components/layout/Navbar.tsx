"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { resolvedTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-8 py-6",
                isScrolled ? "bg-background/80 backdrop-blur-2xl border-b-[var(--hairline)] border-border/50 py-4" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center group">
                    <div className="relative w-8 h-8 transition-transform group-hover:scale-110 mr-4">
                        {mounted && (
                            <Image
                                src={resolvedTheme === "dark" ? "/logo-black.png" : "/logowhite.png"}
                                alt="ionzero logo"
                                fill
                                className={cn("object-contain transition-all duration-300")}
                            />
                        )}
                    </div>
                    <span className="text-xl font-heading tracking-tight uppercase text-foreground mt-1">
                        <span className="font-ion normal-case">Ion</span>
                        <span className="font-zero">ZERO</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-bold text-muted hover:text-foreground transition-all tracking-[0.3em] uppercase"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 pl-4 border-l border-border">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 text-muted hover:text-foreground transition-colors"
                            >
                                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        )}
                        <a
                            href="https://forms.gle/gDSFKW5YGvnSf8Ea8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-foreground text-background text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-muted transition-all rounded-none"
                        >
                            Get Purity
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 glass border-b dark:border-0 p-6 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
