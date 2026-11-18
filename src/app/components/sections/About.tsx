'use client';

import Image from 'next/image';
import {
  getCompetenciasAplicadas,
  getExperiencias,
  type ExperienciaAnterior,
} from '@/data/experience';
import Section from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '@/app/hooks/useLanguage';
import { cn } from '@/lib/utils';

/**
 * Bloco de fatos objetivos (formação, idiomas).
 * Rótulo mono em caixa alta + pares termo/valor em `dl`, separados por divisores de 1px.
 */
function FactsGroup({
  label,
  items,
}: {
  label: string;
  items: { term: string; value: string; emphasis?: boolean }[];
}) {
  return (
    <div>
      <h4 className="font-mono text-metadata uppercase tracking-wider text-text-secondary">
        {label}
      </h4>
      <dl className="mt-2 divide-y divide-border-default border-t border-border-default">
        {items.map((item) => (
          <div key={item.term} className="grid grid-cols-[88px_1fr] items-baseline gap-x-3 py-1.5">
            <dt className="font-mono text-metadata text-text-secondary">{item.term}</dt>
            <dd
              className={cn(
                'min-w-0 text-sm leading-snug text-balance',
                item.emphasis ? 'text-text-primary' : 'text-text-secondary'
              )}
            >
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/**
 * Linha do tempo de experiência: período na coluna mono à esquerda,
 * cargo e resumo à direita. Sem caixas, apenas divisores.
 */
function ExperienceEntry({ item }: { item: ExperienciaAnterior }) {
  return (
    <article className="grid grid-cols-1 gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[minmax(132px,auto)_1fr] sm:gap-5">
      <span className="font-mono text-metadata text-text-secondary sm:pt-0.5">{item.period}</span>

      <div className="min-w-0">
        <h4 className="font-heading text-sm font-medium leading-snug text-balance text-text-primary">
          {item.role} · {item.org}
        </h4>
        <p className="mt-1.5 max-w-[60ch] text-sm leading-relaxed text-text-secondary">
          {item.summary}
        </p>
      </div>
    </article>
  );
}

const About = () => {
  const { language, t } = useLanguage();
  const experiencias = getExperiencias(language);
  const competencias = getCompetenciasAplicadas(language);

  return (
    <Section
      id="sobre-mim"
      spacing="editorial"
      surface="default"
      className="border-b border-border-default"
    >
      <div className="mx-auto max-w-container">
        <SectionHeader index="04" title={t.about.title} subtitle={t.about.subtitle} />

        {/* Composição:
            - Mobile/Tablet (<1024px): tudo empilhado na ordem foto > identificação > fatos > narrativa > experiências > competências
            - Desktop (>=1024px): coluna esquerda fixa com foto, identificação e fatos; direita com a narrativa */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr] lg:items-start lg:gap-14 lg:pl-[96px]">
          <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-[280px_1fr] md:items-start md:gap-8 lg:grid-cols-1 lg:gap-8">
            <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-card border border-border-default bg-surface-subtle lg:max-w-none">
              <Image
                src="/images/profile.webp"
                alt="Foto de Tharcio Santos"
                fill
                quality={75}
                className="object-cover object-top"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 280px, 340px"
              />
            </div>

            <div className="min-w-0">
              {/* Identificação */}
              <h3 className="font-heading text-subsection leading-tight text-text-primary">
                Tharcio Santos
              </h3>
              <p className="mt-1 text-sm leading-snug text-text-primary">{t.about.role}</p>
              <p className="mt-0.5 font-mono text-metadata text-text-secondary">
                {t.about.location}
              </p>

              {/* Disponibilidade — sinal de status, contido e legível */}
              <p className="mt-3 flex items-start gap-2 border-t border-border-default pt-3 text-sm leading-snug text-text-secondary">
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span className="min-w-0">
                  <span className="sr-only">{t.about.availabilityLabel}: </span>
                  {t.about.availability}
                </span>
              </p>

              {/* Fatos objetivos */}
              <div className="mt-6 space-y-5">
                <FactsGroup
                  label={t.about.educationLabel}
                  items={[
                    { term: t.about.org, value: t.about.course, emphasis: true },
                    { term: t.about.graduationLabel, value: t.about.graduationDate },
                  ]}
                />
                <FactsGroup
                  label={t.about.languagesLabel}
                  items={[
                    { term: t.about.languagePortuguese, value: t.about.languagePortugueseLevel },
                    { term: t.about.languageEnglish, value: t.about.languageEnglishLevel },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Narrativa */}
          <div className="min-w-0 divide-y divide-border-default border-t border-border-default pt-8 lg:border-t-0 lg:pt-0">
            <div className="pb-8">
              <div className="max-w-[600px] space-y-4">
                {t.about.bio.map((paragraph) => (
                  <p key={paragraph} className="text-body leading-relaxed text-text-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="py-8">
              <h3 className="font-mono text-metadata uppercase tracking-wider text-text-secondary">
                {t.about.experienceLabel}
              </h3>
              <div className="mt-4 divide-y divide-border-default">
                {experiencias.map((item) => (
                  <ExperienceEntry key={`${item.role}-${item.org}`} item={item} />
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h3 className="font-mono text-metadata uppercase tracking-wider text-text-secondary">
                {t.about.competencyLabel}
              </h3>
              {/* Lista com dois níveis de leitura: competência à esquerda, como se aplica à direita */}
              <dl className="mt-4 divide-y divide-border-default">
                {competencias.map((item) => (
                  <div
                    key={item.title}
                    className="grid grid-cols-1 gap-0.5 py-3 first:pt-0 last:pb-0 sm:grid-cols-[1fr_1.15fr] sm:gap-6"
                  >
                    <dt className="font-heading text-sm font-medium leading-snug text-balance text-text-primary">
                      {item.title}
                    </dt>
                    <dd className="text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
