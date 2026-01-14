'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function FluidNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed top-8 inset-x-0 max-w-7xl mx-auto z-50 px-8"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group" data-magnet>
            <span className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#111] group-hover:opacity-70 transition-opacity">
              SUBSTRACE
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="#work" className="font-[family-name:var(--font-syne)] text-sm font-medium text-[#111] hover:opacity-70 transition-opacity" data-magnet>
              Work
            </Link>
            <Link href="#capabilities" className="font-[family-name:var(--font-syne)] text-sm font-medium text-[#111] hover:opacity-70 transition-opacity" data-magnet>
              Capabilities
            </Link>
            <Link href="#process" className="font-[family-name:var(--font-syne)] text-sm font-medium text-[#111] hover:opacity-70 transition-opacity" data-magnet>
              Process
            </Link>
          </div>

          {/* Book Call Button - Desktop */}
          <Link
            href="https://calendly.com"
            className="hidden md:block px-6 py-2 rounded-full bg-[#111] text-[#F3F3F3] font-[family-name:var(--font-syne)] text-sm font-bold hover:opacity-90 transition-opacity"
            data-magnet
          >
            Book Call
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden z-50 p-2 text-[#111]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#111] z-40 flex flex-col items-center justify-center gap-8"
          >
            {/* Mobile Links */}
            {['Work', 'Capabilities', 'Process'].map((link) => (
              <Link 
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white text-5xl font-[family-name:var(--font-syne)] font-bold uppercase hover:opacity-70 transition-opacity"
              >
                {link}
              </Link>
            ))}
            <Link
              href="https://calendly.com"
              onClick={() => setIsOpen(false)}
              className="mt-8 px-8 py-3 rounded-full bg-[#F3F3F3] text-[#111] font-[family-name:var(--font-syne)] text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Book Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

