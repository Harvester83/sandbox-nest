# ADR-0006: Global `ValidationPipe` + class-validator DTOs

Date: 2026-08-22
Status: Accepted

## Context

`main.ts` registers `app.useGlobalPipes(new ValidationPipe())`. DTOs such as
`CreateUserDto` declare `class-validator` decorators (`@IsString`,
`@IsEmail`, `@IsInt`, `@Min`, `@Max`, `@MinLength`) directly on class
properties.

## Decision

Validate all incoming request bodies through DTO classes decorated with
`class-validator`, enforced globally by the single `ValidationPipe` in
`main.ts` — no per-route pipes or manual validation in controllers/services.
`Update<X>Dto` variants derive from `Create<X>Dto` via `PartialType` (from
`@nestjs/mapped-types`) rather than redeclaring fields as optional.

## Consequences

- Consistent 400 responses with per-field error details, with no per-route
  boilerplate.
- Every new DTO must be a `class` (not an `interface` or `type`) with
  decorators — plain interfaces are erased at runtime and `ValidationPipe`
  silently no-ops on them.
