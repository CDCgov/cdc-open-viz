# Regression: MAP-002 — US Regional Map Regression

## Purpose

Verify the complete editor workflow for importing the bundled HHS region fixture and building a categorical U.S.
regional map. This regression protects case-insensitive region matching, categorical legend order and map colors,
HTML-enabled text, additional tooltip and table columns, hover and click details, legend isolation, and representative
Interactivity and Visual settings.

## Visualization

- Type: Map
- Starting point: The visualization chooser in a new editor session
- Editor mode: yes

## Test Data

- Bundled sample action: `United States: Region`
- Repository source: `packages/editor/src/components/DataImport/components/samples/valid-region-data.json`
- Required columns:
  - `State`: string; HHS region identifier matched case-insensitively to the regional map geography
  - `Current Week Positivity`: numeric string; categorical value used to color each region
  - `Change`: numeric string; signed supplemental value shown without coercion in details and the data table
- Values important to this regression:
  - `REGION 1` has `Current Week Positivity` `20` and `Change` `0.2`; the uppercase identifier must still match Region 1.
  - `region 2` has `Current Week Positivity` `27` and `Change` `-0.5`.
  - Regions 5 and 8 both have `Current Week Positivity` `14`; the legend must contain one `14` item and both regions must use its color.
  - Region 7 has `Current Week Positivity` `0` and `Change` `0`; neither zero may be treated as missing.
  - The ten rows produce nine unique positivity values: `0`, `12`, `14`, `20`, `25`, `26`, `27`, `28`, and `30`.

## Preconditions

- Start a new visualization in the editor with no previously loaded configuration.
- Use the bundled sample-data action; do not upload a machine-local file or call a network resource.
- Use the desktop editor surface so both hover tooltips and click popover modals can be exercised.

## Steps and Expected Results

| #   | User action                                                                                    | Input or selection                                                                                                                                                                  | Expected visible result                                                                                                                                                                                                                                                                       |
| --- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Select a visualization from the chooser.                                                       | `United States (HHS Regions)`                                                                                                                                                       | The editor displays the numbered workflow tabs, including `2. Import Data`.                                                                                                                                                                                                                   |
| 2   | Open `2. Import Data`, then select the bundled sample.                                         | `United States: Region`                                                                                                                                                             | `Data Preview` displays the `Current Week Positivity`, `State`, and `Change` column headings and ten data rows.                                                                                                                                                                               |
| 3   | Under `Data Orientation`, select the orientation.                                              | `Vertical`                                                                                                                                                                          | The `Vertical` data-orientation option is active.                                                                                                                                                                                                                                             |
| 4   | Answer `Are there multiple series represented in your data?`.                                  | `No`                                                                                                                                                                                | The `No` option is active.                                                                                                                                                                                                                                                                    |
| 5   | Continue from Data Mapping.                                                                    | Click `Configure your visualization`.                                                                                                                                               | The rendered map canvas and Map editor accordions are visible.                                                                                                                                                                                                                                |
| 6   | Open `Type`; confirm the geography and map type, then select the classification.               | Geography `U.S. Region`; `Map Type` = `Data`; `Data Classification Type` = `Categorical`                                                                                            | The U.S. HHS regional map remains visible, and the Categorical classification control is active without an editor error.                                                                                                                                                                      |
| 7   | Open `Columns` > `Geography`; select its source column.                                        | `State`                                                                                                                                                                             | The Geography required-field alert is absent, and the map retains all ten named HHS region shapes without an unmatched-geography warning.                                                                                                                                                     |
| 8   | In `Columns` > `Data`, select `Data Column`, then update `Data Label`.                         | `Current Week Positivity`; label `positivity`                                                                                                                                       | The Data required-field alert is absent. The map receives categorical fills; the populated legend has nine values; Region 1 details contain `positivity: 20`, proving uppercase `REGION 1` matched; and rendered details and the table use `positivity` instead of `Current Week Positivity`. |
| 9   | Under `Additional Columns`, click `Add Column`; open the new column and complete its settings. | `Column` = `Change`; `Label` = `Change`; `Show in Data Table` = on; `Show in Tooltips` = on                                                                                         | Region details include `Change`, and the supporting data table includes a `Change` column. The Region 2 row contains `positivity` `27` and `Change` `-0.5`; the Region 7 row preserves `0` for both values.                                                                                   |
| 10  | Open `Data Table`; ensure the supporting table is displayed.                                   | `Show Data Table` = on                                                                                                                                                              | A visible data table contains ten regional rows and columns headed `positivity` and `Change`, including the Region 2 and Region 7 values from step 9.                                                                                                                                         |
| 11  | Open `General`; complete the title fields with markup.                                         | `Title` = `<strong>Regional positivity</strong>`; `Super Title` = `<em>United States HHS regions</em>`                                                                              | The title bar visibly reads `Regional positivity` with strong emphasis and `United States HHS regions` with emphasis; the markup tags themselves are not printed.                                                                                                                             |
| 12  | Complete the remaining General text fields with markup.                                        | `Message` = `<a href="https://www.cdc.gov/">View CDC positivity guidance</a>`; `Subtext` = `Weekly regional values<sub>reported</sub>`; `Footnotes` = `Bundled fixture<sup>1</sup>` | The message is a focusable link named `View CDC positivity guidance` whose destination is `https://www.cdc.gov/`; `reported` renders as subscript below the map; and `1` renders as superscript in the footnote below the data table. No raw markup is visible.                               |
| 13  | Open `Legend`; select the interactive style, then enter its title and description.             | `Legend Style` = `Boxes`; `Legend Title` = `<strong>Current week positivity</strong>`; `Legend Description` = `<em>Values from lowest to highest</em>`                              | The legend displays nine keyboard-operable box items, a strongly emphasized title `Current week positivity`, and an emphasized description `Values from lowest to highest`; the markup tags themselves are not printed.                                                                       |
| 14  | In `Legend`, make the category order explicitly authored.                                      | Set `Category Sort` to `Custom sort`; drag `30` before `0`, confirm the rendered legend begins `30`, `0`; then drag `30` after `28`                                                 | The first drag proves custom ordering changes the rendered legend. The final legend contains exactly nine data items in this order: `0`, `12`, `14`, `20`, `25`, `26`, `27`, `28`, `30`. The duplicate value `14` appears only once.                                                          |
| 15  | Compare known regions with the legend.                                                         | Regions 1, 2, 5, 7, and 8                                                                                                                                                           | Each region fill matches the swatch for its positivity value: Region 1 matches `20`, Region 2 matches `27`, Region 7 matches `0`, and Regions 5 and 8 share the `14` swatch color.                                                                                                            |
| 16  | With `Interactivity` > `Detail displays on` set to `Hover - Tooltip`, hover Region 2.          | Region 2                                                                                                                                                                            | A visible tooltip contains Region 2, `positivity: 27`, and `Change: -0.5`; it disappears after the pointer leaves Region 2.                                                                                                                                                                   |
| 17  | Move keyboard focus to the legend item for `14` and activate it.                               | Press `Enter` on legend item `14`                                                                                                                                                   | Regions 5 and 8 both remain emphasized in the `14` swatch color while regions belonging to the other eight legend values are visually de-emphasized. A visible `Show All` control appears.                                                                                                    |
| 18  | Clear the legend isolation.                                                                    | Activate `Show All`                                                                                                                                                                 | All nine legend items and all ten regions return to their original full-color presentation; Regions 5 and 8 remain matched to the `14` color.                                                                                                                                                 |
| 19  | Open `Interactivity`; change the detail surface.                                               | `Detail displays on` = `Click - Popover Modal`                                                                                                                                      | Hovering Region 2 no longer opens the hover tooltip, and the click-only detail behavior is active.                                                                                                                                                                                            |
| 20  | Click Region 2, inspect the popover modal, then close it.                                      | Region 2                                                                                                                                                                            | A popover modal opens and contains Region 2, `positivity: 27`, and `Change: -0.5`. Closing it removes the modal and leaves no stale Region 2 detail visible.                                                                                                                                  |
| 21  | Restore hover details.                                                                         | `Detail displays on` = `Hover - Tooltip`                                                                                                                                            | Clicking Region 2 no longer opens the popover modal; hovering it again produces the tooltip with Region 2, `positivity: 27`, and `Change: -0.5`.                                                                                                                                              |
| 22  | Open `Visual`; change the geography border color.                                              | `Geo Border Color` = `White`                                                                                                                                                        | The visible boundary lines separating adjacent HHS regions change to white while the regional data fills remain visible.                                                                                                                                                                      |
| 23  | Reverse the selected palette.                                                                  | Turn on `Use selected palette in reverse order`                                                                                                                                     | The colors assigned to the nine legend values reverse, and each region changes to the newly corresponding swatch color. The authored legend order remains `0`, `12`, `14`, `20`, `25`, `26`, `27`, `28`, `30`.                                                                                |
| 24  | Change tooltip opacity, then hover Region 2.                                                   | `Tooltip Opacity (%)` = `60`                                                                                                                                                        | The Region 2 tooltip remains readable with the same three details and has a visibly translucent 60% background instead of the prior, more opaque background.                                                                                                                                  |

