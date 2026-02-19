"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    size: number;
}

interface Drop {
    x: number;
    y: number;
    vy: number;
    active: boolean;
}

export default function SetharuthalWater() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let drops: Drop[] = [];
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", resize);
        resize();

        const createSplash = (x: number, y: number) => {
            const color = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.3)";
            for (let i = 0; i < 15; i++) {
                particles.push({
                    x,
                    y,
                    vx: (Math.random() - 0.5) * 12, // Wider spread
                    vy: (Math.random() - 1) * 10,  // Higher bounce
                    life: 1.0,
                    size: Math.random() * 1.2 + 0.3, // Smaller particles
                });
            }
        };

        const spawnDrop = () => {
            drops.push({
                x: Math.random() * width,
                y: -20,
                vy: 6 + Math.random() * 3, // Slower, more hypnotic
                active: true,
            });
        };

        let lastSpawn = 0;

        const animate = (time: number) => {
            ctx.clearRect(0, 0, width, height);

            // Spawn drops every interval
            if (time - lastSpawn > 800) {
                spawnDrop();
                lastSpawn = time;
            }

            const color = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.1)";
            const splashColor = resolvedTheme === "dark" ? "rgba(255, 255, 255, " : "rgba(0, 0, 0, ";

            // Update and draw drops
            drops.forEach((drop, index) => {
                if (!drop.active) return;

                drop.y += drop.vy;

                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.lineWidth = 1;
                ctx.moveTo(drop.x, drop.y);
                ctx.lineTo(drop.x, drop.y + 15);
                ctx.stroke();

                // If hits "floor" (80% of screen height)
                if (drop.y > height * 0.85) {
                    drop.active = false;
                    createSplash(drop.x, height * 0.85);
                    setTimeout(() => {
                        drops.splice(index, 1);
                    }, 0);
                }
            });

            // Update and draw particles (splash)
            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.3; // Gravity
                p.life -= 0.02;

                if (p.life <= 0) {
                    particles.splice(index, 1);
                    return;
                }

                ctx.beginPath();
                ctx.fillStyle = `${splashColor}${p.life * 0.5})`;
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize);
        };
    }, [resolvedTheme]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[5]"
            style={{ opacity: 0.8 }}
        />
    );
}
