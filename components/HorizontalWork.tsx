'use client';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HorizontalWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw", // Move left by 3 screen widths (since we have 4 items)
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={triggerRef} className="overflow-hidden bg-[#111] text-[#F3F3F3]">
      <div ref={sectionRef} className="h-screen w-[400vw] flex flex-row relative">
        
        {/* Card 1 - Apex Roofing Systems */}
        <div className="h-screen w-screen flex flex-col justify-center px-12 border-r border-white/10 relative group">
           <video 
             src="/project1.mp4" 
             autoPlay 
             loop 
             muted 
             playsInline
             className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-80"
           />
           <div className="relative z-10 pointer-events-none">
             <h3 className="font-[family-name:var(--font-syne)] text-[8vw] font-bold uppercase leading-none">Apex</h3>
             <p className="text-xl mt-4 font-mono">Roofing Systems</p>
           </div>
        </div>

        {/* Card 2 - FlowState CRM */}
        <div className="h-screen w-screen flex flex-col justify-center px-12 border-r border-white/10 relative group">
           <video 
             src="/project2.mp4" 
             autoPlay 
             loop 
             muted 
             playsInline
             className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-80"
           />
           <div className="relative z-10 pointer-events-none">
             <h3 className="font-[family-name:var(--font-syne)] text-[8vw] font-bold uppercase leading-none">Flow</h3>
             <p className="text-xl mt-4 font-mono">SaaS CRM Dashboard</p>
           </div>
        </div>

        {/* Card 3 - Lumina Dental Studio */}
        <div className="h-screen w-screen flex flex-col justify-center px-12 border-r border-white/10 relative group">
           <video 
             src="/project3.mp4" 
             autoPlay 
             loop 
             muted 
             playsInline
             className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-80"
           />
           <div className="relative z-10 pointer-events-none">
             <h3 className="font-[family-name:var(--font-syne)] text-[8vw] font-bold uppercase leading-none">Lumina</h3>
             <p className="text-xl mt-4 font-mono">Dental Studio</p>
           </div>
        </div>

        {/* Card 4 - Next.js Architecture */}
        <div className="h-screen w-screen flex flex-col justify-center px-12 relative group">
           <video 
             src="/project4.mp4" 
             autoPlay 
             loop 
             muted 
             playsInline
             className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-80"
           />
           <div className="relative z-10 pointer-events-none">
             <h3 className="font-[family-name:var(--font-syne)] text-[8vw] font-bold uppercase leading-none">Next.js</h3>
             <p className="text-xl mt-4 font-mono">Architecture</p>
           </div>
        </div>

      </div>
    </section>
  );
}
