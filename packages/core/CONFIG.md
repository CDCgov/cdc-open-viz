# `@cdc/core` Shared Configuration Types

This document defines configuration structures that are shared across multiple COVE packages. Package-level `CONFIG.md` files should document package-owned fields locally and link here for reused nested types.

Most of these shapes are only partially authored by consumers. Saved configs often include editor- and runtime-managed fields, but the tables below focus on the shared fields that packages actually read and preserve.

## Organization

| Section | Covers |
| --- | --- |
| Shared primitives | Cross-package enums and simple top-level value shapes |
| Data shaping and loading | Shared dataset normalization and dataset-loading metadata |
| Shared visualization shell | Common visualization-level structures reused by multiple packages |
| Filters | Shared filter configuration used by charts, tables, maps, dashboards, and markup-driven packages |
| Chart and map structures | Shared axis, series, legend, annotation, region, and related types |
| Tables and columns | Shared data-table and download-control structures |
| Markup variables | Shared dynamic text and icon replacement structures |
| Trend indicators | Shared arrow and comparison metadata |
| Data-driven colors | Shared value-to-color mapping structures |

## Shared Primitives

### `ComponentThemes`

Use these values anywhere a package accepts a shared theme token.

| Value |
| --- |
| `theme-amber` |
| `theme-blue` |
| `theme-brown` |
| `theme-cyan` |
| `theme-green` |
| `theme-indigo` |
| `theme-orange` |
| `theme-pink` |
| `theme-purple` |
| `theme-slate` |
| `theme-teal` |

### `Version`

| Type | Description | Format |
| --- | --- | --- |
| `string` | Semantic version string used to record the COVE version associated with a saved config. | `<major>.<minor>.<patch>` or `<major>.<minor>.<patch>-<label>` |

Examples: `4.26.4`, `4.26.4-beta.1`

### `FilterBehavior`

| Type | Description | Allowed values |
| --- | --- | --- |
| `string` | Chooses whether filters apply immediately or wait for explicit confirmation. | `Apply Button`, `Filter Change` |

## Data Shaping And Loading

### `DataDescription`

`DataDescription` tells COVE how to standardize developer-provided data into the row/column shape expected by the consuming package. When nested under `ConfigureData.dataDescription` or `DataSet.dataDescription`, it is a partial object: consumers usually only provide the fields needed for the chosen data shape.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `series` | `boolean` | Yes | Declares whether the source data contains multiple series. | Must be defined before standardization can run. |
| `horizontal` | `boolean` | Yes | Declares whether the source data is arranged horizontally instead of in tall row form. | Must be defined before standardization can run. |
| `singleRow` | `boolean` | No | For non-horizontal series data, indicates whether the source is stored in a single row rather than multiple rows. | Required when `series` is `true` and `horizontal` is `false`. |
| `seriesKey` | `string` | No | Column/key name that identifies the series dimension after standardization. | Required for horizontal series data and for vertical multi-row series data. |
| `xKey` | `string` | No | Column/key name that should become the primary category or x-axis field after standardization. | Required for vertical multi-row series data. |
| `valueKeysTallSupport` | `string[]` | No | Additional keys to preserve as value-like columns when transforming tall data. | Preferred over legacy `valueKey`/`valueKeys` patterns when a tall source needs multiple numeric columns preserved. |
| `ignoredKeys` | `string[]` | No | Source keys that should be dropped during developer standardization. | Optional filter list used during data shaping. |

### `ConfigureData`

Packages that support named datasets or shared loading helpers often reuse this structure.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `dataKey` | `string` | No | Dataset key used to select a named dataset from `datasets`. | Common in dashboard child visualizations and other named-dataset flows. |
| `data` | `object[]` | No | Inline dataset attached directly to the config. | Often omitted when `dataUrl` or `datasets` is used. |
| `dataMetadata` | `Record<string, string>` | No | Supplemental metadata exposed to markup variables and shared helpers. | Often populated automatically during fetch flows. |
| `formattedData` | `object[]` | No | Normalized or transformed data produced by loaders and editors. | Usually runtime-managed rather than hand-authored. |
| `dataDescription` | `Partial<DataDescription>` | No | Shared data-shaping metadata used before rendering. | See `DataDescription` above. This is intentionally partial here. |

### `DataSet`

