# `@cdc/chart` Configuration Reference

This document describes the supported configuration contract for `@cdc/chart`.

Shared nested types such as `Axis`, `Table`, `Legend`, `Series`, `Runtime`, `Annotation`, `Region`, `BoxPlot`, `ConfidenceInterval`, `VizFilter`, and `FilterBehavior` are shared across packages and should be referenced from the canonical `@cdc/core` config reference:
[packages/core/CONFIG.md](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md)

## Organization

The chart config is documented in the order the package typically evaluates it:

| Section | Covers |
| --- | --- |
| Identity and data source | Package identity, versioning, and input data |
| Chart setup | Visualization type, orientation, axes, series, and data shaping |
| Copy and authored content | Titles, descriptions, intro text, and markup variables |
| Layout and appearance | Theme, sizing, formatting, and shell options |
| Feature-specific enhancements | Annotations, regions, small multiples, forest plots, radar, Sankey, and similar chart variants |
| Fields You Can Ignore | Runtime state, editor artifacts, and legacy migration leftovers |

## Minimum Working Config

For the copy-pasteable minimum config, use the example in [README.md](./README.md). The source of truth for that example lives at `packages/chart/examples/minimal-example.json`, and automated tests keep the README block in sync with that file.

All other package fields are optional and will be backfilled from package defaults unless you override them.

