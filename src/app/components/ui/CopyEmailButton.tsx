'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { EMAIL } from '@/data/constants';
import { CheckIcon, CopyIcon } from './Icons';

export const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    },
    []
  );

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <Button
      onClick={handleCopyEmail}
      aria-label={copied ? 'E-mail copiado' : 'Copiar e-mail'}
      variant="outline"
      size="sm"
      className={cn(
        'h-8 px-3 text-xs gap-1.5 transition-all duration-300 ease-out',
        copied
          ? 'border-accent bg-accent-subtle text-accent hover:border-accent hover:bg-accent-subtle hover:text-accent dark:border-accent-light dark:bg-accent-subtle-dark dark:text-accent-light scale-105'
          : 'scale-100'
      )}
    >
      {copied ? (
        <>
          <CheckIcon className="h-3.5 w-3.5" />
          Copiado
        </>
      ) : (
        <>
          <CopyIcon className="h-3.5 w-3.5" />
          Copiar
        </>
      )}
    </Button>
  );
};
