# `@cdc/dashboard` Configuration Reference

This document describes the supported configuration contract for `@cdc/dashboard`.

Shared nested types used by this package are documented in the canonical `@cdc/core` shared config reference:
[packages/core/CONFIG.md](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md)

## Organization

The config is documented in the order users usually author a dashboard:

| Section | Covers |
| --- | --- |
| Identity and data source | How the dashboard is identified and where its data comes from |
| Dashboard shell | Title, theme, and shared dashboard chrome |
| Layout and visualization placement | Rows, columns, and widget placement |
| Shared filters | Dashboard-level filter state and filter widgets |
| Table and download controls | Dashboard table flags and download buttons |
| Multi-dashboard support | Tabbed dashboard sets and the active tab |
| Fields You Can Ignore | Runtime, editor, and migrated artifacts |

## Minimum Working Config

Use the example in [README.md](./README.md) for the copy-pasteable minimum config. The source of truth lives at `packages/dashboard/examples/minimal-example.json`, and the README block is kept in sync with automated tests.

## Identity and Data Source

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `type` | `string` | Yes | None | Identifies the package. | Must be `dashboard`. |
| `version` | `string` | No | None | Saved COVE version for migration logic. | Use a semantic version string. |
| `data` | `object[]` | No | `[]` | Legacy inline data used to seed the dashboard. | An empty array is enough for a dashboard that only renders markup or chrome. |
| `dataUrl` | `string` | No | None | Remote data source for legacy single-dataset dashboards. | When present, the loader fetches data at runtime. |
| `datasets` | `Record<string, DataSet>` | No | None | Named datasets used by the dashboard and its child visualizations. | Each child viz points at a dataset with `dataKey`. |

### Shared `ConfigureData` Fields

Rows and child visualizations also accept the shared `ConfigureData` fields used across the repo.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dataKey` | `string` | No | None | Dataset key used to bind a row or visualization to `datasets`. | Often injected by the editor or loader. |
| `data` | `object[]` | No | `[]` | Inline data attached directly to a row or visualization. | Used in legacy and editor flows. |
| `dataDescription` | `Partial<DataDescription>` | No | `{}` | Data-shaping metadata used when the package standardizes data. | Shared type from `@cdc/core`. |
| `dataMetadata` | `Record<string, string>` | No | None | Supplemental metadata passed with the data. | Often comes from fetched datasets. |
| `formattedData` | `object[]` | No | None | Preformatted data produced by the editor or loader. | Usually runtime-managed. |

## Dashboard Shell

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dashboard.title` | `string` | No | `''` | Title shown in the dashboard header. | Hidden when empty. |
| `dashboard.description` | `string` | No | `''` | Optional dashboard description. | Rendered in the editor and supporting shell areas. |
| `dashboard.theme` | `string` | No | `theme-blue` | Shared theme token for the dashboard shell. | See shared theme values in `@cdc/core`. |
| `dashboard.titleStyle` | `string` | No | `small` | Header size/style for the dashboard title. | `legacy`, `large`, `small` |
| `dashboard.sharedFilters` | `SharedFilter[]` | No | `[]` | Dashboard-level filters that can drive multiple visualizations. | See the Shared Filters section below. |
| `dashboard.filters` | `any` | No | Deprecated | Legacy filter field accepted during migration. | The loader copies these into `dashboard.sharedFilters` when needed. |

## Layout and Visualization Placement

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `rows` | `ConfigRow[]` | Yes | `[{ columns: [{ width: 12 }] }]` in practice | Layout rows that place widgets on the page. | The dashboard can render without explicit row chrome, but it needs at least one row for visible widgets. |
| `rows[].columns[]` | `object` | Yes | None | Column slots inside each row. | A column is populated when `widget` points to a visualization key. |
| `rows[].columns[].width` | `number \| null` | Yes | `null` on empty placeholders | Column width in the dashboard grid. | `12` is a full-width column. |
| `rows[].columns[].widget` | `string` | No | None | Visualization key rendered in that slot. | Must match a key in `visualizations`. |
| `rows[].toggle` | `boolean` | No | `false` | Turns a row into a toggle row. | Only one column is shown at a time. |
| `rows[].equalHeight` | `boolean` | No | `false` | Forces equal-height cards within the row. | TP5 layouts may also trigger equalization automatically. |
| `rows[].multiVizColumn` | `string` | No | None | Column used to split one visualization into multiple cards. | Used by multi-viz dashboard flows. |
| `visualizations` | `Record<string, AnyVisualization>` | Yes | `{}` in practice | Child visualizations rendered by the dashboard. | Each nested config follows the child package contract for `chart`, `map`, `data-bite`, `waffle-chart`, `markup-include`, `filtered-text`, `table`, or `dashboardFilters`. |

## Shared Filters

