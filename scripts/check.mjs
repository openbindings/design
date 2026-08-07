import { access, readFile } from "node:fs/promises";

const required = [
  "README.md",
  "CONTRIBUTING.md",
  "LICENSE",
  "docs/authority.md",
  "docs/current-state.md",
  "docs/development-loop.md",
  "docs/evidence/2026-08-07-common-ground.md",
  "docs/evidence/2026-08-07-identity-adoption.md",
  "docs/evidence/2026-08-07-identity-rendering.md",
  "docs/decisions/0001-independent-repository.md",
  "docs/decisions/0002-canonical-glyph.md",
  "docs/slices/color-theme.md",
  "docs/slices/identity.md",
  "docs/templates/design-slice.md",
  "design-loop.json",
  "assets/README.md",
  "assets/manifest.json",
  "assets/openbindings-glyph.svg",
  "assets/generated/favicon.svg",
  "assets/generated/openbindings-glyph.svg",
  "brand/README.md",
  "brand/identity.md",
  "experience/README.md",
  "tokens/README.md",
  "packages/README.md",
  "scripts/design-loop.mjs",
  "scripts/generate-assets.mjs",
  "specimens/identity.html",
];

await Promise.all(required.map(path => access(new URL(`../${path}`, import.meta.url))));

const packageJson = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8"),
);

if (packageJson.name !== "@openbindings/design-workspace") {
  throw new Error("workspace package name must remain @openbindings/design-workspace");
}
if (packageJson.private !== true) {
  throw new Error("the repository root must remain private; publish packages/ entries instead");
}

const designLoop = JSON.parse(
  await readFile(new URL("../design-loop.json", import.meta.url), "utf8"),
);
const sliceStates = new Set([
  "queued",
  "inventory",
  "proposal",
  "canonical",
  "migration",
  "verified",
]);
const adoptionStates = new Set([
  "not_started",
  "observed",
  "migrating",
  "adopted",
  "exception",
  "out_of_scope",
]);
const consumers = Object.keys(designLoop.consumers ?? {});

if (designLoop.format !== "openbindings.design-loop@1") {
  throw new Error("design-loop.json must use openbindings.design-loop@1");
}
if (consumers.length === 0) {
  throw new Error("design-loop.json must declare at least one consumer");
}
if (!designLoop.slices?.[designLoop.activeSlice]) {
  throw new Error("design-loop.json activeSlice must name a declared slice");
}

for (const [key, slice] of Object.entries(designLoop.slices)) {
  if (!sliceStates.has(slice.status)) {
    throw new Error(`${key}: invalid slice status ${slice.status}`);
  }
  if (slice.status !== "queued" && !slice.record) {
    throw new Error(`${key}: active work must link a slice record`);
  }
  if (slice.record) {
    await access(new URL(`../${slice.record}`, import.meta.url));
  }
  for (const evidencePath of slice.evidence ?? []) {
    await access(new URL(`../${evidencePath}`, import.meta.url));
  }
  for (const canonicalPath of slice.canonical ?? []) {
    await access(new URL(`../${canonicalPath}`, import.meta.url));
  }
  for (const consumer of consumers) {
    const state = slice.adoption?.[consumer];
    if (!adoptionStates.has(state)) {
      throw new Error(`${key}: invalid adoption state for ${consumer}: ${state}`);
    }
  }
}

const activeStatus = designLoop.slices[designLoop.activeSlice].status;
if (activeStatus === "queued" || activeStatus === "verified") {
  throw new Error("activeSlice must name work between inventory and migration");
}

console.log(`design check: ${required.length} foundational files present`);
