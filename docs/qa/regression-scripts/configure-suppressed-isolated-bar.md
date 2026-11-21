# Regression: BAR-003 — Configure suppressed and isolated Bar data

## Purpose

Protect the editor workflow that marks the Cases value for Q2 as suppressed and initially isolates its series. The
regression verifies exact datum identity and baseline geometry, confirms both Legend authoring controls update the
rendered chart, and ensures Show All restores every series without losing suppression treatment.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes

## Test Data

- Source: Inline comma-delimited CSV uploaded as `suppressed-isolated-bar.csv`
- Required columns:
  - `Quarter`: categorical axis values
  - `Cases`: first Bar series, including the suppression sentinel
  - `Hospitalizations`: second numeric Bar series
- Values important to this regression:

```csv
Quarter,Cases,Hospitalizations
Q1,120,80
Q2,ABC,110
Q3,150,95
Q4,220,140
```

## Preconditions

- Start with an empty editor configuration.
- Use only the inline CSV; do not call live data.
- Describe the data as Vertical, multiple series Yes, with series values in a Single Row.
- Configure Cases and Hospitalizations as data series and Quarter as the Data Key.

## Steps and Expected Results

| #   | User action                                  | Input or selection                                         | Expected visible result                                                                                                                                    |
| --- | -------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Select Bar and import the fixture            | `suppressed-isolated-bar.csv`; Vertical; Yes; Single Row   | Data Preview shows all three headings and four exact rows                                                                                                  |
| 2   | Configure Data Series and Date/Category Axis | Cases; Hospitalizations; Quarter                           | Required guidance clears; four vertical groups and eight Bar slots render, including seven ordinary numeric bars                                           |
| 3   | Add a Special Bar suppression rule           | Data Series: Cases; value: `ABC`; symbol: Double Asterisk  | Cases/Q2 becomes one finite, positive-width 3px bar aligned to the common chart baseline and containing `**`; the suppression legend shows `** Suppressed` |
| 4   | Exercise Legend Behavior                     | Highlight, select Cases, Show All, then explicitly Isolate | Highlight keeps all bars displayed while de-emphasizing Hospitalizations; Show All resets them; Isolate is then explicitly authored                        |
| 5   | Exercise the initial isolate value           | Add Isolate Value; Hospitalizations; then Cases            | Hospitalizations alone displays first; explicitly selecting Cases then shows four Cases bars, hides Hospitalizations, preserves `**`, and exposes Show All |
| 6   | Restore every series                         | Select Show All                                            | All eight Bar paths display again and Cases/Q2 remains a finite, baseline-aligned 3px bar containing `**`                                                  |

## Final Acceptance Criteria

- The suppression rule matches Cases/Q2 specifically; Hospitalizations/Q2 remains an ordinary numeric bar.
- The suppressed path has nonempty finite geometry, positive width, 3px height, and the same bottom baseline as
  ordinary bars.
- Legend Behavior and Isolate Value are changed through their editor controls and produce distinct rendered output.
- Show All restores both series without losing the suppression marker or baseline treatment.
- No unexpected JavaScript errors, unhandled promise rejections, or window errors occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- Locate chooser actions, editor sections, Special Bar controls, Legend controls, series legend buttons, and Show
  All by accessible role, label, or name.
- Scope the suppression rule's duplicated Add Data Series label to its visible Suppressed Data item.

## Notes

- Stacked and horizontal Bars, wildcard or multiple suppression rules, tooltip and data-table substitution, gray and
  hide toggles, suppression-definition links, Axis Align, and keyboard legend behavior are intentionally deferred.
- The matching suppressed and isolated Line regression remains a separate test.
- Automated story: `packages/editor/src/_stories/BAR-003.Regression.stories.tsx`
