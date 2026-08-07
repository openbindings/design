# Design tokens

This directory contains the candidate semantic color system and will grow as
later design slices establish additional foundations.

- [`color.json`](color.json) defines color roles and usage constraints.
- [`themes/openbindings.json`](themes/openbindings.json) supplies the official
  light/dark values plus Elements and terminal mappings.
- [`generated/openbindings-theme.css`](generated/openbindings-theme.css) is a
  checked adapter written by `npm run generate:theme`.

The token model must distinguish:

- official OpenBindings brand values;
- semantic roles consumed across official applications;
- the public, themeable `--ob-*` contract owned by Elements; and
- modality adapters such as terminal roles that cannot consume CSS directly.

Generated adapters may live here while a system slice is being proven, but
they must identify their sources and be checked for drift. Publishable CSS,
TypeScript, JSON, or Go packages belong under `packages/` only when consumers
need installed versioning. Consumer snapshots must never become competing
hand-edited sources.
