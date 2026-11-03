# hub-librarian

**WAVE_ID**: `2026-11-03-q-ember`

## Job
Index the monorepo packages (animations, design-tokens, ui, utils) so agents can discover them without scanning the full tree.

## Responsibilities
- Maintain a machine-readable package index under `figures/hub-librarian/`.
- Assert every listed package has a package.json and src/index.ts.
- Reject any figure id that collides with banned boardroom tokens.
- PR-only writes.

## Required knowledge
- pnpm workspace layout in Codex-hub.
- Design token and UI component surface.
- HustleCodex density scoring for catalog completeness.

## Pass test
```js
// expected: { pass: true, packages: 4, banned: false }
```

## Merge policy
PR only. Chair holds the gate.