Dashboards and dataset-driven packages use `DataSet` entries inside a `datasets` map.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `dataUrl` | `string` | Yes | Source URL for the dataset. | May point at JSON, CSV, or another supported fetch target. |
| `runtimeDataUrl` | `string` | No | Runtime-expanded URL after query params or filter state are applied. | Usually runtime-managed and not authored directly. |
| `dataFileSourceType` | `string` | Yes | Indicates how the dataset was provided. | Common values in saved configs are `file` and `url`. |
| `dataFileFormat` | `string` | No | Saved file format metadata. | Example: `json`, `csv`. |
| `dataFileName` | `string` | No | Original uploaded filename. | Informational/editor metadata. |
| `dataFileSize` | `number` | No | Original uploaded file size. | Informational/editor metadata. |
| `preview` | `boolean` | No | Marks a dataset as preview/editor-oriented. | Usually editor-managed. |
| `loadQueryParam` | `string` | No | Browser query-string key appended to the URL during load. | Used by some dataset-loading flows. |
| `dataKey`, `data`, `dataMetadata`, `formattedData`, `dataDescription` | Shared `ConfigureData` fields | No | Same shared loading fields described above. | `DataSet` extends `ConfigureData`, so these fields follow the same rules as above. |

## Shared Visualization Shell

### `Visualization`

`Visualization` is a broad shared base shape that many packages extend. Package docs should still document package-owned fields locally, but these common fields appear across multiple visualization configs.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `type` | `string` | No | Visualization package type. | Common values include `chart`, `map`, `data-bite`, `waffle-chart`, `markup-include`, `filtered-text`, `table`, and `navigation`. |
| `title` | `string` | No | Shared title field used by multiple packages. | Package-specific title handling still varies. |
| `theme` | `ComponentThemes \| string` | No | Shared shell theme token. | Most packages use the `theme-*` tokens listed above. |
| `locale` | `string` | No | Locale used for formatting. | Any valid `Intl` locale is accepted. |
| `filters` | `VizFilter[]` | No | Shared interactive filter list. | See `VizFilter` below. |
| `filterBehavior` | `FilterBehavior` | Yes | Shared filter apply behavior. | See `FilterBehavior` above. |
| `footnotes` | `Footnotes` | No | Shared static or dynamic footnotes block. | See `Footnotes` below. |
| `general` | `General` | No | Shared general settings reused by some packages. | See `General` below. |
| `visual` | `ComponentStyles` | No | Shared shell styling toggles used by multiple packages. | See `ComponentStyles` below. |
| `table` | `Table` | No | Shared table/download settings. | See `Table` below. |
| `runtime` | `Runtime` | No | Runtime-managed transformed config state. | Usually not hand-authored. |
| `showEditorPanel` | `boolean` | No | Editor chrome flag. | Not part of the consumer-facing contract. |
| `newViz` | `boolean` | No | Editor creation/preview flag. | Not part of the consumer-facing contract. |
| `uid` | `string \| number` | No | Internal identifier for shared wiring. | Usually injected by editors or dashboards. |

### `ComponentStyles`

`ComponentStyles` collects the shared shell styling flags reused by chart, map, waffle-chart, markup-include, and related packages.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `border` | `boolean` | No | Adds the standard component border. | `true`, `false` |
| `accent` | `boolean` | No | Enables the accent shell treatment. | `true`, `false` |
| `background` | `boolean` | No | Enables the shared theme-background treatment. | `true`, `false` |
| `hideBackgroundColor` | `boolean` | No | Suppresses the shared background color while keeping the wrapper styling. | `true`, `false` |
| `borderColorTheme` | `boolean` | No | Uses the theme color for the border treatment. | `true`, `false` |
| `highlightWrappers` | `boolean` | No | Highlights wrapper regions in the editor/runtime flows that support it. | Optional shared extension; many packages ignore it. |

### `General`

