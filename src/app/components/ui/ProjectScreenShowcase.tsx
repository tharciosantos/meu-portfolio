'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import {
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  ExternalLinkIcon,
} from './Icons';
import { cn } from '@/lib/utils';

export type ProjectScreen = {
  label: string;
  imageUrl: string;
  caption: string;
};

type ProjectScreenShowcaseProps = {
  screens: ProjectScreen[];
  title: string;
  demoUrl?: string;
  defaultImageUrl?: string;
  defaultImageAlt?: string;
};

function extractDomain(url?: string): string {
  if (!url) return 'app.local';
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url.replace(/^https?:\/\//, '').split('/')[0] || 'app.local';
  }
}

export function ProjectScreenShowcase({
  screens,
  title,
  demoUrl,
  defaultImageUrl,
  defaultImageAlt,
}: ProjectScreenShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Controle de Swipe Touch para Mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const items =
    screens && screens.length > 0
      ? screens
      : defaultImageUrl
        ? [
            {
              label: 'Visão Geral',
              imageUrl: defaultImageUrl,
              caption: defaultImageAlt ?? `Interface de ${title}`,
            },
          ]
        : [];

  const total = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Gestos de toque (Swipe Left / Swipe Right) no Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40; // pixels

    if (diff > minSwipeDistance) {
      // Deslizou para esquerda -> Próximo slide
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      // Deslizou para direita -> Slide anterior
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-play interval
  useEffect(() => {
    if (total <= 1 || isPaused || isModalOpen) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3800);

    return () => clearInterval(interval);
  }, [total, isPaused, isModalOpen, nextSlide]);

  // Atalhos de teclado quando modal estiver aberto
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, nextSlide, prevSlide]);

  if (total === 0) return null;

  const activeItem = items[currentIndex] ?? items[0];

  return (
    <>
      <div
        className="group/showcase relative w-full min-w-0 flex flex-col gap-2.5 touch-pan-y"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label={`Demonstração visual do projeto ${title}`}
      >
        {/* Barra Superior com Controles e Domínio */}
        <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light shrink-0">
              Telas do Sistema
            </span>
            <span className="text-secondary-text/50 dark:text-dark-text/50">·</span>
            <span className="font-mono text-[10px] sm:text-[11px] text-secondary-text dark:text-dark-text shrink-0">
              Tela 0{currentIndex + 1} de 0{total}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-[10px] text-secondary-text/80 dark:text-dark-text/80 hidden sm:inline">
              {extractDomain(demoUrl)}
            </span>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-light-surface hover:bg-light-card text-primary-text border border-border-light dark:bg-dark-surface dark:hover:bg-dark-card dark:text-light-text dark:border-border-dark shadow-xs transition-all cursor-pointer shrink-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-light"
              title="Ampliar visualização em tela cheia"
              aria-label="Ampliar tela do projeto em alta resolução"
            >
              <SearchIcon className="h-3 w-3 text-secondary-text dark:text-dark-text" />
              <span className="font-sans font-medium text-[11px]">Ampliar</span>
            </button>
          </div>
        </div>

        {/* Segmentos Clicáveis das Telas */}
        {total > 1 && (
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-0.5 min-w-0">
            {items.map((item, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={cn(
                    'px-2.5 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer truncate shrink-0',
                    isCurrent
                      ? 'bg-accent text-white dark:bg-accent-light dark:text-dark-bg font-bold shadow-xs'
                      : 'border border-border-light/70 bg-light-surface text-secondary-text hover:border-accent hover:text-primary-text dark:border-border-dark/70 dark:bg-dark-surface dark:text-dark-text dark:hover:text-light-text'
                  )}
                  aria-label={`Ir para tela: ${item.label}`}
                  aria-current={isCurrent}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Frame da Imagem com aspect ratio idêntico às telas reais (1920/909) para eliminar bordas pretas */}
        <div className="relative aspect-[1920/909] w-full min-w-0 overflow-hidden rounded-xl border border-border-light/80 bg-light-surface dark:border-border-dark/80 dark:bg-dark-surface shadow-xs">
          {items.map((item, idx) => (
            <div
              key={item.imageUrl}
              className={cn(
                'absolute inset-0 transition-opacity duration-300 ease-in-out pointer-events-none select-none',
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              )}
            >
              <Image
                src={item.imageUrl}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1536px) 60vw, 900px"
                className="object-cover object-top pointer-events-none select-none"
                quality={95}
                priority={idx === 0}
                draggable={false}
              />
            </div>
          ))}

          {/* Botões de Navegação Manual (< e >) */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-border-light/80 bg-white/90 text-primary-text opacity-90 sm:opacity-0 shadow-sm backdrop-blur-sm transition-all hover:bg-white group-hover/showcase:opacity-100 dark:border-border-dark/80 dark:bg-dark-surface/90 dark:text-light-text dark:hover:bg-dark-surface cursor-pointer text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-light active:scale-95"
                aria-label="Tela anterior"
              >
                <ChevronLeftIcon className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-border-light/80 bg-white/90 text-primary-text opacity-90 sm:opacity-0 shadow-sm backdrop-blur-sm transition-all hover:bg-white group-hover/showcase:opacity-100 dark:border-border-dark/80 dark:bg-dark-surface/90 dark:text-light-text dark:hover:bg-dark-surface cursor-pointer text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-light active:scale-95"
                aria-label="Próxima tela"
              >
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </button>
            </>
          )}
        </div>

        {/* Legenda Limpa da Tela Ativa */}
        <div className="flex items-center justify-between gap-2 text-xs min-w-0 pt-0.5">
          <p
            className="truncate text-secondary-text dark:text-dark-text text-[11px] sm:text-xs min-w-0 flex-1"
            title={`${activeItem.label}: ${activeItem.caption}`}
          >
            <span className="font-semibold text-primary-text dark:text-light-text">
              {activeItem.label}:
            </span>{' '}
            {activeItem.caption}
          </p>
        </div>
      </div>

      {/* Modal Lightbox de Alta Resolução em Tela Cheia (Com suporte a Swipe no Mobile) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg/95 p-2.5 sm:p-6 overflow-hidden backdrop-blur-md transition-opacity duration-200 transform-gpu"
          onClick={() => setIsModalOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização em alta resolução de ${title} - ${activeItem.label}`}
        >
          {/* Card Flutuante da Barra Superior do Modal */}
          <div
            className="w-full max-w-7xl 2xl:max-w-[1720px] mb-2 sm:mb-3 p-2.5 sm:p-3.5 bg-dark-card border border-border-dark rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-between gap-2 sm:gap-3 text-light-text shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="font-semibold text-xs sm:text-sm text-light-text tracking-tight">
                  {title}
                </span>
                <span className="text-dark-text">·</span>
                <span className="font-mono text-[10px] sm:text-xs font-medium text-accent-light bg-accent-subtle-dark px-2 py-0.5 rounded-full border border-accent-border-dark">
                  Tela 0{currentIndex + 1} de 0{total} · {activeItem.label}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-dark-text truncate mt-0.5 sm:mt-1">
                {activeItem.caption}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] font-mono text-dark-text hidden lg:inline">
                Navegue com as setas ou deslize na tela
              </span>
              <a
                href={activeItem.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-dark-surface hover:bg-dark-card active:scale-95 text-light-text text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer border border-border-dark shadow-sm min-h-[34px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
                title="Abrir imagem original em tamanho nativo (1920x909)"
              >
                <ExternalLinkIcon className="h-3.5 w-3.5 text-accent-light" />
                <span className="font-mono text-[11px] sm:text-xs hidden sm:inline">
                  Ver original
                </span>
              </a>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1.5 rounded-full bg-dark-surface hover:bg-dark-card active:scale-95 text-light-text text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer border border-border-dark shadow-sm min-h-[34px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
                aria-label="Fechar tela cheia"
              >
                <CloseIcon className="h-3.5 w-3.5" />
                <span className="font-mono text-[11px] sm:text-xs">Fechar</span>
              </button>
            </div>
          </div>

          {/* Imagem em Resolução Máxima com fidelidade nativa 100% (unoptimized) */}
          <div
            className="relative w-full max-w-7xl 2xl:max-w-[1720px] aspect-[1920/909] rounded-xl sm:rounded-2xl overflow-hidden bg-dark-bg border border-border-dark shadow-2xl flex items-center justify-center shrink-0 transform-gpu"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeItem.imageUrl}
              alt={activeItem.caption}
              fill
              unoptimized
              sizes="100vw"
              className="object-cover object-top"
              priority
              decoding="async"
            />

            {/* Botão Anterior no Modal com Touch Target Confortável (≥44px) */}
            {total > 1 && (
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 min-h-[44px] min-w-[44px] sm:h-14 sm:w-14 rounded-full bg-dark-card/90 hover:bg-dark-card active:scale-95 text-light-text text-lg sm:text-2xl flex items-center justify-center border border-border-dark backdrop-blur-sm transition-all cursor-pointer shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
                aria-label="Tela anterior"
                title="Tela anterior"
              >
                <ChevronLeftIcon className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
            )}

            {/* Botão Próximo no Modal com Touch Target Confortável (≥44px) */}
            {total > 1 && (
              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 min-h-[44px] min-w-[44px] sm:h-14 sm:w-14 rounded-full bg-dark-card/90 hover:bg-dark-card active:scale-95 text-light-text text-lg sm:text-2xl flex items-center justify-center border border-border-dark backdrop-blur-sm transition-all cursor-pointer shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
                aria-label="Próxima tela"
                title="Próxima tela"
              >
                <ChevronRightIcon className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
