# Regression: MAP-004 — County map regression

## Purpose

Verify the complete new-visualization workflow for a U.S. county data map and protect county-specific Canvas
rendering, zero-padded FIPS matching, topology changes, state and county focus, neighboring-state data, HSA
boundaries, numeric and categorical legends, patterns, filters, downloads, and editor configuration. This script also
checks every setting that is visible and applicable to the resulting county data map, including settings revealed by
another control.

## Visualization

- Type: Map
- Starting point: The visualization chooser in a new editor session
- Editor mode: yes
- Browser viewport: Not viewport-dependent; use a desktop viewport wide enough to display the editor and preview
  without the mobile layout

## Test Data

- Bundled sample action: `United States: County Sample Data`
- Repository source: `packages/editor/src/components/DataImport/components/samples/valid-county-data.csv`
- Shape: 3,047 data rows plus one header row
- Required columns:
  - `FIPS Codes`: five-character county FIPS string; leading zeroes must be preserved
  - `County`: county or county-equivalent display name
  - `Public Health Jurisdiction`: two-letter state abbreviation
  - `Percent Vaccinated`: numeric choropleth value
  - `Vaccination Coverage Group`: categorical choropleth value
- Values important to this regression:
  - `02013` is Aleutians East Borough, Alaska, with `Percent Vaccinated` `99.99` and group `70% or More`
  - `01001` is Autauga County, Alabama, with `Percent Vaccinated` `34.13` and group `30% - 39.9%`
  - `01003` is Baldwin County, Alabama, with `Percent Vaccinated` `37.55` and group `30% - 39.9%`
  - `06075` is San Francisco County, California, with `Percent Vaccinated` `99.99` and group `70% or More`
  - The row `NA,Unknown County,ID,0,No Data` is intentionally non-geographic and is used for special-class and
    non-geographic-category checks

## Preconditions

- Start a new visualization with no previously loaded configuration.
- Use only the bundled sample-data action; do not upload a machine-local file.
- Keep the browser console open and fail the regression for any unexplained error or unhandled rejection.
- For the Custom Map Layers steps, serve or intercept `packages/map/examples/__data__/testing-layer.json` from the
  editor origin as `/examples/__data__/testing-layer.json`, with JSON content type and no live fallback. Remove the
  interception after the layer is removed.
- Before testing location navigation, use the browser test harness to intercept both same-window navigation and new
  windows. Record exactly one `{ destination, target }` call per activation, prevent the page from leaving the editor,
  clear recorded calls between checks, and restore normal navigation after step 90.
- `Advanced Options` may be opened to verify the generated JSON when a control has no separate rendered output.
  Control state alone is not sufficient when the script names a rendered, interaction, accessibility, or download
  result.
- Restore temporary branch changes when the step says to restore them so later results remain deterministic.

## Steps and Expected Results

### Build the county map

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 1 | Select a visualization | `United States (State- or County-Level)` | The numbered editor workflow appears, including `2. Import Data`. |
| 2 | Open `2. Import Data` and select the bundled sample; inspect the preview pagination | `United States: County Sample Data` | `Data Preview` shows all five required column headings and accounts for exactly 3,047 data rows: 122 pages at 25 rows per page, with 22 rows on the last page. The first FIPS values retain five characters, including `02013`; they are not converted to `2013`. |
| 3 | Under `Data Orientation`, select the orientation | `Vertical` | `Vertical` is active and the preview remains row-oriented with the same five headings. |
| 4 | Answer `Are there multiple series represented in your data?` | `No` | `No` is active and one Geography/Data mapping workflow remains. |
| 5 | Continue from Data Mapping | `Configure your visualization` | The Map editor and a visible, non-zero-size county Canvas appear with image name `United States county map`. The visible accordions include `Type`, `General`, `Columns`, `Legend`, `Filters`, `Footnotes`, `Data Table`, `Interactivity`, `Visual`, `Custom Map Layers`, `Pattern Settings`, and `Markup Variables`. |
| 6 | Open `Type` and configure the base type | `United States`; `US County-Level`; `Data`; `Numeric/Quantitative` | `County Census Year`, `Show Neighboring States' Data`, `Show HSA Boundaries`, and `Show Available Territories` are visible. The map remains a county Canvas rather than a state SVG. |
| 7 | Open `Columns` > `Geography` and select the source | `FIPS Codes` | The required Geography alert disappears. The Canvas renders county shapes; Alabama and Alaska rows match their leading-zero FIPS values instead of being reported as unmatched. |
| 8 | Open `Columns` > `Data` and select the source | `Percent Vaccinated` | The required Data alert disappears. County fills and a numeric legend appear. Autauga and Baldwin are both mapped, and their values are available in the table/detail output as `34.13` and `37.55`. |
| 9 | Hover or otherwise invoke the configured detail for known counties | Autauga County, then Aleutians East Borough | Each visible detail names the county and shows the exact `Percent Vaccinated` value. Aleutians East Borough proves that `02013` was matched with its leading zero intact. |

