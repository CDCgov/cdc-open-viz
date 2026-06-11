# `@cdc/core` Shared Configuration Types

This document defines configuration structures that are shared across multiple COVE packages. Package-level `CONFIG.md` files should document package-owned fields locally and link here for reused nested types.

Most of these shapes are only partially authored by consumers. Saved configs often include editor- and runtime-managed fields, but the tables below focus on the shared fields that packages actually read and preserve.

## Organization

| Section | Covers |
| --- | --- |
| Shared primitives | Cross-package enums and simple top-level value shapes |
| Data shaping and loading | Shared dataset normalization and dataset-loading metadata |
| Shared visualization shell | Common visualization-level structures, accessibility options, and shell styling reused by multiple packages |
| Filters | Shared visualization-local filter configuration and reusable filter primitives |
| Shared display structures | Shared column, legend, and annotation structures |
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
| `string` | Semantic version string used to record the COVE version associated with a saved config. Plain three-part versions are the normal case. Config migration ordering is guaranteed for `<major>.<minor>.<patch>` and versions with a numeric suffix, where a missing suffix is treated as `0`. Malformed saved versions are treated as `0.0.0` during migration ordering so the full migration chain still runs. | `<major>.<minor>.<patch>` or `<major>.<minor>.<patch>-<numeric-suffix>` |

Examples: `4.26.4`, `4.26.4-1`

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
| `valueKey` | `string` | No | Legacy single value column used by older standardization configs. | Still read for compatibility; prefer `valueKeysTallSupport` for new tall-data configs. |
| `valueKeys` | `string[]` | No | Legacy list of value columns used by older standardization configs. | Still read for compatibility; prefer `valueKeysTallSupport` for new tall-data configs. |
| `ignoredKeys` | `string[]` | No | Source keys that should be dropped during developer standardization. | Optional filter list used during data shaping. |

### `ConfigureData`

Packages that support named datasets or shared loading helpers often reuse this structure.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `dataKey` | `string` | No | Dataset key used to select a named dataset from `datasets`. | Common in dashboard child visualizations and other named-dataset flows. |
| `data` | `object[]` | No | Inline dataset attached directly to the config. | Often omitted when `dataUrl` or `datasets` is used. |
| `dataMetadata` | `Record<string, string>` | No | Supplemental metadata exposed to markup variables and shared helpers. | Often populated automatically during fetch flows. |
| `dataDescription` | `Partial<DataDescription>` | No | Shared data-shaping metadata used before rendering. | See `DataDescription` above. This is intentionally partial here. |

### `DataSet`

Dashboards and dataset-driven packages use `DataSet` entries inside a `datasets` map.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `dataUrl` | `string` | No | Source URL for the dataset. | May point at JSON, CSV, or another supported fetch target. Omit when the dataset is provided inline through `data`. |
| `loadQueryParam` | `string` | No | Browser query-string parameter appended to `dataUrl` during dashboard dataset loading. | Used when an embedded dashboard should vary a dataset URL from the page query string. |
| `dataKey`, `data`, `dataMetadata`, `dataDescription` | Shared `ConfigureData` fields | No | Same shared loading fields described above. | `DataSet` extends `ConfigureData`, so these fields follow the same rules as above. |

## Shared Visualization Shell

### `Visualization`

`Visualization` is a broad legacy base shape that many packages extend. Package docs should still document package-owned fields locally; this section lists only the common consumer-facing fields that appear across multiple visualization configs.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `type` | `string` | No | Visualization package type. | Common values include `chart`, `map`, `data-bite`, `waffle-chart`, `markup-include`, `table`, and `navigation`. Legacy saved configs may still contain `filtered-text`; the migration pipeline upgrades those to `markup-include`. |
| `title` | `string` | No | Shared title field used by multiple packages. | Package-specific title handling still varies. |
| `theme` | `ComponentThemes \| string` | No | Shared shell theme token. | Most packages use the `theme-*` tokens listed above. |
| `locale` | `string` | No | Locale used for formatting. | Any valid `Intl` locale is accepted. |
| `filters` | `VizFilter[]` | No | Shared interactive filter list. | See `VizFilter` below. |
| `filterBehavior` | `FilterBehavior` | No | Shared filter apply behavior. | See `FilterBehavior` above. Many packages default this to `Filter Change`; omitted values usually behave like immediate filtering unless a package explicitly checks for `Apply Button`. |
| `footnotes` | `Footnotes` | No | Shared static or dynamic footnotes block. | See `Footnotes` below. |
| `visual` | `ComponentStyles` | No | Shared shell styling toggles used by multiple packages. | See `ComponentStyles` below. |
| `altText` | `AltTextConfig` | No | Optional accessibility description appended to generated SVG `aria-label` text in packages that support it. | See `AltTextConfig` below. |
| `table` | `Table` | No | Shared table/download settings. | See `Table` below. |

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

