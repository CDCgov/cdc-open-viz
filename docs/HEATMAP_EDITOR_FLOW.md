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

- `Date/Category Axis` chooses the horizontal dimension and controls x-axis line/tick visibility, rotation, and density; for HeatMap only, it also controls the x-axis position
- `Data Series` chooses the row set
- `HeatMap Settings` controls grid/cell display and color-encoding options such as `cellPadding`, label gaps, optional horizontal scrolling, data grouping, and cell values
- `Left Value Axis` controls row-axis presentation, including the row-axis label text, label placement, axis/tick visibility, and tick rotation. It does not control numeric value mapping.

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

The main transform lives in [`helpers/index.ts`](../packages/chart/src/components/HeatMap/helpers/index.ts).

Current behavior:

- x values are deduplicated from `xAxis.dataKey`
- date/date-time x values are sorted ascending
- rows are ordered by the current `series[]` order
- duplicate `(x, series)` cells are aggregated by numeric sum
- missing `(x, series)` combinations become empty cells with `null` value
- non-numeric series values are skipped

## Editor Behavior

The main editor wiring lives in [`EditorPanel.tsx`](../packages/chart/src/components/EditorPanel/EditorPanel.tsx).

HeatMap-specific behavior:

- `Data Series` is required
- `Add Data Series` excludes the selected `xAxis.dataKey`
- the grouped list label is `Displaying Rows`
- reordering the series changes the rendered row order
- `Hide Axis` and `Hide Ticks` are shown in `Date/Category Axis` and map to `xAxis.hideAxis` and `xAxis.hideTicks`
- `Number of ticks` is shown in `Date/Category Axis` and defaults to `Auto`; a positive value samples labels and tick marks evenly across the full x-domain, while `Auto` measures the available width. Cells are never removed by tick sampling. HeatMap does not expose the separate `Manual Ticks`/step-count mode.
- `X-Axis Position` is shown in `Date/Category Axis` for HeatMap only
- `Data Grouping` is shown in `HeatMap Settings`; values are clamped to 1-9 discrete value buckets
- `Enable Horizontal Scrolling` is opt-in and defaults off; when enabled, `Minimum Column Width` defaults to 44 pixels and is clamped to 1-400 pixels
- the scrollable grid has a 1,000,000-pixel safety cap, so exceptionally large domains can render narrower effective columns than the configured minimum
- horizontal scrolling activates only when the minimum column widths exceed the available grid width; the initial view starts at the first column, while row labels and axis titles remain fixed
- `HeatMap Settings` does not own a value-column selector in V1
- `Left Value Axis` does not own row-field mapping in V1
- `Label Placement` is shown in `Left Value Axis` and defaults to `Side` for HeatMap; `yAxis.titlePlacement: "top"` renders the row-axis title above the row labels, aligned with the top x-axis title when one is visible, while side placement renders the rotated title centered beside the row labels
- switching back to `HeatMap` from another chart type preserves the selected `series[]` entries and normalizes them as HeatMap rows

## Runtime Validation

Validation is enforced in:

- [`CdcChartComponent.tsx`](../packages/chart/src/CdcChartComponent.tsx)
- [`missingRequiredSections.ts`](../packages/core/helpers/missingRequiredSections.ts)

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
- gradient legends use `linear blocks`; `smooth` is not exposed for HeatMap because HeatMap colors are quantized by data grouping
- gradient legends show one value-range label for each configured data group
- HeatMap does not expose legend tick rotation; gradient legend labels are fixed per-block labels for the current block scale
- default legend position is `top`
- the top legend uses compact spacing before the plot
- sequential palettes are the supported palette model

## Layout Behavior

- the default row-label gap is `0`; an explicitly configured positive gap still offsets the grid, and the x-axis line bridges that gap
- the default column-label gap is `15`
- cell width and height are calculated independently so the matrix fills the available plot width and height
- axis `size` values remain minimum reserved sizes; measured tick and title extents can require more room to prevent clipping
- rotated x- and y-axis labels reserve space on their respective edges

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

- [`HeatMap.tsx`](../packages/chart/src/components/HeatMap/components/HeatMap.tsx)
- [`HeatMapGradientLegend.tsx`](../packages/chart/src/components/HeatMap/components/HeatMapGradientLegend.tsx)
- [`helpers/index.ts`](../packages/chart/src/components/HeatMap/helpers/index.ts)
- [`EditorPanel.tsx`](../packages/chart/src/components/EditorPanel/EditorPanel.tsx)
- [`Panel.General.tsx`](../packages/chart/src/components/EditorPanel/components/Panels/Panel.General.tsx)
- [`CdcChartComponent.tsx`](../packages/chart/src/CdcChartComponent.tsx)
- [`missingRequiredSections.ts`](../packages/core/helpers/missingRequiredSections.ts)
- [`getDataSeriesColumns.ts`](../packages/core/components/DataTable/helpers/getDataSeriesColumns.ts)
- [`ChooseTab.tsx`](../packages/editor/src/components/ChooseTab.tsx)
- [`calendar-heatmap.json`](../packages/chart/examples/feature/heatmap/calendar-heatmap.json)

## Guardrail

If future work needs tidy `(x, y, value)` datasets, treat that as a new product decision and design pass, not a silent fallback.

Otherwise the editor will drift back into two competing mental models, which is how nice features become folklore.