### Type

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 10 | Inspect the geography controls | No change | `United States` is active and `Geography Subtype` is `US County-Level`. The alternative geography buttons remain available, but changing to them is outside this county regression. |
| 11 | Change `County Census Year` through every offered value | Starting value `2019`; select `2022`, `2021`, `2020`, `2015`, `2014`, `2013`, then restore `2019` | For every selection the loading state completes and the visible county Canvas is redrawn with non-zero size and no stale or blank map. `Advanced Options` shows the selected `general.countyCensusYear`; it ends as `2019`. |
| 12 | Enable `Show State Dropdown` in `Filters`, select Alabama in the rendered `Select State` control, then return to `Type` | Alabama | The county Canvas focuses Alabama and a rendered `Select County` control appears with Alabama counties, including Autauga County and Baldwin County. |
| 13 | Toggle `Show Neighboring States' Data` on and off while Alabama remains selected | On, then off | On: counties outside Alabama that have fixture data regain their data colors while the Alabama focus remains. Off: the focused Alabama counties retain their data colors and neighboring-state data is no longer painted. End off. |
| 14 | Select a county from the rendered county control, clear it, then clear the state | Autauga County | The Canvas visibly highlights/focuses Autauga County and the supporting table/detail output is limited consistently. Clearing the county restores the Alabama county view; clearing `Select State` then restores the full United States county view so later Alaska and California checkpoints remain visible. |
| 15 | Toggle `Show HSA Boundaries` | On | The Canvas redraws with grouped HSA outlines and `Columns` reveals `HSA Description Column`. Select `Public Health Jurisdiction`; Autauga detail includes the exact HSA-description value `AL` without removing the county name/value. |
| 16 | Turn `Show HSA Boundaries` off | Off | HSA outlines disappear, county boundaries return, and `HSA Description Column` is no longer visible. County colors, the Alabama focus, and the selected census year remain intact. |
| 17 | Toggle `Show Available Territories` off and on | Off, then on | Off removes the territory presentation from the rendered map/territory area. On restores the available-territory presentation. `Advanced Options` ends with `general.territoriesAlwaysShow: true` and `migrations.showPuertoRico: false`. |
| 18 | Temporarily change `Map Type` | `Geocode` | `Columns` reveals `Convert FIPS Codes to Geography Name`; the type configuration is `us-geocode`. No Latitude or Longitude column is assigned, so this branch is configuration-only and must not be treated as a successful point-geocode render. |
| 19 | Toggle `Convert FIPS Codes to Geography Name`, then restore the county data type | On, off; `Map Type: Data` | `Advanced Options` changes `general.convertFipsCodes` in both directions. Restoring `Data` removes the conversion control and restores the numeric county Canvas and legend. |
| 20 | Inspect `Display Shapes on Hex Map` | No change | Record it as visible but inapplicable: county geography does not expose `Display As Hex Map`, so no shape-group controls can be revealed and no county Canvas output should change. |

### General

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 21 | Set `Title` and keep `Show Title` on | `County vaccination regression` | A visible map heading reads exactly `County vaccination regression`. |
| 22 | Exercise every `Title Style` | `Small (h3)`, `Large (h2)`, `Legacy`; finish on `Small (h3)` | The visible title changes to the corresponding heading treatment each time. It ends as the small/h3 treatment. |
| 23 | Toggle `Show Title` off and on | Off, then on | The map title and its super title are absent while off and return while on. |
| 24 | Set `Super Title` | `County sample coverage` | `County sample coverage` appears directly above the main title while `Show Title` is on. |
| 25 | Set `Message`, `Subtext`, and the General `Footnotes` field | `Use the state and county selectors.`; `Vaccination values are sample data.`; `General county note.` | The message appears above the map, the subtext below the visualization, and `General county note.` below the data-table area; none replaces the dedicated Footnotes entries added later. |
| 26 | Exercise `Language` | `Spanish (es-MX)`, then `English (en-US)` | The configuration locale changes to `es-MX` and then `en-US`; number/date and built-in map labels use the selected locale where translated. Authored title/content remains unchanged. End on English. |
| 27 | Set `Alt Text Description` | `Static (manual text)`; `Description Text: County vaccination coverage varies across the sample counties.` | The preview displays the exact description and the Canvas image name becomes `United States county map with the title: County vaccination regression. County vaccination coverage varies across the sample counties.` |
| 28 | Exercise the other alt-text choices | `None`, then `Data File Metadata`, then restore Static | `None` removes the preview. Because the CSV has no file metadata, `Data File Metadata` shows the explicit no-metadata message and does not reveal `Description Metadata Field`. Restoring Static restores the exact preview text. |

