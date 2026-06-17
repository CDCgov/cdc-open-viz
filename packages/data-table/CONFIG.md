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
| `version` | [`Version`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#version) | No | None | Saved config version used by migration logic. | Recommended for authored configs so migrations can reason about saved-version order; the table renderer does not require it at runtime. |
| `visualizationType` | `string` | No | None | Conventional shared data-table rendering mode marker. | `Table` is used by examples/editor output, but the standalone data-table runtime does not require it to render. |
| `data` | `object[]` | Conditionally | None | Inline dataset rendered by the table. | A rendered table needs either `data` or `dataUrl`. If both are present, inline `data` wins. The package does not backfill omitted `data` to `[]` before load checks. |
| `dataUrl` | `string` | Conditionally | None | Remote JSON or CSV URL fetched at load time. | A rendered table needs either `dataUrl` or `data`. Used only when `data` is not provided. |
| `dataDescription` | [`Partial<DataDescription>`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#datadescription) | No | None | Optional developer-standardization metadata for input data. | See the shared core reference for the `DataDescription` shape. |
| `locale` | `string` | No | None for current configs; older configs may migrate to `en-US` | Locale used for date and number formatting. | Any valid `Intl` locale is accepted. Author this field for deterministic formatting because current-version configs that omit it pass `undefined` to the shared formatters. |

## Shared Table, Column, and General Settings

These settings are shared core structures, so their field-by-field definitions live in [`@cdc/core/CONFIG.md`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md). The notes below capture the data-table-specific behavior.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `table` | [`Table`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#table) | No | Package defaults | Shared table behavior and display settings. | When omitted, the package seeds the table block from `packages/data-table/src/data/initial-state.js`, including label, expansion, height, caption, download/link, vertical layout, default sort, and date-display defaults. Missing/suppressed label rendering is controlled by `general.showMissingDataLabel` and `general.showSuppressedSymbol` when present. |
| `columns` | `Record<string, Column>` | No | `{}` | Shared per-column display and formatting overrides. | Keys should match source column names; see the shared [`Column`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#column) docs for the supported field set. |
| `general` | [`General`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#general) | No | None | Shared display toggles used by the table renderer. | This package reads `general.showMissingDataLabel` and `general.showSuppressedSymbol` when present. |

## Data Formatting

`dataFormat` is package-owned and defaults to an empty object. The shared number formatter falls back to sensible defaults when individual fields are omitted.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dataFormat` | `object` | No | `{}` | Global number-format defaults for table values. | See the fields below. |

### `dataFormat`

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dataFormat.abbreviated` | `boolean` | No | `false` | Legacy/shared number-format flag that may appear in configs. | Standalone data-table rendering currently does not abbreviate cell values through this field. |
| `dataFormat.commas` | `boolean` | No | `false` | Adds locale-aware digit grouping. | `true`, `false`. |
| `dataFormat.prefix` | `string` | No | `''` | Text prepended to rendered values. | Common examples are currency symbols or signed prefixes. |
| `dataFormat.preserveOriginalDecimals` | `boolean` | No | `false` | Keeps incoming decimal precision instead of forcing a fixed precision. | `true`, `false`. |
| `dataFormat.roundTo` | `number \| string` | No | `0` | Number of decimal places to keep. | Numeric strings are accepted and coerced at runtime; values below `0` are treated as `0`. |
| `dataFormat.suffix` | `string` | No | `''` | Text appended to rendered values. | Common examples are `%` or a unit label. |

## Filters And Intro Text

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `filters` | [`VizFilter[]`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#vizfilter) | No | `[]` | Interactive filters that narrow the active dataset. | See the shared `VizFilter` docs. |
| `filterBehavior` | [`FilterBehavior`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#filterbehavior) | No | None; omitted behaves like `Filter Change` | Chooses whether filters apply immediately or wait for an explicit apply action. | `Apply Button` defers updates until the user clicks apply. Omitted values apply filters immediately, but the package does not backfill the literal `Filter Change` string. |
| `filterIntro` | `string` | No | `''` | Helper text shown above the filter controls. | Useful for giving users context about the filter set. |

## Fields You Can Ignore

These fields sometimes appear in saved configs, copied editor state, or migration output, but consumers generally do not need to author or maintain them:

| Field or group | Why you can ignore it |
| --- | --- |
| `showEditorPanel` | Editor-only UI state. |
| `config` | Reducer-managed merged config snapshot. |
| `runtime.*` | Internal runtime state created while the table is loading and rendering. |
| `dataMetadata` | Runtime-populated metadata returned by remote fetches. |
| `table.sharedFilterColumns` | Runtime-added helper used by dashboards and shared filters. |
| `table.showMissingDataLabel`, `table.showSuppressedSymbol` | Legacy/unused table-level copies. Use `general.showMissingDataLabel` and `general.showSuppressedSymbol`, which the renderer reads. |
| `dataFormat.right*`, `dataFormat.bottom*`, `dataFormat.showPiePercent` | Legacy chart-oriented formatting fields that can show up in copied configs, but are not part of the data-table authoring surface. |
