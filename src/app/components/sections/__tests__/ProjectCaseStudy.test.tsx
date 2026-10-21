import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCaseStudy } from '../ProjectCaseStudy';

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
      screen.getByText('169 testes Vitest em 14 arquivos + 15 fluxos E2E no Cypress')
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
});
