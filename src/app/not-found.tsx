'use client';

import Link from 'next/link';
import { buttonVariants } from './components/ui/Button';
import { ArrowRightIcon } from './components/ui/Icons';
import Section from './components/ui/Section';
import { useLanguage } from '@/app/hooks/useLanguage';
import { cn } from '@/lib/utils';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <Section id="not-found" spacing="editorial" surface="default">
      <div className="mx-auto flex min-h-[60vh] max-w-container flex-col justify-center">
        <div className="max-w-prose-wide">
          <p
            aria-hidden="true"
            className="font-mono text-metadata uppercase tracking-wider text-text-secondary"
          >
            404
          </p>
          <h1 className="mt-3 font-heading text-hero text-text-primary">{t.notFound.title}</h1>
          <p className="mt-3 text-body-lg text-text-secondary">{t.notFound.description}</p>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'group mt-6')}
          >
            <span>{t.notFound.backHome}</span>
            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </Section>
  );
}
