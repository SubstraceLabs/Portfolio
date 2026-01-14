'use client';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Spotlight } from "./ui/Spotlight";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#030303] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. The Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. The Content with Spotlight */}
      <Spotlight className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* The "Badge" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
          <span className="text-sm text-zinc-400 font-medium">Accepting New Projects for Q1</span>
        </motion.div>

        {/* The Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 font-[family-name:var(--font-space-grotesk)]"
        >
          Engineering the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Digital Foundation
          </span>
        </motion.h1>

        {/* The Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
        >
          Substrace Labs builds high-performance infrastructure for ambitious brands.
          We don&apos;t just design websites; we engineer revenue systems.
        </motion.p>

        {/* The Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group relative px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2">
            View Our Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-all">
            Book a Strategy Call
          </button>
        </motion.div>

      </Spotlight>
      
      {/* 3. The "Tech Stack" Fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none"></div>
    </section>
  );
}

