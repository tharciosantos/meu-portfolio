import type { Language } from './i18n/types';

export type ProjectScreen = {
  label: string;
  imageUrl: string;
  caption: string;
};

export type ArchitectureLink = {
  label: string;
  url: string;
  badge?: string;
};

export type Project = {
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  screens?: ProjectScreen[];
  githubUrl: string;
  demoUrl?: string;
  demoLabel?: string;
  demoNote?: string;
  metrics?: string[];
  tags: string[];
  kind: 'featured' | 'secondary';
  status: 'production' | 'demo';
  outcome?: string;
  technicalHighlight?: string;
  responsibility?: string;
  challenge?: string;
  decision?: string;
  evidence?: string[];
  architectureLinks?: ArchitectureLink[];
  nextStep?: string;
};

export const projects: Project[] = [
  {
    title: 'ManutFlow: Controle de Manutenção',
    shortTitle: 'ManutFlow',
    slug: 'manutflow',
    status: 'production',
    description:
      'Sistema completo para cadastro de equipamentos, abertura de ordens de serviço e dashboard com indicadores de status e prioridade.',
    responsibility:
      'Modelagem e implementação do sistema de equipamentos, ordens de serviço e indicadores operacionais. A experiência prática com suporte e manutenção de TI ajudou a aproximar o produto de rotinas reais de equipamentos e manutenção.',
    challenge:
      'Garantir que cada usuário acesse apenas seus próprios equipamentos e ordens de manutenção.',
    decision:
      'Aplicar proteção em três camadas com proxy, getUser() na API e Row Level Security no banco.',
    technicalHighlight:
      'Segurança em três camadas (Proxy, API getUser e Supabase RLS), modelagem PostgreSQL e suíte de 207 testes unitários no Vitest.',
    evidence: [
      '207 testes automatizados em 19 arquivos',
      'CRUD completo com busca, filtros, paginação e histórico',
      'Proteção em camadas com sessão, user_id e RLS',
      'Acesso de demonstração com 1-clique e dados pré-carregados',
      'Dashboard operacional com prazos, indicadores e ordens urgentes',
    ],
    demoNote:
      'Inclui simulador interativo de ordens e acesso demo com 1-clique com equipamentos pré-cadastrados.',
    metrics: ['207 testes automatizados', 'Simulador Industrial', 'Supabase RLS'],
    architectureLinks: [
      {
        label: 'Segurança RLS e Proxy',
        url: 'https://github.com/tharciosantos/manutflow/blob/main/src/proxy.ts',
        badge: 'Supabase RLS',
      },
      {
        label: '207 Testes Automatizados (19 Suítes)',
        url: 'https://github.com/tharciosantos/manutflow/tree/main/src',
        badge: 'Vitest',
      },
    ],
    nextStep: 'Ampliar os testes automatizados e evoluir os indicadores operacionais do dashboard.',
    imageUrl: '/images/manutflow-screenshot.webp',
    imageAlt: 'Dashboard do ManutFlow com indicadores de equipamentos e ordens de serviço',
    screens: [
      {
        label: 'Início',
        imageUrl: '/images/manutflow/preview-landing.webp',
        caption: 'Página inicial com simulador interativo de ordens',
      },
      {
        label: 'Login',
        imageUrl: '/images/manutflow/preview-login.webp',
        caption: 'Acesso instantâneo de demonstração com 1-clique',
      },
      {
        label: 'Dashboard',
        imageUrl: '/images/manutflow/preview-dashboard.webp',
        caption: 'Painel operacional com métricas de SLA e ordens urgentes',
      },
      {
        label: 'Equipamentos',
        imageUrl: '/images/manutflow/preview-equipamentos.webp',
        caption: 'Inventário de equipamentos com busca, filtros e histórico',
      },
      {
        label: 'Ordens OS',
        imageUrl: '/images/manutflow/preview-ordens.webp',
        caption: 'Listagem e filtros de ordens por prioridade e prazo',
      },
    ],
    githubUrl: 'https://github.com/tharciosantos/manutflow',
    demoUrl: 'https://manutflow.vercel.app',
    demoLabel: 'Acessar sistema',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    kind: 'featured',
  },
  {
    title: 'HelpFlow: Sistema de Help Desk',
    shortTitle: 'HelpFlow',
    slug: 'helpflow',
    status: 'production',
    description:
      'Sistema full stack para abertura, acompanhamento e gerenciamento de chamados internos.',
    responsibility:
      'Desenvolvimento completo do produto, da interface e das regras de negócio à persistência e ao deploy.',
    challenge:
      'Organizar autenticação, permissões, regras de negócio e histórico sem comprometer a clareza do fluxo.',
    decision:
      'Separar acessos com roles CLIENT/AGENT e centralizar validação com Zod e persistência com Prisma.',
    technicalHighlight:
      'Autorização RBAC (Client/Agent) com NextAuth e JWT, validações centralizadas com Zod e persistência relacional com Prisma ORM.',
    evidence: [
      'Autenticação por credenciais e GitHub, com recuperação de senha',
      'Controle de acesso por perfil e propriedade de chamados',
      'Acesso de demonstração com 1-clique (visões Client e Agent)',
      'CRUD paginado de tickets com status e prioridades',
      '169 testes Vitest em 14 arquivos + 15 fluxos E2E no Cypress',
    ],
    demoNote:
      'Inclui simulador interativo na tela inicial e acesso demo com 1-clique para Solicitante e Agente.',
    metrics: ['Simulador Interativo', 'RBAC (Client/Agent)', 'NextAuth + JWT'],
    architectureLinks: [
      {
        label: 'Modelagem Prisma & PostgreSQL',
        url: 'https://github.com/tharciosantos/helpflow/blob/main/prisma/schema.prisma',
        badge: 'Prisma Schema',
      },
      {
        label: 'Autorização RBAC de Tickets',
        url: 'https://github.com/tharciosantos/helpflow/blob/main/src/lib/ticketAuthorization.js',
        badge: 'RBAC (Client/Agent)',
      },
      {
        label: 'Validações Zod & Schemas',
        url: 'https://github.com/tharciosantos/helpflow/blob/main/src/lib/schemas.js',
        badge: 'Zod',
      },
    ],
    nextStep: 'Ampliar os testes de integração e adicionar observabilidade aos fluxos críticos.',
    imageUrl: '/images/helpflow-screenshot.webp',
    imageAlt:
      'Interface do HelpFlow mostrando painel de gestão de chamados com lista de tickets, status e prioridade',
    screens: [
      {
        label: 'Início',
        imageUrl: '/images/helpflow/home-demonstracao.webp',
        caption: 'Página inicial com demonstração e simulador de chamados',
      },
      {
        label: 'Login',
        imageUrl: '/images/helpflow/login.webp',
        caption: 'Acesso instantâneo para Solicitante e Suporte',
      },
      {
        label: 'Solicitante',
        imageUrl: '/images/helpflow/dashboard-solicitante.webp',
        caption: 'Painel do cliente para abertura e acompanhamento de tickets',
      },
      {
        label: 'Agente',
        imageUrl: '/images/helpflow/dashboard-agent.webp',
        caption: 'Painel do suporte com triagem e fila de chamados',
      },
      {
        label: 'Detalhes',
        imageUrl: '/images/helpflow/detalhe-ticket-agent.webp',
        caption: 'Ficha detalhada do chamado e histórico de mensagens',
      },
    ],
    githubUrl: 'https://github.com/tharciosantos/helpflow',
    demoUrl: 'https://helpflow.vercel.app/',
    demoLabel: 'Acessar aplicação',
    tags: ['Next.js', 'React', 'JavaScript', 'Prisma', 'Supabase', 'NextAuth'],
    kind: 'featured',
  },
  {
    title: 'DevLinks: Agregador de Links',
    shortTitle: 'DevLinks',
    slug: 'devlinks',
    status: 'demo',
    description:
      'Plataforma full-stack de links estilo Linktree com frontend e API em repositórios separados, autenticação JWT, upload de avatar via Cloudinary e perfil público.',
    outcome: 'Upload · sincronização · testes E2E',
    imageUrl: '/images/screenshot-devlinks.webp',
    imageAlt: 'Dashboard do DevLinks com gerenciamento de links e perfil público',
    githubUrl: 'https://github.com/tharciosantos/devlinks-web',
    demoUrl: 'https://devlinks-web-api.vercel.app/',
    demoLabel: 'Acessar aplicação',
    tags: ['React', 'TanStack Query', 'Express', 'MongoDB', 'Cloudinary', 'Cypress'],
    kind: 'secondary',
  },
  {
    title: 'Lista de Mercado: PWA',
    shortTitle: 'Lista de Mercado',
    slug: 'lista-de-mercado',
    status: 'demo',
    description:
      'Aplicação web progressiva para organizar compras por corredores, calcular o progresso da compra em tempo real, auto-categorizar produtos e compartilhar no WhatsApp.',
    outcome: 'PWA · 220 itens · 100% offline',
    imageUrl: '/images/lista-mercado-screenshot.webp',
    imageAlt: 'Interface do Lista de Mercado com lista de produtos e setores',
    githubUrl: 'https://github.com/tharciosantos/lista-mercado',
    demoUrl: 'https://lista-mercado-sage.vercel.app/',
    demoLabel: 'Acessar PWA',
    tags: ['React', 'Vite', 'PWA', 'Tailwind CSS', 'Offline-First'],
    kind: 'secondary',
  },
  {
    title: 'Crypto Dashboard',
    shortTitle: 'Crypto Dashboard',
    slug: 'crypto-dashboard',
    status: 'demo',
    description:
      'Painel financeiro para consulta de cotações, variações de 24h, indicadores de mercado e páginas dinâmicas detalhadas por ativo.',
    outcome: 'FinTech · CoinGecko API · rotas dinâmicas',
    imageUrl: '/images/screenshot-crypto.webp',
    imageAlt: 'Dashboard de criptomoedas com cotações, KPIs e filtros',
    githubUrl: 'https://github.com/tharciosantos/crypto-dashboard',
    demoUrl: 'https://crypto-dashboard-five-sandy.vercel.app/',
    demoLabel: 'Acessar dashboard',
    tags: ['Next.js', 'React', 'CoinGecko API', 'Tailwind CSS', 'FinTech'],
    kind: 'secondary',
  },
];