`General` collects some shared visualization-level settings, especially in map and chart-adjacent flows.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `type` | `string` | No | Shared visualization subtype metadata. | Package-specific meaning varies. |
| `title` | `string` | No | Shared title string stored in the general block. | Used by some editor flows. |
| `geoType` | `string` | No | Shared map geography mode. | Example values include `us`, `world`, `single-state`, and related map types. |
| `allowMapZoom` | `boolean` | No | Enables map zoom behavior. | Map-specific. |
| `showMissingDataLabel` | `boolean` | No | Shows a label for missing data. | Common in maps and table-adjacent views. |
| `showSuppressedSymbol` | `boolean` | No | Shows a suppression marker when values are suppressed. | Package-specific rendering still varies. |
| `showZeroValueData` | `boolean` | No | Keeps zero values visible instead of treating them as absent. | Package-specific rendering still varies. |
| `hideNullValue` | `boolean` | No | Hides null-valued records in supported packages. | Common in maps and charts. |
| `showAnnotationDropdown` | `boolean` | No | Shows the annotation dropdown in packages that support it. | Used by map/editor flows. |
| `annotationDropdownText` | `string` | No | Label used for the annotation dropdown. | Used by map/editor flows. |
| `useIntelligentLineChartLabels` | `boolean` | No | Enables the chart runtime's smarter line-end label placement. | Chart-specific extension stored in `general` even though older shared types omit it. |
| `boxplot` | `BoxPlot` | No | Shared box plot metadata. | See `BoxPlot` below. Usually seeded by package defaults. |
| `palette` | `Palette` | No | Shared palette selection and migration metadata. | See `Palette` below. |

### `Palette`

Use `Palette` when a package stores its v2 palette selection in `general.palette`.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `name` | `string` | No | Primary palette name. | Package-specific palette lists vary. |
| `version` | `'1.0' \| '2.0'` | No | Palette-system version metadata. | If this is omitted while `general.palette` exists, the v2 migration helpers usually treat the config as v2; configs with no `general.palette` still fall back to legacy v1 behavior. |
| `isReversed` | `boolean` | No | Reverses the active palette order. | Common in sequential color scales. |
| `customColors` | `string[]` | No | Custom color list used in some editor flows. | Usually CSS color strings or hex values. |
| `customColorsOrdered` | `string[]` | No | Ordered custom color list preserved by the editor. | Used when explicit order matters. |
| `backups` | `PaletteBackup[]` | No | Backup palette selections retained for migration or special variants. | Each backup stores a palette `name` plus optional `type`, `version`, and `isReversed`. The last backup is what rollback helpers restore by default. |

### `Runtime`

`Runtime` stores transformed chart-oriented state after data normalization and config processing.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `xAxis`, `yAxis` | `Axis` | No | Runtime axis snapshots after normalization. | Usually generated internally. |
| `series` | `Series` | No | Runtime-resolved series definitions. | Usually generated internally. |
| `seriesKeys` | `string[]` | No | Runtime list of active series keys. | Usually generated internally. |
| `seriesLabels` | `Record<string, any>` | No | Runtime series label lookup. | Usually generated internally. |
| `seriesLabelsAll` | `string[]` | No | Runtime list of all series labels. | Usually generated internally. |
| `areaSeriesKeys` | `object[]` | No | Runtime subset used by area-chart flows. | Usually generated internally. |
| `barSeriesKeys`, `lineSeriesKeys` | `string[]` | No | Runtime subsets by chart family. | Usually generated internally. |
| `forecastingSeriesKeys` | `ForecastingSeriesKey[]` | No | Runtime forecasting metadata. | Usually generated internally. |
| `originalXAxis` | `{ dataKey: string; name: string; axis: string }` | No | Snapshot of the original x-axis wiring. | Usually generated internally. |
| `horizontal` | `boolean` | No | Runtime orientation flag. | Usually generated internally. |
| `editorErrorMessage` | `string` | No | Runtime/editor validation message. | Usually generated internally. |
| `uniqueId` | `string \| number` | No | Runtime unique id. | Usually generated internally. |

### `Footnotes`

Packages that support static or data-driven footnotes use this shared structure.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `staticFootnotes` | `Footnote[]` | No | Manually-authored footnotes shown in order. | Each footnote has `text` and an optional `symbol`. |
| `dynamicFootnotes.textColumn` | `string` | No | Source column that provides the footnote text. | Required when `dynamicFootnotes` is used. |
| `dynamicFootnotes.symbolColumn` | `string` | No | Source column that provides the footnote symbol. | Optional. |
| `dynamicFootnotes.orderColumn` | `string` | No | Source column used to sort dynamic footnotes. | Optional. |
| `filters` | `VizFilter[]` | No | Optional filter set applied before dynamic footnotes resolve. | Shared filter shape from this document. |
| `dataKey` | `string` | No | Named dataset key used for dynamic footnotes. | Common in dashboards. |
| `data` | `object[]` | No | Inline data used for dynamic footnotes. | Optional. |

