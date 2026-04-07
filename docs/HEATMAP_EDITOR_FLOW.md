# HeatMap Editor Flow

This document describes the current authoring and runtime contract for `HeatMap`.

## Summary

`HeatMap` V1 is intentionally series-driven.

It uses:

- `xAxis.dataKey` for heatmap columns
- `series[]` for heatmap rows
- each selected series column as the numeric cell value source

This is a deliberate product decision, not an incidental implementation detail. The editor, runtime validation, transform helpers, tooltip behavior, and example fixtures should all follow this model.

## Authoring Model

HeatMap currently supports one editor grammar:

- `Date/Category Axis` chooses the horizontal dimension
- `Data Series` chooses the row set
- `HeatMap Settings` controls display-only heatmap options such as `cellPadding`
- `Left Value Axis` controls row-axis presentation, not numeric value mapping

There is no V1 `(x, y, value)` long-form mapping flow in the editor.

## Required Config

The minimum required HeatMap config is:

- `visualizationType: 'HeatMap'`
- `xAxis.dataKey`
- at least one `series` entry

Example shape:

```json
{
  "visualizationType": "HeatMap",
  "xAxis": { "dataKey": "day", "type": "categorical" },
  "series": [
    { "dataKey": "January", "name": "January", "type": "HeatMap" },
    { "dataKey": "February", "name": "February", "type": "HeatMap" }
  ],
  "heatmap": { "cellPadding": 2 }
}
```

## Data Shape

HeatMap expects wide data.

Example:

```json
[
  { "day": 1, "January": 47, "February": 76 },
  { "day": 2, "January": 64, "February": 93 }
]
```

Interpretation:

- each row in the dataset contributes one x-axis position
- each selected series column becomes one heatmap row
- each cell value comes from `row[series.dataKey]`

## Transform Rules

The main transform lives in [`helpers.ts`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/chart/src/components/HeatMap/helpers.ts).

Current behavior:

- x values are deduplicated from `xAxis.dataKey`
- date/date-time x values are sorted ascending
- rows are ordered by the current `series[]` order
- duplicate `(x, series)` cells are aggregated by numeric sum
- missing `(x, series)` combinations become empty cells with `null` value
- non-numeric series values are skipped

## Editor Behavior

The main editor wiring lives in [`EditorPanel.tsx`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/chart/src/components/EditorPanel/EditorPanel.tsx).

HeatMap-specific behavior:

- `Data Series` is required
- `Add Data Series` excludes the selected `xAxis.dataKey`
- the grouped list label is `Displaying Rows`
- reordering the series changes the rendered row order
- `HeatMap Settings` does not own a value-column selector in V1
- `Left Value Axis` does not own row-field mapping in V1

## Runtime Validation

Validation is enforced in:

- [`CdcChartComponent.tsx`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/chart/src/CdcChartComponent.tsx)
- [`missingRequiredSections.ts`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/core/helpers/missingRequiredSections.ts)

HeatMap is invalid when:

- `xAxis.dataKey` is missing
- `series[]` is empty

Expected editor error messages should reference:

- `Date/Category Axis`
- `Data Series`

They should not reference legacy row/value mapping sections.

## Tooltip And Table Behavior

Tooltip and table behavior should follow the series-driven contract.

Tooltip behavior:

- x label comes from `xAxis.dataKey`
- row label comes from `series.name` or series label fallback
- cell value uses the numeric series value
- additional tooltip columns may be shown if they are not the x-axis field or one of the selected series columns

Data table behavior:

- include `xAxis.dataKey`
- include selected series columns
- include extra configured columns when enabled

## Legend And Palette

HeatMap uses a value legend, not a categorical series legend.

Current expectations:

- legend style is `gradient`
- default legend position is `top`
- sequential palettes are the supported palette model

The legend describes numeric intensity across all rendered cells.

## Intentionally Unsupported In V1

These are intentionally out of scope unless the product direction changes:

- long-form `(x, y, value)` authoring
- dual authoring modes
- series-isolate legend behavior
- small multiples
- brush/mini-chart interactions
- line/bar/point-specific styling controls
- row mapping through `Left Value Axis`

## Files To Check When Changing HeatMap

- [`HeatMap.tsx`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/chart/src/components/HeatMap/HeatMap.tsx)
- [`HeatMapGradientLegend.tsx`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/chart/src/components/HeatMap/HeatMapGradientLegend.tsx)
- [`helpers.ts`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/chart/src/components/HeatMap/helpers.ts)
- [`EditorPanel.tsx`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/chart/src/components/EditorPanel/EditorPanel.tsx)
- [`Panel.General.tsx`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/chart/src/components/EditorPanel/components/Panels/Panel.General.tsx)
- [`CdcChartComponent.tsx`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/chart/src/CdcChartComponent.tsx)
- [`missingRequiredSections.ts`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/core/helpers/missingRequiredSections.ts)
- [`getDataSeriesColumns.ts`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/core/components/DataTable/helpers/getDataSeriesColumns.ts)
- [`ChooseTab.tsx`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/editor/src/components/ChooseTab.tsx)
- [`calendar-heatmap.json`](/Users/vidaliseghohimen/Documents/cdc-open-viz/packages/chart/examples/feature/heatmap/calendar-heatmap.json)

## Guardrail

If future work needs tidy `(x, y, value)` datasets, treat that as a new product decision and design pass, not a silent fallback.

Otherwise the editor will drift back into two competing mental models, which is how nice features become folklore.
