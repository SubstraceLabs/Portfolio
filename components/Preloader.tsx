'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep the preloader visible for 2 seconds (simulating asset loading)
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0); // Reset scroll to top
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#111] flex items-center justify-center"
        >
          <div className="flex items-baseline gap-2 overflow-hidden">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-[family-name:var(--font-syne)] text-4xl md:text-6xl font-bold text-[#F3F3F3]"
            >
              SUBSTRACE
            </motion.h1>
            <motion.span 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-mono text-sm text-[#F3F3F3]/60 tracking-widest uppercase"
            >
              LABS
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