### `SharedTp5VisualOptions`

Some TP5-style packages extend `visual` with these shared callout options. Package docs should still describe package-specific rendering behavior and defaults.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `whiteBackground` | `boolean` | No | Uses a white-background TP5 variant instead of the package's filled callout/background treatment. | Only meaningful in packages and layouts that opt into TP5 visual styling. |

### `AltTextConfig`

`AltTextConfig` supplies an optional human-authored description for SVG visualizations. Chart and map helpers first generate a package-specific label, then append the resolved description when one is available.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `type` | `'static' \| 'metadata'` | No | Selects where the added description comes from. | `static` reads `value`; `metadata` reads `dataMetadata[metadataKey]`. Omit the object or leave fields blank to use only the package-generated label. |
| `value` | `string` | Conditionally | Literal description appended to the generated aria label. | Used when `type` is `static`. |
| `metadataKey` | `string` | Conditionally | Metadata key whose value is appended to the generated aria label. | Used when `type` is `metadata`; the key must exist in `dataMetadata` to produce output. |

### `General`

`General` is a legacy shared object used by several packages. Package-owned fields inside `general`, such as map geography controls or chart-only label placement helpers, belong in the owning package's `CONFIG.md`. The shared portion is limited to cross-package display toggles and palette metadata.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `showMissingDataLabel` | `boolean` | No | Shows a label for missing data. | Common in maps and table-adjacent views. |
| `showSuppressedSymbol` | `boolean` | No | Shows a suppression marker when values are suppressed. | Package-specific rendering still varies. |
| `showZeroValueData` | `boolean` | No | Keeps zero values visible instead of treating them as absent. | Package-specific rendering still varies. |
| `hideNullValue` | `boolean` | No | Hides null-valued records in supported packages. | Common in maps and charts. |
| `palette` | `Palette` | No | Shared palette selection and migration metadata. | See `Palette` below. |
| `showAnnotationDropdown` | `boolean` | No | Enables dropdown-style annotation display in packages that support annotation dropdowns. | Package behavior varies; chart and map expose package-specific annotation dropdown behavior locally. |
| `mobileAnnotationDisplay` | `'symbol' \| 'text'` | No | Selects how annotations render on mobile viewports: package-specific compact symbol, or full text labels matching desktop. | Currently consumed by chart only; default `'symbol'` preserves existing mobile behavior. |
| `annotationDropdownText` | `string` | No | Label shown for annotation dropdown controls. | Defaults to `Annotations` where the dropdown renderer falls back. |

### `Palette`

Use `Palette` when a package stores its v2 palette selection in `general.palette`.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `name` | `string` | No | Primary palette name. | Package-specific palette lists vary. |
| `version` | `'1.0' \| '2.0'` | No | Palette-system version metadata. | If this is omitted while `general.palette` exists, the v2 migration helpers usually treat the config as v2; configs with no `general.palette` still fall back to legacy v1 behavior. |
| `isReversed` | `boolean` | No | Reverses the active palette order. | Common in sequential color scales. |
| `customColors` | `string[]` | No | Custom color list used in some editor flows. | Usually CSS color strings or hex values. |
| `customColorsOrdered` | `string[]` | No | Ordered custom color list preserved by the editor. | Used when explicit order matters. |
| `colorAssignmentMode` | `'ordered' \| 'by-value'` | No | Selects whether data-driven color assignments are active. | Omitted or `ordered` preserves palette order. Packages must explicitly opt into `by-value` behavior. |
| `colorAssignments` | `{ key: string; color: string }[]` | No | Assigns colors to stable data keys. | `key` is package-defined, usually a series or category key; `color` is a CSS color string. Stale keys can remain harmlessly in saved configs. |

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

`FilterBase` contains the small set of filter fields reused by visualization-local filters and dashboard shared filters. Dashboard filters have their own `SharedFilter` contract in `@cdc/dashboard`; they are not the same shape as `VizFilter`.

### `FilterBase`

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `columnName` | `string` | Yes | Source column used to produce values and filter rows. | Must exist in the active dataset. |
| `showDropdown` | `boolean` | No | Determines whether the control is shown. | Usually editor-seeded. |
| `staticFilter` | `boolean` | No | Marks the filter as static. | Used by some filter flows. |

### `VizFilter`

