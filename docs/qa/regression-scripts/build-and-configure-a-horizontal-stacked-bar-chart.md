# Regression: HBAR-001 — Build and configure a Horizontal Stacked Bar Chart

## Purpose

Protect the dedicated Horizontal Bar (Stacked) chooser and its combined stacked-horizontal renderer. Two imported
series must form contiguous semantic stacks while horizontal value-axis controls, value labels, row spacing, tooltip
output, and table data remain synchronized.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes
- Storybook area: `Regression Tests/Chart Scripts/Horizontal Bar`

## Test Data

Upload `horizontal-stacked-bar-regression.csv` from this exact inline fixture:

```csv
Region,Cases,Hospitalizations
North Coastal Region,62,38
Central Plains,45,55
Southern Metro,71,29
```

Every value is unique and every category totals 100. This makes series identity, proportional widths, segment
adjacency, and equal stack endpoints observable without relying on DOM order.

## Preconditions

- Start the single `HBAR001` story from an empty `CdcEditor` configuration.
- Use only the inline CSV; do not call a live endpoint.
- Complete the entire workflow in one continuing editor session.

## Steps and Expected Results

| # | User action | Input | Expected visible result |
|---|-------------|-------|-------------------------|
| 1 | Choose Horizontal Bar (Stacked) and open Import Data | Upload the fixture | Data Preview shows all three exact headings and three exact rows |
| 2 | Complete Data Designer | Vertical; Yes; Single Row | All choices are visibly active and Configure becomes available |
| 3 | Configure the visualization | No mappings yet | Add Data Series and Data Key guidance appears with accessible navigation; no chart body renders |
| 4 | Add the first series | Cases | Only Data Key remains missing |
| 5 | Configure the category axis | Data Key Region | A three-row horizontal stacked chart renders |
| 6 | Add the second series | Hospitalizations | Six semantic segments form three contiguous stacks; every stack begins and ends together, totals 100, and the legend is exactly Cases/Hospitalizations |
| 7 | Inspect chooser defaults | Stacked; Horizontal | Numeric bottom-axis line/ticks are hidden and every category appears once on the left axis |
| 8 | Show and hide segment values | Display Numbers on Bar on, then off | Each exact value appears and disappears inside its owning semantic segment |
| 9 | Show and constrain the numeric axis | Hide Axis off; Hide Ticks off; axis max value 200 | Meaningful bottom-axis structure appears; every stack contracts proportionally while remaining contiguous and semantically complete |
| 10 | Reduce row spacing | Bar Space 5 | Uniform gaps contract while every segment retains its X/width geometry |
| 11 | Inspect hover behavior | Hover North Coastal Region Cases | The visible stack-level tooltip contains exactly one row each for North Coastal Region, Cases: 62, and Hospitalizations: 38 |
| 12 | Inspect supporting data | Expand Data Table | All three headings and exact heading-keyed fixture records remain synchronized |

## Final Acceptance Criteria

- The direct stacked-horizontal chooser, exact import, Data Designer, and required-field navigation complete in one editor session.
- Six tooltip-identified segments form three finite horizontal stacks with proportional widths, adjacency, and equal 100-total endpoints.
- On-bar values, numeric-axis visibility/max, and Bar Space produce specific rendered changes without losing stack semantics.
- Tooltip, legend, and data-table output retain exact source identities and values.

## Persistence Check

- Required: no.

## Accessibility or Interaction Check

- Locate chooser, import, Configure, required-field actions, and editor controls by accessible role or label.
- Required-field actions must open the correct section and focus the intended control.
- Use renderer-derived selectors only for SVG segments, axes, labels, and tooltip content without accessible roles.

## Notes

- Regular-horizontal transitions and rounded styles remain covered by BAR-001; series lifecycle and ranking remain covered by BAR-002.
- Negative stacks, Bar Race, lollipop, patterns, confidence intervals, filters, and exhaustive shared panels are outside this regression.
- No production-code change is authorized by this script.
- Automated story: `packages/editor/src/_stories/HBAR-001.Regression.stories.tsx`
