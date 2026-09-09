'use client';

import { useState, useRef } from 'react';
import type { Project } from '@/data/projects';
import { buttonVariants } from '../ui/Button';
import { Pill } from '../ui/Pill';
import { ExternalLinkIcon, GithubIcon, CodeIcon, CheckIcon } from '../ui/Icons';
import { ProjectScreenShowcase } from '../ui/ProjectScreenShowcase';
import { cn } from '@/lib/utils';

type ProjectTabsProps = {
  projects: Project[];
};

export function ProjectTabs({ projects }: ProjectTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = projects[activeIndex] ?? projects[0];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const total = projects.length;
    let nextIndex = index;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % total;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + total) % total;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = total - 1;
    }

    if (nextIndex !== index) {
      setActiveIndex(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Guia de Navegação e Contador de Projetos */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <p className="text-xs font-medium text-secondary-text dark:text-dark-text flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent dark:bg-accent-light"
            aria-hidden="true"
          />
          <span>Selecione um projeto para ver telas, arquitetura e regras de negócio:</span>
        </p>
        <span className="font-mono text-xs font-semibold text-accent dark:text-accent-light">
          {projects.length} projetos disponíveis
        </span>
      </div>

      {/* Barra de Abas em Formato Pill */}
      <div
        role="tablist"
        aria-label="Projetos em destaque e complementares"
        className="flex overflow-x-auto pb-2 gap-2 border-b border-border-light dark:border-border-dark scrollbar-none snap-x touch-pan-x w-full min-w-0"
      >
        {projects.map((p, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={p.shortTitle}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              aria-controls={`project-panel-${idx}`}
              id={`project-tab-${idx}`}
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={cn(
                'group flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-light',
                isActive
                  ? 'border-accent bg-accent text-white shadow-md shadow-accent/25 dark:border-accent-light dark:bg-accent-light dark:text-dark-bg dark:shadow-accent-light/25 font-semibold'
                  : 'border-border-light bg-light-surface text-secondary-text hover:border-accent hover:text-primary-text dark:border-border-dark dark:bg-dark-surface dark:text-dark-text dark:hover:border-accent-light dark:hover:text-light-text'
              )}
            >
              <span
                className={cn(
                  'font-mono text-[11px]',
                  isActive
                    ? 'text-white/80 dark:text-dark-bg/80'
                    : 'text-accent dark:text-accent-light'
                )}
              >
                0{idx + 1}
              </span>
              <span className="whitespace-nowrap">{p.shortTitle}</span>
              {p.kind === 'featured' && (
                <span
                  className={cn(
                    'h-1.5 w-1.5 rounded-full shrink-0',
                    isActive ? 'bg-white dark:bg-dark-bg' : 'bg-emerald-500'
                  )}
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Painel do Projeto Ativo */}
      <article
        role="tabpanel"
        id={`project-panel-${activeIndex}`}
        aria-labelledby={`project-tab-${activeIndex}`}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full min-w-0 items-start"
      >
        {/* Coluna Esquerda: Showcase Visual e Ações (7 Colunas) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4 rounded-card border border-border-light bg-light-surface p-4 sm:p-5 dark:border-border-dark dark:bg-dark-surface min-w-0 overflow-hidden">
          <div className="space-y-3.5">
            <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent dark:text-accent-light font-bold">
                Projeto 0{activeIndex + 1} / 0{projects.length}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-700 dark:text-emerald-400">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"
                  aria-hidden="true"
                />
                Sistema em Produção
              </span>
            </div>

            <div className="min-w-0">
              <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-primary-text dark:text-light-text truncate">
                {current.shortTitle}
              </h3>
              <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-secondary-text dark:text-dark-text">
                {current.description}
              </p>
            </div>

            {/* Showcase Visual das Telas */}
            <ProjectScreenShowcase
              key={current.shortTitle}
              screens={current.screens ?? []}
              title={current.title}
              demoUrl={current.demoUrl}
              defaultImageUrl={current.imageUrl}
              defaultImageAlt={current.imageAlt}
            />
          </div>

          <div className="space-y-3 pt-2">
            {/* Botões de Ação */}
            <div className="grid gap-2.5 grid-cols-1 sm:grid-cols-2 w-full min-w-0">
              <a
                href={current.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'outline', size: 'default' }), 'w-full')}
              >
                <GithubIcon className="h-4 w-4" />
                Ver código
              </a>
              {current.demoUrl && (
                <a
                  href={current.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: 'primary', size: 'default' }), 'w-full')}
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                  {current.demoLabel ?? 'Acessar aplicação'}
                </a>
              )}
            </div>

            {/* Tags de Stack */}
            <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border-light/70 dark:border-border-dark/70">
              {current.tags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna Direita: Engenharia, Responsabilidade & Decisões (5 Colunas) */}
        <div className="lg:col-span-5 rounded-card border border-border-light bg-light-surface p-5 dark:border-border-dark dark:bg-dark-surface space-y-4 min-w-0">
          {/* Minha responsabilidade */}
          {current.responsibility && (
            <div className="space-y-1 min-w-0">
              <dt className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent dark:text-accent-light">
                Minha responsabilidade
              </dt>
              <dd className="text-xs sm:text-[13px] leading-relaxed text-secondary-text dark:text-dark-text">
                {current.responsibility}
              </dd>
            </div>
          )}

          {/* Decisão técnica */}
          {current.decision && (
            <div className="space-y-1 min-w-0 pt-3 border-t border-border-light/60 dark:border-border-dark/60">
              <dt className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent dark:text-accent-light">
                Decisão técnica
              </dt>
              <dd className="text-xs sm:text-[13px] leading-relaxed text-secondary-text dark:text-dark-text">
                {current.decision}
              </dd>
            </div>
          )}

          {/* Implementado */}
          {current.evidence && current.evidence.length > 0 && (
            <div className="space-y-2 min-w-0 pt-3 border-t border-border-light/60 dark:border-border-dark/60">
              <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary-text dark:text-light-text">
                Implementado
              </p>
              <ul className="grid gap-1.5 text-xs text-secondary-text dark:text-dark-text min-w-0">
                {current.evidence.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2 break-words">
                    <CheckIcon className="h-3.5 w-3.5 text-accent dark:text-accent-light shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deep Links de Arquitetura no GitHub */}
          {current.architectureLinks && current.architectureLinks.length > 0 && (
            <div className="pt-3 border-t border-border-light/60 dark:border-border-dark/60 flex flex-wrap items-center gap-1.5 min-w-0">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-secondary-text dark:text-dark-text flex items-center gap-1 shrink-0">
                <CodeIcon className="h-3 w-3 text-accent dark:text-accent-light" />
                <span>Arquitetura no GitHub</span>
              </span>
              <div className="flex flex-wrap gap-1.5 min-w-0">
                {current.architectureLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border-light/80 bg-light-card px-2 py-0.5 font-mono text-[10px] text-secondary-text transition-colors hover:border-accent hover:text-accent dark:border-border-dark/80 dark:bg-dark-card dark:text-dark-text dark:hover:border-accent-light dark:hover:text-accent-light"
                    title={`Ver ${link.label} no GitHub`}
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
      </article>
    </div>
  );
}
