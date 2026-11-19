# Regression: AREA-001 — Build and configure an Area Chart

## Purpose

Protect the complete Area Chart authoring workflow from visualization selection and deterministic data import through
required-field guidance, stacked-series rendering, legend output, and the Area-specific curve control.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes

## Test Data

- Source: Inline comma-delimited CSV uploaded as `area-chart-regression.csv`
- Required columns:
  - `Quarter`: text categories used by the Date/Category Axis
  - `Cases`: integer values used by the first area series
  - `Hospitalizations`: integer values used by the second area series
- Values important to this regression:

```csv
Quarter,Cases,Hospitalizations
Q1,12,3
Q2,18,5
Q3,15,4
Q4,22,7
```

## Preconditions

- Start with an empty editor configuration.
- Use only the inline CSV; do not call live data.
- Keep the Area Chart's authored stacked subtype and vertical orientation.

## Steps and Expected Results

| #   | User action                                       | Input or selection                      | Expected visible result                                                                         |
| --- | ------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 1   | Select Area Chart and open Import Data            | Upload `area-chart-regression.csv`      | Data Preview shows Quarter, Cases, and Hospitalizations plus all four fixture rows              |
| 2   | Choose the import orientation and series behavior | Vertical; No for multiple series        | Vertical and No are visibly selected, and Configure your visualization is available             |
| 3   | Configure the visualization                       | Continue from Data Import               | Missing-field guidance identifies Add Data Series and Data Key; the chart body has not rendered |
| 4   | Follow each missing-field action                  | Open Data Series and Date/Category Axis | Each action opens its named section and focuses the missing control                             |
| 5   | Add the first data series                         | Cases                                   | Only the Data Key requirement remains and no area has rendered yet                              |
| 6   | Set the category data key                         | Quarter                                 | Missing-field guidance disappears and exactly one nonempty area path renders                    |
| 7   | Add the second data series                        | Hospitalizations                        | Exactly two nonempty area paths render and the legend names Cases and Hospitalizations          |
| 8   | Change the stacked curve                          | Stacked Area Chart Line Type = Step     | Both rendered area path geometries change and remain nonempty                                   |

## Final Acceptance Criteria

- The complete chooser-to-editor workflow uses four deterministic rows and never calls external data.
- Completing Cases and Quarter renders exactly one valid stacked-area path.
- Adding Hospitalizations renders exactly two valid stacked-area paths and two matching legend entries.
- Changing the stacked curve to Step changes the geometry of both paths without removing either series.
- No unexpected console errors, window errors, or unhandled promise rejections occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- Locate the chooser, import controls, missing-field actions, editor sections, and select controls by accessible role,
  label, or visible name.
- Confirm that each missing-field action opens the correct editor section and focuses the corresponding control.

## Notes

- This remains one story because the integrated chooser, import, required-field, and Area-specific rendering sequence
  is the protected regression risk.
- Automated story: `packages/editor/src/_stories/AREA-001.Regression.stories.tsx`
