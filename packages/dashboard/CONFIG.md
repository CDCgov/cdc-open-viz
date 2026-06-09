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
| Table and download controls | Standalone table widgets plus dashboard shell download settings |
| Multi-dashboard support | Tabbed dashboard sets and the active tab |
| Fields You Can Ignore | Runtime, editor, and migrated artifacts |

## Minimum Working Config

Use the example in [README.md](./README.md) for the copy-pasteable minimum config. The source of truth lives at `packages/dashboard/examples/minimal-example.json`, and the README block is kept in sync with automated tests.

## Identity and Data Source

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `type` | `string` | Yes | None | Identifies the package. | Must be `dashboard`. |
| `version` | `string` | No | None | Saved COVE version for migration logic. | Use a semantic COVE version for authored configs so migrations can reason about saved-version order. |
| `locale` | `string` | No | `en-US` after migration/runtime preparation | Locale used by dashboard-level table date and number formatting and copied into child visualizations by migration. | Any valid `Intl` locale is accepted. |
| `data` | `object[]` | No | `[]` | Legacy inline data used to seed the dashboard when named datasets are not provided. | An empty array is enough for a dashboard that only renders markup or chrome. |
| `dataUrl` | `string` | No | None | Remote data source for legacy single-dataset dashboards. | When present, the loader fetches data at runtime. |
| `datasets` | `Record<string, DataSet>` | No | None | Named datasets used by the dashboard and its child visualizations. | Each child viz points at a dataset with `dataKey`. |
| `datasets.*.loadQueryParam` | `string` | No | None | Browser query-string parameter appended to that dataset's `dataUrl` at load time. | Used for dataset URLs that need to be varied by the embedding page's query string. |

