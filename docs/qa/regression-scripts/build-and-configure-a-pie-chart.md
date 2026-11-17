# Regression: PIE-001 — Build and configure a Pie Chart

## Purpose

Protect the new-Pie setup workflow from visualization selection and deterministic data import through the required
Data Column and Segment Labels selections that produce a complete Pie Chart.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes

## Test Data

- Source: Inline CSV uploaded as `pie-chart-regression.csv`
- Required columns:
  - `Category`: text labels for the four Pie segments
  - `Value`: numeric values that produce exact 40%, 30%, 20%, and 10% segments
  - `Alternate`: numeric data that remains available as a second value-column option
- Values important to this regression:

```csv
Category,Value,Alternate
Alpha,40,4000
Beta,30,3000
Gamma,20,2000
Delta,10,1000
```

## Preconditions

- Start with an empty editor configuration.
- Use the inline CSV; do not call a live data source.

## Steps and Expected Results

| #   | User action                                         | Input or selection                       | Expected visible result                                                                                                    |
| --- | --------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 1   | Select a visualization from the chooser             | `Pie`                                    | The editor displays the numbered workflow tabs, including `2. Import Data`.                                                |
| 2   | Open `2. Import Data` and upload the CSV            | `pie-chart-regression.csv`               | `Data Preview` shows all three column headings and four rows, including the Alpha and Delta values.                        |
| 3   | Set the import choices                              | `Vertical`; multiple series `No`         | The Vertical and No choices are active, and `Configure your visualization` is available.                                   |
| 4   | Continue to configuration                           | Click `Configure your visualization`     | The Chart editor opens with Data Format and Segments sections and identifies Data Column and Segment Labels as missing.    |
| 5   | Click the Data Column missing-field alert action    | Select `Value` in `Data Format`          | The alert action opens Data Format and focuses Data Column; after selection only Segment Labels remains missing.           |
| 6   | Click the Segment Labels missing-field alert action | Select `Category` in `Segments`          | The alert action opens Segments and focuses Segment Labels; both alerts disappear and four Pie segments render.            |
| 7   | Inspect the configured Pie, legend, and data table  | No additional input                      | Alpha, Beta, Gamma, and Delta render as 40%, 30%, 20%, and 10%; the legend and expanded table contain all four categories. |
| 8   | Enable category and percentage labels in General    | `Display Category and Percentage Labels` | Four visible Pie labels pair each category with its exact percentage.                                                      |

## Final Acceptance Criteria

- The complete chooser → import → required-field setup finishes without an error state.
- Data Preview contains the `Category`, `Value`, and `Alternate` headings and exactly four imported rows.
- Before setup, separate accessible alerts identify Data Column in Data Format and Segment Labels in Segments.
- Selecting `Value` and `Category` removes the required-field alerts and renders exactly four Pie segments.
- Alpha, Beta, Gamma, and Delta are paired with 40%, 30%, 20%, and 10% in the rendered Pie labels.
- The legend and expanded data table contain all four category names, and the table contains all four percentages.
- No unexpected JavaScript errors, unhandled rejections, or window errors appear.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- Each missing-field alert has an accessible action that opens the correct editor section and focuses its required control.
- The configured Pie is exposed as an image, and its category/percentage labels are visible text.

## Notes

- This regression covers the integrated Pie setup path. Focused Chart stories retain ownership of exhaustive Pie
  formatting, ordering, exclusion, and styling controls.
- Automated story: `packages/editor/src/_stories/PIE-001.Regression.stories.tsx`
