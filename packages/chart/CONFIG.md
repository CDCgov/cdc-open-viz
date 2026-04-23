# `@cdc/chart` Configuration Reference

This document describes the supported configuration contract for `@cdc/chart`.

Shared nested types such as `Axis`, `Series`, `Legend`, `Table`, `Runtime`, `Annotation`, `Region`, `BoxPlot`, `ConfidenceInterval`, `VizFilter`, `FilterBehavior`, `MarkupVariable`, `Footnotes`, and `General` are documented in the [`@cdc/core` config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

To follow those shared types locally, use `packages/core/CONFIG.md` in this monorepo or `node_modules/@cdc/core/CONFIG.md` in an installed app. If neither path is available, use the GitHub link above.

## Organization

The chart config is documented in the order the package typically evaluates it:

| Section | Covers |
| --- | --- |
| Identity and data source | Package identity, versioning, and input data |
| Chart setup | Visualization type, axes, series, and data shaping |
| Copy and authored content | Titles, descriptions, footnotes, and markup variables |
| Layout and appearance | Theme, sizing, formatting, palette, and shell options |
| Feature-specific enhancements | Annotations, regions, small multiples, forest plots, radar, Sankey, and similar chart variants |
| Fields You Can Ignore | Runtime state, editor artifacts, and legacy migration leftovers |

## Minimum Working Config

For a copy-pasteable minimum config, use the example in [README.md](./README.md). The source of truth for that example lives at `packages/chart/examples/minimal-example.json`, and automated tests keep the README block in sync with that file.

For standalone chart configs, the minimum working path is usually:

* `type`
* `version`
* `visualizationType`
* a data source via `data` or `dataUrl`
* `xAxis.dataKey`
* `series` for non-pie charts

Dashboard flows can also select data from `datasets` with `dataKey`.

## Identity and Data Source

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `type` | `string` | Yes | None | Identifies the visualization package. | Must be `chart` for standalone chart configs. |
| `version` | [`Version`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#version) | Yes | None | Saved config version used by migration logic. | Keep this current so old saved configs can be upgraded safely. |
| `dataKey` | `string` | Conditionally | None | Selects a named dataset when the chart is rendered from `datasets`. | Required in dashboard flows that load data from the `datasets` prop instead of inline `data`. |
| `data` | `object[]` | Conditionally | `[]` | Inline dataset rendered by the chart. | Required when `dataUrl` and `datasets` are not used. |
| `dataUrl` | `string` | Conditionally | None | Remote JSON or CSV URL fetched at load time. | If both `data` and `dataUrl` are present, the fetched data wins. |
| `dataDescription` | [`DataDescription`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#datadescription) | No | None | Shared data-normalization metadata for loaded data. | Used when the chart standardizes developer-provided data. |
| `dataMetadata` | `Record<string, string>` | No | None | Metadata dictionary exposed to markup variables and editor flows. | Usually populated automatically from remote data fetches. |
| `locale` | `string` | No | Browser/runtime default | Locale used for number and date formatting. | Any valid `Intl` locale is accepted. |

## Chart Setup

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `visualizationType` | `string` | Yes | None | Chooses the chart family and which renderer mounts. | Exact values: `Area Chart`, `Bar`, `Box Plot`, `Bump Chart`, `Combo`, `Deviation Bar`, `Forest Plot`, `Horizon Chart`, `Line`, `Paired Bar`, `Pie`, `Radar`, `Scatter Plot`, `Spark Line`, `Sankey`, `Forecasting`, `Warming Stripes`. |
| `visualizationSubType` | `string` | No | `regular` | Selects the sub-mode within a chart family. | The editor currently exposes `regular` and `stacked`; `stacked` is used by bar and combo charts. |
| `orientation` | `vertical \| horizontal` | No | `vertical` | Controls the primary chart orientation. | `Bar` and `Box Plot` support both directions; `Deviation Bar` is horizontal only. |
| `xAxis` | [`Axis`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#axis) | Conditionally | Shared core default | X-axis / category-axis configuration. | Required for most chart types and for pie category wiring. See `@cdc/core` for nested fields. |
| `yAxis` | [`Axis`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#axis) | Conditionally | Shared core default | Y-axis / measure-axis configuration. | Required for `Pie` charts and shared with multi-axis chart flows. See `@cdc/core` for nested fields. |
| `series` | [`Series`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#series) | Conditionally | Shared core default | Measure series to render. | Required for non-pie charts unless `dynamicSeries` is enabled. |
| `columns` | `Record<string, Column>` | No | `{}` | Column-level display and formatting overrides. | Column configs drive labels, prefixes, suffixes, and table visibility. |
| `dynamicSeries` | `boolean` | No | `false` | Lets the chart generate series from the loaded dataset. | Useful when authoring against unknown or changing columns. |
| `dynamicSeriesType` | `string` | No | None | Type assigned to generated series. | Used only when `dynamicSeries` is enabled. |
| `dynamicSeriesLineType` | `string` | No | None | Line style assigned to generated series. | Used for dynamic line and combo charts. |
| `sortData` | `ascending \| descending` | No | `descending` | Sort order for the rendered dataset. | Applied during chart data preparation. |
| `rankByValue` | `asc \| desc` | No | `desc` | Controls value-based ranking when the chart sorts by rank. | Mostly relevant to bar-style charts. |
| `filters` | [`VizFilter[]`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#vizfilter) | No | `[]` | Interactive filters that narrow the active dataset. | Shared filter contract from `@cdc/core`. |
| `filterBehavior` | [`FilterBehavior`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#filterbehavior) | No | `Filter Change` | Chooses whether filters apply immediately or through a button. | `Filter Change`, `Apply Button`. |
| `exclusions` | `object` | No | `{ active: false, keys: [], dateStart: '', dateEnd: '' }` | Hides specific x-axis values or date ranges from the chart. | Category and date exclusions are handled differently at runtime. |
| `confidenceKeys` | `Record<'lower' \| 'upper', string>` | No | `{}` | Names the lower and upper confidence interval columns. | Used by chart families that support confidence intervals. |
| `preliminaryData` | `object[]` | No | `[]` | Editor-managed suppression/effect overlay rows. | Mostly used for legacy suppression and effect data handling. |
| `suppressedData` | `{ label: string; icon: string; value: string }[]` | No | `[]` | Legacy suppression metadata shown in some chart flows. | Still read by legend and tooltip helpers. |
| `highlightedBarValues` | `{ value: any; color: string; borderWidth: number; legendLabel: string }[]` | No | `[]` | Explicit value-to-style overrides for selected bars. | Used by highlight and comparison scenarios. |
| `allowLineToBarGraph` | `boolean` | No | `undefined` | Lets a line chart switch to a bar graph when the dataset is too small. | Used when `visualizationType` is `Line`; runtime also applies it for some dynamic-series cases. |
| `useLogScale` | `boolean` | No | `false` | Switches supported axes to log scale. | Mainly used by line, combo, and bar flows. |
| `dataCutoff` | `number \| string` | No | None | Numeric threshold used for "less than" handling. | Runtime coerces the value with `numberFromString`, so saved configs often serialize it as a string. |

## Copy and Authored Content

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `title` | `string` | No | `''` | Main chart title. | Hidden when empty or when `showTitle` is `false`. |
| `superTitle` | `string` | No | `''` | Supporting title rendered above the main title. | Commonly used for short context labels. |
| `introText` | `string` | No | `''` | Introductory text rendered above the chart body. | Supports markup variables when enabled. |
| `description` | `string` | No | `''` | Description or subtext rendered with the chart. | Often used for source notes and context. |
| `legacyFootnotes` | `string` | No | `''` | Legacy footnote field retained for backward compatibility. | Still rendered in addition to the structured `footnotes` block. |
| `footnotes` | [`Footnotes`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#footnotes) | No | Shared core default | Structured footnotes rendered in the chart footer. | Shared `@cdc/core` footnotes contract. |
| `chartMessage.noData` | `string` | No | `No Data Available` | Message shown when the chart has no renderable data. | Usually only visible after filtering or data loading failures. |
| `enableMarkupVariables` | `boolean` | No | `false` | Enables placeholder replacement in supported text fields. | Shared behavior with markup variables documented in core. |
| `markupVariables` | [`MarkupVariable[]`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#markupvariable) | No | `[]` | Defines placeholder tags available to authored text. | Shared markup-variable contract from `@cdc/core`. |

## Layout and Appearance

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `theme` | [`ComponentThemes`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#componentthemes) | No | `theme-blue` | Shared shell theme token. | Controls shell classes and some chart accents. |
| `showTitle` | `boolean` | No | `true` | Shows or hides the main title area. | `true`, `false`. |
| `showSidebar` | `boolean` | No | `true` | Shows the side panel in editor-like flows. | Mostly editor-facing, but persisted in saved configs. |
| `titleStyle` | `legacy \| large \| small` | No | `small` | Chooses the title treatment. | `legacy`, `large`, `small`. |
| `animate` | `boolean` | No | `false` | Enables chart animation when the chart enters view. | Disabled for chart types that do not animate. |
| `heights.vertical` | `number` | No | `300` | Default vertical chart height. | Used when the chart is rendered vertically. |
| `heights.horizontal` | `number` | No | `750` | Default horizontal chart height. | Used when the chart is rendered horizontally. |
| `heights.mobileVertical` | `number` | No | `300` | Mobile height for vertical layouts. | Used in responsive chart layouts. |
| `barHeight` | `number` | No | `25` | Base bar height in bar and combo charts. | Affects row spacing and label placement. |
| `barSpace` | `number` | No | `15` | Space between bars. | Mostly used in bar and combo charts. |
| `barThickness` | `number` | No | `0.35` | Relative bar thickness. | Influences grouped and stacked bar rendering. |
| `barStyle` | `lollipop \| rounded \| flat` | No | `''` | Chooses the bar shape treatment. | A blank value behaves like `flat` until the editor sets it explicitly. |
| `barHasBorder` | `'true' \| 'false'` | No | `'true'` | Toggles bar borders. | Stored as a string for backward compatibility. |
| `isLollipopChart` | `boolean` | No | `false` | Renders bars as lollipop charts. | Often pairs with `lollipopShape` and `lollipopColorStyle`. |
| `lollipopShape` | `circle \| square` | No | `circle` | Shape used for lollipop heads. | The editor currently exposes `circle` and `square`. |
| `lollipopColorStyle` | `regular \| two-tone` | No | `two-tone` | Chooses lollipop color treatment. | Changes how the head and stick colors are resolved. |
| `lollipopSize` | `small \| medium \| large` | No | `small` | Controls lollipop head and stem sizing. | Mainly used when `barStyle` is `lollipop` or `isLollipopChart` is true. |
| `lineDatapointStyle` | `hidden \| always show \| hover` | No | `hover` | Controls line chart point visibility. | Affects line and combo charts. |
| `lineDatapointColor` | `Same as Line \| Lighter than Line` | No | `Same as Line` | Chooses the point color relative to the line. | Affects line markers and hover styles. |
| `isolatedDotsSameSize` | `boolean` | No | `false` | Keeps isolated line dots the same size as normal dots. | Only used by line-chart variants. |
| `labels` | `boolean` | No | `false` | Shows value labels on supported chart types. | Especially visible on bar-style charts. |
| `isResponsiveTicks` | `boolean` | No | `false` | Enables responsive tick handling. | Helpful for dense x-axis labels. |
| `roundingStyle` | `standard \| shallow \| finger` | No | `standard` | Chooses the numeric rounding strategy. | Matches the editor options. |
| `tipRounding` | `top \| full` | No | `top` | Controls tooltip rounding behavior. | Legacy-friendly display option. |
| `dataFormat` | `object` | No | `{}` | Controls global number formatting. | Includes prefix/suffix, comma handling, and rounding knobs used across chart families. |
| `tooltips` | `object` | No | `{ opacity: 90, singleSeries: false, dateDisplayFormat: '%B %-d, %Y' }` | Tooltip display settings. | Controls opacity, single-series mode, and tooltip date formatting. |
| `topAxis.hasLine` | `boolean` | No | `false` | Draws a top axis line in supported chart types. | Mostly used by bar and line layouts. |
| `general` | [`General`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#general) | No | Shared core default | Shared chart-wide settings such as missing-data labels and palette selection. | Chart-specific runtime also reads `general.useIntelligentLineChartLabels`; see core for shared fields like `showMissingDataLabel`, `showSuppressedSymbol`, `showZeroValueData`, `hideNullValue`, and `palette`. |
| `visual` | `object` | No | `{ border: false, borderColorTheme: false, accent: false, background: false, hideBackgroundColor: false, tp5Treatment: false, tp5Background: false, verticalHoverLine: false, horizontalHoverLine: false, lineDatapointSymbol: 'none', maximumShapeAmount: 7 }` | Shared chart shell styling flags. | Includes border/background toggles, hover lines, and line-datapoint symbol control. |
| `twoColor.palette` | `string` | No | `monochrome-1` | Palette used for two-color chart variants. | Used when the chart switches to a paired/deviation bar color treatment. |
| `isPaletteReversed` | `boolean` | No | `false` | Reverses the active palette order. | Often used with sequential palettes. |
| `pieType` | `Regular \| Donut` | No | `Regular` | Chooses between a full pie and a donut chart. | Only meaningful for `Pie` charts. |
| `showAreaUnderLine` | `boolean` | No | `false` | Fills the area below line series. | Primarily used by line and small-multiple line charts. |
| `showLineSeriesLabels` | `boolean` | No | `false` | Appends the series name at the end of line and combo series. | Only meaningful for line-capable charts. |
| `colorMatchLineSeriesLabels` | `boolean` | No | `false` | Matches end labels to the series color. | Only relevant when `showLineSeriesLabels` is enabled. |
| `stackedAreaChartLineType` | `string` | No | `Linear` | Chooses the curve used by stacked area charts. | Mapped to the supported curve set in the editor. |
| `hideXAxisLabel` | `boolean` | No | `false` | Hides the rendered x-axis label. | Mostly used by small multiples and compact layouts. |
| `hideYAxisLabel` | `boolean` | No | `false` | Hides the rendered y-axis label. | Mostly used by small multiples and compact layouts. |

## Feature-Specific Enhancements

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `smallMultiples` | `object` | No | Package-initialized defaults | Splits one chart into multiple tiles. | Supports tile order, per-tile titles, synchronized tooltips, independent axes, and optional area fill for line tiles. |
| `forestPlot` | `object` | No | Package-initialized defaults | Forest plot-specific rendering settings. | Includes row height, labels, pooled results, and scaling controls. |
| `horizon` | `object` | No | Package-initialized defaults | Horizon chart settings. | Controls band count, spacing, and padding. |
| `radar` | `object` | No | Package-initialized defaults | Radar chart display settings. | Controls rings, points, fill opacity, and axis label offset. |
| `sankey` | `object` | No | Package-initialized defaults | Sankey layout, sizing, and color settings. | Includes node width, padding, margins, opacity, and story-node text. |
| `boxplot` | `object` | No | Package-initialized defaults | Box plot labels and plot metadata. | Shared box-plot shape from `@cdc/core`; chart-specific config adds the plot collection. |
| `annotations` | [`Annotation[]`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#annotation) | No | `[]` | Overlay annotations on the chart canvas. | Shared annotation contract from `@cdc/core`. |
| `regions` | [`Region[]`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#region) | No | `[]` | Shaded date or category regions. | Shared region contract from `@cdc/core`. |

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
| `brush` | Internal brush selection state managed by the renderer. Consumer-facing brush settings (`brushActive`, `brushDefaultRecentDateCount`, `brushDynamicYAxis`) live on `xAxis` and are documented in the shared [`Axis`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#axis) reference. |
| `color` | Legacy top-level palette token kept for backward compatibility. |
| `palette` | Legacy top-level palette token superseded by `general.palette`. |
| `datasets` | Dashboard-only data container passed into the component, not authored inside a standalone chart config. |
| `migrations` | Editor/migration bookkeeping. |
| `dynamicMarginTop` | Editor/export artifact used by older saved configs. |
| `fontSize` | Legacy typography setting from older saved exports. |
| `xScale`, `yScale` | Runtime scale functions, not authored config. |
