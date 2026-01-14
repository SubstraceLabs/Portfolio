'use client';
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Declare Shery types to avoid TypeScript errors
declare global {
  interface Window {
    Shery: any;
  }
}

export default function FluidHero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for Shery to load from the script tag in layout.tsx
    const interval = setInterval(() => {
      if (window.Shery) {
        clearInterval(interval);
        
        // 1. The "Liquid" Text Effect
        window.Shery.textAnimate(".fluid-text", {
          style: 1,
          y: 10,
          delay: 0.1,
          duration: 2,
          ease: "cubic-bezier(0.23, 1, 0.320, 1)",
          multiplier: 0.1,
        });

        // 2. The Magnetic Button
        window.Shery.makeMagnet(".magnet-target", {
          ease: "cubic-bezier(0.23, 1, 0.320, 1)",
          duration: 1,
        });
      }
    }, 100);

    // Hero video scroll animation - grows from text on scroll (appears earlier)
    if (heroRef.current && videoRef.current && textRef.current) {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: '+=300', // Reduced from 600 to 300 for faster appearance
        scrub: 0.3, // Smoother scrub for faster response
        onUpdate: (self) => {
          const progress = self.progress;
          // More aggressive scaling and opacity for quicker appearance
          const scale = 1 + progress * 1.5;
          const opacity = Math.min(progress * 2, 1); // Faster opacity increase

          gsap.to(videoRef.current, {
            scale: scale,
            opacity: opacity,
            duration: 0.05,
          });

          // Fade out text as video appears (faster)
          gsap.to(textRef.current, {
            opacity: 1 - progress * 1.2, // Faster text fade
            duration: 0.05,
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={heroRef} className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#F3F3F3] text-[#111]">
      {/* Hero Video - grows from text on scroll */}
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0 scale-100"
      />

      {/* Text overlay with liquid animation */}
      <div ref={textRef} className="z-10 text-center mix-blend-difference text-white">
        <h1 className="fluid-text font-[family-name:var(--font-syne)] text-[12vw] leading-[0.8] font-bold uppercase tracking-tighter">
          We Engineer
        </h1>
        <h1 className="fluid-text font-[family-name:var(--font-syne)] text-[12vw] leading-[0.8] font-bold uppercase tracking-tighter ml-24 italic text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: "2px #111" }}>
          Feelings
        </h1>
      </div>

      <div className="absolute bottom-12 right-12 mix-blend-difference z-20">
        <div className="magnet-target h-32 w-32 rounded-full border border-[#111] flex items-center justify-center cursor-pointer group hover:bg-[#111] transition-colors duration-500">
          <ArrowDown className="w-8 h-8 text-[#111] group-hover:text-white transition-colors" />
        </div>
      </div>
    </section>
  );
}
