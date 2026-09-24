# FOLIO-BINDER-24 — Package Folio

WAVE_ID: `2026-09-24-i-loom`
Repo: `DubjamMusic/Codex-hub`
Merge policy: **pr-only**

## Job
Bind the monorepo package folio as a testable card so the hub catalog can be scored without touching workspace plumbing. This is not hub-cartwright (Wave D lattice) and not scaffold-wright (Wave D lattice). New figure, new path, new wave id.

## Responsibilities
- Own `folio.json` only.
- Print a reproducible density to three decimals.
- Keep merge policy pr-only.

## Knowledge required
- Density = (N^wN * V^wV * S^wS * D^wD)^(1 / totalWeight).
- Folio lists packages; it does not rewrite turbo.json.
- Chair holds merge.

## Primary path this wave
`figures/folio-binder/**` only.

## Out of scope
Do not rewrite `pnpm-workspace.yaml` or `turbo.json` this wave. Workspace graph changes are a separate issue.
