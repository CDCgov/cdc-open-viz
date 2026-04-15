# `@cdc/data-table` Configuration Reference

This document describes the supported configuration contract for `@cdc/data-table`.

Shared nested types such as `Table`, `VizFilter`, `FilterBehavior`, `DataDescription`, and `Column` are shared across packages and should be referenced from the canonical `@cdc/core` config reference:
[packages/core/CONFIG.md](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md)

## Organization

The data table config is documented in the order the package processes it:

| Section | Covers |
| --- | --- |
| Identity and data source | Package identity, versioning, locale, and incoming data |
| Table setup | Table behavior, columns, and formatting |
| Filters | Shared filter configuration and filter behavior |
| Fields You Can Ignore | Runtime state and editor-only artifacts |

## Minimum Working Config

For the copy-pasteable minimum config, use the example in [README.md](./README.md). The source of truth for that example lives at `packages/data-table/examples/minimal-example.json`, and automated tests keep the README block in sync with that file.

All other package fields are optional and will be backfilled from package defaults unless you override them.

## Identity and Data Source

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `type` | `string` | Yes | None | Identifies the visualization package. | Must be `table` for standalone data-table configs. |
| `version` | [`Version`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#version) | Yes | None | Saved config version used by migration logic. | Keep this current so old saved configs can be upgraded safely. |
| `visualizationType` | `string` | Yes | None | Selects the rendering mode used by the shared data table component. | Must be `Table` for this package. |
| `data` | `object[]` | Conditionally | `[]` | Inline dataset rendered in the table. | Required unless `dataUrl` is provided. |
| `dataUrl` | `string` | Conditionally | None | Remote JSON or CSV URL fetched at load time. | If both `data` and `dataUrl` are present, the fetched data wins. |
| `dataDescription` | [`DataDescription`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#datadescription) | No | None | Shared developer-standardization metadata for fetched data. | Used only when the table loads remote data. |
| `dataMetadata` | `Record<string, string>` | No | None | Metadata dictionary exposed to shared markup variables. | Usually populated automatically from remote data fetches. |
| `locale` | `string` | Yes | Browser/runtime default | Locale used for number, date, and download formatting. | Any valid `Intl` locale is accepted. |

## Table Setup

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `table` | `Table` | No | Package defaults | Shared table behavior and display settings. | Controls the label, caption, collapse state, download controls, and visible-row behavior. |
| `columns` | `Record<string, Column>` | No | `{}` | Column-level display and formatting overrides. | Each key should match an input data column unless you are intentionally remapping the display. |
| `dataFormat` | `object` | No | `{}` | Global number-format defaults for the table. | Supports commas, prefix/suffix, and round-to settings. |

### `columns`

Each entry in `columns` controls one source column. The package only reads the column-specific settings it needs, so you can author the smallest useful subset.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `columns.<key>.name` | `string` | No | The map key | Source column name. | Usually only needed when the editor has renamed the display key. |
| `columns.<key>.label` | `string` | No | The source column name | Header text shown in the table. | Commonly changed when raw field names are not human-friendly. |
| `columns.<key>.prefix` | `string` | No | `''` | Text prepended to the rendered value. | Useful for currency and signed metrics. |
| `columns.<key>.suffix` | `string` | No | `''` | Text appended to the rendered value. | Useful for percentages and units. |
| `columns.<key>.roundToPlace` | `number` | No | `0` | Number of decimal places to keep. | Must be `0` or greater. |
| `columns.<key>.commas` | `boolean` | No | `false` | Adds locale-aware digit grouping. | `true`, `false`. |
| `columns.<key>.dataTable` | `boolean` | No | `true` | Includes or hides the column in the table output. | `false` removes the column from the table. |
| `columns.<key>.showInViz` | `boolean` | No | `true` | Keeps the column available to the visualization side. | Mostly relevant when the same config drives both a chart and a table. |
| `columns.<key>.order` | `number` | No | `undefined` | Explicit display order. | Lower numbers appear earlier. |
| `columns.<key>.startingPoint` | `string` | No | `0` | Baseline value used by shared formatting helpers. | Mostly legacy compatibility. |
| `columns.<key>.series` | `string` | No | `undefined` | Optional series grouping label. | Used by shared table helpers and chart-adjacent flows. |
| `columns.<key>.tooltips` | `boolean` | No | `true` | Enables tooltip formatting for the column. | Shared table and chart helpers may read this flag. |
| `columns.<key>.forestPlot` | `boolean` | No | `false` | Includes the column in forest plot output. | Only meaningful in shared chart/table flows. |
| `columns.<key>.forestPlotAlignRight` | `boolean` | No | `false` | Right-aligns the forest plot column. | Forest plot specific. |
| `columns.<key>.forestPlotStartingPoint` | `number` | No | `0` | Starting point for forest plot range calculations. | Forest plot specific. |

## Filters

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `filters` | `VizFilter[]` | No | `[]` | Interactive filters that narrow the active dataset. | Shared filter contract from `@cdc/core`. |
| `filterBehavior` | `FilterBehavior` | No | `Filter Change` | Chooses whether filters apply immediately or through a button. | `Filter Change`, `Apply Button`. |
| `filterIntro` | `string` | No | `''` | Helper text shown above the filter controls. | Useful for explaining what the filters do. |

## Fields You Can Ignore

These fields sometimes appear in saved configs, copied editor state, or migration output, but consumers generally do not need to author or maintain them:

| Field or group | Why you can ignore it |
| --- | --- |
| `showEditorPanel` | Editor-only UI state. |
| `runtime.*` | Internal runtime state created while the table is loading and rendering. |
| `config` | Reducer-managed merged config snapshot. |
| `dataFormat.*` when omitted | Package defaults supply the formatting contract. |
| `table.sharedFilterColumns` | Runtime-added helper used by dashboards and shared filters. |
