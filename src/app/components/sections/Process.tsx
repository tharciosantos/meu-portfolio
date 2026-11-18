'use client';

import Section from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '@/app/hooks/useLanguage';

const Process = () => {
  const { t } = useLanguage();
  const steps = t.process.steps;

  return (
    <Section
      id="processo"
      spacing="editorial"
      surface="default"
      className="border-b border-border-default"
    >
      <div className="mx-auto max-w-container">
        <SectionHeader index="02" title={t.process.title} subtitle={t.process.subtitle} />

        <div className="lg:pl-[96px]">
          <ol className="grid list-none grid-cols-1 divide-y divide-border-default rounded-card border border-border-default bg-surface-card shadow-card sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {steps.map((item, idx) => {
              const num = `0${idx + 1}`;
              return (
                <li
                  key={item.step}
                  className="flex flex-col justify-between gap-4 p-6 sm:odd:border-r sm:odd:border-border-default sm:[&:nth-child(-n+2)]:border-b sm:[&:nth-child(-n+2)]:border-border-default lg:odd:border-r-0 lg:[&:nth-child(-n+2)]:border-b-0"
                >
                  <div>
                    <span className="font-mono text-metadata text-text-secondary">{num}</span>
                    <h3 className="mt-3 font-heading text-subsection text-text-primary">
                      {item.step}
                    </h3>
                    <p className="mt-2 text-body text-text-secondary">{item.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
};

export default Process;
