'use client';

import Link from 'next/link';
import { getProjects } from '@/data/projects';
import { buttonVariants } from '../ui/Button';
import { Pill } from '../ui/Pill';
import { ExternalLinkIcon, GithubIcon, CodeIcon, CheckIcon } from '../ui/Icons';
import { ProjectScreenShowcase } from '../ui/ProjectScreenShowcase';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/app/hooks/useLanguage';

type ProjectCaseStudyProps = {
  slug: string;
};

export function ProjectCaseStudy({ slug }: ProjectCaseStudyProps) {
  const { language, t } = useLanguage();
  const project = getProjects(language).find((p) => p.slug === slug);

  if (!project) return null;

  return (
    <div className="mx-auto w-full max-w-container min-w-0">
      {/* Voltar para projetos */}
      <Link
        href="/#projetos"
        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline dark:text-accent-light mb-6"
      >
        ← {t.projects.back}
      </Link>

      {/* Título e descrição */}
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-primary-text dark:text-light-text">
          {project.title}
        </h1>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-accent dark:text-accent-light">
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent dark:bg-accent-light"
            aria-hidden="true"
          />
          {t.tabs.inProduction}
        </span>
      </div>
      <p className="mb-8 max-w-prose-wide text-body-lg text-secondary-text dark:text-dark-text">
        {project.description}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full min-w-0 items-start">
        {/* Coluna Esquerda: Showcase Visual e Ações (7 Colunas) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4 rounded-md border border-border-light bg-light-surface p-4 sm:p-5 dark:border-border-dark dark:bg-dark-surface min-w-0 overflow-hidden">
          <ProjectScreenShowcase
            screens={project.screens ?? []}
            title={project.title}
            demoUrl={project.demoUrl}
            defaultImageUrl={project.imageUrl}
            defaultImageAlt={project.imageAlt}
          />

          <div className="space-y-3 pt-2">
            <div className="grid gap-2.5 grid-cols-1 sm:grid-cols-2 w-full min-w-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'outline', size: 'default' }), 'w-full')}
              >
                <GithubIcon className="h-4 w-4" />
                {t.tabs.viewCode}
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: 'primary', size: 'default' }), 'w-full')}
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                  {project.demoLabel ?? t.projects.demoDefault}
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border-light/70 dark:border-border-dark/70">
              {project.tags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna Direita: Engenharia, Responsabilidade & Decisões (5 Colunas) */}
        <div className="lg:col-span-5 rounded-md border border-border-light bg-light-surface p-5 dark:border-border-dark dark:bg-dark-surface space-y-4 min-w-0">
          {project.responsibility && (
            <div className="space-y-1 min-w-0">
              <dl>
                <dt className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary-text dark:text-light-text">
                  {t.tabs.responsibility}
                </dt>
                <dd className="text-xs sm:text-[13px] leading-relaxed text-primary-text dark:text-light-text">
                  {project.responsibility}
                </dd>
              </dl>
            </div>
          )}

          {project.decision && (
            <div className="space-y-1 min-w-0 pt-3 border-t border-border-light/60 dark:border-border-dark/60">
              <dl>
                <dt className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary-text dark:text-light-text">
                  {t.tabs.decision}
                </dt>
                <dd className="text-xs sm:text-[13px] leading-relaxed text-primary-text dark:text-light-text">
                  {project.decision}
                </dd>
              </dl>
            </div>
          )}

          {project.evidence && project.evidence.length > 0 && (
            <div className="space-y-2 min-w-0 pt-3 border-t border-border-light/60 dark:border-border-dark/60">
              <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary-text dark:text-light-text">
                {t.tabs.implemented}
              </p>
              <ul className="grid gap-1.5 text-xs text-secondary-text dark:text-dark-text min-w-0">
                {project.evidence.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2 break-words">
                    <CheckIcon className="h-3.5 w-3.5 text-accent dark:text-accent-light shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.architectureLinks && project.architectureLinks.length > 0 && (
            <div className="pt-3 border-t border-border-light/60 dark:border-border-dark/60 flex flex-wrap items-center gap-1.5 min-w-0">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-secondary-text dark:text-dark-text flex items-center gap-1 shrink-0">
                <CodeIcon className="h-3 w-3 text-accent dark:text-accent-light" />
                <span>{t.tabs.architecture}</span>
              </span>
              <div className="flex flex-wrap gap-1.5 min-w-0">
                {project.architectureLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-border-light/80 bg-light-card px-2 py-0.5 font-mono text-[10px] text-secondary-text transition-colors hover:border-accent hover:text-accent dark:border-border-dark/80 dark:bg-dark-card dark:text-dark-text dark:hover:border-accent-light dark:hover:text-accent-light"
                    title={t.tabs.ariaArchitecture.replace('{label}', link.label)}
                  >
                    {link.badge && (
                      <span className="font-bold text-accent dark:text-accent-light">
                        [{link.badge}]
                      </span>
                    )}
                    <span className="truncate">{link.label}</span>
                    <ExternalLinkIcon className="h-2.5 w-2.5 opacity-60 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
