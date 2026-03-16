# ADR-007: Error Handling Strategy

## Status

Accepted

## Context

Need consistent error handling across composables and the application layer.

## Decision

### Composables

- Async composables return `{ data, error, isLoading }` reactive tuple
- Errors are typed — never throw from composables, always return
- Consumer decides how to display the error

### Application layer

- Nuxt `error.vue` for fatal/unrecoverable errors (404, 500)
- Component-level error boundaries via `<NuxtErrorBoundary>` for non-fatal errors
- User-facing error messages are always human-readable, never raw API responses

### Logging

- `console.error` in development only
- Structured error context: what failed, with what input, suggested recovery

## Consequences

### Positive

- No unhandled promise rejections — errors are always captured in reactive state
- Consistent pattern — every async composable behaves the same way
- Error boundaries prevent full-page crashes from isolated component failures

### Negative

- More boilerplate than try/catch-and-throw
- Every consumer must handle the error case (by design — forces intentional UX)
