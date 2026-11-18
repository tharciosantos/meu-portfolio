'use client';

import { useEffect } from 'react';
import { Button } from './components/ui/Button';
import { ArrowRightIcon } from './components/ui/Icons';
import Section from './components/ui/Section';
import { useLanguage } from '@/app/hooks/useLanguage';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  const { t } = useLanguage();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section spacing="editorial" surface="default">
      <div className="mx-auto flex min-h-[60vh] max-w-container flex-col justify-center">
        <div className="max-w-prose-wide">
          <p className="font-mono text-metadata uppercase tracking-wider text-text-secondary">
            {t.error.eyebrow}
          </p>
          <h1 className="mt-3 font-heading text-hero text-text-primary">{t.error.title}</h1>
          <p className="mt-3 text-body-lg text-text-secondary">{t.error.description}</p>
          <Button onClick={reset} variant="primary" size="lg" className="group mt-6">
            <span>{t.error.retry}</span>
            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </Section>
  );
}
