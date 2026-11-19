# Regression: BAR-002 — Configure multi-series Bar Data Series

## Purpose

Protect the editor workflow for managing multiple Bar data series, including add/remove/reorder, authored names,
per-series value labels and tooltip visibility, and the Rank by Value control revealed when one series remains.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes

## Test Data

- Source: Inline comma-delimited CSV uploaded as `bar-data-series.csv`
- Required columns:
  - `Quarter`: categorical axis values
  - `Cases`: first numeric Bar series and ranking source
  - `Hospitalizations`: second numeric Bar series
  - `Deaths`: temporary third numeric Bar series
  - `Cases Label`: exact custom labels for the Cases bars
- Values important to this regression:

```csv
Quarter,Cases,Hospitalizations,Deaths,Cases Label
Q1,120,80,12,C-120
Q2,180,110,18,C-180
Q3,150,95,15,C-150
Q4,220,140,22,C-220
```

## Preconditions

- Start with an empty editor configuration.
- Use only the inline CSV; do not call live data.
- Describe the data as Vertical, multiple series Yes, with series values in a Single Row.

## Steps and Expected Results

| #   | User action                                      | Input or selection                               | Expected visible result                                                                                      |
| --- | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| 1   | Select Bar and import the fixture                | `bar-data-series.csv`; Vertical; Yes; Single Row | Data Preview shows every heading and all four exact rows                                                     |
| 2   | Configure Data Series and Date/Category Axis     | Cases; Hospitalizations; Quarter                 | Required guidance clears; eight valid grouped bars and two named legend entries render                       |
| 3   | Add and remove a third series                    | Deaths                                           | Twelve bars and three legends render, then removing Deaths restores eight bars and two legends               |
| 4   | Reorder the two remaining series with a keyboard | Move Hospitalizations before Cases               | The authored list and rendered legend order both become Hospitalizations, Cases                              |
| 5   | Rename Cases                                     | Reported Cases                                   | The legend and a hovered chart tooltip use Reported Cases while eight valid bars remain                      |
| 6   | Change the Cases Value label column              | Cases Label; Use numeric value; None             | Exact custom labels, then numeric labels, then no labels render only for Cases without changing bar geometry |
| 7   | Toggle Cases Show In Tooltip                     | Off, then on                                     | A hovered Cases category omits Reported Cases, then restores it                                              |
| 8   | Remove Hospitalizations and rank Cases           | Ascending, then descending                       | Four bars remain; Quarter order is Q1,Q3,Q2,Q4, then Q4,Q2,Q3,Q1                                             |

## Final Acceptance Criteria

- Series lifecycle actions produce exact Bar and legend counts with valid geometry.
- Keyboard reordering changes both the authored series order and rendered legend order.
- Series naming reaches the legend and visible tooltip.
- Custom, numeric, and hidden value-label modes remain isolated to Cases and preserve geometry.
- Show In Tooltip removes and restores Reported Cases in the visible tooltip.
- Single-series ranking produces the exact ascending and descending Quarter order.
- No unexpected JavaScript errors or unhandled promise rejections occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- Locate chooser, configuration, and correctly labelled Data Series controls by accessible role, label, or name.
- Reorder series using the keyboard drag interaction.
- The current Series Name and Show In Tooltip markup lacks complete label/input association, so scope those controls
  from the visible Cases series panel.

## Notes

- Series Column Settings, Confidence Keys, Dynamic Category, Preliminary Data, and Data Table integration are
  intentionally deferred to focused regressions.
- Automated story: `packages/editor/src/_stories/BAR-002.Regression.stories.tsx`
