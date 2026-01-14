import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { ReactLenis } from "lenis/react";
import FluidNavbar from "@/components/FluidNavbar";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SheryLoader from "@/components/SheryLoader";
import "./globals.css";

// Load Syne font (wide, heavy typography)
const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Substrace Labs | Digital Engineering",
  description: "We build high-performance infrastructure for ambitious brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${syne.variable} bg-[#F3F3F3] text-[#111] antialiased selection:bg-[#111] selection:text-[#F3F3F3]`}>
          
          {/* 1. Animation Engine (Shery.js) */}
          <SheryLoader />

          {/* 2. Global UI Elements */}
          <Preloader />
          <CustomCursor />
          <FluidNavbar />
          
          {/* 3. Page Content */}
          {children}
          
        </body>
      </ReactLenis>
    </html>
  );
}

