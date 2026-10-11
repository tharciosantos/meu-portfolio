'use client';

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from 'react';
import type { ReactNode } from 'react';
import { DEFAULT_LANGUAGE, getDictionary } from '@/data/i18n';
import type { Dictionary, Language } from '@/data/i18n';

export type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Dictionary;
};

const STORAGE_KEY = 'tharcio-language';

// ─── Store externo para idioma persistido (evita setState em effect) ──────
let currentLanguage: Language = DEFAULT_LANGUAGE;
let initialized = false;
const listeners = new Set<() => void>();

function readStoredLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'pt';
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function ensureInitialized() {
  if (!initialized && typeof window !== 'undefined') {
    currentLanguage = readStoredLanguage();
    initialized = true;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): Language {
  ensureInitialized();
  return currentLanguage;
}

function getServerSnapshot(): Language {
  return DEFAULT_LANGUAGE;
}

function persistLanguage(next: Language) {
  currentLanguage = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // armazenamento indisponível — segue sem persistência
  }
  listeners.forEach((listener) => listener());
}

// ─── Contexto ──────────────────────────────────────────────────────────────

export const LanguageContext = createContext<LanguageContextValue>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  t: getDictionary(DEFAULT_LANGUAGE),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = useMemo(() => getDictionary(language), [language]);

  const setLanguage = useCallback((next: Language) => {
    persistLanguage(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