### Columns

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 29 | Set `Geography Column Label`, `Geography Label`, and `Geography Display Column` | `County FIPS`; `County`; `County` | Rendered details and the data table use county names from the display column. The geography label shown in details is `County`; raw FIPS remains the matching key. |
| 30 | Toggle `Hide Geography Column Name in Tooltip` and Geography `Show in Tooltips` | Verify all on/off combinations; finish with hide off and Show in Tooltips on | The visible county detail respectively hides/shows the `County` prefix and geography value. End with `County: Autauga County` visible. |
| 31 | Toggle Geography `Show in Data Table` | Off, then on | The geography column disappears from and returns to the expanded data table without changing the Canvas. |
| 32 | Set Geography `Order` | `2`, then `1` | The geography column/detail line moves relative to other displayed columns and returns first; `Advanced Options` ends with `columns.geo.order: 1`. |
| 33 | Set `Data Label`, `Prefix`, `Suffix`, and `Round` | `Vaccinated`; `~`; `%`; `1` | Autauga's rendered value is formatted as `~34.1%` in enabled detail/table locations and the label is `Vaccinated`. |
| 34 | Toggle `Add Commas to Numbers` and `Hide Data Column Name in Tooltip` | Commas on; hide on, then off | `Advanced Options` records `columns.primary.useCommas: true`. Hiding removes the `Vaccinated` prefix but preserves the formatted value; restoring shows both. |
| 35 | Toggle Data `Show in Tooltips` and `Show in Data Table` | Each off, then on | Each output loses and regains the `Vaccinated` field independently. The county Canvas remains colored throughout. |
| 36 | Set Data `Order` | `1`, then `2` | The data field moves before and then after Geography in enabled output. End with Geography 1/Data 2. |
| 37 | Add and fully configure a `Special Class`, verify it, then remove it temporarily | `Data Key: Percent Vaccinated`; `Value: 0`; `Label: No reported location` | A separate `No reported location` legend item appears and the non-geographic zero is excluded from ordinary numeric ranges. Removing the class removes that item and returns zero to ordinary numeric classification, leaving step 48 able to test `Separate Zero`. |
| 38 | Click `Add Column` and configure the new additional column | `Column: Public Health Jurisdiction`; `Label: Jurisdiction`; `Prefix: [`; `Suffix: ]`; `Round: 0`; commas on; Show in Data Table on; Show in Tooltips on; `Order: 3` | Autauga detail/table output includes `Jurisdiction: [AL]` after Geography and Vaccinated. `Advanced Options` records Round and commas even though the string value has no numeric formatting effect. |
| 39 | Toggle the additional column's table/tooltip settings, then remove it | Each off/on; `Remove` | `Jurisdiction` disappears and returns independently in each output. Removing the additional column removes it from both outputs and from `Advanced Options`. |
| 40 | Inspect `Latitude Column` and `Longitude Column` | No selection | Record both as visible but inapplicable to this polygon county data fixture. They remain empty and do not replace FIPS geography. |

### Legend — numeric branch

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 41 | Exercise every numeric `Legend Type` and every manual-breakpoint action | `Equal Number (Quantiles)`, `Equal Interval`, `Manual Breakpoints`; add `Upper Bound` values `20`, `40`, `60`, and `80`; add then remove a duplicate `40`; click `Clear`; finish on Equal Number | Quantiles and equal intervals produce visibly different range boundaries. Manual uses the fixture minimum/maximum as outer edges and shows the authored `20`, `40`, `60`, and `80` bounds in sorted order. The duplicate warning identifies `40`; removing that row clears the warning. `Clear` removes all authored bounds. Returning to Equal Number restores five generated quantile ranges. |
| 42 | Toggle `Show Legend` | Off, then on | The entire rendered legend region disappears and returns; the Canvas remains visible. |
| 43 | Exercise `Legend Position` | `Side`, `Bottom`, `Top`; finish on Side | The legend visibly moves to each requested location relative to the Canvas and ends beside it. |
| 44 | Exercise non-gradient `Legend Style` and layout controls | `circles`, `boxes`; side `Single Column Legend`; `Vertical sorted legend` | Legend markers change between circles and boxes. Single-column and vertical-sorted settings visibly change item layout/order; mutually exclusive layout settings clear as appropriate. |
| 45 | Test top/bottom-only layout and gradient branches | Position Bottom; `Single Row Legend`; Style `gradient`; `Gradient Style: linear blocks`; `Legend Separators: 1,3`; `Tick Rotation (Degrees): 30`; then `Gradient Style: smooth` | Single Row arranges discrete items in one row. Gradient replaces the discrete markers; linear blocks show separators at the authored item boundaries and 30-degree tick labels, while smooth produces a continuous gradient. Return to Side/boxes after the checks. |
| 46 | Toggle `Hide Legend Box` | On, then off | The legend container border/box disappears and returns without hiding its title or items. |
| 47 | Exercise `Number of Items` | `3`, `5`, `8`; finish on `5` | The numeric legend contains the selected number of ordinary ranges each time, excluding special classes. |
| 48 | Toggle `Separate Zero` | On, then off | On creates a visible zero-only legend class; off removes that class and folds zero back into ordinary classification. End off. |
| 49 | Recreate the step-37 special class and test its ordering | `Percent Vaccinated` = `0`, label `No reported location`; toggle `Show Special Classes Last` off/on | The special legend item moves between the normal ordering and the end. End on, then remove the special class and verify its legend item disappears. |
| 50 | Set `Legend Title` and `Legend Description` | `Vaccination coverage`; `Percent of county population in the sample.` | Both exact strings appear in the rendered legend. |
| 51 | Add one temporary `Public Health Jurisdiction` filter, then toggle `Dynamic Legend Description` | Label `Jurisdiction`; default `AL`; dynamic description on | `Legend Description` becomes value-specific and `Filter Value` appears. Enter `Alabama counties` for `AL` and `Alaska counties` for `AK`; changing this authored `Jurisdiction` filter changes the visible description to the exact matching text. Turn the setting off and restore the static description. |
| 52 | Toggle `Unified Legend`, then remove the temporary filter | Off, then on; change the authored `Jurisdiction` filter between AL and AK | Off recalculates range bounds from the currently filtered data; on keeps the same high/low range across AL and AK. End on, restore AL, then remove this filter so step 62 creates exactly one fresh authored filter. |