## Identity and Data Source

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `type` | `string` | Yes | None | Identifies the visualization package. | Must be `chart` for standalone chart configs. |
| `version` | [`Version`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#version) | Yes | None | Saved config version used by migration logic. | Keep this current so old saved configs can be upgraded safely. |
| `data` | `object[]` | Conditionally | `[]` | Inline dataset rendered by the chart. | Required when `dataUrl` is not provided. |
| `dataUrl` | `string` | Conditionally | None | Remote JSON or CSV URL fetched at load time. | If both `data` and `dataUrl` are present, the fetched data wins. |
| `dataDescription` | [`DataDescription`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#datadescription) | No | None | Shared developer-standardization metadata for fetched data. | Used only when the chart loads remote data. |
| `dataMetadata` | `Record<string, string>` | No | None | Metadata dictionary exposed to markup variables and editor flows. | Usually populated automatically from remote data fetches. |
| `locale` | `string` | No | Browser/runtime default | Locale used for number and date formatting. | Any valid `Intl` locale is accepted. |

## Chart Setup

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `visualizationType` | `string` | Yes | None | Chooses the chart family and which renderer mounts. | Common values: `Bar`, `Line`, `Combo`, `Pie`, `Radar`, `Scatter Plot`, `Spark Line`, `Forest Plot`, `Sankey`, `Bump Chart`, `Forecasting`, `Horizon Chart`, `Box Plot`, `Warming Stripes`. |
| `visualizationSubType` | `string` | No | `regular` | Selects the sub-mode within a chart family. | Often used for `stacked`, `horizontal`, and legacy compatibility modes. |
| `orientation` | `vertical \| horizontal` | No | `vertical` | Controls the primary chart orientation. | `Bar` charts often switch render paths based on this field. |
| `xAxis.dataKey` | `string` | Conditionally | None | Column used as the x-axis/category field. | Required for all non-pie charts. |
| `yAxis.dataKey` | `string` | Conditionally | None | Column used as the pie or measure field. | Required for `Pie` charts. |
| `series` | `Series` | Conditionally | `[]` | Measure series to render. | Required for all non-pie charts unless `dynamicSeries` is enabled. |
| `columns` | `Record<string, Column>` | No | `{}` | Column-level display and formatting overrides. | Column configs drive labels, prefixes, suffixes, and table visibility. |
| `dynamicSeries` | `boolean` | No | `false` | Lets the chart generate series from the loaded dataset. | Useful when authoring against unknown or changing columns. |
| `dynamicSeriesType` | `string` | No | None | Type assigned to generated series. | Consumed by dynamic-series runtime helpers. |
| `dynamicSeriesLineType` | `string` | No | None | Line style assigned to generated series. | Used for dynamic line/combination charts. |
| `sortData` | `ascending \| descending` | No | `descending` | Sort order for the rendered dataset. | Applied during chart data preparation. |
| `rankByValue` | `asc \| desc` | No | `desc` | Controls value-based ranking when the chart sorts by rank. | Mostly relevant to bar-style charts. |
| `filters` | `VizFilter[]` | No | `[]` | Interactive filters that narrow the active dataset. | Shared filter contract from `@cdc/core`. |
| `filterBehavior` | `FilterBehavior` | No | `Filter Change` | Chooses whether filters apply immediately or through a button. | `Filter Change`, `Apply Button`. |
| `exclusions` | `object` | No | `{ active: false, keys: [] }` | Hides specific x-axis values or date ranges from the chart. | Category and date exclusions are handled differently at runtime. |
| `confidenceKeys` | `Record<'lower' \| 'upper', string>` | No | `{}` | Names the lower and upper confidence interval columns. | Used by chart families that support confidence intervals. |
| `preliminaryData` | `object[]` | No | `[]` | Editor-managed suppression/effect overlay rows. | Mostly used for legacy suppression and effect data handling. |
| `suppressedData` | `object[]` | No | `[]` | Legacy suppression metadata shown in some chart flows. | Usually generated by editor or migration logic. |
| `highlightedBarValues` | `object[]` | No | `[]` | Explicit value-to-style overrides for selected bars. | Used by highlight and comparison scenarios. |

## Copy and Authored Content

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `title` | `string` | No | `''` | Main chart title. | Hidden when empty or when `showTitle` is `false`. |
| `superTitle` | `string` | No | `''` | Supporting title rendered above the main title. | Commonly used for short context labels. |
| `introText` | `string` | No | `''` | Introductory text rendered above the chart body. | Supports markup variables when enabled. |
| `description` | `string` | No | `''` | Description or subtext rendered with the chart. | Often used for source notes and context. |
| `legacyFootnotes` | `string` | No | `''` | Legacy footnote field retained for backward compatibility. | Prefer the dedicated footnotes flow when possible. |
| `chartMessage.noData` | `string` | No | `No Data Available` | Message shown when the chart has no renderable data. | Usually only visible after filtering or data loading failures. |
| `enableMarkupVariables` | `boolean` | No | `false` | Enables placeholder replacement in supported text fields. | Shared behavior with markup variables documented in core. |
| `markupVariables` | [`MarkupVariable[]`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#markupvariable) | No | `[]` | Defines placeholder tags available to authored text. | Shared markup variable contract from `@cdc/core`. |

## Layout and Appearance

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `theme` | [`ComponentThemes`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#componentthemes) | No | `theme-blue` | Shared shell theme token. | Controls shell classes and some chart accents. |
| `showTitle` | `boolean` | No | `true` | Shows or hides the main title area. | `true`, `false`. |
| `showSidebar` | `boolean` | No | `true` | Shows the side panel in editor-like flows. | Mostly editor-facing, but persisted in saved configs. |
| `titleStyle` | `legacy \| large \| small` | No | `small` | Chooses the title treatment. | `legacy`, `large`, `small`. |
| `heights.vertical` | `number` | No | `300` | Default vertical chart height. | Used when the chart is rendered vertically. |
| `heights.horizontal` | `number` | No | `750` | Default horizontal chart height. | Used when the chart is rendered horizontally. |
| `heights.mobileVertical` | `number` | No | `300` | Mobile height for vertical layouts. | Used in responsive chart layouts. |
| `barHeight` | `number` | No | `25` | Base bar height in bar and combo charts. | Affects row spacing and label placement. |
| `barSpace` | `number` | No | `15` | Space between bars. | Mostly used in bar and combo charts. |
| `barThickness` | `number` | No | `0.35` | Relative bar thickness. | Influences grouped and stacked bar rendering. |
| `barStyle` | `lollipop \| rounded \| flat` | No | `''` | Chooses the bar shape treatment. | Legacy defaults may leave this blank until set in the editor. |
| `barHasBorder` | `'true' \| 'false'` | No | `'true'` | Toggles bar borders. | Stored as a string for backward compatibility. |
| `isLollipopChart` | `boolean` | No | `false` | Renders bars as lollipop charts. | Often pairs with `lollipopShape` and `lollipopColorStyle`. |
| `lollipopShape` | `string` | No | `circle` | Shape used for lollipop heads. | Common values: `circle`, `square`. |
| `lollipopColorStyle` | `regular \| two-tone` | No | `two-tone` | Chooses lollipop color treatment. | Changes how the head and stick colors are resolved. |
| `lineDatapointStyle` | `hidden \| always show \| hover` | No | `hover` | Controls line chart point visibility. | Affects line and combo charts. |
| `lineDatapointColor` | `Same as Line \| Lighter than Line` | No | `Same as Line` | Chooses the point color relative to the line. | Affects line markers and hover styles. |
| `labels` | `boolean` | No | `false` | Shows value labels on supported chart types. | Especially visible on bar-style charts. |
| `isResponsiveTicks` | `boolean` | No | `false` | Enables responsive tick handling. | Helpful for dense x-axis labels. |
| `roundingStyle` | `string` | No | `standard` | Chooses the numeric rounding strategy. | The editor may expose additional labels, but runtime still uses the persisted value. |
| `tipRounding` | `string` | No | `top` | Controls tooltip rounding behavior. | Legacy-friendly display option. |
| `dataFormat` | `object` | No | `{}` | Controls global number formatting. | Includes prefix/suffix, comma handling, and rounding knobs used across chart families. |
| `tooltips` | `object` | No | `{}` | Tooltip display settings. | Controls opacity, single-series mode, and tooltip date formatting. |
| `topAxis.hasLine` | `boolean` | No | `false` | Draws a top axis line in supported chart types. | Mostly used by bar and line layouts. |
| `visual` | `object` | No | `{}` | Shared chart shell styling flags. | Includes border/background toggles, hover lines, and TP5 treatment flags. |
| `twoColor.palette` | `string` | No | `monochrome-1` | Palette used for two-color chart variants. | Used when the chart switches to a two-color style. |
| `isPaletteReversed` | `boolean` | No | `false` | Reverses the active palette order. | Often used with sequential palettes. |

## Feature-Specific Enhancements

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `smallMultiples` | `object` | No | `undefined` | Splits one chart into multiple tiles. | Supports tile order, per-tile titles, synchronized tooltips, and independent axes. |
| `forestPlot` | `object` | No | `{}` | Forest plot-specific rendering settings. | Includes row height, labels, pooled results, and scaling controls. |
| `horizon` | `object` | No | `undefined` | Horizon chart settings. | Controls band count, spacing, and padding. |
| `radar` | `object` | No | `undefined` | Radar chart display settings. | Controls rings, points, fill opacity, and axis label offset. |
| `sankey` | `object` | No | `{}` | Sankey layout, sizing, and color settings. | Includes node width, padding, margins, opacity, and story node text. |
| `boxplot` | `object` | No | `{}` | Box plot labels and plot metadata. | Shared box plot shape from `@cdc/core`; chart-specific config adds the plot collection. |
| `annotations` | `Annotation[]` | No | `[]` | Overlay annotations on the chart canvas. | Shared annotation contract from `@cdc/core`. |
| `regions` | `Region[]` | No | `[]` | Shaded date or category regions. | Shared region contract from `@cdc/core`. |
| `allowLineToBarGraph` | `boolean` | No | `undefined` | Allows a line chart to convert to a bar chart when needed. | Used by legacy and migration flows. |
| `showLineSeriesLabels` | `boolean` | No | `false` | Shows series labels directly on line and combo charts. | Only meaningful for line-capable visualizations. |
| `colorMatchLineSeriesLabels` | `boolean` | No | `false` | Matches line-series labels to their series colors. | Requires line-series labels to be enabled. |
| `showAreaUnderLine` | `boolean` | No | `false` | Fills the area below line series. | Primarily used by line and small-multiple line charts. |
| `stackedAreaChartLineType` | `string` | No | `Linear` | Chooses the curve used by stacked area charts. | Mapped to the supported curve set in the editor. |
| `rankByValue` | `asc \| desc` | No | `desc` | Value ranking used by some bar and combo flows. | Also influences dynamic-series ordering. |
| `preliminaryData` | `object[]` | No | `[]` | Hidden suppression or effect rows. | Mostly legacy and editor-managed. |

## Fields You Can Ignore

These fields sometimes appear in saved configs, copied editor state, or migration output, but consumers generally do not need to author or maintain them:

| Field or group | Why you can ignore it |
| --- | --- |
| `runtime.*` | Internal runtime state created while the chart is loading and transforming data. |
| `formattedData` | Runtime-transformed data snapshot, not part of the authoring contract. |
| `runtimeDataUrl` | Runtime-managed URL after filters are applied. |
| `uid` | Generated identifier used for shared filters and internal wiring. |
| `newViz` | Editor confirmation flag. |
| `debugSvg` | Debug-only renderer flag. |
| `showDownloadMediaButton` | Legacy editor/export artifact. |
| `padding` | Internal layout padding object preserved for compatibility. |
| `area` | Legacy area-chart metadata. |
| `brush` | Brush state managed by the renderer. |
| `xScale`, `yScale` | Runtime scale functions, not authored config. |
| `allowLineToBarGraph` | Rare migration knob. Keep only when you need the line-to-bar conversion path. |
