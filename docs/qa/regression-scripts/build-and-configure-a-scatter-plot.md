# Regression: SCATTER-001 — Build and configure a Scatter Plot

## Purpose

Protect the complete Scatter Plot authoring workflow from visualization selection and deterministic numeric data
import through required-field guidance, multiseries point semantics, and legend output.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes

## Test Data

- Source: Inline comma-delimited CSV uploaded as `scatter-plot-regression.csv`
- Required columns:
  - `Exposure`: integer continuous X-axis values
  - `Observed`: integer values for the first Scatter Plot series
  - `Reference`: integer values for the second Scatter Plot series
- Values important to this regression:
  - All twelve X/series/value combinations are unique.
  - Observed rises from 12 to 48 while Reference falls from 30 to 10.

```csv
Exposure,Observed,Reference
10,12,30
20,18,26
30,25,22
40,31,18
50,39,14
60,48,10
```

## Preconditions

- Start with an empty editor configuration.
- Select Scatter Plot directly from the visualization chooser.
- Use only the inline CSV; do not call live data.
- Keep the complete workflow in one editor session.
- Do not answer Data Designer orientation or multiple-series questions. Scatter Plot proceeds directly to
  configuration.

## Steps and Expected Results

| #   | User action                                     | Input or selection                   | Expected visible result                                                                                                                  |
| --- | ----------------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Select Scatter Plot and open Import Data        | Upload `scatter-plot-regression.csv` | Data Preview shows Exposure, Observed, and Reference plus all six exact fixture rows                                                     |
| 2   | Continue from the Scatter Plot import           | Configure your visualization         | Configure is available directly; Data Orientation, multiple-series, and Single Row questions are absent                                  |
| 3   | Inspect required-field guidance                 | No fields selected                   | Add Data Series and Data Key are identified, each has an accessible navigation action, and no Scatter Plot body renders                  |
| 4   | Follow the Add Data Series action and select it | Observed                             | The Data Series section opens, focus moves to Add Data Series, only Data Key remains missing, and no points render                       |
| 5   | Follow the Data Key action and select it        | Exposure                             | The Date/Category Axis section opens, focus moves to Data Key, guidance clears, and exactly six Observed points render                   |
| 6   | Inspect the single-series points                | Observed                             | Every expected Exposure/Observed/value identity appears exactly once; every point has finite coordinates, radius 4.5, and a visible fill |
| 7   | Open Data Series and add another series         | Reference                            | Exactly twelve unique expected point identities render and the legend contains exactly Observed and Reference                            |

## Final Acceptance Criteria

- The chooser-to-editor workflow preserves all three headings and all six deterministic numeric rows.
- Scatter Plot bypasses Data Designer and makes Configure your visualization available directly after import.
- Required-field actions expose and focus Add Data Series and Data Key while withholding the visualization until
  both are complete.
- Observed plus Exposure renders exactly six semantically identified points with finite coordinates, radius 4.5,
  and visible fills.
- Adding Reference renders exactly twelve unique expected point identities and exactly the Observed and Reference
  legend labels.
- No unexpected window errors or unhandled promise rejections occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- Locate the chooser, import action, Configure action, required-field actions, series controls, and Data Key control
  by accessible role, label, or visible name.
- Confirm that each required-field action opens the named editor section and focuses its corresponding control.
- Identify rendered circles through their exact tooltip heading and series/value semantics rather than DOM order.

## Notes

- The Scatter Plot X min/max controls are intentionally excluded because they currently accept values without
  changing rendered ticks or point positions.
- Hover-line portals, tooltip opacity, palettes, log scales, anchors, small multiples, filters, data tables,
  annotations, downloads, responsive viewports, and persistence are also intentionally excluded.
- Automated story: `packages/editor/src/_stories/SCATTER-001.Regression.stories.tsx`
