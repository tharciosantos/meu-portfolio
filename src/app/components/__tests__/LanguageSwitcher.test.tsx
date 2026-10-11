import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from '../LanguageProvider';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useLanguage } from '@/app/hooks/useLanguage';

function DemoHeadline() {
  const { t } = useLanguage();
  return <p data-testid="headline">{t.hero.headline}</p>;
}

function mockLocalStorage() {
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
}

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    mockLocalStorage();
  });

  it('alterna entre português e inglês, atualiza o idioma do documento e persiste', async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <DemoHeadline />
        <LanguageSwitcher />
      </LanguageProvider>
    );

    // Padrão: português
    expect(screen.getByTestId('headline')).toHaveTextContent('Desenvolvo sistemas completos');
    expect(screen.getByRole('button', { name: 'PT' })).toHaveAttribute('aria-pressed', 'true');

    // Alterna para inglês
    await user.click(screen.getByRole('button', { name: 'EN' }));
    expect(screen.getByTestId('headline')).toHaveTextContent('I build complete systems');
    expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute('aria-pressed', 'true');
    expect(document.documentElement.lang).toBe('en');
    expect(window.localStorage.getItem('tharcio-language')).toBe('en');

    // Volta para português
    await user.click(screen.getByRole('button', { name: 'PT' }));
    expect(screen.getByTestId('headline')).toHaveTextContent('Desenvolvo sistemas completos');
    expect(document.documentElement.lang).toBe('pt-BR');
  });
});
