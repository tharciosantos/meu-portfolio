'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { sectionIdFromHref, type NavLink } from '../../data/constants';
import { buttonVariants } from './ui/Button';
import { cn } from '@/lib/utils';
import { CloseIcon, MenuIcon } from './ui/Icons';

type MobileNavProps = {
  links: NavLink[];
  activeSection?: string;
};

const MOBILE_MENU_ID = 'mobile-navigation-menu';

export function MobileNav({ links, activeSection = '' }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);

    closeTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      triggerButtonRef.current?.focus({ preventScroll: true });
      closeTimeoutRef.current = null;
    }, 200);
  }, []);

  const handleOpen = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setIsOpen(true);
    setIsClosing(false);
  };

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
        return;
      }

      if (event.key !== 'Tab' || isClosing) return;

      const focusableElements = Array.from(
        menuPanelRef.current?.querySelectorAll<HTMLElement>('a[href]') ?? []
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      const focusIsOutsidePanel = !menuPanelRef.current?.contains(document.activeElement);
      const shouldWrapBackward = event.shiftKey && document.activeElement === firstElement;
      const shouldWrapForward = !event.shiftKey && document.activeElement === lastElement;

      if (focusIsOutsidePanel || shouldWrapBackward || shouldWrapForward) {
        event.preventDefault();
        (event.shiftKey ? lastElement : firstElement).focus();
      }
    };

    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleClose, isClosing, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const frame = window.requestAnimationFrame(() => {
      firstLinkRef.current?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <button
        ref={triggerButtonRef}
        onClick={isOpen ? handleClose : handleOpen}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls={MOBILE_MENU_ID}
        className={cn(
          'relative z-[60] inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all active:scale-95',
          isOpen
            ? 'border-accent bg-accent text-white hover:bg-accent-hover dark:border-accent-light dark:bg-accent-light dark:text-dark-bg dark:hover:bg-accent-light-hover'
            : 'border-border-light bg-light-surface text-primary-text hover:border-accent dark:border-border-dark dark:bg-dark-surface dark:text-light-text dark:hover:border-accent-light'
        )}
      >
        {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          style={{
            opacity: isClosing ? 0 : 1,
            transition: 'opacity 0.2s ease',
          }}
          onClick={handleClose}
          aria-hidden="true"
        />
      )}

      {isOpen && (
        <div
          ref={menuPanelRef}
          id={MOBILE_MENU_ID}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="fixed inset-x-4 top-16 z-50 rounded-card border border-border-light bg-light-card p-4 dark:border-border-dark dark:bg-dark-card md:hidden"
          style={{
            opacity: isClosing ? 0 : 1,
            transform: isClosing ? 'translateY(-8px)' : 'translateY(0)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        >
          <div className="flex flex-col items-stretch gap-1">
            {links.map((link) => {
              const isActive = activeSection === sectionIdFromHref(link.href);
              const isFirstLink = link.href === links[0]?.href;

              return (
                <Link
                  key={link.href}
                  ref={isFirstLink ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={handleClose}
                  className={
                    link.cta
                      ? cn(buttonVariants({ variant: 'primary', size: 'default' }), 'mt-2 w-full')
                      : cn(
                          'w-full rounded-full px-4 py-2.5 text-center text-sm font-medium transition-colors',
                          isActive
                            ? 'border border-border-light bg-light-surface font-semibold text-accent dark:border-border-dark dark:bg-dark-surface dark:text-accent-light'
                            : 'text-secondary-text hover:bg-light-surface hover:text-primary-text dark:text-dark-text dark:hover:bg-dark-surface dark:hover:text-light-text'
                        )
                  }
                  aria-current={isActive ? 'location' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
