import { GITHUB_URL, LINKEDIN_URL, EMAIL, navLinks } from '@/data/constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './ui/Icons';

const Footer = () => {
  return (
    <footer
      className="border-t-2 border-accent/20 py-12 transition-colors dark:border-accent-light/20"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-container flex-col gap-8 px-4 sm:px-6">
        {/* Linha Superior: Marca e Links Rápidos */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-sm font-semibold text-primary-text dark:text-light-text">
              Tharcio Santos, Desenvolvedor Full Stack Júnior
            </p>
            <p className="mt-1 text-xs text-secondary-text dark:text-dark-text">
              Projetos reais, aprendizado contínuo e construção de sistemas web.
            </p>
          </div>

          {/* Navegação Rápida */}
          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-secondary-text hover:text-accent dark:text-dark-text dark:hover:text-accent-light transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divisor */}
        <div className="border-t border-border-light/60 dark:border-border-dark/60" />

        {/* Linha Inferior: Copyright, Localização, Código e Redes */}
        <div className="flex flex-col gap-4 text-xs text-secondary-text dark:text-dark-text sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px]">
            <span>© {new Date().getFullYear()} Tharcio Santos</span>
            <span>·</span>
            <span>Caeté / BH · Brasil</span>
            <span>·</span>
            <a
              href={`${GITHUB_URL}/meu-portfolio`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline dark:text-accent-light"
            >
              Ver código
            </a>
            <span>·</span>
            <span>Built with Next.js · TypeScript</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Tharcio Santos"
              className="text-secondary-text transition-colors hover:text-accent dark:text-dark-text dark:hover:text-accent-light"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Tharcio Santos"
              className="text-secondary-text transition-colors hover:text-accent dark:text-dark-text dark:hover:text-accent-light"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              aria-label="Enviar e-mail para Tharcio Santos"
              className="text-secondary-text transition-colors hover:text-accent dark:text-dark-text dark:hover:text-accent-light"
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
