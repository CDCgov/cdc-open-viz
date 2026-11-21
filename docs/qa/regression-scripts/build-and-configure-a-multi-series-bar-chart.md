# Regression: BAR-001 — Build and configure a multi-series Bar Chart

## Purpose

Protect the chooser-to-editor workflow for wide multi-series Bar data and every Bar-specific General setting that is
compatible with multiple series.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes

## Test Data

- Source: Inline comma-delimited CSV uploaded as `multi-series-bar-chart.csv`
- Required columns:
  - `Quarter`: categorical axis values
  - `Cases`: first numeric Bar series
  - `Hospitalizations`: second numeric Bar series
- Values important to this regression:

```csv
Quarter,Cases,Hospitalizations
Q1,120,80
Q2,180,110
Q3,150,95
Q4,220,140
```

## Preconditions

- Start with an empty editor configuration.
- Use only the inline CSV; do not call live data.
- Describe the data as Vertical, multiple series Yes, with series values in a Single Row.

## Steps and Expected Results

| #   | User action                                  | Input or selection                  | Expected visible result                                                                           |
| --- | -------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| 1   | Select Bar and open Import Data              | Upload `multi-series-bar-chart.csv` | Data Preview shows Quarter, Cases, and Hospitalizations plus all four exact fixture rows          |
| 2   | Describe the imported data                   | Vertical; Yes; Single Row           | Each selected choice is visibly active and Configure your visualization becomes available         |
| 3   | Configure Data Series and Date/Category Axis | Cases; Hospitalizations; Quarter    | Required guidance clears; eight valid grouped bars and two named legend entries render            |
| 4   | Change Chart Subtype and restore it          | Stacked, then Standard              | Eight stacked bars replace grouped bars; restoring Standard returns eight grouped bars            |
| 5   | Change Orientation and restore it            | Horizontal, then Vertical           | Bars and numeric/category axes change orientation, then return to the original vertical structure |
| 6   | Change Bar Style                             | Rounded                             | Eight valid Bar paths remain and curved path commands replace Flat rectangular geometry           |
| 7   | Change Tip Rounding                          | Full, then Top                      | Full rounds both ends of every regular bar; Top restores rounding only at the positive-value end  |
| 8   | Change Rounding Style through every option   | Shallow, Finger, then Standard      | Every selection retains eight valid bars and produces distinct rounded path geometry              |

## Final Acceptance Criteria

- The complete chooser-to-General workflow uses four deterministic rows and never calls external data.
- Two named series render as exactly eight meaningful bars throughout every compatible General setting.
- Standard/Stacked and vertical/horizontal transitions produce their specific SVG and axis structures.
- Rounded, Tip Rounding, and every Rounding Style option produce valid, observably distinct Bar geometry.
- No unexpected JavaScript errors or unhandled promise rejections occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- Locate chooser actions, editor sections, configuration controls, and General settings by accessible role, label,
  or name.

## Notes

- Lollipop and Bar Highlighting require a single-series fixture and are intentionally outside BAR-001.
- Bar Race is a distinct mode and is intentionally outside BAR-001.
- Automated story: `packages/editor/src/_stories/BAR-001.Regression.stories.tsx`
