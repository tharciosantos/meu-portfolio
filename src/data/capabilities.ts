import type { Language } from './i18n/types';

export type Capability = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  usedIn: string[];
};

export const capabilities: Capability[] = [
  {
    id: 'frontend-ui',
    title: 'Frontend & UI',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    description: 'Interfaces modernas, componentes modulares, acessibilidade e responsividade.',
    usedIn: ['HelpFlow', 'ManutFlow', 'Crypto Dashboard'],
  },
  {
    id: 'backend-seguranca',
    title: 'Backend & Segurança',
    technologies: ['Node.js', 'Express', 'APIs REST', 'NextAuth', 'JWT', 'Zod', 'Prisma'],
    description:
      'Controle de acesso em camadas (RBAC/ownership), autenticação JWT e validação de esquemas.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks'],
  },
  {
    id: 'bancos-dados-infra',
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
    id: 'testes-versionamento',
    title: 'Testes & Versionamento',
    technologies: ['Vitest', 'Cypress', 'Git', 'GitHub', 'GitHub Actions'],
    description:
      'Testes automatizados (unitários, integração e E2E), integração contínua (CI) e fluxo Git.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks'],
  },
];

export const capabilitiesEn: Capability[] = [
  {
    id: 'frontend-ui',
    title: 'Frontend & UI',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    description: 'Modern interfaces, modular components, accessibility, and responsiveness.',
    usedIn: ['HelpFlow', 'ManutFlow', 'Crypto Dashboard'],
  },
  {
    id: 'backend-seguranca',
    title: 'Backend & Security',
    technologies: ['Node.js', 'Express', 'REST APIs', 'NextAuth', 'JWT', 'Zod', 'Prisma'],
    description:
      'Layered access control (RBAC/ownership), JWT authentication, and schema validation.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks'],
  },
  {
    id: 'bancos-dados-infra',
    title: 'Databases & Infra',
    technologies: [
      'PostgreSQL',
      'Supabase',
      'Row Level Security',
      'MongoDB',
      'Cloudinary',
      'Vercel',
    ],
    description:
      'Relational and document modeling, tenant data isolation with RLS/ownership, media via CDN, and continuous deploy.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks'],
  },
  {
    id: 'testes-versionamento',
    title: 'Testing & Versioning',
    technologies: ['Vitest', 'Cypress', 'Git', 'GitHub', 'GitHub Actions'],
    description:
      'Automated tests (unit, integration, and E2E), continuous integration (CI), and Git workflow.',
    usedIn: ['HelpFlow', 'ManutFlow', 'DevLinks'],
  },
];

export function getCapabilities(language: Language): Capability[] {
  return language === 'en' ? capabilitiesEn : capabilities;
}
