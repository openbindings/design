# Design slice: identity and canonical assets

Status: inventory
Tracker key: `identity`

## Frame

- **User-perceivable concern:** OpenBindings should present one recognizable
  glyph whose geometry and rendering are reliable across official surfaces.
- **In scope:** glyph geometry, canonical vector source, monochrome rendering,
  favicon and embedded variants, sizing and accessibility guidance, and a
  generation or synchronization mechanism.
- **Out of scope:** redesigning the glyph, creating a wordmark, selecting a
  broad color palette, social-card composition, and product-specific header
  layout.
- **Constraints:** browser favicons must adapt to light and dark contexts;
  inline and masked uses must accept host color; `ob` must be able to embed an
  offline artifact without a runtime package dependency.
- **Completion evidence:** one canonical source in Design, documented variants
  generated from it, consumer migrations in Web, workbench, and OAuth, and a
  check that prevents geometry drift.

## Exact evidence

| Surface | Repository commit | Source paths | Locally clean? |
| --- | --- | --- | --- |
| Web | `openbindings/web@108cecba3652440bbee70c4c88de05ebead0bc54` | `static/favicon.svg` | Yes |
| Workbench | `openbindings/elements@5a738c72ee28948a6390565d178abd90a75d6ee6` | `apps/ob-start-workbench/public/assets/favicon.svg` | Yes |
| OAuth | `openbindings/ob@adfdc1ce48be7b2576c947b6033cf278901c56ea` | `internal/cmd/oauth_assets/openbindings-glyph.svg` | Yes |

The complete initial audit is in
[the common-ground evidence](../evidence/2026-08-07-common-ground.md).

## Semantic comparison

| Intent | Current expressions | Classification hypothesis | Reason |
| --- | --- | --- | --- |
| Recognizable geometry | The same five nested paths and view box appear in all three sources | Shared foundation | Geometry is identical despite wrapper differences |
| Inherit surrounding color | OAuth paths use `currentColor`; workbench masks the favicon with text color | Shared foundation | Both express the glyph as a monochrome shape controlled by context |
| Standalone favicon theme | Web and workbench use identical embedded light/dark CSS | Modality adaptation | A favicon has no host element from which to inherit color |
| Copied vector files | Three repositories maintain two wrapper variants around the same geometry | Accidental drift risk | There is no source provenance or synchronization check |
| Accessible meaning | Header uses are decorative beside visible brand text; favicon has document-level identity | Modality adaptation | Alternative text depends on context, not the SVG alone |

These are inventory classifications. They become decisions only when this
slice reaches `proposal` and is reviewed.

## Questions to resolve

1. Should the canonical source be a minimal `currentColor` SVG, with a themed
   favicon generated from it?
2. Should generated variants be committed to Design, copied during consumer
   builds, or published in a small asset package?
3. Which minimum rendered size preserves the nested structure?
4. Does the existing view box include intentional clear space, and what usage
   rule should consumers follow?
5. Should the glyph carry no intrinsic accessible name so each use supplies
   the correct contextual semantics?

## Candidate canonical outputs

| Output | Intended Design path | Maturity |
| --- | --- | --- |
| Portable monochrome master | `assets/openbindings-glyph.svg` | Not created |
| Theme-aware favicon | `assets/generated/favicon.svg` | Not created |
| Geometry and variant check | `scripts/check-assets.mjs` | Not created |
| Identity usage guidance | `brand/identity.md` | Not created |

## Consumer adoption

| Consumer | Expected mapping | Evidence | State |
| --- | --- | --- | --- |
| Web | Consume or verify the generated favicon | Pending | observed |
| Elements | No official identity in neutral public components | Identity is outside the component contract | out_of_scope |
| Workbench | Consume or verify the generated favicon and mask it with semantic text color | Pending | observed |
| OAuth | Embed the portable monochrome variant during the Go build | Pending | observed |
| CLI | No glyph in ordinary terminal output | Graphical identity is outside this medium | out_of_scope |

## Exit criteria for inventory

- Render the three current variants at favicon, header, and authorization sizes.
- Measure the effective bounds and minimum legible size.
- Confirm the glyph's origin and licensing history.
- Choose asset distribution only after testing the simplest generation path in
  all three consumer repositories.
