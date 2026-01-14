'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function FooterTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tickerRef.current) return;

    const ticker = tickerRef.current;
    const content = ticker.textContent || '';
    
    // Duplicate content for seamless loop
    ticker.innerHTML = `${content} — ${content} — ${content} — ${content}`;

    gsap.to(ticker, {
      x: -ticker.scrollWidth / 2,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <footer className="relative w-full h-32 bg-[#111] text-[#F3F3F3] overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div
          ref={tickerRef}
          className="font-[family-name:var(--font-syne)] text-6xl md:text-8xl font-black whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          SUBSTRACE LABS
        </div>
      </div>
    </footer>
  );
}