## Filters

### `VizFilter`

`VizFilter` is the shared filter shape used by charts, tables, maps, dashboards, and some markup-driven packages.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `columnName` | `string` | Yes | Source column used to produce values and filter rows. | Must exist in the active dataset. |
| `values` | `string[]` | No | Available filter values. | Usually filled at runtime or by the editor. |
| `showDropdown` | `boolean` | No | Determines whether the control is shown. | Usually editor-seeded. |
| `id` | `number` | No | Internal filter id. | Usually editor-generated. |
| `parents` | `number[]` | No | Parent filter ids for cascaded filter relationships. | Used in chained filter setups. |
| `active` | `string \| string[]` | No | Current selection. | Arrays are used by `multi-select`. |
| `queuedActive` | `string \| string[]` | No | Pending selection when apply-button flows are used. | Often mirrors `active` when filters auto-apply. |
| `filterStyle` | `string` | Yes | Filter control style. | `tab`, `tab-simple`, `pill`, `tab bar`, `dropdown`, `dropdown bar`, `multi-select`, `nested-dropdown`, `combobox` |
| `label` | `string` | No | Visible label for the filter. | User-facing display string. |
| `labels` | `Record<string, string>` | No | Optional display labels per raw value. | Used when raw values need nicer presentation. |
| `order` | `string` | No | Value ordering strategy. | `asc`, `desc`, `cust`, `column` |
| `orderColumn` | `string` | No | Column used when ordering by another column. | Used when `order` is `column`. |
| `orderedValues` | `string[]` | No | Explicit custom order. | Used when `order` is `cust`. |
| `queryParameter` | `string` | No | Legacy query-string metadata on older configs. | Current URL helpers use `setByQueryParameter` instead. |
| `setByQueryParameter` | `string` | No | Query-string parameter used to seed active state and build URLs. | Current URL sync uses this exact value. |
| `type` | `string` | Yes | Filter implementation mode. | In current shared types this is `url`. |
| `defaultValue` | `string` | No | Default selection when nothing else is active. | Used by reset flows when present. |
| `resetLabel` | `string` | No | Label for the reset/all option. | Optional. |
| `staticFilter` | `boolean` | No | Marks the filter as static. | Used by some dashboard flows. |
| `filterFootnotes` | `boolean` | No | Also filters shared footnotes in packages that support them. | Optional. |
| `displaySubgroupingOnly` | `boolean` | No | Shows only subgrouping controls for supported styles. | Used by nested filter flows. |
| `selectLimit` | `number` | No | Maximum selected values for `multi-select`. | Only relevant to `multi-select`. |
| `subGrouping` | `SubGrouping` | No | Nested dropdown subgrouping metadata. | See `SubGrouping` below. |

### `SubGrouping`

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `active` | `string` | No | Active subgroup value. | Usually runtime-managed. |
| `columnName` | `string` | Yes | Source column used to compute subgroup values. | Used by nested dropdown filters. |
| `setByQueryParameter` | `string` | No | Query parameter used to seed the subgroup. | Only meaningful when URL syncing is enabled. |
| `order` | `string` | No | Sort order for subgroup values. | `asc`, `desc`, `cust`, `column` |
| `defaultValue` | `string` | No | Default subgroup selection. | Optional. |
| `valuesLookup` | `Record<string, { orderedValues?: string[]; values: string[] }>` | No | Cached subgroup options keyed by parent value. | Usually runtime-managed. |

## Chart And Map Structures

### `Axis`

