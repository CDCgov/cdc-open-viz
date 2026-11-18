# Regression: SPARK-001 — Build and configure a Sparkline

## Purpose

Protect the documented Sparkline authoring workflow from Line-chart selection and deterministic data import through
the Chart Type conversion, required Data Series and Date/Category Axis choices, filtered output, HTML text, and
Sparkline-specific Visual settings.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes

## Test Data

- Source: Inline CSV uploaded as `sparkline-regression.csv`
- Required columns:
  - `Time Period`: monthly dates used for the Sparkline's date axis
  - `Outreach Participants`: numeric values used for its single data series
  - `Group`: alternating A/B categories used to prove filter geometry, dates, and color stability
- Values important to this regression:

```csv
Time Period,Outreach Participants,Group
01/01/2016,10,A
02/01/2016,14,B
03/01/2016,12,A
04/01/2016,18,B
05/01/2016,17,A
06/01/2016,25,B
```

## Preconditions

- Start with an empty editor configuration.
- Use the inline CSV; do not call a live data source or load a remote example configuration.
- Select Spark Line as the Chart Type before adding the data series.

## Steps and Expected Results

| #   | User action                              | Input or selection                                                                                                                                                            | Expected visible result                                                                                                                                                                                               |
| --- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Select a visualization from the chooser  | `Line`                                                                                                                                                                        | The editor displays the numbered workflow tabs, including `2. Import Data`.                                                                                                                                           |
| 2   | Open `2. Import Data` and upload the CSV | `sparkline-regression.csv`                                                                                                                                                    | `Data Preview` shows all three column headings and exactly six rows, including the January/A and June/B endpoint values.                                                                                              |
| 3   | Set the import choices                   | `Vertical`; multiple series `No`                                                                                                                                              | The Vertical and No choices are active, and `Configure your visualization` is available.                                                                                                                              |
| 4   | Continue to configuration                | Click `Configure your visualization`                                                                                                                                          | The Chart editor identifies Add Data Series and Data Key as missing, and no completed chart renders.                                                                                                                  |
| 5   | Use each missing-field alert action      | Open Data Series, then Date/Category Axis                                                                                                                                     | Each action opens its named section and focuses Add Data Series or Data Key.                                                                                                                                          |
| 6   | Configure General                        | Chart Type `Spark Line`; title `Outreach Trend`; Message `<strong>Monthly outreach</strong> participation`; Subtext/Citation `<em>Source</em>: regression <sub>fixture</sub>` | Sparkline-only editor structure replaces the Line structure; after required fields are complete, the authored markup renders semantically without literal tags.                                                       |
| 7   | Add the data series                      | `Outreach Participants`                                                                                                                                                       | The Add Data Series alert disappears while Data Key remains, and the incomplete visualization still does not render.                                                                                                  |
| 8   | Configure the Date/Category Axis         | Date (Linear Scale); Data Key `Time Period`; formats `%m/%d/%Y`                                                                                                               | The Data Key alert disappears and one 100-pixel-high Sparkline renders with January and June endpoint ticks.                                                                                                          |
| 9   | Inspect the completed Sparkline          | No additional input                                                                                                                                                           | The title, semantic message/citation, non-empty line path, same-colored ending arrow, exact endpoint dates, and accessible chart name are present without a legend or data table.                                     |
| 10  | Add and describe a filter                | Filter `Group`; Filter intro text `<strong>Choose a group</strong>`; Note `<em>Alternating months</em>`                                                                       | Group defaults to A; the intro and note render semantically; the path changes to A's three points with January/May endpoints while its line and arrow retain the baseline color.                                      |
| 11  | Change the rendered filter               | Runtime `Filter by Group` = `B`                                                                                                                                               | The path changes again to B's three points with February/June endpoints while the line and arrow remain the baseline color.                                                                                           |
| 12  | Remove the authored filter               | Click `Remove`                                                                                                                                                                | The original path, January/June endpoints, and baseline line/arrow color return.                                                                                                                                      |
| 13  | Configure and restore Visual background  | Set Title Style `Legacy`; enable theme background; hide/show background; disable theme background; restore Title Style `Small (h3)`                                           | Legacy treatment exposes the Sparkline background controls; the body gains the background class, becomes transparent while hidden, restores the theme background, then returns to its original small-title treatment. |
| 14  | Inspect unsupported controls/output      | No additional input                                                                                                                                                           | Animate Visualization is absent, and no legend or data table renders.                                                                                                                                                 |

## Final Acceptance Criteria

- The complete chooser → import → Chart Type → required-field setup finishes without an error state.
- Data Preview contains `Time Period`, `Outreach Participants`, and `Group` and exactly six imported rows.
- Before setup, separate accessible alerts identify Add Data Series and Data Key and focus the correct controls.
- Spark Line is selected before `Outreach Participants` is added as the only data series.
- One accessible `svg.sparkline` is 100 pixels high and contains one non-empty line path with an ending arrow.
- The axis displays `01/01/2016` and `06/01/2016` as its endpoint dates.
- `Outreach Trend`, `Monthly outreach participation`, and `Source: regression fixture` render in the Sparkline layout;
  supported markup in Message and Subtext/Citation renders semantically without literal tags.
- Filter intro text and filter Note render their supported HTML semantically without literal tags.
- Group A renders January/May endpoints, Group B renders February/June endpoints, and filter removal restores
  January/June; every state has distinct expected geometry and one stable matching line/arrow color.
- Legacy title treatment exposes Sparkline theme-background and hide-background controls; they visibly change the
  rendered body before the original small-title treatment and default background state are restored.
- No rendered legend or data table is present.
- Animate Visualization is not offered because Spark Line does not support animation.
- No unexpected JavaScript errors, unhandled rejections, or window errors appear.

## Persistence Check

- Required: no
- User surface: not applicable
- Reconstruction: not applicable
- Serialized checks: not applicable
- Expected result after reload: not applicable

## Accessibility or Interaction Check

- Each missing-field alert has an accessible action that opens the correct editor section and focuses its required control.
- The configured Sparkline is exposed as an image named `Spark Line chart with the title: Outreach Trend`.

## Notes

- This regression covers the integrated documented setup path. Focused follow-up coverage retains ownership of
  exhaustive palette, pattern, annotation, and axis settings.
- Spark Line intentionally does not support Legend, Data Table, Donut, Super Title, legacy Footnotes, labels-on-data,
  or Animate Visualization controls.
- Automated story: `packages/editor/src/_stories/SPARK-001.Regression.stories.tsx`
