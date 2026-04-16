# `@cdc/data-table` Configuration Reference

This document covers the `@cdc/data-table` config contract. Shared nested structures such as `Table`, `Column`, `VizFilter`, `FilterBehavior`, `DataDescription`, and `General` are documented in the [`@cdc/core` config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

To follow those shared types locally, use `packages/core/CONFIG.md` in this monorepo or `node_modules/@cdc/core/CONFIG.md` in an installed app. If neither path is available, use the GitHub link above.

## Organization

The sections below follow the same order the package processes config:

| Section | Covers |
| --- | --- |
| Identity and data source | Package identity, versioning, input data, and locale |
| Shared table, column, and general settings | Shared core structures used by the table renderer |
| Data formatting | Package-owned number-format defaults |
| Filters and intro text | Shared filters plus the package-specific filter intro string |
| Fields You Can Ignore | Runtime state and legacy artifacts you may encounter in saved configs |

## Minimum Working Config

Use the copy-pasteable example in [README.md](./README.md). The source of truth for that block lives at [`packages/data-table/examples/minimal-example.json`](./examples/minimal-example.json), and the package test keeps the README example in sync with that file.

## Identity and Data Source

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `type` | `string` | Yes | None | Identifies the package. | Must be `table` for this visualization. |
| `version` | [`Version`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#version) | Yes | None | Saved config version used by migration logic. | Older configs are backfilled to the latest package version on load. |
| `visualizationType` | `string` | Yes | None | Selects the shared data-table rendering mode. | Must be `Table` for this package. |
| `data` | `object[]` | No | `[]` | Inline dataset rendered by the table. | If both `data` and `dataUrl` are present, inline `data` wins. |
| `dataUrl` | `string` | No | None | Remote JSON or CSV URL fetched at load time. | Used only when `data` is not provided. |
| `dataDescription` | [`Partial<DataDescription>`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#datadescription) | No | None | Optional developer-standardization metadata for input data. | See the shared core reference for the `DataDescription` shape. |
| `dataMetadata` | `Record<string, string>` | No | None | Metadata returned by a remote data fetch. | Runtime-populated; usually omit from authored configs. |
| `locale` | `string` | No | Browser/runtime default | Locale used for date and number formatting. | Any valid `Intl` locale is accepted. |

## Shared Table, Column, and General Settings

These settings are shared core structures, so their field-by-field definitions live in [`@cdc/core/CONFIG.md`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md). The notes below capture the data-table-specific behavior.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `table` | `Table` | No | Package defaults | Shared table behavior and display settings. | When omitted, the package seeds the table block from `packages/data-table/src/data/initial-state.js` (`label: 'Data Table'`, `expanded: true`, `showVertical: true`, `downloadUrlLabel: ''`, and the missing/suppressed labels enabled). |
| `columns` | `Record<string, Column>` | No | `{}` | Shared per-column display and formatting overrides. | Keys should match source column names; see the shared `Column` docs for the supported field set. |
| `general` | `General` | No | None | Shared display toggles used by the table renderer. | This package reads `general.showMissingDataLabel` and `general.showSuppressedSymbol` when present. |

## Data Formatting

`dataFormat` is package-owned and defaults to an empty object. The shared number formatter falls back to sensible defaults when individual fields are omitted.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dataFormat` | `object` | No | `{}` | Global number-format defaults for table values. | See the fields below. |

### `dataFormat`

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dataFormat.abbreviated` | `boolean` | No | `false` | Abbreviates large numbers with locale-aware short units. | `true`, `false`. |
| `dataFormat.commas` | `boolean` | No | `false` | Adds locale-aware digit grouping. | `true`, `false`. |
| `dataFormat.prefix` | `string` | No | `''` | Text prepended to rendered values. | Common examples are currency symbols or signed prefixes. |
| `dataFormat.preserveOriginalDecimals` | `boolean` | No | `false` | Keeps incoming decimal precision instead of forcing a fixed precision. | `true`, `false`. |
| `dataFormat.roundTo` | `number` | No | `0` | Number of decimal places to keep. | Values below `0` are treated as `0`. |
| `dataFormat.suffix` | `string` | No | `''` | Text appended to rendered values. | Common examples are `%` or a unit label. |

## Filters And Intro Text

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `filters` | `VizFilter[]` | No | `[]` | Interactive filters that narrow the active dataset. | See the shared `VizFilter` docs. |
| `filterBehavior` | `FilterBehavior` | No | `Filter Change` | Chooses whether filters apply immediately or wait for an explicit apply action. | `Apply Button` defers updates until the user clicks apply. |
| `filterIntro` | `string` | No | `''` | Helper text shown above the filter controls. | Useful for giving users context about the filter set. |

## Fields You Can Ignore

These fields sometimes appear in saved configs, copied editor state, or migration output, but consumers generally do not need to author or maintain them:

| Field or group | Why you can ignore it |
| --- | --- |
| `showEditorPanel` | Editor-only UI state. |
| `config` | Reducer-managed merged config snapshot. |
| `runtime.*` | Internal runtime state created while the table is loading and rendering. |
| `table.sharedFilterColumns` | Runtime-added helper used by dashboards and shared filters. |
| `dataFormat.right*`, `dataFormat.bottom*`, `dataFormat.showPiePercent` | Legacy chart-oriented formatting fields that can show up in copied configs, but are not part of the data-table authoring surface. |