Rows, datasets, and child visualizations also use the shared [`ConfigureData`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#configuredata) fields described in the core reference. Named dataset entries use shared [`DataSet`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#dataset).

### Legacy Single-Dataset Fields

Older dashboard configs may store single-dataset metadata at the top level instead of under `datasets`.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dataDescription` | `Partial<DataDescription>` | No | None | Shared data-shaping metadata for legacy top-level `data` or `dataUrl`. | See shared [`DataDescription`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#datadescription). Prefer `datasets.*.dataDescription` in new configs. |

During load and save cleanup, current dashboard flows prefer named `datasets`. Legacy top-level single-dataset file/runtime fields such as `dataFileName`, `dataFileSourceType`, and `formattedData` may still appear in old configs, but they are listed in `Fields You Can Ignore` rather than treated as authorable dashboard fields.

## Dashboard Shell

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dashboard.title` | `string` | No | `''` | Title shown in the dashboard header and table anchors. | Hidden when empty. |
| `dashboard.description` | `string` | No | `''` | Optional dashboard description rendered under the title. | Accepts HTML when the consuming app renders trusted markup. |
| `dashboard.theme` | `string` | No | `theme-blue` | Shared theme token for the dashboard shell. | See shared theme values in `@cdc/core`. |
| `dashboard.titleStyle` | `string` | No | `small` when the full dashboard initial state is used | Header size/style for the dashboard title. | `legacy`, `large`, `small`. If a partial `dashboard` object is shallow-merged without `titleStyle`, the field may remain undefined instead of receiving the initial-state value. |
| `dashboard.sharedFilters` | `SharedFilter[]` | No | `[]` | Dashboard-level filters that can drive multiple visualizations. | See the Shared Filters section below. |
| `dashboard.downloads` | `DashboardDownloads` | No | `{}` | Dashboard-level image/PDF download controls. | See Table and Download Controls. Legacy configs may still contain equivalent root `table.*` fields after migration. |

## Layout And Visualization Placement

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `rows` | `ConfigRow[]` | Yes | `[{ columns: [{ width: 12 }] }]` in practice | Layout rows that place widgets on the page. | The dashboard can render without explicit row chrome, but it needs at least one row for visible widgets. |
| `rows[].columns[]` | `object` | Yes | None | Column slots inside each row. | A column is populated when `widget` points to a visualization key, or when `conditionalWidgets` holds one or more candidate widgets. |
| `rows[].columns[].width` | `number` | Yes for visible columns | None | Column width in the dashboard grid. | `12` is a full-width column. Empty placeholder columns may omit `width` and are ignored by rendering. |
| `rows[].columns[].widget` | `string` | No | None | Visualization key rendered in that slot in simple mode. | Must match a key in `visualizations`. Ignored when `conditionalWidgets.length > 0`. |
| `rows[].columns[].toggleName` | `string` | No | Visualization type label | User-visible label for a widget in toggle rows. | Only meaningful when the parent row has `toggle: true`. When omitted, runtime falls back to labels such as `chart`, `map`, or `table`, not the child widget title. |
| `rows[].columns[].conditionalWidgets` | `ConditionalWidget[]` | No | None | Ordered candidate widgets for one column slot. | First matching entry wins. If no entry matches, the column renders empty. |
| `rows[].dashboardCondition` | `DashboardCondition` | No | None | Optional post-filter visibility rule for the entire row. | Evaluated after shared dashboard filtering; unresolved inputs hide the row. Not supported on toggle or multi-viz rows in v1. |
| `rows[].toggle` | `boolean` | No | `false` | Turns a row into a toggle row. | Only one column is shown at a time. |
| `rows[].equalHeight` | `boolean` | No | `false` | Forces equal-height cards within the row. | TP5 layouts may also trigger equalization automatically. |
| `rows[].multiVizColumn` | `string` | No | None | Column used to split one visualization into multiple cards. | Used by multi-viz dashboard flows. |
| `rows[].expandCollapseAllButtons` | `boolean` | No | `false` | Adds expand/collapse-all controls to multi-viz rows. | Only meaningful when `multiVizColumn` is set. |
| `visualizations` | `Record<string, AnyVisualization>` | Yes | `{}` in practice | Child visualizations rendered by the dashboard. | Each nested config follows the child package contract for `chart`, `map`, `data-bite`, `waffle-chart`, `markup-include`, `table`, or `dashboardFilters`. Legacy saved `filtered-text` configs migrate to `markup-include` in Phase 1; new authored text should use `markup-include`. |

Rows also accept the shared `ConfigureData` fields from the core reference, which the editor uses when a row owns its own dataset.

## Dashboard Filters Widget

The dashboard package includes a `dashboardFilters` visualization that renders shared filters in the dashboard shell.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `visualizations.*.type` | `string` | Yes | None | Must identify the widget as a dashboard filter panel. | Must be `dashboardFilters`. |
| `visualizations.*.visualizationType` | `string` | No | Usually `dashboardFilters` | Visualization identifier used by some dashboard-filter load paths. | Keep this aligned with `type` for dashboard filter widgets. |
| `visualizations.*.sharedFilterIndexes` | `number[]` | Yes | None | Indexes into `dashboard.sharedFilters` that this widget renders. | Order matters and matches the visual order in the panel. |
| `visualizations.*.filterBehavior` | `FilterBehavior` | No | `Filter Change` | Controls whether selections apply immediately or wait for confirmation. | `Apply Button`, `Filter Change` |
| `visualizations.*.filterIntro` | `string` | No | `''` | Helper text shown above this dashboard filter widget's controls. | Supports the same parsed HTML treatment used by visualization filter intro text. |
| `visualizations.*.applyFiltersButtonText` | `string` | No | `GO!` | Label for the apply button when apply-button behavior is enabled. | Only used when `filterBehavior` is `Apply Button`. |
| `visualizations.*.autoLoad` | `boolean` | No | `false` | Auto-selects and loads API-backed URL filter values for this dashboard-filter widget. | Mainly used with `Filter Change` widgets after parent-filter updates or query-parameter seeding; it is not limited to apply-button dashboards. |
| `visualizations.*.showClearButton` | `boolean` | No | `true` | Shows the clear-filters button in apply-button mode. | Only used when `filterBehavior` is `Apply Button`. |
| `visualizations.*.visual.grayBackground` | `boolean` | No | `false` | Wraps the rendered dashboard filters in the grey callout background treatment. | Uses the shared callout styling with dashboard-filter background color `#f4f8fa`. |

## Shared Filters

Dashboard filters are split between the dashboard shell and the `dashboardFilters` widget that renders them.

Dashboard `SharedFilter` objects are a distinct dashboard-owned contract. They reuse a few primitive ideas from core filter helpers, but they are not the same shape as core `VizFilter`. Runtime/cache state such as active selections is listed in `Fields You Can Ignore`; data-filter value lists can be authored or preserved as described below.

### Common Filter Fields

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dashboard.sharedFilters[].key` | `string` | Yes | None | Human-readable filter label and stable key. | Used as the display label and editor key. |
| `dashboard.sharedFilters[].type` | `string` | No | `''` | Filter mode. | `datafilter`, `urlfilter`, or empty while configuring. |
| `dashboard.sharedFilters[].filterStyle` | `string` | No | `dropdown` | Filter control style. | `combobox`, `dropdown`, `multi-select`, `nested-dropdown`, `tab-simple`. `combobox` and `nested-dropdown` search is accent-insensitive and requires every whitespace-separated search token to appear somewhere in the displayed option text. |
| `dashboard.sharedFilters[].note` | `string` | No | None | Optional helper text shown under the filter label and above the control. | Parsed as trusted inline HTML. |
| `dashboard.sharedFilters[].showDropdown` | `boolean` | No | Editor-seeded `true` | Shows the filter control in the dashboard. | The editor usually writes this field, but normal runtime value generation does not default missing `showDropdown` for data filters. Hiding the dropdown does not hide an individual URL filter, nested-dropdown, or tab-simple renderer, but a dashboard filter widget renders nothing when all referenced filters are hidden. |
| `dashboard.sharedFilters[].order` | `string` | No | `asc` | Sort order for generated filter values. | `cust`, `desc`, `asc`, `column`. `column` is exposed by the editor, but dashboard value generation currently does not apply column-based ordering. |
| `dashboard.sharedFilters[].orderedValues` | `string[]` | No | None | Custom display order when `order` is `cust`. | Preserved by editor and runtime sort helpers. |
| `dashboard.sharedFilters[].parents` | `string[]` | No | `[]` | Parent filter labels for nested filter chains. | Used by cascading URL and data filters. |
| `dashboard.sharedFilters[].usedBy` | `(string \| number)[]` | No | None | Widgets or rows that consume the filter value. | Numbers refer to row indexes; strings refer to visualization keys. Dashboard conditions inherit the same row or widget target as the content they control. Missing `usedBy` and `usedBy: []` are unscoped/global for row, visualization, and dashboard-condition filtered-data paths. For File Name URL filters, this scopes which dashboard elements can receive client-side row filtering; filename rewrites are controlled by `fileNameTargets`. |
| `dashboard.sharedFilters[].setByQueryParameter` | `string` | No | None | Query-string parameter used to seed the active value. | Used by both data and URL filters for deep links and parent-child filter flows. |
| `dashboard.sharedFilters[].defaultValue` | `string` | No | None | Default selection when no other active value is available. | Used by data and nested-dropdown filters. |
| `dashboard.sharedFilters[].resetLabel` | `string` | No | None | Reset option label. | Often shown as `All`, `Reset`, or similar. |
| `dashboard.sharedFilters[].labels` | `Record<string, string>` | No | None | Alternate display labels for raw values. | Shared label mapping from `@cdc/core`. |
| `dashboard.sharedFilters[].selectLimit` | `number` | No | `5` in multi-select UI | Maximum selections allowed in multi-select mode. | Only used when `filterStyle` is `multi-select`. |
| `dashboard.sharedFilters[].displaySubgroupingOnly` | `boolean` | No | `false` | Shows only subgrouping controls for nested-dropdown filters. | Only used by nested dropdown flows. |
| `dashboard.sharedFilters[].subGrouping` | `SubGrouping` | No | None | Nested dropdown subgroup state. | Used by data and URL nested-dropdown filters. Dashboard honors `subGrouping.defaultValue`; see `SubGrouping` below for persisted option metadata. |

### Data Filter Fields

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dashboard.sharedFilters[].columnName` | `string` | Yes for `datafilter` | None | Source column used to generate filter values. | Must exist in the active dataset. |
| `dashboard.sharedFilters[].values` | `string[]` | No | Generated from data when omitted | Values shown by data filters. | Preconfigured non-empty values are preserved; URL-filter values are generated from API state and usually do not need to be authored. |
| `dashboard.sharedFilters[].setBy` | `string` | No | None | Visualization key that seeds the filter from its selected datum. | Only used by data filters. |

### URL Filter Fields

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dashboard.sharedFilters[].apiFilter` | `APIFilter` | Yes for API-backed URL filters | None | Metadata for remote option loading. | See notes below. |
| `dashboard.sharedFilters[].filterBy` | `string` | No | None | URL filter behavior. | `Query String` or `File Name` |
| `dashboard.sharedFilters[].queryParameter` | `string` | No | None | Query-string parameter name to update. | Used by `Query String` URL filters. |
| `dashboard.sharedFilters[].fileNameTargets` | `{ datasetKey: string; fileName: string }[]` | Yes for `File Name` URL filters | None | Dataset-specific filename rewrite targets. | Each target applies only to its `datasetKey`; `fileName` can include `${value}` as a placeholder for the active filter value. Templates may omit the original dataset URL extension; if the extension is already present, it is not duplicated. File Name rewrites are controlled by this array, not `usedBy`. |
| `dashboard.sharedFilters[].whitespaceReplacement` | `string` | No | `Keep Spaces` | How spaces are rewritten in file-name filters. | `Keep Spaces`, `Remove Spaces`, `Replace With Underscore` |
| `dashboard.sharedFilters[].forceFileNameCapitalization` | `boolean` | No | `false` | Preserves legacy File Name URL-filter capitalization behavior. | When `true`, capitalizes the first letter of each space-separated word in the filename template and active filter value before applying `whitespaceReplacement`. Migrated legacy File Name filters set this to `true`; new configs should usually leave it off and author exact filename templates. |

## Dashboard Conditions

Dashboard conditions are optional visibility rules owned by rows and conditional widget entries.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `rows[].dashboardCondition.id` | `string` | No | Auto-generated | Internal dashboard-condition id used for filtered-data cache keys and stable condition identity. | The editor generates ids like `condition-4fzzzxjy` and preserves existing ids once dashboard-condition authoring is enabled. It is not an author-facing shared-filter target. |
| `rows[].columns[].conditionalWidgets[].widget` | `string` | Yes in conditional mode | None | Visualization key for one candidate component in the column. | Must match a key in `visualizations`. Author order defines priority. |
| `rows[].columns[].conditionalWidgets[].dashboardCondition.id` | `string` | No | Auto-generated | Internal dashboard-condition id used for filtered-data cache keys and stable condition identity. | The editor generates ids like `condition-8fzzzbjm` for new conditions and keeps older saved ids unchanged. It is not an author-facing shared-filter target. Scope component conditions with the owning visualization key or row index instead. |
| `*.dashboardCondition.datasetKey` | `string` | Yes except for `filtersIncomplete` | None | Dataset used to evaluate data-backed dashboard conditions. | May differ from the visualization dataset. Not used by `filtersIncomplete`. |
| `*.dashboardCondition.operator` | `string` | Yes when a dashboard condition is enabled | None | Dashboard-condition comparison mode. | `hasData`, `hasNoData`, `columnHasAnyValue`, `filtersIncomplete` |
| `*.dashboardCondition.columnName` | `string` | Only for `columnHasAnyValue` | None | Dataset column inspected by the dashboard condition. | Must exist in the dashboard-condition dataset. |
| `*.dashboardCondition.values` | `string[]` | Only for `columnHasAnyValue` | `[]` | One or more acceptable values. | Runtime uses loose string coercion so numeric dataset values can match authored strings. |

| Behavior | Details |
| --- | --- |
| Shared filter application | Conditions apply unscoped filters plus filters targeted to the content they control. Row conditions inherit the row index target. Component conditions inherit the same target their component data would use: the row index when data is configured on the row, otherwise the owning visualization key. Filters whose `columnName` is missing from the condition dataset are ignored for data-backed conditions. |
| `filtersIncomplete` targeting | `filtersIncomplete` uses the same inherited row or widget target as other dashboard conditions and includes unscoped filters. It passes only when an applicable visible filter is at reset state, and ignores filters scoped to unrelated targets. Use it for static helper content, such as a markup include message. It replaces the default incomplete-filter message but does not make ordinary data-backed rows or widgets render while filters are incomplete. |
| Unresolved inputs | For data-backed operators, if the condition dataset is unavailable or an applicable filter is still at reset state, the condition resolves as hidden rather than behaving like `hasNoData`. `filtersIncomplete` resolves from filter reset state instead of dataset availability. |
| Conditional columns | `conditionalWidgets` lets one dashboard column hold multiple candidate components while still rendering as one slot. Runtime uses the first matching entry in author order. |
| Simple/conditional cleanup | The editor automatically collapses conditional mode back to simple mode when only one unconditioned entry remains after a completed save or delete action. |
| Row suppression | A false row condition hides the full row. A no-match conditional column hides only that widget slot while preserving grid width. |
| v1 limitations | Toggle rows and multi-viz rows do not expose condition editing in the editor, and runtime ignores any condition config found there. |

### `APIFilter`

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `apiEndpoint` | `string` | Yes | None | Endpoint used to fetch filter options. | Must resolve to JSON data. |
| `valueSelector` | `string` | Yes | None | Field used as the stored filter value. | Required. For File Name URL filters, this is also the dataset column used for client-side row filtering when that column is present, for both static and dynamically fetched data. Datasets without the column are unaffected by the File Name filter. Query String URL filters do not use this field for client-side row filtering. |
| `textSelector` | `string` | No | `''` | Field used as the visible filter label. | When omitted or blank, runtime falls back to `valueSelector` for the displayed option text. |
| `subgroupValueSelector` | `string` | Yes for API-backed nested dropdowns | None | Nested subgroup value field for nested dropdowns. | Required when an API-backed filter uses nested subgrouping. |
| `subgroupTextSelector` | `string` | No | None | Nested subgroup label field for nested dropdowns. | Only used when nested subgrouping is enabled. |

### `SubGrouping`

Dashboard nested-dropdown filters use the shared [`SubGrouping`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#subgrouping) structure from core. Dashboard-specific behavior to remember: `subGrouping.defaultValue` can seed the active subgroup when no query parameter or existing active subgroup is available, and `subGrouping.valuesLookup` is persisted option metadata for data-backed nested dropdowns.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `subGrouping.columnName` | `string` | Yes for nested data filters | None | Source column used to compute subgroup values. | Must exist in the dataset for data filters. |
| `subGrouping.setByQueryParameter` | `string` | No | None | Query-string parameter used to seed the active subgroup value. | Used by dashboard nested-dropdown filters for deep links and query-parameter initialization. |
| `subGrouping.valuesLookup` | `Record<string, { values: string[]; orderedValues?: string[] }>` | Yes for data nested dropdowns | None | Lookup of subgroup values by parent filter value. | Runtime derives nested options from this object. URL nested dropdowns can receive equivalent option state from API filter loading. |
| `subGrouping.defaultValue` | `string` | No | None | Default nested selection when no query parameter or active value applies. | Must match a value in the current subgroup. |

## Table And Download Controls

`@cdc/dashboard` now represents dashboard-generated data tables as ordinary standalone `type: "table"` widgets in `visualizations` and `rows`. Legacy root `table.show` dashboard-wide table rendering is deprecated: migration `4.26.6` keeps the old root `table` object for rollback, but creates one generated table widget per eligible dataset used by dashboard content and marks it with `migrations.generatedFromDashboardTable: true`.

Generated table widgets use the shared [`Table`](https://github.com/CDCgov/cdc-open-viz/blob/main/packages/core/CONFIG.md#table) structure from the core reference. The migration copies supported root table display settings onto each generated table widget, sets `dataKey` to the dataset key, appends a full-width row at the bottom of the dashboard, and writes `table.anchorId: "data-table-${datasetKey}"` so existing `#data-table-${datasetKey}` links continue to resolve. To match legacy dashboard-wide table behavior, eligibility and scoped-filter rewriting are based on visualization `dataKey` references, not row-only `rows[].dataKey` references. Scoped shared filters are updated to include the generated table widget when the filter already targets every non-Sankey visualization backed by the same dataset; missing `usedBy` and `usedBy: []` remain global and are not rewritten.

Dashboard table dataset links are owned by each table widget through `table.showDatasetLink`; the URL remains dataset-owned at `datasets[visualizations.<key>.dataKey].dataUrl`. Migration `4.26.6` sets generated table widgets to `table.showDatasetLink: Boolean(legacyRootTable.showDownloadUrl)` and preserves legacy `table.downloadUrlLabel` as the optional link text override. Authored dashboard table widgets that were not generated from the legacy root table default to `table.showDatasetLink: false` when the field is missing, and `table.showDownloadUrl` alone does not show a dashboard table dataset link.

The migration intentionally works from named `datasets` only. The dashboard loader converts legacy root `data` into a named dataset before migration during normal dashboard initialization, while the shared migration keeps root `data` and the legacy `table` object unchanged rather than synthesizing a new dataset. Sankey-only datasets are also intentionally excluded from generated dashboard tables; their `data[0].tableData` is treated as Sankey-owned table content, not as a dashboard-wide dataset table. If the same dataset is used by a non-Sankey visualization, the migration can still generate a table for that dataset.

Dashboard image/PDF controls are owned by `dashboard.downloads`, not root `table`.

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `dashboard.downloads.downloadImageButton` | `boolean` | No | `false` | Shows a dashboard image download action. | Migrated from legacy `table.downloadImageButton` when present. |
| `dashboard.downloads.downloadImageButtonStyle` | `string` | No | `button` | Presentation for the dashboard image/PDF action. | `button`, `link`. Migrated from legacy `table.downloadImageButtonStyle`. |
| `dashboard.downloads.downloadImageLabel` | `string` | No | `Download Image` | Custom dashboard image download label. | Migrated from legacy `table.downloadImageLabel`. |
| `dashboard.downloads.downloadPdfButton` | `boolean` | No | `false` | Shows a dashboard PDF action. | The shared media handler currently reports PDF downloads as disabled. Migrated from legacy `table.downloadPdfButton`. |
| `dashboard.downloads.includeContextInDownload` | `boolean` | No | `false` | Includes supported surrounding context in dashboard image/PDF downloads. | Migrated from legacy `table.includeContextInDownload`. |

The dashboard initial state still contains a rollback-friendly root `table` object with legacy defaults (`label: 'Data Table'`, `show: true`, `showDownloadUrl: false`, `downloadUrlLabel: ''`, `showDownloadLinkBelow: true`, and `showVertical: true`). New authored dashboard tables should be standalone table widgets instead of root dashboard-wide `table.show` output.

## Multi-Dashboard Support

| Field | Type | Required | Default | Description | Allowed values / Notes |
| --- | --- | --- | --- | --- | --- |
| `multiDashboards` | `MultiDashboard[]` | No | None | Optional tabbed dashboard set. | Each entry contains its own `dashboard`, `rows`, `visualizations`, and `label`. |
| `multiDashboards[].label` | `string` | Yes | None | Label shown on the dashboard tab. | Required for each dashboard slot. |

## Fields You Can Ignore

These fields often appear in saved configs, editor exports, or migration output, but consumers usually do not need to author them:

| Field or group | Why you can ignore it |
| --- | --- |
| `runtime.*` | Internal runtime state created during load and render. |
| Top-level `uuid`, `id`, `category`, `subType`, `orientation`, and `label` | Export/editor metadata that may appear around dashboard configs; these are not required for rendering. |
| `migrations.*` | Migration bookkeeping that records which update steps have run. |
| `visualizations.*.migrations.generatedFromDashboardTable` | Marks standalone table widgets that were generated from deprecated root dashboard-wide table settings. |
| `visualizations.*.generatedBy` | Internal editor metadata. `generatedBy: "dataset-import"` marks dashboard table widgets created by the editor when datasets are imported. |
| `visualizations.*.formattedData`, `visualizations.*.originalFormattedData`, `visualizations.*.yAxisDomainData`, `visualizations.*.runtime` | Generated data and runtime artifacts owned by the loader. |
| `visualizations.*.dashboardFilters` | Runtime helper snapshot of active dashboard shared filters used by markup/filter processing. Author `dashboard.sharedFilters` instead. |
| `visualizations.*.editing`, `visualizations.*.showEditorPanel`, `visualizations.*.newViz`, `visualizations.*.openModal` | Editor state, not consumer config. |
| `visualizations.*.uid` | Editor/runtime identifier that is injected or normalized internally. |
| `datasets.*.dataFileSize`, `datasets.*.dataFileName`, `datasets.*.dataFileFormat`, `datasets.*.dataFileSourceType`, `datasets.*.runtimeDataUrl` | Runtime or file metadata. |
| Top-level `dataFileName`, `dataFileSourceType`, and `formattedData` | Legacy single-dataset metadata/runtime output. Prefer named `datasets` for new configs. |
| `rows[].uuid`, `rows[].columns[].hide`, `rows[].columns[].equalHeight`, `rows[].originalMultiVizColumn` | Layout bookkeeping that may be injected or updated by the editor. |
| `dashboard.sharedFilters[].tier`, `dashboard.sharedFilters[].active`, `dashboard.sharedFilters[].queuedActive`, and `dashboard.sharedFilters[].subGrouping.active` | Runtime/cache filter state. These may be present in saved configs, but consumers usually only author stable filter definitions plus optional defaults. |
| `dashboard.sharedFilters[].datasetKey` and File Name filter-level `dashboard.sharedFilters[].fileName` | Legacy File Name URL-filter target fields migrated to `dashboard.sharedFilters[].fileNameTargets`. Current configs should not author them. |
| `dashboard.filters` | Legacy migration field replaced by `dashboard.sharedFilters`. |
| Root `table.show` dashboard-wide table behavior | Deprecated legacy dashboard table output. Preserve it for rollback when encountered, but author standalone table widgets and `dashboard.downloads` instead. |
| `activeDashboard` | Runtime-managed active tab index for multi-dashboard sets. |
