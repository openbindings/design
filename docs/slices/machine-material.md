# Design slice: machine material and syntax

Status: inventory
Tracker key: `machine-material`
Owner: OpenBindings maintainers

## Frame

- **User-perceivable concern:** JSON, YAML, source excerpts, schemas, command
  examples, and other machine-authored material should remain readable and
  recognizable across official surfaces without making serialized output
  decorative or unsafe for automation.
- **In-scope surfaces:** Web documentation and examples, public Elements code
  views and editors, the `ob start` Workbench document and output panes, and
  human-facing CLI excerpts that contain identifiers or machine material.
- **Contract boundary:** `ob --format json|yaml`, output files, and other
  machine-readable streams preserve their exact serialization and never
  receive ANSI styling. This slice may govern how a UI renders those bytes,
  not the bytes themselves.
- **Out of scope:** OBI semantics, serialization rules, editor behavior,
  command behavior, typography outside machine material, and general status
  colors.
- **Completion evidence:** a semantic syntax-role model, official browser
  values for light/dark/forced-colors, an explicit neutral Elements mapping,
  representative JSON and YAML specimens, and consumer checks proving that
  raw CLI output remains unstyled.

## Current evidence

| Surface | Source paths | Current expression |
| --- | --- | --- |
| Web | `src/lib/markdown/render-spec-markdown.ts`, `src/lib/components/SpecDocument.svelte`, `src/routes/+page.svelte` | GitHub light/dark Shiki themes plus a bespoke monochrome homepage example |
| Public Elements | `packages/ui-core/src/styles.ts`, `packages/json-editor/src/index.ts`, `packages/json-editor/src/highlight.ts` | Public `--ob-editor-token-*` roles shared by editable and static code views |
| Workbench | `apps/ob-start-workbench/src/styles.css` | App-owned JSON/YAML palette mapped into the Elements syntax contract |
| Terminal CLI | `internal/app/output.go`, `internal/app/styles.go` | Serialized JSON/YAML bypass human-output styles; semantic text renderers use ANSI roles |
| OAuth | `internal/cmd/oauth_html.go` | Monospace identifiers without syntax coloring |

The initial comparison is recorded in
[the common-ground evidence](../evidence/2026-08-07-common-ground.md), with the
machine-output boundary reinforced by the completed
[color-theme slice](color-theme.md).

## Common ground to test

1. Code surfaces need a distinct neutral material plane, predictable
   monospace metrics, selection, scrolling, and copy behavior.
2. Property names, strings, numbers, keywords/literals, punctuation,
   comments, and invalid input are the smallest plausible cross-language role
   set. JSON and YAML must prove it before the set expands.
3. Syntax color is semantic aid, not brand decoration. Plain text, forced
   colors, and monochrome presentation must remain fully readable.
4. Editable and read-only code should share meaning even when their rendering
   engines differ (CodeMirror, Lezer, Shiki, or hand-authored markup).
5. Public Elements needs neutral defaults; official applications may provide
   a reviewed adapter over the same public tokens.

## Questions for inventory

- Can Web's Shiki scopes and Elements' Lezer tags map losslessly into one
  compact semantic role set?
- Which syntax roles require `4.5:1` contrast, and when may punctuation or
  comments use the theme's muted role?
- Should code-surface background and inline-code boundaries live here or in
  foundations, with this slice consuming them?
- How should invalid syntax distinguish itself without relying on red alone?
- Which fixtures prove JSON/YAML fidelity, selection, copy, horizontal
  overflow, and forced-colors behavior without turning editor implementation
  details into Design policy?

## Next inventory actions

1. Capture exact Web Shiki and homepage-example colors in light and dark.
2. Map every Elements/Workbench Lezer tag to its public token and rendered
   value.
3. Render the same JSON and YAML fixtures through Web, static Elements,
   editable Elements, and Workbench.
4. Verify that CLI JSON/YAML snapshots contain no ANSI escapes and remain
   unchanged when `NO_COLOR` varies.
5. Classify differences as shared roles, neutral component defaults,
   engine-specific adaptations, or accidental drift before proposing tokens.
