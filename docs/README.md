# Project documentation

`sandbox-nest` is a personal NestJS learning/sandbox project, built incrementally
through tutorial "chapters" (see `git log`). These docs exist to keep the code
consistent as new chapters land, and to record *why* things are the way they are
so future-you doesn't have to reverse-engineer it.

- [Rules](rules.md) — working agreements: workflow, module structure, data
  access, validation, testing, secrets.
- [Style guide](style-guide.md) — naming, formatting, and per-layer conventions
  (entities, DTOs, controllers, services/repositories, tests).
- [Architecture Decision Records](adr/) — one file per significant decision,
  with context and trade-offs. Start at [adr/README.md](adr/README.md).

Keep these in sync with the code: when a rule or convention changes, update the
doc in the same commit (or the next chapter's commit) rather than letting it
drift.
