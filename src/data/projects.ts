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
    description:
      'Sistema completo para cadastro de equipamentos, abertura de ordens de serviço e dashboard com indicadores de status e prioridade.',
    responsibility:
      'Modelagem e implementação do sistema de equipamentos, ordens de serviço e indicadores operacionais. A experiência prática com suporte e manutenção de TI ajudou a aproximar o produto de rotinas reais de equipamentos e manutenção.',
    challenge:
      'Garantir que cada usuário acesse apenas seus próprios equipamentos e ordens de manutenção.',
    decision:
      'Aplicar proteção em três camadas com proxy, getUser() na API e Row Level Security no banco.',
    technicalHighlight:
      'Segurança em três camadas (Proxy, API getUser e Supabase RLS), modelagem PostgreSQL e suíte de 169 testes unitários no Vitest.',
    evidence: [
      '169 testes automatizados em 17 arquivos',
      'CRUD completo com busca, filtros, paginação e histórico',
      'Proteção em camadas com sessão, user_id e RLS',
      'Acesso de demonstração com 1-clique e dados pré-carregados',
      'Dashboard operacional com prazos, indicadores e ordens urgentes',
    ],
    demoNote:
      'Inclui simulador interativo de ordens e acesso demo com 1-clique com equipamentos pré-cadastrados.',
    metrics: ['169 testes automatizados', 'Simulador Industrial', 'Supabase RLS'],
    architectureLinks: [
      {
        label: 'Segurança RLS e Proxy',
        url: 'https://github.com/tharciosantos/manutflow/blob/main/src/proxy.ts',
        badge: 'Supabase RLS',
      },
      {
        label: '169 Testes por Feature (Domínio)',
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
      'Validação, rate limiting, testes unitários e E2E',
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
    description:
      'Plataforma completa de gerenciamento e compartilhamento de links estilo Linktree, com autenticação JWT, upload de avatar via Cloudinary e perfil público.',
    technicalHighlight:
      'Upload de imagem via Cloudinary, cache e invalidação com TanStack Query, e testes end-to-end com Cypress no fluxo principal.',
    responsibility:
      'Desenvolvimento de aplicação SPA com gerenciamento de estado assíncrono, fluxo de autenticação e manipulação de mídia.',
    decision:
      'Adotar TanStack Query para orquestração de cache e Cypress para validação end-to-end de fluxos críticos de usuário.',
    evidence: [
      'Testes End-to-End no Cypress cobrindo fluxos críticos',
      'Upload otimizado de imagens via Cloudinary CDN',
      'Cache e sincronização de dados com TanStack Query',
      'Perfil público leve e compartilhável para bio de redes',
    ],
    outcome: 'Upload · sincronização · testes E2E',
    metrics: ['Testes E2E Cypress', 'Cloudinary CDN', 'TanStack Query'],
    architectureLinks: [
      {
        label: 'Testes E2E Cypress',
        url: 'https://github.com/tharciosantos/devlinks-web/tree/main/cypress',
        badge: 'Cypress',
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
    tags: ['React', 'TanStack Query', 'Cloudinary', 'Cypress', 'Tailwind CSS', 'Node.js'],
    kind: 'secondary',
  },
  {
    title: 'Lista de Mercado: PWA',
    shortTitle: 'Lista de Mercado',
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
