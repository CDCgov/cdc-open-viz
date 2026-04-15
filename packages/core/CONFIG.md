# `@cdc/core` Shared Configuration Types

This document defines configuration structures that are shared across multiple COVE packages. Package-level `CONFIG.md` files should document package-owned fields locally and link here for any reused nested types.

## Organization

| Section | Covers |
| --- | --- |
| Shared primitives | Cross-package string formats and enums used in top-level config fields |
| Data shaping | Shared metadata used to standardize incoming datasets |
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

## Data Shaping

### `DataDescription`

`DataDescription` tells COVE how to standardize developer-provided data into the row/column shape expected by the consuming package.

| Field | Type | Required | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- |
| `series` | `boolean` | Yes | Declares whether the source data contains multiple series. | `true`, `false` |
| `horizontal` | `boolean` | Yes | Declares whether the source data is arranged horizontally instead of in tall row form. | `true`, `false` |
| `singleRow` | `boolean` | Yes | For non-horizontal series data, indicates whether the source is stored in a single row rather than multiple rows. | `true`, `false` |
| `seriesKey` | `string` | Yes | Column/key name that identifies the series dimension after standardization. | Required when the consuming transform needs a series identifier. |
| `xKey` | `string` | Yes | Column/key name that should become the primary category or x-axis field after standardization. | Required when the consuming transform needs a category identifier. |
| `valueKeysTallSupport` | `string[]` | Yes | Additional keys to preserve as value-like columns when transforming tall data. | Optional in practice for many configs, but part of the shared type. |
| `ignoredKeys` | `string[]` | Yes | Source keys that should be dropped during developer standardization. | Optional in practice for many configs, but part of the shared type. |

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
