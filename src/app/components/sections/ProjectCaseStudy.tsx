'use client';

import Link from 'next/link';
import { getProjects } from '@/data/projects';
import { buttonVariants } from '../ui/Button';
import { Pill } from '../ui/Pill';
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from '../ui/Icons';
import { ProjectScreenShowcase } from '../ui/ProjectScreenShowcase';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/app/hooks/useLanguage';

type ProjectCaseStudyProps = {
  slug: string;
};

export function ProjectCaseStudy({ slug }: ProjectCaseStudyProps) {
  const { language, t } = useLanguage();
  const featuredProjects = getProjects(language).filter((p) => p.kind === 'featured');
  const projectIndex = featuredProjects.findIndex((p) => p.slug === slug);
  const project = projectIndex >= 0 ? featuredProjects[projectIndex] : undefined;

  if (!project) return null;

  const indexLabel = `0${projectIndex + 1}`;

  return (
    <article className="mx-auto w-full max-w-container min-w-0">
      {/* Navegação de retorno */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border-default pb-4">
        <Link
          href="/#projetos"
          className="-my-2 inline-flex min-h-11 items-center gap-2 font-mono text-metadata font-medium text-accent hover:text-accent-hover hover:underline"
        >
          <ArrowRightIcon className="h-3.5 w-3.5 rotate-180" aria-hidden="true" />
          <span>{t.projects.back}</span>
        </Link>

        <span className="inline-flex items-center gap-2 font-mono text-metadata text-text-secondary">
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

      {/* Cabeçalho Editorial */}
      <header className="grid grid-cols-1 gap-4 lg:grid-cols-[72px_1fr] lg:gap-6">
        <span aria-hidden="true" className="font-mono text-metadata text-text-secondary lg:pt-2">
          [{indexLabel}]
        </span>

        <div className="min-w-0">
          <h1 className="max-w-prose-wide font-heading text-hero text-text-primary [text-wrap:balance]">
            {project.title}
          </h1>

          <p className="mt-4 max-w-prose-wide text-body-lg text-text-secondary">
            {project.description}
          </p>

          {/* Hierarquia clara: primária (acessar →) + secundária (código) */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'group')}
              >
                <span>{project.demoLabel ?? t.projects.demoDefault}</span>
                <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              <GithubIcon className="h-4 w-4" />
              <span>{t.tabs.viewCode}</span>
            </a>
          </div>

          {/* Indicadores técnicos e tags de stack compactas */}
          <div className="mt-6 flex flex-wrap items-center gap-1.5">
            {project.metrics?.map((metric) => (
              <Pill key={metric} className="bg-surface-subtle py-1 text-text-primary">
                {metric}
              </Pill>
            ))}
            {project.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        </div>
      </header>

      {/* Conteúdo técnico estruturado */}
      <div className="mt-10 space-y-8 lg:pl-[96px]">
        {/* Showcase visual já emoldurado como janela de navegador */}
        <ProjectScreenShowcase
          screens={project.screens ?? []}
          title={project.title}
          demoUrl={project.demoUrl}
          defaultImageUrl={project.imageUrl}
          defaultImageAlt={project.imageAlt}
        />

        {/* Ledger de Engenharia */}
        <div className="divide-y divide-border-default rounded-card border border-border-default bg-surface-card shadow-card">
          {project.challenge && (
            <dl className="grid grid-cols-1 gap-2 p-5 sm:grid-cols-[200px_1fr] sm:gap-6 sm:p-6">
              <dt className="font-mono text-metadata uppercase tracking-wider text-text-secondary">
                {t.tabs.challenge}
              </dt>
              <dd className="max-w-prose-wide text-body text-text-primary">{project.challenge}</dd>
            </dl>
          )}

          {project.responsibility && (
            <dl className="grid grid-cols-1 gap-2 p-5 sm:grid-cols-[200px_1fr] sm:gap-6 sm:p-6">
              <dt className="font-mono text-metadata uppercase tracking-wider text-text-secondary">
                {t.tabs.responsibility}
              </dt>
              <dd className="max-w-prose-wide text-body text-text-secondary">
                {project.responsibility}
              </dd>
            </dl>
          )}

          {project.decision && (
            <dl className="grid grid-cols-1 gap-2 p-5 sm:grid-cols-[200px_1fr] sm:gap-6 sm:p-6">
              <dt className="font-mono text-metadata uppercase tracking-wider text-text-secondary">
                {t.tabs.decision}
              </dt>
              <dd className="max-w-prose-wide text-body text-text-secondary">{project.decision}</dd>
            </dl>
          )}

          {project.evidence && project.evidence.length > 0 && (
            <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-[200px_1fr] sm:gap-6 sm:p-6">
              <p className="font-mono text-metadata uppercase tracking-wider text-text-secondary">
                {t.tabs.implemented}
              </p>
              <ul className="max-w-prose-wide space-y-2">
                {project.evidence.map((item, idx) => (
                  <li key={item} className="flex items-baseline gap-3 text-body">
                    <span
                      aria-hidden="true"
                      className="shrink-0 font-mono text-metadata text-text-secondary"
                    >
                      0{idx + 1}
                    </span>
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.architectureLinks && project.architectureLinks.length > 0 && (
            <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-[200px_1fr] sm:gap-6 sm:p-6">
              <span className="font-mono text-metadata uppercase tracking-wider text-text-secondary">
                {t.tabs.architecture}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.architectureLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-control border border-border-default bg-surface-subtle px-3 py-1.5 font-mono text-metadata text-text-primary transition-colors duration-150 hover:border-border-hover hover:text-accent"
                    title={t.tabs.ariaArchitecture.replace('{label}', link.label)}
                  >
                    {link.badge && <span className="shrink-0 text-accent">[{link.badge}]</span>}
                    <span>{link.label}</span>
                    <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
