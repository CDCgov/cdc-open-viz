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
  - `Function Value`: purpose-built values for Count, Max, Mean, Median, Min, Range, and Sum
  - `Mode Value`: purpose-built repeated values with a unique mode
- Values important to this regression:

```csv
Category,Current,Previous,Status,Report Date,Optional,Function Value,Mode Value
Total,1234,1200,High,2026-01-15,Present,10,10
Other,5678,6000,Low,2026-02-20,,4,2
Zero,0,0,Stable,2026-03-01,Zero,1,2
```

- Expected data-function results with prefix and suffix cleared: Count `3`, Max `10`, Mean `5`, Median `4`, Min
  `1`, Mode `2`, Pass Through `1,234`, Range `1 - 10`, and Sum `15`.

## Preconditions

- Start with an empty editor configuration.
- Use inline CSV and an inline SVG data URL; do not call live data or image URLs.

## Steps and Expected Results

| #   | User action                                                 | Input or selection                                                                       | Expected visible result                                                                                 |
| --- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 1   | Select Data Bite and upload the CSV from Import Data        | Vertical; no multiple series                                                             | Preview shows eight named columns, all three rows, and their key cell values                             |
| 2   | Configure required Data settings                            | Current; Pass Through                                                                    | A TP5 callout renders the first imported value                                                          |
| 3   | Configure General                                           | HTML-formatted title, message, and subtext; title visibility                             | Supported `strong`, `em`, `sup`, and `sub` markup renders semantically, and title visibility toggles    |
| 4   | Configure Data and number formatting                        | all nine data functions, prefix, suffix, rounding, commas, ignore zeros                  | Every function produces its documented metric; subsequent checks cover each formatting control          |
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
