import type { ReactNode } from 'react';
import { capabilities } from '@/data/capabilities';
import Section from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { CodeIcon, DatabaseIcon, RocketIcon, CheckIcon } from '../ui/Icons';
import { TechIcon } from '../ui/TechIcons';

const pillarIcons: Record<string, ReactNode> = {
  'Frontend & UI': <CodeIcon className="h-4 w-4" />,
  'Backend & Segurança': <RocketIcon className="h-4 w-4" />,
  'Bancos de Dados & Infra': <DatabaseIcon className="h-4 w-4" />,
  'Testes & Versionamento': <CheckIcon className="h-4 w-4" />,
};

// Tecnologias únicas em ordem lógica para o Marquee contínuo
const marqueeTechs = Array.from(new Set(capabilities.flatMap((c) => c.technologies)));

const Capabilities = () => {
  return (
    <Section
      id="habilidades"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-container">
        <SectionHeader
          eyebrow="Competências & Stack"
          title="Stack e tecnologias"
          subtitle="Tecnologias aplicadas em produção, organizadas em 4 pilares: interfaces, segurança de APIs, bancos relacionais e testes automatizados."
        />

        {/* Marquee Ticker Contínuo Estilo Ollama / Vercel com Ícones Vetoriais */}
        <div className="group relative my-8 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max gap-3 animate-marquee group-hover:[animation-play-state:paused]">
            {marqueeTechs.concat(marqueeTechs).map((tech, idx) => (
              <div
                key={`${tech}-${idx}`}
                className="flex items-center gap-2 rounded-lg border border-border-light/80 bg-light-surface/60 px-3 py-1.5 text-xs text-secondary-text transition-all hover:border-accent hover:text-primary-text dark:border-border-dark/80 dark:bg-dark-surface/60 dark:text-dark-text dark:hover:border-accent-light dark:hover:text-light-text shrink-0 select-none cursor-default"
              >
                <TechIcon
                  name={tech}
                  className="h-3.5 w-3.5 text-accent dark:text-accent-light shrink-0"
                />
                <span className="font-mono text-[11px] font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pilares Estruturados de Engenharia */}
        <div className="grid grid-cols-1 gap-5 pt-2 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-border-light/70 bg-light-card/40 p-5 transition-all hover:border-border-light hover:bg-light-card dark:border-border-dark/70 dark:bg-dark-card/40 dark:hover:border-border-dark dark:hover:bg-dark-card"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border-light bg-light-surface text-accent dark:border-border-dark dark:bg-dark-surface dark:text-accent-light"
                  >
                    {pillarIcons[item.title]}
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
                    aria-label={`Tecnologias de ${item.title}`}
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
                <div className="mt-5 border-t border-border-light/40 pt-2.5 font-mono text-[10px] text-secondary-text/80 dark:border-border-dark/40 dark:text-dark-text/80">
                  <span className="font-semibold text-primary-text/90 dark:text-light-text/90">
                    Projetos:
                  </span>{' '}
                  {item.usedIn.join(' · ')}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Capabilities;
