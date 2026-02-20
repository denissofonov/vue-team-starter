# ADR-003: Design Tokens Strategy

## Status

Accepted

## Context

Need a consistent approach to colors, spacing, typography, and theming. Options:

- **Tailwind CSS** — utility-first, implicit tokens
- **CSS Variables** — native, zero runtime, framework agnostic
- **Style Dictionary** — token pipeline from JSON to multiple formats
- **CSS-in-JS** — runtime overhead, Vue ecosystem less mature

## Decision

Use **CSS custom properties** (variables) in a dedicated `@vue-team-starter/tokens` package. Simple `.css` files, no build step.

## Consequences

### Positive

- Zero runtime cost
- Works with any styling approach
- Dark theme via `[data-theme="dark"]` selector
- No additional tooling needed

### Negative

- No type safety on token names (mitigated by IDE autocomplete)
- Manual process to add new tokens (acceptable at current scale)
