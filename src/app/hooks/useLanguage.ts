'use client';

import { useContext } from 'react';
import { LanguageContext } from '@/app/components/LanguageProvider';

export function useLanguage() {
  return useContext(LanguageContext);
}
