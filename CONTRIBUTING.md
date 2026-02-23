# Contributing

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Run all checks
pnpm lint && pnpm typecheck && pnpm test
```

## Branch Naming

- `feat/description` — new feature
- `fix/description` — bug fix
- `refactor/description` — code refactoring
- `docs/description` — documentation changes

## Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/). Commits are validated via commitlint.

```
feat(ui): add UiTooltip component
fix(composables): fix useLocalStorage SSR hydration
docs(adr): add ADR for state management approach
```

## Adding a New Component

1. Create component in `packages/ui/src/components/`
2. Export it from `packages/ui/src/index.ts`
3. Add examples in the playground page
4. Add unit tests in `__tests__/`
5. Run `pnpm test` and `pnpm typecheck`

## Architecture Decision Records

For significant technical decisions, create an ADR in `docs/adr/`. Use `docs/adr/template.md` as a starting point.

## Code Review Guidelines

### What blocks a PR
- Missing tests for new composables or component behavior
- Accessibility regression (removed ARIA attributes, broken keyboard nav)
- Type errors or `any` usage without justification
- Breaking change to public component API without ADR

### What is a nit (non-blocking)
- Naming preferences (unless misleading)
- Minor style differences covered by Prettier
- Alternative implementation that works equally well

### Review etiquette
- Explain "why", not just "change this"
- Prefix comments: `nit:`, `question:`, `blocker:`
- Approve with nits rather than requesting changes for non-blocking feedback

## Code Review

- All changes require at least one review
- CI must pass before merging
- Use the PR template
