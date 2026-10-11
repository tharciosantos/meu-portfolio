'use client';

import { buttonVariants } from '../ui/Button';
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL, WHATSAPP_URL } from '@/data/constants';
import { cn } from '@/lib/utils';
import Section from '../ui/Section';
import { Metric } from '../ui/Metric';
import { ArrowRightIcon, DocumentIcon, GithubIcon, LinkedinIcon, WhatsappIcon } from '../ui/Icons';
import { useLanguage } from '@/app/hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <Section
      id="home"
      spacing="hero"
      className="flex min-h-[calc(100vh-3.5rem)] flex-col justify-between border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto flex w-full max-w-container flex-1 flex-col justify-between">
        {/* Bloco Central Superior */}
        <div className="my-auto py-6 sm:py-8">
          {/* Eyebrow & Status */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-metadata uppercase tracking-wider text-accent dark:text-accent-light">
              <span
                className="h-2 w-2 rounded-full bg-accent dark:bg-accent-light"
                aria-hidden="true"
              />
              <span>{t.hero.eyebrowLocation}</span>
            </div>

            <span className="text-secondary-text dark:text-dark-text" aria-hidden="true">
              /
            </span>

            <div className="inline-flex items-center gap-2 text-metadata text-secondary-text dark:text-dark-text">
              <span
                className="h-2 w-2 rounded-full bg-accent dark:bg-accent-light"
                aria-hidden="true"
              />
              <span>{t.hero.eyebrowStatus}</span>
            </div>
          </div>

          {/* Headline Principal */}
          <h1 className="mt-6 max-w-3xl font-heading text-hero text-primary-text dark:text-light-text">
            {t.hero.headline}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-prose-wide text-body-lg text-secondary-text dark:text-dark-text">
            {t.hero.subtitle}
          </p>

          {/* Ações / CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
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

            <div className="flex items-center gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.ariaGithub}
                className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.ariaLinkedin}
                className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.ariaWhatsapp}
                className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
              >
                <WhatsappIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Métricas Rápidas Ancoradas no Rodapé do Hero */}
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
