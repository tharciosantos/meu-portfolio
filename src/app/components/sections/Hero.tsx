'use client';

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
      surface="default"
      className="flex min-h-0 flex-col border-b border-border-default lg:min-h-[calc(100svh-var(--navbar-height))]"
    >
      <div className="mx-auto flex w-full max-w-container flex-1 flex-col justify-between gap-10">
        <div className="my-auto grid grid-cols-1 gap-4 lg:grid-cols-[72px_1fr] lg:gap-6">
          <span
            aria-hidden="true"
            className="hidden font-mono text-metadata text-text-secondary lg:block lg:pt-1.5"
          >
            [00]
          </span>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-metadata">
              <span className="inline-flex items-center gap-2 text-text-primary">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{t.hero.eyebrowStatus}</span>
              </span>
              <span aria-hidden="true" className="text-text-secondary">
                ·
              </span>
              <span className="text-text-secondary">{t.hero.eyebrowLocation}</span>
            </div>

            <h1 className="mt-5 max-w-prose-wide font-heading text-hero text-text-primary [text-wrap:balance]">
              {t.hero.headline}
            </h1>

            <p className="mt-4 max-w-prose-wide text-body-lg text-text-secondary">
              {t.hero.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projetos"
                className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'group')}
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
              >
                <DocumentIcon className="h-4 w-4" />
                <span>{t.hero.ctaResume}</span>
              </a>

              <div className="flex items-center gap-2 sm:ml-2 sm:border-l sm:border-border-default sm:pl-4">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.hero.ariaGithub}
                  className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.hero.ariaLinkedin}
                  className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-1 gap-6 border-t border-border-default pt-6 sm:grid-cols-3 lg:ml-[96px]">
          {t.hero.metrics.map((metric) => (
            <div key={metric.sr} className="border-l border-border-default pl-4">
              <dt className="sr-only">{metric.sr}</dt>
              <dd>
                <Metric value={metric.value} label={metric.label} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
};

export default Hero;
