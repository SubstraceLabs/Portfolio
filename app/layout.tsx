import type { Metadata } from "next";
import Script from "next/script";
import { Syne } from "next/font/google";
import FluidNavbar from "@/components/FluidNavbar";
import CustomCursor from "@/components/CustomCursor";
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
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} bg-[#F3F3F3] text-[#111] antialiased selection:bg-[#111] selection:text-[#F3F3F3] cursor-none`}>
        <Script src="https://cdn.jsdelivr.net/npm/sheryjs@1.0.0-alpha.9/dist/shery.min.js" strategy="lazyOnload" />
        <CustomCursor />
        <FluidNavbar />
        {children}
      </body>
    </html>
  );
}