`VizFilter` is the shared visualization-local filter shape used by charts, tables, maps, and some markup-driven packages. It extends `FilterBase` with control style, ordering, labels, query-string seeding, and nested-dropdown metadata.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `filterStyle` | `string` | Yes | Filter control style. | `tab`, `tab-simple`, `pill`, `tab bar`, `dropdown`, `dropdown bar`, `multi-select`, `nested-dropdown`, `combobox`. `combobox` and `nested-dropdown` search is accent-insensitive and requires every whitespace-separated search token to appear somewhere in the displayed option text. |
| `label` | `string` | No | Visible label for the filter. | User-facing display string. |
| `note` | `string` | No | Optional helper text shown under the filter label and above the control. | Parsed as trusted inline HTML. |
| `labels` | `Record<string, string>` | No | Optional display labels per raw value. | Used when raw values need nicer presentation. |
| `order` | `string` | No | Value ordering strategy. | `asc`, `desc`, `cust`, `column` |
| `orderColumn` | `string` | No | Column used when ordering by another column. | Used when `order` is `column`. |
| `orderedValues` | `string[]` | No | Explicit custom order. | Used when `order` is `cust`. |
| `queryParameter` | `string` | No | Query-string parameter updated by URL-backed filter data loads. | `setByQueryParameter` is used for browser URL seeding and sync. |
| `setByQueryParameter` | `string` | No | Query-string parameter used to seed active state and build URLs. | Current URL sync uses this exact value. |
| `type` | `string` | Yes | Filter implementation mode. | In current shared types this is `url`. |
| `defaultValue` | `string` | No | Default selection when nothing else is active. | Used by reset flows when present. |
| `resetLabel` | `string` | No | Label for the reset/all option. | Optional. |
| `filterFootnotes` | `boolean` | No | Also filters shared footnotes in packages that support them. | Optional. |
| `displaySubgroupingOnly` | `boolean` | No | Shows only subgrouping controls for supported styles. | Used by nested filter flows. |
| `selectLimit` | `number` | No | Maximum selected values for `multi-select`. | Only relevant to `multi-select`. |
| `subGrouping` | `SubGrouping` | No | Nested dropdown subgrouping metadata. | See `SubGrouping` below. |

### `SubGrouping`

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `columnName` | `string` | Yes | Source column used to compute subgroup values. | Used by nested dropdown filters. |
| `setByQueryParameter` | `string` | No | Query parameter used to seed the subgroup. | Only meaningful when URL syncing is enabled. |
| `order` | `string` | No | Sort order for subgroup values. | `asc`, `desc`, `cust`, `column` |
| `valuesLookup` | `Record<string, { values: string[]; orderedValues?: string[] }>` | No | Nested values keyed by the parent filter value. | Required by some dashboard data nested-dropdown configs; other flows may generate or clean it up at runtime. |
| `defaultValue` | `string` | No | Default subgroup selection. | Optional. |

## Shared Display Structures

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
| `style` | `string` | No | Visual style of the annotation. Defaults to `callout` when omitted. `event-line` draws a full-height vertical line snapped to a data point with a side-aligned, draggable label. | `callout`, `event-line` |
| `anchorMode` | `string` | No | Whether the annotation uses fixed coordinates or data anchoring. | `fixed`, `data`. Forced to `data` when `style` is `event-line`. |
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
| `savedDimensions` | `[number, number]` | No | Original saved SVG dimensions captured by editor/runtime flows. | Optional compatibility metadata. Missing values are supported and may be regenerated; consumers usually do not author this manually. |

## Tables And Columns

### `Table`

