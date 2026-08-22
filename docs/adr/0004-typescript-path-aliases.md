# ADR-0004: TypeScript path aliases per domain

Date: 2026-08-22
Status: Accepted

## Context

`tsconfig.json` defines `@app/*` (→ `src/*`), `@users/*`, `@product/*`, and
`@common/*`. `users.repository.ts` already uses them (`@users/user.entity`,
`@users/dto/create-user.dto`), while `product` still uses relative imports
only.

## Decision

Use the domain's path alias for imports that cross module boundaries.
Relative imports (`./`) remain fine for imports within the same domain
folder. When a new top-level domain folder is added under `src/`, add a
matching `@<domain>/*` alias to `tsconfig.json`'s `paths` at the same time.

## Consequences

- Cross-domain imports stay short and don't accumulate `../../` chains.
- The alias list is manual and must be kept in sync by hand — forgetting to
  add one for a new domain means falling back to deep relative paths (or a
  broken import) until it's added.
