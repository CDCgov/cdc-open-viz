# Regression: BOX-001 — Build and configure a Box Plot

## Purpose

Protect the complete Box Plot authoring workflow from visualization selection and deterministic long-form data import
through Box Plot's specialized import path, required-field guidance, distribution rendering, outlier detection, and
tooltip statistics.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes

## Test Data

- Source: Inline comma-delimited CSV uploaded as `box-plot-regression.csv`
- Required columns:
  - `Group`: repeated text categories used by the Date/Category Axis
  - `Score`: integer observations summarized by the Box Plot series
- Values important to this regression:
  - Group A contains values 10 through 17 plus 40, producing Q1 12, median 14, Q3 16, IQR 4, and one outlier at 40.
  - Group B contains values 20 through 28 and produces no outlier.

```csv
Group,Score
Group A,10
Group A,11
Group A,12
Group A,13
Group A,14
Group A,15
Group A,16
Group A,17
Group A,40
Group B,20
Group B,21
Group B,22
Group B,23
Group B,24
Group B,25
Group B,26
Group B,27
Group B,28
```

## Preconditions

- Start with an empty editor configuration.
- Use only the inline CSV; do not call live data.
- Do not answer Data Designer orientation or multiple-series questions. Box Plot proceeds directly to configuration.

## Steps and Expected Results

| #   | User action                                      | Input or selection                 | Expected visible result                                                                                           |
| --- | ------------------------------------------------ | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 1   | Select Box Plot and open Import Data             | Upload `box-plot-regression.csv`   | Data Preview shows Group and Score plus all 18 exact fixture rows                                                  |
| 2   | Continue from the specialized Box Plot import    | Configure your visualization       | Configure is available directly; Data Orientation, multiple-series, and Single Row questions are absent           |
| 3   | Inspect required-field guidance                  | No fields selected                 | Add Data Series and Data Key are identified, each has an accessible navigation action, and no chart body renders  |
| 4   | Follow the Add Data Series action and select it  | Score                              | The Data Series section opens, focus moves to Add Data Series, and only Data Key remains missing                   |
| 5   | Follow the Data Key action and select it         | Group                              | The Date/Category Axis section opens, focus moves to Data Key, guidance clears, and exactly two valid boxes render |
| 6   | Inspect the default rendered distribution        | Group A and Group B                | Both boxes are visible with finite nonzero geometry and no outlier point renders by default                        |
| 7   | Open Visual and enable Plot Outliers             | Plot Outliers = on                 | Exactly one visible outlier point renders while both boxes retain finite nonzero geometry                          |
| 8   | Hover the Group A Box Plot target                | Group A                            | Tooltip reports Group A, Key Score, Lower Quartile 12, Upper Quartile 16, Interquartile Range 4, and Median 14    |

## Final Acceptance Criteria

- The chooser-to-editor workflow preserves both headings and all 18 deterministic long-form rows.
- Box Plot bypasses Data Designer and makes Configure your visualization available directly after import.
- Required-field actions expose and focus Add Data Series and Data Key while withholding the visualization until
  both are complete.
- Score grouped by Group renders exactly two visible Box Plot boxes with finite nonzero geometry and no outliers by
  default.
- Enabling Plot Outliers from Visual renders exactly one visible outlier while retaining both valid boxes.
- The Group A tooltip reports the exact expected category, series key, quartiles, IQR, and median.
- No unexpected window errors or unhandled promise rejections occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- Locate the chooser, import action, Configure action, required-field actions, select controls, and Plot Outliers
  checkbox by accessible role, label, or visible name.
- Confirm that each required-field action opens the named editor section and focuses its corresponding control.
- Hover the rendered Group A tooltip target and verify all statistical content in the visible tooltip.

## Notes

- Measures, General, and all Visual settings except the Plot Outliers control are intentionally deferred to focused
  follow-up stories.
- Multi-series behavior and persistence are outside BOX-001.
- Existing renderer stories continue to own numeric sorting and formatted-value statistics parity.
- Automated story: `packages/editor/src/_stories/BOX-001.Regression.stories.tsx`
