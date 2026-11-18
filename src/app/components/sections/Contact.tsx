'use client';

import Section from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { buttonVariants } from '../ui/Button';
import { Pill } from '../ui/Pill';
import { EMAIL, redesSociais, RESUME_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/data/constants';
import { CopyEmailButton } from '../ui/CopyEmailButton';
import { ArrowRightIcon, MailIcon } from '../ui/Icons';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/app/hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();

  const socialMeta: Record<string, { description: string; action: string }> = {
    LinkedIn: {
      description: t.contact.linkedinDescription,
      action: t.contact.linkedinAction,
    },
    GitHub: {
      description: t.contact.githubDescription,
      action: t.contact.githubAction,
    },
  };

  return (
    <Section id="contato" spacing="editorial" surface="muted">
      <div className="mx-auto max-w-container">
        <SectionHeader index="05" title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:pl-[96px]">
          {/* Coluna Esquerda: Disponibilidade */}
          <div className="flex min-w-0 flex-col justify-between divide-y divide-border-default rounded-card border border-border-default bg-surface-card shadow-card lg:col-span-5">
            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2 font-mono text-metadata text-text-primary">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{t.contact.available}</span>
              </div>

              <h3 className="mt-4 font-heading text-subsection text-text-primary">
                {t.contact.readyTitle}
              </h3>
              <p className="mt-3 text-body text-text-secondary">{t.contact.interest}</p>
              <p className="mt-3 text-body text-text-secondary">{t.contact.focusText}</p>
            </div>

            <div className="p-5 sm:p-6">
              <ul className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Pill>{t.contact.immediateStart}</Pill>
                </li>
                <li>
                  <Pill>{t.contact.clt}</Pill>
                </li>
                <li>
                  <Pill>{t.contact.bhRemote}</Pill>
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna Direita: Canais com WhatsApp e E-mail em destaque */}
          <div className="flex min-w-0 flex-col divide-y divide-border-default rounded-card border border-border-default bg-surface-card shadow-card lg:col-span-7">
            <div className="grid grid-cols-1 divide-y divide-border-default bg-surface-subtle sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {/* 1. WhatsApp */}
              <div className="flex flex-col justify-between gap-4 p-5 sm:p-6">
                <div>
                  <span className="font-mono text-metadata text-text-secondary">WhatsApp</span>
                  <p className="mt-1 font-mono text-body font-medium text-text-primary">
                    {WHATSAPP_DISPLAY}
                  </p>
                  <p className="mt-1 font-mono text-metadata text-text-secondary">
                    {t.contact.whatsappNote.replace(/\s*·$/, '')}
                  </p>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.contact.whatsappCta} — ${t.contact.whatsappAria}`}
                  className={cn(
                    buttonVariants({ variant: 'primary', size: 'default' }),
                    'group w-full'
                  )}
                >
                  <span>{t.contact.whatsappCta}</span>
                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              {/* 2. E-mail */}
              <div className="flex min-w-0 flex-col justify-between gap-4 p-5 sm:p-6">
                <div className="min-w-0">
                  <span className="font-mono text-metadata text-text-secondary">
                    {t.contact.email}
                  </span>
                  <p className="mt-1 break-all font-mono text-body font-medium text-text-primary">
                    {EMAIL}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <CopyEmailButton />
                  <a
                    href={`mailto:${EMAIL}`}
                    className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
                  >
                    <MailIcon className="h-3.5 w-3.5" />
                    <span>{t.contact.open}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Canais complementares */}
            <div className="divide-y divide-border-default px-5 sm:px-6">
              {redesSociais.map((link) => {
                const meta = socialMeta[link.label];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-w-0 items-center justify-between gap-4 py-4 transition-colors duration-150 hover:text-accent"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block font-heading text-body font-medium text-text-primary transition-colors duration-150 group-hover:text-accent">
                        {link.label}
                      </span>
                      <span className="block text-metadata text-text-secondary">
                        {meta.description}
                      </span>
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-metadata font-medium text-accent group-hover:text-accent-hover">
                      <span className="hidden sm:inline">{meta.action}</span>
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                );
              })}

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center justify-between gap-4 py-4 transition-colors duration-150 hover:text-accent"
              >
                <span className="min-w-0 flex-1">
                  <span className="block font-heading text-body font-medium text-text-primary transition-colors duration-150 group-hover:text-accent">
                    {t.contact.resume}
                  </span>
                  <span className="block text-metadata text-text-secondary">
                    {t.contact.resumeDesc}
                  </span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-metadata font-medium text-accent group-hover:text-accent-hover">
                  <span className="hidden sm:inline">{t.contact.open}</span>
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
