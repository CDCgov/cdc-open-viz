# Regression: SPARK-001 — Build and configure a Sparkline

## Purpose

Protect the documented Sparkline authoring workflow from Line-chart selection and deterministic data import through
the Chart Type conversion, required Data Series and Date/Category Axis choices, and completed Sparkline output.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes

## Test Data

- Source: Inline CSV uploaded as `sparkline-regression.csv`
- Required columns:
  - `Time Period`: monthly dates used for the Sparkline's date axis
  - `Outreach Participants`: numeric values used for its single data series
- Values important to this regression:

```csv
Time Period,Outreach Participants
01/01/2016,10
02/01/2016,14
03/01/2016,12
04/01/2016,18
05/01/2016,17
06/01/2016,25
```

## Preconditions

- Start with an empty editor configuration.
- Use the inline CSV; do not call a live data source or load a remote example configuration.
- Select Spark Line as the Chart Type before adding the data series.

## Steps and Expected Results

| #   | User action                              | Input or selection                                                    | Expected visible result                                                                                                              |
| --- | ---------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Select a visualization from the chooser  | `Line`                                                                | The editor displays the numbered workflow tabs, including `2. Import Data`.                                                          |
| 2   | Open `2. Import Data` and upload the CSV | `sparkline-regression.csv`                                            | `Data Preview` shows both column headings and exactly six rows, including the January and June endpoint values.                      |
| 3   | Set the import choices                   | `Vertical`; multiple series `No`                                      | The Vertical and No choices are active, and `Configure your visualization` is available.                                             |
| 4   | Continue to configuration                | Click `Configure your visualization`                                  | The Chart editor identifies Add Data Series and Data Key as missing, and no completed chart renders.                                 |
| 5   | Use each missing-field alert action      | Open Data Series, then Date/Category Axis                             | Each action opens its named section and focuses Add Data Series or Data Key.                                                         |
| 6   | Configure General                        | Chart Type `Spark Line`; title `Outreach Trend`; message and citation | Sparkline-only editor structure replaces the Line structure; the authored text appears after required fields are complete.           |
| 7   | Add the data series                      | `Outreach Participants`                                               | The Add Data Series alert disappears while Data Key remains, and the incomplete visualization still does not render.                 |
| 8   | Configure the Date/Category Axis         | Date (Linear Scale); Data Key `Time Period`; formats `%m/%d/%Y`       | The Data Key alert disappears and one 100-pixel-high Sparkline renders with January and June endpoint ticks.                         |
| 9   | Inspect the completed Sparkline          | No additional input                                                   | The title, message, citation, line path, ending arrow, exact endpoint dates, and accessible chart name are present without a legend. |

## Final Acceptance Criteria

- The complete chooser → import → Chart Type → required-field setup finishes without an error state.
- Data Preview contains `Time Period` and `Outreach Participants` and exactly six imported rows.
- Before setup, separate accessible alerts identify Add Data Series and Data Key and focus the correct controls.
- Spark Line is selected before `Outreach Participants` is added as the only data series.
- One accessible `svg.sparkline` is 100 pixels high and contains one non-empty line path with an ending arrow.
- The axis displays `01/01/2016` and `06/01/2016` as its endpoint dates.
- `Outreach Trend`, `Monthly outreach participation`, and `Source: regression fixture` render in the Sparkline layout.
- No rendered legend or data table is present.
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
  Sparkline Visual and Filters settings.
- Automated story: `packages/editor/src/_stories/SPARK-001.Regression.stories.tsx`
