'use client';

import { useEffect, useRef } from 'react';

export function ReadingProgressBar() {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;

        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${progress})`;
        }

        frameRef.current = null;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-[3px] w-full bg-transparent" aria-hidden="true">
      <div
        ref={progressRef}
        className="h-full origin-left bg-accent transition-[transform] duration-150 ease-out dark:bg-accent-light"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
