'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      
      requestAnimationFrame(animateFollower);
    };

    // Magnet effect for buttons and links
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target;
      if (!target || typeof target !== 'object') return;
      
      // Check if target is an HTMLElement
      const element = target as HTMLElement;
      if (!element || typeof element.tagName !== 'string') return;
      
      const isInteractive = element.tagName === 'BUTTON' || 
                           element.tagName === 'A' || 
                           (element.closest && element.closest('button')) || 
                           (element.closest && element.closest('a')) ||
                           (element.closest && element.closest('[data-magnet]'));
      
      if (isInteractive && follower && cursor) {
        follower.classList.add('scale-150', 'bg-[#111]/20');
        cursor.classList.add('scale-50');
      }
    };

    const handleMouseLeave = () => {
      if (follower && cursor) {
        follower.classList.remove('scale-150', 'bg-[#111]/20');
        cursor.classList.remove('scale-50');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    
    animateFollower();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-[#111] rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-300 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Follower circle */}
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border-2 border-[#111] rounded-full pointer-events-none z-[9998] mix-blend-difference transition-all duration-300 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}

