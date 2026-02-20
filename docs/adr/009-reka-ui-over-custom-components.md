# ADR-009: Reka UI over Custom Headless Components

## Status

Accepted — supersedes parts of ADR-002

## Context

ADR-002 decided to build custom UI components. After initial development, we reassessed:

- **Custom components**: full control, but significant effort for accessibility (focus trapping, keyboard navigation, ARIA patterns). Every component is a potential a11y regression.
- **Reka UI** (formerly Radix Vue): headless, unstyled primitives with WAI-ARIA compliance built in. 40+ components. Active maintenance, large community.
- **Headless UI**: fewer components, slower Vue 3 adoption.
- **PrimeVue / Vuetify**: opinionated styling, harder to align with custom design tokens.

## Decision

Use **Reka UI** as the headless primitives layer. Our `@vue-team-starter/ui` package wraps Reka UI components and applies styling via design tokens (CSS custom properties from `@vue-team-starter/tokens`).

### Architecture

```
Reka UI (headless, a11y) → @vue-team-starter/ui (styled wrappers) → apps
```

Components that Reka UI doesn't cover (Badge, simple Card) remain custom.

## Consequences

### Positive

- Keyboard navigation, focus management, and ARIA patterns are handled by Reka UI — no custom implementation needed
- Significantly less code to maintain in the UI package
- New components can be added quickly by wrapping Reka UI primitives
- Design tokens integrate cleanly — Reka UI outputs no styles, we control everything
- Accessible by default without needing a11y expertise on every PR

### Negative

- Dependency on external library (mitigated: Reka UI is well-maintained, MIT licensed)
- Some components may need workarounds if Reka UI's API doesn't match our needs
- Team must learn Reka UI's compound component pattern (DialogRoot → DialogContent → DialogTitle)
