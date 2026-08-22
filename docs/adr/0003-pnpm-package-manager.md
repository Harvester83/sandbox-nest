# ADR-0003: pnpm as the package manager

Date: 2026-08-22
Status: Accepted

## Context

`pnpm-lock.yaml` is the committed lockfile; no `package-lock.json` or
`yarn.lock` exists. The README's setup/run commands also use `pnpm`.

## Decision

Use pnpm for installing dependencies and running scripts. Don't commit a
lockfile from another package manager.

## Consequences

- Contributors need pnpm installed locally.
- Faster installs and no "phantom dependency" access to packages that
  aren't declared, at the cost of an extra tool beyond plain npm.
