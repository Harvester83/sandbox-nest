# ADR-0001: PostgreSQL + TypeORM for persistence

Date: 2026-08-22
Status: Accepted

## Context

The project needs a relational database and an ORM integrated with Nest.
`@nestjs/typeorm`, `typeorm`, and the `pg` driver are already dependencies,
and `AppModule` wires up `TypeOrmModule.forRootAsync` reading connection
details from `ConfigService`.

## Decision

Use PostgreSQL as the database and TypeORM (via `@nestjs/typeorm`) as the
ORM. Connection options come from environment variables
(`DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_NAME`) read through
`ConfigService`, never hardcoded.

## Consequences

- Decorator-based entities (`@Entity`, `@Column`, ...) and TypeORM's
  migration tooling become available once needed.
- The app is coupled to TypeORM's API surface; the repository pattern in
  [ADR-0002](0002-repository-pattern.md) keeps that coupling out of
  controllers/services.
- A running PostgreSQL instance is required for local dev, tests that touch
  the DB, and CI.
