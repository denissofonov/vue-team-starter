# ADR-002: Vue Component Library Architecture

## Status

Accepted

## Context

The team needs shared UI components across applications. Options:

- **Inline components** — components live inside each app
- **Shared package** — components in a separate workspace package
- **External library** — use a third-party component library (Vuetify, PrimeVue)

## Decision

Create an internal `@vue-team-starter/ui` package with custom components, documented via **Histoire**.

## Consequences

### Positive

- Full control over design and API
- Components are documented and testable in isolation
- Histoire provides Vue-native component playground
- Can wrap third-party primitives if needed later

### Negative

- Initial investment to build base components
- Must maintain documentation alongside components
