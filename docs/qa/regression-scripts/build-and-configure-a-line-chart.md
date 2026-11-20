# Regression: LINE-001 — Build and configure a Line Chart

## Purpose

Protect ordinary Line Chart authoring from an empty editor, especially the distinction between a continuous series,
a series with missing values, and isolated observations. The regression also protects standard point symbols, point
visibility and color, and synchronized tooltip, legend, and table output.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes
- Storybook area: `Regression Tests/Chart Scripts/Line Chart`

## Test Data

Upload `line-chart-regression.csv` from this exact inline fixture:

```csv
Date,Observed,Goal
2026-01-01,12,15
2026-01-08,18,17
2026-01-15,,19
2026-01-22,25,21
2026-01-29,,23
2026-02-05,30,25
```

Goal is continuous. Observed has one two-point segment and two isolated values, yielding ten authored numeric points.

## Preconditions

- Start the single `LINE001` story from an empty `CdcEditor` configuration.
- Use only the inline CSV; do not call a live endpoint.
- Complete the entire workflow in one continuing editor session.
- Do not modify production Chart or Editor behavior to satisfy this regression.

## Steps and Expected Results

| #   | User action                        | Input                                                               | Expected visible result                                                                                                                           |
| --- | ---------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Choose Line and open Import Data   | Upload the fixture                                                  | Data Preview shows all three exact headings and six exact rows, including blank Observed cells                                                    |
| 2   | Complete Data Designer             | Vertical; Yes; Single Row                                           | All three choices are visibly active and Configure becomes available                                                                              |
| 3   | Configure the visualization        | No mapped fields                                                    | Add Data Series and Data Key guidance appears, its actions focus the correct sections, and no chart body renders                                  |
| 4   | Add data series                    | Observed, then Goal                                                 | Only Data Key remains required after the first series; both series editors remain visible                                                         |
| 5   | Configure the date axis            | Date Time Scale; Data Key Date; parse/axis/hover formats `%Y-%m-%d` | Required guidance clears and exactly two valid Line paths render                                                                                  |
| 6   | Inspect line continuity            | No new input                                                        | Goal has one move and five line commands; Observed has three moves and one line command, so missing values are not bridged                        |
| 7   | Show standard points               | Symbols Standard; Style Always Show; Color Same as Line             | Ten ordinary authored glyphs render at finite positions; Observed uses circles, Goal uses squares, and point fills match their owning line colors |
| 8   | Lighten point colors               | Color Lighter than Line                                             | Every ordinary point fill changes while line strokes and path geometry remain unchanged                                                           |
| 9   | Use hover-only points              | Style Hover; hover and leave the first Observed point               | Ordinary points start hidden; the target reveals during hover and hides afterward; tooltip rows are exactly Date 2026-01-01, Observed 12, Goal 15 |
| 10  | Inspect legend and supporting data | Expand Data Table                                                   | Legend labels are exactly Observed and Goal; headings and six records match the fixture, with both missing Observed values represented as N/A     |

## Final Acceptance Criteria

- Empty-editor import and Data Designer retain every exact heading, value, and blank cell.
- Required-field guidance is actionable and prevents a premature chart body.
- Both line paths have finite nonempty geometry, and SVG move/line commands prove the intended gap segmentation.
- Standard point shape, visibility, and color respond through observable rendered output.
- Tooltip, legend, and table output remain semantically synchronized with the fixture, including the table's N/A
  representation of source blanks.

## Persistence Check

- Required: no.

## Accessibility or Interaction Check

- Locate chooser, import navigation, Configure, accordion sections, and editor controls by accessible role or label.
- Verify required-field actions move focus to their intended controls.
- Use renderer-derived selectors only for SVG paths, glyph geometry, and tooltip content that lack accessible roles.

## Notes

- Combo owns dash/interpolation transitions; Forecast owns confidence bands; Bump and Spark Line own their converted chart types.
- Line Weight, end-label color matching, and symbol-limit behavior are intentionally excluded because their current contracts are misleading.
- Isolated-point sizing is intentionally excluded because disabling emphasis does not currently match ordinary point size.
- Special/preliminary lines, filters, labels, confidence intervals, and Line Race remain outside this focused workflow.
- Automated story: `packages/editor/src/_stories/LINE-001.Regression.stories.tsx`
