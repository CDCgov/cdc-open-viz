# Regression: LINE-002 — Configure an open-circle Special Line

## Purpose

Protect the editor-started workflow for authoring an Open Circles Special Line rule. The regression proves that a
conditional effect applies only to its selected series and matching rows, leaves the underlying lines unchanged,
updates marker size and legend output, and is removed cleanly.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes
- Storybook area: `Regression Tests/Chart Scripts/Line Chart`

## Test Data

Upload `line-open-circle-regression.csv` from this exact inline fixture:

```csv
Date,Observed,Goal,Status
2026-03-01,40,35,final
2026-03-08,44,38,provisional
2026-03-15,42,41,final
2026-03-22,49,45,provisional
2026-03-29,52,48,final
```

The two provisional rows are interior points. This makes the conditional marker positions distinguishable from the
line endpoints and from every Goal value.

## Preconditions

- Start the single `LINE002` story from an empty `CdcEditor` configuration.
- Use only the inline CSV; do not call a live endpoint.
- Complete the workflow in one continuing editor session.
- Do not modify production Chart or Editor behavior to satisfy the regression.

## Steps and Expected Results

| #   | User action                   | Input                                                                                          | Expected visible result                                                                                                                                 |
| --- | ----------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Choose Line and import data   | Upload the fixture; Vertical; Yes; Single Row                                                  | Data Preview preserves all four headings and five exact rows, and Configure becomes available                                                           |
| 2   | Configure the Line chart      | Add Observed and Goal; set Date to Date Time Scale; set parse/axis/hover formats to `%Y-%m-%d` | Two finite continuous solid paths render with no direct effect circles or special-effect legend                                                         |
| 3   | Add a Special Line            | Click Add Special Line and open Effect Data 1                                                  | The new effect editor appears without changing either path                                                                                              |
| 4   | Define the conditional effect | Associate Observed; column Status; trigger provisional; Style Open Circles                     | Exactly two white-filled circles with the Observed stroke mark the provisional Observed vertices; Goal remains unmarked and both paths remain unchanged |
| 5   | Inspect circle-only controls  | No new input                                                                                   | Circle size and Label are visible; Apply style to and Line Weight are absent because they affect line segments, not circle markers                      |
| 6   | Author the legend label       | Label `Provisional observations`                                                               | The Special Line legend shows the open-circle glyph and exact authored label                                                                            |
| 7   | Resize the markers            | Change circle size from 6 to 9                                                                 | Both radii become 9 while marker centers and both line paths remain unchanged                                                                           |
| 8   | Remove the Special Line       | Click Remove                                                                                   | Both circles and the special legend disappear, and the original path geometry, strokes, and dash patterns remain intact                                 |

## Final Acceptance Criteria

- The fresh-editor import and required mappings preserve the deterministic fixture.
- The conditional rule marks exactly the two provisional Observed values and never the Goal series.
- Effect markers have finite unique centers, white fill, the Observed series stroke, and the authored radius.
- Open Circles do not split, restyle, or move either base line.
- The exact Special Line legend appears, resizes remain marker-only, and removal clears all effect output.

## Persistence Check

- Required: no. Existing compatibility stories own export and reload behavior.

## Accessibility or Interaction Check

- Locate chooser, import navigation, editor accordions, Add Special Line, effect controls, and Remove by accessible
  role or label.
- Use renderer-derived selectors only for SVG paths, effect circles, and special legend output without accessible
  roles.

## Notes

- Dashed scope, suppression, Filled Circles, dynamic categories, filters/brush, tooltip/table substitution, and
  persistence are intentionally excluded.
- Automated story: `packages/editor/src/_stories/LINE-002.Regression.stories.tsx`
