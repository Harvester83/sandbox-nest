# Architecture Decision Records

One file per significant decision, in [MADR](https://adr.github.io/)-style
format (Context / Decision / Consequences). Start a new ADR with
[template.md](template.md); number it sequentially and never renumber or
delete a past one — if a decision changes, add a new ADR and mark the old one
"Superseded by ADR-XXXX".

| ADR | Title | Status |
| --- | --- | --- |
| [0001](0001-postgresql-typeorm-persistence.md) | PostgreSQL + TypeORM for persistence | Accepted |
| [0002](0002-repository-pattern.md) | Repository pattern to isolate TypeORM from services | Accepted (partially applied) |
| [0003](0003-pnpm-package-manager.md) | pnpm as the package manager | Accepted |
| [0004](0004-typescript-path-aliases.md) | TypeScript path aliases per domain | Accepted |
| [0005](0005-typeorm-synchronize-dev-only.md) | `synchronize: true` restricted to development | Accepted |
| [0006](0006-validation-pipe-and-dto.md) | Global `ValidationPipe` + class-validator DTOs | Accepted |
