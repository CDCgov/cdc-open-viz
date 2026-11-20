# Regression: COMBO-001 — Build and configure a Combo Chart

## Purpose

Protect the defining Combo Chart authoring workflow: two imported series begin as left-axis bars, then one series is
converted to a line and moved to the right axis without losing synchronized geometry, legend, tooltip, or table
output.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes
- Storybook area: `Regression Tests/Chart Scripts/Combo Chart`

## Test Data

Upload `combo-chart-regression.csv` from this exact inline fixture:

```csv
Quarter,Cases,Rate
Q1,120,1200
Q2,180,1600
Q3,150,1400
Q4,220,2000
```

The deliberately different Cases and Rate scales make the right-axis assignment observable.

## Preconditions

- Start the single `COMBO001` story from an empty `CdcEditor` configuration.
- Use only the inline CSV; do not call a live endpoint.
- Complete the entire workflow in one continuing editor session.

## Steps and Expected Results

| # | User action | Input | Expected visible result |
|---|-------------|-------|-------------------------|
| 1 | Choose Combo Chart and open Import Data | Upload the fixture | Data Preview shows all three headings and four exact rows |
| 2 | Complete Data Designer | Vertical; Yes; Single Row | Each choice is visibly active and Configure becomes available |
| 3 | Configure the visualization | No required values yet | Add Data Series and Data Key guidance appears with accessible navigation; no chart renders |
| 4 | Add the first series | Cases | Only Data Key remains missing |
| 5 | Configure the category axis | Data Key Quarter | Four finite Cases bars render; no line or right axis renders |
| 6 | Add the second series | Rate | Eight finite bars render as exactly four Cases and four Rate tooltip targets; the visible legend contains exactly one Cases and one Rate label |
| 7 | Convert Rate | Series Type Line | Rate bars are replaced by one meaningful line, leaving four Cases bars |
| 8 | Assign Rate to the secondary scale | Series Axis Right | The Rate path changes scale and a visible right axis renders multiple finite, meaningful tick labels |
| 9 | Name and style the line | Series Name Rate per 1,000; Series Line Type Step | Legend text and line geometry update, then Linear restores the original path |
| 10 | Style the series type | Series Type Medium Dashed | The Rate path renders the expected dash pattern, then a freshly queried Series Type control restores a semantically solid Line with no nonzero dash segments |
| 11 | Label the right axis | Rate per 1,000 | The rendered right-axis title matches exactly |
| 12 | Inspect supporting output | Legend; verify Show Data Table; expand Data Table; Q1 Cases bar | Exactly two unique visible legend labels and the visible table retain exact Cases/Rate data; the Cases tooltip target reports Q1 and exactly 120, not Rate's 1200 |
| 13 | Return Rate to Bar | Series Type Bar | Eight bars render, the line and Series Axis control disappear, and the right axis is removed |
| 14 | Restore the final Combo | Series Type Line; Series Axis Right | The Rate path changes scale; four Cases bars, one Rate line, and the visible labeled right axis return with meaningful ticks; exact legend, table, and Q1 Cases tooltip identity remain synchronized |

## Final Acceptance Criteria

- The empty-editor workflow preserves every fixture heading and row and all Data Designer choices.
- Required-field actions expose and focus Add Data Series and Data Key before the chart is allowed to render.
- Cases alone renders four bars; Cases plus Rate initially renders eight bars.
- Rate can move through Line, Medium Dashed, Bar, and restored Line states with the expected renderer layers.
- Assigning Rate Right creates the labeled secondary axis; Bar resets it Left and removes that axis.
- Legend, table, and bar tooltip output remain synchronized throughout the mixed Combo state.

## Persistence Check

- Required: no.

## Accessibility or Interaction Check

- Locate chooser, import, Configure, required-field actions, and editor controls by accessible role or label.
- Required-field actions must open the correct section and focus the intended control.
- Use renderer-derived selectors only for SVG bars, line paths, axes, and tooltip content without accessible roles.

## Notes

- Exhaustive right-axis formatting, brush behavior, portion patterns, axis-title permutations, and series-color rules
  remain owned by existing focused Chart stories.
- Pre-existing accessibility defect: Combo series selects currently share duplicate generated IDs and expose no
  accessible names. The automated story scopes each select through its visible label and owning series item as a
  role/DOM fallback pending a product fix.
- No production-code change is authorized by this script.
- Automated story: `packages/editor/src/_stories/COMBO-001.Regression.stories.tsx`
