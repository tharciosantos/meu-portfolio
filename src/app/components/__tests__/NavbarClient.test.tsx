import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { NavbarClient } from '../NavbarClient';

const { useActiveSectionMock } = vi.hoisted(() => ({
  useActiveSectionMock: vi.fn(),
}));

vi.mock('@/app/hooks/useActiveSection', () => ({
  useActiveSection: useActiveSectionMock,
}));

describe('NavbarClient', () => {
  beforeEach(() => {
    useActiveSectionMock.mockReset();
  });

  it('indica o link da seção ativa como localização atual', () => {
    useActiveSectionMock.mockReturnValue('processo');

    render(<NavbarClient />);

    expect(screen.getByRole('link', { name: 'Processo' })).toHaveAttribute(
      'aria-current',
      'location'
    );
    expect(screen.getByRole('link', { name: 'Projetos' })).not.toHaveAttribute('aria-current');
  });

  it('aplica a mesma semântica ao CTA de contato quando ativo', () => {
    useActiveSectionMock.mockReturnValue('contato');

    render(<NavbarClient />);

    expect(screen.getByRole('link', { name: 'Contato' })).toHaveAttribute(
      'aria-current',
      'location'
    );
  });

  it('não marca Projetos nem nenhum item como ativo quando a Hero (home) está no topo', () => {
    useActiveSectionMock.mockReturnValue('home');

    render(<NavbarClient />);

    for (const name of ['Projetos', 'Processo', 'Habilidades', 'Sobre', 'Contato']) {
      const link = screen.getByRole('link', { name });
      expect(link).not.toHaveAttribute('aria-current');
      expect(link.className).not.toContain('text-accent');
    }
  });
});
