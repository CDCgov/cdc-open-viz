# `@cdc/dashboard` Configuration Reference

This document describes the supported configuration contract for `@cdc/dashboard`.

Shared nested types used by this package are documented in the [`@cdc/core` config reference](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md).

To follow those shared types locally, use `packages/core/CONFIG.md` in this monorepo or `node_modules/@cdc/core/CONFIG.md` in an installed app. If neither path is available, use the GitHub link above.

## Organization

The config is documented in the order users usually author a dashboard:

| Section | Covers |
| --- | --- |
| Identity and data source | How the dashboard is identified and where its data comes from |
| Dashboard shell | Title, theme, and shared dashboard chrome |
| Layout and visualization placement | Rows, columns, and widget placement |
| Dashboard filters widget | The `dashboardFilters` visualization that renders shared filters |
| Shared filters | Dashboard-level filter state and filter options |
| Table and download controls | Shared table/download settings used by the dashboard shell |
| Multi-dashboard support | Tabbed dashboard sets and the active tab |
| Fields You Can Ignore | Runtime, editor, and migrated artifacts |

## Minimum Working Config

Use the example in [README.md](./README.md) for the copy-pasteable minimum config. The source of truth lives at `packages/dashboard/examples/minimal-example.json`, and the README block is kept in sync with automated tests.

## Identity and Data Source

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `type` | `string` | Yes | None | Identifies the package. | Must be `dashboard`. |
| `version` | `string` | No | None | Saved COVE version for migration logic. | Use a semantic version string. |
| `data` | `object[]` | No | `[]` | Legacy inline data used to seed the dashboard when named datasets are not provided. | An empty array is enough for a dashboard that only renders markup or chrome. |
| `dataUrl` | `string` | No | None | Remote data source for legacy single-dataset dashboards. | When present, the loader fetches data at runtime. |
| `datasets` | `Record<string, DataSet>` | No | None | Named datasets used by the dashboard and its child visualizations. | Each child viz points at a dataset with `dataKey`. |

Rows, datasets, and child visualizations also use the shared `ConfigureData` fields described in the core reference.

