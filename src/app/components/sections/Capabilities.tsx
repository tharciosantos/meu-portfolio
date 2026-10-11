'use client';

import type { ReactNode } from 'react';
import { getCapabilities } from '@/data/capabilities';
import Section from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { CodeIcon, DatabaseIcon, RocketIcon, CheckIcon } from '../ui/Icons';
import { TechIcon } from '../ui/TechIcons';
import { useLanguage } from '@/app/hooks/useLanguage';

const pillarIcons: Record<string, ReactNode> = {
  'frontend-ui': <CodeIcon className="h-4 w-4" />,
  'backend-seguranca': <RocketIcon className="h-4 w-4" />,
  'bancos-dados-infra': <DatabaseIcon className="h-4 w-4" />,
  'testes-versionamento': <CheckIcon className="h-4 w-4" />,
};

const Capabilities = () => {
  const { language, t } = useLanguage();
  const items = getCapabilities(language);

  return (
    <Section
      id="habilidades"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-container">
        <SectionHeader
          eyebrow={t.capabilities.eyebrow}
          title={t.capabilities.title}
          subtitle={t.capabilities.subtitle}
        />

        {/* Pilares Estruturados de Engenharia */}
        <ul className="grid list-none grid-cols-1 gap-4 pt-2 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col justify-between rounded-md border border-border-light/70 bg-light-card p-5 dark:border-border-dark/70 dark:bg-dark-card"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border-light bg-light-surface text-accent dark:border-border-dark dark:bg-dark-surface dark:text-accent-light"
                  >
                    {pillarIcons[item.id]}
                  </span>
                  <h3 className="font-heading text-sm font-semibold text-primary-text dark:text-light-text">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-2.5 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                  {item.description}
                </p>

                <div className="mt-3.5">
                  <ul
                    className="flex flex-wrap gap-1.5"
                    aria-label={t.capabilities.ariaTech.replace('{title}', item.title)}
                  >
                    {item.technologies.map((technology) => (
                      <li key={technology}>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-border-light/60 bg-light-surface/70 px-2 py-0.5 font-mono text-[10px] text-secondary-text dark:border-border-dark/60 dark:bg-dark-surface/70 dark:text-dark-text">
                          <TechIcon name={technology} className="h-3 w-3 opacity-80 shrink-0" />
                          {technology}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {item.usedIn.length > 0 && (
                <p className="mt-5 border-t border-border-light/40 pt-2.5 font-mono text-[10px] text-primary-text dark:border-border-dark/40 dark:text-light-text">
                  <span className="font-semibold text-primary-text/90 dark:text-light-text/90">
                    {t.capabilities.projectsLabel}
                  </span>{' '}
                  {item.usedIn.join(' · ')}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Capabilities;
