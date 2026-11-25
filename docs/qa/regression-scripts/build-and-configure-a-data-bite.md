# Regression: DB-001 — Build and configure a Data Bite

## Purpose

Protect the complete Data Bite authoring workflow from visualization selection and deterministic data import through
every editor panel, including style-dependent controls and their rendered effects.

## Visualization

- Type: Data Bite
- Starting point: New visualization
- Editor mode: yes

## Test Data

- Source: Inline CSV uploaded as `data-bite-regression.csv`
- Required columns:
  - `Category`: filter and markup-condition text
  - `Current`: primary numeric value
  - `Previous`: comparison numeric value
  - `Status`: data-driven color and categorical-trend value
  - `Report Date`: ISO date for localized markup output
  - `Optional`: nullable markup value
- Values important to this regression:

```csv
Category,Current,Previous,Status,Report Date,Optional
Total,1234,1200,High,2026-01-15,Present
Other,5678,6000,Low,2026-02-20,
Zero,0,0,Stable,2026-03-01,Zero
```

## Preconditions

- Start with an empty editor configuration.
- Use inline CSV and an inline SVG data URL; do not call live data or image URLs.

## Steps and Expected Results

| #   | User action                                                 | Input or selection                                                                       | Expected visible result                                                                                 |
| --- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 1   | Select Data Bite and upload the CSV from Import Data        | Vertical; no multiple series                                                             | Preview shows six named columns, all three rows, and their key cell values                              |
| 2   | Configure required Data settings                            | Current; Pass Through                                                                    | A TP5 callout renders the first imported value                                                          |
| 3   | Configure General                                           | title, title visibility, message, subtext                                                | Each authored text change appears or disappears in the rendered Data Bite                               |
| 4   | Configure Data and number formatting                        | aggregation, prefix, suffix, rounding, commas, ignore zeros                              | The rendered metric changes for every setting                                                           |
| 5   | Add and remove a filter                                     | Category = Other                                                                         | The metric changes to the filtered value and restores exactly after removal                             |
| 6   | Configure numeric and categorical trends                    | up, down, flat, threshold, labels, mappings, invalid Count mode                          | Accessible trend direction and visible validation/conditional controls match each configuration         |
| 7   | Configure TP5 Visual                                        | white background, wrapped value, circle off/light/dark and size                          | Callout classes, layout, and rendered value styling change                                              |
| 8   | Configure Data-Driven Colors                                | Status mappings plus a custom mapping                                                    | Active mapped/custom colors change rendered callout colors; only the intended custom mapping is removed |
| 9   | Switch to Value above Message and configure standard Visual | value/font size, theme, border, border theme, accent, background, hidden background      | Every control changes a rendered class, style, or value                                                 |
| 10  | Configure Images                                            | none, static, dynamic one-condition, dynamic two-condition, fallback, position, alt text | Image presence, source, accessible name, rule match, fallback, and layout are observable                |
| 11  | Configure Markup Variables                                  | number/date/null sources, formatting, condition, close/edit, add/delete                  | Rendered number, localized date, null omission, lifecycle, and scoped deletion are observable           |
| 12  | Change locale                                               | English then Spanish                                                                     | The rendered markup date changes from English to Spanish                                                |
| 13  | Apply an Advanced Editor title change                       | Advanced Data Bite                                                                       | The rendered title changes and the Data Bite help link remains available                                |

## Final Acceptance Criteria

- Every visible Data Bite setting and conditional branch has a specific output or validation assertion.
- Actual console errors, window errors, and unhandled rejections fail the story; only exact known-safe React
  development warnings may be allowlisted.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- Trend arrows expose accessible up, down, and flat names.
- Static, matched dynamic, and fallback images expose the expected alt text.
- Controls are located by accessible role, label, or visible text whenever available.

## Notes

- This remains one story because the complete chooser-to-all-settings sequence is the protected regression risk.
- Automated story: `packages/editor/src/_stories/DB-001.Regression.stories.tsx`
