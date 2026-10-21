'use client';

import Image from 'next/image';
import { buttonVariants } from '../ui/Button';
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '@/data/constants';
import { cn } from '@/lib/utils';
import Section from '../ui/Section';
import { Metric } from '../ui/Metric';
import { ArrowRightIcon, DocumentIcon, GithubIcon, LinkedinIcon } from '../ui/Icons';
import { useLanguage } from '@/app/hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <Section
      id="home"
      spacing="hero"
      className="flex flex-col justify-between border-b border-border-light dark:border-border-dark lg:min-h-[calc(100vh-3.5rem)]"
    >
      <div className="mx-auto flex w-full max-w-container flex-1 flex-col justify-between">
        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-14">
          {/* Coluna de conteúdo */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-metadata uppercase tracking-wider">
              <span className="inline-flex items-center gap-2 text-accent dark:text-accent-light">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" aria-hidden="true" />
                <span>{t.hero.eyebrowStatus}</span>
              </span>
              <span
                className="hidden h-3 w-px bg-border-light sm:block dark:bg-border-dark"
                aria-hidden="true"
              />
              <span className="text-secondary-text dark:text-dark-text">
                {t.hero.eyebrowLocation}
              </span>
            </div>

            <h1 className="mt-6 font-heading text-hero text-primary-text [text-wrap:balance] dark:text-light-text">
              {t.hero.headline}
            </h1>

            <p className="mt-5 max-w-prose-wide text-body-lg text-secondary-text dark:text-dark-text">
              {t.hero.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projetos"
                className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'group')}
              >
                {t.hero.ctaProjects}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'group')}
              >
                <DocumentIcon className="h-4 w-4" />
                {t.hero.ctaResume}
              </a>

              <span
                className="hidden h-6 w-px bg-border-light sm:block dark:bg-border-dark"
                aria-hidden="true"
              />

              <div className="hidden items-center gap-1 sm:flex">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.hero.ariaGithub}
                  className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.hero.ariaLinkedin}
                  className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Prova visual: sistemas reais acima da dobra */}
          <div className="relative mx-auto w-full max-w-[560px] pb-0 sm:pb-12 lg:mx-0 lg:max-w-none">
            <p className="mb-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-secondary-text dark:text-dark-text">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-light"
                aria-hidden="true"
              />
              {t.hero.showcasePrimaryLabel}
            </p>

            <figure>
              <div className="overflow-hidden rounded-md border border-border-light bg-light-surface shadow-[0_30px_70px_-35px_rgba(28,25,23,0.4)] dark:border-border-dark dark:bg-dark-surface dark:shadow-[0_30px_70px_-35px_rgba(0,0,0,0.85)]">
                <Image
                  src="/images/manutflow/preview-landing.webp"
                  alt={t.hero.showcasePrimaryAlt}
                  width={1920}
                  height={909}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-auto w-full"
                  preload
                />
              </div>
            </figure>

            <figure className="absolute bottom-0 left-0 hidden w-[46%] max-w-[260px] sm:block">
              <div className="overflow-hidden rounded-md border border-border-light bg-light-card p-1 shadow-xl dark:border-border-dark dark:bg-dark-card">
                <Image
                  src="/images/helpflow/dashboard-agent.webp"
                  alt={t.hero.showcaseSecondaryAlt}
                  width={1920}
                  height={908}
                  sizes="260px"
                  className="h-auto w-full rounded-sm"
                />
              </div>
              <figcaption className="mt-1.5 inline-flex items-center gap-1.5 px-1 font-mono text-[10px] text-secondary-text dark:text-dark-text">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-light"
                  aria-hidden="true"
                />
                {t.hero.showcaseSecondaryLabel}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Métricas rápidas ancoradas no rodapé do Hero */}
        <div className="w-full pt-4 pb-2">
          <dl className="grid grid-cols-1 gap-4 border-t border-border-light pt-6 dark:border-border-dark sm:grid-cols-3">
            {t.hero.metrics.map((metric) => (
              <div key={metric.sr}>
                <dt className="sr-only">{metric.sr}</dt>
                <dd>
                  <Metric value={metric.value} label={metric.label} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
