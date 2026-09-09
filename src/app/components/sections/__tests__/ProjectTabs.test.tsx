import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectTabs } from '../ProjectTabs';
import type { Project } from '@/data/projects';

const mockProjects: Project[] = [
  {
    title: 'HelpFlow — Sistema de Help Desk',
    shortTitle: 'HelpFlow',
    description: 'Sistema completo com RBAC e testes',
    githubUrl: 'https://github.com/test/helpflow',
    demoUrl: 'https://helpflow.vercel.app',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    kind: 'featured',
    screens: [
      { label: 'Início', imageUrl: '/images/helpflow/home.webp', caption: 'Home' },
      { label: 'Login', imageUrl: '/images/helpflow/login.webp', caption: 'Login' },
    ],
  },
  {
    title: 'ManutFlow — Gestão de Manutenção',
    shortTitle: 'ManutFlow',
    description: 'Sistema de manutenção com 163 testes',
    githubUrl: 'https://github.com/test/manutflow',
    demoUrl: 'https://manutflow.vercel.app',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    kind: 'featured',
    screens: [
      { label: 'Dashboard', imageUrl: '/images/manutflow/dash.webp', caption: 'Dashboard' },
    ],
  },
  {
    title: 'DevLinks — Agregador de Links',
    shortTitle: 'DevLinks',
    description: 'Perfil personalizável com links',
    githubUrl: 'https://github.com/test/devlinks',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    kind: 'secondary',
  },
];

describe('ProjectTabs', () => {
  it('renderiza a lista de abas com índices e abre a primeira aba por padrão', () => {
    render(<ProjectTabs projects={mockProjects} />);

    expect(
      screen.getByText(/Selecione um projeto para ver telas, arquitetura e regras de negócio:/i)
    ).toBeInTheDocument();
    expect(screen.getByText('3 projetos disponíveis')).toBeInTheDocument();

    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(3);
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByRole('heading', { level: 3, name: 'HelpFlow' })).toBeInTheDocument();
  });

  it('permite alternar entre abas através de clique', () => {
    render(<ProjectTabs projects={mockProjects} />);

    const manutFlowTab = screen.getByRole('tab', { name: /ManutFlow/i });
    fireEvent.click(manutFlowTab);

    expect(manutFlowTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('heading', { level: 3, name: 'ManutFlow' })).toBeInTheDocument();
  });

  it('suporta navegação por setas do teclado (WAI-ARIA)', () => {
    render(<ProjectTabs projects={mockProjects} />);

    const firstTab = screen.getAllByRole('tab')[0];
    firstTab.focus();

    // Navega para a próxima aba com ArrowRight
    fireEvent.keyDown(firstTab, { key: 'ArrowRight' });
    expect(screen.getByRole('tab', { name: /ManutFlow/i })).toHaveAttribute(
      'aria-selected',
      'true'
    );

    // Navega para a última aba com ArrowRight
    const secondTab = screen.getAllByRole('tab')[1];
    fireEvent.keyDown(secondTab, { key: 'ArrowRight' });
    expect(screen.getByRole('tab', { name: /DevLinks/i })).toHaveAttribute('aria-selected', 'true');

    // Retorna para a primeira aba com Home
    const thirdTab = screen.getAllByRole('tab')[2];
    fireEvent.keyDown(thirdTab, { key: 'Home' });
    expect(screen.getByRole('tab', { name: /HelpFlow/i })).toHaveAttribute('aria-selected', 'true');

    // Vai para a última aba com End
    fireEvent.keyDown(firstTab, { key: 'End' });
    expect(screen.getByRole('tab', { name: /DevLinks/i })).toHaveAttribute('aria-selected', 'true');

    // Retorna para a anterior com ArrowLeft
    fireEvent.keyDown(thirdTab, { key: 'ArrowLeft' });
    expect(screen.getByRole('tab', { name: /ManutFlow/i })).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });

  it('renderiza os deep links de arquitetura do GitHub quando disponíveis', () => {
    const projectsWithLinks: Project[] = [
      {
        ...mockProjects[0],
        architectureLinks: [
          {
            label: 'Segurança RLS e Proxy',
            url: 'https://github.com/test/helpflow#rls',
            badge: 'Supabase RLS',
          },
        ],
      },
    ];

    render(<ProjectTabs projects={projectsWithLinks} />);

    expect(screen.getByText('Arquitetura no GitHub')).toBeInTheDocument();
    expect(screen.getByText('Segurança RLS e Proxy')).toBeInTheDocument();
    expect(screen.getByText('[Supabase RLS]')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Segurança RLS e Proxy/i })).toHaveAttribute(
      'href',
      'https://github.com/test/helpflow#rls'
    );
  });

  it('renderiza o conteúdo de engenharia minimalista de forma coerente ao alternar entre projetos', () => {
    const projectsWithDetails: Project[] = [
      {
        ...mockProjects[0],
        responsibility: 'Arquitetura de autenticação e permissões de chamados.',
        decision: 'Separar papéis com RBAC e validar schemas com Zod.',
        evidence: ['Validação Zod de formulários', 'Autenticação NextAuth com JWT'],
      },
      {
        ...mockProjects[1],
        responsibility: 'Modelagem de equipamentos e ordens industriais.',
        decision: 'Proteção multi-tenant com Supabase RLS no banco.',
        evidence: ['169 testes no Vitest', 'Proteção com Row Level Security'],
      },
    ];

    render(<ProjectTabs projects={projectsWithDetails} />);

    // Projeto inicial: HelpFlow
    expect(screen.getByText('Minha responsabilidade')).toBeInTheDocument();
    expect(
      screen.getByText('Arquitetura de autenticação e permissões de chamados.')
    ).toBeInTheDocument();
    expect(screen.getByText('Decisão técnica')).toBeInTheDocument();
    expect(
      screen.getByText('Separar papéis com RBAC e validar schemas com Zod.')
    ).toBeInTheDocument();
    expect(screen.getByText('Validação Zod de formulários')).toBeInTheDocument();

    // Alterna para ManutFlow
    const manutTab = screen.getByRole('tab', { name: /ManutFlow/i });
    fireEvent.click(manutTab);

    expect(screen.getByText('Modelagem de equipamentos e ordens industriais.')).toBeInTheDocument();
    expect(
      screen.getByText('Proteção multi-tenant com Supabase RLS no banco.')
    ).toBeInTheDocument();
    expect(screen.getByText('169 testes no Vitest')).toBeInTheDocument();
  });
});