### Columns and Legend — categorical branch

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 53 | In `Type`, change `Data Classification Type`, then set `Columns` > `Data Column` | `Categorical`; `Vaccination Coverage Group` | Numeric-only controls disappear. The legend shows the fixture's coverage-group labels and county colors follow those categories. |
| 54 | Add an `Additional Category` | `Not reported` | `Not reported` appears as an additional legend category even though no mapped county uses it. Remove it and verify it disappears. |
| 55 | Toggle `Include Non-Geographic Categories` | Off, then on | Off excludes the `No Data` value belonging only to the `NA` geography; on adds `No Data` to the legend without inventing a county shape. |
| 56 | Exercise `Category Sort` | `Automatic sort`, then `Custom sort` | Automatic puts numeric ranges in numeric-bound order. Custom reveals `Category Order`; move `70% or More` to the first position and verify the rendered legend follows that order. |
| 57 | Exercise `Legend Group By :` | `Public Health Jurisdiction`, then clear | Grouping creates labeled legend groups based on jurisdiction; clearing returns one category list. No category is lost. |
| 58 | Exercise categorical legend marker/layout settings | circles, boxes; Side/Bottom/Top; Single Column, Single Row, Vertical sorted | The rendered categorical legend reflects every selected marker, position, and applicable layout, with the same category labels. Restore Side/boxes. |
| 59 | Restore the numeric branch | `Numeric/Quantitative`; `Data Column: Percent Vaccinated`; `Legend Type: Equal Number`; `Number of Items: 5` | The five-range numeric legend and county values return; categorical-only controls and additional categories are absent. |

### Filters

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 60 | Toggle county-only `Show State Dropdown` | On | Rendered `Select State` is visible; selecting Alabama reveals `Select County`, and selecting Autauga changes the county focus without losing numeric data. Keep it on. |
| 61 | Set `Filter intro text` and exercise `Filter Behavior` | `Choose a jurisdiction.`; `Filter Change`, then `Apply Button` | The intro text appears above the rendered filter. Filter Change updates immediately. Apply Button queues a new value until the visible Apply control is activated. Finish on Filter Change. |
| 62 | Click `Add Filter` and configure the basic filter | `Filter: Public Health Jurisdiction`; `Label: Jurisdiction`; `Filter Default Value (Public Health Jurisdiction): AL`; `Note: Select a state abbreviation.` | A rendered `Jurisdiction` filter appears with AL selected, the note is visible, and the map/table show Alabama rows. |
| 63 | Exercise every `Filter Style` and its conditional control | dropdown; combobox with `Description Field: County`; multi-select with `Select Limit: 2`; pill; tab; tab-simple; tab bar; finish dropdown | Each style renders its corresponding interactive control. Combobox options show county descriptions; multi-select prevents more than two selections; pill/tab variants render the same values without changing their filtering meaning. |
| 64 | Exercise every `nested-dropdown` setting | `Label: County by jurisdiction`; `Note: Choose a state, then county.`; `Filter Grouping: Public Health Jurisdiction`; `Filter SubGrouping: County`; `Subgroup Description Field: FIPS Codes`; `Group Order` ascending, descending, custom; `SubGrouping Order` ascending, descending, custom; `Create query parameters` on with grouping parameter `state` and subgrouping parameter `county`; `Display subgrouping only` off/on | The rendered nested control limits child choices to the selected group. AL > Autauga County shows FIPS `01001` as its description and focuses the Canvas/table on Autauga. Both group and subgroup lists follow each selected ordering, including one verified drag in each custom order. `?state=AL&county=Autauga%20County` restores both selections. With subgrouping-only on, only the county control is shown; off restores both levels. Turn query parameters off, finish with subgrouping-only off, and restore the ordinary dropdown filter. |
| 65 | Exercise every `Filter Order` branch | Ascending Alphanumeric; Descending Alphanumeric; Custom; Order By Data Column with `Order Column: Public Health Jurisdiction` | Rendered options follow the selected order. In Custom, move `AK` before `AL` and verify that order. Ordering by the same jurisdiction column deterministically returns ascending jurisdiction values. Finish ascending. |
| 66 | Set `Default Value Set By Query String Parameter` | `jurisdiction` | With `?jurisdiction=AK`, the rendered filter starts on AK and the map/table show Alaska. Remove the query parameter and restore AL. |
| 67 | Toggle `Show Filter` | Off, then on | Off removes the authored Jurisdiction control but leaves the county-only State selector. On restores it. |
| 68 | Add a second County filter, set `Filter Parents`, and reorder the authored filters | Parent: Jurisdiction; drag County before Jurisdiction and then restore Jurisdiction first | When Jurisdiction is AL, the child filter offers Alabama counties and excludes Alaska counties; switching the parent to AK reverses the available child set. The rendered filter order follows each editor drag without changing the parent relationship. Remove the second filter after the check. |
| 69 | Inspect `Filter Controlling County Census Year` in `Type` | Leave `None` selected | Record the control as visible but inapplicable to this fixture: none of its five columns contains supported county-topology years. Selecting Jurisdiction, county, FIPS, vaccination, or coverage values would request invalid topology years, so the regression must not claim a successful filter-driven year change. Direct `County Census Year` coverage remains in step 11. |
| 70 | Remove the authored Jurisdiction filter | `Remove` | Its rendered control and dynamic-description branch disappear. The county-only State/County selectors remain because `Show State Dropdown` is still on. |