## Dashboard Shell

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dashboard.title` | `string` | No | `''` | Title shown in the dashboard header and table anchors. | Hidden when empty. |
| `dashboard.description` | `string` | No | `''` | Optional dashboard description rendered under the title. | Accepts HTML when the consuming app renders trusted markup. |
| `dashboard.theme` | `string` | No | `theme-blue` | Shared theme token for the dashboard shell. | See shared theme values in `@cdc/core`. |
| `dashboard.titleStyle` | `string` | No | `small` | Header size/style for the dashboard title. | `legacy`, `large`, `small` |
| `dashboard.sharedFilters` | `SharedFilter[]` | No | `[]` | Dashboard-level filters that can drive multiple visualizations. | See the Shared Filters section below. |
| `dashboard.filters` | `any` | No | Deprecated | Legacy filter field accepted during migration. | The loader copies these into `dashboard.sharedFilters` when needed. |

## Layout And Visualization Placement

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `rows` | `ConfigRow[]` | Yes | `[{ columns: [{ width: 12 }] }]` in practice | Layout rows that place widgets on the page. | The dashboard can render without explicit row chrome, but it needs at least one row for visible widgets. |
| `rows[].columns[]` | `object` | Yes | None | Column slots inside each row. | A column is populated when `widget` points to a visualization key, or when `conditionalWidgets` holds one or more candidate widgets. |
| `rows[].columns[].width` | `number \| null` | Yes | `null` on empty placeholders | Column width in the dashboard grid. | `12` is a full-width column. |
| `rows[].columns[].widget` | `string` | No | None | Visualization key rendered in that slot in simple mode. | Must match a key in `visualizations`. Ignored when `conditionalWidgets.length > 0`. |
| `rows[].columns[].conditionalWidgets` | `ConditionalWidget[]` | No | None | Ordered candidate widgets for one column slot. | First matching entry wins. If no entry matches, the column renders empty. |
| `rows[].dashboardCondition` | `DashboardCondition` | No | None | Optional post-filter visibility rule for the entire row. | Evaluated after shared dashboard filtering; unresolved inputs hide the row. Not supported on toggle or multi-viz rows in v1. |
| `rows[].toggle` | `boolean` | No | `false` | Turns a row into a toggle row. | Only one column is shown at a time. |
| `rows[].equalHeight` | `boolean` | No | `false` | Forces equal-height cards within the row. | TP5 layouts may also trigger equalization automatically. |
| `rows[].multiVizColumn` | `string` | No | None | Column used to split one visualization into multiple cards. | Used by multi-viz dashboard flows. |
| `rows[].expandCollapseAllButtons` | `boolean` | No | `false` | Adds expand/collapse-all controls to multi-viz rows. | Only meaningful when `multiVizColumn` is set. |
| `visualizations` | `Record<string, AnyVisualization>` | Yes | `{}` in practice | Child visualizations rendered by the dashboard. | Each nested config follows the child package contract for `chart`, `map`, `data-bite`, `waffle-chart`, `markup-include`, `filtered-text`, `table`, or `dashboardFilters`. |

Rows also accept the shared `ConfigureData` fields from the core reference, which the editor uses when a row owns its own dataset.

## Dashboard Filters Widget

The dashboard package includes a `dashboardFilters` visualization that renders shared filters in the dashboard shell.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `visualizations.*.type` | `string` | Yes | None | Must identify the widget as a dashboard filter panel. | Must be `dashboardFilters`. |
| `visualizations.*.sharedFilterIndexes` | `number[]` | Yes | None | Indexes into `dashboard.sharedFilters` that this widget renders. | Order matters and matches the visual order in the panel. |
| `visualizations.*.filterBehavior` | `FilterBehavior` | No | `Filter Change` | Controls whether selections apply immediately or wait for confirmation. | `Apply Button`, `Filter Change` |
| `visualizations.*.applyFiltersButtonText` | `string` | No | `GO!` | Label for the apply button when apply-button behavior is enabled. | Only used when `filterBehavior` is `Apply Button`. |
| `visualizations.*.autoLoad` | `boolean` | No | `false` | Lets the widget auto-apply URL-filter changes without waiting for the apply button. | Only relevant when the dashboard includes apply-button behavior elsewhere. |
| `visualizations.*.showClearButton` | `boolean` | No | `true` | Shows the clear-filters button in apply-button mode. | Only used when `filterBehavior` is `Apply Button`. |

## Shared Filters

Dashboard filters are split between the dashboard shell and the `dashboardFilters` widget that renders them.

### Common Filter Fields

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dashboard.sharedFilters[].key` | `string` | Yes | None | Human-readable filter label and stable key. | Used as the display label and editor key. |
| `dashboard.sharedFilters[].type` | `string` | No | `''` | Filter mode. | `datafilter`, `urlfilter`, or empty while configuring. |
| `dashboard.sharedFilters[].filterStyle` | `string` | No | `dropdown` | Filter control style. | `combobox`, `dropdown`, `multi-select`, `nested-dropdown`, `tab-simple` |
| `dashboard.sharedFilters[].showDropdown` | `boolean` | No | `true` | Shows the filter control in the dashboard. | Hiding the dropdown does not hide nested-dropdown or tab-simple renderers. |
| `dashboard.sharedFilters[].values` | `string[]` | No | `[]` | Available filter values. | Usually populated at runtime from data or API results. URL filters commonly omit this when saved. |
| `dashboard.sharedFilters[].active` | `string \| string[]` | No | None | Current filter selection. | Runtime-managed unless the config intentionally seeds a default. |
| `dashboard.sharedFilters[].queuedActive` | `string \| string[]` | No | None | Temporary selection used by apply-button flows. | Only meaningful for apply-button filter behavior. |
| `dashboard.sharedFilters[].order` | `string` | No | `asc` | Sort order for generated filter values. | `cust`, `desc`, `asc`, `column` |
| `dashboard.sharedFilters[].orderedValues` | `string[]` | No | None | Custom display order when `order` is `cust`. | Preserved by editor and runtime sort helpers. |
| `dashboard.sharedFilters[].parents` | `string[]` | No | `[]` | Parent filter labels for nested filter chains. | Used by cascading URL and data filters. |
| `dashboard.sharedFilters[].usedBy` | `(string \| number)[]` | No | None | Widgets, rows, or dashboard condition targets that consume the filter. | Numbers refer to row indexes; strings refer to visualization keys or auto-generated dashboard condition ids. Unscoped filters still apply everywhere they are otherwise compatible. |
| `dashboard.sharedFilters[].defaultValue` | `string` | No | None | Default selection when no other active value is available. | Used by data and nested-dropdown filters. |
| `dashboard.sharedFilters[].resetLabel` | `string` | No | None | Reset option label. | Often shown as `All`, `Reset`, or similar. |
| `dashboard.sharedFilters[].labels` | `Record<string, string>` | No | None | Alternate display labels for raw values. | Shared label mapping from `@cdc/core`. |
| `dashboard.sharedFilters[].selectLimit` | `number` | No | `5` in multi-select UI | Maximum selections allowed in multi-select mode. | Only used when `filterStyle` is `multi-select`. |
| `dashboard.sharedFilters[].tier` | `number` | No | Runtime-computed | Cascade depth for parent-child filter application. | Assigned automatically from `parents`; not usually authored. |
| `dashboard.sharedFilters[].displaySubgroupingOnly` | `boolean` | No | `false` | Shows only subgrouping controls for nested-dropdown filters. | Only used by nested dropdown flows. |

