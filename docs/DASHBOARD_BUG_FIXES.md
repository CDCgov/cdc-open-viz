# Dashboard Bug Fixes

Addresses 18 correctness and stability issues in `@cdc/dashboard` and `@cdc/core`, spanning silent data failures, crashes, and state management bugs.

---

## `@cdc/core`

### `helpers/coveUpdateWorker.ts` — multi-dashboard migration version tracking

Two related bugs caused every migration to re-run on every sub-dashboard on every page load.

**Bug 1 — outer version forced onto sub-dashboards.** The worker unconditionally wrote the outer config's pre-migration version onto each sub-dashboard before running migrations. A sub-dashboard already ahead of the outer config would re-run migrations it had already applied; one genuinely behind could have migrations skipped. Fixed: the fallback version is only applied when the sub-dashboard has no version of its own.

**Bug 2 — version deleted after migration.** After migrating a sub-dashboard, `delete genConfig.version` removed the stamped version. On the next load, `versionNeedsUpdate` returned `true` for every version entry and the full migration chain ran again from scratch. Fixed: the delete was removed. Sub-dashboards now retain their version after migration.

---

## `@cdc/dashboard`

### `CdcDashboard.tsx` — dataset path selection

`loadSingleDashboard` checked `if (config.datasets)` to decide whether to call `prepareDatasets`. An empty object `{}` is truthy, so a partially-migrated config with `datasets: {}` entered `prepareDatasets`, produced no data, and all visualization `dataKey` lookups silently returned `undefined`. Changed to `Object.keys(config.datasets).length > 0`.

`loadMultiDashboard` always called `prepareDatasets` even when the merged config had no `datasets` key, which would throw inside `Object.keys(undefined)`. Added an explicit early return when datasets are absent or empty.

`prepareDatasets` now skips vizs whose `dataKey` is falsy or not present in the datasets map, rather than looking up `datasets[undefined]`.

### `CdcDashboardComponent.tsx`

**`setAPILoading` permanently stuck `true`.** `loadAPIFilters()?.then(...)` used optional chaining: when `loadAPIFilters` returned `undefined` (no shared filters), the `.then` callback never ran and `setAPILoading(false)` was never called. The full-screen spinner appeared and never went away. Fixed by capturing the return value explicitly and calling `setAPILoading(false)` on the `undefined` path.

**Empty data flash during `reloadURLData`.** The function dispatched `SET_DATA({})` and `SET_FILTERED_DATA({})` before fetching, then dispatched real data after. Any component rendering in the window between the two dispatches saw `data[key] === undefined` and rendered empty. Removed the upfront empty dispatches; `setAPILoading(true)` is now called once at function entry, showing the loading overlay immediately without clearing existing data.

**Direct state mutation in `reloadURLData`.** `const newDatasets = config.datasets` was a reference, not a copy. Writes like `newDatasets[datasetKey].data = data` mutated the live config state before the reducer could process it. Changed to a shallow copy (`{ ...config.datasets }`) with object-spread updates on each key.

**Error boundaries around `VisualizationRow`.** A single render error in any row crashed the entire dashboard. Each `VisualizationRow` is now wrapped in `<ErrorBoundary>`, isolating failures to the affected row.

### `components/Column.tsx` — stale `canDrop` closure

`useDrop`'s `canDrop` factory closed over `data.widget` but `data.widget` was missing from the dependency array. After a widget was deleted or moved, the factory never re-ran and the stale closure rejected all drops onto that column slot. Added `data.widget` to the dependency array.

### `components/Grid.tsx` — index-based React key on rows

`<Row>` components used their array index as `key`. After a drag-drop reorder, React reused existing components in their new positions, leaving locally-held state (toggle names, etc.) pinned to the old position rather than the widget. Rows now receive a stable `uuid` at creation time; `key` and the `uuid` prop both use it.

### `components/Row.tsx` — `deleteRow` shared filter cleanup

`deleteRow` removed widgets from `visualizations` but did not clean up shared filters that became orphaned after the deletion. Those orphaned filters accumulated until save time, when `cleanSharedFilters` eventually removed them — without shifting `sharedFilterIndexes` in remaining `dashboardFilters` visualizations in the process.

