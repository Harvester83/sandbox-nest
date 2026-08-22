# Style guide

Baseline: the ESLint flat config (`eslint.config.mjs`) and Prettier
(`.prettierrc`) are the enforced source of truth — run `pnpm lint` /
`pnpm format`. This guide covers conventions the linter doesn't (and won't)
catch.

## Formatting (enforced by tooling)

- Prettier: single quotes (`.prettierrc`); otherwise Prettier defaults
  (2-space indent, semicolons, trailing commas).
- ESLint: `typescript-eslint` `recommended-type-checked` +
  `eslint-plugin-prettier`. Notable overrides in `eslint.config.mjs`:
  - `@typescript-eslint/no-explicit-any`: **off** — `any` is allowed, but
    reach for a real type when one is easy to write.
  - `@typescript-eslint/no-floating-promises`: **warn** — still `await` or
    `.catch()` every promise; don't rely on the warning staying quiet.
  - `@typescript-eslint/no-unsafe-argument`: **warn**.
  - `@typescript-eslint/no-unsafe-member-access`: **off**.

## Naming & files

- Files: `kebab-case`, matching Nest CLI generator output —
  `create-product.dto.ts`, `product.controller.ts`,
  `product.controller.spec.ts`.
- Classes: `PascalCase` with the Nest suffix matching the artifact —
  `ProductController`, `ProductService`, `ProductModule`,
  `UsersRepository`, `CreateUserDto`, `UpdateUserDto`; entities get no
  suffix (`User`, `Product`).
- One class per file; file name = class name in kebab-case.
- Singular vs. plural domain naming: match what's already there per domain
  (`users` folder / `UsersController` / `UsersService` are plural;
  `product` folder / `ProductController` / `ProductService` are singular).
  Don't rename an existing domain's casing — pick one per *new* domain and
  stay consistent within it.

## Imports

- Cross-domain imports use the TS path alias for that domain (`@users/*`,
  `@product/*`, `@common/*`, `@app/*` for `src` root) — see
  [ADR-0004](adr/0004-typescript-path-aliases.md).
- Same-domain imports use relative paths (e.g. `./dto/create-user.dto`).
- Let ESLint/Prettier own import formatting; don't hand-sort import blocks.

## Entities (TypeORM)

- `@Entity('<table_name>')` — always pass an explicit snake_case table
  name (see `@Entity('users')`); don't rely on the class-name default.
- Declare every column with `@Column(...)` and a definite-assignment
  assertion (`!`), not `?` or a constructor — TypeORM populates these after
  construction (see `user.entity.ts`).
- Primary keys: `@PrimaryGeneratedColumn('uuid')` unless a specific chapter/
  ADR calls for something else.

## DTOs

- Plain classes (never interfaces or `type` aliases) decorated with
  `class-validator` — interfaces are invisible to `ValidationPipe` at
  runtime.
- `Update<X>Dto extends PartialType(Create<X>Dto)` from
  `@nestjs/mapped-types` — never hand-duplicate fields as optional.
- Order decorators from type to constraint, e.g. `@IsString()` then
  `@MinLength(2)`, matching `create-user.dto.ts`.

## Controllers

- Thin: parse/route only, no business logic — delegate immediately to the
  service.
- Route params: `@Param('id') id: string`, converted at the call site with
  unary `+id` when the service expects a number (see
  `product.controller.ts`). Don't add a custom parsing pipe for this unless
  multiple routes actually need it.

## Services / repositories

- Services depend on a `<Domain>Repository`, not `Repository<Entity>`
  directly — see [ADR-0002](adr/0002-repository-pattern.md).
- Repository methods return the entity/entities (wrapped in `Promise<...>`
  for TypeORM calls) with no DTO mapping inside the repository — that
  belongs in the service if/when mapping is needed.
- Prefer `async`/`await` over `.then()` chains (see `users.repository.ts`).

## Tests

- One `*.spec.ts` per controller/service, built with
  `Test.createTestingModule` and mocked providers — follow the shape already
  in `product.controller.spec.ts` / `product.service.spec.ts`.
