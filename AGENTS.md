# Tharcio Santos â€” PortfÃ³lio

> Manual Operacional para Agentes de IA Â· v2.3

Este documento Ã© a **fonte Ãºnica de verdade** para agentes que trabalham neste repositÃ³rio. Qualquer divergÃªncia entre o comportamento do agente e este manual Ã© um bug â€” reporte ao usuÃ¡rio.

---

## Ãndice

1. [IntroduÃ§Ã£o](#1-introduÃ§Ã£o)
2. [MissÃ£o do Agente](#2-missÃ£o-do-agente)
3. [Filosofia do Projeto](#3-filosofia-do-projeto)
4. [Ordem de Prioridade](#4-ordem-de-prioridade)
5. [Workflow ObrigatÃ³rio](#5-workflow-obrigatÃ³rio)
6. [Workflow Git](#6-workflow-git)
7. [Commits (Conventional Commits)](#7-commits-conventional-commits)
8. [Pull Request](#8-pull-request)
9. [Checklists](#9-checklists)
10. [Stack e ConfiguraÃ§Ã£o](#10-stack-e-configuraÃ§Ã£o)
11. [Estrutura do Projeto](#11-estrutura-do-projeto)
12. [PadrÃµes de CÃ³digo](#12-padrÃµes-de-cÃ³digo)
13. [Tipos de Dados](#13-tipos-de-dados)
14. [Estilos e Tema](#14-estilos-e-tema)
15. [AnimaÃ§Ãµes e Hooks](#15-animaÃ§Ãµes-e-hooks)
16. [Regras para IA](#16-regras-para-ia)
17. [O que NUNCA Fazer](#17-o-que-nunca-fazer)
18. [ValidaÃ§Ã£o e Qualidade](#18-validaÃ§Ã£o-e-qualidade)
19. [Performance](#19-performance)
20. [SeguranÃ§a, SEO e Acessibilidade](#20-seguranÃ§a-seo-e-acessibilidade)
21. [ConsistÃªncia de ConteÃºdo](#21-consistÃªncia-de-conteÃºdo)
22. [Troubleshooting](#22-troubleshooting)
23. [Exemplos Completos](#23-exemplos-completos)
24. [Fluxograma ASCII](#24-fluxograma-ascii)

---

## 1. IntroduÃ§Ã£o

### 1.1 Objetivo

Servir como **manual operacional oficial** para agentes de IA â€” nÃ£o apenas documentaÃ§Ã£o de projeto, mas um sistema de regras, workflows e padrÃµes que garante mudanÃ§as previsÃ­veis, consistentes e de alta qualidade.

### 1.2 Escopo

Cobre: fluxo de trabalho completo (tarefa â†’ PR â†’ merge), padrÃµes de cÃ³digo, Git/commits/PRs, regras obrigatÃ³rias, proibiÃ§Ãµes e contexto tÃ©cnico completo do projeto.

### 1.3 Como Utilizar

1. Leia este documento ao iniciar **qualquer** tarefa.
2. Siga a [Ordem de Prioridade](#4-ordem-de-prioridade) religiosamente.
3. Consulte seÃ§Ãµes relevantes durante a implementaÃ§Ã£o.
4. Execute os [Checklists](#9-checklists) antes de cada etapa crÃ­tica.
5. Conflito entre manual e solicitaÃ§Ã£o do usuÃ¡rio â†’ **questione o usuÃ¡rio**.

---

## 2. MissÃ£o do Agente

| PrincÃ­pio           | DescriÃ§Ã£o                                                |
| -------------------- | ---------------------------------------------------------- |
| **Previsibilidade**  | MudanÃ§as que outro engenheiro possa revisar sem surpresas |
| **MÃ­nimo Impacto**  | Alterar exclusivamente o necessÃ¡rio para cumprir a tarefa |
| **Rastreabilidade**  | Cada mudanÃ§a com propÃ³sito claro e commit correspondente |
| **Responsabilidade** | NÃ£o misturar refactor com feature, nÃ£o alterar escopo    |

---

## 3. Filosofia do Projeto

1. **Simplicidade** â€” SoluÃ§Ãµes diretas. NÃ£o generalizar antes do tempo.
2. **ConsistÃªncia** â€” Siga os padrÃµes observados no cÃ³digo existente.
3. **Previsibilidade** â€” Mesma entrada deve produzir mesma saÃ­da.
4. **Legibilidade** â€” Nomes descritivos > comentÃ¡rios. Estrutura clara > "cÃ³digo inteligente".
5. **MudanÃ§as Pequenas** â€” 3 PRs pequenos > 1 PR gigante. Commits atÃ´micos.
6. **Responsabilidade Ãšnica** â€” Cada componente/funÃ§Ã£o/arquivo com um propÃ³sito.
7. **ReutilizaÃ§Ã£o** â€” Antes de criar, procure no projeto: `ui/`, `hooks/`, `lib/`, `data/`.

---

## 4. Ordem de Prioridade

Execute **todas** as etapas em ordem. Pular Ã© proibido.

```
 1. ENTENDER A TAREFA â”€â”€â–º 2. ENTENDER IMPACTO â”€â”€â–º 3. LOCALIZAR ARQUIVOS
    â†“
 4. REUTILIZAR COMPONENTES â”€â”€â–º 5. IMPLEMENTAR â”€â”€â–º 6. VALIDAR
    â†“
 7. REVISAR â”€â”€â–º 8. COMMITAR â”€â”€â–º 9. CRIAR PR â”€â”€â–º 10. LIMPAR
```

| Etapa              | AÃ§Ã£o                                                                                    |
| ------------------ | ----------------------------------------------------------------------------------------- |
| **1. Entender**    | Leia a solicitaÃ§Ã£o, identifique o problema real, questione ambiguidades                 |
| **2. Impacto**     | Quais arquivos? DependÃªncias? Quebra algo existente?                                     |
| **3. Localizar**   | Use as ferramentas de busca e leitura disponÃ­veis, preferindo `rg`. Leia antes de editar |
| **4. Reutilizar**  | Verifique `ui/`, `hooks/`, `lib/`, `data/` antes de criar algo novo                       |
| **5. Implementar** | MÃ­nimo de mudanÃ§as. Siga padrÃµes (seÃ§Ã£o 12)                                          |
| **6. Validar**     | `build` + `lint` + `test:run` + `tsc --noEmit` + `format:check`                           |
| **7. Revisar**     | FaÃ§a revisÃ£o manual com `git diff`. Remova `console.log`                                |
| **8. Commitar**    | Conventional Commits. AtÃ´mico e descritivo                                               |
| **9. PR**          | Template da seÃ§Ã£o 8.4                                                                   |
| **10. Limpar**     | Excluir branches local e remota apÃ³s merge                                               |

---

## 5. Workflow ObrigatÃ³rio

```
RECEBER TAREFA â†’ ANALISAR CONTEXTO â†’ git pull origin main
â†’ git checkout -b tipo/descricao â†’ IMPLEMENTAR â†’ npm run build
â†’ npm run lint â†’ npm run test:run â†’ npx tsc --noEmit â†’ npm run format:check
â†’ REVISAR DIFF â†’ COMMIT â†’ git push -u origin branch â†’ CRIAR PR â†’ MERGE (CI verde)
â†’ git checkout main && git pull â†’ git branch -d branch
â†’ git push origin --delete branch
```

### 5.1 Receber Tarefa

Leia, interprete e confirme com o usuÃ¡rio.

### 5.2 Analisar Contexto

Use as ferramentas de busca e leitura disponÃ­veis para entender o estado do cÃ³digo. Prefira
`rg` para localizar arquivos e conteÃºdo.

### 5.3 Atualizar Main

```bash
git checkout main && git pull origin main
```

Nunca trabalhe em `main` desatualizada.

### 5.4 Criar Branch

```bash
git checkout -b tipo/descricao-curta
```

Siga a nomenclatura da [seÃ§Ã£o 6.3](#63-nomenclatura-de-branches).

### 5.5 Implementar

Siga os padrÃµes da seÃ§Ã£o 12.

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

FaÃ§a uma revisÃ£o manual adicional com `git diff`.

### 5.10 Commit

```bash
git add <arquivos>
git commit -m "tipo(escopo): descriÃ§Ã£o concisa"
```

### 5.11 Push

```bash
git push -u origin nome-da-branch
```

### 5.12 Criar PR

Siga o template (seÃ§Ã£o 8.4).

### 5.13 Merge

ApÃ³s CI verde.

### 5.14â€“5.16 Limpeza

```bash
git checkout main && git pull origin main
git branch -d nome-da-branch
git push origin --delete nome-da-branch
```

---

## 6. Workflow Git

### 6.1 Modelo: GitHub Flow

Apenas `main` (estÃ¡vel, sempre deployÃ¡vel) + branches de curta duraÃ§Ã£o.

```
main â”€â”€â”€â”€â”¬â”€â”€â”€â”€ feat/abc â”€â”€ PR â”€â”€ merge â”€â”€â–º main
         â””â”€â”€â”€â”€ fix/xyz â”€â”€â”€â”€ PR â”€â”€ merge â”€â”€â–º main
```

### 6.2 Regras

- **PR obrigatÃ³rio** para qualquer alteraÃ§Ã£o em `main`
- **Nunca commitar diretamente na `main`**
- **Nunca force push**

### 6.3 Nomenclatura de Branches

Use **kebab-case**, mÃ¡x 50 caracteres, em portuguÃªs.

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
tipo(escopo): descriÃ§Ã£o (â‰¤ 72 caracteres)

[corpo â€” explica o porquÃª]

[rodapÃ© â€” BREAKING CHANGE ou issues]
```

### 7.2 Tipos

| Tipo       | Quando usar                              | Exemplo                                            |
| ---------- | ---------------------------------------- | -------------------------------------------------- |
| `feat`     | Nova funcionalidade                      | `feat(projects): adiciona filtro por tecnologia`   |
| `fix`      | CorreÃ§Ã£o de bug                        | `fix(navbar): menu sobrepondo conteÃºdo no mobile` |
| `docs`     | DocumentaÃ§Ã£o                           | `docs(readme): atualiza comandos de instalaÃ§Ã£o`  |
| `style`    | FormataÃ§Ã£o, CSS (sem mudar lÃ³gica)    | `style(button): ajusta padding do outline`         |
| `refactor` | MudanÃ§a interna sem mudar comportamento | `refactor(hooks): extrai lÃ³gica para hook`        |
| `perf`     | Melhoria de performance                  | `perf(images): adiciona lazy loading nas imagens`  |
| `test`     | Testes                                   | `test(contact): cobre validaÃ§Ã£o de formulÃ¡rio`  |
| `build`    | Build system ou dependÃªncias            | `build(deps): atualiza next para 16.3.0`           |
| `ci`       | CI/CD                                    | `ci(actions): adiciona cache ao workflow`          |
| `chore`    | ManutenÃ§Ã£o geral                       | `chore: remove console.log de debug`               |
| `revert`   | ReversÃ£o de commit                      | `revert: volta commit abc1234 que quebrou build`   |

### 7.3 Regras

- **Imperativo:** "adiciona", nÃ£o "adicionado" nem "adicionando"
- **Linha â‰¤ 72 caracteres**
- **Escopo opcional** mas recomendado
- **Corpo separado** por linha em branco â€” explica **porquÃª** e **como**

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
git commit -m "docs(readme): atualiza comandos de instalaÃ§Ã£o"

# Style
git commit -m "style(button): padroniza padding das variantes"

# Refactor
git commit -m "refactor: extrai funÃ§Ã£o cn para lib/utils"

# Perf
git commit -m "perf(images): adiciona lazy loading nos projetos"

# Test
git commit -m "test(button): adiciona teste para variante outline"

# Build
git commit -m "build(deps): atualiza next para 16.3.0"

# CI
git commit -m "ci(actions): adiciona cache para acelerar build"

# Chore
git commit -m "chore: remove console.log e comentÃ¡rios temporÃ¡rios"

# Revert
git commit -m "revert: volta commit abc1234 que quebrou build"

# Breaking change
git commit -m "feat: migra seÃ§Ãµes para server components

BREAKING CHANGE: Hero e About agora sÃ£o server components.
Props de cliente foram removidas â€” use data attributes."
```

---

## 8. Pull Request

### 8.1 TÃ­tulo

```
tipo(escopo): descriÃ§Ã£o concisa no presente do indicativo (â‰¤ 72 caracteres)
```

Exemplo: `feat(portfolio): adiciona prova visual dos sistemas`

### 8.2 Regras de RedaÃ§Ã£o e Densidade TÃ©cnica (Gold Standard)

Para garantir mÃ¡xima clareza para revisores humanos e indexadores de cÃ³digo:

- **Sem emojis nos cabeÃ§alhos ou listas:** Use Markdown puro (`### Features`, `### Fixes`, `### Docs`, `- [x] Feature`). Ã‰ proibido usar emojis como `âœ¨`, `ðŸ›`, `ðŸ“` no corpo ou tÃ­tulo do PR.
- **Resumo de alta densidade (1 a 3 frases):** Descreva o que foi entregue citando nominalmente os mÃ³dulos, componentes, pÃ¡ginas, rotas ou mÃ©tricas impactadas. Evite frases genÃ©ricas.
- **Verbos de aÃ§Ã£o na 3Âª pessoa do singular:** Inicie os itens do Changelog com verbos no presente do indicativo: _Adiciona_, _Atualiza_, _Corrige_, _Remove_, _Sincroniza_, _Concentra_, _Extrai_.
- **Como Testar reprodutÃ­vel:** Comece sempre com o comando de execuÃ§Ã£o (`1. Rode npm run dev.`) e indique as rotas exatas (ex: `/projetos/manutflow`, `/projetos/helpflow`, etc.) ou interaÃ§Ãµes exatas para validar a entrega.
- **Tipo de MudanÃ§a vertical e limpo:** Liste uma opÃ§Ã£o por linha, sem emojis, marcando com `[x]` apenas os tipos aplicÃ¡veis ao PR.
- **ValidaÃ§Ã£o real antes de marcar o Checklist:** O agente DEVE executar cada comando do checklist no terminal e confirmar saÃ­da limpa (exit code 0) antes de marcar `[x]`.

### 8.3 Changelog

Agrupe apenas pelas categorias presentes no PR, em texto limpo:

```markdown
### Features

- Adiciona hero com prova visual dos sistemas
- Atualiza os cards com novas capturas

### Docs

- Atualiza o screenshot do README
```

### 8.4 Template Oficial

```markdown
## Resumo

<!-- 1 a 3 frases diretas explicando o que mudou, quais componentes/rotas foram afetados e o impacto. -->

## Tipo de MudanÃ§a

- [ ] Feature
- [ ] Fix
- [ ] Refactor
- [ ] Docs
- [ ] Test
- [ ] Chore

## Changelog

### Features

- <!-- Verbo no presente + entrega objetiva -->

## Como Testar

1. Rode `npm run dev`.
2. Abra `<!-- rota ou pÃ¡gina -->` e confira `<!-- comportamento esperado -->`.

## Checklist

- [ ] Build passa (`npm run build`)
- [ ] Lint passa (`npm run lint`)
- [ ] Testes passam (`npm run test:run`)
- [ ] TypeScript sem erros (`npx tsc --noEmit`)
- [ ] FormataÃ§Ã£o OK (`npm run format:check`)
- [ ] Apenas arquivos do escopo alterados
```

### 8.5 Exemplo Real de ReferÃªncia (Gold Standard)

TÃ­tulo: `feat(portfolio): adiciona prova visual dos sistemas`

```markdown
## Resumo

Adiciona prova visual dos sistemas na home, com hero e cards usando capturas reais, e atualiza as capturas de ManutFlow, HelpFlow, DevLinks, Lista de Mercado e Crypto Dashboard. TambÃ©m atualiza o screenshot do README.

## Tipo de MudanÃ§a

- [x] Feature
- [x] Docs

## Changelog

### Features

- Adiciona hero com prova visual dos sistemas
- Atualiza os cards com novas capturas
- Atualiza as capturas dos cases ManutFlow e HelpFlow
- Atualiza Lista de Mercado e Crypto Dashboard para as novas imagens

### Docs

- Atualiza o screenshot do README

## Como Testar

1. Rode `npm run dev`.
2. Abra a home e confira o hero e os cards de projetos.
3. Abra `/projetos/manutflow` e `/projetos/helpflow`.
4. Confira os cards de DevLinks, Lista de Mercado e Crypto Dashboard.
5. Verifique o screenshot atualizado no README.

## Checklist

- [x] Build passa (`npm run build`)
- [x] Lint passa (`npm run lint`)
- [x] Testes passam (`npm run test:run`)
- [x] TypeScript sem erros (`npx tsc --noEmit`)
- [x] FormataÃ§Ã£o OK (`npm run format:check`)
- [x] Apenas arquivos do escopo alterados
```

---

## 9. Checklists

### 9.1 Antes do Commit

- [ ] MudanÃ§a atÃ´mica (uma responsabilidade)?
- [ ] Apenas arquivos relevantes alterados?
- [ ] Sem `console.log`, `debugger`, `TODO:`?
- [ ] CÃ³digo segue padrÃµes da seÃ§Ã£o 12?
- [ ] Componentes existentes reutilizados quando possÃ­vel?
- [ ] Mensagem de commit segue Conventional Commits?

### 9.2 Antes do Push

- [ ] `npm run build` passou?
- [ ] `npm run lint` passou?
- [ ] `npm run test:run` passou?
- [ ] `npx tsc --noEmit` passou?
- [ ] `npm run format:check` passou?
- [ ] `git diff` contÃ©m apenas o esperado?

### 9.3 Antes do PR

- [ ] Checklist 9.2 completo (todos os comandos executados no terminal com exit code 0)
- [ ] TÃ­tulo no formato `tipo(escopo): descriÃ§Ã£o` (sem emojis)?
- [ ] Resumo de alta densidade (1 a 3 frases) citando mÃ³dulos/rotas afetados?
- [ ] Tipo de MudanÃ§a vertical e sem emojis?
- [ ] Changelog preenchido sem emojis e com verbos na 3Âª pessoa do presente?
- [ ] Passos para teste claros e reprodutÃ­veis (iniciando com `1. Rode npm run dev.`)?

### 9.4 Antes do Merge

- [ ] CI Pipeline verde?
- [ ] Sem conflitos com `main`?
- [ ] Branch atualizado com `main`?

### 9.5 ApÃ³s Merge

- [ ] `git checkout main && git pull`
- [ ] `git branch -d nome-da-branch`
- [ ] `git push origin --delete nome-da-branch`

---

## 10. Stack e ConfiguraÃ§Ã£o

### 10.1 Stack Oficial

| Camada            | Tecnologia                                      |
| ----------------- | ----------------------------------------------- |
| **Framework**     | Next.js 16.x (App Router, Turbopack)            |
| **Linguagem**     | TypeScript strict (ES2022), React 19.2          |
| **EstilizaÃ§Ã£o** | Tailwind CSS 3.x (dark mode: `class`)           |
| **Testes**        | Vitest + React Testing Library (jsdom, globals) |
| **Lint/Format**   | ESLint (flat config) + Prettier                 |
| **Git Hooks**     | Husky + lint-staged                             |
| **CI**            | GitHub Actions (`.github/workflows/ci.yml`)     |
| **UtilitÃ¡rios**  | `cva`, `clsx`, `tailwind-merge`                 |
| **Analytics**     | `@vercel/analytics`                             |

**NOTA:** O projeto **nÃ£o** utiliza TanStack Query, Axios, Cypress nem nenhuma biblioteca de estado global. Elas foram deliberadamente omitidas por nÃ£o serem necessÃ¡rias (sem chamadas HTTP complexas, sem estado global compartilhado). Testes E2E (Cypress) nÃ£o estÃ£o configurados â€” se necessÃ¡rio no futuro, serÃ¡ adicionado.

### 10.2 ConfiguraÃ§Ãµes CrÃ­ticas

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
// eslint.config.mjs â€” flat config do eslint-config-next@16 (exports nativos)
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

> âš ï¸ O `eslint-config-next@16` exporta configs flat nativas â€” `FlatCompat` (`@eslint/eslintrc`) nÃ£o funciona mais aqui.

### 10.3 Scripts

| Comando                 | DescriÃ§Ã£o                             |
| ----------------------- | --------------------------------------- |
| `npm run dev`           | Next.js dev server                      |
| `npm run build`         | Next.js build (Turbopack)               |
| `npm start`             | Server com build gerado                 |
| `npm run lint`          | ESLint                                  |
| `npm run lint:fix`      | ESLint auto-fix                         |
| `npm run format`        | Prettier â€” formatar                   |
| `npm run format:check`  | Prettier â€” verificar                  |
| `npm run test`          | Vitest (watch)                          |
| `npm run test:run`      | Vitest (run once)                       |
| `npm run test:coverage` | Vitest com cobertura (threshold â‰¥80%) |
| `npm run test:watch`    | Vitest (watch interativo)               |
| `npm run analyze`       | Build com bundle analyzer               |

---

## 11. Estrutura do Projeto

```
tharcioport/
â””â”€â”€ src/
    â”œâ”€â”€ app/
    â”‚   â”œâ”€â”€ components/
    â”‚   â”‚   â”œâ”€â”€ sections/   # Hero, Projects, Process, Capabilities, About, Contact
    â”‚   â”‚   â”œâ”€â”€ ui/         # Button, Pill, Section, SectionHeader, Icons, TechIcons, ProjectScreenShowcase, etc.
    â”‚   â”‚   â”œâ”€â”€ Navbar.tsx, MobileNav.tsx, Footer.tsx, BackToTop.tsx
    â”‚   â”‚   â”œâ”€â”€ ThemeProvider.tsx, ThemeSwitcher.tsx, ClientAnalytics.tsx
    â”‚   â”‚   â””â”€â”€ __tests__/
    â”‚   â”œâ”€â”€ hooks/           # useActiveSection
    â”‚   â”œâ”€â”€ layout.tsx       # RootLayout (SEO, Schema.org, fontes)
    â”‚   â”œâ”€â”€ page.tsx         # Home (Hero â†’ Projects â†’ Process â†’ ... â†’ Contact)
    â”‚   â”œâ”€â”€ error.tsx        # Error boundary
    â”‚   â”œâ”€â”€ not-found.tsx    # PÃ¡gina 404
    â”‚   â”œâ”€â”€ globals.css      # Tailwind directives + estilos globais
    â”‚   â”œâ”€â”€ opengraph-image.tsx, robots.ts, sitemap.ts
    â”œâ”€â”€ data/                # capabilities, constants, experience, projects
    â”‚   â””â”€â”€ __tests__/
    â””â”€â”€ lib/
        â””â”€â”€ utils.ts         # cn()
```

---

## 12. PadrÃµes de CÃ³digo

### 12.1 Componentes React

**Regras de `'use client'`:**

- Use **apenas** quando necessÃ¡rio (hooks, eventos, interatividade)
- SeÃ§Ãµes (`sections/`) devem ser **server components** quando possÃ­vel
- Componentes sÃ£o Server Components por padrÃ£o, inclusive em `ui/`
- Use `'use client'` somente quando hooks, eventos ou APIs do navegador exigirem
- Prefira receber dados como props (serverâ†’client)

**PadrÃ£o de componente UI:**

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

| Hook                    | DescriÃ§Ã£o | Retorno             |
| ----------------------- | ----------- | ------------------- |
| `useActiveSection(ids)` | Scroll spy  | `string` (id ativo) |

### 12.3 UtilitÃ¡rios

```ts
// Use cn() para classes condicionais em cÃ³digo novo ou modificado.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 12.4 Ãcones

Importe de `@/app/components/ui/Icons`:

`ArrowRightIcon`, `ArrowUpIcon`, `DocumentIcon`, `MenuIcon`, `CloseIcon`,
`SunIcon`, `MoonIcon`, `MailIcon`, `GithubIcon`, `LinkedinIcon`,
`ExternalLinkIcon`, `CheckIcon`, `CopyIcon`, `CodeIcon`, `DatabaseIcon`,
`RocketIcon`, `SearchIcon`, `ChevronLeftIcon`, `ChevronRightIcon`,
`TechBadgeIcon` (requer `label`)

Importe de `@/app/components/ui/TechIcons`:

`TechIcon` (resolver automÃ¡tico por nome), `NextJsIcon`, `ReactIcon`,
`TypeScriptIcon`, `TailwindIcon`, `NodeJsIcon`, `RestApiIcon`,
`NextAuthIcon`, `ZodIcon`, `PrismaIcon`, `PostgresIcon`, `SupabaseIcon`,
`RlsIcon`, `VercelIcon`, `VitestIcon`, `CypressIcon`, `GitIcon`,
`GitHubIcon`, `GitHubActionsIcon`

### 12.5 OrganizaÃ§Ã£o de Imports

```
1. React/Next.js
2. Bibliotecas terceiras
3. Componentes @/app/components
4. Hooks @/app/hooks
5. Dados @/data
6. UtilitÃ¡rios @/lib
7. CSS

(Linha em branco entre grupos)
```

### 12.6 CSS Custom Properties

O projeto utiliza variÃ¡veis CSS para fontes (via `next/font/google`):

```css
/* Definidas em layout.tsx e consumidas via Tailwind */
font-sans: var(--font-geist-sans); /* Geist Sans para body e headings */
font-mono: var(--font-geist-mono); /* Geist Mono para cÃ³digo e metadados */
```

**Regra:** Use as classes Tailwind `font-sans`, `font-heading` (usa Geist Sans) e `font-mono`. NÃ£o declare novas variÃ¡veis CSS sem necessidade.

### 12.7 Nomenclatura

| Entidade          | PadrÃ£o           | Exemplos                  |
| ----------------- | ----------------- | ------------------------- |
| Componentes       | PascalCase        | `ProjectCard`, `Navbar`   |
| Hooks             | camelCase + `use` | `useActiveSection`        |
| Arquivos de dados | kebab-case        | `capabilities.ts`         |
| Constantes        | UPPER_SNAKE_CASE  | `SECTION_IDS`             |
| VariÃ¡veis        | camelCase         | `activeSection`           |
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

- `next-themes` com `attribute="class"` â€” tema inicial: sistema
- Classes condicionais: `dark:` para escuro, sem prefixo para claro

### 14.2 Cores

**Paleta:** Carmesim (accent) em fundos neutros gelo.

| Uso               | Light                           | Dark                           |
| ----------------- | ------------------------------- | ------------------------------ |
| Fundo             | `bg-light-bg` (#FAFAF9)         | `bg-dark-bg` (#141210)         |
| Card              | `bg-light-card` (#FFFFFF)       | `bg-dark-card` (#1D1917)       |
| SuperfÃ­cie       | `bg-light-surface` (#F1ECE8)    | `bg-dark-surface` (#26211E)    |
| Texto primÃ¡rio   | `text-primary-text` (#1C1917)   | `text-light-text` (#F5F0EB)    |
| Texto secundÃ¡rio | `text-secondary-text` (#57534E) | `text-dark-text` (#A8A29E)     |
| Borda             | `border-border-light` (#E7E0D9) | `border-border-dark` (#33302D) |
| Accent            | `bg-accent` (#B91C1C)           | `bg-accent` (#B91C1C)          |

Hover: `accent-hover` (#991B1B) Â· Light: `accent-light` (#F87171)

### 14.3 Fontes

- **Body:** Geist Sans (`var(--font-geist-sans)`)
- **Heading:** Geist Sans (`var(--font-geist-sans)`)
- **Mono:** Geist Mono (`var(--font-geist-mono)`)
- Carregadas via `next/font/google` em `layout.tsx`

### 14.4 AnimaÃ§Ãµes

| AnimaÃ§Ã£o   | DuraÃ§Ã£o | Uso                          |
| ------------ | --------- | ---------------------------- |
| `fade-in`    | 0.8s      | Entrada simples              |
| `fade-up`    | 0.8s      | RevelaÃ§Ã£o com deslocamento |
| `fade-down`  | 0.5s      | Entrada do topo              |
| `scale-x-in` | 0.6s      | Barra horizontal             |
| `ping`       | 2s        | Efeito pulsante              |

---

## 15. AnimaÃ§Ãµes e Hooks

### 15.1 prefers-reduced-motion

Todas as animações são desativadas quando o usuário pede menos movimento. A regra global em `globals.css` zera `animation-duration` e `scroll-behavior` sob `prefers-reduced-motion: reduce`.

### 15.2 Animações de entrada

As entradas usam as animações declarativas do Tailwind (`animate-fade-in`, `fade-up`, `fade-down`, `scale-x-in`), definidas em `tailwind.config.js`. Não há wrapper de reveal por scroll nem custo de JavaScript.

### 15.3 useActiveSection

```ts
function useActiveSection(ids: readonly string[]): string {
  // rootMargin: '-40% 0px -55% 0px'
  // Retorna id da seção visível
}
```

---

## 16. Regras para IA

### 16.1 Regras Absolutas

| #   | Regra                                               | Motivo                       |
| --- | --------------------------------------------------- | ---------------------------- |
| 1   | Nunca alterar cÃ³digo **fora do escopo**            | Cada mudanÃ§a custa revisÃ£o |
| 2   | Nunca atualizar dependÃªncias sem autorizaÃ§Ã£o     | Pode quebrar build           |
| 3   | Nunca modificar config do projeto sem autorizaÃ§Ã£o | CI valida configuraÃ§Ãµes    |
| 4   | Nunca fazer alteraÃ§Ãµes **cosmÃ©ticas**            | Polui diff                   |
| 5   | Nunca misturar refactor com feature no mesmo commit | Viola atomicidade            |
| 6   | Nunca fazer **force push**                          | DestrÃ³i histÃ³rico          |
| 7   | Nunca trabalhar diretamente na `main`               | Exceto docs autorizados      |
| 8   | Nunca ignorar CI â€” se falhar, **corrija**         | CI Ã© a verdade              |

### 16.2 Regras ObrigatÃ³rias

| #   | Regra                                                                                                     |
| --- | --------------------------------------------------------------------------------------------------------- |
| 1   | Sempre revisar `git diff` antes de commitar                                                               |
| 2   | Sempre remover `console.log` e comentÃ¡rios temporÃ¡rios                                                  |
| 3   | Sempre preservar a arquitetura existente                                                                  |
| 4   | Sempre reutilizar componentes existentes                                                                  |
| 5   | Sempre preferir mudanÃ§as pequenas                                                                        |
| 6   | Sempre explicar decisÃµes importantes no PR                                                               |
| 7   | Usar `cn()` para classes condicionais em cÃ³digo novo ou modificado; classes estÃ¡ticas podem ser strings |
| 8   | Usar `cva` em sistemas reutilizÃ¡veis de variantes de estilo                                              |

---

## 17. O que NUNCA Fazer

- **NUNCA** modificar `tsconfig.json`, `tailwind.config.js`, `next.config.mjs`, `eslint.config.mjs`
- **NUNCA** modificar `.github/workflows/ci.yml`, `.husky/pre-commit`, `vitest.config.ts`
- **NUNCA** rodar `npm install`/`uninstall` ou `npm audit fix` sem autorizaÃ§Ã£o
- **NUNCA** fazer `git push --force` ou `git push --force-with-lease`
- **NUNCA** commitar na `main` diretamente
- **NUNCA** misturar tipos de mudanÃ§a no mesmo commit
- **NUNCA** deixar `console.log`, `debugger`, `TODO:`, `FIXME:` no cÃ³digo
- **NUNCA** ignorar erros TypeScript (`strict: true` estÃ¡ ativo)
- **NUNCA** introduzir dependÃªncias para algo que o cÃ³digo atual jÃ¡ resolve
- **NUNCA** criar componente novo se um existente pode ser estendido
- **NUNCA** remover props ou alterar interfaces sem atualizar consumidores
- **NUNCA** desativar regras de lint sem justificativa documentada

---

## 18. ValidaÃ§Ã£o e Qualidade

### 18.1 ValidaÃ§Ã£o ObrigatÃ³ria

```bash
npx tsc --noEmit       # 1Â° â€” tipos
npm run format:check   # 2Â° â€” formataÃ§Ã£o (Prettier)
npm run lint           # 3Â° â€” qualidade (ESLint)
npm run test:run       # 4Â° â€” comportamento (Vitest)
npm run build          # 5Â° â€” build (mais lento)
```

### 18.2 CI Pipeline

Executado em push/PR para `main` (Node 22):

**Job 1 â€” quality:**

1. `npm ci` Â· 2. `npm run format:check` Â· 3. `npm run lint` Â· 4. `npx tsc --noEmit`

**Job 2 â€” build-and-test** (apÃ³s quality):

1. `npm run test:coverage` (Valida threshold de cobertura â‰¥ 80% stmts) Â· 2. `npm run build` (com cache do `.next`)

### 18.3 Husky + lint-staged

- **pre-commit:** `npx lint-staged` (ESLint `--fix` + Prettier em `*.{js,jsx,ts,tsx}`; Prettier em `*.{css,json,md,yml,yaml}`)

### 18.4 Quando Usar Cada Tipo de Teste

| Tipo             | Ferramenta                 | Quando usar                                                                                    |
| ---------------- | -------------------------- | ---------------------------------------------------------------------------------------------- |
| **UnitÃ¡rio**    | Vitest + RTL               | Testar componentes, hooks, funÃ§Ãµes utilitÃ¡rias e dados no nÃ­vel de unidade                 |
| **IntegraÃ§Ã£o** | Vitest + RTL               | Testar interaÃ§Ãµes entre componentes (ex: formulÃ¡rio + validaÃ§Ã£o)                          |
| **E2E**          | Cypress (nÃ£o configurado) | Testar fluxos completos do usuÃ¡rio. Adicionar **apenas** quando houver necessidade explÃ­cita |

**Testes manuais:** Execute `npm run dev` e verifique visualmente a mudanÃ§a no navegador. Foco em: renderizaÃ§Ã£o correta, responsividade (mobile/desktop), tema light/dark e comportamento de animaÃ§Ãµes.

---

## 19. Performance

### 19.1 Boas PrÃ¡ticas

- **Bundler:** **Turbopack** (padrÃ£o do Next 16) â€” sem config customizada de bundler
- **Imagens:** formatos `.avif`/`.webp` (configurado), `loading="lazy"` abaixo da dobra
- **Bundle:** prefira dynamic imports; evite imports grandes desnecessÃ¡rios
- **Re-renders:** evite `useEffect` desnecessÃ¡rio; prefira estado derivado
- **CSS:** `experimental.optimizeCss: true` ativo
- **Console:** `removeConsole` em produÃ§Ã£o com `{ exclude: ['error'] }` (preserva `console.error` do `error.tsx`)
- **CompressÃ£o:** `compress: true` ativo

### 19.2 MÃ©tricas Alvo

- Lighthouse: Performance â‰¥ 95 Â· Acessibilidade â‰¥ 95 Â· PrÃ¡ticas â‰¥ 95 Â· SEO â‰¥ 95
- FCP < 1.5s Â· LCP < 2.5s Â· CLS < 0.1

---

## 20. SeguranÃ§a, SEO e Acessibilidade

### 20.1 SeguranÃ§a

- `poweredByHeader: false` (remove `X-Powered-By: Next.js`)
- Contato via `mailto` e cÃ³pia de e-mail, sem formulÃ¡rio ou processamento de entrada
- Sem secrets no cÃ³digo â€” use variÃ¡veis de ambiente
- CI com `contents: read` (menor privilÃ©gio)

### 20.2 SEO

- Metadata completa em `layout.tsx`: title (`%s | Tharcio Santos`), description, keywords, Open Graph, Twitter cards
- Schema.org JSON-LD: Person, WebSite, ProfilePage
- Sitemap (`sitemap.ts`) + Robots (`robots.ts`)
- OG image estÃ¡tica prÃ©-gerada no build (`opengraph-image.tsx`, rota `â—‹`)

### 20.3 Acessibilidade

- **Skip link:** `.skip-link` ao receber foco
- **Focus-visible:** anel de foco com `accent`/`accent-light`
- **Reduced motion:** animaÃ§Ãµes desativadas em `prefers-reduced-motion: reduce`
- **ARIA:** labels e atributos em componentes interativos
- **Scrollbar customizada:** webkit (claro/escuro)

---

## 21. ConsistÃªncia de ConteÃºdo

| Regra            | Valor             |
| ---------------- | ----------------- |
| ConclusÃ£o ADS   | **julho de 2027** |
| ManutFlow        | **em produÃ§Ã£o** |
| Idioma conteÃºdo | PortuguÃªs (BR)   |
| Idioma cÃ³digo   | InglÃªs           |

**SuperfÃ­cies a verificar:** README.md, AGENTS.md, cÃ³digo fonte, currÃ­culo, GitHub, LinkedIn. Todas devem ter datas, status de projetos e URLs consistentes.

---

## 22. Troubleshooting

### 22.1 Build Falha

```
PossÃ­veis causas:
1. Erro de tipo â†’ npx tsc --noEmit
2. Import inexistente â†’ verifique caminhos
3. MÃ³dulo nÃ£o encontrado â†’ npm ci
4. Classe Tailwind invÃ¡lida â†’ verifique tailwind.config.js
```

### 22.2 Lint Falha

```
1. VariÃ¡vel nÃ£o utilizada â†’ remova ou use
2. Import nÃ£o utilizado â†’ remova
3. Hook com deps incorretas â†’ ajuste array
4. any explÃ­cito â†’ substitua pelo tipo
```

### 22.3 Testes Falham

```
1. Snapshot desatualizado â†’ atualize
2. Componente mudou de interface â†’ atualize testes
3. Mock desatualizado â†’ atualize
4. Timezone-dependente â†’ vi.setSystemTime()
```

### 22.4 CI Falha

```
1. Husky bloqueou â†’ npx lint-staged manual
2. FormataÃ§Ã£o â†’ npm run format
3. TypeScript falha no CI mas nÃ£o local â†’ npx tsc --noEmit
4. Teste local passa, CI falha â†’ verifique ambiente (Node, OS)
```

### 22.5 Git

```
git push rejeitado â†’ git merge main (resolver conflitos)
Force push bloqueado â†’ git pull --rebase
Husky rejeitou commit â†’ corrija lint/formataÃ§Ã£o
```

---

## 23. Exemplos Completos

### 23.1 Adicionar Projeto ao PortfÃ³lio

**Tarefa:** Adicionar um projeto chamado "TaskFlow"

**Branch:** `feat/adiciona-projeto-taskflow`

**Commits:**

```
feat(projects): adiciona TaskFlow Ã  lista de projetos
test(projects): adiciona teste de sanidade para novos projetos
```

**Arquivos:** `src/data/projects.ts` + `src/data/__tests__/projects.test.ts`

**PR:**

```markdown
## Resumo

Adiciona o projeto TaskFlow Ã  lista de projetos em destaque na home (`src/data/projects.ts`) e inclui cobertura de testes de sanidade (`src/data/__tests__/projects.test.ts`).

## Tipo de MudanÃ§a

- [x] Feature
- [x] Test

## Changelog

### Features

- Adiciona TaskFlow (featured) aos projetos

### Tests

- Adiciona teste de sanidade para validaÃ§Ã£o do novo projeto

## Como Testar

1. Rode `npm run dev`.
2. Abra a home e role atÃ© a seÃ§Ã£o `#projetos` ("Projetos em Destaque").
3. Confira o card do projeto TaskFlow no grid.

## Checklist

- [x] Build passa (`npm run build`)
- [x] Lint passa (`npm run lint`)
- [x] Testes passam (`npm run test:run`)
- [x] TypeScript sem erros (`npx tsc --noEmit`)
- [x] FormataÃ§Ã£o OK (`npm run format:check`)
- [x] Apenas arquivos do escopo alterados
```

### 23.2 Corrigir Bug Mobile

**Tarefa:** Menu mobile nÃ£o fecha ao clicar em link

**Branch:** `fix/menu-mobile-fecha-ao-clicar-link`

**Commit:** `fix(mobile): fecha menu ao clicar em link de navegaÃ§Ã£o`

**Arquivo:** `src/app/components/MobileNav.tsx`

**MudanÃ§a:**

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
refactor(hooks): extrai useActiveSection do Navbar para hook prÃ³prio
```

**Arquivos:** `src/app/hooks/useActiveSection.ts` (novo) + `Navbar.tsx` (simplificado)

---

## 24. Fluxograma ASCII

```
â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
â•‘        CICLO COMPLETO DE DESENVOLVIMENTO                â•‘
â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

                  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                  â”‚  TAREFA     â”‚
                  â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜
                         â–¼
                  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                  â”‚  CONTEXTO   â”‚
                  â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜
                         â–¼
                  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
           â”Œâ”€â”€â”€â”€â”€â”€â”¤ git pull    â”œâ”€â”€â”€â”€â”€â”€â”
           â”‚      â”‚   main      â”‚      â”‚
           â–¼      â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜      â–¼
    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”         â–¼        â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
    â”‚ feat/    â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚ refactor/â”‚
    â”‚ branch   â”‚  â”‚ fix/branch â”‚  â”‚  branch  â”‚
    â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜
         â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                        â–¼
                 â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                 â”‚ IMPLEMENTAR  â”‚
                 â”‚  (mÃ­nimo)    â”‚
                 â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
                        â–¼
          â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
          â–¼             â–¼             â–¼
   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
   â”‚  BUILD   â”‚  â”‚  LINT    â”‚  â”‚  TESTES  â”‚
   â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜
        â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                       â–¼
                â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                â”‚  REVISAR     â”‚
                â”‚  (diff +     â”‚
                â”‚   reviewer)  â”‚
                â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
                       â–¼
                â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                â”‚   COMMIT     â”‚
                â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
                       â–¼
                â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                â”‚    PUSH      â”‚
                â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
                       â–¼
                â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                â”‚   CRIAR PR   â”‚
                â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
                       â–¼
                â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                â”‚  CI VERDE?   â”‚
                â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
                    â”Œâ”€â”€â”´â”€â”€â”
                    â”‚     â”‚
                    â–¼     â–¼
              â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
              â”‚ MERGE  â”‚  â”‚ CORRIGIR â”‚â—„â”€â”€â”€â”€â”
              â””â”€â”€â”€â”€â”¬â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”˜     â”‚
                   â–¼            â”‚          â”‚
            â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”      â”‚          â”‚
            â”‚ git pull   â”‚â—„â”€â”€â”€â”€â”€â”˜          â”‚
            â”‚   main     â”‚                 â”‚
            â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜                 â”‚
                   â–¼                       â”‚
            â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”                 â”‚
            â”‚ DEL BRANCH â”‚â—„â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
            â”‚ local +    â”‚
            â”‚  remota    â”‚
            â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

> **VersÃ£o 2.3** Â· Fonte Ãºnica de verdade para agentes de IA Â· Mantido por Tharcio Santos
>
> | VersÃ£o | Data     | MudanÃ§as                                                                                                                                                   |
> | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | 1.0     | â€”      | DocumentaÃ§Ã£o inicial do projeto                                                                                                                           |
> | 2.0     | Jul/2026 | Manual operacional completo para agentes de IA                                                                                                              |
> | 2.1     | Ago/2026 | Alinha stack Ã  migraÃ§Ã£o Next 16 (Turbopack), flat config do ESLint, CI com cobertura e pre-commit com lint                                               |
> | 2.2     | Set/2026 | Corrige divergÃªncias: fontes (Geist Sans/Mono), paleta (carmesim #B91C1C), tipos (kind sem 'building'), SECTION_IDS (sem 'experiencia'), Ã­cones completos |
> | 2.3     | Out/2026 | Refina padrÃ£o de Pull Request com template limpo sem emojis, inclusÃ£o de verificaÃ§Ã£o de formataÃ§Ã£o/tipos no checklist e exemplo Gold Standard         |
