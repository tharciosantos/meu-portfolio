'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getProjects, type Project } from '@/data/projects';
import { GITHUB_URL } from '@/data/constants';
import Section from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Pill } from '../ui/Pill';
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from '../ui/Icons';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/app/hooks/useLanguage';

function ProjectScreenshot({ project, sizes }: { project: Project; sizes: string }) {
  const src = project.imageUrl ?? project.screens?.[0]?.imageUrl;

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={project.imageAlt ?? `${project.title} — interface do sistema`}
      fill
      sizes={sizes}
      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
    />
  );
}

const Projects = () => {
  const { language, t } = useLanguage();
  const projects = getProjects(language);
  const featuredProjects = projects.filter((p) => p.kind === 'featured');
  const secondaryProjects = projects.filter((p) => p.kind === 'secondary');

  return (
    <Section
      id="projetos"
      spacing="editorial"
      className="border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-container">
        <SectionHeader
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {/* Cases principais: cards com screenshot e link para a página do projeto */}
        <ul className="grid list-none grid-cols-1 gap-4 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <li
              key={project.slug}
              className="group flex min-w-0 flex-col overflow-hidden rounded-md border border-border-light bg-light-card dark:border-border-dark dark:bg-dark-card"
            >
              <div className="relative aspect-[2.1/1] w-full overflow-hidden border-b border-border-light bg-light-surface dark:border-border-dark dark:bg-dark-surface">
                <ProjectScreenshot project={project} sizes="(max-width: 1024px) 100vw, 600px" />
              </div>

              <div className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6">
                <div className="min-w-0 space-y-3">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <h3 className="font-heading text-xl font-semibold tracking-tight text-primary-text dark:text-light-text">
                      <Link
                        href={`/projetos/${project.slug}`}
                        className="transition-colors hover:text-accent dark:hover:text-accent-light"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border-light bg-light-surface px-2 py-0.5 font-mono text-[11px] text-secondary-text dark:border-border-dark dark:bg-dark-surface dark:text-dark-text">
                      <span
                        className={cn(
                          'h-1.5 w-1.5 shrink-0 rounded-full',
                          project.status === 'production'
                            ? 'bg-accent dark:bg-accent-light'
                            : 'bg-secondary-text dark:bg-dark-text'
                        )}
                        aria-hidden="true"
                      />
                      {project.status === 'production' ? t.tabs.inProduction : t.tabs.demoProject}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-secondary-text dark:text-dark-text">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border-light/70 pt-4 dark:border-border-dark/70">
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline dark:text-accent-light"
                  >
                    {t.projects.viewCase}
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.projects.ariaViewCode.replace('{name}', project.shortTitle)}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline dark:text-accent-light"
                  >
                    <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    {t.projects.viewCode}
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline dark:text-accent-light"
                    >
                      <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      {project.demoLabel ?? t.projects.demoDefault}
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Outros projetos: vitrine compacta com screenshot */}
        {secondaryProjects.length > 0 && (
          <div className="mt-10 w-full min-w-0">
            <h3 className="font-heading text-lg sm:text-xl font-semibold tracking-tight text-primary-text dark:text-light-text">
              {t.projects.othersTitle}
            </h3>
            <p className="mt-1 max-w-prose-wide text-sm leading-relaxed text-secondary-text dark:text-dark-text">
              {t.projects.othersSubtitle}
            </p>

            <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {secondaryProjects.map((project) => (
                <li
                  key={project.slug}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-md border border-border-light bg-light-card dark:border-border-dark dark:bg-dark-card"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border-light bg-light-surface dark:border-border-dark dark:bg-dark-surface">
                    <ProjectScreenshot
                      project={project}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-4 p-4 sm:p-5">
                    <div className="min-w-0 space-y-2">
                      <h4 className="font-heading text-base font-semibold tracking-tight text-primary-text dark:text-light-text">
                        <Link
                          href={`/projetos/${project.slug}`}
                          className="transition-colors hover:text-accent dark:hover:text-accent-light"
                        >
                          {project.shortTitle}
                        </Link>
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
                      <Link
                        href={`/projetos/${project.slug}`}
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline dark:text-accent-light"
                      >
                        {t.projects.viewCase}
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t.projects.ariaViewCode.replace('{name}', project.shortTitle)}
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline dark:text-accent-light"
                      >
                        <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {t.projects.viewCode}
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline dark:text-accent-light"
                        >
                          <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                          {project.demoLabel ?? t.projects.demoDefault}
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Nota elegante de outros projetos no GitHub */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-md border border-border-light/60 bg-light-surface/40 px-5 py-3.5 text-xs text-secondary-text dark:border-border-dark/60 dark:bg-dark-surface/40 dark:text-dark-text">
          <p>{t.projects.viewAllNote}</p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-accent hover:underline dark:text-accent-light shrink-0"
          >
            {t.projects.viewAllRepos}
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