`deleteRow` now iterates `sharedFilters` in reverse and calls `removeDashboardFilter` for any filter no longer referenced by a remaining `dashboardFilters` widget. `removeDashboardFilter` handles the index-shifting so all other vizs stay consistent immediately after deletion.

### `components/VisualizationRow.tsx` — out-of-bounds shared filter index crash

`applyButtonNotClicked` destructured `config.dashboard.sharedFilters[index]` without checking bounds. Configs with stale `sharedFilterIndexes` caused a runtime crash on render. Added `if (!filter) return false` before the destructure.

### `components/DashboardFilters/DashboardFiltersEditor/DashboardFiltersEditor.tsx` — string index push

`sharedFilterIndexes` accumulated string values (`e.target.value`) instead of numbers. Any downstream strict-equality comparison against a numeric index silently failed, making valid filters appear unused. Fixed: `Number(e.target.value)` with an early-return guard for empty or non-numeric values.

### `components/DashboardFilters/DashboardFiltersEditor/components/FilterEditor.tsx` — `apiFilter` typo

`filter?.apifilter?.subgroupTextSelector` was always `undefined` because the property is `apiFilter` (camelCase). The subgroup display text selector field rendered empty regardless of the stored value.

### `helpers/addVisualization.ts` — UID collision

UIDs were `type + Date.now()`. Two visualizations of the same type created within the same millisecond silently overwrote each other in the `visualizations` map. UIDs now append 5 random alphanumeric characters: `` `${type}${Date.now()}${Math.random().toString(36).slice(2, 7)}` ``.

### `helpers/filterData.ts` — double-filtering and skipped tiers

The tier loop always called `filterDataByTier` against the original `_data` rather than accumulated output. On the last iteration it applied `maxTier - 1` a second time. For configs with 3+ tiers this meant all middle tiers were silently skipped and the second-to-last tier was applied twice.

Replaced with a straightforward progressive pass:

```ts
let filteredData = _data
for (let tier = 1; tier <= maxTier; tier++) {
  filteredData = filterDataByTier(filteredData, filters, tier)
}
return filteredData
```

For configs with 1 or 2 tiers the output is identical to the previous behavior. For 3+ tiers the output is now correct.

### `helpers/formatConfigBeforeSave.ts` — filter deletion on save

`cleanSharedFilters` built `usedFilters` from `sharedFilterIndexes` without normalizing types. Because `sharedFilterIndexes` could contain strings, `usedFilters.includes(index)` failed strict equality against numeric loop indices, making every in-use filter appear unused. Every save deleted all shared filters. Fixed by normalizing with `.map(Number)` when building `usedFilters`; this also handles any already-saved configs with string-typed indices.

### `helpers/getUpdateConfig.ts` — `dataKey` typo

`if (newConfig.rows[row]?.datakey)` used lowercase `k`. The guard never fired, so the per-visualization filter-application path ran even for rows with data configured at the row level, overwriting that configuration on every config update.

### `helpers/mapDataToConfig.ts` — stale `dataKey` throws

`config.datasets[viz.dataKey].data` and `config.datasets[row.dataKey].data` threw `Cannot read properties of undefined` when `dataKey` referenced a dataset that no longer existed (e.g., after `RESET_VISUALIZATION` deletes the key). Added an early-return guard: skip the assignment when the dataset is not found rather than throwing.

### `store/dashboard.reducer.ts` — `RENAME_DASHBOARD_TAB` never updated state

`applyMultiDashboards({ ...state, newConfig }, newMultiDashboards)` spread `newConfig` as a top-level key on state rather than replacing `config`. The rename appeared to succeed but the state root still held the old label. Fixed: `{ ...state, config: newConfig }`.

---

## Tests Added / Updated

| File | Description |
|------|-------------|
| `FilterEditor.test.tsx` | Two new tests: `apiFilter.subgroupTextSelector` displays correctly; absent selector shows empty string |
| `formatConfigBeforeSave.test.ts` | Two new tests: number-typed and string-typed `sharedFilterIndexes` are both preserved by `cleanSharedFilters` |
| `dashboard.reducer.test.ts` | Three new tests for `RENAME_DASHBOARD_TAB`: active label updated, matching tab renamed, non-matching tab unchanged |
| `coveUpdateWorker.test.ts` | Updated assertion: sub-dashboards retain their version after migration instead of having it deleted |
