# Tharcio Santos — Portfólio

> Manual Operacional para Agentes de IA · v2.2

Este documento é a **fonte única de verdade** para agentes que trabalham neste repositório. Qualquer divergência entre o comportamento do agente e este manual é um bug — reporte ao usuário.

---

## Índice

1. [Introdução](#1-introdução)
2. [Missão do Agente](#2-missão-do-agente)
3. [Filosofia do Projeto](#3-filosofia-do-projeto)
4. [Ordem de Prioridade](#4-ordem-de-prioridade)
5. [Workflow Obrigatório](#5-workflow-obrigatório)
6. [Workflow Git](#6-workflow-git)
7. [Commits (Conventional Commits)](#7-commits-conventional-commits)
8. [Pull Request](#8-pull-request)
9. [Checklists](#9-checklists)
10. [Stack e Configuração](#10-stack-e-configuração)
11. [Estrutura do Projeto](#11-estrutura-do-projeto)
12. [Padrões de Código](#12-padrões-de-código)
13. [Tipos de Dados](#13-tipos-de-dados)
14. [Estilos e Tema](#14-estilos-e-tema)
15. [Animações e Hooks](#15-animações-e-hooks)
16. [Regras para IA](#16-regras-para-ia)
17. [O que NUNCA Fazer](#17-o-que-nunca-fazer)
18. [Validação e Qualidade](#18-validação-e-qualidade)
19. [Performance](#19-performance)
20. [Segurança, SEO e Acessibilidade](#20-segurança-seo-e-acessibilidade)
21. [Consistência de Conteúdo](#21-consistência-de-conteúdo)
22. [Troubleshooting](#22-troubleshooting)
23. [Exemplos Completos](#23-exemplos-completos)
24. [Fluxograma ASCII](#24-fluxograma-ascii)

---

## 1. Introdução

### 1.1 Objetivo

Servir como **manual operacional oficial** para agentes de IA — não apenas documentação de projeto, mas um sistema de regras, workflows e padrões que garante mudanças previsíveis, consistentes e de alta qualidade.

### 1.2 Escopo

Cobre: fluxo de trabalho completo (tarefa → PR → merge), padrões de código, Git/commits/PRs, regras obrigatórias, proibições e contexto técnico completo do projeto.

### 1.3 Como Utilizar

1. Leia este documento ao iniciar **qualquer** tarefa.
2. Siga a [Ordem de Prioridade](#4-ordem-de-prioridade) religiosamente.
3. Consulte seções relevantes durante a implementação.
4. Execute os [Checklists](#9-checklists) antes de cada etapa crítica.
5. Conflito entre manual e solicitação do usuário → **questione o usuário**.

---

## 2. Missão do Agente

| Princípio            | Descrição                                                 |
| -------------------- | --------------------------------------------------------- |
| **Previsibilidade**  | Mudanças que outro engenheiro possa revisar sem surpresas |
| **Mínimo Impacto**   | Alterar exclusivamente o necessário para cumprir a tarefa |
| **Rastreabilidade**  | Cada mudança com propósito claro e commit correspondente  |
| **Responsabilidade** | Não misturar refactor com feature, não alterar escopo     |

---

## 3. Filosofia do Projeto

1. **Simplicidade** — Soluções diretas. Não generalizar antes do tempo.
2. **Consistência** — Siga os padrões observados no código existente.
3. **Previsibilidade** — Mesma entrada deve produzir mesma saída.
4. **Legibilidade** — Nomes descritivos > comentários. Estrutura clara > "código inteligente".
5. **Mudanças Pequenas** — 3 PRs pequenos > 1 PR gigante. Commits atômicos.
6. **Responsabilidade Única** — Cada componente/função/arquivo com um propósito.
7. **Reutilização** — Antes de criar, procure no projeto: `ui/`, `hooks/`, `lib/`, `data/`.

---

## 4. Ordem de Prioridade

Execute **todas** as etapas em ordem. Pular é proibido.

```
 1. ENTENDER A TAREFA ──► 2. ENTENDER IMPACTO ──► 3. LOCALIZAR ARQUIVOS
    ↓
 4. REUTILIZAR COMPONENTES ──► 5. IMPLEMENTAR ──► 6. VALIDAR
    ↓
 7. REVISAR ──► 8. COMMITAR ──► 9. CRIAR PR ──► 10. LIMPAR
```

| Etapa              | Ação                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------- |
| **1. Entender**    | Leia a solicitação, identifique o problema real, questione ambiguidades                  |
| **2. Impacto**     | Quais arquivos? Dependências? Quebra algo existente?                                     |
| **3. Localizar**   | Use as ferramentas de busca e leitura disponíveis, preferindo `rg`. Leia antes de editar |
| **4. Reutilizar**  | Verifique `ui/`, `hooks/`, `lib/`, `data/` antes de criar algo novo                      |
| **5. Implementar** | Mínimo de mudanças. Siga padrões (seção 12)                                              |
| **6. Validar**     | `build` + `lint` + `test:run` + `tsc --noEmit`                                           |
| **7. Revisar**     | Faça revisão manual com `git diff`. Remova `console.log`                                 |
| **8. Commitar**    | Conventional Commits. Atômico e descritivo                                               |
| **9. PR**          | Template da seção 8.4                                                                    |
| **10. Limpar**     | Excluir branches local e remota após merge                                               |

---

## 5. Workflow Obrigatório

```
RECEBER TAREFA → ANALISAR CONTEXTO → git pull origin main
→ git checkout -b tipo/descricao → IMPLEMENTAR → npm run build
→ npm run lint → npm run test:run → REVISAR DIFF → COMMIT
→ git push -u origin branch → CRIAR PR → MERGE (CI verde)
→ git checkout main && git pull → git branch -d branch
→ git push origin --delete branch
```

### 5.1 Receber Tarefa

Leia, interprete e confirme com o usuário.

### 5.2 Analisar Contexto

Use as ferramentas de busca e leitura disponíveis para entender o estado do código. Prefira
`rg` para localizar arquivos e conteúdo.

### 5.3 Atualizar Main

```bash
git checkout main && git pull origin main
```

Nunca trabalhe em `main` desatualizada.

### 5.4 Criar Branch

```bash
git checkout -b tipo/descricao-curta
```

Siga a nomenclatura da [seção 6.3](#63-nomenclatura-de-branches).

### 5.5 Implementar

Siga os padrões da seção 12.

### 5.6 Executar Build

```bash
npm run build   # Zero erros; investigue novos warnings
```

### 5.7 Executar Lint

```bash
npm run lint    # Zero erros, zero warnings
```

### 5.8 Executar Testes

```bash
npm run test:run   # 100% passando
```

### 5.9 Revisar Diff

```bash
git diff        # Apenas arquivos esperados alterados
```

Faça uma revisão manual adicional com `git diff`.

### 5.10 Commit

```bash
git add <arquivos>
git commit -m "tipo(escopo): descrição concisa"
```

### 5.11 Push

```bash
git push -u origin nome-da-branch
```

### 5.12 Criar PR

Siga o template (seção 8.4).

### 5.13 Merge

Após CI verde.

### 5.14–5.16 Limpeza

```bash
git checkout main && git pull origin main
git branch -d nome-da-branch
git push origin --delete nome-da-branch
```

---

## 6. Workflow Git

### 6.1 Modelo: GitHub Flow

Apenas `main` (estável, sempre deployável) + branches de curta duração.

```
main ────┬──── feat/abc ── PR ── merge ──► main
         └──── fix/xyz ──── PR ── merge ──► main
```

### 6.2 Regras

- **PR obrigatório** para qualquer alteração em `main`
- **Nunca commitar diretamente na `main`**
- **Nunca force push**

### 6.3 Nomenclatura de Branches

Use **kebab-case**, máx 50 caracteres, em português.

| Tipo     | Prefixo     | Exemplos                                                                                |
| -------- | ----------- | --------------------------------------------------------------------------------------- |
| Feature  | `feat/`     | `feat/adiciona-filtro-projetos`, `feat/hero-parallax`, `feat/modal-confirmacao-contato` |
| Fix      | `fix/`      | `fix/menu-mobile-nao-fecha`, `fix/alinhamento-hero`, `fix/rota-404-redireciona`         |
| Hotfix   | `hotfix/`   | `hotfix/corrige-500-contato`, `hotfix/env-vazia-producao`                               |
| Refactor | `refactor/` | `refactor/extrai-hook-useProjects`, `refactor/simplifica-logica-filtro`                 |
| Release  | `release/`  | `release/v1.2.0`, `release/v2.0-rc1`                                                    |
| Docs     | `docs/`     | `docs/atualiza-readme-status`, `docs/adiciona-agents`, `docs/atualiza-cv-data`          |
| Chore    | `chore/`    | `chore/atualiza-deps-react`, `chore/remove-logs`, `chore/configura-husky`               |
| Test     | `test/`     | `test/adiciona-cobertura-button`, `test/cobre-edge-cases-projetos`                      |
| Perf     | `perf/`     | `perf/otimiza-lazy-load-images`, `perf/reduz-bundle-icons`                              |
| Style    | `style/`    | `style/ajusta-espacamento-section`, `style/padroniza-cores-accent`                      |

---

## 7. Commits (Conventional Commits)

### 7.1 Formato

```
tipo(escopo): descrição (≤ 72 caracteres)

[corpo — explica o porquê]

[rodapé — BREAKING CHANGE ou issues]
```

### 7.2 Tipos

| Tipo       | Quando usar                             | Exemplo                                           |
| ---------- | --------------------------------------- | ------------------------------------------------- |
| `feat`     | Nova funcionalidade                     | `feat(projects): adiciona filtro por tecnologia`  |
| `fix`      | Correção de bug                         | `fix(navbar): menu sobrepondo conteúdo no mobile` |
| `docs`     | Documentação                            | `docs(readme): atualiza comandos de instalação`   |
| `style`    | Formatação, CSS (sem mudar lógica)      | `style(button): ajusta padding do outline`        |
| `refactor` | Mudança interna sem mudar comportamento | `refactor(hooks): extrai lógica para hook`        |
| `perf`     | Melhoria de performance                 | `perf(images): adiciona lazy loading nas imagens` |
| `test`     | Testes                                  | `test(contact): cobre validação de formulário`    |
| `build`    | Build system ou dependências            | `build(deps): atualiza next para 16.3.0`          |
| `ci`       | CI/CD                                   | `ci(actions): adiciona cache ao workflow`         |
| `chore`    | Manutenção geral                        | `chore: remove console.log de debug`              |
| `revert`   | Reversão de commit                      | `revert: volta commit abc1234 que quebrou build`  |

### 7.3 Regras

- **Imperativo:** "adiciona", não "adicionado" nem "adicionando"
- **Linha ≤ 72 caracteres**
- **Escopo opcional** mas recomendado
- **Corpo separado** por linha em branco — explica **porquê** e **como**

### 7.4 Exemplos

```bash
# Feature
git commit -m "feat(hero): adiciona efeito parallax no background"

# Feature com corpo
git commit -m "feat(projects): adiciona filtro por tecnologia

Adiciona dropdown para filtrar projetos por stack.
Usa estado URL para permitir compartilhamento do filtro aplicado."

# Fix
git commit -m "fix(mobile): corrige scroll lock ao abrir menu"

# Docs
git commit -m "docs(readme): atualiza comandos de instalação"

# Style
git commit -m "style(button): padroniza padding das variantes"

# Refactor
git commit -m "refactor: extrai função cn para lib/utils"

# Perf
git commit -m "perf(images): adiciona lazy loading nos projetos"

# Test
git commit -m "test(button): adiciona teste para variante outline"

# Build
git commit -m "build(deps): atualiza next para 16.3.0"

# CI
git commit -m "ci(actions): adiciona cache para acelerar build"

# Chore
git commit -m "chore: remove console.log e comentários temporários"

# Revert
git commit -m "revert: volta commit abc1234 que quebrou build"

# Breaking change
git commit -m "feat: migra seções para server components

BREAKING CHANGE: Hero e About agora são server components.
Props de cliente foram removidas — use data attributes."
```

---

## 8. Pull Request

### 8.1 Título

```
tipo(escopo): descrição concisa (≤ 72 caracteres)
```

Exemplo: `feat(projects): adiciona grid responsivo com filtro por tags`

### 8.2 Descrição

Responda: **O quê?** · **Por quê?** · **Como?** · **Impacto?**

### 8.3 Changelog

```markdown
### ✨ Features

- Adiciona filtro de projetos por tecnologia

### 🐛 Fixes

- Corrige alinhamento do botão CTA no mobile
```

### 8.4 Template

```markdown
## Resumo

<!-- 2-3 frases -->

## Tipo de Mudança

- [ ] ✨ Feature [ ] 🐛 Fix [ ] ♻️ Refactor
- [ ] 📝 Docs [ ] 🎨 Style [ ] ⚡ Performance
- [ ] ✅ Test [ ] 🔧 Chore

## Changelog

### ✨ Features

- <!-- item -->

## Como Testar

1. <!-- passo -->
2. Verifique <!-- resultado -->

## Checklist

- [ ] Build passa (`npm run build`)
- [ ] Lint passa (`npm run lint`)
- [ ] Testes passam (`npm run test:run`)
- [ ] TypeScript sem erros (`npx tsc --noEmit`)
- [ ] Apenas arquivos do escopo alterados
- [ ] Sem console.log ou comentários temporários
```

---

## 9. Checklists

### 9.1 Antes do Commit

- [ ] Mudança atômica (uma responsabilidade)?
- [ ] Apenas arquivos relevantes alterados?
- [ ] Sem `console.log`, `debugger`, `TODO:`?
- [ ] Código segue padrões da seção 12?
- [ ] Componentes existentes reutilizados quando possível?
- [ ] Mensagem de commit segue Conventional Commits?

### 9.2 Antes do Push

- [ ] `npm run build` passou?
- [ ] `npm run lint` passou?
- [ ] `npm run test:run` passou?
- [ ] `npx tsc --noEmit` passou?
- [ ] `git diff` contém apenas o esperado?

### 9.3 Antes do PR

- [ ] Checklist 9.2 completo
- [ ] Título no formato `tipo(escopo): descrição`?
- [ ] Descrição explica o quê e por quê?
- [ ] Changelog preenchido?
- [ ] Passos para teste claros?

### 9.4 Antes do Merge

- [ ] CI Pipeline verde?
- [ ] Sem conflitos com `main`?
- [ ] Branch atualizado com `main`?

### 9.5 Após Merge

- [ ] `git checkout main && git pull`
- [ ] `git branch -d nome-da-branch`
- [ ] `git push origin --delete nome-da-branch`

---

## 10. Stack e Configuração

### 10.1 Stack Oficial

| Camada          | Tecnologia                                      |
| --------------- | ----------------------------------------------- |
| **Framework**   | Next.js 16.x (App Router, Turbopack)            |
| **Linguagem**   | TypeScript strict (ES2022), React 19.2          |
| **Estilização** | Tailwind CSS 3.x (dark mode: `class`)           |
| **Testes**      | Vitest + React Testing Library (jsdom, globals) |
| **Lint/Format** | ESLint (flat config) + Prettier                 |
| **Git Hooks**   | Husky + lint-staged                             |
| **CI**          | GitHub Actions (`.github/workflows/ci.yml`)     |
| **Utilitários** | `cva`, `clsx`, `tailwind-merge`                 |
| **Analytics**   | `@vercel/analytics`                             |

**NOTA:** O projeto **não** utiliza TanStack Query, Axios, Cypress nem nenhuma biblioteca de estado global. Elas foram deliberadamente omitidas por não serem necessárias (sem chamadas HTTP complexas, sem estado global compartilhado). Testes E2E (Cypress) não estão configurados — se necessário no futuro, será adicionado.

### 10.2 Configurações Críticas

```jsonc
// tsconfig.json
{ "compilerOptions": { "target": "ES2022", "strict": true, "paths": { "@/*": ["./src/*"] } } }
```

```jsonc
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "endOfLine": "auto",
}
```

```js
// eslint.config.mjs — flat config do eslint-config-next@16 (exports nativos)
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier/flat';

export default [
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'build/**', 'coverage/**', 'next-env.d.ts'],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettierConfig,
];
```

> ⚠️ O `eslint-config-next@16` exporta configs flat nativas — `FlatCompat` (`@eslint/eslintrc`) não funciona mais aqui.

### 10.3 Scripts

| Comando                 | Descrição                             |
| ----------------------- | ------------------------------------- |
| `npm run dev`           | Next.js dev server                    |
| `npm run build`         | Next.js build (Turbopack)             |
| `npm start`             | Server com build gerado               |
| `npm run lint`          | ESLint                                |
| `npm run lint:fix`      | ESLint auto-fix                       |
| `npm run format`        | Prettier — formatar                   |
| `npm run format:check`  | Prettier — verificar                  |
| `npm run test`          | Vitest (watch)                        |
| `npm run test:run`      | Vitest (run once)                     |
| `npm run test:coverage` | Vitest com cobertura (threshold ≥80%) |
| `npm run test:watch`    | Vitest (watch interativo)             |
| `npm run analyze`       | Build com bundle analyzer             |

---

## 11. Estrutura do Projeto

```
tharcioport/
└── src/
    ├── app/
    │   ├── components/
    │   │   ├── sections/   # Hero, Projects, Process, Capabilities, About, Contact
    │   │   ├── ui/         # Button, Pill, Section, SectionHeader, RevealOnScroll, Icons, TechIcons, ProjectScreenShowcase, etc.
    │   │   ├── Navbar.tsx, MobileNav.tsx, Footer.tsx, BackToTop.tsx
    │   │   ├── ThemeProvider.tsx, ThemeSwitcher.tsx, ClientAnalytics.tsx
    │   │   └── __tests__/
    │   ├── hooks/           # useScrollReveal, useActiveSection
    │   ├── layout.tsx       # RootLayout (SEO, Schema.org, fontes)
    │   ├── page.tsx         # Home (Hero → Projects → Process → ... → Contact)
    │   ├── error.tsx        # Error boundary
    │   ├── not-found.tsx    # Página 404
    │   ├── globals.css      # Tailwind directives + estilos globais
    │   ├── opengraph-image.tsx, robots.ts, sitemap.ts
    ├── data/                # capabilities, constants, experience, projects
    │   └── __tests__/
    └── lib/
        └── utils.ts         # cn()
```

---

## 12. Padrões de Código

### 12.1 Componentes React

**Regras de `'use client'`:**

- Use **apenas** quando necessário (hooks, eventos, interatividade)
- Seções (`sections/`) devem ser **server components** quando possível
- Componentes são Server Components por padrão, inclusive em `ui/`
- Use `'use client'` somente quando hooks, eventos ou APIs do navegador exigirem
- Prefira receber dados como props (server→client)

**Padrão de componente UI:**

```tsx
const buttonVariants = cva('inline-flex items-center justify-center rounded-md', {
  variants: {
    variant: { primary: 'bg-accent ...', outline: 'border ...', ghost: '...' },
    size: { sm: 'px-3 py-1.5', default: 'px-4 py-2', lg: 'px-6 py-3', icon: 'size-10' },
  },
  defaultVariants: { variant: 'primary', size: 'default' },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
  )
);
Button.displayName = 'Button';
```

### 12.2 Hooks

| Hook                             | Descrição                           | Retorno             |
| -------------------------------- | ----------------------------------- | ------------------- |
| `useScrollReveal<T>(threshold?)` | IntersectionObserver para animações | `{ ref, visible }`  |
| `useActiveSection(ids)`          | Scroll spy                          | `string` (id ativo) |

### 12.3 Utilitários

```ts
// Use cn() para classes condicionais em código novo ou modificado.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 12.4 Ícones

Importe de `@/app/components/ui/Icons`:

`ArrowRightIcon`, `ArrowUpIcon`, `DocumentIcon`, `MenuIcon`, `CloseIcon`,
`SunIcon`, `MoonIcon`, `MailIcon`, `GithubIcon`, `LinkedinIcon`,
`ExternalLinkIcon`, `CheckIcon`, `CopyIcon`, `CodeIcon`, `DatabaseIcon`,
`RocketIcon`, `SearchIcon`, `ChevronLeftIcon`, `ChevronRightIcon`,
`TechBadgeIcon` (requer `label`)

Importe de `@/app/components/ui/TechIcons`:

`TechIcon` (resolver automático por nome), `NextJsIcon`, `ReactIcon`,
`TypeScriptIcon`, `TailwindIcon`, `NodeJsIcon`, `RestApiIcon`,
`NextAuthIcon`, `ZodIcon`, `PrismaIcon`, `PostgresIcon`, `SupabaseIcon`,
`RlsIcon`, `VercelIcon`, `VitestIcon`, `CypressIcon`, `GitIcon`,
`GitHubIcon`, `GitHubActionsIcon`

### 12.5 Organização de Imports

```
1. React/Next.js
2. Bibliotecas terceiras
3. Componentes @/app/components
4. Hooks @/app/hooks
5. Dados @/data
6. Utilitários @/lib
7. CSS

(Linha em branco entre grupos)
```

### 12.6 CSS Custom Properties

O projeto utiliza variáveis CSS para fontes (via `next/font/google`):

```css
/* Definidas em layout.tsx e consumidas via Tailwind */
font-sans: var(--font-geist-sans); /* Geist Sans para body e headings */
font-mono: var(--font-geist-mono); /* Geist Mono para código e metadados */
```

**Regra:** Use as classes Tailwind `font-sans`, `font-heading` (usa Geist Sans) e `font-mono`. Não declare novas variáveis CSS sem necessidade.

### 12.7 Nomenclatura

| Entidade          | Padrão            | Exemplos                  |
| ----------------- | ----------------- | ------------------------- |
| Componentes       | PascalCase        | `ProjectCard`, `Navbar`   |
| Hooks             | camelCase + `use` | `useScrollReveal`         |
| Arquivos de dados | kebab-case        | `capabilities.ts`         |
| Constantes        | UPPER_SNAKE_CASE  | `SECTION_IDS`             |
| Variáveis         | camelCase         | `activeSection`           |
| Tipos/Interfaces  | PascalCase        | `Project`, `Capability`   |
| Pastas            | camelCase         | `sections`, `ui`, `hooks` |

---

## 13. Tipos de Dados

### 13.1 Project

```typescript
type Project = {
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
```

### 13.2 Capability

```typescript
type Capability = {
  title: string;
  description: string;
  technologies: string[];
  usedIn: string[];
};
```

### 13.3 ExperienciaAnterior

```typescript
type ExperienciaAnterior = {
  period: string;
  role: string;
  org: string;
  summary: string;
};
```

### 13.4 Constantes

```typescript
EMAIL = 'tharciosantos09@gmail.com';
SITE_URL = 'https://tharcio-portfolio.vercel.app';
GITHUB_URL = 'https://github.com/tharciosantos';
LINKEDIN_URL = 'https://www.linkedin.com/in/tharcio-santos-dev/';
RESUME_URL = '/curriculo-tharcio-santos.pdf';
SECTION_IDS = ['projetos', 'processo', 'habilidades', 'sobre-mim', 'contato'] as const;
navLinks = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#processo', label: 'Processo' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#sobre-mim', label: 'Sobre' },
  { href: '#contato', label: 'Contato', cta: true },
];
```

---

## 14. Estilos e Tema

### 14.1 Tema

- `next-themes` com `attribute="class"` — tema inicial: sistema
- Classes condicionais: `dark:` para escuro, sem prefixo para claro

### 14.2 Cores

**Paleta:** Verde Musgo Imperial (accent) + Âmbar Vermilion (highlight) em fundos neutros terra.

| Uso              | Light                           | Dark                           |
| ---------------- | ------------------------------- | ------------------------------ |
| Fundo            | `bg-light-bg` (#F7F4EE)         | `bg-dark-bg` (#141712)         |
| Card             | `bg-light-card` (#FFFFFF)       | `bg-dark-card` (#1C201A)       |
| Superfície       | `bg-light-surface` (#EFECE3)    | `bg-dark-surface` (#242921)    |
| Texto primário   | `text-primary-text` (#23271F)   | `text-light-text` (#ECEFE8)    |
| Texto secundário | `text-secondary-text` (#5F6656) | `text-dark-text` (#97A090)     |
| Borda            | `border-border-light` (#DFD9CC) | `border-border-dark` (#2E362A) |
| Accent           | `bg-accent` (#3E5136)           | `bg-accent` (#3E5136)          |

Hover: `accent-hover` (#2E3D28) · Light: `accent-light` (#7A9B67)  
Highlight: `highlight` (#D95B30) · Hover: `highlight-hover` (#C24C23)

### 14.3 Fontes

- **Body:** Geist Sans (`var(--font-geist-sans)`)
- **Heading:** Geist Sans (`var(--font-geist-sans)`)
- **Mono:** Geist Mono (`var(--font-geist-mono)`)
- Carregadas via `next/font/google` em `layout.tsx`

### 14.4 Animações

| Animação         | Duração | Uso                        |
| ---------------- | ------- | -------------------------- |
| `fade-in`        | 0.8s    | Entrada simples            |
| `fade-up`        | 0.8s    | Revelação com deslocamento |
| `fade-down`      | 0.5s    | Entrada do topo            |
| `scale-x-in`     | 0.6s    | Barra horizontal           |
| `ping`           | 2s      | Efeito pulsante            |
| `stagger-in`     | 0.5s    | Entrada em cascata         |
| `reveal-up`      | 0.44s   | Revelação com clip-path    |
| `gradient-shift` | 8s      | Gradiente animado          |

**Stagger classes:** `stagger-1` a `stagger-6` (100ms delay cada)

---

## 15. Animações e Hooks

### 15.1 RevealOnScroll

```tsx
<RevealOnScroll as="section" delay={200}>
  <h2>Conteúdo animado</h2>
</RevealOnScroll>
```

Props: `children`, `className`, `as` (tag, padrão `div`), `delay` (ms)

### 15.2 prefers-reduced-motion

Todas as animações desativadas quando ativo. `useScrollReveal` marca como visível imediatamente.

### 15.3 useScrollReveal

```ts
function useScrollReveal<T extends HTMLElement>(threshold = 0.12) {
  // IntersectionObserver + prefers-reduced-motion
  // Retorna { ref, visible }
}
```

### 15.4 useActiveSection

```ts
function useActiveSection(ids: readonly string[]): string {
  // rootMargin: '-40% 0px -55% 0px'
  // Retorna id da seção visível
}
```

---

## 16. Regras para IA

### 16.1 Regras Absolutas

| #   | Regra                                               | Motivo                     |
| --- | --------------------------------------------------- | -------------------------- |
| 1   | Nunca alterar código **fora do escopo**             | Cada mudança custa revisão |
| 2   | Nunca atualizar dependências sem autorização        | Pode quebrar build         |
| 3   | Nunca modificar config do projeto sem autorização   | CI valida configurações    |
| 4   | Nunca fazer alterações **cosméticas**               | Polui diff                 |
| 5   | Nunca misturar refactor com feature no mesmo commit | Viola atomicidade          |
| 6   | Nunca fazer **force push**                          | Destrói histórico          |
| 7   | Nunca trabalhar diretamente na `main`               | Exceto docs autorizados    |
| 8   | Nunca ignorar CI — se falhar, **corrija**           | CI é a verdade             |

### 16.2 Regras Obrigatórias

| #   | Regra                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------- |
| 1   | Sempre revisar `git diff` antes de commitar                                                             |
| 2   | Sempre remover `console.log` e comentários temporários                                                  |
| 3   | Sempre preservar a arquitetura existente                                                                |
| 4   | Sempre reutilizar componentes existentes                                                                |
| 5   | Sempre preferir mudanças pequenas                                                                       |
| 6   | Sempre explicar decisões importantes no PR                                                              |
| 7   | Usar `cn()` para classes condicionais em código novo ou modificado; classes estáticas podem ser strings |
| 8   | Usar `cva` em sistemas reutilizáveis de variantes de estilo                                             |

---

## 17. O que NUNCA Fazer

- **NUNCA** modificar `tsconfig.json`, `tailwind.config.js`, `next.config.mjs`, `eslint.config.mjs`
- **NUNCA** modificar `.github/workflows/ci.yml`, `.husky/pre-commit`, `vitest.config.ts`
- **NUNCA** rodar `npm install`/`uninstall` ou `npm audit fix` sem autorização
- **NUNCA** fazer `git push --force` ou `git push --force-with-lease`
- **NUNCA** commitar na `main` diretamente
- **NUNCA** misturar tipos de mudança no mesmo commit
- **NUNCA** deixar `console.log`, `debugger`, `TODO:`, `FIXME:` no código
- **NUNCA** ignorar erros TypeScript (`strict: true` está ativo)
- **NUNCA** introduzir dependências para algo que o código atual já resolve
- **NUNCA** criar componente novo se um existente pode ser estendido
- **NUNCA** remover props ou alterar interfaces sem atualizar consumidores
- **NUNCA** desativar regras de lint sem justificativa documentada

---

## 18. Validação e Qualidade

### 18.1 Validação Obrigatória

```bash
npx tsc --noEmit     # 1° — tipos
npm run lint          # 2° — qualidade
npm run test:run      # 3° — comportamento
npm run build         # 4° — build (mais lento)
```

### 18.2 CI Pipeline

Executado em push/PR para `main` (Node 20):

**Job 1 — quality:**

1. `npm ci` · 2. `npm run format:check` · 3. `npm run lint` · 4. `npx tsc --noEmit`

**Job 2 — build-and-test** (após quality):

1. `npm run test:coverage` (Valida threshold de cobertura ≥ 80% stmts) · 2. `npm run build` (com cache do `.next`)

### 18.3 Husky + lint-staged

- **pre-commit:** `npx lint-staged` (ESLint `--fix` + Prettier em `*.{js,jsx,ts,tsx}`; Prettier em `*.{css,json,md,yml,yaml}`)

### 18.4 Quando Usar Cada Tipo de Teste

| Tipo           | Ferramenta                | Quando usar                                                                                  |
| -------------- | ------------------------- | -------------------------------------------------------------------------------------------- |
| **Unitário**   | Vitest + RTL              | Testar componentes, hooks, funções utilitárias e dados no nível de unidade                   |
| **Integração** | Vitest + RTL              | Testar interações entre componentes (ex: formulário + validação)                             |
| **E2E**        | Cypress (não configurado) | Testar fluxos completos do usuário. Adicionar **apenas** quando houver necessidade explícita |

**Testes manuais:** Execute `npm run dev` e verifique visualmente a mudança no navegador. Foco em: renderização correta, responsividade (mobile/desktop), tema light/dark e comportamento de animações.

---

## 19. Performance

### 19.1 Boas Práticas

- **Bundler:** **Turbopack** (padrão do Next 16) — sem config customizada de bundler
- **Imagens:** formatos `.avif`/`.webp` (configurado), `loading="lazy"` abaixo da dobra
- **Bundle:** prefira dynamic imports; evite imports grandes desnecessários
- **Re-renders:** evite `useEffect` desnecessário; prefira estado derivado
- **CSS:** `experimental.optimizeCss: true` ativo
- **Console:** `removeConsole` em produção com `{ exclude: ['error'] }` (preserva `console.error` do `error.tsx`)
- **Compressão:** `compress: true` ativo

### 19.2 Métricas Alvo

- Lighthouse: Performance ≥ 95 · Acessibilidade ≥ 95 · Práticas ≥ 95 · SEO ≥ 95
- FCP < 1.5s · LCP < 2.5s · CLS < 0.1

---

## 20. Segurança, SEO e Acessibilidade

### 20.1 Segurança

- `poweredByHeader: false` (remove `X-Powered-By: Next.js`)
- Contato via `mailto` e cópia de e-mail, sem formulário ou processamento de entrada
- Sem secrets no código — use variáveis de ambiente
- CI com `contents: read` (menor privilégio)

### 20.2 SEO

- Metadata completa em `layout.tsx`: title (`%s | Tharcio Santos`), description, keywords, Open Graph, Twitter cards
- Schema.org JSON-LD: Person, WebSite, ProfilePage
- Sitemap (`sitemap.ts`) + Robots (`robots.ts`)
- OG image estática pré-gerada no build (`opengraph-image.tsx`, rota `○`)

### 20.3 Acessibilidade

- **Skip link:** `.skip-link` ao receber foco
- **Focus-visible:** anel de foco com `accent`/`accent-light`
- **Reduced motion:** animações desativadas em `prefers-reduced-motion: reduce`
- **ARIA:** labels e atributos em componentes interativos
- **Scrollbar customizada:** webkit (claro/escuro)

---

## 21. Consistência de Conteúdo

| Regra           | Valor             |
| --------------- | ----------------- |
| Conclusão ADS   | **julho de 2027** |
| ManutFlow       | **em produção**   |
| Idioma conteúdo | Português (BR)    |
| Idioma código   | Inglês            |

**Superfícies a verificar:** README.md, AGENTS.md, código fonte, currículo, GitHub, LinkedIn. Todas devem ter datas, status de projetos e URLs consistentes.

---

## 22. Troubleshooting

### 22.1 Build Falha

```
Possíveis causas:
1. Erro de tipo → npx tsc --noEmit
2. Import inexistente → verifique caminhos
3. Módulo não encontrado → npm ci
4. Classe Tailwind inválida → verifique tailwind.config.js
```

### 22.2 Lint Falha

```
1. Variável não utilizada → remova ou use
2. Import não utilizado → remova
3. Hook com deps incorretas → ajuste array
4. any explícito → substitua pelo tipo
```

### 22.3 Testes Falham

```
1. Snapshot desatualizado → atualize
2. Componente mudou de interface → atualize testes
3. Mock desatualizado → atualize
4. Timezone-dependente → vi.setSystemTime()
```

### 22.4 CI Falha

```
1. Husky bloqueou → npx lint-staged manual
2. Formatação → npm run format
3. TypeScript falha no CI mas não local → npx tsc --noEmit
4. Teste local passa, CI falha → verifique ambiente (Node, OS)
```

### 22.5 Git

```
git push rejeitado → git merge main (resolver conflitos)
Force push bloqueado → git pull --rebase
Husky rejeitou commit → corrija lint/formatação
```

---

## 23. Exemplos Completos

### 23.1 Adicionar Projeto ao Portfólio

**Tarefa:** Adicionar um projeto chamado "TaskFlow"

**Branch:** `feat/adiciona-projeto-taskflow`

**Commits:**

```
feat(projects): adiciona TaskFlow à lista de projetos
test(projects): adiciona teste de sanidade para novos projetos
```

**Arquivos:** `src/data/projects.ts` + `src/data/__tests__/projects.test.ts`

**PR:**

```markdown
## Resumo

Adiciona o projeto TaskFlow ao portfólio.

## Changelog

### ✨ Features

- Adiciona TaskFlow (featured) aos projetos

## Como Testar

1. Acesse a home e role até "Projetos em Destaque"
2. Verifique TaskFlow no grid

## Checklist

- [x] Build · Lint · Testes · TypeScript OK
```

### 23.2 Corrigir Bug Mobile

**Tarefa:** Menu mobile não fecha ao clicar em link

**Branch:** `fix/menu-mobile-fecha-ao-clicar-link`

**Commit:** `fix(mobile): fecha menu ao clicar em link de navegação`

**Arquivo:** `src/app/components/MobileNav.tsx`

**Mudança:**

```tsx
// ANTES
<button onClick={() => setOpen(false)}>{link.label}</button>

// DEPOIS
<button onClick={() => { setOpen(false); router.push(link.href); }}>
  {link.label}
</button>
```

### 23.3 Refatorar Hook

**Tarefa:** Extrair scroll spy para hook

**Branch:** `refactor/extrai-hook-useActiveSection`

**Commits:**

```
refactor(hooks): extrai useActiveSection do Navbar para hook próprio
```

**Arquivos:** `src/app/hooks/useActiveSection.ts` (novo) + `Navbar.tsx` (simplificado)

---

## 24. Fluxograma ASCII

```
╔══════════════════════════════════════════════════════════╗
║        CICLO COMPLETO DE DESENVOLVIMENTO                ║
╚══════════════════════════════════════════════════════════╝

                  ┌─────────────┐
                  │  TAREFA     │
                  └──────┬──────┘
                         ▼
                  ┌─────────────┐
                  │  CONTEXTO   │
                  └──────┬──────┘
                         ▼
                  ┌─────────────┐
           ┌──────┤ git pull    ├──────┐
           │      │   main      │      │
           ▼      └──────┬──────┘      ▼
    ┌──────────┐         ▼        ┌──────────┐
    │ feat/    │  ┌────────────┐  │ refactor/│
    │ branch   │  │ fix/branch │  │  branch  │
    └────┬─────┘  └─────┬──────┘  └────┬─────┘
         └──────────────┼──────────────┘
                        ▼
                 ┌──────────────┐
                 │ IMPLEMENTAR  │
                 │  (mínimo)    │
                 └──────┬───────┘
                        ▼
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
   ┌──────────┐  ┌──────────┐  ┌──────────┐
   │  BUILD   │  │  LINT    │  │  TESTES  │
   └────┬─────┘  └────┬─────┘  └────┬─────┘
        └──────────────┼──────────────┘
                       ▼
                ┌──────────────┐
                │  REVISAR     │
                │  (diff +     │
                │   reviewer)  │
                └──────┬───────┘
                       ▼
                ┌──────────────┐
                │   COMMIT     │
                └──────┬───────┘
                       ▼
                ┌──────────────┐
                │    PUSH      │
                └──────┬───────┘
                       ▼
                ┌──────────────┐
                │   CRIAR PR   │
                └──────┬───────┘
                       ▼
                ┌──────────────┐
                │  CI VERDE?   │
                └──────┬───────┘
                    ┌──┴──┐
                    │     │
                    ▼     ▼
              ┌────────┐  ┌──────────┐
              │ MERGE  │  │ CORRIGIR │◄────┐
              └────┬───┘  └─────┬────┘     │
                   ▼            │          │
            ┌────────────┐      │          │
            │ git pull   │◄─────┘          │
            │   main     │                 │
            └──────┬─────┘                 │
                   ▼                       │
            ┌────────────┐                 │
            │ DEL BRANCH │◄────────────────┘
            │ local +    │
            │  remota    │
            └────────────┘
```

---

> **Versão 2.2** · Fonte única de verdade para agentes de IA · Mantido por Tharcio Santos
>
> | Versão | Data     | Mudanças                                                                                                                                                    |
> | ------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | 1.0    | —        | Documentação inicial do projeto                                                                                                                             |
> | 2.0    | Jul/2026 | Manual operacional completo para agentes de IA                                                                                                              |
> | 2.1    | Ago/2026 | Alinha stack à migração Next 16 (Turbopack), flat config do ESLint, CI com cobertura e pre-commit com lint                                                  |
> | 2.2    | Set/2026 | Corrige divergências: fontes (Geist Sans/Mono), paleta (moss green #3E5136), tipos (kind sem 'building'), SECTION_IDS (sem 'experiencia'), ícones completos |
