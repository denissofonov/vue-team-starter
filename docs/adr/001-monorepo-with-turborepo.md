# ADR-001: Monorepo with Turborepo

## Status

Accepted

## Context

We need a strategy for managing multiple packages (UI kit, composables, app) in a single repository. Options considered:

- **Nx** — powerful but heavy, steep learning curve
- **Lerna** — legacy, slow without caching
- **Turborepo** — lightweight, fast caching, minimal config
- **No monorepo** — separate repos per package

## Decision

Use **Turborepo** with **pnpm workspaces**.

## Consequences

### Positive

- Near-zero config — `turbo.json` is minimal
- Smart caching speeds up CI significantly
- pnpm workspaces handle linking between packages
- Easy to adopt for new team members

### Negative

- Less granular task orchestration than Nx
- No built-in code generation (can add with custom scripts)
