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
import { useLanguage } from '@/app/hooks/useLanguage';

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
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const items =
    screens && screens.length > 0
      ? screens
      : defaultImageUrl
        ? [
            {
              label: t.showcase.overview,
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
    const minSwipeDistance = 40;

    if (diff > minSwipeDistance) {
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    if (total <= 1 || isPaused || isModalOpen) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3800);

    return () => clearInterval(interval);
  }, [total, isPaused, isModalOpen, nextSlide]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Tab') {
        const focusableElements = Array.from(
          modalRef.current?.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          ) ?? []
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!firstElement || !lastElement) return;

        const focusIsOutsideDialog = !modalRef.current?.contains(document.activeElement);
        const shouldWrapBackward = e.shiftKey && document.activeElement === firstElement;
        const shouldWrapForward = !e.shiftKey && document.activeElement === lastElement;

        if (focusIsOutsideDialog || shouldWrapBackward || shouldWrapForward) {
          e.preventDefault();
          (e.shiftKey ? lastElement : firstElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, nextSlide, prevSlide]);

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;

    const trigger = triggerRef.current;
    const frame = window.requestAnimationFrame(() => {
      modalRef.current?.focus({ preventScroll: true });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      trigger?.focus({ preventScroll: true });
    };
  }, [isModalOpen]);

  if (total === 0) return null;

  const activeItem = items[currentIndex] ?? items[0];

  return (
    <>
      <div
        className="group/showcase relative flex w-full min-w-0 touch-pan-y flex-col overflow-hidden rounded-card border border-border-default bg-surface-card shadow-card"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label={t.showcase.carouselAria.replace('{title}', title)}
      >
        {/* Barra Superior estilo janela de navegador */}
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-2 border-b border-border-default bg-surface-subtle px-3 py-2 sm:px-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <div aria-hidden="true" className="hidden items-center gap-1.5 sm:flex">
              <span className="h-2 w-2 rounded-full bg-border-hover" />
              <span className="h-2 w-2 rounded-full bg-border-hover" />
              <span className="h-2 w-2 rounded-full bg-border-hover" />
            </div>
            <div className="flex min-w-0 items-center gap-2 font-mono text-metadata">
              <span className="shrink-0 uppercase tracking-wider text-text-primary">
                {t.showcase.screensLabel}
              </span>
              <span className="text-text-secondary" aria-hidden="true">
                ·
              </span>
              <span className="shrink-0 text-text-secondary">
                {t.showcase.counter
                  .replace('{current}', String(currentIndex + 1))
                  .replace('{total}', String(total))}
              </span>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden font-mono text-metadata text-text-secondary sm:inline">
              {extractDomain(demoUrl)}
            </span>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-control border border-border-default bg-btn-outline px-2.5 font-mono text-metadata text-btn-outline-fg transition-colors duration-150 hover:border-border-hover hover:bg-btn-outline-hover active:bg-btn-outline-active sm:h-8"
              title={t.showcase.expandTitle}
              aria-label={t.showcase.expandAria}
            >
              <SearchIcon className="h-3.5 w-3.5 text-text-secondary" />
              <span>{t.showcase.expand}</span>
            </button>
          </div>
        </div>

        {/* Segmentos de telas */}
        {total > 1 && (
          <div className="flex min-w-0 items-center gap-1.5 overflow-x-auto border-b border-border-default bg-surface-card px-3 py-2 sm:px-4">
            {items.map((item, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={cn(
                    'h-11 shrink-0 cursor-pointer truncate rounded-tag border px-2.5 font-mono text-metadata transition-colors duration-150 sm:h-8',
                    isCurrent
                      ? 'border-accent-border bg-accent-subtle font-medium text-accent-on-subtle'
                      : 'border-border-default bg-transparent text-text-secondary hover:border-border-hover hover:text-text-primary'
                  )}
                  aria-label={t.showcase.goToScreen.replace('{label}', item.label)}
                  aria-current={isCurrent}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Frame da imagem */}
        <div className="relative aspect-[1920/909] w-full min-w-0 overflow-hidden bg-surface-subtle">
          {items.map((item, idx) => (
            <div
              key={item.imageUrl}
              className={cn(
                'pointer-events-none absolute inset-0 select-none transition-opacity duration-150 ease-out',
                idx === currentIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'
              )}
            >
              <Image
                src={item.imageUrl}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
                className="pointer-events-none select-none object-cover object-top"
                priority={idx === 0}
                draggable={false}
              />
            </div>
          ))}

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-2.5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-control border border-border-default bg-btn-outline text-btn-outline-fg opacity-95 transition-opacity duration-150 hover:border-border-hover hover:bg-btn-outline-hover active:bg-btn-outline-active sm:opacity-0 sm:group-hover/showcase:opacity-100 focus-visible:opacity-100"
                aria-label={t.showcase.prev}
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-2.5 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-control border border-border-default bg-btn-outline text-btn-outline-fg opacity-95 transition-opacity duration-150 hover:border-border-hover hover:bg-btn-outline-hover active:bg-btn-outline-active sm:opacity-0 sm:group-hover/showcase:opacity-100 focus-visible:opacity-100"
                aria-label={t.showcase.next}
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        {/* Legenda */}
        <div className="flex min-w-0 items-center justify-between gap-2 border-t border-border-default bg-surface-card px-3 py-2.5 sm:px-4">
          <p
            className="min-w-0 flex-1 truncate font-mono text-metadata text-text-secondary"
            title={`${activeItem.label}: ${activeItem.caption}`}
          >
            <span className="font-medium text-text-primary">{activeItem.label}:</span>{' '}
            {activeItem.caption}
          </p>
        </div>
      </div>

      {/* Lightbox Modal (tokens semânticos funcionais nos dois temas) */}
      {isModalOpen && (
        <div
          ref={modalRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-overlay p-3 transition-opacity duration-150 focus:outline-none sm:p-6"
          onClick={() => setIsModalOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={t.showcase.modalAria
            .replace('{title}', title)
            .replace('{label}', activeItem.label)}
        >
          <div
            className="mb-3 flex w-full max-w-6xl shrink-0 items-center justify-between gap-3 rounded-card border border-border-default bg-surface-card p-3 text-text-primary shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-heading text-body font-medium text-text-primary">
                  {title}
                </span>
                <span className="text-text-secondary" aria-hidden="true">
                  ·
                </span>
                <span className="rounded-tag border border-accent-border bg-accent-subtle px-2 py-0.5 font-mono text-metadata text-accent-on-subtle">
                  {t.showcase.counter
                    .replace('{current}', String(currentIndex + 1))
                    .replace('{total}', String(total))}{' '}
                  · {activeItem.label}
                </span>
              </div>
              <p className="mt-1 truncate font-mono text-metadata text-text-secondary">
                {activeItem.caption}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span className="hidden font-mono text-metadata text-text-secondary lg:inline">
                {t.showcase.navigateHint}
              </span>
              <a
                href={activeItem.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-control border border-border-default bg-btn-outline px-3 font-mono text-metadata text-btn-outline-fg transition-colors duration-150 hover:border-border-hover hover:bg-btn-outline-hover active:bg-btn-outline-active"
                title={t.showcase.viewOriginalTitle}
              >
                <ExternalLinkIcon className="h-3.5 w-3.5 text-accent" />
                <span className="hidden sm:inline">{t.showcase.viewOriginal}</span>
              </a>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-control border border-border-default bg-btn-outline px-3 font-mono text-metadata text-btn-outline-fg transition-colors duration-150 hover:border-border-hover hover:bg-btn-outline-hover active:bg-btn-outline-active"
                aria-label={t.showcase.closeFullscreen}
              >
                <CloseIcon className="h-3.5 w-3.5" />
                <span>{t.showcase.close}</span>
              </button>
            </div>
          </div>

          <div
            className="relative flex aspect-[1920/909] w-full max-w-6xl shrink-0 items-center justify-center overflow-hidden rounded-card border border-border-default bg-surface-card shadow-card"
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

            {total > 1 && (
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-control border border-border-default bg-btn-outline text-btn-outline-fg shadow-card transition-colors duration-150 hover:border-border-hover hover:bg-btn-outline-hover active:bg-btn-outline-active"
                aria-label={t.showcase.prev}
                title={t.showcase.prev}
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
            )}

            {total > 1 && (
              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-control border border-border-default bg-btn-outline text-btn-outline-fg shadow-card transition-colors duration-150 hover:border-border-hover hover:bg-btn-outline-hover active:bg-btn-outline-active"
                aria-label={t.showcase.next}
                title={t.showcase.next}
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
