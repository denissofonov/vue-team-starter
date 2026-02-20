# ADR-005: Testing Strategy

## Status
Accepted

## Context
Need a clear boundary between what is tested at which level, to avoid duplication and keep the test suite fast.

## Decision

### Unit tests (Vitest)
- All shared composables — edge cases, reactive behavior
- UI components — rendering, props, emits, a11y attributes
- Pure utility functions

### E2E tests (Playwright)
- Critical user flows only (navigation, form submission, auth guards)
- Not for testing individual component behavior

### What we do NOT test
- Nuxt/Vue framework internals (routing config, auto-imports)
- Static markup without logic
- Third-party library behavior

### Coverage target
- No hard coverage threshold — coverage is a signal, not a goal
- Focus on testing behavior, not implementation details

## Consequences

### Positive
- Clear ownership: composable author writes composable tests
- Fast CI — unit tests run in ms, E2E only on critical paths
- Less brittle tests — no snapshot testing of markup

### Negative
- Requires discipline to not skip tests for composables
- E2E gaps in non-critical flows (acceptable trade-off)
