'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { sectionIdFromHref, type NavLink } from '../../data/constants';
import { buttonVariants } from './ui/Button';
import { cn } from '@/lib/utils';
import { ArrowRightIcon, CloseIcon, MenuIcon } from './ui/Icons';
import { useLanguage } from '@/app/hooks/useLanguage';

type MobileNavProps = {
  links: NavLink[];
  activeSection?: string;
};

const MOBILE_MENU_ID = 'mobile-navigation-menu';

export function MobileNav({ links, activeSection = '' }: MobileNavProps) {
  const { t } = useLanguage();
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
    }, 180);
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
        type="button"
        onClick={isOpen ? handleClose : handleOpen}
        aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
        aria-expanded={isOpen}
        aria-controls={MOBILE_MENU_ID}
        className={cn(
          'relative z-[60] inline-flex h-8 w-8 items-center justify-center rounded-control border transition-colors duration-150',
          isOpen
            ? 'border-accent-border bg-accent-subtle text-accent-on-subtle'
            : 'border-border-default bg-btn-outline text-btn-outline-fg hover:border-border-hover hover:bg-btn-outline-hover active:bg-btn-outline-active'
        )}
      >
        {isOpen ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-overlay md:hidden"
          style={{
            opacity: isClosing ? 0 : 1,
            transition: 'opacity 180ms ease',
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
          aria-label={t.nav.ariaMenu}
          className="fixed inset-x-4 top-16 z-50 rounded-card border border-border-default bg-surface-card p-4 shadow-card md:hidden"
          style={{
            opacity: isClosing ? 0 : 1,
            transition: 'opacity 180ms ease',
          }}
        >
          <div className="flex flex-col items-stretch divide-y divide-border-default">
            {links.map((link) => {
              const isActive = activeSection === sectionIdFromHref(link.href);
              const isFirstLink = link.href === links[0]?.href;
              const label = t.nav.links[link.href] ?? link.label;

              return (
                <Link
                  key={link.href}
                  ref={isFirstLink ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={handleClose}
                  className={
                    link.cta
                      ? cn(buttonVariants({ variant: 'primary', size: 'default' }), 'mt-3 w-full')
                      : cn(
                          'w-full py-3 text-left text-body transition-colors duration-150',
                          isActive
                            ? 'font-medium text-accent'
                            : 'text-text-secondary hover:text-text-primary'
                        )
                  }
                  aria-current={isActive ? 'location' : undefined}
                >
                  {label}
                  {link.cta && <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