Use `Axis` for chart x-axis and y-axis settings, and for runtime axis snapshots.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `dataKey` | `string` | No | Source field used by the axis. | Commonly required for visible axes. |
| `type` | `string` | No | Axis scale mode. | Common values include categorical, linear, date, and time-like modes. |
| `label` | `string` | No | Axis title shown near the axis. | Optional. |
| `hideAxis`, `hideTicks`, `hideLabel` | `boolean` | No | Hides the axis line, tick marks, or label. | Optional display controls. |
| `dateParseFormat`, `dateDisplayFormat` | `string` | No | Input and output date formatting hints. | Used by date-based axes. |
| `numTicks` | `number` | No | Suggested number of ticks. | Runtime may still adjust this. |
| `tickRotation` | `number` | No | Tick label rotation in degrees. | Optional. |
| `max`, `min` | `string` | No | Explicit axis bounds. | Stored as strings in the shared type. |
| `sortKey` | `string` | No | Alternate key used for sorting axis values. | Common in categorical/date flows. |
| `sortDates`, `sortByRecentDate` | `boolean` | No | Date-sorting helpers. | Optional. |
| `categories` | `object[]` | No | Category metadata for specialized axis rendering. | Mostly used by advanced chart flows. |
| `anchors` | `Anchor[]` | No | Shared target-line or anchor metadata. | Each anchor stores `value`, `color`, and `lineStyle`. |
| `brushActive`, `brushDefaultRecentDateCount` | `boolean \| number` | No | Brush-specific axis state. | Usually runtime-managed. |

### `Series`

`Series` is an array of series definitions used by charts and runtime chart state.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `dataKey` | `string` | Yes | Source value column for the series. | Must exist in the active dataset. |
| `name` | `string` | No | Display label for the series. | Optional; packages may infer labels when omitted. |
| `axis` | `string` | No | Axis assignment for the series. | Often `left` or `right` in dual-axis charts. |
| `type` | `string` | No | Series renderer type. | Common values include line, bar, area, and point-like variants. |
| `tooltip` | `boolean` | No | Includes the series in tooltip output. | `true`, `false` |
| `dynamicCategory` | `string` | No | Category key used by dynamic-series flows. | Optional. |
| `stageColumn` | `string` | No | Stage/category metadata for specialized chart families. | Optional. |
| `originalDataKey` | `string` | No | Original series key retained during transformation. | Optional. |
| `confidenceIntervals` | `object[]` | No | Per-series confidence interval metadata. | Each entry uses `high`, `low`, and optional `showInTooltip`. |

### `Column`

Column configs provide shared per-column display, formatting, and table behavior overrides.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `name` | `string` | No | Source column name. | Often omitted when the config key already names the column. |
| `label` | `string` | No | User-facing label. | Often used to replace raw field names. |
| `prefix` | `string` | No | Text prepended to the rendered value. | Example: `$` |
| `suffix` | `string` | No | Text appended to the rendered value. | Example: `%` |
| `roundToPlace` | `number` | No | Decimal precision. | Must be `0` or greater. |
| `commas` | `boolean` | No | Adds locale-aware grouping. | `true`, `false` |
| `useCommas` | `boolean` | No | Legacy alias for comma-grouping behavior. | Still appears in some map/chart exports and shared number-format helpers treat it like `commas`. |
| `dataTable` | `boolean` | No | Includes the column in shared table output. | `true`, `false` |
| `showInViz` | `boolean` | No | Keeps the column visible to the visualization layer. | `true`, `false` |
| `order` | `number` | No | Explicit display order. | Lower numbers appear first. |
| `startingPoint` | `string` | No | Baseline value for some shared formatting helpers. | Legacy-compatible field. |
| `series` | `string` | No | Shared grouping or series label. | Optional. |
| `tooltips` | `boolean` | No | Enables tooltip formatting for the column. | `true`, `false` |
| `forestPlot`, `forestPlotAlignRight` | `boolean` | No | Forest-plot-specific table behavior. | Only meaningful in packages that support forest plots. |
| `forestPlotStartingPoint` | `number` | No | Forest plot baseline. | Only meaningful in packages that support forest plots. |

