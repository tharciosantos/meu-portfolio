'use client';

import { GITHUB_URL, LINKEDIN_URL, EMAIL, navLinks } from '@/data/constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './ui/Icons';
import { useLanguage } from '@/app/hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border-default bg-page py-12" role="contentinfo">
      <div className="mx-auto flex max-w-container flex-col gap-8 px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between">
          <div>
            <p className="font-heading text-body font-medium text-text-primary">
              {t.footer.tagline}
            </p>
            <p className="mt-1 text-metadata text-text-secondary">{t.footer.taglineSub}</p>
          </div>

          <nav
            aria-label={t.nav.footerNav}
            className="-my-1 flex flex-wrap items-center gap-x-5 gap-y-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center font-mono text-metadata text-text-secondary transition-colors duration-150 hover:text-accent"
              >
                {t.nav.links[link.href] ?? link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-border-default pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-metadata text-text-secondary [&>a]:inline-flex [&>a]:min-h-11 [&>a]:items-center">
            <span>© {new Date().getFullYear()} Tharcio Santos</span>
            <span aria-hidden="true">·</span>
            <span>{t.footer.location}</span>
            <span aria-hidden="true">·</span>
            <a
              href={`${GITHUB_URL}/meu-portfolio`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover hover:underline"
            >
              {t.footer.viewCode}
            </a>
            <span aria-hidden="true">·</span>
            <span>{t.footer.builtWith}</span>
          </div>

          <div className="-my-1 flex items-center gap-1">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.ariaGithub}
              className="inline-flex h-11 w-11 items-center justify-center rounded-control text-text-secondary transition-colors duration-150 hover:bg-btn-ghost-hover hover:text-text-primary"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.ariaLinkedin}
              className="inline-flex h-11 w-11 items-center justify-center rounded-control text-text-secondary transition-colors duration-150 hover:bg-btn-ghost-hover hover:text-text-primary"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              aria-label={t.footer.ariaEmail}
              className="inline-flex h-11 w-11 items-center justify-center rounded-control text-text-secondary transition-colors duration-150 hover:bg-btn-ghost-hover hover:text-text-primary"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
