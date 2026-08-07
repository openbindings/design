# Design slice: interface foundations

Status: proposal
Tracker key: `foundations`
Owner: OpenBindings maintainers

## Frame

- **User-perceivable concern:** typography, density, shape, focus, and motion
  should make official surfaces feel related and behave predictably without
  forcing browser, component, and terminal implementations into one stack.
- **In-scope surfaces:** openbindings.com, public Elements, the `ob start`
  Workbench, authorization pages, and applicable human-facing CLI structure.
- **Out of scope:** identity assets, color roles, syntax palettes,
  machine-readable output, UI copy, component behavior, and normative
  terminology.
- **Contract boundary:** Elements owns public component tokens and behavior;
  each product owns its layout and interaction implementation. Design may
  define official values and accessibility expectations, then map into those
  contracts.
- **Completion evidence:** an exact cross-surface inventory, accepted roles or
  scales, representative specimens, explicit modality adaptations, and
  verified consumer adoption.

## Inventory evidence

The broad comparison begins with
[the common-ground inventory](../evidence/2026-08-07-common-ground.md). The
[exact foundations inventory](../evidence/2026-08-07-foundations-inventory.md)
pins consumer commits, records implementation values, and classifies each
difference.

| Concern | Initial observation | Inventory question |
| --- | --- | --- |
| Typography | Browser surfaces use related sans/mono stacks with different scales | Which hierarchy is shared, and which scale differences follow information density? |
| Density and spacing | Web is editorial; Workbench and Elements are operational and denser | Can one spacing vocabulary support both expressions without flattening them? |
| Shape | Corners range from nearly square controls to larger editorial cards | Which shapes communicate function rather than decoration? |
| Focus | Focus indicators exist across browser surfaces with differing geometry | What minimum visible-focus contract should every official interaction meet? |
| Motion | Transitions are short and mostly functional | Which motion roles are useful, and how must reduced-motion collapse them? |
| Terminal structure | CLI uses whitespace, indentation, and native emphasis rather than CSS | Which foundation decisions have a meaningful terminal adaptation? |

## Proposed model

The proposal has two deliberately unequal tiers:

1. **Required behavioral guardrails:** visible and unobscured keyboard focus,
   accessible pointer targets, adaptable text, and reduced-motion support.
2. **Open visual references:** familiar type stacks, rhythm anchors, radii,
   focus geometry, and motion tempos that consumers may adopt, interpolate,
   or decline.

Expression profiles document editorial, application, embedded, and terminal
adaptations. They are illustrative, not style presets. In particular, the
system defines neither a canonical wordmark nor a fixed glyph-and-name lockup;
typography beside the glyph stays surface-owned.

## Candidate sources

- [`tokens/foundations.json`](../../tokens/foundations.json)
- [`tokens/generated/openbindings-foundations.css`](../../tokens/generated/openbindings-foundations.css)
- [`experience/foundations.md`](../../experience/foundations.md)
- [`specimens/foundations.html`](../../specimens/foundations.html)

The proposal advances only after the specimen proves expressive latitude and
consumer migrations close genuine behavioral gaps without normalizing
intentional surface differences.
