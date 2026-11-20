# Regression: PAIRED-001 — Build and configure a Paired Bar Chart

## Purpose

Protect fresh Paired Bar authoring, its exactly-two-series requirement, and its dedicated mirrored renderer. The
regression proves that semantic left/right bars share one center seam and numeric scale while stable labels, spacing,
palette, tooltip, and legend output remain observable and exact.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes
- Storybook area: `Regression Tests/Chart Scripts/Paired Bar`

## Test Data

Upload `paired-bar-regression.csv` from this exact fixture:

```csv
Region,Reported,Expected
North,80,40
Central,50,70
South,65,30
```

Every numeric value is unique, so each bar, value label, and tooltip can be identified semantically.

## Preconditions

- Start the single `PAIRED001` story from an empty `CdcEditor` configuration.
- Use only the inline CSV and one continuing editor session.
- Do not modify production Chart or Editor behavior to satisfy this regression.

## Steps and Expected Results

| #   | User action                       | Input                               | Expected visible result                                                                                                      |
| --- | --------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 1   | Choose Paired Bar and import data | Fixture; Vertical; Yes; Single Row  | Preview preserves all headings and rows; Configure becomes available                                                         |
| 2   | Open Configure without mappings   | No fields                           | Exactly 2 Data Series and Data Key guidance is actionable; no Paired Bar SVG renders                                         |
| 3   | Configure one side and categories | Reported; categorical Region        | Only Exactly 2 Data Series remains and rendering stays blocked                                                               |
| 4   | Complete the pair                 | Expected                            | Six tooltip-identified bars render as three aligned left/right pairs around one seam                                         |
| 5   | Inspect semantics                 | No new input                        | Legend is Reported/Expected; each Region appears once; widths share one proportional numeric scale; tooltip content is exact |
| 6   | Toggle value labels               | Display Numbers on Bar on, then off | All six unique values appear on their owning sides and disappear                                                             |
| 7   | Tighten row spacing               | Bar Space 15→5                      | Uniform row gaps contract while X/width and seam alignment stay stable                                                       |
| 8   | Select a two-color palette        | `divergent_green_orange`            | Reported uses `#3EA394`, Expected uses `#E27447`, with geometry and tooltip ownership unchanged                              |

## Final Acceptance Criteria

- Required guidance blocks rendering until exactly two series and Region are configured.
- Six finite positive bars form three semantic mirrored pairs around one shared center seam.
- Width/value ratios prove both sides use one scale.
- Labels, spacing, and palette changes affect only their intended rendered properties.
- Tooltip, legend, and category output remain exact and synchronized.

## Persistence Check

- Required: no.

## Accessibility or Interaction Check

- Locate chooser, Configure, required-field actions, accordions, and controls by accessible role or label.
- Use renderer-derived selectors only for SVG bar geometry and tooltip attributes without accessible roles.

## Notes

- Bar Borders, palette reversal, and series removal are intentionally excluded because their current behavior is coupled, unreliable, or surprising.
- Regular/stacked Bar permutations, ranking, filters, tables, patterns, brush, annotations, and downloads remain outside this focused workflow.
- Automated story: `packages/editor/src/_stories/PAIRED-001.Regression.stories.tsx`
