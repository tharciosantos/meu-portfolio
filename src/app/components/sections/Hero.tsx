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
              <span
                className="h-2 w-2 rounded-full bg-accent dark:bg-accent-light"
                aria-hidden="true"
              />
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

          {/* Ações / CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'group')}
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
          <dl className="grid grid-cols-1 gap-4 border-t border-border-light pt-6 dark:border-border-dark sm:grid-cols-3">
            <div>
              <dt className="sr-only">Sistemas publicados</dt>
              <dd>
                <Metric value="2 Sistemas" label="ManutFlow e HelpFlow em produção" />
              </dd>
            </div>

            <div>
              <dt className="sr-only">Testes automatizados</dt>
              <dd>
                <Metric value="169 Testes" label="ManutFlow com Vitest em 17 arquivos" />
              </dd>
            </div>

            <div>
              <dt className="sr-only">Segurança</dt>
              <dd>
                <Metric value="Segurança" label="Isolamento em camadas (RBAC e Supabase RLS)" />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
