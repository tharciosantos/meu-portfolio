'use client';

import { getCapabilities } from '@/data/capabilities';
import Section from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Pill } from '../ui/Pill';
import { useLanguage } from '@/app/hooks/useLanguage';

const Capabilities = () => {
  const { language, t } = useLanguage();
  const items = getCapabilities(language);

  return (
    <Section
      id="habilidades"
      spacing="editorial"
      surface="muted"
      className="border-b border-border-default"
    >
      <div className="mx-auto max-w-container">
        <SectionHeader index="03" title={t.capabilities.title} subtitle={t.capabilities.subtitle} />

        <div className="lg:pl-[96px]">
          <ul className="grid list-none grid-cols-1 divide-y divide-border-default rounded-card border border-border-default bg-surface-card shadow-card md:grid-cols-2 md:divide-y-0">
            {items.map((item, idx) => (
              <li
                key={item.id}
                className="flex min-w-0 flex-col justify-between gap-5 p-5 sm:p-6 md:odd:border-r md:odd:border-border-default md:[&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-border-default"
              >
                <div className="min-w-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-heading text-subsection text-text-primary">{item.title}</h3>
                    <span
                      aria-hidden="true"
                      className="font-mono text-metadata text-text-secondary"
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="mt-2 text-body text-text-secondary">{item.description}</p>

                  <ul
                    className="mt-4 flex flex-wrap gap-1.5"
                    aria-label={t.capabilities.ariaTech.replace('{title}', item.title)}
                  >
                    {item.technologies.map((technology) => (
                      <li key={technology} className="max-w-full">
                        <Pill>{technology}</Pill>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.usedIn.length > 0 && (
                  <p className="border-t border-border-default pt-3 font-mono text-metadata text-text-secondary">
                    <span className="text-text-primary">{t.capabilities.projectsLabel}</span>{' '}
                    {item.usedIn.join(' · ')}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Capabilities;
