'use client';

import { useEffect, useState } from 'react';
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
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border-light bg-light-card text-secondary-text shadow-md transition-all duration-300
        hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5
        dark:border-border-dark dark:bg-dark-card dark:text-dark-text dark:hover:border-accent-light dark:hover:text-accent-light
        active:scale-95
        ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90 pointer-events-none'}`}
    >
      <ArrowUpIcon className="h-4 w-4" />
    </button>
  );
};

export default BackToTop;
