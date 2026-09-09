'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { type NavLink, navLinks, SECTION_IDS, sectionIdFromHref } from '@/data/constants';
import { buttonVariants } from './ui/Button';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from './ThemeSwitcher';
import { MobileNav } from './MobileNav';
import { useActiveSection } from '@/app/hooks/useActiveSection';

const navLinkClass = (isActive: boolean) =>
  cn(
    'relative text-sm font-medium transition-colors',
    isActive
      ? 'font-semibold text-accent dark:text-accent-light'
      : 'text-secondary-text hover:text-primary-text dark:text-dark-text dark:hover:text-light-text',
    isActive &&
      'after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent dark:after:bg-accent-light'
  );

export function NavbarClient() {
  const activeSection = useActiveSection(SECTION_IDS);
  const mainLinks = navLinks.filter((link) => link.cta !== true);
  const ctaLink = navLinks.find((link) => link.cta === true);
  const isCtaActive = ctaLink ? activeSection === sectionIdFromHref(ctaLink.href) : false;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 border-b px-4 sm:px-6 py-2.5 transition-colors duration-150',
        scrolled
          ? 'border-border-light bg-light-bg/95 backdrop-blur-xs dark:border-border-dark dark:bg-dark-bg/95'
          : 'border-transparent bg-light-bg dark:bg-dark-bg'
      )}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="mx-auto flex max-w-container items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 text-base font-bold tracking-tight text-primary-text transition-colors hover:text-accent dark:text-light-text dark:hover:text-accent-light"
          aria-label="Tharcio.dev, voltar para o início"
        >
          <span className="font-heading text-lg font-bold tracking-tight">
            Tharcio<span className="text-accent dark:text-accent-light">.dev</span>
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
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center space-x-3 md:flex">
          {ctaLink && (
            <Link
              href={ctaLink.href}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }),
                isCtaActive &&
                  'border-accent text-accent dark:border-accent-light dark:text-accent-light'
              )}
              aria-current={isCtaActive ? 'location' : undefined}
            >
              {ctaLink.label}
            </Link>
          )}
          <ThemeSwitcher />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeSwitcher />
          <MobileNav links={navLinks} activeSection={activeSection} />
        </div>
      </div>
    </nav>
  );
}
