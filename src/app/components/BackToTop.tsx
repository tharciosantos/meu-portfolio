'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpIcon } from './ui/Icons';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={cn(
        'fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-control border border-border-default bg-btn-outline text-text-secondary shadow-card transition-colors duration-150 hover:border-border-hover hover:bg-btn-outline-hover hover:text-text-primary active:bg-btn-outline-active sm:bottom-6 sm:right-6',
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
    >
      <ArrowUpIcon className="h-4 w-4" />
    </button>
  );
};

export default BackToTop;
