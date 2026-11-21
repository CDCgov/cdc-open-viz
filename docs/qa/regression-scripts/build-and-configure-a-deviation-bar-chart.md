# Regression: DEVIATION-001 — Build and configure a Deviation Bar chart

## Purpose

Protect the defining Deviation Bar authoring workflow: one imported numeric series must render relative to a
nonzero target, including values below, exactly at, and above the target, while its target label, two-color meaning,
tooltip, legend, and table remain synchronized.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes
- Storybook area: `Regression Tests/Chart Scripts/Deviation Bar`

## Test Data

Upload `deviation-bar-regression.csv` from this exact inline fixture:

```csv
Category,Score
Below target,20
At target,50
Above target,80
```

The target is deliberately nonzero so the test distinguishes target-relative deviation from positive/negative
sign handling. The equality row protects the zero-width edge case.

## Preconditions

- Start the single `DEVIATION001` story from an empty `CdcEditor` configuration.
- Use only the inline CSV; do not call a live endpoint.
- Complete the entire workflow in one continuing editor session.

## Steps and Expected Results

| # | User action | Input | Expected visible result |
|---|-------------|-------|-------------------------|
| 1 | Choose Deviation Bar and open Import Data | Upload the fixture | Data Preview shows both exact headings and all three exact rows |
| 2 | Complete Data Designer | Vertical; No | Both choices are visibly active and Configure becomes available |
| 3 | Configure the visualization | No mappings yet | Exactly 1 Data Series and Data Key guidance appears with accessible navigation; no chart renders |
| 4 | Add the only series | Score | Only Data Key remains missing and the one-series warning is resolved |
| 5 | Configure the category axis | Data Key Category | Required guidance clears and the Deviation Bar visualization renders |
| 6 | Set the reference value | Deviation point 50 | Below target ends at the target from the left, At target has zero width at the line, and Above target begins at the line and extends right |
| 7 | Rename and toggle the reference label | Label Goal; turn Show Deviation point label off and on | The visible target label becomes `Goal 50`, disappears and returns while the target line remains; legend meaning becomes Below Goal and Above Goal |
| 8 | Apply rounded styling | Bar style Rounded | Below- and above-target bars have visible rounded outer ends appropriate to their direction |
| 9 | Show values | Display Numbers on Bar | Each category row displays its exact value, including 50 for the zero-width mark |
| 10 | Exercise row spacing | Bar Space 5 | Row spacing contracts while target-relative X geometry remains valid |
| 11 | Select a two-color palette | divergent green/orange | Below- and above-target marks use the palette's two distinct, semantically matching colors |
| 12 | Inspect hover behavior | Hover Below target | The visible tooltip contains Below target and 20 |
| 13 | Exercise the legend | Reverse Labels; Hide Legend off/on | Label order reverses, the legend disappears, and it returns with exactly Above Goal then Below Goal |
| 14 | Inspect supporting data | Hide and restore Show Data Table; expand Data Table | The restored table exposes Category and Score with all three exact rows |

## Final Acceptance Criteria

- Empty-editor import preserves the exact fixture and enforces exactly one series plus one category key.
- All three target relationships have finite geometry and are identified by semantic tooltip content rather than DOM
  order.
- The equality value remains available through its number label and data table without depending on an impossible
  hover target.
- Target label visibility never removes the target line, and Below/Above legend text tracks the configured label.
- Rounded styling, number labels, spacing, the selected two-color palette, tooltip content, legend controls,
  and data-table visibility each produce a specific observable result.

## Persistence Check

- Required: no.

## Accessibility or Interaction Check

- Locate chooser, import, Configure, required-field actions, and editor controls by accessible role or label.
- Required-field actions must open the correct section and focus the intended control.
- Use renderer-derived selectors only for SVG geometry, colors, target lines, and tooltip content without accessible
  roles.
- Do not hover the zero-width At target mark; assert it through geometry, its visible value label, and table row.

## Notes

- Logarithmic scaling is excluded because Deviation Bar currently forces a linear scale.
- Lollipop controls, additional configured tooltip columns, and Legend Group By are excluded because the current
  Deviation renderer does not reliably consume those settings.
- Palette reversal is excluded from this regression contract; palette selection itself remains covered.
- Known coverage gap: the Deviation Bar renderer consumes `barHasBorder`, but the current Deviation Bar Visual panel
  does not expose the Bar Borders control, so editor-driven border behavior is not asserted here.
- Known coverage gap: changing Tooltip Opacity does not alter the computed Deviation Bar tooltip background, so
  opacity output is not asserted; semantic tooltip content remains covered.
- Exhaustive shared Bar, axis, legend, table, and filter behavior remains owned by focused stories.
- No production-code change is authorized by this script.
- Automated story: `packages/editor/src/_stories/DEVIATION-001.Regression.stories.tsx`
