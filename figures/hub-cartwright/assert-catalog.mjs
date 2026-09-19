#!/usr/bin/env node
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const catalog = JSON.parse(
  readFileSync(join(root, "figures/hub-cartwright/catalog.json"), "utf8")
);

const BANNED = ["planner", "executor", "monitor", "data_agent"];
const REQUIRED = ["animations", "design-tokens", "ui", "utils"];

if (catalog.figureId !== "hub-cartwright") {
  throw new Error("wrong figureId");
}
if (catalog.mergePolicy !== "pr-only") {
  throw new Error("merge policy must stay pr-only");
}
if (BANNED.includes(catalog.figureId)) {
  throw new Error("boardroom clone");
}

const ids = catalog.packages.map((p) => p.id);
if (new Set(ids).size !== ids.length) {
  throw new Error("duplicate package ids");
}
for (const id of REQUIRED) {
  if (!ids.includes(id)) throw new Error(`missing package ${id}`);
}
for (const pkg of catalog.packages) {
  const pkgJson = join(root, pkg.path, "package.json");
  if (!existsSync(pkgJson)) {
    throw new Error(`package path missing: ${pkg.path}`);
  }
}
for (const token of BANNED) {
  const blob = JSON.stringify(catalog);
  if (blob.includes(`"${token}"`) && token === catalog.figureId) {
    throw new Error(`banned token used as id: ${token}`);
  }
}

console.log(`ok hub-cartwright ${REQUIRED.length}/${REQUIRED.length}`);
