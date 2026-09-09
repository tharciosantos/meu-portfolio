import Image from 'next/image';
import { experienciasAnteriores, trajectorySkills } from '@/data/experience';
import Section from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Pill } from '../ui/Pill';

const About = () => {
  return (
    <Section
      id="sobre-mim"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-container">
        <SectionHeader
          eyebrow="Perfil & Trajetória"
          title="Sobre mim"
          subtitle="Graduando em Análise e Desenvolvimento de Sistemas com experiência prática autônoma em suporte e manutenção de TI, unindo método investigativo à construção de software."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 items-stretch w-full min-w-0">
          {/* Coluna Esquerda: Perfil e Formação */}
          <div className="flex flex-col justify-between gap-5 min-w-0 w-full">
            {/* Card Principal de Perfil */}
            <div className="flex-1 rounded-xl border border-border-light/80 bg-light-surface/60 p-5 sm:p-6 dark:border-border-dark/80 dark:bg-dark-surface/60 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 border-b border-border-light/60 pb-3 dark:border-border-dark/60">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                    Perfil Profissional
                  </p>
                  <span className="font-mono text-[11px] text-secondary-text/80 dark:text-dark-text/80">
                    Caeté / BH e Região · Remoto
                  </span>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="relative mx-auto sm:mx-0 h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-full border-2 border-border-light bg-light-bg shadow-sm dark:border-border-dark dark:bg-dark-bg">
                    <Image
                      src="/images/profile.webp"
                      alt="Foto de Tharcio Santos"
                      fill
                      quality={75}
                      className="object-cover"
                      sizes="(max-width: 640px) 96px, 112px"
                    />
                  </div>
                  <div className="space-y-0.5 text-center sm:text-left">
                    <h3 className="font-heading text-lg sm:text-xl font-semibold tracking-tight text-primary-text dark:text-light-text">
                      Tharcio Santos
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-secondary-text dark:text-dark-text">
                      Desenvolvedor Full Stack Júnior
                    </p>
                    <p className="font-mono text-[11px] text-accent dark:text-accent-light">
                      Foco em arquitetura segura e interfaces funcionais
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t border-border-light/60 pt-3.5 dark:border-border-dark/60">
                  <p className="text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                    Minha transição para a programação nasceu ao diagnosticar e resolver problemas
                    técnicos no suporte: percebi que queria ir além da manutenção de máquinas e
                    passar a{' '}
                    <strong className="font-semibold text-primary-text dark:text-light-text">
                      construir sistemas completos, seguros e confiáveis
                    </strong>{' '}
                    que resolvam dores reais das pessoas e empresas.
                  </p>
                </div>
              </div>
            </div>

            {/* Card de Formação Acadêmica Compacto */}
            <div className="rounded-xl border border-border-light/80 bg-light-surface/60 p-4 sm:p-5 dark:border-border-dark/80 dark:bg-dark-surface/60">
              <div className="flex items-center justify-between border-b border-border-light/60 pb-2.5 dark:border-border-dark/60">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                  Formação Acadêmica
                </p>
                <span className="font-mono text-[10px] uppercase tracking-wider text-secondary-text/80 dark:text-dark-text/80">
                  Graduação
                </span>
              </div>
              <h4 className="mt-3 font-heading text-sm sm:text-base font-semibold text-primary-text dark:text-light-text">
                Análise e Desenvolvimento de Sistemas
              </h4>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-secondary-text dark:text-dark-text">
                <span>Anhanguera</span>
                <span>·</span>
                <span>Cursando</span>
                <span>·</span>
                <span className="text-primary-text dark:text-light-text font-medium">
                  Julho de 2027
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Trajetória Profissional e Competências Integradas */}
          <div className="rounded-xl border border-border-light/80 bg-light-surface/60 p-5 sm:p-6 dark:border-border-dark/80 dark:bg-dark-surface/60 flex flex-col justify-between w-full min-w-0">
            <div>
              <div className="mb-4 flex items-center justify-between border-b border-border-light/60 pb-3 dark:border-border-dark/60">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                  Experiências Profissionais
                </p>
                <span className="font-mono text-[10px] uppercase tracking-wider text-secondary-text/80 dark:text-dark-text/80">
                  Trajetória & Bagagem
                </span>
              </div>

              {/* Linha do Tempo */}
              <div className="relative pl-5 space-y-4 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-px before:bg-border-light dark:before:bg-border-dark">
                {experienciasAnteriores.map((item) => (
                  <article key={`${item.role}-${item.org}`} className="group relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[19px] top-1.5 h-2 w-2 rounded-full border border-accent bg-white dark:bg-dark-card"
                    />

                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <h4 className="font-heading text-xs sm:text-sm font-semibold text-primary-text dark:text-light-text">
                        {item.role} · {item.org}
                      </h4>
                      <span className="shrink-0 font-mono text-[10px] sm:text-[11px] text-secondary-text/80 dark:text-dark-text/80">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                      {item.summary}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Habilidades Transferidas Integradas Organicamente */}
            <div className="mt-6 border-t border-border-light/60 pt-4 dark:border-border-dark/60">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-secondary-text/90 dark:text-dark-text/90 mb-2.5">
                Competências transferidas para a engenharia de software
              </p>
              <div className="flex flex-wrap gap-1.5">
                {trajectorySkills.map((skill) => (
                  <Pill key={skill} className="text-[11px] px-2.5 py-0.5">
                    {skill}
                  </Pill>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
