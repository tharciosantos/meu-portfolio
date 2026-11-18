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
      className="inline-flex h-11 items-center rounded-control border border-border-default bg-btn-outline p-1"
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
              'inline-flex h-8 min-w-8 cursor-pointer items-center justify-center rounded-[4px] px-2 font-mono text-metadata font-medium transition-colors duration-150',
              isActive
                ? 'bg-accent-subtle text-accent-on-subtle'
                : 'text-text-secondary hover:text-text-primary'
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
