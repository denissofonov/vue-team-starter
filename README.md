# vue-team-starter

Production-ready Nuxt 3 monorepo template with team processes built in.

> Opinionated starter for Vue teams that care about DX, accessibility, and maintainability.

## Why This Exists

Most Vue starters give you a framework and leave the rest to figure out. In real teams, 80% of the friction isn't the framework — it's everything around it: inconsistent code style, missing tests, undocumented decisions, components with broken accessibility, and "it works on my machine" CI.

This template solves that by shipping everything a team needs on day one:
- A **monorepo** that scales from 1 to 10+ packages without config hell
- A **UI kit** built on Reka UI headless primitives — accessible by default, styled with design tokens
- **CI/CD** that catches problems before they hit main
- **ADRs** that explain _why_, not just _what_
- **Code review guidelines** so PRs don't become opinion wars

## Architecture

```
Monorepo (Turborepo + pnpm workspaces)
├── apps/
│   └── web/                  — Nuxt 3 application
├── packages/
│   ├── ui/                   — Reka UI + design tokens (10 components)
│   ├── composables/          — Shared Vue composables (6 composables)
│   ├── tokens/               — Design tokens (CSS custom properties)
│   └── eslint-config/        — Shared ESLint configuration
├── docs/
│   └── adr/                  — Architecture Decision Records (9 ADRs)
└── .github/
    ├── workflows/            — CI pipelines
    ├── PULL_REQUEST_TEMPLATE.md
    └── ISSUE_TEMPLATE/
```

### Why Turborepo + pnpm?

- **pnpm** prevents phantom dependencies via strict `node_modules` isolation. If it's not in your `package.json`, it won't resolve — no more "works locally, breaks in CI".
- **Turborepo** adds smart caching. Change `packages/ui`? Only packages that depend on it rebuild. CI goes from minutes to seconds.
- Together, they're the lightest monorepo setup with the most value. [Read the ADR →](./docs/adr/001-monorepo-with-turborepo.md)

### Why Reka UI?

Writing accessible components from scratch is hard and error-prone. Reka UI (formerly Radix Vue) gives us headless, WAI-ARIA compliant primitives — we add our styling with design tokens, they handle keyboard navigation, focus trapping, and screen reader support.

```
Reka UI (headless, a11y) → @vue-team-starter/ui (styled wrappers) → apps
```

This means every component is accessible by default without needing a11y expertise on every PR. [Read the ADR →](./docs/adr/009-reka-ui-over-custom-components.md)

### Why CSS Custom Properties?

Zero runtime. No build step. Works with any styling approach. Theming via `[data-theme]` selector. Easy to inspect in DevTools. [Read the ADR →](./docs/adr/006-css-approach.md)

## What's Inside

### UI Kit (`packages/ui`) — 10 components

| Component | Reka UI Primitive | Description |
|-----------|------------------|-------------|
| `UiButton` | `Primitive` | Polymorphic button with variants, sizes, loading state |
| `UiInput` | `Label` | Text input with validation, error states, a11y labels |
| `UiModal` | `Dialog` | Modal dialog with focus trap, Escape to close |
| `UiSelect` | `Select` | Dropdown select with keyboard navigation |
| `UiTabs` | `Tabs` | Tab panels with animated indicator |
| `UiTooltip` | `Tooltip` | Configurable tooltip with positioning |
| `UiDropdownMenu` | `DropdownMenu` | Context menu with separator and danger items |
| `UiSwitch` | `Switch` | Toggle switch with label |
| `UiCard` | — | Card with header/body/footer slots |
| `UiBadge` | — | Status badge with color variants |

### Composables (`packages/composables`) — 6 composables

| Composable | Description |
|------------|-------------|
| `useForm` | Form state management with validation rules (`required`, `minLength`, `email`, etc.) |
| `useAsyncState` | Async operations with `data`/`error`/`isLoading` reactive tuple |
| `usePagination` | Page state, navigation, computed ranges |
| `useBreakpoints` | Responsive breakpoint detection |
| `useTheme` | Light/dark theme toggle |
| `useLocalStorage` | Reactive localStorage binding |

### Design Tokens (`packages/tokens`)

CSS custom properties for colors, typography, spacing, radii, shadows, and transitions. Dark theme included via `[data-theme="dark"]`.

### Team Processes

- **9 Architecture Decision Records** — documenting why Turborepo, why Reka UI, testing strategy, CSS approach, error handling, accessibility, and more
- **Conventional Commits** — enforced via commitlint + husky pre-commit hooks
- **Code Review Guidelines** — what blocks a PR, what's a nit, review etiquette
- **PR & Issue Templates** — consistent format for contributions
- **CI Pipeline** — lint, typecheck, unit tests, build — all on every push

## Quick Start

```bash
# Clone
git clone https://github.com/denissofonov/vue-team-starter.git
cd vue-team-starter

# Install
pnpm install

# Dev
pnpm dev
```

Open http://localhost:3000 — navigate to `/playground` to see all components.

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build all packages and apps |
| `pnpm lint` | Lint all packages |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm test` | Run unit tests (30 tests) |
| `pnpm test:e2e` | Run Playwright E2E tests |
| `pnpm format` | Format with Prettier |
| `pnpm commit` | Interactive conventional commit |

## Tech Stack

| Layer | Tool | Why |
|-------|------|-----|
| Monorepo | Turborepo + pnpm | Fast caching, strict deps |
| Framework | Nuxt 3 | SSR, file-based routing, auto-imports |
| Language | TypeScript (strict) | Catch errors at compile time |
| UI Primitives | Reka UI | Headless, accessible, Vue-native |
| Styling | CSS Custom Properties | Zero runtime, themeable |
| Icons | Lucide | Tree-shakeable, consistent |
| Fonts | @nuxt/fonts (Inter, JetBrains Mono) | Automatic optimization |
| Unit Tests | Vitest + Vue Test Utils | Fast, Vue-native |
| E2E Tests | Playwright | Cross-browser |
| Linting | ESLint (antfu config) | Opinionated, minimal config |
| Formatting | Prettier | Consistent code style |
| Commits | commitlint + czg | Conventional commits |
| CI | GitHub Actions | Lint → typecheck → test → build |

## Documentation

- [Contributing Guide](./CONTRIBUTING.md)
- [Architecture Decision Records](./docs/adr/)

## License

MIT
