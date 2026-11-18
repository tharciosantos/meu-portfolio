import { describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectCaseStudy } from '../ProjectCaseStudy';
import Projects from '../Projects';
import { LanguageProvider } from '../../LanguageProvider';
import { LanguageSwitcher } from '../../LanguageSwitcher';
import ProjectPage, { generateStaticParams } from '@/app/projetos/[slug]/page';
import { getProjects } from '@/data/projects';

describe('ProjectCaseStudy', () => {
  it('renderiza o case study de um projeto principal', () => {
    render(<ProjectCaseStudy slug="manutflow" />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'ManutFlow: Controle de Manutenção' })
    ).toBeInTheDocument();
    expect(screen.getByText('O desafio')).toBeInTheDocument();
    expect(screen.getByText('Simulador Industrial')).toBeInTheDocument();
    expect(screen.getByText('Minha responsabilidade')).toBeInTheDocument();
    expect(screen.getByText('Decisão técnica')).toBeInTheDocument();
    expect(screen.getByText('Implementado')).toBeInTheDocument();
    expect(
      screen.getByText('Dashboard operacional com prazos, indicadores e ordens urgentes')
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Voltar para projetos/ })).toHaveAttribute(
      'href',
      '/#projetos'
    );
  });

  it('exibe a evidência de testes do HelpFlow', () => {
    render(<ProjectCaseStudy slug="helpflow" />);

    expect(
      screen.getByText('169 testes Vitest em 14 arquivos + 20 fluxos E2E no Cypress')
    ).toBeInTheDocument();
  });

  it('não renderiza nada para um projeto secundário', () => {
    const { container } = render(<ProjectCaseStudy slug="devlinks" />);
    expect(container).toBeEmptyDOMElement();
  });

  it('não renderiza nada para um slug inexistente', () => {
    const { container } = render(<ProjectCaseStudy slug="slug-inexistente" />);
    expect(container).toBeEmptyDOMElement();
  });

  it('garante que cada href de case study nos cards da Home resolve como rota válida em PT e EN', async () => {
    const store = new Map<string, string>();
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => void store.set(key, value),
        removeItem: (key: string) => void store.delete(key),
        clear: () => store.clear(),
      },
      configurable: true,
    });

    const user = userEvent.setup();
    const validSlugs = new Set(generateStaticParams().map((p) => p.slug));

    for (const lang of ['pt', 'en'] as const) {
      const expectedFeatured = getProjects(lang).filter((p) => p.kind === 'featured');

      render(
        <LanguageProvider>
          <LanguageSwitcher />
          <Projects />
        </LanguageProvider>
      );

      await user.click(screen.getByRole('button', { name: lang.toUpperCase() }));

      const ctaLabel = lang === 'en' ? /View case study/i : /Ver case study/i;
      const caseLinks = screen.getAllByRole('link', { name: ctaLabel });
      expect(caseLinks).toHaveLength(expectedFeatured.length);

      const hrefs = caseLinks.map((link) => link.getAttribute('href'));
      cleanup();

      for (const href of hrefs) {
        expect(href).toMatch(/^\/projetos\/[a-z0-9-]+$/);
        const slug = href!.replace('/projetos/', '');
        expect(validSlugs.has(slug)).toBe(true);

        const matchedData = expectedFeatured.find((p) => p.slug === slug);
        expect(matchedData).toBeDefined();

        const pageElement = await ProjectPage({ params: Promise.resolve({ slug }) });
        render(<LanguageProvider>{pageElement}</LanguageProvider>);

        expect(
          screen.getByRole('heading', { level: 1, name: matchedData!.title })
        ).toBeInTheDocument();
        cleanup();
      }
    }

    // Restaura idioma padrão para testes subsequentes
    render(
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>
    );
    await user.click(screen.getByRole('button', { name: 'PT' }));
    cleanup();
  });
});