### `Legend`

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `hide` | `boolean` | No | Shows or hides the legend. | `true`, `false` |
| `label` | `string` | No | Legend heading or label. | Optional. |
| `description` | `string` | No | Supporting legend description. | Optional. |
| `position` | `string` | No | Legend placement. | `left`, `bottom`, `top`, `right`, `side` |
| `type` | `string` | No | Legend renderer mode. | Package-specific meaning varies. |
| `behavior` | `string` | No | Legend interaction behavior. | Common values include `highlight` and `isolate`. |
| `singleRow` | `boolean` | No | Forces one-row layout when supported. | Optional. |
| `axisAlign` | `boolean` | No | Aligns the legend with chart axes when supported. | Optional. |
| `highlightOnHover` | `boolean` | No | Enables hover-based emphasis. | Optional. |
| `hideSuppressedLabels` | `boolean` | No | Hides suppressed values from the legend. | Optional. |
| `reverseLabelOrder` | `boolean` | No | Reverses item order. | Optional. |
| `verticalSorted` | `boolean` | No | Sorts vertical legends in supported layouts. | Optional. |
| `groupBy` | `string` | No | Grouping key for advanced legend layouts. | Optional. |
| `colorCode` | `string` | No | Shared color-code metadata. | Optional. |
| `additionalCategories` | `string[]` | No | Extra categories added to the legend. | Optional. |

### `Annotation`

Shared annotation structures are used by charts and maps that support text or callout overlays.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `text` | `string` | Yes | HTML/text content shown in the annotation. | Rendered by the consuming package. |
| `anchorMode` | `string` | No | Whether the annotation uses fixed coordinates or data anchoring. | `fixed`, `data` |
| `x`, `y` | `number` | Yes | Subject position, usually stored as percentages. | Commonly 0-100 in editor flows. |
| `dx`, `dy` | `number` | Yes | Label offset from the subject point. | Can be negative or positive. |
| `opacity` | `number` | Yes | Background opacity. | Stored numerically. |
| `lineType` | `string` | Yes | Styling for the connector line. | Package-specific line styles vary. |
| `connectionType` | `string` | Yes | Connector geometry. | `line`, `curve`, `elbow`, `none` |
| `marker` | `string` | Yes | Subject marker type. | `arrow`, `circle` |
| `snapToSubject` | `boolean` | Yes | Keeps the label anchored to the subject point. | `true`, `false` |
| `edit.subject`, `edit.label` | `boolean` | Yes | Editor permissions for dragging the subject or label. | Editor-facing but persisted. |
| `anchor.horizontal`, `anchor.vertical` | `boolean` | Yes | Anchor-line orientation flags. | Persisted editor geometry. |
| `dataX` | `any` | No | X value for data-anchored annotations. | Type depends on chart scale. |
| `seriesKey` | `string` | No | Series to snap the annotation to. | Optional. |
| `bezier` | `number` | No | Curve offset for curved connectors. | Only relevant to `connectionType: curve`. |
| `savedDimensions` | `[number, number]` | Yes | Original saved SVG dimensions. | Used to remap annotation geometry responsively. |
| `displayDropdown` | `boolean` | No | Shows the annotation in dropdown-driven UIs. | Optional. |

### `Region`

Use `Region` for shaded chart regions or range overlays.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `from`, `to` | `string` | Yes | Start and end values for the region. | May represent dates, categories, or numeric thresholds. |
| `label` | `string` | No | Region label shown in supported UIs. | Optional. |
| `color` | `string` | No | Border or line color. | CSS color string. |
| `background` | `string` | No | Fill color. | CSS color string. |
| `range` | `string` | No | Region mode metadata. | Shared type currently stores `Custom` or other package-defined values. |
| `fromType` | `string` | No | Interpretation of `from`. | Shared type currently stores `Fixed` or `Previous Days`. |
| `toType` | `string` | No | Interpretation of `to`. | Shared type currently stores `Fixed` or `Last Date`. |

### `ConfidenceInterval`

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `lower` | `number \| string` | Yes | Lower confidence bound. | Column name or numeric value depending on package usage. |
| `upper` | `number \| string` | Yes | Upper confidence bound. | Column name or numeric value depending on package usage. |

### `BoxPlot`

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `labels` | `object` | No | User-facing labels for box plot statistics. | Includes labels such as `mean`, `median`, `q1`, `q3`, and `outliers`. |
| `plots` | `object[]` | No | Plot metadata for each rendered distribution. | Includes outliers and bounds. |
| `tableData` | `object[]` | No | Shared table representation of the box plot. | Optional. |
| `categories` | `string[]` | No | Category labels for the plots. | Optional. |
| `plotNonOutlierValues` | `boolean` | No | Includes non-outlier points in supported views. | `true`, `false` |
| `plotOutlierValues` | `boolean` | No | Includes outlier points in supported views. | `true`, `false` |
| `hideOutliers` | `boolean` | No | Hides outlier rendering. | `true`, `false` |
| `geoType` | `string` | No | Shared geo metadata when box plots are used in geo-oriented flows. | Optional. |
| `borders` | `string` | No | Border treatment metadata. | Optional. |

