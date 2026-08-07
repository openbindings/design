# Design slice: color roles and official theme

Status: canonical
Tracker key: `color-theme`
Owner: OpenBindings maintainers

## Frame

- **User-perceivable concern:** official OpenBindings surfaces should share a
  recognizable light and dark color system while reusable Elements remain
  neutrally themeable and the terminal remains native to its capabilities.
- **In-scope surfaces:** openbindings.com, public Elements, the `ob start`
  workbench, authorization pages, and human-facing terminal output.
- **Out of scope:** typography, spacing, radius, focus geometry, syntax token
  colors, machine-readable CLI output, and changing public component behavior.
- **Upstream authorities and public contracts:** Elements owns the public
  `--ob-*` theme API; `ob` owns terminal behavior and `NO_COLOR`; Web and `ob`
  own their product implementations. This slice may map into those contracts
  but may not redefine them silently.
- **Completion evidence:** semantic color roles and an official light/dark
  theme in Design, contrast and forced-color evidence, an explicit neutral
  Elements mapping, native terminal adaptations, and verified adoption by each
  applicable consumer.

## Exact evidence

| Surface | Repository commit | Source paths | Locally clean? | Rendered evidence |
| --- | --- | --- | --- | --- |
| Web | `openbindings/web@caf933752e1353a4760476b44c64bd959961aa90` | `src/app.css` | Yes at initial audit | Common-ground inventory |
| Public Elements | `openbindings/elements@9bf6cf24e5abb5064db89b7524115a4b058f2ae5` | `packages/ui-core/src/styles.ts` | Yes at initial audit | Common-ground inventory |
| Workbench | `openbindings/elements@9bf6cf24e5abb5064db89b7524115a4b058f2ae5` | `apps/ob-start-workbench/src/styles.css` | Yes at initial audit | Common-ground inventory |
| OAuth | `openbindings/ob@d2dab66b4752f06c0618b87675c4b55a5bad4f5c` | `internal/cmd/oauth_html.go` | Yes at initial audit | Common-ground inventory |
| Terminal CLI | `openbindings/ob@d2dab66b4752f06c0618b87675c4b55a5bad4f5c` | `internal/app/styles.go` | Yes at initial audit | Common-ground inventory |

The source comparison begins with
[the common-ground evidence](../evidence/2026-08-07-common-ground.md). Exact
values, theme behavior, and contrast findings are in
[the color-theme inventory](../evidence/2026-08-07-color-theme-inventory.md).
The generated cross-surface rendering is
[`specimens/color-theme.html`](../../specimens/color-theme.html).

## Semantic comparison

| Intent or role | Current expressions | Classification hypothesis | Reason |
| --- | --- | --- | --- |
| Page and component hierarchy | Background, surface, raised surface, and border roles recur across browser surfaces | Shared foundation | The hierarchy is common even when literals differ |
| Official action emphasis | Web, workbench, and OAuth favor the strongest neutral | Official expression | This produces the restrained monochrome character of official products |
| Reusable component accent | Elements defaults to blue | Neutral default | Third-party consumers need an independent, legible default |
| Light and dark presentation | Every browser surface supports both; only workbench exposes a selector | Shared capability with modality adaptation | Theme values can align without forcing one control model |
| Success, warning, and danger | Browser palettes and terminal styles use different literals | Modality adaptation | Shared meaning must survive native contrast and terminal capability limits |
| Syntax colors | Similar roles use differing values | Deferred to `machine-material` | Syntax needs its own contrast and semantic review |

These classifications are accepted for candidate revision 1. Consumer proof
may send a role or value back to proposal without reopening unrelated roles.

## Resolved questions

1. Semantic hierarchy, readable emphasis, action contrast, and status meaning
   are shared. Elements' public tokens remain the component contract; the
   official values are an adapter over it.
2. Official browser surfaces use the shared values unless a documented native
   capability requires adaptation. Decorative neutral separation may vary,
   but text and meaningful-boundary contrast may not.
3. Forced-colors must use system colors, retain non-color state cues, and avoid
   `forced-color-adjust: none` on ordinary UI. Faint text and meaningful
   boundaries meet their contrast requirements in ordinary themes.
4. Terminal roles map to ANSI meaning; `NO_COLOR` emits no styling escapes and
   leaves all textual meaning intact. Machine output is untouched.
5. The source can ship as checked JSON plus generated CSS in Design while it is
   candidate. No package or public compatibility promise is required yet.

## Candidate outputs

| Output | Intended Design path | Maturity |
| --- | --- | --- |
| Semantic color role model | `tokens/color.json` | candidate |
| Official light and dark values | `tokens/themes/openbindings.json` | candidate |
| Generated CSS and Elements adapter | `tokens/generated/openbindings-theme.css` | candidate |
| Theme and modality guidance | `brand/theme.md` | candidate |
| Cross-surface color specimen | `specimens/color-theme.html` | candidate |

## Consumer adoption

| Consumer | Mapping | Pull request or commit | Checks | State |
| --- | --- | --- | --- | --- |
| Web | Map official theme roles into local CSS | — | Pending | observed |
| Elements | Preserve neutral defaults and document the official adapter seam | — | Pending | observed |
| Workbench | Map application tokens into the Elements contract | — | Pending | observed |
| OAuth | Map official roles into embedded page CSS | — | Pending | observed |
| CLI | Map semantic roles to native terminal styles and no-color fallbacks | — | Pending | observed |

## Exceptions and follow-ups

- Approved exceptions: Elements' neutral fallback palette is preserved by
  design; it is not an adoption exception. Official hosts apply the adapter.
- Follow-up slices: machine-material owns syntax palettes; foundations owns
  focus geometry and typography.
- Final verification date: pending.
