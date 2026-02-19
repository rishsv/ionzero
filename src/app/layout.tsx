import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Outfit, Montserrat, League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LandingLoader from "@/components/ui/LandingLoader";
import ThemeFavicon from "@/components/ui/ThemeFavicon";
import SetharuthalWater from "@/components/ui/SetharuthalWater";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-ion",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-zero",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "IonZERO by MKT Aqua | Ultra-Pure Grade DI/DM Water",
  description: "The Ultimate Standard for Critical Precision. Ultra-pure deionized and demineralized water by MKT Aqua for pharmaceutical, analytical, and industrial excellence.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-black.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo-black.png",
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} ${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${leagueSpartan.variable} font-body antialiased selection:bg-white selection:text-black dark:selection:bg-white dark:selection:text-black tracking-tight`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SetharuthalWater />
          <ThemeFavicon />
          <LandingLoader />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
