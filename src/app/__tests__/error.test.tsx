import { describe, expect, it, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
 * Carrega a página de erro com o módulo recarregado, para que o store de idioma
 * (estado de módulo) seja inicializado a partir do localStorage deste teste.
 */
async function renderError({
  language,
  reset = vi.fn(),
}: {
  language?: string;
  reset?: () => void;
}) {
  mockLocalStorage(language);
  vi.resetModules();

  const { default: FreshErrorPage } = await import('../error');
  const { LanguageProvider: FreshProvider } = await import('../components/LanguageProvider');
  const error = new Error('falha simulada');

  render(
    <FreshProvider>
      <FreshErrorPage error={error} reset={reset} />
    </FreshProvider>
  );

  return { reset, error };
}

describe('Error (página de erro)', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('exibe os textos em português por padrão', async () => {
    await renderError({});

    expect(screen.getByText('Algo deu errado')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Erro inesperado' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Tentar novamente' })).toBeInTheDocument();
  });

  it('exibe os textos em inglês quando o idioma salvo é en', async () => {
    await renderError({ language: 'en' });

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Unexpected error' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Try again' })).toBeInTheDocument();
  });

  it('chama reset ao clicar em tentar novamente', async () => {
    const user = userEvent.setup();
    const { reset } = await renderError({});

    await user.click(screen.getByRole('button', { name: 'Tentar novamente' }));

    expect(reset).toHaveBeenCalledTimes(1);
  });

  it('registra o erro no console', async () => {
    const { error } = await renderError({});

    expect(console.error).toHaveBeenCalledWith(error);
  });
});
