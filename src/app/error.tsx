'use client';

import { useEffect } from 'react';
import { Button } from './components/ui/Button';
import { useLanguage } from './hooks/useLanguage';

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
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <p className="text-sm font-medium text-accent dark:text-accent-light">{t.error.eyebrow}</p>
      <h1 className="text-4xl font-bold text-primary-text dark:text-light-text">{t.error.title}</h1>
      <p className="max-w-md text-center text-secondary-text dark:text-dark-text">
        {t.error.description}
      </p>
      <Button onClick={reset} variant="primary" size="lg">
        {t.error.retry}
      </Button>
    </div>
  );
}
