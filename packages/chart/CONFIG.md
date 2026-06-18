# `@cdc/chart` Configuration Reference

This document describes the supported configuration contract for `@cdc/chart`.

Shared nested types such as `Legend`, `Table`, `Annotation`, `VizFilter`, `FilterBehavior`, `MarkupVariable`, `Footnotes`, `General`, and `ComponentThemes` are documented in the [`@cdc/core` config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md). Chart-owned structures such as axes, series, regions, confidence interval wiring, and box plot settings are documented here.

To follow those shared types locally, use `packages/core/CONFIG.md` in this monorepo or `node_modules/@cdc/core/CONFIG.md` in an installed app. If neither path is available, use the GitHub link above.

## Organization

The chart config is documented in the order the package typically evaluates it:

| Section | Covers |
| --- | --- |
| Identity and data source | Package identity, versioning, and input data |
| Chart setup | Visualization type, axes, series, and data shaping |
| Copy and authored content | Titles, descriptions, footnotes, and markup variables |
| Layout and appearance | Theme, sizing, formatting, palette, and shell options |
| Feature-specific enhancements | Annotations, regions, heatmaps, small multiples, forest plots, radar, Sankey, and similar chart variants |
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
| `version` | [`Version`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#version) | No | None | Saved config version used by migration logic. | Use a semantic COVE version for authored configs so migrations can reason about saved-version order. Missing versions are treated as legacy configs that need migration. |
| `dataKey` | `string` | Conditionally | None | Selects a named dataset when the chart is rendered from `datasets`. | Required in dashboard flows that load data from the `datasets` prop instead of inline `data`. |
| `data` | `object[]` | Conditionally | `[]` | Inline dataset rendered by the chart. | Required when `dataUrl` and `datasets` are not used. |
| `dataUrl` | `string` | Conditionally | None | Remote JSON or CSV URL fetched at load time. | If both `data` and `dataUrl` are present, the fetched data wins. |
| `dataDescription` | [`DataDescription`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#datadescription) | No | None | Shared data-normalization metadata for loaded data. | Used when the chart standardizes developer-provided data. |
| `dataMetadata` | `Record<string, string>` | No | None | Metadata dictionary exposed to markup variables and editor flows. | Usually populated automatically from remote data fetches. |
| `locale` | `string` | No | Browser/runtime default | Locale used for number and date formatting. | Any valid `Intl` locale is accepted. |

## Chart Setup

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `visualizationType` | `string` | Yes | None | Chooses the chart family and which renderer mounts. | Exact values: `Area Chart`, `Bar`, `Box Plot`, `Bump Chart`, `Combo`, `Deviation Bar`, `Forest Plot`, `HeatMap`, `Horizon Chart`, `Line`, `Paired Bar`, `Pie`, `Radar`, `Scatter Plot`, `Spark Line`, `Sankey`, `Forecasting`, `Warming Stripes`. |
| `visualizationSubType` | `string` | No | `regular` | Selects the sub-mode within a chart family. | Current authorable values are `regular` and `stacked`; `stacked` is used by bar, combo, and stacked area flows. Older saved configs may contain `horizontal`; use `orientation: "horizontal"` for current horizontal charts. |
| `orientation` | `vertical \| horizontal` | No | `vertical` | Controls the primary chart orientation. | `Bar` and `Box Plot` support both directions; `Deviation Bar` is horizontal only. |
| `xAxis` | `object` | Conditionally | Package-initialized defaults | X-axis / category-axis configuration. | Required for most chart types and for pie category wiring. See `Axis: xAxis and yAxis` below. |
| `yAxis` | `object` | Conditionally | Package-initialized defaults | Y-axis / measure-axis configuration. | Required for `Pie` charts and shared with multi-axis chart flows. See `Axis: xAxis and yAxis` below. In charts, `yAxis.titlePlacement` controls whether the title stays on the side or moves above the plot. |
| `series` | `Series[]` | Conditionally | Package-initialized defaults | Measure series to render. | Required for most non-pie charts. See `Series: series[]` below. Dynamic-category series still start from an authored `series[]` entry. For HeatMap, each selected series becomes one heatmap row. |
| `columns` | `Record<string, Column>` | No | `{}` | Column-level display and formatting overrides. | Column configs drive labels, prefixes, suffixes, and table visibility. |
| `dynamicSeries` | `boolean` | No | `false` | Legacy/paused dynamic-series flag. | Current runtime can regenerate generated series during filter updates, but initial rendering still depends on authored `series[]` or `series[].dynamicCategory`. |
| `dynamicSeriesType` | `string` | No | None | Type assigned to generated series. | Used only when `dynamicSeries` is enabled. |
| `dynamicSeriesLineType` | `string` | No | None | Line style assigned to generated series. | Used for dynamic line and combo charts. |
| `sortData` | `ascending \| descending` | No | None | Sort order for the rendered dataset. | Sorting only runs when `sortData` is present. Current runtime treats `ascending` as descending numeric order and `descending` as ascending numeric order for the configured sort key; treat the names as legacy until the comparator changes. |
| `rankByValue` | `asc \| desc` | No | None | Controls value-based ranking when explicitly set. | Mostly relevant to bar-style charts. When omitted, ranking by value is not applied. |
| `filters` | [`VizFilter[]`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#vizfilter) | No | `[]` | Interactive filters that narrow the active dataset. | Shared filter contract from `@cdc/core`. |
| `filterBehavior` | [`FilterBehavior`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#filterbehavior) | No | `Filter Change` | Chooses whether filters apply immediately or through a button. | `Filter Change`, `Apply Button`. |
| `exclusions` | `object` | No | `{ active: false, keys: [] }` | Narrows the data before filters and rendering. | For categorical axes, `keys` hides matching x-axis values. For date axes, `dateStart` and `dateEnd` keep rows within the selected date range; they do not hide that range. |
| `confidenceKeys` | `Record<'lower' \| 'upper', string>` | No | `{}` | Names the lower and upper confidence interval columns. | Used by chart families that support confidence intervals. |
| `highlightedBarValues` | `{ value: any; color: string; borderWidth: number; legendLabel: string }[]` | No | `[]` | Explicit value-to-style overrides for selected bars. | Used by highlight and comparison scenarios. |
| `allowLineToBarGraph` | `boolean` | No | `undefined` | Lets a line chart switch to a bar graph when the dataset is too small. | Used when `visualizationType` is `Line`; runtime also applies it for some dynamic-series cases. |
| `useLogScale` | `boolean` | No | `false` | Legacy log-scale flag retained in older configs. | Current authored configs should use `yAxis.type: "logarithmic"`; setting `useLogScale` alone is not the current scale-selection path. |
| `dataCutoff` | `number \| string` | No | None | Numeric threshold used for "less than" handling. | Runtime coerces the value with `numberFromString`, so saved configs often serialize it as a string. |

### Axis: `xAxis` and `yAxis`

Axis settings are chart-owned because their meaning depends on chart family, orientation, and renderer. Runtime layout fields such as `axisBBox`, `maxValue`, and `tickWidthMax` are listed in `Fields You Can Ignore`.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `xAxis.dataKey`, `yAxis.dataKey` | `string` | Conditionally | `''` | Source field used by the axis. | Required for visible/category axes and most value-axis chart wiring. |
| `xAxis.type`, `yAxis.type` | `string` | No | Package defaults | Axis scale mode. | Category/date axes commonly use `categorical`, `date`, or `date-time`; Scatter Plot x-axes can use `continuous`; current numeric value axes use `linear` or `logarithmic`. |
| `xAxis.label`, `yAxis.label` | `string` | No | `''` | Axis title shown near the axis. | Optional display label. |
| `yAxis.titlePlacement` | `side \| top` | No | `top` for new configs; older configs missing this field migrate to `side` | Chooses where the y-axis title renders. | `top` renders the title above the plot. |
| `*.hideAxis`, `*.hideTicks`, `*.hideLabel` | `boolean` | No | `false` | Hides axis line, tick marks, or label. | Supported per axis where the renderer exposes these controls. |
| `*.labelColor`, `*.tickLabelColor`, `*.tickColor` | CSS color string | No | Package defaults | Axis label, tick-label, and tick-mark colors. | Preserved in saved configs and used by the rendered axes. |
| `yAxis.gridLines`, `yAxis.enablePadding`, `yAxis.scalePadding`, `yAxis.displayNumbersOnBar`, `xAxis.showYearsOnce` | `boolean`, `number` | No | Package defaults | Axis grid, padding, bar-label, and date-label display controls. | Supported where the chart family and orientation use the related rendering behavior. |
| `yAxis.filterDomainBehavior` | `dynamic \| stable` | No | `dynamic` when omitted | Controls which rows automatic value-axis domains use when filters are active. | `dynamic` rescales to the currently filtered rows. `stable` uses the full eligible chart dataset while rendering filtered rows; it still respects hard exclusions and chart dataset scope. Applies to the horizontal value axis for horizontal charts and to the right axis for Combo charts. Brush behavior remains controlled by `xAxis.brushDynamicYAxis`. |
| `yAxis.autoMaxStrategy` | `default \| clean-top-tick` | No | `default` when omitted; new chart configs default to `clean-top-tick` | Controls how automatic value-axis maximums are chosen before padding. | Applies only when the relevant value-axis max is not explicitly set (`yAxis.max` for vertical charts, `xAxis.max` for horizontal charts, `yAxis.rightMax` for Combo right axes). `clean-top-tick` rounds automatic max values up to a cleaner mantissa step such as `1.2`, `1.5`, `2`, `2.5`, `3`, `4`, `5`, `6`, `8`, or `10` times the current order-of-magnitude step. After tick count is known, runtime may finalize the automatic max to the highest generated tick or the next tick interval so the visible top tick clears the data. |
| `*.dateParseFormat`, `*.dateDisplayFormat` | `string` | No | Package defaults | Input and output date formatting hints. | Used by date-based axes and table/tooltip formatting. |
| `*.numTicks`, `*.tickRotation`, `*.maxTickRotation` | `number` | No | Package defaults | Tick density and tick-label rotation controls. | Runtime may still adjust ticks for available space. |
| `*.max`, `*.min` | `string` | No | None | Explicit axis bounds. | Stored as strings in saved configs. |
| `*.manual`, `*.manualStep`, `*.viewportNumTicks`, `xAxis.viewportStepCount` | `boolean`, `number`, `Record<string, number>` | No | Package defaults | Manual and viewport-specific tick controls. | Mostly used by date/time x-axis editor flows. |
| `*.padding`, `*.paddingPercent`, `*.size` | `number` | No | Package defaults | Axis spacing and reserved-size controls. | Runtime can still adjust final layout for available space. |
| `*.sortKey`, `xAxis.sortByRecentDate` | `string`, `boolean` | No | None | Sort helpers for categorical/date axes. | Current configs should use the axis type plus `sortByRecentDate` for recent-date ordering. Legacy `xAxis.sortDates` is migrated to date-axis metadata and removed. |
| `*.categories` | `object[]` | No | `[]` | Category metadata for specialized axis rendering. | Mostly used by advanced chart flows. |
| `*.anchors` | `object[]` | No | `[]` | Target-line or anchor metadata. | Each anchor stores `value`, `color`, and `lineStyle`. |
| `xAxis.target`, `xAxis.targetLabel`, `xAxis.showTargetLabel`, `yAxis.target`, `yAxis.targetLabel`, `yAxis.showTargetLabel` | `number \| string`, `string`, `boolean` | No | Package defaults | Target line and label controls. | Deviation Bar uses the x-axis target fields; renderer support varies by chart family. |
| `yAxis.inlineLabel`, `yAxis.labelPlacement`, `yAxis.labelsAboveGridlines` | `string`, `string`, `boolean` | No | None, package defaults, `false` | Inline suffix/label controls for the left Y axis. | Used by line and bar axis-label rendering. For non-Combo charts, when `inlineLabel` contains a space, runtime treats the primary automatic Y-axis max as effectively clean-top-tick even if `autoMaxStrategy` is `default`; if the raw max is within one quarter of a tick interval from the top generated tick, runtime adds one more interval for label headroom. Valid explicit max values bypass this automatic finalization. Combo charts do not use this automatic inline-label headroom, so manual Y-axis padding remains available. |
| `yAxis.rightLabel`, `yAxis.rightNumTicks`, `yAxis.rightAxisSize`, `yAxis.rightLabelOffsetSize` | `string`, `number`, `number`, `number` | No | `''`, package defaults | Right-axis label, tick, width, and offset controls. | Used by combo and line-capable dual-axis charts. |
| `yAxis.rightAxisLabelColor`, `yAxis.rightAxisTickLabelColor`, `yAxis.rightAxisTickColor` | CSS color string | No | Package defaults | Right-axis label, tick-label, and tick-mark colors. | Only meaningful when right-axis series are configured. |
| `yAxis.rightHideAxis`, `yAxis.rightHideLabel`, `yAxis.rightHideTicks` | `boolean` | No | `false` | Hides the right-axis line, label, or ticks. | Only meaningful when right-axis series are configured. |
| `yAxis.rightMin`, `yAxis.rightMax`, `yAxis.smallestLeftAxisMax`, `yAxis.smallestRightAxisMax` | `string \| number` | No | None | Explicit or minimum bounds for left/right axes. | Runtime coerces numeric-like values when calculating scales. |
| `xAxis.brushActive`, `xAxis.brushDefaultRecentDateCount`, `xAxis.brushDynamicYAxis` | `boolean`, `number`, `boolean` | No | `false`, None, `false` | Enables and configures the x-axis brush range selector. | Supported on vertical Line, Bar, Area Chart, and Combo charts with a non-categorical x-axis. |

### Series: `series[]`

`series` is chart-owned and defines which value columns the chart renders.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `series[].dataKey` | `string` | Yes | None | Source value column for the series. | Must exist in the active dataset unless `dynamicSeries` is generating series. |
| `series[].name` | `string` | No | Inferred | Display label for the series. | Packages may infer labels when omitted. |
| `series[].axis` | `Left \| Right \| string` | No | `Left` | Axis assignment for the series. | Used by dual-axis charts. |
| `series[].type` | `string` | No | Chart-family default | Series renderer type. | Common values include line, bar, area, `HeatMap`, and point-like variants. |
| `series[].lineType` | `string` | No | `curveLinear` | Line curve style for line-capable series. | Values come from the shared line curve helper, such as `curveLinear`; primarily used by Line and Combo charts. |
| `series[].weight` | `number` | No | `2` | Stroke width for line-capable series. | Editor limits this to 1-9. |
| `series[].tooltip` | `boolean` | No | `true` | Includes the series in tooltip output. | `true`, `false` |
| `series[].dynamicCategory` | `string` | No | None | Category key used by dynamic-series flows. | Optional. |
| `series[].stageColumn` | `string` | No | None | Stage/category metadata for specialized chart families. | Optional. |
| `series[].stages[].key`, `series[].stages[].color` | `string` | No | None | Forecasting-stage key and color metadata. | Only meaningful for `visualizationType: "Forecasting"`. |
| `series[].confidenceIntervals` | `object[]` | No | `[]` | Per-series confidence interval metadata. | Each entry uses `high`, `low`, and optional `showInTooltip`; see `Confidence Intervals` below. |

### Confidence Intervals

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `confidenceKeys.lower`, `confidenceKeys.upper` | `string` | No | None | Column names for lower and upper confidence bounds. | Used by chart families that render confidence intervals from shared columns. |
| `series[].confidenceIntervals[].low`, `series[].confidenceIntervals[].high` | `number \| string` | Conditionally | None | Lower and upper bounds for a series-specific interval. | Can be column names or numeric values depending on the chart flow. |
| `series[].confidenceIntervals[].showInTooltip` | `boolean` | No | `false` | Includes confidence interval values in tooltip output. | Only meaningful when interval bounds are configured. |

### Preliminary and Suppression Markers

`preliminaryData` is chart-owned marker metadata for suppression and effect styling in supported Line, Bar, and Combo flows. Older saved configs may also contain `suppressedData`; that legacy array is listed in `Fields You Can Ignore`.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `preliminaryData[]` | `object[]` | No | `[]` | Marker rules for suppression or effect values. | Runtime uses these entries for chart marks, legend entries, tooltips, and table behavior in supported chart families. |
| `preliminaryData[].type` | `suppression \| effect` | Yes | None | Chooses the marker behavior. | Suppression entries match specific source values; effect entries mark effects in supported line/bar flows. |
| `preliminaryData[].column`, `preliminaryData[].value` | `string` | Conditionally | None | Source column and value that trigger the marker. | Required for suppression matching. |
| `preliminaryData[].label` | `string` | No | `''` | Label shown in legend/tooltip contexts. | Optional but needed for visible legend copy. |
| `preliminaryData[].style`, `preliminaryData[].symbol`, `preliminaryData[].iconCode`, `preliminaryData[].lineCode` | `string` | No | Package/editor defaults | Visual styling metadata for the marker. | Editor-authored values drive the rendered symbol, line, or filled-circle treatment. |
| `preliminaryData[].seriesKeys` | `string[]` | No | `[]` | Series keys affected by the marker. | Empty or omitted values can apply broadly depending on the marker type and chart family. |
| `preliminaryData[].displayTooltip`, `preliminaryData[].displayLegend`, `preliminaryData[].displayTable` | `boolean` | No | Editor defaults | Controls whether the marker appears in tooltips, legend output, and table output. | Used by suppression/effect rendering in supported chart families. |
| `preliminaryData[].hideBarSymbol`, `preliminaryData[].hideLineStyle` | `boolean` | No | Editor defaults | Suppresses the bar symbol or line styling for the marker. | Only meaningful where the selected chart family renders that marker treatment. |
| `preliminaryData[].circleSize` | `number` | No | Editor defaults | Circle marker size for supported effect/suppression displays. | Pixel-like display value. |
| `preliminaryData[].displayGray` | `boolean` | No | Editor defaults | Applies gray styling for supported marked values. | Mainly used by suppression/effect visual treatments. |

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
| `altText` | [`AltTextConfig`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#alttextconfig) | No | None | Optional human-authored accessibility description for the chart SVG. | Chart first builds its generated `aria-label` from chart context, then appends the resolved static or metadata-backed alt text from the shared core shape. |
| `general.showAnnotationDropdown` | `boolean` | No | `false` | Changes desktop visibility classes for the annotation dropdown. | Annotation dropdown markup renders when annotations exist; this flag controls whether it is shown in desktop layouts. |
| `general.mobileAnnotationDisplay` | `'symbol' \| 'text'` | No | `'symbol'` | Selects how annotations render on mobile: numbered-circle symbol on the chart, or full HTML text labels. | `'symbol'` (default): mobile shows numbered circles on the chart and auto-forces the annotation dropdown below the chart. `'text'`: mobile renders the same HTML labels as desktop and the dropdown is no longer auto-forced (it follows `general.showAnnotationDropdown`). Author opt-in for `'text'`: labels may overflow narrow viewports. |
| `general.annotationDropdownText` | `string` | No | `Annotations` | Label shown for the annotation dropdown. | Used when annotation dropdowns are enabled. |

## Layout and Appearance

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `theme` | [`ComponentThemes`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#componentthemes) | No | `theme-blue` | Shared shell theme token. | Controls shell classes and some chart accents. |
| `showTitle` | `boolean` | No | `true` | Shows or hides the main title area. | `true`, `false`. |
| `titleStyle` | `legacy \| large \| small` | No | `small` | Chooses the title treatment. | `legacy`, `large`, `small`. |
| `animate` | `boolean` | No | `false` | Enables chart animation when the chart enters view. | Disabled for chart types that do not animate. |
| `heights.vertical` | `number` | No | `300` | Default vertical chart height. | Used when the chart is rendered vertically. |
| `heights.horizontal` | `number` | No | `750` | Default horizontal chart height. | Used when the chart is rendered horizontally. |
| `heights.mobileVertical` | `number` | No | None | Optional mobile height for vertical layouts. | Not seeded in the package initial state. When omitted, mobile vertical rendering falls back to `heights.vertical`. |
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
| `dataFormat` | `object` | No | Package-initialized defaults | Controls chart-owned number formatting. | See `dataFormat.*` below. Column-level overrides in `columns` can override some left-axis/table formatting. |
| `tooltips` | `object` | No | `{ opacity: 90, singleSeries: false, dateDisplayFormat: '%B %-d, %Y' }` | Tooltip display settings. | Controls opacity, single-series mode, and tooltip date formatting. |
| `topAxis.hasLine` | `boolean` | No | `false` | Draws a top axis line in supported chart types. | Mostly used by bar and line layouts. |
| `general` | [`General`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#general) | No | Shared core default | Shared chart-wide settings such as missing-data labels and palette selection. | Chart-specific runtime also reads `general.useIntelligentLineChartLabels`; see core for shared fields like `showMissingDataLabel`, `showSuppressedSymbol`, `showZeroValueData`, `hideNullValue`, and `palette`. |
| `general.useIntelligentLineChartLabels` | `boolean` | No | `false` | Enables smarter line-end label placement for line-capable charts. | Chart-specific extension stored under the legacy `general` block. |
| `visual` | `object` | No | `{ border: false, borderColorTheme: false, accent: false, background: false, hideBackgroundColor: false, tp5Treatment: false, tp5Background: false, verticalHoverLine: false, horizontalHoverLine: false, lineDatapointSymbol: 'none', maximumShapeAmount: 7 }` | Shared chart shell styling flags. | Includes border/accent toggles, hover lines, and line-datapoint symbol control. `visual.background` and `visual.hideBackgroundColor` currently affect Spark Line charts only; chart TP5 treatment flags may be present in saved configs but are feature-gated. |
| `legend` | [`Legend`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#legend) plus chart extensions | No | Package-initialized defaults | Controls chart legend display, layout, and interaction. | See `legend.*` below for chart-owned extensions. |
| `table` | [`Table`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#table) plus chart behavior | No | Package-initialized defaults | Controls the built-in data table and chart download buttons. | See `table.*` below for chart-specific behavior and common shared fields. |
| `twoColor.palette` | `string` | No | `monochrome-1` | Palette used for two-color chart variants. | Used when the chart switches to a paired/deviation bar color treatment. |
| `twoColor.isPaletteReversed` | `boolean` | No | `false` | Reverses the two-color palette variant. | Current active reversal flag for two-color palettes. |
| `general.palette.isReversed` | `boolean` | No | `true` for current chart defaults | Reverses the active palette order. | Current active reversal flag for the main palette. The top-level `isPaletteReversed` field is legacy. |
| `general.palette.colorAssignmentMode` | `ordered \| by-value` | No | `ordered` when omitted | Enables authored by-series color assignment. | `by-value` is required before `colorAssignments` affects chart colors; assignment presence alone does not activate it. |
| `general.palette.colorAssignments` | `{ key: string; color: string }[]` | No | `[]` | Assigns colors to stable authored chart series keys. | Supported for regular Line, Bar, Combo, Area Chart, Scatter Plot, and by-series Small Multiples. `key` should match `series[].dataKey`; stale keys are ignored and may be removed by editor updates. |
| `pieType` | `Regular \| Donut` | No | `Regular` | Chooses between a full pie and a donut chart. | Only meaningful for `Pie` charts. |
| `showAreaUnderLine` | `boolean` | No | `false` | Fills the area below line series. | Primarily used by line and small-multiple line charts. |
| `showLineSeriesLabels` | `boolean` | No | `false` | Appends the series name at the end of line and combo series. | Only meaningful for line-capable charts. |
| `colorMatchLineSeriesLabels` | `boolean` | No | `false` | Matches end labels to the series color. | Only relevant when `showLineSeriesLabels` is enabled. |
| `stackedAreaChartLineType` | `string` | No | `Linear` | Chooses the curve used by stacked area charts. | Mapped to the supported curve set in the editor. |
| `hideXAxisLabel` | `boolean` | No | `false` | Hides the rendered x-axis label. | Mostly used by small multiples and compact layouts. |
| `hideYAxisLabel` | `boolean` | No | `false` | Hides the rendered y-axis label. | Mostly used by small multiples and compact layouts. In small multiples, the leading tile in each row keeps the y-axis title visible while the other tiles hide it, including when `yAxis.titlePlacement` is `top`. |

### Number Formatting: `dataFormat.*`

These fields are chart-owned. They are applied by chart number-format helpers for axes, labels, tooltips, and generated table values unless a column-specific formatter overrides the value.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dataFormat.commas` | `boolean` | No | `true` when the whole `dataFormat` block is omitted | Adds locale-aware grouping to left/value-axis numbers, tooltips, and data table output. | Missing `commas` inside a partial `dataFormat` object can be backfilled as legacy `false`; author this field explicitly when adding only some number-format options. |
| `dataFormat.abbreviated` | `boolean` | No | `false` | Abbreviates large or small left/value-axis numbers. | Only applied when the formatter decides the value should be abbreviated. |
| `dataFormat.roundTo` | `number` | No | `0` when omitted | Decimal precision for left/value-axis numbers and many chart values. | Ignored for a value when `preserveOriginalDecimals` is true. |
| `dataFormat.preserveOriginalDecimals` | `boolean` | No | `false` | Preserves each value's original decimal places. | Bypasses the configured decimal precision for left, right, and bottom formatting. |
| `dataFormat.prefix`, `dataFormat.suffix` | `string` | No | `''` | Text added before or after left/value-axis numbers. | Examples: `$`, `%`. Non-empty column-level prefixes and suffixes can override these for table/additional-column output; blank column values fall back to these fields. |
| `dataFormat.rightCommas` | `boolean` | No | `false` | Adds grouping to right-axis numbers. | Used by dual-axis charts. |
| `dataFormat.rightRoundTo` | `number` | No | `0` when omitted | Decimal precision for right-axis numbers. | Used by dual-axis charts. |
| `dataFormat.rightPrefix`, `dataFormat.rightSuffix` | `string` | No | `''` | Text added before or after right-axis numbers. | Used by dual-axis charts. |
| `dataFormat.bottomCommas` | `boolean` | No | `false` | Adds grouping to bottom-axis numbers. | Used for continuous x-axes and logarithmic forest plots. |
| `dataFormat.bottomRoundTo` | `number` | No | `0`; logarithmic forest plots fall back to `2` when omitted | Decimal precision for bottom-axis numbers. | Used for continuous x-axes and logarithmic forest plots. |
| `dataFormat.bottomPrefix`, `dataFormat.bottomSuffix` | `string` | No | `''` | Text added before or after bottom-axis numbers. | Used for continuous x-axes and logarithmic forest plots. |
| `dataFormat.bottomAbbreviated` | `boolean` | No | `false` | Abbreviates bottom-axis values. | Only applied when the formatter decides the value should be abbreviated. |
| `dataFormat.showPiePercent` | `boolean` | No | `false` | Treats pie values as already-authored percentages. | When disabled, pie output uses the chart's computed slice percentages. |

### Legend: `legend.*`

`legend` extends the shared [`Legend`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#legend) shape with chart-specific rendering and interaction fields.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `legend.hide` | `boolean` | No | `false` | Hides the chart legend. | Shared field; charts may still render specialized legends such as warming-stripes gradients separately. |
| `legend.position` | `left \| bottom \| top \| right \| side` | No | `top` | Places the legend relative to the chart. | Small viewports may force bottom placement. |
| `legend.behavior` | `highlight \| isolate` | No | `isolate` | Controls click behavior for series legends. | `highlight` emphasizes clicked series; `isolate` narrows display to selected legend entries where supported. |
| `legend.label`, `legend.description` | `string` | No | `''` | Legend heading and supporting description. | Rendered as authored legend copy. |
| `legend.singleRow` | `boolean` | No | `true` | Requests a single-row legend layout. | Runtime may wrap when space is limited. |
| `legend.unified` | `boolean` | No | Package defaults | Combines legend handling for supported chart families. | Common in pie and specialized legend flows. |
| `legend.axisAlign` | `boolean` | No | `true` | Aligns the legend with the plot/axis area. | Chart-specific layout option. |
| `legend.colorCode` | `string` | No | `''` | Optional color-code metadata used by some legend modes. | Usually editor-managed. |
| `legend.reverseLabelOrder` | `boolean` | No | `false` | Reverses the legend item order. | Useful when visual stacking order should match the legend. |
| `legend.verticalSorted` | `boolean` | No | `false` | Sorts vertical legend items. | Chart-specific layout option. |
| `legend.highlightOnHover` | `boolean` | No | `false` | Highlights legend items and related marks on hover. | `true`, `false` |
| `legend.seriesHighlight` | `string[]` | No | `[]` | Initial series keys to highlight. | Runtime also updates this during legend interaction. |
| `legend.style` | `circles \| boxes \| gradient \| lines` | No | `circles` | Chooses marker style for legend items. | `gradient` is used by gradient/warming-stripes-style legends. |
| `legend.subStyle` | `linear blocks \| smooth` | No | `linear blocks` | Chooses gradient legend treatment. | Only meaningful for gradient-style legends. |
| `legend.shape`, `legend.hasShape` | `string`, `boolean` | No | `circle`, package defaults | Shape metadata for shape-based legend entries. | Used by pattern and specialized legend rendering. |
| `legend.tickRotation` | `number \| string` | No | `''` | Rotates gradient legend tick labels. | Saved configs may store a numeric string. Ignored by HeatMap block gradient legends. |
| `legend.groupBy` | `string` | No | `''` | Groups legend items by a source field. | Advanced legend layout option. |
| `legend.order` | `dataColumn \| asc \| desc` | No | `dataColumn` | Controls legend item ordering. | `dataColumn` follows the data/config order. |
| `legend.orderedValues` | `{ label?: string; value?: string }[]` | No | `[]` | Explicit legend order/labels. | Used when custom ordering is needed. |
| `legend.patterns`, `legend.patternField` | `object`, `string` | No | `{}`, `''` | Data-driven pattern configuration for legend marks. | Pattern entries can include label, color, shape, data key/value, and contrast metadata. |
| `legend.dynamicLegend`, `legend.dynamicLegendDefaultText`, `legend.dynamicLegendItemLimit`, `legend.dynamicLegendItemLimitMessage`, `legend.dynamicLegendChartMessage` | mixed | No | Package defaults | Dynamic legend controls and messages. | Used when legend selections drive chart state or empty-selection copy. |
| `legend.warmingStripesIntervals` | `object[]` | No | None | Warming-stripes interval metadata. | Used by warming-stripes-style line chart rendering. |
| `legend.hideSuppressedLabels`, `legend.hideSuppressionLink`, `legend.tooltipLegendVisible` | `boolean` | No | `false`, `false`, inferred from legend visibility | Suppression and tooltip legend controls. | Used by suppression-aware legend and tooltip flows. |
| `legend.hideBorder.side`, `legend.hideBorder.topBottom` | `boolean` | No | `false`, `true` | Hides side or top/bottom legend borders. | Chart-specific styling option. |

### Data Table: `table.*`

`table` uses the shared [`Table`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#table) structure. The fields below are the chart-facing table controls consumers are most likely to author or encounter; shared label, caption, collapse, height, and download label fields follow the core table contract. When the built-in chart data table is rendered and collapsed, both `legacyFootnotes` and structured `footnotes` are hidden until the table is expanded again.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `table.show` | `boolean` | No | `true` outside dashboards; otherwise context-dependent | Shows the built-in chart data table. | Chart runtime also ensures a missing/blank `table.label` becomes `Data Table`. |
| `table.showDataTableLink` | `boolean` | No | `true` | Shows a skip/link target to the table in dashboard-style layouts. | Chart-specific wiring around the shared table. |
| `table.showVertical` | `boolean` | No | `true` | Uses vertical table output when supported. | Chart runtime honors the authored/default value when rendering the shared table. |
| `table.dateDisplayFormat` | `string` | No | `%B %-d, %Y` | Date format for table output. | Uses the chart date-format helper conventions. |
| `table.defaultSort` | `object` | No | Auto-filled for date-axis charts when possible | Initial table sort. | Shared object with `column`, `sortDirection`, and optional `customOrder`; chart can seed the x-axis date column when omitted. |
| `table.download`, `table.showDownloadImgButton`, `table.showDownloadPdfButton`, `table.showDownloadUrl` | `boolean` | No | `false` | Enables table data, image/PDF, and URL download controls. | See shared `Table` for related labels and download flags. |
| `table.includeContextInDownload` | `boolean` | No | `false` | Includes chart context in supported downloads. | Used by image/PDF download controls. |
| `table.customTableConfig` | [`Table`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#table) | No | None | Legacy custom-table marker. | Current chart runtime does not pass this as a nested table config; when truthy for non-Sankey tables, it switches the raw table data source to filtered config data. |

## Feature-Specific Enhancements

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `smallMultiples` | `object` | No | Package-initialized defaults | Splits one chart into multiple tiles. | See `smallMultiples.*` below. |
| `forestPlot` | `object` | No | Package-initialized defaults | Forest plot-specific rendering settings. | See `forestPlot.*` below. |
| `heatmap` | `object` | No | Package-initialized defaults | HeatMap layout and label settings. | See `heatmap.*` below. |
| `horizon` | `object` | No | `HORIZON_DEFAULTS` merged with config | Horizon chart settings. | See `horizon.*` below. |
| `radar` | `object` | No | Package-initialized defaults | Radar chart display settings. | See `radar.*` below. |
| `sankey` | `object` | No | Package-initialized defaults | Sankey layout, sizing, and color settings. | See `sankey.*` below. |
| `boxplot` | `object` | No | Package-initialized defaults | Box plot labels and plot metadata. | See `boxplot.*` below. Runtime-derived plot arrays are listed in `Fields You Can Ignore`. |
| `annotations` | [`Annotation[]`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#annotation) | No | `[]` | Overlay annotations on the chart canvas. | Shared annotation contract from `@cdc/core`. |
| `regions` | `object[]` | No | `[]` | Shaded date or category regions. | See `Regions: regions[]` below. |

### HeatMap: `heatmap.*`

`heatmap` is chart-owned and only meaningful when `visualizationType` is `HeatMap`. HeatMap uses `xAxis.dataKey` as the column bucket and `series[]` as row definitions. `yAxis.label` labels the row axis, but row values come from the matching `columns` label when customized, then `series[].name`, then `series[].dataKey`; they do not come from `yAxis.dataKey`.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `xAxis.dataKey` | `string` | Yes for heatmaps | None | Source column used to create heatmap columns. | Date and date-time x-axis values are sorted chronologically with the chart date parser; categorical values preserve data order. |
| `series[]` | `Series[]` | Yes for heatmaps | `[]` | Source value columns used to create heatmap rows. | Each selected series becomes one row. Non-numeric series values are skipped; missing x/series combinations render as empty cells. |
| `series[].name` | `string` | No | `series[].dataKey` | Display label for the heatmap row when the matching `columns` label is not customized. | Also used in cell accessibility labels and tooltips. |
| `heatmap.cellPadding` | `number` | No | `1` | Gap between adjacent heatmap cells. | Values below 0 are treated as 0; runtime clamps the effective gap so cells do not render with negative dimensions. |
| `heatmap.rowLabelGap` | `number` | No | `32` | Horizontal gap between row labels and the heatmap grid. | Values below 0 are treated as 0. Ignored visually when `yAxis.hideLabel` hides row labels. |
| `heatmap.columnLabelGap` | `number` | No | `56` | Gap between x-axis tick labels and the heatmap grid. | Applies to top and bottom x-axis placement and contributes to reserved axis margin. |
| `heatmap.colorBucketCount` | `number` | No | `9` | Sets the Data Grouping control for discrete heatmap value groups. | Values below 1 are treated as 1; values above 9 are treated as 9. |
| `heatmap.xAxisPosition` | `top \| bottom` | No | `top` | Places the heatmap x-axis above or below the grid. | Invalid or omitted values fall back to `top`; the editor exposes this under `Date/Category Axis` for HeatMap only. |
| `heatmap.showCellValues` | `boolean` | No | `false` | Shows formatted numeric values inside cells. | Values render only when the cell is large enough to remain readable; empty cells do not show labels. |

HeatMap-specific behavior:

| Behavior | Details |
| --- | --- |
| Aggregation | If multiple source rows share the same x-axis value and series key, their numeric values are summed into one cell. |
| Tooltips | HeatMap cells use the shared chart tooltip markup. `series[].tooltip: false` hides that series row/value from cell tooltips. Column configs with `tooltips: true` can add extra rows unless they refer to the x-axis column or one of the heatmap series columns. Aggregated cells show an aggregated-row count and show `Multiple values` for extra tooltip columns that disagree across source rows. |
| Palette and legend | HeatMap colors come from `general.palette` or the chart fallback palette. `heatmap.colorBucketCount` quantizes the scale into 1-9 colors. `legend.style: "gradient"` or an omitted style renders a block-based gradient legend with one value-range label per block; HeatMap normalizes `legend.subStyle: "smooth"` to `linear blocks` and ignores `legend.tickRotation`. Non-gradient legend styles render generated value ranges. |
| Axis labels | `xAxis.tickRotation` or `xAxis.maxTickRotation` rotates column labels and contributes to x-axis title spacing. `yAxis.tickRotation` rotates row labels. HeatMap defaults `yAxis.titlePlacement` to `side` when it is not explicitly authored. `yAxis.titlePlacement: "top"` renders the row-axis title above the row labels, aligned with the top x-axis title when one is visible; side placement renders the rotated side title centered beside the row labels. `xAxis.hideAxis` and `xAxis.hideTicks` hide the Date/Category axis line and tick marks. `hideXAxisLabel` and `hideYAxisLabel` hide the axis titles; `xAxis.hideLabel` and `yAxis.hideLabel` hide tick labels. |

### Small Multiples: `smallMultiples.*`

Small multiples are chart-owned. They are supported by chart types allowed by the editor/runtime permissions.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `smallMultiples.mode` | `by-column \| by-series \| ''` | No | `''` | Enables tiling and chooses how tiles are created. | `by-series` creates one tile per configured series; `by-column` creates one tile per unique value in `tileColumn`. Blank disables small multiples. |
| `smallMultiples.tileColumn` | `string` | Conditionally | `''` | Source column used to create tiles in `by-column` mode. | Required when `mode` is `by-column`. |
| `smallMultiples.tilesPerRowDesktop` | `number` | No | `3` | Desktop tile count per row. | Editor constrains this to 1-3. |
| `smallMultiples.tilesPerRowMobile` | `number` | No | `1` | Mobile tile count per row. | Current editor keeps mobile at one tile per row. |
| `smallMultiples.tileOrderType` | `asc \| desc \| custom` | No | `asc` | Sorts tile order by title or uses `tileOrder`. | `custom` uses the explicit `tileOrder` array. |
| `smallMultiples.tileOrder` | `string[]` | No | `[]` | Explicit tile order for custom ordering. | Values should match series keys or `tileColumn` values depending on mode. |
| `smallMultiples.tileTitles` | `Record<string, string>` | No | `{}` | Custom display titles keyed by tile value. | Empty or same-as-key titles can be omitted. |
| `smallMultiples.independentYAxis` | `boolean` | No | `false` | Gives each tile its own y-axis scale. | Chart-level y-axis min/max overrides this behavior. |
| `smallMultiples.colorMode` | `same \| different` | No | `same` | Chooses whether tiles reuse the same color or step through the palette. | Editor defaults to `different` when the control is first shown, but initial state is `same`. |
| `smallMultiples.synchronizedTooltips` | `boolean` | No | `true` | Shows matching tooltips across tiles at the same data point. | `true`, `false` |
| `smallMultiples.showAreaUnderLine` | `boolean` | No | `true` | Shades the area below line tiles. | Only meaningful for line small multiples. |

When `yAxis.titlePlacement` is `top`, the leading tile in each row renders that y-axis title in the tile header instead of inside the SVG plot area.

### Forest Plot: `forestPlot.*`

`forestPlot` is chart-owned and only meaningful when `visualizationType` is `Forest Plot`.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `forestPlot.type` | `Linear \| Logarithmic \| ''` | Yes for forest plots | `''` | Chooses the forest plot scale. | `Linear` places the line of no effect at 0; `Logarithmic` places it at 1. |
| `forestPlot.title` | `string` | No | `''` | Title centered above the forest plot body. | Optional. |
| `forestPlot.estimateField` | `string` | Yes for forest plots | `''` | Column containing the point estimate. | Must exist in the active dataset. |
| `forestPlot.estimateRadius` | `string` | No | `''` | Legacy/source column used by older estimate-radius flows. | Prefer `forestPlot.radius.scalingColumn` for current radius scaling. |
| `forestPlot.lower`, `forestPlot.upper` | `string` | Yes for forest plots | `''` | Columns containing lower and upper confidence interval bounds. | Must exist in the active dataset. |
| `forestPlot.shape` | `text \| circle \| square` | No | `square` | Shape used for point estimates. | Editor exposes `text`, `circle`, and `square`. |
| `forestPlot.hideDateCategoryCol` | `boolean` | No | Package defaults | Hides the date/category column in supported forest plot layouts. | Only meaningful for forest plot side/table output. |
| `forestPlot.lineOfNoEffect.show` | `boolean` | No | `true` | Shows the line of no effect. | Position depends on `forestPlot.type`. |
| `forestPlot.startAt` | `number` | No | `0` | Starting value metadata for forest plot layout/scaling. | Advanced forest plot behavior. |
| `forestPlot.pooledResult.column` | `string` | No | `''` | Column/value used to identify pooled result rows. | Used with diamond pooled-result rendering. |
| `forestPlot.pooledResult.diamondHeight` | `number` | No | `5` | Height of pooled-result diamonds. | Pixel-like display value. |
| `forestPlot.rowHeight` | `number` | No | `20` | Height for each study row. | Editor constrains this roughly to 20-45. |
| `forestPlot.leftLabel`, `forestPlot.rightLabel` | `string` | No | `''` | Labels shown under the plot to describe directionality. | Example: favors treatment / favors control. |
| `forestPlot.radius.scalingColumn` | `string` | No | `''` | Column used to scale point estimate radius. | Leave blank for fixed-size points. |
| `forestPlot.radius.min`, `forestPlot.radius.max` | `number` | No | `2`, `10` | Minimum and maximum point radius. | Used when `radius.scalingColumn` is set. |
| `forestPlot.colors.line`, `forestPlot.colors.shape` | CSS color string | No | `''` | Custom colors for the no-effect line and point estimate shape. | Blank values use renderer defaults. |
| `forestPlot.regression.showDiamond` | `boolean` | No | Package defaults | Shows a regression diamond when supported. | Only meaningful for regression-style forest plot flows. |
| `forestPlot.regression.description` | `string` | No | Package defaults | Text label rendered with the regression/diamond summary when present. | Only meaningful for regression-style forest plot flows. |
| `forestPlot.regression.baseLineColor` | CSS color string | No | Package defaults | Color for the regression baseline and diamond when supported. | Blank values use renderer defaults. |

Forest plots also use normal chart `xAxis`, `columns`, `table`, and `dataFormat.bottom*` settings. Column configs can mark forest-plot table columns with the chart-owned column extensions below.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `columns.*.forestPlot` | `boolean` | No | `false` | Marks the column for forest plot table/sidebar display. | Only meaningful for `visualizationType: "Forest Plot"`. |
| `columns.*.forestPlotAlignRight` | `boolean` | No | `false` | Right-aligns the forest plot column value. | Only meaningful for forest plot column output. |
| `columns.*.forestPlotStartingPoint` | `number` | No | None | Forest plot baseline/starting point metadata for that column. | Advanced forest plot table behavior. |

### Regions: `regions[]`

Regions are chart-owned shaded ranges or markers.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `regions[].from`, `regions[].to` | `string` | Yes | None | Start and end values for the region. | May represent dates, categories, or numeric thresholds. |
| `regions[].label` | `string` | No | `''` | Region label shown in supported UIs. | Optional. |
| `regions[].color` | `string` | No | App font color (`--cool-gray-90`) | Label text color. | CSS color string. Legacy configs migrated to `red` when this was omitted before `4.26.5`. |
| `regions[].background` | `string` | No | `--cool-gray-50` | Fill color for the shaded region. | CSS color string. Rendered at 30% opacity. Legacy configs migrated to `red` when this was omitted before `4.26.5`. |
| `regions[].range` | `string` | No | `Custom` in editor flows | Region mode metadata. | Package-defined values such as `Custom`. |
| `regions[].fromType`, `regions[].toType` | `string` | No | `Fixed` | Interpretation of the start/end values. | Examples include `Fixed`, `Previous Days`, and `Last Date`. |

### Radar: `radar.*`

`radar` is chart-owned and only meaningful when `visualizationType` is `Radar`.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `xAxis.dataKey` | `string` | Yes for radar | None | Category column used for radar axes. | Required by the radar renderer. |
| `radar.gridRings` | `number` | No | `5` | Number of concentric grid rings. | Editor constrains this to 3-10. |
| `radar.showGridRings` | `boolean` | No | `true` | Shows the radar grid rings. | `true`, `false` |
| `radar.gridRingStyle` | `polygons \| circles` | No | `polygons` | Shape of the grid rings. | `polygons` follows the axis count; `circles` renders rounded rings. |
| `radar.scaleMin` | `number` | No | `0` | Minimum radar scale value at the center. | Numeric. |
| `radar.scaleMax` | `number \| string` | No | `''` | Maximum radar scale value. | Blank means auto-calculate from data. |
| `radar.showFill` | `boolean` | No | `false` when omitted | Fills the polygon area. | The initial state does not seed this field; renderer/editor treat missing as false. |
| `radar.fillOpacity` | `number` | No | `0.3` | Opacity for polygon fill. | Used when `showFill` is true; expected range is 0-1. |
| `radar.strokeWidth` | `number` | No | `2` | Width of the polygon outline. | Editor constrains this to 1-5. |
| `radar.showPoints` | `boolean` | No | `true` | Shows point markers at polygon vertices. | `true`, `false` |
| `radar.pointRadius` | `number` | No | `4` | Radius of point markers. | Used when `showPoints` is true. |
| `radar.axisLabelOffset` | `number` | No | `15` | Distance between axis endpoint and label. | Pixel-like offset. |

### Sankey: `sankey.*`

`sankey` is chart-owned and only meaningful when `visualizationType` is `Sankey`. Sankey configs commonly use `data[0]` to carry `links`, `storyNodeText`, `tooltips`, and optional `tableData`.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `sankey.iterations` | `number` | No | `1` | Layout iteration count. | Higher values can adjust node placement. |
| `sankey.nodePadding` | `number` | No | `55` | Vertical spacing between nodes. | Pixel-like layout value. |
| `sankey.nodeSize.nodeWidth` | `number` | No | `26` | Width of each node. | Initial state also contains `nodeHeight`, but the public width control is the meaningful renderer field. |
| `sankey.margin.margin_x`, `sankey.margin.margin_y` | `number` | No | `0`, `25` | Horizontal and vertical layout margins. | Pixel-like layout values. |
| `sankey.rxValue` | `number` | No | `0.9` | Node corner radius. | SVG rectangle radius value. |
| `sankey.nodeColor.default`, `sankey.nodeColor.inactive` | CSS color string | No | `#ff8500`, `#808080` | Node colors for default and inactive states. | Used by interactive highlighting. |
| `sankey.linkColor.default`, `sankey.linkColor.inactive` | CSS color string | No | `#ffc900`, `#D3D3D3` | Link colors for default and inactive states. | Used by interactive highlighting. |
| `sankey.opacity.nodeOpacityDefault`, `sankey.opacity.nodeOpacityInactive` | `number` | No | `1.0`, `0.1` | Node opacity for default and inactive states. | Expected range is 0-1. |
| `sankey.opacity.LinkOpacityDefault`, `sankey.opacity.LinkOpacityInactive` | `number` | No | `1.0`, `0.1` | Link opacity for default and inactive states. | Field names preserve legacy capitalization. |
| `sankey.nodeFontColor`, `sankey.storyNodeFontColor` | CSS color string | No | `black`, `#006778` | Text colors for node labels and story-node text. | CSS color strings. |
| `sankey.nodeValueStyle.textBefore`, `sankey.nodeValueStyle.textAfter` | `string` | No | `(`, `)` | Text wrapped around node values. | Useful for units or punctuation around displayed values. |
| `enableTooltips` | `boolean` | No | `false` | Enables authored Sankey tooltip content. | Tooltip data in `data[0].tooltips` only displays when this is enabled. |
| `data[0].links` | `{ source: string; target: string; value: number }[]` | Yes for Sankey | None | Sankey link definitions. | Required for a Sankey chart to render nodes and flows. |
| `data[0].storyNodeText` | `{ StoryNode: string; segmentTextBefore: string; segmentTextAfter: string }[]` | No | `[]` | Optional story text for selected nodes. | Editor supports up to three story nodes. |
| `data[0].tooltips` | `object[]` | No | `[]` | Extra tooltip content for Sankey links/nodes. | `enableTooltips` controls whether configured Sankey tooltips display. |
| `data[0].tableData` | `object[]` | No | None | Custom table data for Sankey. | When present, chart table output can use this instead of default transformed rows. |

### Box Plot: `boxplot.*`

`boxplot` is chart-owned. Chart runtime derives `plots`, `categories`, and `tableData` from the active dataset for `visualizationType: "Box Plot"`; consumers usually only author labels and display toggles.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `boxplot.labels.q1`, `boxplot.labels.q3` | `string` | No | `Lower Quartile`, `Upper Quartile` | Labels for the lower and upper quartile values in box plot tooltips. | Current runtime renders these labels in tooltip output. |
| `boxplot.labels.median` | `string` | No | `Median` | Label for the median value in box plot tooltips. | Current runtime renders this label in tooltip output. |
| `boxplot.labels.iqr` | `string` | No | `Interquartile Range` | Label for the interquartile range in box plot tooltips. | Current runtime renders this label in tooltip output. |
| `boxplot.plotOutlierValues` | `boolean` | No | `false` | Plots outlier values. | Box plot display toggle. |
| `boxplot.plotNonOutlierValues` | `boolean` | No | `true` | Plots non-outlier values. | Box plot display toggle. |
| `boxplot.hideOutliers` | `boolean` | No | `false` | Excludes outlier values from the box plot scale/domain calculation. | Runtime-read advanced setting; this is separate from whether outlier points are drawn. |
| `boxplot.borders` | `string` | No | `'true'` | Border metadata for box plot rendering. | Stored as a string for compatibility. |

### Horizon Chart: `horizon.*`

`horizon` is chart-owned and only meaningful when `visualizationType` is `Horizon Chart`. The renderer merges authored values with `HORIZON_DEFAULTS`.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `horizon.numLayers` | `number` | No | `4` | Number of horizon layers/bands per series. | More layers provide finer gradations but denser rows. |
| `horizon.bandGap` | `number` | No | `15` | Gap between series bands. | Pixel-like value subtracted from available row height. |
| `horizon.bottomPadding` | `number` | No | `15` | Padding below the bottom band above the x-axis. | Pixel-like value. |

## Fields You Can Ignore

These fields sometimes appear in saved configs, copied editor state, or migration output, but consumers generally do not need to author or maintain them:

| Field or group | Why you can ignore it |
| --- | --- |
| `runtime.*` | Internal runtime state created while the chart is loading and transforming data. |
| `formattedData` | Runtime-transformed data snapshot, not part of the authoring contract. |
| `runtimeDataUrl` | Runtime-managed URL after filters are applied. |
| `suppressedData` | Legacy suppression metadata from older saved configs. Current suppression/effect markers use `preliminaryData`, documented above, but regular Bar/Combo legend labels can still read this field for legacy suppression labels. |
| `xAxis.sortDates` | Legacy date-sort flag migrated to `xAxis.type: "date-time"` and then removed. Current configs should use axis type/date fields and `xAxis.sortByRecentDate` where relevant. |
| `uid` | Generated identifier used for shared filters and internal wiring. |
| `newViz` | Editor confirmation flag. |
| `debugSvg` | Debug-only renderer flag. |
| `showDownloadMediaButton` | Legacy editor/export artifact. |
| `showSidebar` | Stale chart-sidebar artifact retained by broad legacy types but not used by current chart rendering. |
| `legend.lineMode` | Legacy/editor-exported legend style flag. Author `legend.style: "lines"` for current configs. |
| `visual.tp5Treatment`, `visual.tp5Background` | Feature-gated chart shell flags that may appear in saved/editor configs, but current chart rendering removes TP5 treatment classes while chart/map TP5 treatment is disabled. |
| `padding` | Internal layout padding object preserved for compatibility. |
| `area` | Legacy area-chart metadata. |
| `brush` | Internal brush selection state managed by the renderer. Consumer-facing brush settings (`brushActive`, `brushDefaultRecentDateCount`, `brushDynamicYAxis`) live on `xAxis` and are documented in the local axis section above. |
| `xAxis.axisBBox`, `xAxis.maxValue`, `xAxis.tickWidthMax`, `yAxis.axisBBox`, `yAxis.maxValue`, `yAxis.tickWidthMax` | Runtime axis layout measurements and scale snapshots. |
| `sankey.data` | Processed Sankey container mirrored from `data[0]` by runtime/editor flows. |
| `sankey.title`, `sankey.overallSize`, `sankey.nodeSize.nodeHeight`, `sankey.storyNodeText` | Saved Sankey defaults or legacy/editor artifacts not used by the current renderer. Story-node text that affects rendering lives in `data[0].storyNodeText`. |
| `runtime.series[].originalDataKey` | Original series key retained on generated runtime series during dynamic-category rendering. |
| `boxplot.plots`, `boxplot.categories`, `boxplot.tableData` | Runtime-derived box plot structures generated from the active dataset. |
| `boxplot.labels.maximum`, `boxplot.labels.minimum`, `boxplot.labels.q2`, `boxplot.labels.q4`, `boxplot.labels.mean`, `boxplot.labels.sd`, `boxplot.labels.count`, `boxplot.labels.outliers`, `boxplot.labels.values`, `boxplot.labels.lowerBounds`, `boxplot.labels.upperBounds` | Persisted box plot label defaults that current chart/table output does not render. |
| `forestPlot.description.*`, `forestPlot.result.*` | Legacy saved defaults for older forest plot side-column labels. Current side-column rendering uses `columns.*.forestPlot` fields instead. |
| `forestPlot.leftWidthOffset`, `forestPlot.rightWidthOffset`, `forestPlot.leftWidthOffsetMobile`, `forestPlot.rightWidthOffsetMobile` | Legacy saved/editor layout offsets. Current forest plot layout reserves left/right space from measured text and forest-plot column settings. |
| `horizon.mode`, `horizon.negativePalette` | Scaffolded horizon metadata not used by the current renderer. Current Horizon rendering treats values as positive magnitudes. |
| `color` | Legacy top-level palette token kept for backward compatibility. |
| `palette` | Legacy top-level palette token superseded by `general.palette`. |
| `isPaletteReversed` | Legacy top-level palette reversal flag. Current palette reversal is controlled by `general.palette.isReversed`; two-color charts use `twoColor.isPaletteReversed`. |
| `visualizationSubType: "horizontal"` | Legacy horizontal-bar subtype. Current configs should use `orientation: "horizontal"` and keep `visualizationSubType` as `regular` or `stacked`. |
| `isLegendValue` | Legacy legend-display flag from older saved configs; current legend behavior is configured under `legend.*`. |
| `dataFormat.onlyShowTopPrefixSuffix` | Legacy/editor-export number-formatting artifact; current prefix/suffix behavior is controlled by the axis-specific `dataFormat.*Prefix` and `dataFormat.*Suffix` fields documented above. |
| `datasets` | Dashboard-only data container passed into the component, not authored inside a standalone chart config. |
| `migrations` | Editor/migration bookkeeping. |
| `dynamicMarginTop` | Editor/export artifact used by older saved configs. |
| `fontSize` | Legacy typography setting from older saved exports. |
| `xScale`, `yScale` | Runtime scale functions, not authored config. |
