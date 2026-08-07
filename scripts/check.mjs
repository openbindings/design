import { access, readFile } from "node:fs/promises";

const required = [
  "README.md",
  "CONTRIBUTING.md",
  "LICENSE",
  "docs/authority.md",
  "docs/current-state.md",
  "docs/decisions/0001-independent-repository.md",
  "assets/README.md",
  "brand/README.md",
  "experience/README.md",
  "tokens/README.md",
  "packages/README.md",
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

console.log(`design check: ${required.length} foundational files present`);