export const projectsEn: Project[] = [
  {
    title: 'ManutFlow: Maintenance Control',
    shortTitle: 'ManutFlow',
    slug: 'manutflow',
    status: 'production',
    description:
      'A complete system for registering equipment, opening service orders, and a dashboard with status and priority indicators.',
    responsibility:
      'Modeling and implementation of the equipment system, service orders, and operational indicators. Hands-on experience with IT support and maintenance helped bring the product closer to real equipment and maintenance routines.',
    challenge: 'Ensuring each user accesses only their own equipment and maintenance orders.',
    decision:
      'Applying three-layer protection with a proxy, getUser() in the API, and Row Level Security in the database.',
    technicalHighlight:
      'Three-layer security (Proxy, API getUser, and Supabase RLS), PostgreSQL modeling, and a suite of 207 unit tests in Vitest.',
    evidence: [
      '207 automated tests in 19 files',
      'Full CRUD with search, filters, pagination, and history',
      'Layered protection with session, user_id, and RLS',
      '1-click demo access with preloaded data',
      'Operational dashboard with deadlines, indicators, and urgent orders',
    ],
    demoNote:
      'Includes an interactive order simulator and 1-click demo access with pre-registered equipment.',
    metrics: ['207 automated tests', 'Industrial Simulator', 'Supabase RLS'],
    architectureLinks: [
      {
        label: 'RLS and Proxy Security',
        url: 'https://github.com/tharciosantos/manutflow/blob/main/src/proxy.ts',
        badge: 'Supabase RLS',
      },
      {
        label: '207 Automated Tests (19 Suites)',
        url: 'https://github.com/tharciosantos/manutflow/tree/main/src',
        badge: 'Vitest',
      },
    ],
    nextStep: 'Expand automated tests and evolve the dashboard operational indicators.',
    imageUrl: '/images/manutflow-screenshot.webp',
    imageAlt: 'ManutFlow dashboard with equipment and service order indicators',
    screens: [
      {
        label: 'Home',
        imageUrl: '/images/manutflow/preview-landing.webp',
        caption: 'Home page with interactive order simulator',
      },
      {
        label: 'Login',
        imageUrl: '/images/manutflow/preview-login.webp',
        caption: 'Instant 1-click demo access',
      },
      {
        label: 'Dashboard',
        imageUrl: '/images/manutflow/preview-dashboard.webp',
        caption: 'Operational panel with SLA metrics and urgent orders',
      },
      {
        label: 'Equipment',
        imageUrl: '/images/manutflow/preview-equipamentos.webp',
        caption: 'Equipment inventory with search, filters, and history',
      },
      {
        label: 'Work Orders',
        imageUrl: '/images/manutflow/preview-ordens.webp',
        caption: 'Listing and filters of orders by priority and deadline',
      },
    ],
    githubUrl: 'https://github.com/tharciosantos/manutflow',
    demoUrl: 'https://manutflow.vercel.app',
    demoLabel: 'Open system',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    kind: 'featured',
  },
  {
    title: 'HelpFlow: Help Desk System',
    shortTitle: 'HelpFlow',
    slug: 'helpflow',
    status: 'production',
    description: 'Full-stack system for opening, tracking, and managing internal tickets.',
    responsibility:
      'Complete product development, from interface and business rules to persistence and deploy.',
    challenge:
      'Organizing authentication, permissions, business rules, and history without compromising flow clarity.',
    decision:
      'Separating access with CLIENT/AGENT roles and centralizing validation with Zod and persistence with Prisma.',
    technicalHighlight:
      'RBAC authorization (Client/Agent) with NextAuth and JWT, centralized validation with Zod, and relational persistence with Prisma ORM.',
    evidence: [
      'Credential and GitHub authentication, with password recovery',
      'Access control by profile and ticket ownership',
      '1-click demo access (Client and Agent views)',
      'Paginated ticket CRUD with status and priorities',
      '169 Vitest tests in 14 files + 15 Cypress E2E flows',
    ],
    demoNote:
      'Includes an interactive simulator on the home screen and 1-click demo access for Requester and Agent.',
    metrics: ['Interactive Simulator', 'RBAC (Client/Agent)', 'NextAuth + JWT'],
    architectureLinks: [
      {
        label: 'Prisma & PostgreSQL Modeling',
        url: 'https://github.com/tharciosantos/helpflow/blob/main/prisma/schema.prisma',
        badge: 'Prisma Schema',
      },
      {
        label: 'Ticket RBAC Authorization',
        url: 'https://github.com/tharciosantos/helpflow/blob/main/src/lib/ticketAuthorization.js',
        badge: 'RBAC (Client/Agent)',
      },
      {
        label: 'Zod Validations & Schemas',
        url: 'https://github.com/tharciosantos/helpflow/blob/main/src/lib/schemas.js',
        badge: 'Zod',
      },
    ],
    nextStep: 'Expand integration tests and add observability to critical flows.',
    imageUrl: '/images/helpflow-screenshot.webp',
    imageAlt:
      'HelpFlow interface showing a ticket management panel with ticket list, status, and priority',
    screens: [
      {
        label: 'Home',
        imageUrl: '/images/helpflow/home-demonstracao.webp',
        caption: 'Home page with demo and ticket simulator',
      },
      {
        label: 'Login',
        imageUrl: '/images/helpflow/login.webp',
        caption: 'Instant access for Requester and Support',
      },
      {
        label: 'Requester',
        imageUrl: '/images/helpflow/dashboard-solicitante.webp',
        caption: 'Client panel for opening and tracking tickets',
      },
      {
        label: 'Agent',
        imageUrl: '/images/helpflow/dashboard-agent.webp',
        caption: 'Support panel with triage and ticket queue',
      },
      {
        label: 'Details',
        imageUrl: '/images/helpflow/detalhe-ticket-agent.webp',
        caption: 'Detailed ticket record and message history',
      },
    ],
    githubUrl: 'https://github.com/tharciosantos/helpflow',
    demoUrl: 'https://helpflow.vercel.app/',
    demoLabel: 'Open app',
    tags: ['Next.js', 'React', 'JavaScript', 'Prisma', 'Supabase', 'NextAuth'],
    kind: 'featured',
  },
  {
    title: 'DevLinks: Link Aggregator',
    shortTitle: 'DevLinks',
    slug: 'devlinks',
    status: 'demo',
    description:
      'Full-stack Linktree-style links platform with frontend and API in separate repositories, JWT authentication, avatar upload via Cloudinary, and a public profile.',
    outcome: 'Upload · sync · E2E tests',
    imageUrl: '/images/screenshot-devlinks.webp',
    imageAlt: 'DevLinks dashboard with link management and public profile',
    githubUrl: 'https://github.com/tharciosantos/devlinks-web',
    demoUrl: 'https://devlinks-web-api.vercel.app/',
    demoLabel: 'Open app',
    tags: ['React', 'TanStack Query', 'Express', 'MongoDB', 'Cloudinary', 'Cypress'],
    kind: 'secondary',
  },
  {
    title: 'Grocery List: PWA',
    shortTitle: 'Grocery List',
    slug: 'lista-de-mercado',
    status: 'demo',
    description:
      'Progressive web app for organizing shopping by aisles, calculating purchase progress in real time, auto-categorizing products, and sharing on WhatsApp.',
    outcome: 'PWA · 220 items · 100% offline',
    imageUrl: '/images/lista-mercado-screenshot.webp',
    imageAlt: 'Grocery List interface with product list and sectors',
    githubUrl: 'https://github.com/tharciosantos/lista-mercado',
    demoUrl: 'https://lista-mercado-sage.vercel.app/',
    demoLabel: 'Open PWA',
    tags: ['React', 'Vite', 'PWA', 'Tailwind CSS', 'Offline-First'],
    kind: 'secondary',
  },
  {
    title: 'Crypto Dashboard',
    shortTitle: 'Crypto Dashboard',
    slug: 'crypto-dashboard',
    status: 'demo',
    description:
      'Financial panel for checking quotes, 24h changes, market indicators, and dynamic detail pages per asset.',
    outcome: 'FinTech · CoinGecko API · dynamic routes',
    imageUrl: '/images/screenshot-crypto.webp',
    imageAlt: 'Cryptocurrency dashboard with quotes, KPIs, and filters',
    githubUrl: 'https://github.com/tharciosantos/crypto-dashboard',
    demoUrl: 'https://crypto-dashboard-five-sandy.vercel.app/',
    demoLabel: 'Open dashboard',
    tags: ['Next.js', 'React', 'CoinGecko API', 'Tailwind CSS', 'FinTech'],
    kind: 'secondary',
  },
];

export function getProjects(language: Language): Project[] {
  return language === 'en' ? projectsEn : projects;
}
