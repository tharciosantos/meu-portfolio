import { describe, it, expect } from 'vitest';
import { projects } from '../projects';

describe('projects', () => {
  it('deve ter pelo menos um projeto', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('deve ter exatamente dois projetos em destaque (ManutFlow e HelpFlow)', () => {
    const destaques = projects.filter((project) => project.kind === 'featured');
    expect(destaques).toHaveLength(2);
    expect(destaques[0].shortTitle).toBe('ManutFlow');
    expect(destaques[1].shortTitle).toBe('HelpFlow');
  });

  it('projetos em destaque devem apresentar autoria e evidências técnicas', () => {
    const destaques = projects.filter((project) => project.kind === 'featured');

    destaques.forEach((project) => {
      expect(project.responsibility).toBeTruthy();
      expect(project.challenge).toBeTruthy();
      expect(project.decision).toBeTruthy();
      expect(project.evidence?.length).toBeGreaterThan(0);
      expect(project.nextStep).toBeTruthy();
    });
  });

  it('ManutFlow deve apresentar evidências verificáveis de qualidade e segurança', () => {
    const manutflow = projects.find((p) => p.shortTitle === 'ManutFlow');

    expect(manutflow).toBeTruthy();
    expect(manutflow!.kind).toBe('featured');
    expect(manutflow).toHaveProperty('demoUrl');
    expect(manutflow).toHaveProperty('imageUrl');
    expect(manutflow!.evidence).toContain('169 testes automatizados em 17 arquivos');
    expect(manutflow!.evidence).toContain('Proteção em camadas com sessão, user_id e RLS');
  });

  it('HelpFlow deve evidenciar autenticação, autorização e testes', () => {
    const helpflow = projects.find((p) => p.shortTitle === 'HelpFlow');

    expect(helpflow).toBeTruthy();
    expect(helpflow!.evidence).toContain(
      'Autenticação por credenciais e GitHub, com recuperação de senha'
    );
    expect(helpflow!.evidence).toContain('82 testes Vitest + 15 fluxos E2E no Cypress');
  });

  it('deve manter os projetos secundários compactos e identificados', () => {
    const secundarios = projects.filter((project) => project.kind === 'secondary');

    expect(secundarios.map((project) => project.shortTitle)).toEqual([
      'DevLinks',
      'Lista de Mercado',
      'Crypto Dashboard',
    ]);
    secundarios.forEach((project) => {
      expect(project.imageUrl).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });

  it('todos os projetos devem ter título, GitHub e classificação', () => {
    projects.forEach((projeto) => {
      expect(projeto.title).toBeTruthy();
      expect(projeto.githubUrl).toBeTruthy();
      expect(['featured', 'secondary']).toContain(projeto.kind);
    });
  });

  it('projetos principais devem conter deep links de arquitetura válidos', () => {
    const manutflow = projects.find((p) => p.shortTitle === 'ManutFlow');
    expect(manutflow?.architectureLinks).toBeDefined();
    expect(manutflow!.architectureLinks!.length).toBeGreaterThan(0);
    expect(manutflow!.architectureLinks![0]).toHaveProperty('label');
    expect(manutflow!.architectureLinks![0].url).toContain('github.com');
  });
});
