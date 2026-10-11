import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCaseStudy } from '../ProjectCaseStudy';

describe('ProjectCaseStudy', () => {
  it('renderiza o case study completo de um projeto', () => {
    render(<ProjectCaseStudy slug="manutflow" />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'ManutFlow: Controle de Manutenção' })
    ).toBeInTheDocument();
    expect(screen.getByText('Minha responsabilidade')).toBeInTheDocument();
    expect(screen.getByText('Decisão técnica')).toBeInTheDocument();
    expect(screen.getByText('Implementado')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Voltar para projetos/ })).toHaveAttribute(
      'href',
      '/#projetos'
    );
  });

  it('não renderiza nada para um slug inexistente', () => {
    const { container } = render(<ProjectCaseStudy slug="slug-inexistente" />);
    expect(container).toBeEmptyDOMElement();
  });
});
