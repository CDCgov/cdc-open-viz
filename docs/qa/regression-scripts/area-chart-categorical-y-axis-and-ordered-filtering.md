# Regression: AREA-002 — Categorical Y axis and ordered filtering

## Purpose

Protect the Area Chart workflow for authoring a manual categorical Y/value axis and a custom-ordered runtime filter
from the global editor.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes

## Test Data

- Source: Inline comma-delimited CSV uploaded as `area-chart-categorical-axis.csv`
- Required columns:
  - `Quarter`: categorical X-axis values
  - `Region`: values used by the ordered filter
  - `Cases`: numeric Area series values
- Values important to this regression:

```csv
Quarter,Region,Cases
Q1,East,12
Q2,West,15
Q3,East,18
Q4,West,22
```

## Preconditions

- Start with an empty editor configuration.
- Use only the inline CSV; do not call live data.
- Keep the Area Chart's authored stacked subtype and vertical orientation.

## Steps and Expected Results

| #   | User action                               | Input or selection                       | Expected visible result                                                                                   |
| --- | ----------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1   | Select Area Chart and open Import Data    | Upload `area-chart-categorical-axis.csv` | Data Preview shows Quarter, Region, and Cases plus all four exact fixture rows                            |
| 2   | Configure the visualization               | Cases series; Quarter Data Key           | Missing-field guidance clears and exactly one valid Area path renders                                     |
| 3   | Open Left Value Axis and change Axis Type | Categorical                              | Numeric Y-axis ticks disappear and Add Axis Category becomes available                                    |
| 4   | Add and configure two Axis Categories     | Low height `15`; High remainder          | Exactly two visible axis bands labeled Low and High render while the Area path remains valid              |
| 5   | Open Filters and add a Region filter      | Label `Region`; Filter Order `Custom`    | The custom order list appears initially as East, West                                                     |
| 6   | Move West before East                     | Keyboard reorder                         | The authored order becomes West, East; runtime options match; West is active; one valid Area path renders |
| 7   | Change the runtime Region filter          | East, then West                          | Each value renders one valid Area path; East differs from West and returning to West restores geometry    |

## Final Acceptance Criteria

- The complete chooser-to-editor workflow uses four deterministic rows and never calls external data.
- Low and High replace numeric Y ticks as exactly two visible categorical axis bands.
- The Region filter authoring list and runtime dropdown use the exact custom order West, East.
- West and East render different valid Area geometry, and returning to West restores its geometry.
- No unexpected window errors or unhandled promise rejections occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- Locate chooser actions, editor sections, controls, and the runtime Region filter by accessible role, label, or name.
- Reorder filter values with the custom-order list's keyboard drag interaction.

## Notes

- This remains one story because chooser/import, categorical-axis authoring, and ordered filtering form the protected
  workflow.
- Console-error monitoring is intentionally out of scope for this regression.
- Automated story: `packages/editor/src/_stories/AREA-002.Regression.stories.tsx`
