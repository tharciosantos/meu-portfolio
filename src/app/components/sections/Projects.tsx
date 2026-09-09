import { projects } from '@/data/projects';
import { GITHUB_URL } from '@/data/constants';
import Section from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectTabs } from './ProjectTabs';

const featuredProjects = projects.filter((p) => p.kind === 'featured');

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

        {/* Nota elegante de outros projetos no GitHub */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-border-light/60 bg-light-surface/40 px-5 py-3.5 text-xs text-secondary-text dark:border-border-dark/60 dark:bg-dark-surface/40 dark:text-dark-text">
          <p>Buscando outros experimentos, PWAs ou integrações com APIs públicas?</p>
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
