import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button, buttonVariants } from '../Button';
import { Pill } from '../Pill';
import { BrowserFrame, extractHostname } from '../BrowserFrame';

describe('Button e Pill (tokens semânticos e twMerge)', () => {
  it('preserva classes de cor de fundo, cor de texto e tamanho em todas as variantes do Button', () => {
    const primaryLg = buttonVariants({ variant: 'primary', size: 'lg' });
    expect(primaryLg).toContain('bg-btn-primary');
    expect(primaryLg).toContain('text-btn-primary-fg');
    expect(primaryLg).toContain('text-body');

    const outlineDefault = buttonVariants({ variant: 'outline', size: 'default' });
    expect(outlineDefault).toContain('bg-btn-outline');
    expect(outlineDefault).toContain('text-btn-outline-fg');
    expect(outlineDefault).toContain('text-body');

    const ghostSm = buttonVariants({ variant: 'ghost', size: 'sm' });
    expect(ghostSm).toContain('text-btn-ghost-fg');
    expect(ghostSm).toContain('text-metadata');
  });

  it('renderiza botão desabilitado mantendo classes de acessibilidade e contraste', () => {
    render(
      <Button variant="primary" disabled>
        Indisponível
      </Button>
    );

    const btn = screen.getByRole('button', { name: 'Indisponível' });
    expect(btn).toBeDisabled();
    expect(btn.className).toContain('disabled:opacity-50');
    expect(btn.className).toContain('text-btn-primary-fg');
  });

  it('preserva text-metadata e text-text-secondary simultaneamente no Pill', () => {
    render(<Pill>TypeScript</Pill>);

    const pill = screen.getByText('TypeScript');
    expect(pill.className).toContain('font-mono');
    expect(pill.className).toContain('text-metadata');
    expect(pill.className).toContain('text-text-secondary');
  });

  it('renderiza BrowserFrame com domínio extraído corretamente', () => {
    expect(extractHostname('https://www.manutflow.vercel.app/login')).toBe('manutflow.vercel.app');
    expect(extractHostname('not a valid url')).toBe('not a valid url');
    expect(extractHostname(undefined)).toBeUndefined();

    render(
      <BrowserFrame domain="manutflow.vercel.app">
        <div>Preview</div>
      </BrowserFrame>
    );

    expect(screen.getByText('manutflow.vercel.app')).toBeInTheDocument();
    expect(screen.getByText('Preview')).toBeInTheDocument();
  });
});