### Footnotes

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 71 | Click `Add Static Footnote`, open the new item, and set `Symbol` and `Text` | First available symbol; `Static county footnote` | A rendered static footnote displays the chosen symbol with the exact text. Add a second note, reorder the two, and verify rendered order follows editor order; delete the second and verify only the first remains. |
| 72 | Inspect `Select a Footnote Dataset` | No selection | The selector contains only its empty option because a standalone map keeps imported rows in `config.data` rather than a dashboard `datasets` collection. Record `Footnote Symbol Column`, `Footnote Text Column`, `Footnote Order Column`, and per-filter `Filter Footnotes` as unavailable in this workflow; the static footnote remains rendered. |

### Data Table

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 73 | Set `Data Table Title` and toggle `Show Data Table` | `County sample table`; off, then on | The supporting table disappears and returns with a control/title named `County sample table`. |
| 74 | Toggle `WRAP DATA TABLE COLUMNS` and set `Table Cell Min Width` | On/off; `180` | Long headers/cells wrap when on and do not wrap when off. At 180, cells honor the minimum width and horizontal overflow is available when required. |
| 75 | Toggle `Show Non Geographic Data` | Off, then on | The `Unknown County`/`NA` row is absent while off and appears while on; mapped county rows are unchanged. |
| 76 | Set `Index Column Header` and `Screen Reader Description` | `County location`; `County vaccination sample data table.` | The first/index header reads `County location`; the table exposes the exact caption/description to assistive technology. |
| 77 | Toggle `Limit Table Height` and set `Data Table Height` | On; `250`; then off | The table viewport is limited to 250 pixels and becomes internally scrollable while on. Turning the limit off removes the fixed-height viewport; finish off. |
| 78 | Toggle `Fix First Column` | On, then off | While horizontally scrolling the table, the first column remains fixed only when on. |
| 79 | Toggle `Map loads with data table expanded` and `Show collapse below table` | Each on, then off/on as needed | Expanded causes the table rows to be visible immediately; the bottom collapse control appears only when enabled and collapses the table. Finish expanded with the bottom control visible. |
| 80 | Enable `Enable Search` and set `Search Placeholder Text` | `Find a county` | A table search box appears with the exact placeholder. Enter `Autauga`; only the matching county row remains visible, then clear it to restore rows. Disable Search and verify the box disappears. |
| 81 | Exercise `Default Sort Column` and every `Sort Direction` | Geography; Ascending, Descending, Custom | Ascending and descending reverse the visible county ordering. Custom reveals the draggable order; move Baldwin before Autauga and verify the initial table order follows it. Clear the default sort afterward. |
| 82 | Enable Search again, enter `Autauga`, then enable and configure the CSV branch | `Show Download CSV Link` on; `Show Link Below Table` on; `Download only visible data` on; `Download Data Link Text: Download county CSV`; `Download Filename: county-map-regression` | The table shows only Autauga before download. A link named `Download county CSV` appears below it; the downloaded CSV is named from `county-map-regression`, contains one data row for Autauga plus its header, and excludes Baldwin. Clear the search afterward. |
| 83 | Toggle `Include Full Geo Name in CSV Download` | Off, then on | The two downloads differ only in geography representation: on includes the resolved full county name while retaining the configured data fields. |
| 84 | Enable `Enable Image Download` and configure its branch | On; `Include Heading & Context` on; `Download Image Link Text: Download county PNG`; `Download Filename: county-map-regression` | A link named `Download county PNG` appears. Because the map has a non-empty title, the PNG filename begins `county-vaccination-regression-` and ends with the current `YYYY-MM-DD.png`; the configured filename remains the CSV name and image fallback. The image includes the visible heading/context and map and is non-empty. |
| 85 | Reveal and test `Include Hidden Map Title in Download` | Hide the title in General while retaining its text; enable the control; download | The webpage title remains hidden, but the downloaded image includes `County vaccination regression`. Restore visible title afterward. |
| 86 | Inspect URL-backed and dashboard-only table settings | No change | `Show URL to Automatically Updated Data`/`Dataset Link Text` are absent because the bundled sample is not URL-backed. `Show Data Table Name & Link` is absent because this is not a dashboard. Record both in the applicability inventory. |

