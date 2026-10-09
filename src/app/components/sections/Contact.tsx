import type { ReactNode } from 'react';
import Section from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { EMAIL, redesSociais, RESUME_URL } from '@/data/constants';
import { CopyEmailButton } from '../ui/CopyEmailButton';
import { DocumentIcon, GithubIcon, LinkedinIcon, MailIcon } from '../ui/Icons';

const icones: Record<string, ReactNode> = {
  LinkedIn: <LinkedinIcon className="h-5 w-5" />,
  GitHub: <GithubIcon className="h-5 w-5" />,
};

const Contact = () => {
  return (
    <Section id="contato" spacing="editorial">
      <div className="mx-auto max-w-container">
        <SectionHeader
          eyebrow="Contato"
          title="Vamos conversar sobre uma oportunidade"
          subtitle="Estou aberto a oportunidades de estágio ou posições júnior em desenvolvimento de software, com interesse em frontend, backend ou full stack e em times onde eu possa aprender, contribuir e evoluir com projetos reais."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 items-stretch w-full min-w-0">
          {/* Informações de Disponibilidade e Contratação */}
          <div className="rounded-md border border-border-light/80 bg-light-surface/60 p-4 sm:p-6 dark:border-border-dark/80 dark:bg-dark-surface/60 flex flex-col justify-between w-full min-w-0">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-light/60 pb-3 dark:border-border-dark/60">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                  Status Profissional
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-accent dark:text-accent-light">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-accent dark:bg-accent-light"
                    aria-hidden="true"
                  />
                  <span>Disponível para contratação</span>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <h3 className="font-heading text-lg font-semibold text-primary-text dark:text-light-text">
                  Pronto para somar ao time
                </h3>
                <p className="text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                  Interesse em{' '}
                  <strong className="font-semibold text-primary-text dark:text-light-text">
                    Estágio
                  </strong>{' '}
                  ou{' '}
                  <strong className="font-semibold text-primary-text dark:text-light-text">
                    Desenvolvimento Júnior
                  </strong>{' '}
                  · Atuação Remota, Híbrida ou Presencial (Caeté / BH e região).
                </p>
                <p className="text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                  Foco em colaborar com squads ágeis, entregando código tipado, arquitetura em
                  camadas e interfaces acessíveis com responsabilidade e rápida curva de
                  aprendizado.
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-border-light/60 pt-4 dark:border-border-dark/60">
              <ul className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-secondary-text dark:text-dark-text">
                <li className="inline-flex items-center gap-1.5 rounded-md border border-border-light/70 bg-light-card/60 px-2.5 py-1 dark:border-border-dark/70 dark:bg-dark-card/60">
                  Início imediato
                </li>
                <li className="rounded-md border border-border-light/70 bg-light-card/60 px-2.5 py-1 dark:border-border-dark/70 dark:bg-dark-card/60">
                  CLT / Estágio
                </li>
                <li className="rounded-md border border-border-light/70 bg-light-card/60 px-2.5 py-1 dark:border-border-dark/70 dark:bg-dark-card/60">
                  BH e Remoto
                </li>
              </ul>
            </div>
          </div>

          {/* Canais Diretos de Contato */}
          <div className="rounded-md border border-border-light/80 bg-light-surface/60 p-4 sm:p-6 dark:border-border-dark/80 dark:bg-dark-surface/60 flex flex-col justify-between w-full min-w-0">
            <div className="border-b border-border-light/60 pb-3 dark:border-border-dark/60">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                Canais de contato
              </p>
            </div>

            <div className="divide-y divide-border-light/60 dark:divide-border-dark/60">
              {/* E-mail */}
              <div className="flex flex-col gap-3 py-3.5 sm:py-4 first:pt-2 sm:flex-row sm:items-center sm:justify-between min-w-0">
                <span className="flex items-center gap-3 min-w-0">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border-light bg-light-card text-accent dark:border-border-dark dark:bg-dark-card dark:text-accent-light shadow-xs"
                  >
                    <MailIcon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-primary-text dark:text-light-text">
                      E-mail
                    </span>
                    <span className="block truncate font-mono text-xs text-secondary-text dark:text-dark-text">
                      {EMAIL}
                    </span>
                  </span>
                </span>

                <div className="flex shrink-0 items-center gap-2 pl-11 sm:pl-0">
                  <CopyEmailButton />
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center rounded-md border border-border-light bg-light-card px-3 py-1.5 font-mono text-xs font-medium text-accent hover:border-accent hover:text-accent-hover dark:border-border-dark dark:bg-dark-card dark:text-accent-light dark:hover:border-accent-light transition-all shadow-xs"
                  >
                    Abrir
                  </a>
                </div>
              </div>

              {/* Redes Sociais */}
              {redesSociais.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.action} de ${link.label}`}
                  className="group flex items-center justify-between gap-3 py-3.5 sm:py-4 transition-colors hover:text-accent dark:hover:text-accent-light min-w-0"
                >
                  <span className="flex items-center gap-3 min-w-0 flex-1">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border-light bg-light-card text-accent dark:border-border-dark dark:bg-dark-card dark:text-accent-light shadow-xs transition-colors group-hover:border-accent dark:group-hover:border-accent-light"
                    >
                      {icones[link.label]}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-primary-text dark:text-light-text group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                        {link.label}
                      </span>
                      <span className="block truncate text-xs text-secondary-text dark:text-dark-text">
                        {link.description}
                      </span>
                    </span>
                  </span>
                  <span className="shrink-0 font-mono text-xs font-semibold text-accent transition-transform duration-200 group-hover:translate-x-1 dark:text-accent-light flex items-center gap-1">
                    <span className="hidden sm:inline">{link.action}</span>
                    <span>→</span>
                  </span>
                </a>
              ))}

              {/* Currículo */}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 py-3.5 sm:py-4 last:pb-1 transition-colors hover:text-accent dark:hover:text-accent-light min-w-0"
              >
                <span className="flex items-center gap-3 min-w-0 flex-1">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border-light bg-light-card text-accent dark:border-border-dark dark:bg-dark-card dark:text-accent-light shadow-xs transition-colors group-hover:border-accent dark:group-hover:border-accent-light"
                  >
                    <DocumentIcon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-primary-text dark:text-light-text group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                      Currículo
                    </span>
                    <span className="block truncate text-xs text-secondary-text dark:text-dark-text">
                      Formação, experiência e informações profissionais.
                    </span>
                  </span>
                </span>
                <span className="shrink-0 font-mono text-xs font-semibold text-accent transition-transform duration-200 group-hover:translate-x-1 dark:text-accent-light flex items-center gap-1">
                  <span className="hidden sm:inline">Abrir</span>
                  <span>→</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
