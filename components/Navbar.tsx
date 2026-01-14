'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-6 inset-x-0 max-w-2xl mx-auto z-50 px-4"
    >
      <div className="relative flex items-center justify-between px-6 py-3 rounded-full border border-white/10 bg-[#030303]/60 backdrop-blur-md shadow-2xl shadow-black/50">
        
        {/* 1. The Premium Logo (Tech Stack Style) */}
        <Link href="/" className="flex items-baseline gap-[2px] group cursor-pointer">
          <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            SUBSTRACE
          </span>
          <span className="text-[10px] font-medium tracking-[0.2em] text-zinc-500 uppercase -translate-y-[2px] group-hover:text-zinc-300 transition-colors">
            LABS
          </span>
        </Link>

        {/* 2. Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
          <Link href="#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="#capabilities" className="hover:text-white transition-colors">Capabilities</Link>
          <Link href="#process" className="hover:text-white transition-colors">Process</Link>
        </div>

        {/* 3. The "Book Call" Button */}
        <Link 
            href="https://calendly.com" 
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors"
        >
            Book Call
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
        </Link>

        {/* Mobile Menu Icon (Simple placeholder) */}
        <div className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
        </div>

      </div>
    </motion.nav>
  );
}

