'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FluidHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !textRef.current || !videoRef.current || !maskRef.current) return;

    const text = textRef.current;
    const video = videoRef.current;
    const mask = maskRef.current;

    // Skew effect on fast scroll
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Apply skew based on scroll velocity
      const skew = Math.min(Math.abs(scrollVelocity) * 0.1, 5);
      gsap.to(text, {
        skewY: scrollVelocity > 0 ? skew : -skew,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Reset skew
      gsap.to(text, {
        skewY: 0,
        duration: 0.5,
        delay: 0.1,
        ease: 'power2.out',
      });
    };

    // Video mask animation on scroll - faster reveal
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: '+=400', // Shorter scroll distance for faster reveal
      scrub: 0.5, // Smoother but faster
      onUpdate: (self) => {
        const progress = self.progress;
        // More aggressive scaling and opacity for quicker appearance
        const scale = 1 + progress * 1.5;
        const opacity = Math.min(progress * 1.5, 1); // Faster opacity increase

        gsap.to(mask, {
          clipPath: `circle(${Math.max(0, 100 - progress * 150)}% at center)`, // Faster mask reveal
          duration: 0.05,
        });

        gsap.to(video, {
          scale: scale,
          opacity: opacity,
          duration: 0.05,
        });
      },
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#F3F3F3]"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0"
        onError={(e) => {
          // Hide video if it fails to load
          if (videoRef.current) {
            videoRef.current.style.display = 'none';
          }
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback gradient if video doesn't exist */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#111] opacity-20" />

      {/* Text mask container */}
      <div
        ref={maskRef}
        className="relative z-10 flex flex-col items-center justify-center"
        style={{
          clipPath: 'circle(100% at center)',
        }}
      >
        <div ref={textRef} className="text-center">
          <h1 className="font-[family-name:var(--font-syne)] text-[12vw] md:text-[15vw] font-extrabold leading-[0.9] tracking-tight text-[#111]">
            <div className="block">WE ENGINEER</div>
            <div className="block">FEELINGS</div>
          </h1>
        </div>
      </div>

      {/* Large SUBSTRACE text behind (for video mask effect) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="font-[family-name:var(--font-syne)] text-[20vw] md:text-[25vw] font-black text-[#111]/5 leading-none">
          SUBSTRACE
        </h2>
      </div>
    </section>
  );
}

