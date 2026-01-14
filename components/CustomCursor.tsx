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
      
      // Move dot instantly
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animateFollower = () => {
      // Smooth follow for the circle
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
      
      const element = target as HTMLElement;
      if (!element || typeof element.tagName !== 'string') return;
      
      const isInteractive = element.tagName === 'BUTTON' || 
                           element.tagName === 'A' || 
                           (element.closest && element.closest('button')) || 
                           (element.closest && element.closest('a')) ||
                           (element.closest && element.closest('[data-magnet]'));
      
      if (isInteractive && follower && cursor) {
        // Expand the circle, but KEEP the dot normal size
        follower.classList.add('scale-[2.5]'); // Make circle bigger
        follower.classList.add('border-[0.5px]'); // Make border thinner when big
        // We do NOT shrink the cursor (removed scale-50)
        // We do NOT fill the background (removed bg-white/20) so the dot stays black
      }
    };

    const handleMouseLeave = () => {
      if (follower && cursor) {
        follower.classList.remove('scale-[2.5]');
        follower.classList.remove('border-[0.5px]');
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
      {/* LOGIC: 
        We use WHITE with mix-blend-difference.
        - On Light Background (White) -> White - White = Black.
        - On Dark Background (Black) -> White - Black = White.
      */}

      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-200 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Follower circle */}
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference transition-all duration-300 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}