## Tables And Columns

### `Table`

`Table` controls built-in data tables and related download controls across charts, dashboards, maps, and standalone table packages.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `show` | `boolean` | No | Shows or hides the built-in table. | `true`, `false` |
| `label` | `string` | No | Toggle label or heading for the table. | Optional. |
| `caption` | `string` | No | Table caption. | Optional. |
| `expanded` | `boolean` | No | Starts the table expanded. | `true`, `false` |
| `collapsible` | `boolean` | No | Allows the table to collapse. | `true`, `false` |
| `limitHeight` | `boolean` | No | Limits the rendered table height. | `true`, `false` |
| `height` | `number` | No | Height used when the table is height-limited. | Pixels in current implementations. |
| `cellMinWidth` | `number` | No | Minimum width for rendered cells. | Optional. |
| `showBottomCollapse` | `boolean` | No | Adds a bottom collapse control. | Optional. |
| `showVertical` | `boolean` | No | Uses a vertical-style table layout when supported. | Optional. |
| `showNonGeoData` | `boolean` | No | Includes non-geo rows in map-related tables. | Optional. |
| `forceDisplay` | `boolean` | No | Keeps the built-in table visible even when a package would normally hide it. | Map-specific extension; current map runtime defaults it to `true`. |
| `groupBy` | `string` | No | Groups rows by a source column. | Optional. |
| `excludeColumns` | `string[]` | No | Hides specific columns. | Optional. |
| `pivot` | `Pivot` | No | Pivots one column into multiple value columns. | `Pivot` stores `columnName` and `valueColumns`. |
| `defaultSort` | `DefaultSort` | No | Default sort for the table. | Stores `column`, `sortDirection`, and optional `customOrder`. |
| `dateDisplayFormat` | `string` | No | Date format used by table output. | Optional. |
| `indexLabel` | `string` | No | Label for the row index column. | Optional. |
| `download` | `boolean` | No | Enables downloads generally. | `true`, `false` |
| `downloadVisibleDataOnly` | `boolean` | No | Restricts downloads to the currently visible subset. | `true`, `false` |
| `includeContextInDownload` | `boolean` | No | Includes surrounding context in supported downloads. | Optional. |
| `downloadDataLabel`, `downloadImageLabel`, `downloadUrlLabel` | `string` | No | Labels for download actions. | Optional. |
| `downloadImageButton`, `downloadPdfButton` | `boolean` | No | Shows image or PDF download buttons. | Optional. |
| `showDownloadImgButton`, `showDownloadPdfButton`, `showDownloadUrl`, `showDownloadLinkBelow`, `showDataTableLink` | `boolean` | No | Legacy or package-specific download/link toggles. | Optional. |
| `sharedFilterColumns` | `string[]` | No | Runtime-added shared-filter helper column list. | Usually runtime-managed. |

## Markup Variables

### `MarkupConfig`

`MarkupConfig` enables reusable placeholder tags such as `{{lastUpdated}}` inside titles, body copy, footnotes, and other supported text fields.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `enableMarkupVariables` | `boolean` | No | Turns markup variable replacement on or off for the package. | `true`, `false` |
| `markupVariables` | `MarkupVariable[]` | No | List of variable definitions available to the package. | See `MarkupVariable` below. |

