'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FluidNavbar() {
  return (
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

        {/* Navigation */}
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

        {/* Book Call Button */}
        <Link
          href="https://calendly.com"
          className="px-6 py-2 rounded-full bg-[#111] text-[#F3F3F3] font-[family-name:var(--font-syne)] text-sm font-bold hover:opacity-90 transition-opacity"
          data-magnet
        >
          Book Call
        </Link>
      </div>
    </motion.nav>
  );
}

