# Design slice: interface foundations

Status: inventory
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

## Starting evidence

The broad comparison begins with
[the common-ground inventory](../evidence/2026-08-07-common-ground.md). This
slice must now record exact values and rendered examples before proposing a
shared system.

| Concern | Initial observation | Inventory question |
| --- | --- | --- |
| Typography | Browser surfaces use related sans/mono stacks with different scales | Which hierarchy is shared, and which scale differences follow information density? |
| Density and spacing | Web is editorial; Workbench and Elements are operational and denser | Can one spacing vocabulary support both expressions without flattening them? |
| Shape | Corners range from nearly square controls to larger editorial cards | Which shapes communicate function rather than decoration? |
| Focus | Focus indicators exist across browser surfaces with differing geometry | What minimum visible-focus contract should every official interaction meet? |
| Motion | Transitions are short and mostly functional | Which motion roles are useful, and how must reduced-motion collapse them? |
| Terminal structure | CLI uses whitespace, indentation, and native emphasis rather than CSS | Which foundation decisions have a meaningful terminal adaptation? |

## Next inventory actions

1. Capture exact type stacks, sizes, line heights, spacing values, radii,
   focus treatments, and motion timings at pinned consumer commits.
2. Classify differences as shared foundation, official expression, neutral
   component default, modality adaptation, or unresolved inconsistency.
3. Build a cross-surface specimen before accepting any scale or token names.

No foundation value is canonical yet. Existing consumer implementations remain
authoritative until this slice reaches migration.
