# Regression: FORECAST-001 — Build and configure a Forecast Chart

## Purpose

Protect the complete Forecast Chart authoring path: imported precomputed stage and confidence-bound columns must
become two visibly distinct forecast stages with two nested confidence intervals, sorted expanded legend semantics,
an exact hover tooltip, and synchronized table data.

## Visualization

- Type: Chart
- Starting point: New visualization
- Editor mode: yes
- Storybook area: `Regression Tests/Chart Scripts/Forecast Chart`

## Test Data

Upload `forecast-chart-regression.csv` from this exact inline fixture:

```csv
Date,Stage,Lower 50%,Upper 50%,Lower 90%,Upper 90%
2026-01-01,Estimate,90,110,75,125
2026-01-08,Estimate,98,118,82,135
2026-01-15,Estimate,105,126,88,144
2026-01-22,Forecast,101,130,80,154
2026-01-29,Forecast,96,132,72,160
2026-02-05,Forecast,91,136,65,168
```

The two stages and nested intervals distinguish stage derivation, interval identity, and percentage sorting. The 90%
group is authored before the 50% group so legend order cannot merely follow insertion order.

## Preconditions

- Start the single `FORECAST001` story from an empty `CdcEditor` configuration.
- Use only the inline CSV; do not call a live endpoint.
- Complete the entire workflow in one continuing editor session.
- Treat the uploaded bounds as precomputed inputs; this workflow does not generate a forecast.

## Steps and Expected Results

| #   | User action                                | Input                                                                                          | Expected visible result                                                                                                                                           |
| --- | ------------------------------------------ | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Choose Forecast Chart and open Import Data | Upload the fixture                                                                             | Data Preview shows all six exact headings and all six exact rows                                                                                                  |
| 2   | Complete Data Designer                     | Vertical; No                                                                                   | Both choices are visibly active and Configure becomes available                                                                                                   |
| 3   | Configure the visualization                | No series mapped                                                                               | The local “At least one series is required” warning appears, shared required-field alerts are absent, and no forecast bands render                                |
| 4   | Add the sole data series                   | Stage                                                                                          | Estimate Series Color and Forecast Series Color controls appear; the local warning clears                                                                         |
| 5   | Configure the date axis                    | Data Scaling Type Date (Date Time Scale); Data Key Date; parse/display/hover format `%Y-%m-%d` | The visible date axis includes the first and last imported dates without rendering forecast bands before interval mapping                                         |
| 6   | Assign stage palettes                      | Estimate sequential blue; Forecast sequential orange                                           | The controls retain those exact palettes; incomplete interval mappings still render no bands                                                                      |
| 7   | Add the first confidence group             | Low `Lower 90%`; High `Upper 90%`                                                              | Selecting only Low still renders no bands; completing High renders two active, visible stage bands in the intended blue/orange fills                              |
| 8   | Add the second confidence group            | Low `Lower 50%`; High `Upper 50%`                                                              | Selecting only Low adds no groups; completing High renders four uniquely keyed, active, finite bands, with each 50% band geometrically nested within its 90% band |
| 9   | Inspect the expanded legend default        | No new input                                                                                   | Visible labels are exactly 50% CI Estimate, 50% CI Forecast, 90% CI Estimate, 90% CI Forecast despite reverse authoring order                                     |
| 10  | Toggle confidence legend expansion         | Off, then on                                                                                   | Legend contracts to Estimate and Forecast, then restores all four CI/stage labels while the same four bands remain active and visible                             |
| 11  | Enable bound columns in the tooltip        | Show in tooltip for all four CI columns                                                        | Each intended column owns a checked tooltip control and remains synchronized with forecast hover output                                                           |
| 12  | Inspect hover behavior                     | Move over the 2026-01-22 Forecast region                                                       | The tooltip reports the exact date, `Stage: Forecast`, and values 101, 130, 80, and 154 under their matching bounds                                               |
| 13  | Inspect supporting data                    | Expand Data Table                                                                              | Every fixture heading appears and all six rows retain each exact value under its matching heading; displayed long-form dates normalize to the uploaded ISO dates  |

## Final Acceptance Criteria

- Empty-editor import and Data Designer preserve every fixture heading and row.
- The current Forecast validation exemption is characterized without inventing shared required-field navigation.
- Stage selection derives both stages and exposes both palette controls.
- Authoring 90% before 50% produces four semantic bands but percentage-sorted expanded legend labels.
- Every band is active, effectively visible, uniquely keyed, and has finite nonempty area geometry; 50% bands are nested within 90% bands.
- Legend contraction and restoration do not remove or deactivate forecast bands.
- Tooltip and data-table output retain the exact uploaded date, stage, and confidence bounds regardless of table presentation order or equivalent long-form date display.

## Persistence Check

- Required: no.

## Accessibility or Interaction Check

- Locate chooser, import navigation, Configure, accordion sections, and editor controls by accessible role or label
  where the product provides one.
- Scope repeated series/group/column controls through their visible owning item.
- Use renderer-derived selectors only for forecast SVG bands, paths, hover regions, and tooltip content without
  accessible roles.

## Notes

- Forecast Chart consumes precomputed stages and bounds; it has no horizon, model, period, or generation controls.
- Forecasting currently bypasses shared required-field alerts and builds bands from raw rather than filtered data.
- Gap segmentation, palette migration, legacy legend defaults, and exhaustive legend isolation remain covered by
  existing focused Forecast stories.
- No production-code change is authorized by this script.
- Automated story: `packages/editor/src/_stories/FORECAST-001.Regression.stories.tsx`
