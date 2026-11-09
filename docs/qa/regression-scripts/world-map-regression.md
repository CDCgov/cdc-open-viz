# Regression: MAP-003 — World Map Regression

## Purpose

Verify the complete editor workflow for loading the repository world-map example through a URL and building a
numeric world map. This regression protects extraction of the nested `data` array, world-geography matching,
numeric-formatting controls, special classes, supplemental tooltip and table columns, country filtering,
HTML-enabled legend text, location links, and representative Data Table, Interactivity, and Visual settings.

## Visualization

- Type: Map
- Starting point: The visualization chooser in a new editor session
- Editor mode: yes
- Browser viewport: Not viewport-dependent; render the Storybook preview fullscreen

## Test Data

- URL source: `packages/map/examples/gallery/world.json`
- Array extracted from the response: `data`
- Required columns:
  - `Country`: string; world geography name
  - `Rate`: numeric string; primary value used for the numeric color scale
  - `URL`: string; destination used for map and data-table navigation
  - `Category`: string; supplemental value and source for a special class
- Values important to this regression:
  - The `data` array contains 248 rows; wrapper configuration fields such as `general`, `columns`, and `legend` must
    not become data rows or columns.
  - Afghanistan has `Rate` `10`, `URL` `https://www.cdc.gov/`, and `Category` `Category 1`.
  - Åland has `Rate` `59` and `Category` `Category 2`; its accented name is the world-geography matching checkpoint.
  - Argentina has `Rate` `23` and `Category` `Category 5`; it is the checkpoint for the special class.
  - Canada has `Rate` `89` and `Category` `Category 3`; it is the checkpoint for the country filter.
  - The fixture's whole-number rates span `0` through `99`. They can verify that comma formatting is enabled
    without corrupting values, but cannot display a thousands separator.

## Preconditions

- Start a new visualization in the editor with no previously loaded configuration.
- Serve `packages/map/examples/gallery/world.json` from the Storybook origin and mock that local response at the test
  boundary; do not call a live service or depend on a machine-local file.
- Keep `Always load from URL (normally will only pull once)` off so the regression uses the deterministic imported
  rows after the initial request.
- Intercept the configured CDC navigation request at the browser-test boundary after recording its destination; the
  regression must not depend on the live CDC response.
- Use the desktop editor surface so hover tooltips, map-location clicks, and a newly opened navigation page can be
  observed.

## Steps and Expected Results

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 1 | Select a visualization from the chooser. | `World` | The editor displays the numbered workflow tabs, including `2. Import Data`. |
| 2 | Open `2. Import Data`, choose `Load from URL`, enter the repository URL, and load it; inspect the preview pagination. | `packages/map/examples/gallery/world.json`; `Always load from URL` = off | `Data Preview` displays only the `Country`, `Rate`, `URL`, and `Category` headings. It has ten 25-row pages, with 23 rows on the final page, accounting for all 248 data rows. No wrapper configuration key appears as a data column. |
| 3 | Under `Data Orientation`, select the orientation. | `Vertical` | The `Vertical` data-orientation option is active. |
| 4 | Answer `Are there multiple series represented in your data?`. | `No` | The `No` option is active. |
| 5 | Continue from Data Mapping. | Click `Configure your visualization`. | The rendered world map and Map editor accordions are visible without an import or data-shape error. |
| 6 | Open `Type` and inspect the starting state. | No changes | Geography is `World`, Map Type is `Data`, and Data Classification Type is `Numeric/Quantitative`. |
| 7 | Open `Columns` > `Geography` and select its source column. | `Country` | The Geography control displays `Country`, its required-field alert is absent, and recognized countries receive map locations. |
| 8 | Open `Columns` > `Data` and select its source column. | `Rate` | The Data control displays `Rate`, its required-field alert is absent, country fills update, and a five-class numeric legend appears. Afghanistan and the accented `Åland` row both receive data fills. |
| 9 | In `Columns` > `Data`, test numeric precision and restore whole-number display. | Set `Round` to `1`, confirm the five labels, then reset `Round` to `0`. | The labels first read `0 - 19.2`, `19.3 - 40.4`, `40.5 - 59.6`, `59.7 - 77.8`, and `77.9 - 99.0`; after reset they read `0 - 19`, `20 - 40`, `41 - 60`, `61 - 78`, and `79 - 99`. Afghanistan's tooltip changes from `Rate: 10.0` back to `Rate: 10`. |
| 10 | Enable number grouping for the primary value. | `Add Commas to Numbers` = on | The checkbox remains selected and existing two-digit values remain unchanged in the tooltip and data table; `Rate: 10` is not reformatted or parsed incorrectly. |
| 11 | Under `Special Classes`, add and configure one class. | `Data Key` = `Category`; `Value` = `Category 5`; `Label` = `Special Category 5` | A `Special Category 5` item appears outside the five numeric ranges, and Argentina uses the special-class gray treatment instead of the numeric color for `23`. |
| 12 | Under `Additional Columns`, add and configure a column. | `Column` = `Category`; `Label` = `Category`; `Show in Data Table` = on; `Show in Tooltips` = on | Hovering Afghanistan shows `Country: Afghanistan`, `Rate: 10`, and `Category: Category 1`. Hovering Åland shows its accented name, `Rate: 59`, and `Category: Category 2`. |
| 13 | Open `General` and add a title with markup. | `Title` = `<strong>World rate regression</strong>` | A visible heading reads `World rate regression` with strong emphasis; the markup tags are not printed. |
| 14 | Open `Legend`, add its text with markup, and preserve the full-data scale during filtering. | `Legend Title` = `<strong>World rate ranges</strong>`; `Legend Description` = `<em>Five quantile classes plus special category</em>`; `Unified Legend` = on | The legend title is strongly emphasized, the description is emphasized, and neither field displays raw markup. The five numeric ranges and `Special Category 5` remain visible and become the unified domain for later filter changes. |
| 15 | Open `Data Table` and configure its accessible text, expansion, and search. | `Show Data Table` = on; `Data Table Title` = `World rate data`; `Screen Reader Description` = `Country rates and categories`; `Map loads with data table expanded` = on; `Enable Search` = on | The expanded table is introduced by the visible `World rate data` control, has the accessible caption `Country rates and categories`, and contains `Country`, `Rate`, and `Category` columns. Searching for `Afghanistan` leaves its row with `Rate` `10` and `Category` `Category 1` visible and removes Argentina from the visible results; clearing search restores both rows. |
| 16 | Open `Interactivity` > `Location links` and select the navigation source. | `Link URL column` = `URL`; `Open links in` = `New Window`; `Clicking a map location opens its link` = on; `Show links in the data table` = on | Afghanistan's country cell is a link to `https://www.cdc.gov/`. Clicking Afghanistan on the map opens one new page whose URL begins with `https://www.cdc.gov/`, while the editor story remains open. |
| 17 | Open `Filters`, add a filter, and configure it; then hover the active country. | `Filter` = `Country`; `Label` = `Country`; `Filter Default Value (Country)` = `Canada`; `Show Filter` = on | A visible filter named `Country` displays `Canada`; the map and table reflect the Canada row, and hovering Canada shows `Rate: 89` and `Category: Category 3` without a no-data error. The unified five-range legend remains unchanged. |
| 18 | Use the keyboard to change the visible country filter. | Focus `Country` and select `Argentina`. | Argentina becomes the active data location; hovering it shows `Rate: 23` and `Category: Category 5`, its special-class treatment is retained, and the table shows the Argentina row instead of Canada. The unified legend remains unchanged. |
| 19 | Open `Interactivity`; disable map navigation, change the detail surface, inspect Argentina, then restore it. | `Clicking a map location opens its link` = off; `Detail displays on` = `Click - Popover Modal`; click Argentina; close the modal; restore `Hover - Tooltip` | The modal contains Argentina, `Rate: 23`, and `Category: Category 5`; its close control removes the modal without opening a navigation page. After restoring hover, hovering Argentina shows the same values in a tooltip and clicking does not reopen the modal or navigate. |
| 20 | Open `Visual`; change the geography border color. | `Geo Border Color` = `White` | Visible boundaries between neighboring countries change to white while country data fills and Argentina's special-class treatment remain visible. |
| 21 | Select a numeric country, then reverse the selected palette. | Change the `Country` filter to `Canada`; turn on `Use selected palette in reverse order`. | The five numeric swatch colors reverse and Canada's `Rate: 89` fill changes to its newly corresponding swatch; `Special Category 5` retains its gray legend swatch. |
| 22 | Restore the special-class country, change tooltip opacity, then hover it. | Change `Country` to `Argentina`; `Tooltip Opacity (%)` = `60` | Argentina returns with the unchanged special-class gray treatment. Its tooltip remains readable with the same three details and has a 60% translucent background. |