### Interactivity

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 87 | Exercise `Detail displays on` | `Hover - Tooltip`, then `Click - Popover Modal` | Hover shows the county tooltip and moving away hides it. Click opens a popover modal for the selected county and reveals `Tooltips Link Label` in the editor. |
| 88 | Set `Tooltips Link Label` and `No Data Tooltip Text` | `County details`; `No county data`; invoke Cheyenne County, Colorado (`08017`), which is present in 2019 topology but absent from the fixture | The click-detail action uses `County details`. Cheyenne County detail shows `No county data` rather than a numeric value. Return to Hover after the check. |
| 89 | Configure `Link URL column` | `FIPS Codes` | `Open links in`, `Clicking a map location opens its link`, and `Show links in the data table` appear. The values are treated only as deterministic stub destinations for this test. |
| 90 | Exercise the location-link branch with the navigation stub | `Open links in: Same Window`, then `New Window`; enable map navigation and data-table links | Activating Autauga on the map records destination `01001` with `_self`, then `_blank`, without leaving the editor. The table renders its geography link when enabled and plain content when disabled. Disable map navigation after the check. |
| 91 | Enable `Show location highlighter` and configure every revealed setting | `Position: Above map`; `Dropdown label: Find county`; `Placeholder text: Choose county`; `Note: Select one county.`; `Show reset button` on; `Reset button label: Clear county`; `Location details: Selected: {{location}}`; `Highlight selected location on map` on; `Show locations with a value in: Percent Vaccinated` | A highlighter appears above the map with the exact label, placeholder, and note. Selecting Autauga displays `Selected: Autauga County`, visibly highlights it on the Canvas, and shows `Clear county`. The filter-column setting excludes locations lacking Percent Vaccinated. |
| 92 | Exercise remaining highlighter branches | Position Below; reset; highlight off/on; filter All available locations | The highlighter moves below the map. `Clear county` clears the selection/details/highlight. Turning highlight off preserves selection/details without the Canvas highlight; turning it back on restores it. All available locations removes the value-column exclusion. |

### Visual

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 93 | Exercise `Header Theme`, `Style Treatment`, and every Legacy-only style control | Header `theme-purple`, then `theme-blue`; Style Treatment `Legacy`; toggle `Display Border`, `Use Border Color Theme`, and `Use Accent Style` off/on; finish Style Treatment `TP5` | The title/header visibly changes theme and ends blue. Legacy reveals all three conditional controls: each toggle visibly adds/removes its border, themed-border color, or accent treatment. Selecting TP5 hides the Legacy-only controls and restores the TP5 treatment. |
| 94 | Exercise the Visual `Show Title` | Off, then on | It controls the same rendered title as General and ends visible; the two editor controls remain synchronized. |
| 95 | Exercise `Geo Border Color` | `White`, then `Dark Gray (Default)` | County/state boundary strokes visibly change to white and then dark gray without changing fills. |
| 96 | Select a different `Map Color Palette` and reverse it | Palette button titled `sequential_blue`; `Use selected palette in reverse order` on/off | County fills and legend swatches use the blue palette. Reversing swaps low/high color direction in both places; turning reverse off restores the original direction. |
| 97 | Toggle `Allow Map Zooming` and operate its controls | On; `Zoom In`, `Zoom Out`, drag/pan, `Reset Zoom`; off; then on again | On exposes accessible Zoom In/Zoom Out controls and changes the Canvas scale/position; Reset returns the initial transform. Off removes manual zoom controls and the Canvas cursor no longer implies pan/zoom. Re-enabling restores the controls; finish on. |
| 98 | Exercise `Default City Style` and `Label (Optional)` | Circle, Pin, Square, Triangle, Diamond, Star; label `Sample locations`; finish Circle with blank label | Because this fixture has no latitude/longitude columns, no marker or city legend item is expected. `Advanced Options` records every selected shape and label exactly, then ends with Circle and no label; county polygons remain unchanged. |
| 99 | Add and fully configure `Additional City Styles` | `Column with configuration value: Public Health Jurisdiction`; `Value to Trigger: AL`; `Shape: Star`; `Label: Alabama locations` | Advanced Options records the conditional style. With no point coordinates, it produces no county-polygon change. Remove the city style and verify it is removed from configuration. |
| 100 | Set `Geocode Circle Size` | `7` | Advanced Options records `visual.geoCodeCircleSize: 7`; no polygon-county change is expected. This becomes rendered only in the temporarily tested Geocode branch with valid point data, which this fixture lacks. |
| 101 | Set `Tooltip Opacity (%)` | `50`, then `100` | A visible county tooltip becomes semi-transparent at 50 and fully opaque at 100. |

### Custom Map Layers

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 102 | Click `Add Map Layer` and configure every field using the local mocked fixture | `Layer Name: Regression layer`; `File: /examples/__data__/testing-layer.json`; `TOPOJSON Namespace: cove`; `Fill Color: #008000`; `Fill Opacity (%): 30`; `Stroke Color: #000000`; `Stroke Width: 2`; `Tooltip: Regression polygon` | The local intercepted JSON request succeeds, the deterministic polygons overlay the county Canvas with the requested fill/stroke treatment, and invoking layer detail shows `Regression polygon`. No live fallback request occurs. |
| 103 | Change each layer style field and then remove the layer | Opacity 60; stroke width 4; alternate local colors; `Remove Layer` | The overlay visibly reflects each changed style. Removing it removes the overlay and its tooltip while preserving county data. |