`Table` controls built-in data tables and related download controls across charts, dashboards, maps, and standalone table packages.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `show` | `boolean` | No | Shows or hides the built-in table. | `true`, `false` |
| `label` | `string` | No | Toggle label or heading for the table. | Optional. |
| `anchorId` | `string` | No | Explicit DOM anchor for standalone table rendering. | Used when a dashboard migration needs a table widget to preserve an existing `#data-table-*` link target. |
| `caption` | `string` | No | Table caption. | Optional. |
| `expanded` | `boolean` | No | Starts the table expanded. | `true`, `false` |
| `collapsible` | `boolean` | No | Allows the table to collapse. | `true`, `false` |
| `limitHeight` | `boolean` | No | Limits the rendered table height. | `true`, `false` |
| `height` | `number \| string` | No | Height used when the table is height-limited. | Pixels in current implementations. Numeric strings are supported in saved/editor configs; standalone data-table defaults may use `''` when height limiting is off. |
| `cellMinWidth` | `number \| string` | No | Minimum width for rendered cells. | Numeric strings are supported in saved/editor configs. |
| `showBottomCollapse` | `boolean` | No | Adds a bottom collapse control. | Optional. |
| `showVertical` | `boolean` | No | Uses a vertical-style table layout when supported. | Optional. |
| `showDatasetLink` | `boolean` | No | Shows the dataset link for dashboard table widgets when the widget's `dataKey` resolves to a dashboard dataset with `dataUrl`. | Defaults to `false`. The link text can be overridden with `downloadUrlLabel`. |
| `search` | `boolean` | No | Shows a text search input for filtering table rows. | Searches the visible/rendered table values using accent-insensitive token-AND matching; hidden or excluded columns are not searched. |
| `searchPlaceholder` | `string` | No | Placeholder text for the table search input. | Runtime falls back to `Filter...` when omitted or blank. |
| `groupBy` | `string` | No | Groups rows by a source column. | Optional. |
| `excludeColumns` | `string[]` | No | Hides specific columns. | Optional. |
| `pivot` | `Pivot` | No | Pivots one column into multiple value columns. | `Pivot` stores `columnName` and `valueColumns`. |
| `defaultSort` | `DefaultSort` | No | Default sort for the table. | Stores `column`, `sortDirection`, and optional `customOrder`. |
| `dateDisplayFormat` | `string` | No | Date format used by table output. | Optional. |
| `indexLabel` | `string` | No | Label for the row index column. | Optional. |
| `download` | `boolean` | No | Enables downloads generally. | `true`, `false` |
| `downloadVisibleDataOnly` | `boolean` | No | Restricts downloads to the currently visible subset. | `true`, `false` |
| `includeContextInDownload` | `boolean` | No | Includes surrounding context in supported downloads. | Optional. |
| `downloadFileName` | `string` | No | Custom filename for generated CSV downloads. | `.csv` is appended automatically. When omitted, runtime derives the CSV filename from dataset metadata or the visualization title. |
| `downloadDataLabel`, `downloadImageLabel`, `downloadUrlLabel` | `string` | No | Labels for download actions. | Optional. |
| `downloadImageButton`, `downloadPdfButton` | `boolean` | No | Shows image or PDF download buttons. | Optional. |
| `downloadImageButtonStyle` | `'button' \| 'link'` | No | Controls dashboard image download button presentation when supported by the package. | Missing value defaults to legacy button styling. |
| `showDownloadImgButton`, `showDownloadPdfButton`, `showDownloadUrl`, `showDownloadLinkBelow`, `showDataTableLink` | `boolean` | No | Legacy or package-specific download/link toggles. | Optional. |

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
| `selectionMode` | `'all' \| 'first'` | No | Chooses how a column value variable resolves multiple matching rows after shared filters and conditions are applied. | Omitted or `all` keeps the default multi-value list behavior. `first` uses only the first matching row's cell value. Metadata and icon variables ignore this field. |
| `addCommas` | `boolean` | No | Adds locale-aware grouping separators when the resolved raw value is strictly numeric. | `true`, `false`. Mixed strings such as `12%`, `$1234`, `1234 people`, and already-formatted `1,234` are preserved unchanged. |
| `roundToPlace` | `number \| string` | No | Fixes decimal precision when the resolved raw value is strictly numeric. | Must be `0` through `10`; higher values are capped at `10`. Blank, `null`, or omitted values leave decimal precision unchanged. Composes with `addCommas`. |
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
| `noChangeLabel` | `string` | No | Optional text displayed next to or below a no-change arrow. | Used whenever the resolved arrow type is `no-change`; `showNoChangeArrows` only controls numeric within-threshold no-change arrows. |
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
| `column` | `string` | No | Source column whose value determines the resolved color. | The shared resolver currently uses the first row of the data array supplied by the package. Package docs should explain which row set they pass to the resolver. |
| `mappings` | `DataColorMapping[]` | No | Value-to-color mapping rules. | At least one mapping is needed before the resolver can produce a color. |

### `DataColorMapping`

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `sourceValue` | `string` | Yes | Raw source value to match against. | Compared as a string. |
| `color` | `string` | Yes | Color to apply when `sourceValue` matches. | Use six-digit hex colors such as `#d7f2ed`; contrast text calculation currently expects hex color input. |

## Fields You Can Ignore

These fields commonly show up in exported or runtime-hydrated configs, but package consumers should usually leave them alone:

- `runtime.*`, `showEditorPanel`, `newViz`, `uid`, and `generatedBy` on `Visualization`
- `formattedData`, `runtimeDataUrl`, `dataFileSourceType`, `dataFileFormat`, `dataFileName`, `dataFileSize`, and `preview` on dataset-driven configs
- `values`, `active`, `queuedActive`, `id`, and `parents` on `FilterBase`/`VizFilter`
- `active` on `SubGrouping`, plus runtime-generated `valuesLookup` outside configs that intentionally persist nested-dropdown options
- `savedDimensions` on `Annotation`, which is editor/runtime geometry metadata
- `displayDropdown` on `Annotation`, which is legacy per-annotation dropdown metadata. Current chart and map dropdown visibility is controlled by `general.showAnnotationDropdown` and viewport.
- `hideOnNull` on `MarkupVariable`, which is persisted editor-authored metadata. Current shared processing omits empty/nullish replacements based on resolved output, regardless of this flag.
- `table.sharedFilterColumns`, which is runtime-added helper state for dashboard/shared-filter flows
- `general.palette.backups[]`, which is migration/rollback metadata
