"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeFavicon() {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const setIcons = (href: string) => {
            const rels = ["icon", "shortcut icon", "apple-touch-icon"];
            rels.forEach((rel) => {
                let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
                if (!link) {
                    link = document.createElement("link");
                    link.rel = rel;
                    document.head.appendChild(link);
                }
                link.href = href;
            });
        };

        const href = resolvedTheme === "dark" ? "/logo-black.png" : "/logowhite.png";
        setIcons(href);
    }, [resolvedTheme]);

    return null;
}
