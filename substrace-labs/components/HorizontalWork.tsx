'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  title: string;
  description: string;
  videoSrc: string;
}

const projects: Project[] = [
  {
    title: 'Apex Roofing Systems',
    description: 'Conversion-focused landing page that increased leads by 140%',
    videoSrc: '/project1.mp4',
  },
  {
    title: 'FlowState CRM',
    description: 'Dark-mode dashboard for a high-growth SaaS startup',
    videoSrc: '/project2.mp4',
  },
  {
    title: 'Lumina Dental Studio',
    description: 'Premium aesthetic website for a luxury cosmetic dentist',
    videoSrc: '/project3.mp4',
  },
  {
    title: 'Next.js Architecture',
    description: 'We use the latest React Server Components for speed',
    videoSrc: '/project4.mp4',
  },
];

export default function HorizontalWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const container = containerRef.current;
    const scroll = scrollRef.current;

    // Wait for layout to calculate properly
    const calculateScroll = () => {
      // Force a layout recalculation
      void container.offsetHeight;
      
      const scrollWidth = scroll.scrollWidth;
      const containerWidth = container.offsetWidth;
      const scrollDistance = Math.max(0, scrollWidth - containerWidth);

      if (scrollDistance <= 0) return;

      // Kill existing triggers for this container
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger === container) {
          trigger.kill();
        }
      });

      // Create single ScrollTrigger for both pinning and animation
      const st = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      gsap.to(scroll, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: st,
      });
    };

    // Also recalculate on window resize
    const handleResize = () => {
      calculateScroll();
    };
    
    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      setTimeout(calculateScroll, 100);
    });
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="work" className="relative w-full bg-[#F3F3F3]">
      {/* Section Title */}
      <div className="px-8 md:px-12 pt-20 pb-12">
        <h2 className="font-[family-name:var(--font-syne)] text-6xl md:text-8xl font-black text-[#111]">
          Featured Work
        </h2>
      </div>
      
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
        <div
          ref={scrollRef}
          className="flex items-center gap-4 px-8 md:px-12"
          style={{ width: 'max-content', height: '100%' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const viewCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    const viewCircle = viewCircleRef.current;
    if (!card || !video || !viewCircle) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      viewCircle.style.left = `${x}px`;
      viewCircle.style.top = `${y}px`;
      viewCircle.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      viewCircle.style.opacity = '0';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative group w-[32vw] h-[90vh] flex-shrink-0 flex items-center justify-center overflow-hidden rounded-2xl bg-[#111]"
    >
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={project.videoSrc} type="video/mp4" />
      </video>
      
      {/* Fallback gradient placeholder if video doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 opacity-50" />

      {/* VIEW circle that follows cursor */}
      <div
        ref={viewCircleRef}
        className="absolute pointer-events-none z-10 mix-blend-difference"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: '#F3F3F3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <span className="font-[family-name:var(--font-syne)] text-[#111] font-bold text-sm">
          VIEW
        </span>
      </div>

      {/* Project info overlay */}
      <div className="absolute bottom-8 left-8 z-20 text-white">
        <h3 className="font-[family-name:var(--font-syne)] text-4xl font-bold mb-2">
          {project.title}
        </h3>
        <p className="text-lg opacity-80">{project.description}</p>
      </div>
    </div>
  );
}