## Final Acceptance Criteria

- Exactly ten HHS regions render from the ten fixture rows; uppercase `REGION 1` matches Region 1 case-insensitively.
- The categorical legend contains exactly nine unique values in ascending order: `0`, `12`, `14`, `20`, `25`, `26`, `27`, `28`, `30`.
- Every region fill matches its legend swatch before and after palette reversal; Regions 5 and 8 use the same `14` color.
- Title, Super Title, Message, Subtext, Footnotes, Legend Title, and Legend Description render their specified text and HTML semantics without displaying raw tags.
- Hover and click detail surfaces both show Region 2 with `positivity: 27` and `Change: -0.5`, and each surface closes when expected.
- Keyboard legend isolation emphasizes both regions in the selected `14` category, and `Show All` restores all ten regions.
- The data table contains ten rows with `positivity` and `Change` columns and preserves Region 2's `-0.5` and Region 7's zero values.
- White geography boundaries, reversed palette assignments, and a 60% tooltip background are visibly applied.
- No required-field error remains after the Geography and Data columns are selected.
- No unexpected JavaScript errors, unhandled rejections, or console errors occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- The Message link is keyboard-focusable, is named `View CDC positivity guidance`, and exposes the configured CDC destination.
- Legend values are keyboard-operable controls; activating `14` with `Enter` emphasizes both matching regions, and `Show All` restores all values.
- Region 2 exposes the same region name, positivity value, and Change value in both the hover tooltip and click popover modal.
- The click popover modal can be closed with its visible close control without leaving stale content.

## Notes

- This script intentionally exercises the complete chooser-to-editor workflow. Focused map editor stories may cover
  individual controls separately when automation is added.
- Accepted technical debt: automation ignores only the known React uncontrolled-to-controlled input warning from
  `packages/core/components/EditorPanel/Inputs.tsx` when adding the additional `Change` column; every other console
  error remains a failure.
- Screenshots may be retained as diagnostic evidence, but functional and semantic checks determine pass or failure.
- Automated story: `packages/editor/src/_stories/MAP-002.Regression.stories.tsx`