Dashboard filters are split between the dashboard shell and the `dashboardFilters` widget that renders them.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dashboard.sharedFilters[].key` | `string` | Yes | None | Human-readable filter label. | Used as the display label and editor key. |
| `dashboard.sharedFilters[].type` | `string` | No | `''` | Whether the filter is a dashboard data filter or URL filter. | `datafilter`, `urlfilter`, or empty. |
| `dashboard.sharedFilters[].columnName` | `string` | Yes | None | Source column used to generate filter values. | Must exist in the active dataset. |
| `dashboard.sharedFilters[].filterStyle` | `string` | Yes | `dropdown` | Filter control style. | `combobox`, `dropdown`, `multi-select`, `nested-dropdown`, `tab-simple` |
| `dashboard.sharedFilters[].showDropdown` | `boolean` | No | `true` | Shows the filter control in the dashboard. | If `false`, some filter styles still render in specialized UI modes. |
| `dashboard.sharedFilters[].values` | `string[]` | Yes | `[]` | Available filter values. | Usually populated at runtime from the active dataset or API filter. |
| `dashboard.sharedFilters[].active` | `string \| string[]` | No | None | Current filter selection. | Runtime-managed unless the config intentionally seeds a default. |
| `dashboard.sharedFilters[].queuedActive` | `string \| string[]` | No | None | Temporary selection used by apply-button flows. | Only meaningful for apply-button filter behavior. |
| `dashboard.sharedFilters[].order` | `string` | No | `column` | Sort order for generated filter values. | `cust`, `desc`, `asc`, `column` |
| `dashboard.sharedFilters[].orderedValues` | `string[]` | No | None | Custom display order when `order` is `cust`. | Preserved by editor and runtime sort helpers. |
| `dashboard.sharedFilters[].parents` | `string[]` | No | `[]` | Parent filter labels for nested filter chains. | Used by cascading URL and data filters. |
| `dashboard.sharedFilters[].usedBy` | `(string \| number)[]` | No | None | Widgets or rows that consume the filter. | Numbers refer to row indexes; strings refer to visualization keys. |
| `dashboard.sharedFilters[].filterBy` | `string` | No | None | URL filter behavior. | `Query String` or `File Name`. |
| `dashboard.sharedFilters[].queryParameter` | `string` | No | None | Query string parameter name to update. | Used by `urlfilter` flows. |
| `dashboard.sharedFilters[].setByQueryParameter` | `string` | No | None | Query string parameter used to seed the active value. | Useful for deep links. |
| `dashboard.sharedFilters[].selectLimit` | `number` | No | `5` in multi-select UI | Maximum selections allowed in multi-select mode. | Only used when `filterStyle` is `multi-select`. |
| `dashboard.sharedFilters[].resetLabel` | `string` | No | None | Reset option label. | Often shown as `All`, `Reset`, or similar. |
| `dashboard.sharedFilters[].apiFilter` | `APIFilter` | No | None | Metadata for remote option loading. | See notes below. |
| `dashboard.sharedFilters[].subGrouping` | `SubGrouping` | No | None | Nested dropdown subgroup state. | Used by nested dropdown filters. |

### `APIFilter`

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `apiEndpoint` | `string` | Yes | None | Endpoint used to fetch filter options. | Must resolve to JSON data. |
| `valueSelector` | `string` | Yes | None | Field used as the stored filter value. | Usually the raw data column name. |
| `textSelector` | `string` | Yes | None | Field used as the visible filter label. | Can be empty when the API returns a single value field. |
| `subgroupValueSelector` | `string` | No | None | Nested subgroup value field for nested dropdowns. | Only used when nested subgrouping is enabled. |
| `subgroupTextSelector` | `string` | No | None | Nested subgroup label field for nested dropdowns. | Only used when nested subgrouping is enabled. |

### `SubGrouping`

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `columnName` | `string` | No | `''` | Column used for subgroup option generation. | Used by nested dropdown filters. |
| `active` | `string` | No | `''` | Current subgroup selection. | Runtime-managed. |
| `order` | `string` | No | `asc` | Sort order for subgroup values. | `cust`, `desc`, `asc`, `column` |
| `setByQueryParameter` | `string` | No | None | Query string parameter used to seed the subgroup. | Used in URL filter flows. |
| `valuesLookup` | `Record<string, { orderedValues?: string[]; values: string[] }>` | No | `{}` | Cached nested values used by the editor/runtime. | Usually runtime-managed. |

## Table and Download Controls

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `table` | `Table` | No | `show: false` in the dashboard shell | Controls the built-in dashboard data table and download buttons. | Shared table shape from `@cdc/core`; this package also reads `table.downloadImageButton` and `table.downloadPdfButton`. |

## Multi-Dashboard Support

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `multiDashboards` | `MultiDashboard[]` | No | None | Optional tabbed dashboard set. | Each entry contains its own `dashboard`, `rows`, and `visualizations`. |
| `activeDashboard` | `number` | No | `0` when multi-dashboard mode is initialized | Index of the active dashboard tab. | Runtime-managed as the active tab changes. |
| `multiDashboards[].label` | `string` | Yes | None | Label shown on the dashboard tab. | Required for each dashboard slot. |

## Fields You Can Ignore

These fields often appear in saved configs, editor exports, or migration output, but consumers usually do not need to author them:

| Field or group | Why you can ignore it |
| --- | --- |
| `runtime.*` | Internal runtime state created during load and render. |
| `visualizations.*.formattedData`, `visualizations.*.originalFormattedData`, `visualizations.*.runtime` | Generated data and runtime artifacts owned by the loader. |
| `visualizations.*.editing`, `visualizations.*.showEditorPanel`, `visualizations.*.newViz`, `visualizations.*.openModal` | Editor state, not consumer config. |
| `visualizations.*.uid`, `visualizations.*.visualizationType` | Editor/runtime identifiers that are injected or normalized internally. |
| `datasets.*.dataFileSize`, `datasets.*.dataFileName`, `datasets.*.dataFileFormat`, `datasets.*.dataFileSourceType`, `datasets.*.runtimeDataUrl` | Runtime or file metadata. |
| `rows[].uuid`, `rows[].toggle`, `rows[].equalHeight`, `rows[].multiVizColumn`, `rows[].originalMultiVizColumn` | Layout bookkeeping that may be injected or updated by the editor. |
| `dashboard.filters` | Legacy migration field replaced by `dashboard.sharedFilters`. |