## Final Acceptance Criteria

- The URL response contributes exactly the 248 objects from its `data` array; wrapper configuration fields do not
  appear in the data preview or rendered data.
- World, Data, and Numeric/Quantitative remain selected, and `Country` and `Rate` satisfy both required column fields.
- Afghanistan and Åland receive data fills, and Åland preserves its accented geography name in rendered details.
- The legend contains five numeric ranges plus `Special Category 5`; resetting `Round` to `0` restores whole-number
  bounds, and comma formatting does not corrupt any fixture value.
- Argentina remains assigned to the `Category 5` special class before and after filtering and palette reversal.
- Tooltip, modal, and table output contain the configured `Category` supplemental column and the exact Afghanistan,
  Canada, and Argentina checkpoint values when each is active.
- The Country filter switches rendered map, tooltip, and table data between Canada and Argentina without stale data
  or a no-data error, while the unified full-data legend remains unchanged.
- Legend Title and Legend Description render their requested HTML semantics without displaying raw tags.
- The Afghanistan table link exposes the CDC destination, and clicking its map location opens exactly one new page
  without replacing the editor story.
- The visible data-table title control, accessible table caption, white country boundaries, reversed numeric palette,
  and 60% tooltip opacity are applied.
- No unexpected JavaScript errors, unhandled rejections, or console errors occur.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- The map title and legend text preserve their visible text and requested strong/emphasis semantics.
- The supporting table uses `Country rates and categories` as its accessible caption, and its visible expansion
  control is named `World rate data`.
- The visible Country filter has an accessible name and can switch from Canada to Argentina with the keyboard.
- Argentina exposes the same country, rate, and category values in both the click modal and hover tooltip; the modal
  can be closed without leaving stale detail content.

## Notes

- This script covers the complete chooser-to-editor workflow and representative General, Data Table, Interactivity,
  and Visual controls. Time Playback, Bubble Layers, Custom Map Layers, Markup Variables, Small Multiples, and Text
  Annotations are separate feature workflows and are intentionally outside MAP-003.
- Because every `Rate` in this fixture is below 100, MAP-003 verifies the `Add Commas to Numbers` authored state and
  guards against value corruption but cannot prove that a thousands separator is rendered. A fixture containing a
  value of at least `1000` is required for that distinct formatting assertion.
- Screenshots may be retained as diagnostic evidence, but functional and semantic checks determine pass or failure.
- Automated story: pending
