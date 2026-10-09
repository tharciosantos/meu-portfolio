export type Capability = {
  title: string;
  description: string;
  technologies: string[];
  usedIn: string[];
};

export const capabilities: Capability[] = [
  {
    title: 'Frontend & UI',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    description: 'Interfaces modernas, componentes modulares, acessibilidade e responsividade.',
    usedIn: ['HelpFlow', 'ManutFlow', 'Crypto Dashboard'],
  },
  {
    title: 'Backend & Segurança',
    technologies: ['Node.js', 'APIs REST', 'NextAuth', 'Zod', 'Prisma'],
    description: 'Controle de acesso em camadas (RBAC), autenticação JWT e validação de esquemas.',
    usedIn: ['HelpFlow', 'ManutFlow'],
  },
  {
    title: 'Bancos de Dados & Infra',
    technologies: ['PostgreSQL', 'Supabase', 'Row Level Security', 'Vercel'],
    description: 'Modelagem relacional, isolamento de dados por tenant com RLS e deploy contínuo.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks'],
  },
  {
    title: 'Testes & Versionamento',
    technologies: ['Vitest', 'Git', 'GitHub', 'GitHub Actions'],
    description:
      'Testes automatizados (unitários e integração), integração contínua (CI) e fluxo Git.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks'],
  },
];
