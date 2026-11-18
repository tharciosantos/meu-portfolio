'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { type NavLink, navLinks, SECTION_IDS, sectionIdFromHref } from '@/data/constants';
import { buttonVariants } from './ui/Button';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNav } from './MobileNav';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { useLanguage } from '@/app/hooks/useLanguage';

const navLinkClass = (isActive: boolean) =>
  cn(
    'relative py-1 text-body transition-colors duration-150',
    isActive
      ? 'font-medium text-accent after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-accent'
      : 'text-text-secondary hover:text-text-primary'
  );

const NAV_SECTION_IDS = ['home', ...SECTION_IDS] as const;

export function NavbarClient() {
  const { t } = useLanguage();
  const navRef = useRef<HTMLElement | null>(null);
  const activeSection = useActiveSection(NAV_SECTION_IDS);
  const mainLinks = navLinks.filter((link) => link.cta !== true);
  const ctaLink = navLinks.find((link) => link.cta === true);
  const isCtaActive = ctaLink ? activeSection === sectionIdFromHref(ctaLink.href) : false;

  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    const syncNavbarHeight = () => {
      const height = Math.round(navEl.getBoundingClientRect().height);
      if (height > 0) {
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };

    syncNavbarHeight();

    if (typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver(syncNavbarHeight);
    observer.observe(navEl);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 min-h-[var(--navbar-height)] border-b border-border-default bg-page px-4 py-3 sm:px-6"
      role="navigation"
      aria-label={t.nav.ariaMain}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-4">
        <Link
          href="/"
          className="-my-2 inline-flex min-h-11 items-center font-mono text-body font-medium tracking-tight text-text-primary hover:text-accent"
          aria-label={t.nav.backHome}
        >
          <span>
            Tharcio<span className="text-text-secondary">.dev</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {mainLinks.map((link: NavLink) => {
            const isActive = activeSection === sectionIdFromHref(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClass(isActive)}
                aria-current={isActive ? 'location' : undefined}
              >
                {t.nav.links[link.href] ?? link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {ctaLink && (
            <Link
              href={ctaLink.href}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }),
                isCtaActive && 'border-accent-border bg-accent-subtle text-accent-on-subtle'
              )}
              aria-current={isCtaActive ? 'location' : undefined}
            >
              {t.nav.links[ctaLink.href] ?? ctaLink.label}
            </Link>
          )}
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <MobileNav links={navLinks} activeSection={activeSection} />
        </div>
      </div>
    </nav>
  );
}
