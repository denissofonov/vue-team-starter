# ADR-006: CSS Custom Properties over Tailwind/CSS-in-JS

## Status

Accepted

## Context

Need a consistent styling approach for the UI kit and applications.

- **Tailwind CSS**: utility-first, fast prototyping, but couples markup to styling, hard to theme dynamically, utility classes in component templates reduce readability
- **CSS-in-JS** (e.g. UnoCSS attributify, Panda): runtime overhead, Vue ecosystem support varies
- **CSS Custom Properties + scoped styles**: native, zero runtime, full IDE support, themeable

## Decision

Use **CSS custom properties** (design tokens) combined with Vue **scoped styles**. No utility framework.

## Consequences

### Positive

- Zero runtime overhead — pure CSS
- Theming via `[data-theme]` selector, no JS needed
- Components are self-contained — styles colocated with template
- No build tool dependency for styling
- Easy to inspect and debug in DevTools

### Negative

- More verbose than utility classes for one-off styles
- No automatic purging (acceptable — scoped styles are already minimal)
- New team members may prefer Tailwind (mitigated by design tokens providing consistency)
