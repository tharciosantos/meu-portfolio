'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from './ui/Icons';
import { useLanguage } from '@/app/hooks/useLanguage';

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export const ThemeSwitcher = () => {
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = resolvedTheme === 'dark';

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-control border border-border-default bg-btn-outline text-text-secondary transition-colors duration-150 hover:border-border-hover hover:bg-btn-outline-hover hover:text-text-primary active:bg-btn-outline-active"
      aria-label={t.theme.toggle}
      title={isDark ? t.theme.light : t.theme.dark}
    >
      {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  );
};
