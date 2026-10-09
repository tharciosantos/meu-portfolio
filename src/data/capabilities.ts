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
    technologies: ['Node.js', 'Express', 'APIs REST', 'NextAuth', 'JWT', 'Zod', 'Prisma'],
    description:
      'Controle de acesso em camadas (RBAC/ownership), autenticação JWT e validação de esquemas.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks'],
  },
  {
    title: 'Bancos de Dados & Infra',
    technologies: [
      'PostgreSQL',
      'Supabase',
      'Row Level Security',
      'MongoDB',
      'Cloudinary',
      'Vercel',
    ],
    description:
      'Modelagem relacional e documental, isolamento de dados por tenant com RLS/ownership, mídia via CDN e deploy contínuo.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks'],
  },
  {
    title: 'Testes & Versionamento',
    technologies: ['Vitest', 'Cypress', 'Git', 'GitHub', 'GitHub Actions'],
    description:
      'Testes automatizados (unitários, integração e E2E), integração contínua (CI) e fluxo Git.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks'],
  },
];
