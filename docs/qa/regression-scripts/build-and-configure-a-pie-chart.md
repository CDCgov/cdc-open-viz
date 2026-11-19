# Regression: PIE-001 — Build and configure a Pie Chart

## Purpose

Protect the complete new-Pie authoring workflow from visualization selection and deterministic data import through
required setup and representative General, Data Format, Segments, Legend, Filters, and Data Table settings.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes

## Test Data

- Source: Inline CSV uploaded as `pie-chart-regression.csv`
- Required columns:
  - `Category`: text labels for the four Pie segments
  - `Value`: numeric values that produce exact 40%, 30%, 20%, and 10% segments
  - `Alternate`: non-proportional decimal values for geometry and number-format checks
- Values important to this regression:

```csv
Category,Value,Alternate
Alpha,40,2500.25
Beta,30,1000.5
Gamma,20,750.25
Delta,10,500
```

## Preconditions

- Start with an empty editor configuration.
- Use the inline CSV; do not call a live data source.

## Steps and Expected Results

| #   | User action                                         | Input or selection                                                                                   | Expected visible result                                                                                                                 |
| --- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Select a visualization from the chooser             | `Pie`                                                                                                | The editor displays the numbered workflow tabs, including `2. Import Data`.                                                             |
| 2   | Open `2. Import Data` and upload the CSV            | `pie-chart-regression.csv`                                                                           | `Data Preview` shows all three column headings and four rows, including the Alpha and Delta values.                                     |
| 3   | Set the import choices                              | `Vertical`; multiple series `No`                                                                     | The Vertical and No choices are active, and `Configure your visualization` is available.                                                |
| 4   | Continue to configuration                           | Click `Configure your visualization`                                                                 | The Chart editor opens with Data Format and Segments sections and identifies Data Column and Segment Labels as missing.                 |
| 5   | Click the Data Column missing-field alert action    | Select `Value` in `Data Format`                                                                      | The alert action opens Data Format and focuses Data Column; after selection only Segment Labels remains missing.                        |
| 6   | Click the Segment Labels missing-field alert action | Select `Category` in `Segments`                                                                      | The alert action opens Segments and focuses Segment Labels; both alerts disappear and four Pie segments render.                         |
| 7   | Inspect the configured Pie, legend, and data table  | No additional input                                                                                  | Alpha, Beta, Gamma, and Delta render as 40%, 30%, 20%, and 10%; the legend and expanded table contain all four categories.              |
| 8   | Enable category and percentage labels in General    | `Display Category and Percentage Labels`                                                             | Four visible Pie labels pair each category with its exact percentage.                                                                   |
| 9   | Configure General                                   | Title `Pie Settings Regression`; `Donut`, then `Regular`                                             | The title renders; Donut moves all four labels outside; Regular restores collision-aware placement with inside labels.                  |
| 10  | Configure Data Format                               | `Alternate`; label `Alternate amount`; remove/restore commas; round `2`; prefix `$`; suffix ` cases` | Pie geometry changes, the table heading and decimal percentages update, commas toggle visibly, and the tooltip shows `$2,500.25 cases`. |
| 11  | Restore the exact-value data format                 | Clear prefix/suffix; label `Value`; round `0`; select `Value`                                        | The rendered Pie returns to exact 40%, 30%, 20%, and 10% category labels without stale affixes.                                         |
| 12  | Exclude and restore a segment                       | Exclude `Gamma`, then disable exclusions                                                             | Gamma alone disappears from the Pie, legend, and table, then all four categories return.                                                |
| 13  | Configure Legend                                    | Position `right`, then `bottom`; hide/show; restore `right`                                          | The rendered legend moves right and bottom, disappears, returns at the bottom, then returns to the right.                               |
| 14  | Add, change, and remove a filter                    | `Category`; default `Beta`; remove filter                                                            | The filter initially shows Alpha, then only Beta appears in the Pie, legend, and table, and removal restores all four categories.       |
| 15  | Hide and restore the Data Table                     | Toggle `Show Data Table` off and on                                                                  | The rendered table disappears, then returns with each category paired to its original percentage.                                       |

## Final Acceptance Criteria

- The complete chooser → import → required-field setup finishes without an error state.
- Data Preview contains the `Category`, `Value`, and `Alternate` headings and exactly four imported rows.
- Before setup, separate accessible alerts identify Data Column in Data Format and Segment Labels in Segments.
- Selecting `Value` and `Category` removes the required-field alerts and renders exactly four Pie segments.
- Alpha, Beta, Gamma, and Delta are paired with 40%, 30%, 20%, and 10% in the rendered Pie labels.
- The legend and expanded data table contain all four category names, and the table contains all four percentages.
- Title and Regular/Donut settings visibly update the rendered chart and restore the regular Pie.
- Alternate decimal data changes geometry, table precision, and formatted tooltip content before Value is restored.
- Gamma exclusion and Category=Beta filtering affect only the intended categories and are fully reversible.
- Legend placement/visibility and Data Table visibility change in rendered output and finish in the intended right/shown state.
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

- This regression covers the integrated Pie setup and representative Pie-specific settings. Focused Chart stories
  retain ownership of custom drag ordering and exhaustive generic Chart controls.
- Automated story: `packages/editor/src/_stories/PIE-001.Regression.stories.tsx`
