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
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-container">
        <SectionHeader
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 pt-2">
          {steps.map((item, idx) => {
            const num = `0${idx + 1}`;
            return (
              <li key={item.step} className="relative flex flex-col justify-between group">
                {/* Linha conectora horizontal no desktop */}
                {idx < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-4 left-8 right-[-1.5rem] h-px bg-border-light dark:bg-border-dark z-0"
                  />
                )}

                <div>
                  {/* Nó Numérico no Trilho */}
                  <div className="flex items-center">
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-accent/40 bg-light-bg dark:bg-dark-bg font-mono text-xs font-bold text-accent dark:text-accent-light shadow-xs group-hover:border-accent group-hover:scale-105 transition-all">
                      {num}
                    </span>
                  </div>

                  {/* Conteúdo da Etapa com Fase como Eyebrow abaixo da linha */}
                  <div className="mt-4">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                      {t.process.fase.replace('{num}', num)}
                    </p>
                    <h3 className="mt-1 font-heading text-base sm:text-lg font-semibold text-primary-text dark:text-light-text group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                      {item.step}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
};

export default Process;
