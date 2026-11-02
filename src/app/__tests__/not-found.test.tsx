import { describe, expect, it, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

function mockLocalStorage(initialLanguage?: string) {
  const store = new Map<string, string>();
  if (initialLanguage) {
    store.set('tharcio-language', initialLanguage);
  }

  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => void store.set(key, value),
      removeItem: (key: string) => void store.delete(key),
      clear: () => store.clear(),
    },
    configurable: true,
  });
}

/**
 * Carrega a 404 com o módulo recarregado, para que o store de idioma (estado de
 * módulo) seja inicializado a partir do localStorage deste teste.
 */
async function renderNotFound(language?: string) {
  mockLocalStorage(language);
  vi.resetModules();

  const { default: FreshNotFound } = await import('../not-found');
  const { LanguageProvider: FreshProvider } = await import('../components/LanguageProvider');

  render(
    <FreshProvider>
      <FreshNotFound />
    </FreshProvider>
  );
}

describe('NotFound (404)', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('exibe os textos em português por padrão', async () => {
    await renderNotFound();

    expect(screen.getByRole('heading', { name: 'Página não encontrada' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Voltar para a home' })).toHaveAttribute('href', '/');
  });

  it('exibe os textos em inglês quando o idioma salvo é en', async () => {
    await renderNotFound('en');

    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute('href', '/');
  });

  it('trata o código 404 como elemento decorativo', async () => {
    await renderNotFound('en');

    // O código continua visível, mas não é heading: leitores de tela anunciam
    // "Page not found" como título, não "404".
    expect(screen.getByText('404')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.queryByRole('heading', { name: '404' })).not.toBeInTheDocument();
  });

  it('expõe um único título principal', async () => {
    await renderNotFound('en');

    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveAccessibleName('Page not found');
  });
});