### `MarkupVariable`

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `name` | `string` | Yes | Human-readable label used in the editor. | Example: `Last Updated` |
| `tag` | `string` | Yes | Placeholder token inserted into authored text. | Example: `{{lastUpdated}}` |
| `conditions` | `MarkupCondition[]` | Yes | Optional row-level conditions used to narrow which record supplies the replacement value. | Empty array means no extra conditions. |
| `columnName` | `string` | No | Data column used when the variable pulls from a dataset column. | Most common source for dynamic values. |
| `sourceType` | `'column' \| 'metadata' \| 'icon'` | No | Explicitly declares where the replacement comes from. | If omitted, COVE infers `metadata` when `metadataKey` is present; otherwise `column`. |
| `addCommas` | `boolean` | No | Adds locale-aware grouping separators when the resolved value is numeric. | `true`, `false` |
| `hideOnNull` | `boolean` | No | Suppresses the variable output when the resolved value is nullish. | `true`, `false` |
| `metadataKey` | `string` | No | Metadata key used when `sourceType` is `metadata`. | Reads from `config.dataMetadata`. |
| `iconId` | `SvgRegistryId` | No | Static shared SVG icon to insert when `sourceType` is `icon`. | Uses the core SVG registry. |
| `outputType` | `'value' \| 'svg'` | No | Output mode for column-driven variables. | `svg` enables data-driven icon mappings. |
| `svgMappings` | `MarkupVariableSvgMapping[]` | No | Maps raw source values to shared SVG icon ids when `outputType` is `svg`. | See `MarkupVariableSvgMapping` below. |

### `MarkupCondition`

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `columnName` | `string` | Yes | Column to inspect before resolving the variable. | Must exist in the active dataset. |
| `isOrIsNotEqualTo` | `'is' \| 'is not'` | Yes | Comparison operator used for the condition. | `is`, `is not` |
| `value` | `string` | Yes | Comparison value. | Compared as a string. |

### `MarkupVariableSvgMapping`

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `sourceValue` | `string` | Yes | Raw dataset value that should trigger a particular icon. | Compared as a string. |
| `svgId` | `SvgRegistryId` | Yes | Shared icon id to render when the source value matches. | Uses the core SVG registry. |

## Trend Indicators

### `TrendIndicatorConfig`

Packages use this structure to display directional arrows and optional labels alongside a primary metric.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `mode` | `'categorical' \| 'numeric' \| null` | No | Chooses how arrow direction is resolved. | `categorical`, `numeric`, `null` |
| `column` | `string` | No | Source column used to determine the arrow state. | Interpretation depends on `mode`. |
| `numericThreshold` | `number` | No | Threshold that the numeric delta must exceed before an up/down arrow is shown. | Used only in `numeric` mode. Values below `0` are invalid. |
| `mappings` | `TrendIndicatorMapping[]` | No | Explicit source-value-to-arrow mapping rules. | Used only in `categorical` mode. |
| `showNoChangeArrows` | `boolean` | No | Allows a `no-change` arrow when a numeric delta falls within the threshold. | Used only in `numeric` mode. |
| `upLabel` | `string` | No | Optional text displayed next to or below an up arrow. | Package decides where it renders. |
| `downLabel` | `string` | No | Optional text displayed next to or below a down arrow. | Package decides where it renders. |
| `noChangeLabel` | `string` | No | Optional text displayed next to or below a no-change arrow. | Used only when `showNoChangeArrows` is enabled. |
| `trendLabel` | `string` | No | Optional shared footer or caption label for the trend indicator block. | Package decides where it renders. |

### `TrendIndicatorMapping`

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `sourceValue` | `string` | Yes | Raw source value to match against. | Compared as a string. |
| `arrowType` | `'up' \| 'down' \| 'no-change'` | Yes | Arrow to display when `sourceValue` matches. | `up`, `down`, `no-change` |

## Data-Driven Colors

### `DataColorConfig`

Packages use this structure when a metric card or visualization changes color based on a categorical source value.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `column` | `string` | No | Source column whose value determines the resolved color. | Compared against the active data rows. |
| `mappings` | `DataColorMapping[]` | No | Value-to-color mapping rules. | Each mapping should use a valid CSS hex color or equivalent CSS color string. |

### `DataColorMapping`

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `sourceValue` | `string` | Yes | Raw source value to match against. | Compared as a string. |
| `color` | `string` | Yes | Color to apply when `sourceValue` matches. | In current editor flows this is usually a hex value such as `#d7f2ed`. |

## Fields You Can Ignore

These fields commonly show up in exported or runtime-hydrated configs, but package consumers should usually leave them alone:

- `runtime`, `showEditorPanel`, `newViz`, and `uid` on `Visualization`
- `formattedData`, `runtimeDataUrl`, `dataFileName`, `dataFileSize`, `preview`, and `loadQueryParam` on dataset-driven configs
- `values`, `active`, `queuedActive`, `id`, and `parents` on `VizFilter`
- `active`, `order`, `defaultValue`, and `valuesLookup` on `SubGrouping`
