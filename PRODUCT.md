# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recrutadores técnicos, Tech Leads, Engineering Managers e gestores de contratação avaliando maturidade técnica e competências práticas de engenharia para vagas Full Stack, Frontend ou Backend.

## Product Purpose

Apresentar a trajetória, sistemas reais em produção, código-fonte, decisões técnicas e capacidade de entrega de Tharcio Santos de maneira editorial, clara e fundamentada em evidências, gerando contatos e oportunidades de contratação.

## Positioning

Desenvolvedor Full Stack com sólida base em engenharia de software: sistemas completos, APIs resilientes, modelagem de bancos de dados relacionais, segurança e testes automatizados. Diferencia-se por apresentar produtos reais em produção com métricas concretas e acesso demo em 1-clique (ex: HelpFlow com 82 testes Vitest e 15 fluxos E2E; ManutFlow com 169 testes automatizados e 3 camadas de segurança), em vez de apenas listar tecnologias.

## Operating Context

- Avaliação rápida (triagem técnica) por recrutadores em desktops e dispositivos móveis.
- Navegação fluida para exploração de cases, verificação de código no GitHub, teste de aplicações em produção e download do currículo.
- Canais de contato direto via LinkedIn e Email.

## Capabilities and Constraints

- Construído com Next.js 16 (App Router, Turbopack), React 19, TypeScript strict e Tailwind CSS.
- Suporte a tema escuro/claro/sistema com tokens semânticos via `next-themes`.
- Navegação interativa com scroll spy, barra de progresso de leitura, abas de projetos e reveal ao rolar a página (IntersectionObserver nativo sem dependências pesadas).
- Alta performance (Core Web Vitals), acessibilidade semântica (ARIA, foco visível, focus trap no mobile, suporte a `prefers-reduced-motion`) e SEO técnico completo.
- Dados centralizados em `src/data/` com testes automatizados via Vitest e Testing Library.

## Brand Commitments

- **Nome / Identidade:** Tharcio Santos — Desenvolvedor Full Stack.
- **Estética e Paleta:** Direção editorial limpa, profissional e minimalista com fundo gelo/neutro, tipografia semântica e accent carmesim.
- **Tom de voz:** Objetivo, técnico, confiante e transparente, focado em decisões de engenharia, arquitetura e resultados comprováveis.

## Evidence on Hand

- **HelpFlow:** Sistema de help desk Full Stack com autenticação por credenciais e GitHub, recuperação de senha, RBAC, PostgreSQL, Supabase, Prisma, 82 testes Vitest e 15 fluxos E2E no Cypress (link da aplicação e repositório GitHub).
- **ManutFlow:** Sistema de gestão de manutenção em produção com 169 testes automatizados em 17 arquivos, 3 camadas de segurança (proxy.ts, getUser, RLS) e demo com 1-clique (link da aplicação e repositório GitHub).
- **Projetos complementares:** DevLinks (frontend React + API Express com Cloudinary/MongoDB, TanStack Query, E2E Cypress no fluxo de login/links), Lista de Mercado (PWA mobile-first offline), Crypto Dashboard (CoinGecko API).
- **Currículo PDF:** Disponível em `/curriculo-tharcio-santos.pdf`.
- **Qualidade de código:** Suíte de testes com Vitest, pipeline CI no GitHub Actions e metas Lighthouse ≥ 95.

## Product Principles

1. **Evidência acima de afirmação:** Toda competência técnica é sustentada por código aberto, produtos em produção, testes e métricas reais.
2. **Clareza editorial e hierarquia:** Conteúdo estruturado para leitura rápida por quem avalia (problema, solução, decisões e impacto).
3. **Engenharia consistente:** Rigor em testes, segurança, tipagem estrita, performance e acessibilidade em todas as camadas.
4. **Experiência sem atrito:** Acesso imediato a demos em 1-clique, alternância natural de temas e múltiplos canais de contato direto.

## Accessibility & Inclusion

- Conformidade com padrões WCAG 2.1 AA (contraste semântico, navegação completa por teclado, focus trap no menu mobile, atributos ARIA e compatibilidade com `prefers-reduced-motion`).
