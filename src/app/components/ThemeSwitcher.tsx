'use client';

import { useSyncExternalStore, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from './ui/Icons';

// Detecta renderização no cliente sem setState em effect —
// evita mismatch de hidratação ao renderizar o tema apenas no browser.
const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export const ThemeSwitcher = () => {
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const [rotation, setRotation] = useState(0);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setRotation((prev) => prev + 180);
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-light/70 bg-light-surface text-secondary-text transition-all hover:border-accent hover:text-accent dark:border-border-dark/70 dark:bg-dark-surface dark:text-dark-text dark:hover:border-accent-light dark:hover:text-accent-light active:scale-95 cursor-pointer"
        aria-label="Alternar tema"
      >
        <span
          className="block transition-transform duration-300 ease-in-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
        </span>
      </button>
      <span
        className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-border-light bg-white px-2 py-1 text-xs font-medium text-secondary-text opacity-0 shadow-sm transition-all duration-200 group-hover:opacity-100 dark:border-border-dark dark:bg-dark-card dark:text-dark-text"
        aria-hidden="true"
      >
        {isDark ? 'Tema claro' : 'Tema escuro'}
      </span>
    </div>
  );
};