### Pattern Settings

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 104 | Click `Add Geo Pattern` and configure all fields | `Data Key: Vaccination Coverage Group`; `Data Value: 70% or More`; `Label (optional): High coverage`; `Pattern Type: circles`; `Pattern Size: small`; automatic/blank `Pattern Color` | Counties in `70% or More`, including Aleutians East Borough and San Francisco County, receive the pattern. A `High coverage` pattern legend item appears and the panel reports that the pattern passes contrast checks. |
| 105 | Exercise every pattern type and size | `waves`, `diagonalLines`, `circles`; `medium`, `large`, `small` | The matching counties visibly change to each requested pattern geometry and scale; nonmatching counties do not receive the pattern. |
| 106 | Exercise `Pattern Color` contrast validation | Clear the console; with unreversed `sequential_blue`, enter `#ffffff`, then `#000000`, then restore automatic/blank | White passes 3:1 against the dark highest-range fill and shows success. Black shows the explicit contrast error and editor error state. During only the black-color action, every allowed console error must begin `COVE: pattern contrast check failed`; no other console-error text or unhandled rejection is accepted. Restoring automatic/blank clears the visible error; clear the expected diagnostics before continuing. |
| 107 | Remove the pattern | `Remove Pattern` | Pattern marks and the pattern legend item disappear; ordinary county fills remain. |

### Markup Variables

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 108 | Enable `Enable Markup Variables`, click `Add Variable`, and complete the Data Column basic settings | `Source: Data Column`; `Data Column: County`; `Variable Name: County name` | Validation errors clear, the read-only generated tag is `{{county-name}}`, and the summary names County as its source. |
| 109 | Exercise `Conditions` | Add condition: `Column: Public Health Jurisdiction`; `Operator: is`; `Value: AL`; `Display all matching rows: No`, then Yes | The summary reports one condition. No shows the first-value warning because many Alabama county names match; Yes removes that warning and represents all matches. Exercise `is not`, then restore `is`. Remove and re-add the condition to verify both controls. |
| 110 | Exercise every Data Column `Formatting Options` | `Format numbers with commas` on; `Round to decimal point: 1`; `Date Parse Format: %Y`; `Date Display Format: %Y`; `Hide section when value is null` on | Advanced Options records each field on the variable. The County string is unchanged by numeric/date formats; this is configuration evidence, not a claim of visible numeric formatting. Clear the date fields and round value; turn commas/hide-null off. |
| 111 | Exercise static Icon source | `Source: Icon`; `Icon Mode: Static Icon`; choose the first available Icon; `Variable Name: County icon` | The variable summary changes to the selected icon, its generated tag is `{{county-icon}}`, and validation errors are absent. |
| 112 | Exercise Data-Driven Icon source and mappings | `Icon Mode: Data-Driven Icon`; `Data Column: Vaccination Coverage Group`; assign icons to at least `70% or More` and `No Data`; click `Add Icon Mapping`, enter a custom value and icon, then remove that mapping | The summary identifies the data-driven column. Each selected source value retains its icon mapping; the custom row is added and removed without altering fixture-derived rows. |
| 113 | Exercise Data File Metadata source | `Source: Data File Metadata` | Because the bundled CSV has no metadata, the editor displays `This config does not currently contain any data file metadata.` and no `Metadata Field` control. Record the metadata field/name/formatting branch as unavailable for this fixture. |
| 114 | Delete the variable, then disable markup variables | `Delete Variable` and confirm; `Enable Markup Variables` off | The variable summary disappears, then all variable authoring controls collapse. Advanced Options contains no authored variable and `enableMarkupVariables` is false. |

### Keyboard and focus verification

| # | User action | Input or selection | Expected visible result |
| --- | --- | --- | --- |
| 115 | Using only Tab, Shift+Tab, arrow keys, Enter, Space, and Escape, operate the rendered State and County selectors, authored filter, legend item and `Show All`, location highlighter and reset, table search/collapse/download controls, zoom controls, and a click-detail modal | Select Alabama and Autauga; isolate then restore one legend range; select then clear one highlighter location; search then clear Autauga; open and close the detail modal | Each control receives a visible focus indicator and exposes its visible label as its accessible name. Selection changes produce the same map/table results asserted above. The modal moves focus inside when opened, Escape or its close control dismisses it, focus returns to the invoking control, and no hidden detail remains. Restore the full-state, unfiltered view after the check. |

## Final Acceptance Criteria

- The new-editor workflow uses only `United States: County Sample Data` and produces a U.S. county data map.
- All 3,047 data rows import without truncating leading-zero FIPS strings.
- The visible Canvas has a non-zero rendered size, the exact accessible name asserted in step 27, and remains nonblank after each
  topology, classification, pattern, focus, HSA, layer, palette, and zoom redraw.
- Autauga County resolves from `01001` to `34.13`, Aleutians East Borough resolves from `02013` to `99.99`, and
  neither is treated as unmatched.
- State and county selectors focus the Canvas and supporting output consistently; neighboring-state data and HSA
  boundaries visibly follow their settings.
- Numeric and categorical branches show only their applicable controls and produce their exact requested legend
  content, ordering, and grouping.
