# Design tokens

This directory will contain machine-readable foundation and semantic tokens.
The source format and compatibility policy remain to be selected.

The token model must distinguish:

- official OpenBindings brand values;
- semantic roles consumed across official applications;
- the public, themeable `--ob-*` contract owned by Elements; and
- modality adapters such as terminal roles that cannot consume CSS directly.

Generated CSS, TypeScript, JSON, or Go snapshots belong in published packages
or consumer repositories, never as competing hand-edited sources here.
