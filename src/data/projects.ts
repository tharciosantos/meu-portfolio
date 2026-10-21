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
      'Segurança em três camadas (Proxy, API getUser e Supabase RLS), modelagem PostgreSQL e suíte de 184 testes unitários no Vitest.',
    evidence: [
      '184 testes automatizados',
      'CRUD completo com busca, filtros, paginação e histórico',
      'Proteção em camadas com sessão, user_id e RLS',
      'Acesso de demonstração com 1-clique e dados pré-carregados',
      'Dashboard operacional com prazos, indicadores e ordens urgentes',
    ],
    demoNote:
      'Inclui simulador interativo de ordens e acesso demo com 1-clique com equipamentos pré-cadastrados.',
    metrics: ['184 testes automatizados', 'Simulador Industrial', 'Supabase RLS'],
    architectureLinks: [
      {
        label: 'Segurança RLS e Proxy',
        url: 'https://github.com/tharciosantos/manutflow/blob/main/src/proxy.ts',
        badge: 'Supabase RLS',
      },
      {
        label: '184 Testes por Feature (Domínio)',
        url: 'https://github.com/tharciosantos/manutflow/tree/main/src/features',
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
      '169 testes Vitest + 15 fluxos E2E no Cypress',
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
    technicalHighlight:
      'API Express com JWT, MongoDB e upload no Cloudinary; frontend React + Vite com TanStack Query; E2E com Cypress no fluxo de login e links.',
    responsibility:
      'Desenvolvimento full-stack em dois repositórios: SPA React (estado assíncrono e mídia) e API Express (auth, ownership e uploads).',
    decision:
      'Separar frontend e backend (SPA + API REST) com TanStack Query no client, JWT + ownership no servidor, Cloudinary para mídia e Cypress no fluxo de login e links.',
    evidence: [
      'E2E no Cypress cobrindo login e gerenciamento de links',
      'Upload de avatar via Cloudinary na API Express (MongoDB + JWT)',
      'Cache e sincronização com TanStack Query + testes de integração na API (Vitest)',
      'Perfil público leve e compartilhável para bio de redes',
    ],
    outcome: 'Upload · sincronização · testes E2E',
    metrics: ['Cloudinary + MongoDB', 'TanStack Query', 'E2E Cypress (login/links)'],
    architectureLinks: [
      {
        label: 'Testes E2E Cypress',
        url: 'https://github.com/tharciosantos/devlinks-web/tree/main/cypress',
        badge: 'Cypress',
      },
      {
        label: 'API Express + Cloudinary',
        url: 'https://github.com/tharciosantos/devlinks-api',
        badge: 'Backend',
      },
      {
        label: 'API Client & Services',
        url: 'https://github.com/tharciosantos/devlinks-web/blob/main/src/services/api.js',
        badge: 'API Client',
      },
    ],
    demoNote:
      'Inclui botão de acesso rápido de demonstração com credenciais e links pré-carregados.',
    imageUrl: '/images/screenshot-devlinks.webp',
    imageAlt: 'Dashboard do DevLinks com gerenciamento de links e perfil público',
    screens: [
      {
        label: 'Login',
        imageUrl: '/images/devlinks/tela-login.webp',
        caption: 'Acesso seguro e botão de demonstração com 1-clique',
      },
      {
        label: 'Cadastro',
        imageUrl: '/images/devlinks/tela-cadastro.webp',
        caption: 'Criação de conta simples e rápida para novos usuários',
      },
      {
        label: 'Dashboard',
        imageUrl: '/images/devlinks/tela-dashboard.webp',
        caption: 'Gerenciamento de links, especialidade e upload de avatar',
      },
      {
        label: 'Público',
        imageUrl: '/images/devlinks/tela-perfil-publico.webp',
        caption: 'Página de perfil pública compartilhável para redes e bio',
      },
    ],
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
    technicalHighlight:
      'PWA offline-first com Service Worker, banco local de 220 itens em 11 setores, auto-categorização inteligente e exportação formatada para o WhatsApp.',
    responsibility:
      'Arquitetura e desenvolvimento de PWA offline-first com catálogo pré-carregado e gerador de listas para mensageria.',
    decision:
      'Empregar Service Workers para cache estático total e estrutura de dados local indexada por setores para operar sem conexão.',
    evidence: [
      'PWA instalável com Service Worker e cache-first ativo',
      'Catálogo de 220 itens distribuídos em 11 setores de mercado',
      'Operação 100% autônoma e offline sem requisições a servidor',
      'Exportação estruturada e formatada para o WhatsApp',
    ],
    outcome: 'PWA · 220 itens · 100% offline',
    metrics: ['PWA Offline Ready', '220 Itens Mapeados', '11 Setores'],
    architectureLinks: [
      {
        label: 'PWA Offline & Service Worker',
        url: 'https://github.com/tharciosantos/lista-mercado/blob/main/vite.config.js',
        badge: 'Offline-First',
      },
    ],
    demoNote:
      'Instalável no smartphone com funcionamento offline e exportação estruturada para o WhatsApp.',
    imageUrl: '/images/lista-mercado/tela-lista-pendentes.webp',
    imageAlt: 'Interface do Lista de Mercado com lista de produtos e setores',
    screens: [
      {
        label: 'Lista Vazia',
        imageUrl: '/images/lista-mercado/tela-lista-vazia.webp',
        caption: 'Tela inicial com atalho para carregar Lista Mestra de 220 itens',
      },
      {
        label: 'Pendentes',
        imageUrl: '/images/lista-mercado/tela-lista-pendentes.webp',
        caption: 'Itens organizados por setores e auto-categorização inteligente',
      },
      {
        label: 'Carrinho',
        imageUrl: '/images/lista-mercado/tela-carrinho.webp',
        caption: 'Acompanhamento de progresso e conferência de itens no carrinho',
      },
    ],
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
    technicalHighlight:
      'Consumo da CoinGecko API no Next.js App Router, rotas dinâmicas /coin/[id], blindagem com dados de contingência e filtros client-side.',
    responsibility:
      'Construção de interface analítica de mercado financeiro com consumo de API externa e tratamento de contingência.',
    decision:
      'Implementar camada de contingência (fallback local) contra rate limit (HTTP 429) e roteamento dinâmico no App Router.',
    evidence: [
      'Consumo dinâmico da CoinGecko API com cotações e KPIs',
      'Mecanismo de fallback automático para tolerância a falhas e rate limits',
      'Rotas dinâmicas /coin/[id] com estatísticas de mercado',
      'Filtros rápidos por maiores altas, baixas e volume de 24h',
    ],
    outcome: 'FinTech · CoinGecko API · rotas dinâmicas',
    metrics: ['CoinGecko API Live', 'Next.js App Router', 'FinTech UI'],
    architectureLinks: [
      {
        label: 'Rotas App Router',
        url: 'https://github.com/tharciosantos/crypto-dashboard/tree/main/src/app',
        badge: 'App Router',
      },
      {
        label: 'Dados de Contingência (Fallback)',
        url: 'https://github.com/tharciosantos/crypto-dashboard/blob/main/src/data/fallbackCoins.js',
        badge: 'Resiliência',
      },
    ],
    demoNote:
      'Monitoramento em tempo real com KPIs de mercado, filtros por altas/baixas e estatísticas detalhadas.',
    imageUrl: '/images/crypto-dashboard/tela-mercado.webp',
    imageAlt: 'Dashboard de criptomoedas com cotações, KPIs e filtros',
    screens: [
      {
        label: 'Mercado',
        imageUrl: '/images/crypto-dashboard/tela-mercado.webp',
        caption: 'Painel geral com KPIs de mercado e cotações em tempo real',
      },
      {
        label: 'Altas',
        imageUrl: '/images/crypto-dashboard/tela-maiores-altas.webp',
        caption: 'Filtro dinâmico por maiores altas e variação percentual de 24h',
      },
      {
        label: 'Detalhes',
        imageUrl: '/images/crypto-dashboard/tela-detalhes-ativo.webp',
        caption: 'Página individual do ativo com faixa de preço 24h e estatísticas',
      },
    ],
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
      'Three-layer security (Proxy, API getUser, and Supabase RLS), PostgreSQL modeling, and a suite of 184 unit tests in Vitest.',
    evidence: [
      '184 automated tests',
      'Full CRUD with search, filters, pagination, and history',
      'Layered protection with session, user_id, and RLS',
      '1-click demo access with preloaded data',
      'Operational dashboard with deadlines, indicators, and urgent orders',
    ],
    demoNote:
      'Includes an interactive order simulator and 1-click demo access with pre-registered equipment.',
    metrics: ['184 automated tests', 'Industrial Simulator', 'Supabase RLS'],
    architectureLinks: [
      {
        label: 'RLS and Proxy Security',
        url: 'https://github.com/tharciosantos/manutflow/blob/main/src/proxy.ts',
        badge: 'Supabase RLS',
      },
      {
        label: '184 Tests by Feature (Domain)',
        url: 'https://github.com/tharciosantos/manutflow/tree/main/src/features',
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
      '169 Vitest tests + 15 E2E flows in Cypress',
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
    technicalHighlight:
      'Express API with JWT, MongoDB, and Cloudinary upload; React + Vite frontend with TanStack Query; Cypress E2E on the login and links flow.',
    responsibility:
      'Full-stack development across two repositories: React SPA (async state and media) and Express API (auth, ownership, and uploads).',
    decision:
      'Separating frontend and backend (SPA + REST API) with TanStack Query on the client, JWT + ownership on the server, Cloudinary for media, and Cypress on the login and links flow.',
    evidence: [
      'Cypress E2E covering login and link management',
      'Avatar upload via Cloudinary in the Express API (MongoDB + JWT)',
      'Caching and sync with TanStack Query + API integration tests (Vitest)',
      'Lightweight, shareable public profile for social bios',
    ],
    outcome: 'Upload · sync · E2E tests',
    metrics: ['Cloudinary + MongoDB', 'TanStack Query', 'E2E Cypress (login/links)'],
    architectureLinks: [
      {
        label: 'Cypress E2E Tests',
        url: 'https://github.com/tharciosantos/devlinks-web/tree/main/cypress',
        badge: 'Cypress',
      },
      {
        label: 'Express + Cloudinary API',
        url: 'https://github.com/tharciosantos/devlinks-api',
        badge: 'Backend',
      },
      {
        label: 'API Client & Services',
        url: 'https://github.com/tharciosantos/devlinks-web/blob/main/src/services/api.js',
        badge: 'API Client',
      },
    ],
    demoNote: 'Includes a quick demo access button with credentials and preloaded links.',
    imageUrl: '/images/screenshot-devlinks.webp',
    imageAlt: 'DevLinks dashboard with link management and public profile',
    screens: [
      {
        label: 'Login',
        imageUrl: '/images/devlinks/tela-login.webp',
        caption: 'Secure access and 1-click demo button',
      },
      {
        label: 'Sign Up',
        imageUrl: '/images/devlinks/tela-cadastro.webp',
        caption: 'Simple, fast account creation for new users',
      },
      {
        label: 'Dashboard',
        imageUrl: '/images/devlinks/tela-dashboard.webp',
        caption: 'Link management, specialty, and avatar upload',
      },
      {
        label: 'Public',
        imageUrl: '/images/devlinks/tela-perfil-publico.webp',
        caption: 'Shareable public profile page for social and bio',
      },
    ],
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
    technicalHighlight:
      'Offline-first PWA with Service Worker, a local database of 220 items in 11 sectors, smart auto-categorization, and formatted WhatsApp export.',
    responsibility:
      'Architecture and development of an offline-first PWA with a preloaded catalog and a list generator for messaging.',
    decision:
      'Using Service Workers for full static caching and a local data structure indexed by sectors to operate offline.',
    evidence: [
      'Installable PWA with Service Worker and active cache-first',
      'Catalog of 220 items across 11 market sectors',
      '100% autonomous offline operation with no server requests',
      'Structured, formatted export to WhatsApp',
    ],
    outcome: 'PWA · 220 items · 100% offline',
    metrics: ['PWA Offline Ready', '220 Mapped Items', '11 Sectors'],
    architectureLinks: [
      {
        label: 'PWA Offline & Service Worker',
        url: 'https://github.com/tharciosantos/lista-mercado/blob/main/vite.config.js',
        badge: 'Offline-First',
      },
    ],
    demoNote:
      'Installable on smartphones with offline functionality and structured WhatsApp export.',
    imageUrl: '/images/lista-mercado/tela-lista-pendentes.webp',
    imageAlt: 'Grocery List interface with product list and sectors',
    screens: [
      {
        label: 'Empty List',
        imageUrl: '/images/lista-mercado/tela-lista-vazia.webp',
        caption: 'Home screen with a shortcut to load the 220-item Master List',
      },
      {
        label: 'Pending',
        imageUrl: '/images/lista-mercado/tela-lista-pendentes.webp',
        caption: 'Items organized by sectors with smart auto-categorization',
      },
      {
        label: 'Cart',
        imageUrl: '/images/lista-mercado/tela-carrinho.webp',
        caption: 'Progress tracking and item check in the cart',
      },
    ],
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
    technicalHighlight:
      'CoinGecko API consumption in the Next.js App Router, dynamic /coin/[id] routes, fallback data protection, and client-side filters.',
    responsibility:
      'Building a financial market analytics interface with external API consumption and fallback handling.',
    decision:
      'Implementing a fallback layer (local contingency) against rate limits (HTTP 429) and dynamic routing in the App Router.',
    evidence: [
      'Dynamic CoinGecko API consumption with quotes and KPIs',
      'Automatic fallback mechanism for fault tolerance and rate limits',
      'Dynamic /coin/[id] routes with market statistics',
      'Quick filters by top gainers, losers, and 24h volume',
    ],
    outcome: 'FinTech · CoinGecko API · dynamic routes',
    metrics: ['CoinGecko API Live', 'Next.js App Router', 'FinTech UI'],
    architectureLinks: [
      {
        label: 'App Router Routes',
        url: 'https://github.com/tharciosantos/crypto-dashboard/tree/main/src/app',
        badge: 'App Router',
      },
      {
        label: 'Fallback Data (Contingency)',
        url: 'https://github.com/tharciosantos/crypto-dashboard/blob/main/src/data/fallbackCoins.js',
        badge: 'Resilience',
      },
    ],
    demoNote:
      'Real-time monitoring with market KPIs, gainers/losers filters, and detailed statistics.',
    imageUrl: '/images/crypto-dashboard/tela-mercado.webp',
    imageAlt: 'Cryptocurrency dashboard with quotes, KPIs, and filters',
    screens: [
      {
        label: 'Market',
        imageUrl: '/images/crypto-dashboard/tela-mercado.webp',
        caption: 'General panel with market KPIs and real-time quotes',
      },
      {
        label: 'Top Gainers',
        imageUrl: '/images/crypto-dashboard/tela-maiores-altas.webp',
        caption: 'Dynamic filter by top gainers and 24h percentage change',
      },
      {
        label: 'Details',
        imageUrl: '/images/crypto-dashboard/tela-detalhes-ativo.webp',
        caption: 'Individual asset page with 24h price range and statistics',
      },
    ],
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
