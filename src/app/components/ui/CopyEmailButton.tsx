'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { EMAIL } from '@/data/constants';
import { CheckIcon, CopyIcon } from './Icons';
import { useLanguage } from '@/app/hooks/useLanguage';

export const CopyEmailButton = () => {
  const { t } = useLanguage();
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
      type="button"
      onClick={handleCopyEmail}
      aria-label={copied ? t.contact.copyEmailCopied : t.contact.copyEmail}
      variant="outline"
      size="sm"
      className={cn(
        'gap-1.5',
        copied &&
          'border-accent-border bg-accent-subtle text-accent-on-subtle hover:border-accent-border hover:bg-accent-subtle'
      )}
    >
      {copied ? (
        <>
          <CheckIcon className="h-3.5 w-3.5" />
          {t.contact.copied}
        </>
      ) : (
        <>
          <CopyIcon className="h-3.5 w-3.5" />
          {t.contact.copy}
        </>
      )}
    </Button>
  );
};
