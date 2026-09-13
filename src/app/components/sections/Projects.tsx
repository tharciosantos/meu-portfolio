import { projects } from '@/data/projects';
import { GITHUB_URL } from '@/data/constants';
import Section from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectTabs } from './ProjectTabs';
import { Pill } from '../ui/Pill';
import { ExternalLinkIcon, GithubIcon } from '../ui/Icons';

const featuredProjects = projects.filter((p) => p.kind === 'featured');
const secondaryProjects = projects.filter((p) => p.kind === 'secondary');

const Projects = () => {
  return (
    <Section
      id="projetos"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-container">
        <SectionHeader
          eyebrow="Sistemas em Produção"
          title="Projetos"
          subtitle="Sistemas full stack desenvolvidos do zero, com autenticação em camadas, banco relacional, regras de negócio e suítes de testes automatizados."
        />

        <ProjectTabs projects={featuredProjects} />

        {/* Outros projetos: vitrine compacta sem case study completo */}
        {secondaryProjects.length > 0 && (
          <div className="mt-10 w-full min-w-0">
            <h3 className="font-heading text-lg sm:text-xl font-semibold tracking-tight text-primary-text dark:text-light-text">
              Outros projetos
            </h3>
            <p className="mt-1 max-w-prose-wide text-sm leading-relaxed text-secondary-text dark:text-dark-text">
              Experimentos e integrações que ampliam a stack para além dos cases principais — cada
              um com código aberto e demo publicada.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {secondaryProjects.map((project) => (
                <article
                  key={project.shortTitle}
                  className="flex min-w-0 flex-col justify-between gap-4 rounded-card border border-border-light bg-light-surface p-4 sm:p-5 dark:border-border-dark dark:bg-dark-surface"
                >
                  <div className="min-w-0 space-y-2">
                    <h4 className="font-heading text-base font-semibold tracking-tight text-primary-text dark:text-light-text">
                      {project.shortTitle}
                    </h4>
                    {project.outcome && (
                      <p className="font-mono text-[11px] font-medium text-accent dark:text-accent-light">
                        {project.outcome}
                      </p>
                    )}
                    <p className="text-xs leading-relaxed text-secondary-text dark:text-dark-text">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <Pill key={tag}>{tag}</Pill>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border-light/70 pt-3 dark:border-border-dark/70">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código de ${project.shortTitle} no GitHub`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline dark:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-light rounded-sm"
                    >
                      <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      Ver código
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.demoLabel ?? 'Acessar aplicação'} do projeto ${project.shortTitle}`}
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline dark:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-light rounded-sm"
                      >
                        <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {project.demoLabel ?? 'Acessar aplicação'}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Nota elegante de outros projetos no GitHub */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-border-light/60 bg-light-surface/40 px-5 py-3.5 text-xs text-secondary-text dark:border-border-dark/60 dark:bg-dark-surface/40 dark:text-dark-text">
          <p>Quer ver o código-fonte completo e o histórico de evolução de cada projeto?</p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-accent hover:underline dark:text-accent-light shrink-0"
          >
            Ver todos os repositórios no GitHub →
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
