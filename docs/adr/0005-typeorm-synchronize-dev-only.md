# ADR-0005: `synchronize: true` restricted to development

Date: 2026-08-22
Status: Accepted

## Context

`app.module.ts` sets `synchronize: true` on the TypeORM connection, with an
inline comment: `// for production false and use migration`. `synchronize`
auto-alters the DB schema to match entities on every boot, which is
convenient while iterating but unsafe against a real database.

## Decision

Keep `synchronize: true` while iterating locally and through the tutorial.
Before any deployment, set it to `false` and introduce TypeORM migrations
(`typeorm migration:generate` / `migration:run`) as the schema-change
mechanism, driven by an explicit pnpm script.

## Consequences

- Fast local iteration now, with no migration files to maintain yet.
- Must remember to flip the flag and set up a migrations directory + script
  before any deployed environment touches this database — auto-sync against
  a production schema can silently drop or alter columns.
