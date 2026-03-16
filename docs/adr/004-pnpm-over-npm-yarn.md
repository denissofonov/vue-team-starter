# ADR-004: pnpm over npm/yarn

## Status

Accepted

## Context

Need a package manager for monorepo. Options: npm, yarn (classic/berry), pnpm.

- npm: no native workspace hoisting control, phantom dependencies issue, slower installs
- yarn classic: maintenance mode, similar phantom dependency issues
- yarn berry (PnP): breaks many tools, steep learning curve
- pnpm: strict node_modules via symlinks, fast installs via content-addressable store, native workspace support

## Decision

Use **pnpm** as the package manager.

## Consequences

### Positive

- Strict isolation prevents phantom dependencies — if it's not in package.json, it won't resolve
- Content-addressable store saves disk space and speeds up installs across projects
- `workspace:*` protocol makes internal package linking explicit
- Built-in `pnpm -r` for running scripts across packages

### Negative

- Some tools assume flat node_modules (rare in 2025, most have adapted)
- Team must install pnpm (`corepack enable` solves this)