### Data Filter Fields

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dashboard.sharedFilters[].columnName` | `string` | Yes for `datafilter` | None | Source column used to generate filter values. | Must exist in the active dataset. |
| `dashboard.sharedFilters[].setBy` | `string` | No | None | Visualization key that seeds the filter from its selected datum. | Only used by data filters. |
| `dashboard.sharedFilters[].setByQueryParameter` | `string` | No | None | Query-string parameter used to seed the active value. | Useful for deep links and parent-child filter flows. |
| `dashboard.sharedFilters[].subGrouping` | `SubGrouping` | No | None | Nested dropdown subgroup state. | Used by nested-dropdown filters. |

### URL Filter Fields

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dashboard.sharedFilters[].apiFilter` | `APIFilter` | Yes for API-backed URL filters | None | Metadata for remote option loading. | See notes below. |
| `dashboard.sharedFilters[].filterBy` | `string` | No | None | URL filter behavior. | `Query String` or `File Name` |
| `dashboard.sharedFilters[].queryParameter` | `string` | No | None | Query-string parameter name to update. | Used by `Query String` URL filters. |
| `dashboard.sharedFilters[].datasetKey` | `string` | No | None | Dataset key whose filename should be rewritten. | Required when `filterBy` is `File Name`. |
| `dashboard.sharedFilters[].fileName` | `string` | No | None | File-name template for file-name URL filters. | Can include `${query}` as a placeholder for the active filter value. |
| `dashboard.sharedFilters[].whitespaceReplacement` | `string` | No | `Keep Spaces` | How spaces are rewritten in file-name filters. | `Keep Spaces`, `Remove Spaces`, `Replace With Underscore` |

## Dashboard Conditions

