# OpenBindings Design

OpenBindings Design is the nonnormative, project-wide authority for the
official OpenBindings brand and product experience. It exists so the website,
Elements, the `ob` terminal experience, the embedded workbench, authorization
pages, and project assets can feel like parts of one system without forcing
those surfaces into one implementation.

**Status: foundation.** The repository boundary and ownership model are
established. The actual brand guide, token values, asset masters, and public
packages are still to be reviewed and adopted. Existing consumer files remain
authoritative for their current implementations until an explicit migration
lands.

This work is tooling and product guidance. It is not part of the OpenBindings
specification and creates no conformance requirement for third-party
implementations.

## Authority

This repository owns:

- the official OpenBindings visual identity and canonical brand assets;
- brand voice and cross-surface product-content guidance;
- product-experience and accessibility presentation principles;
- foundation, semantic, syntax, and motion tokens for official surfaces;
- the official theme packages and generated design artifacts;
- design-specific validation, reference fixtures, and migration guidance.

It does not own:

- normative terminology or document semantics (`openbindings/spec`);
- published interface contracts (`openbindings/interfaces`);
- component APIs and behavior (`openbindings/elements`);
- website information architecture, teaching, or deployment
  (`openbindings/web`);
- CLI commands, machine output, or runtime behavior (`openbindings/ob`);
- cross-repository cohorts and integration policy (`openbindings/project`).

The detailed routing rules are in [docs/authority.md](docs/authority.md).

## Repository structure

```text
assets/       canonical glyphs, wordmarks, icons, and generated-asset inputs
brand/        identity, voice, typography, and brand-expression guidance
experience/   interaction, UI content, accessibility, and modality guidance
tokens/       machine-readable foundation and semantic design decisions
packages/     distributable artifacts, including the future @openbindings/design
docs/         authority, current-state inventory, decisions, and migrations
scripts/      repository validation and generation tooling
```

## Consumers

Official consumers adopt this system without surrendering their native
authority:

- Elements maps shared decisions into its public `--ob-*` component contract.
- Web applies the official theme to its Svelte publication and teaching
  surfaces.
- `ob start` applies the theme to its workbench and authorization pages.
- The terminal CLI adapts semantic roles to terminal capabilities and respects
  `NO_COLOR`; it does not attempt to reproduce CSS.

Third-party Elements consumers are not required to use the OpenBindings theme.
Themeability remains a product feature, not a brand exception.

## Development

The repository currently has no runtime dependencies:

```sh
npm test
```

Changes use trunk plus tags. Work lands on `main`; future published design
artifacts will version independently from the specification, SDKs, Elements,
Web, `ob`, and project cohorts.