- Every visible/applicable control named in the panel inventory below is either exercised above with rendered,
  interaction, accessibility, download, navigation, or generated-configuration evidence, or explicitly classified
  as unavailable/inapplicable.
- CSV and PNG downloads use the configured labels, the expected CSV/title-derived filenames, and only the requested
  visible data/context.
- Custom layers and link navigation use deterministic local interception; no live external request or destination is
  opened.
- Intentional validation messages are visible and explained; no unexpected editor error state, JavaScript error,
  unhandled rejection, or console error occurs.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: Generated JSON is inspected in `Advanced Options` only as immediate evidence for controls that
  lack a separate rendered effect; no save/reload contract is asserted.
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- The map title uses the heading level selected by `Title Style` and is absent from the page when `Show Title` is off.
- The county Canvas exposes the exact image accessible name asserted in step 27.
- Zoom controls are keyboard-focusable buttons named `Zoom In`, `Zoom Out`, and, after movement, `Reset Zoom`.
- State, county, authored filter, location-highlighter, table-search, download, legend-item, and collapse controls are
  keyboard operable and expose their visible labels as accessible names.
- Hover details disappear when the pointer leaves; click details open a focus-managed popover modal.
- The table exposes `County vaccination sample data table.` as its screen-reader description.
- Pattern contrast failure is conveyed by visible text, not color alone.
- The static alt-text description is available to assistive technology in addition to the generated map title.

## Applicability Inventory

| Section or setting | Status for this regression | Reason |
| --- | --- | --- |
| Type, General, Columns, Legend, Filters, Footnotes, Data Table, Interactivity, Visual, Custom Map Layers, Pattern Settings, Markup Variables | Visible and covered | These panels render for a `us-county` data map. |
| Dot Density | Hidden/unavailable | It requires developer mode and an enabled experimental dot-density configuration; the bundled county data-map workflow does not expose it. |
| Time Playback and `Enable Time Playback` | Hidden/unavailable | Playback supports standard U.S. state and world maps, not `us-county`. |
| Bubble Layers | Hidden/unavailable | The panel is limited to state-level U.S. and world data maps. |
| Text Annotations | Hidden/unavailable | The editor intentionally excludes this panel for `us-county`. |
| Small Multiples | Hidden/unavailable | The panel supports `us`, `single-state`, and `us-region`, not `us-county`. |
| `Display As Hex Map`, `Show state labels`, hex shape groups | Hidden/unavailable | State-level U.S. controls; a county Canvas cannot become a hex map. |
| `Display Shapes on Hex Map` | Visible but inapplicable | The toggle is rendered, but without `Display As Hex Map` it cannot reveal shape settings or affect county output. |
| `Filter Controlling County Census Year` | Visible but inapplicable to the fixture | None of the bundled sample's columns contains supported county-topology years; direct census-year selection is covered instead. |
| Navigation map type and `Navigation Behavior` | Hidden/unavailable | Navigation is not offered for `us-county`; only Data and Geocode are offered. |
| `Filter Controlling State Picked`, `States Selector`, `Hide Unselected States` | Hidden/unavailable | Single-state geography only. |
| Countries selector, `Hide Unselected Countries`, `Zoom Focus` | Hidden/unavailable | World geography only. |
| `Show Clear Selection Button` | Hidden/unavailable | State-level U.S. geography only. |
| Latitude/Longitude rendering, city marker shapes, `Geocode Circle Size` | Visible configuration but inapplicable to fixture output | The bundled county fixture has no coordinate columns; values are covered as generated configuration without claiming point output. |
| `Data File Metadata` alt-text field and markup-variable metadata formatting | Conditional branch unavailable | CSV import provides no sibling JSON metadata, so the editor must show its explicit no-metadata message. |
| URL-backed dataset link settings | Hidden/unavailable | The bundled sample is local, not URL-backed. |
| Dashboard-only data-table link and filter-footnote settings | Hidden/unavailable | The workflow creates a standalone map, not a dashboard child. |
| Dynamic footnote dataset and column mappings | Visible selector, unavailable branch | Standalone map import populates `config.data`, not the dashboard `datasets` collection required by the dynamic-footnote selector. |
| Leaflet theme and developer-only custom palette/wrapper controls | Hidden/unavailable | They require Leaflet geography or developer mode. |
| Modern Styles action | Available outside the accordion but not a county setting | It is a cross-visualization modernization workflow and is not part of the approved setting inventory. |
| Advanced Options | Evidence aid only | It verifies immediate generated configuration where no rendered effect exists; the script does not edit JSON or claim persistence. |

## Notes

- This script deliberately covers shared controls as well as county-only controls because MAP-004's approved scope is
  exhaustive. Run it from top to bottom; later steps depend on restored settings from earlier branches.
- County geography is Canvas-rendered. Use the rendered state/county selectors, details, legend, data table, accessible
  zoom controls, and visible Canvas redraws; do not expect per-county SVG elements.
- The topology itself may be loaded by the application, but the Custom Map Layers test must use the repository fixture
  through a local deterministic interception and must never call an arbitrary live layer.
- Screenshots may be retained for diagnosis, but they are not the pass/fail oracle.
- Automated story: not created; automation requires separate approval.