Dashboard conditions are optional visibility rules owned by rows and row columns.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `rows[].dashboardCondition.id` | `string` | No | Auto-generated | Stable dashboard-condition target id used by shared-filter `usedBy`. | The editor generates and preserves this id once dashboard-condition authoring is enabled. |
| `rows[].columns[].conditionalWidgets[].widget` | `string` | Yes in conditional mode | None | Visualization key for one candidate component in the column. | Must match a key in `visualizations`. Author order defines priority. |
| `rows[].columns[].conditionalWidgets[].dashboardCondition.id` | `string` | No | Auto-generated | Stable dashboard-condition target id used by shared-filter `usedBy`. | Conditional entries expose labels like `Row 1 Column 2 Component 1 Dashboard Condition` in shared-filter targeting. |
| `*.dashboardCondition.datasetKey` | `string` | Yes except for `filtersIncomplete` | None | Dataset used to evaluate data-backed dashboard conditions. | May differ from the visualization dataset. Not used by `filtersIncomplete`. |
| `*.dashboardCondition.operator` | `string` | Yes when a dashboard condition is enabled | None | Dashboard-condition comparison mode. | `hasData`, `hasNoData`, `columnHasAnyValue`, `filtersIncomplete` |
| `*.dashboardCondition.columnName` | `string` | Only for `columnHasAnyValue` | None | Dataset column inspected by the dashboard condition. | Must exist in the dashboard-condition dataset. |
| `*.dashboardCondition.values` | `string[]` | Only for `columnHasAnyValue` | `[]` | One or more acceptable values. | Runtime uses loose string coercion so numeric dataset values can match authored strings. |

| Behavior | Details |
| --- | --- |
| Shared filter application | Conditions apply matching scoped filters plus unscoped filters before evaluating the operator. Filters whose `columnName` is missing from the condition dataset are ignored for data-backed conditions. |
| `filtersIncomplete` targeting | `filtersIncomplete` uses the condition id as its shared-filter target and includes unscoped filters. It passes only when an applicable visible filter is at reset state, and ignores filters scoped to unrelated targets. |
| Unresolved inputs | For data-backed operators, if the condition dataset is unavailable or an applicable filter is still at reset state, the condition resolves as hidden rather than behaving like `hasNoData`. `filtersIncomplete` resolves from filter reset state instead of dataset availability. |
| Conditional columns | `conditionalWidgets` lets one dashboard column hold multiple candidate components while still rendering as one slot. Runtime uses the first matching entry in author order. |
| Simple/conditional cleanup | The editor automatically collapses conditional mode back to simple mode when only one unconditioned entry remains after a completed save or delete action. |
| Row suppression | A false row condition hides the full row. A no-match conditional column hides only that widget slot while preserving grid width. |
| v1 limitations | Toggle rows and multi-viz rows do not expose condition editing in the editor, and runtime ignores any condition config found there. |

### `APIFilter`

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `apiEndpoint` | `string` | Yes | None | Endpoint used to fetch filter options. | Must resolve to JSON data. |
| `valueSelector` | `string` | Yes | None | Field used as the stored filter value. | Required. |
| `textSelector` | `string` | Yes in shape, often blank | `''` | Field used as the visible filter label. | Can be empty when the API returns a single value field. |
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

## Table And Download Controls

`@cdc/dashboard` uses the shared `Table` structure from the core reference. In this package, the dashboard shell honors the shared table flags plus `table.downloadImageButton` and `table.downloadPdfButton` for the image/PDF download buttons.

The runtime defaults are the dashboard shell table settings from `packages/dashboard/src/data/initial-state.js`: `show: true`, `showDownloadUrl: false`, `showDownloadLinkBelow: true`, and `showVertical: true`.

## Multi-Dashboard Support

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `multiDashboards` | `MultiDashboard[]` | No | None | Optional tabbed dashboard set. | Each entry contains its own `dashboard`, `rows`, `visualizations`, and `label`. |
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
| `rows[].uuid`, `rows[].columns[].hide`, `rows[].columns[].toggleName`, `rows[].columns[].equalHeight`, `rows[].originalMultiVizColumn` | Layout bookkeeping that may be injected or updated by the editor. |
| `dashboard.filters` | Legacy migration field replaced by `dashboard.sharedFilters`. |
