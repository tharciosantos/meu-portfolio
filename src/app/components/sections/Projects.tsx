'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getProjects, type Project } from '@/data/projects';
import { GITHUB_URL } from '@/data/constants';
import Section from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { buttonVariants } from '../ui/Button';
import { BrowserFrame, extractHostname } from '../ui/BrowserFrame';
import { Pill } from '../ui/Pill';
import { GithubIcon, ArrowRightIcon } from '../ui/Icons';
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
      className="object-cover object-top"
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
      surface="muted"
      className="border-b border-border-default"
    >
      <div className="mx-auto max-w-container">
        <SectionHeader index="01" title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="lg:pl-[96px]">
          {/* Cases principais com moldura de navegador e sombra suave única */}
          <ul className="grid list-none grid-cols-1 gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, idx) => (
              <li
                key={project.slug}
                className="flex min-w-0 flex-col overflow-hidden rounded-card border border-border-default bg-surface-card shadow-card transition-colors duration-150 hover:border-border-hover"
              >
                <div className="border-b border-border-default bg-surface-subtle px-3 pt-3 sm:px-4 sm:pt-4">
                  <BrowserFrame
                    domain={extractHostname(project.demoUrl)}
                    className="rounded-b-none border-b-0"
                    contentClassName="aspect-[1920/909]"
                  >
                    <ProjectScreenshot project={project} sizes="(max-width: 1024px) 100vw, 520px" />
                  </BrowserFrame>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-6 p-5 sm:p-6">
                  <div className="min-w-0 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-metadata text-text-secondary">
                        0{idx + 1} / 0{featuredProjects.length}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-metadata text-text-secondary">
                        <span
                          className={cn(
                            'h-1.5 w-1.5 shrink-0 rounded-full',
                            project.status === 'production' ? 'bg-accent' : 'bg-text-secondary'
                          )}
                          aria-hidden="true"
                        />
                        {project.status === 'production' ? t.tabs.inProduction : t.tabs.demoProject}
                      </span>
                    </div>

                    <h3 className="py-2 font-heading text-subsection text-text-primary">
                      <Link
                        href={`/projetos/${project.slug}`}
                        className="inline-flex min-h-11 items-center transition-colors duration-150 hover:text-accent"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-body text-text-secondary">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <Pill key={tag}>{tag}</Pill>
                      ))}
                    </div>
                  </div>

                  {/* Hierarquia clara: primária (acessar →) + secundárias (case study e código) */}
                  <div className="flex flex-wrap items-center gap-2 border-t border-border-default pt-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: 'primary', size: 'sm' }), 'group')}
                      >
                        <span>{project.demoLabel ?? t.projects.demoDefault}</span>
                        <ArrowRightIcon
                          className="h-3.5 w-3.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    )}
                    <Link
                      href={`/projetos/${project.slug}`}
                      className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
                    >
                      <span>{t.projects.viewCase}</span>
                      <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.projects.ariaViewCode.replace('{name}', project.shortTitle)}
                      className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}
                    >
                      <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{t.projects.viewCode}</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Outros projetos */}
          {secondaryProjects.length > 0 && (
            <div className="mt-14 w-full min-w-0">
              <div className="max-w-prose-wide">
                <h3 className="font-heading text-subsection text-text-primary">
                  {t.projects.othersTitle}
                </h3>
                <p className="mt-2 text-body text-text-secondary">{t.projects.othersSubtitle}</p>
              </div>

              <ul className="mt-6 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {secondaryProjects.map((project) => (
                  <li
                    key={project.slug}
                    className="flex min-w-0 flex-col overflow-hidden rounded-card border border-border-default bg-surface-card shadow-card transition-colors duration-150 hover:border-border-hover"
                  >
                    <div className="border-b border-border-default bg-surface-subtle px-3 pt-3">
                      <BrowserFrame
                        domain={extractHostname(project.demoUrl)}
                        className="rounded-b-none border-b-0"
                        contentClassName="aspect-[16/9]"
                      >
                        <ProjectScreenshot
                          project={project}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                        />
                      </BrowserFrame>
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-5 p-4 sm:p-5">
                      <div className="min-w-0 space-y-2">
                        <h4 className="font-heading text-body font-medium text-text-primary">
                          {project.shortTitle}
                        </h4>

                        {project.outcome && (
                          <p className="font-mono text-metadata text-text-secondary">
                            {project.outcome}
                          </p>
                        )}

                        <p className="text-body text-text-secondary">{project.description}</p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.map((tag) => (
                            <Pill key={tag}>{tag}</Pill>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 border-t border-border-default pt-4">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              buttonVariants({ variant: 'primary', size: 'sm' }),
                              'group'
                            )}
                          >
                            <span>{project.demoLabel ?? t.projects.demoDefault}</span>
                            <ArrowRightIcon
                              className="h-3.5 w-3.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={t.projects.ariaViewCode.replace('{name}', project.shortTitle)}
                          className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}
                        >
                          <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{t.projects.viewCode}</span>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 rounded-card border border-border-default bg-surface-card px-5 py-4 shadow-card sm:flex-row sm:items-center sm:justify-between">
            <p className="text-body text-text-secondary">{t.projects.viewAllNote}</p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="-my-2 inline-flex min-h-11 shrink-0 items-center font-mono text-metadata font-medium text-accent hover:text-accent-hover hover:underline sm:my-0"
            >
              {t.projects.viewAllRepos}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
