const pt = {
  nav: {
    ariaMain: 'Navegação principal',
    ariaMenu: 'Menu de navegação',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    backHome: 'Tharcio.dev, voltar para o início',
    footerNav: 'Navegação do rodapé',
    links: {
      '#projetos': 'Projetos',
      '#processo': 'Processo',
      '#habilidades': 'Habilidades',
      '#sobre-mim': 'Sobre',
      '#contato': 'Contato',
    } as Record<string, string>,
  },
  theme: {
    toggle: 'Alternar tema',
    light: 'Tema claro',
    dark: 'Tema escuro',
  },
  hero: {
    eyebrowLocation: 'Desenvolvedor de Software · Brasil',
    eyebrowStatus: 'Disponível para Estágio / Júnior · Full Stack',
    headline: 'Desenvolvo sistemas completos, da interface aos dados.',
    subtitle:
      'Com projetos publicados e experiência técnica autônoma, construo aplicações web focadas em usabilidade, controle de acesso seguro e cobertura consistente de testes.',
    ctaProjects: 'Explorar projetos',
    ctaResume: 'Baixar currículo',
    ariaGithub: 'GitHub de Tharcio Santos',
    ariaLinkedin: 'LinkedIn de Tharcio Santos',
    ariaWhatsapp: 'Conversar com Tharcio Santos no WhatsApp',
    metrics: [
      {
        value: '2 Sistemas',
        label: 'ManutFlow e HelpFlow em produção',
        sr: 'Sistemas publicados',
      },
      {
        value: '5 Projetos',
        label: 'De sistemas em produção a PWAs e integrações',
        sr: 'Projetos publicados',
      },
      {
        value: 'Segurança',
        label: 'Isolamento em camadas (RBAC e Supabase RLS)',
        sr: 'Segurança',
      },
    ],
  },
  projects: {
    eyebrow: 'Sistemas em Produção',
    title: 'Projetos',
    subtitle:
      'Sistemas full stack desenvolvidos do zero, com autenticação em camadas, banco relacional, regras de negócio e suítes de testes automatizados.',
    othersTitle: 'Outros projetos',
    othersSubtitle:
      'Experimentos e integrações que ampliam a stack para além dos cases principais — cada um com código aberto e demo publicada.',
    viewCode: 'Ver código',
    ariaViewCode: 'Ver código de {name} no GitHub',
    ariaDemo: '{label} do projeto {name}',
    demoDefault: 'Acessar aplicação',
    viewAllRepos: 'Ver todos os repositórios no GitHub →',
    viewAllNote: 'Quer ver o código-fonte completo e o histórico de evolução de cada projeto?',
  },
  tabs: {
    hint: 'Selecione um projeto para ver telas, arquitetura e regras de negócio:',
    available: '{count} projetos disponíveis',
    counter: 'Projeto 0{index} / 0{total}',
    inProduction: 'Sistema em Produção',
    responsibility: 'Minha responsabilidade',
    decision: 'Decisão técnica',
    implemented: 'Implementado',
    architecture: 'Arquitetura no GitHub',
    ariaArchitecture: 'Ver {label} no GitHub',
    viewCode: 'Ver código',
  },
  showcase: {
    screensLabel: 'Telas do Sistema',
    counter: 'Tela 0{current} de 0{total}',
    expand: 'Ampliar',
    expandTitle: 'Ampliar visualização em tela cheia',
    expandAria: 'Ampliar tela do projeto em alta resolução',
    goToScreen: 'Ir para tela: {label}',
    prev: 'Tela anterior',
    next: 'Próxima tela',
    close: 'Fechar',
    closeFullscreen: 'Fechar tela cheia',
    viewOriginal: 'Ver original',
    navigateHint: 'Navegue com as setas ou deslize na tela',
    overview: 'Visão Geral',
    carouselAria: 'Demonstração visual do projeto {title}',
    modalAria: 'Visualização em alta resolução de {title} - {label}',
  },
  process: {
    eyebrow: 'Método & Engenharia',
    title: 'Como eu trabalho',
    subtitle:
      'Organizo o desenvolvimento em etapas pequenas e previsíveis, do entendimento do problema à entrega com testes e deploy.',
    fase: 'Fase {num}',
    steps: [
      {
        step: 'Entendimento',
        detail:
          'Mapeio o problema real, os perfis de usuários e o fluxo operacional antes do código.',
      },
      {
        step: 'Arquitetura',
        detail: 'Modelo entidades, permissões de acesso (RBAC/RLS) e contratos de API seguros.',
      },
      {
        step: 'Construção',
        detail: 'Desenvolvo a interface e a lógica de negócio com TypeScript e componentes limpos.',
      },
      {
        step: 'Qualidade & Entrega',
        detail:
          'Aplico testes automatizados, validação de acessibilidade e deploy contínuo.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'Competências & Stack',
    title: 'Stack e tecnologias',
    subtitle:
      'Tecnologias aplicadas em produção, organizadas em 4 pilares: interfaces, segurança de APIs, bancos relacionais e testes automatizados.',
    projectsLabel: 'Projetos:',
    ariaTech: 'Tecnologias de {title}',
  },
  about: {
    eyebrow: 'Perfil & Trajetória',
    title: 'Sobre mim',
    subtitle:
      'Graduando em Análise e Desenvolvimento de Sistemas com experiência prática autônoma em suporte e manutenção de TI, unindo método investigativo à construção de software.',
    profileLabel: 'Perfil Profissional',
    location: 'Caeté / BH e Região · Remoto',
    role: 'Desenvolvedor Full Stack Júnior',
    focus: 'Foco em arquitetura segura e interfaces funcionais',
    bio:
      'Minha transição para a programação nasceu ao diagnosticar e resolver problemas técnicos no suporte: percebi que queria ir além da manutenção de máquinas e passar a construir sistemas completos, seguros e confiáveis que resolvam dores reais das pessoas e empresas.',
    educationLabel: 'Formação Acadêmica',
    graduation: 'Graduação',
    course: 'Análise e Desenvolvimento de Sistemas',
    studying: 'Cursando',
    graduationDate: 'Julho de 2027',
    experienceLabel: 'Experiências Profissionais',
    trajectoryLabel: 'Trajetória & Bagagem',
    transferLabel: 'Competências transferidas para a engenharia de software',
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos conversar sobre uma oportunidade',
    subtitle:
      'Estou aberto a oportunidades de estágio ou posições júnior em desenvolvimento de software, com interesse em frontend, backend ou full stack e em times onde eu possa aprender, contribuir e evoluir com projetos reais.',
    statusLabel: 'Status Profissional',
    available: 'Disponível para contratação',
    readyTitle: 'Pronto para somar ao time',
    interest:
      'Interesse em Estágio ou Desenvolvimento Júnior · Atuação Remota, Híbrida ou Presencial (Caeté / BH e região).',
    focusText:
      'Foco em colaborar com squads ágeis, entregando código tipado, arquitetura em camadas e interfaces acessíveis com responsabilidade e rápida curva de aprendizado.',
    immediateStart: 'Início imediato',
    clt: 'CLT / Estágio',
    bhRemote: 'BH e Remoto',
    channelsLabel: 'Canais de contato',
    email: 'E-mail',
    copy: 'Copiar',
    copied: 'Copiado',
    copyEmail: 'Copiar e-mail',
    copyEmailCopied: 'E-mail copiado',
    open: 'Abrir',
    whatsappCta: 'Chamar no WhatsApp',
    whatsappAria: 'Chamar Tharcio Santos no WhatsApp',
    whatsappNote: 'Resposta rápida ·',
    resume: 'Currículo',
    resumeDesc: 'Formação, experiência e informações profissionais.',
    linkedinDescription: 'Conversar sobre vagas, networking e carreira.',
    linkedinAction: 'Ver perfil',
    githubDescription: 'Ver código, projetos publicados e evolução técnica.',
    githubAction: 'Ver repositórios',
  },
  footer: {
    tagline: 'Tharcio Santos, Desenvolvedor Full Stack Júnior',
    taglineSub: 'Projetos reais, aprendizado contínuo e construção de sistemas web.',
    location: 'Caeté / BH · Brasil',
    viewCode: 'Ver código',
    builtWith: 'Built with Next.js · TypeScript',
    ariaGithub: 'GitHub de Tharcio Santos',
    ariaLinkedin: 'LinkedIn de Tharcio Santos',
    ariaEmail: 'Enviar e-mail para Tharcio Santos',
  },
};

const en: typeof pt = {
  nav: {
    ariaMain: 'Main navigation',
    ariaMenu: 'Navigation menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    backHome: 'Tharcio.dev, back to top',
    footerNav: 'Footer navigation',
    links: {
      '#projetos': 'Projects',
      '#processo': 'Process',
      '#habilidades': 'Skills',
      '#sobre-mim': 'About',
      '#contato': 'Contact',
    },
  },
  theme: {
    toggle: 'Toggle theme',
    light: 'Light theme',
    dark: 'Dark theme',
  },
  hero: {
    eyebrowLocation: 'Software Developer · Brazil',
    eyebrowStatus: 'Open to Internship / Junior · Full Stack',
    headline: 'I build complete systems, from interface to data.',
    subtitle:
      'With published projects and self-driven technical experience, I build web applications focused on usability, secure access control, and consistent test coverage.',
    ctaProjects: 'Explore projects',
    ctaResume: 'Download resume',
    ariaGithub: "Tharcio Santos's GitHub",
    ariaLinkedin: "Tharcio Santos's LinkedIn",
    ariaWhatsapp: 'Chat with Tharcio Santos on WhatsApp',
    metrics: [
      {
        value: '2 Systems',
        label: 'ManutFlow and HelpFlow in production',
        sr: 'Published systems',
      },
      {
        value: '5 Projects',
        label: 'From production systems to PWAs and integrations',
        sr: 'Published projects',
      },
      {
        value: 'Security',
        label: 'Layered isolation (RBAC and Supabase RLS)',
        sr: 'Security',
      },
    ],
  },
  projects: {
    eyebrow: 'Production Systems',
    title: 'Projects',
    subtitle:
      'Full-stack systems built from scratch, with layered authentication, relational databases, business rules, and automated test suites.',
    othersTitle: 'Other projects',
    othersSubtitle:
      'Experiments and integrations that expand the stack beyond the main cases — each open source with a published demo.',
    viewCode: 'View code',
    ariaViewCode: 'View {name} source code on GitHub',
    ariaDemo: '{label} for the {name} project',
    demoDefault: 'Open app',
    viewAllRepos: 'See all repositories on GitHub →',
    viewAllNote: 'Want to see the full source code and evolution history of each project?',
  },
  tabs: {
    hint: 'Select a project to see screens, architecture, and business rules:',
    available: '{count} projects available',
    counter: 'Project 0{index} / 0{total}',
    inProduction: 'System in Production',
    responsibility: 'My responsibility',
    decision: 'Technical decision',
    implemented: 'Implemented',
    architecture: 'Architecture on GitHub',
    ariaArchitecture: 'View {label} on GitHub',
    viewCode: 'View code',
  },
  showcase: {
    screensLabel: 'System Screens',
    counter: 'Screen 0{current} of 0{total}',
    expand: 'Expand',
    expandTitle: 'Expand to full screen',
    expandAria: 'Expand project screen in high resolution',
    goToScreen: 'Go to screen: {label}',
    prev: 'Previous screen',
    next: 'Next screen',
    close: 'Close',
    closeFullscreen: 'Close fullscreen',
    viewOriginal: 'View original',
    navigateHint: 'Navigate with the arrows or swipe',
    overview: 'Overview',
    carouselAria: 'Visual demonstration of the {title} project',
    modalAria: 'High-resolution view of {title} - {label}',
  },
  process: {
    eyebrow: 'Method & Engineering',
    title: 'How I work',
    subtitle:
      'I organize development into small, predictable steps, from understanding the problem to delivery with tests and deploy.',
    fase: 'Phase {num}',
    steps: [
      {
        step: 'Understanding',
        detail: 'I map the real problem, user profiles, and the operational flow before coding.',
      },
      {
        step: 'Architecture',
        detail: 'I model entities, access permissions (RBAC/RLS), and secure API contracts.',
      },
      {
        step: 'Building',
        detail: 'I develop the interface and business logic with TypeScript and clean components.',
      },
      {
        step: 'Quality & Delivery',
        detail: 'I apply automated tests, accessibility validation, and continuous deploy.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'Skills & Stack',
    title: 'Stack and technologies',
    subtitle:
      'Technologies applied in production, organized into 4 pillars: interfaces, API security, relational databases, and automated testing.',
    projectsLabel: 'Projects:',
    ariaTech: 'Technologies of {title}',
  },
  about: {
    eyebrow: 'Profile & Journey',
    title: 'About me',
    subtitle:
      'Graduating in Systems Analysis and Development with self-driven practical experience in IT support and maintenance, combining an investigative method with software development.',
    profileLabel: 'Professional Profile',
    location: 'Caeté / BH and region · Remote',
    role: 'Junior Full Stack Developer',
    focus: 'Focused on secure architecture and functional interfaces',
    bio:
      'My transition to programming began while diagnosing and solving technical problems in support: I realized I wanted to go beyond machine maintenance and start building complete, secure, and reliable systems that solve real pains for people and companies.',
    educationLabel: 'Education',
    graduation: 'Graduation',
    course: 'Systems Analysis and Development',
    studying: 'In progress',
    graduationDate: 'July 2027',
    experienceLabel: 'Professional Experience',
    trajectoryLabel: 'Journey & Background',
    transferLabel: 'Skills transferred to software engineering',
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about an opportunity",
    subtitle:
      "I'm open to internship or junior software development positions, interested in frontend, backend, or full stack, and in teams where I can learn, contribute, and grow with real projects.",
    statusLabel: 'Professional Status',
    available: 'Available for hire',
    readyTitle: 'Ready to join the team',
    interest:
      'Interested in Internship or Junior Development · Remote, Hybrid, or On-site (Caeté / BH and region).',
    focusText:
      'Focused on collaborating with agile squads, delivering typed code, layered architecture, and accessible interfaces with responsibility and a fast learning curve.',
    immediateStart: 'Immediate start',
    clt: 'CLT / Internship',
    bhRemote: 'BH and Remote',
    channelsLabel: 'Contact channels',
    email: 'Email',
    copy: 'Copy',
    copied: 'Copied',
    copyEmail: 'Copy email',
    copyEmailCopied: 'Email copied',
    open: 'Open',
    whatsappCta: 'Chat on WhatsApp',
    whatsappAria: 'Chat with Tharcio Santos on WhatsApp',
    whatsappNote: 'Fast reply ·',
    resume: 'Resume',
    resumeDesc: 'Education, experience, and professional information.',
    linkedinDescription: 'Talk about roles, networking, and career.',
    linkedinAction: 'View profile',
    githubDescription: 'See code, published projects, and technical evolution.',
    githubAction: 'View repositories',
  },
  footer: {
    tagline: 'Tharcio Santos, Junior Full Stack Developer',
    taglineSub: 'Real projects, continuous learning, and web system development.',
    location: 'Caeté / BH · Brazil',
    viewCode: 'View code',
    builtWith: 'Built with Next.js · TypeScript',
    ariaGithub: "Tharcio Santos's GitHub",
    ariaLinkedin: "Tharcio Santos's LinkedIn",
    ariaEmail: 'Email Tharcio Santos',
  },
};

export type Dictionary = typeof pt;

export const dictionaries: Record<'pt' | 'en', Dictionary> = {
  pt,
  en,
};

export function getDictionary(language: 'pt' | 'en'): Dictionary {
  return dictionaries[language];
}
