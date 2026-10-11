'use client';

import { useSyncExternalStore } from 'react';
import { useLanguage } from '@/app/hooks/useLanguage';
import { cn } from '@/lib/utils';
import type { Language } from '@/data/i18n';

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const options: { value: Language; label: string }[] = [
  { value: 'pt', label: 'PT' },
  { value: 'en', label: 'EN' },
];

export const LanguageSwitcher = () => {
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const { language, setLanguage } = useLanguage();

  if (!mounted) {
    return null;
  }

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className="inline-flex items-center rounded-md border border-border-light/70 bg-light-surface p-0.5 dark:border-border-dark/70 dark:bg-dark-surface"
    >
      {options.map((option) => {
        const isActive = language === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value)}
            aria-pressed={isActive}
            className={cn(
              'rounded px-2 py-1 font-mono text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-light',
              isActive
                ? 'bg-accent text-white dark:bg-accent-light dark:text-dark-bg'
                : 'text-secondary-text hover:text-primary-text dark:text-dark-text dark:hover:text-light-text'
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
