import { buttonVariants } from '../ui/Button';
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '@/data/constants';
import { cn } from '@/lib/utils';
import Section from '../ui/Section';
import { Metric } from '../ui/Metric';
import { ArrowRightIcon, DocumentIcon, GithubIcon, LinkedinIcon } from '../ui/Icons';

const Hero = () => {
  return (
    <Section
      id="home"
      spacing="hero"
      className="flex min-h-[calc(100vh-3.5rem)] flex-col justify-between border-b border-border-light dark:border-border-dark"
    >
      <div className="mx-auto flex w-full max-w-container flex-1 flex-col justify-between">
        {/* Bloco Central Superior */}
        <div className="my-auto py-6 sm:py-8">
          {/* Eyebrow & Status */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-metadata uppercase tracking-wider text-accent dark:text-accent-light">
              <span
                className="h-2 w-2 rounded-full bg-accent dark:bg-accent-light"
                aria-hidden="true"
              />
              <span>Software Developer · Brazil</span>
            </div>

            <span className="text-secondary-text dark:text-dark-text" aria-hidden="true">
              /
            </span>

            <div className="inline-flex items-center gap-2 text-metadata text-secondary-text dark:text-dark-text">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              <span>Disponível para Estágio / Júnior · Full Stack</span>
            </div>
          </div>

          {/* Headline Principal */}
          <h1 className="mt-6 max-w-3xl font-heading text-hero text-primary-text dark:text-light-text">
            Desenvolvo sistemas completos, da interface aos dados.
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-prose-wide text-body-lg text-secondary-text dark:text-dark-text">
            Com projetos publicados e experiência técnica autônoma, construo aplicações web focadas
            em usabilidade, controle de acesso seguro e cobertura consistente de testes.
          </p>

          {/* Assinatura Técnica / Code Snippet */}
          <div className="mt-6 max-w-md">
            <div className="flex items-center justify-between rounded-card border border-border-light bg-light-surface px-4 py-2.5 font-mono text-xs text-secondary-text dark:border-border-dark dark:bg-dark-surface dark:text-dark-text">
              <div className="flex items-center gap-2 truncate">
                <span className="text-accent dark:text-accent-light font-bold">$</span>
                <span className="truncate">
                  git clone https://github.com/tharciosantos/helpflow
                </span>
              </div>
              <span className="ml-3 shrink-0 rounded-full border border-border-light bg-light-bg px-2 py-0.5 text-[10px] uppercase dark:border-border-dark dark:bg-dark-bg">
                main
              </span>
            </div>
          </div>

          {/* Ações / CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className={cn(
                buttonVariants({ variant: 'primary', size: 'lg' }),
                'group text-base px-8 py-3 h-12'
              )}
            >
              Explorar projetos
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'group')}
            >
              <DocumentIcon className="h-4 w-4" />
              Baixar currículo
            </a>

            <div className="flex items-center gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Tharcio Santos"
                className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Tharcio Santos"
                className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Métricas Rápidas Ancoradas no Rodapé do Hero */}
        <div className="w-full pt-4 pb-2">
          <div className="grid grid-cols-1 gap-4 border-t border-border-light pt-6 dark:border-border-dark sm:grid-cols-3">
            <div className="rounded-card border border-border-light bg-light-surface p-4 dark:border-border-dark dark:bg-dark-surface">
              <Metric value="2 Sistemas" label="Publicados com demo em 1 clique e simulador" />
            </div>

            <div className="rounded-card border border-border-light bg-light-surface p-4 dark:border-border-dark dark:bg-dark-surface">
              <Metric value="250+ Testes" label="Automatizados cobrindo fluxos críticos e APIs" />
            </div>

            <div className="rounded-card border border-border-light bg-light-surface p-4 dark:border-border-dark dark:bg-dark-surface">
              <Metric value="Segurança" label="Isolamento em camadas (RBAC e Supabase RLS)" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
