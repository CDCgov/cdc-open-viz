# Modular Dashboards / Dashboard Conditions

This document explains the `Modular Dashboards` v1 feature in `@cdc/dashboard`.

- Use `Modular Dashboards` for the feature name in product or project discussions.
- Use `dashboardCondition` / `Dashboard Condition` for the specific config object, UI labels, and code-level concepts.

This is a developer context document. It is meant to help future contributors understand how the feature works, where the logic lives, and which behavior is intentional.

## Summary

Dashboard conditions are a post-filter visibility layer for dashboard rows and individual row columns/widgets.

The important design constraint is:

1. Existing dashboard shared-filter behavior for rows and visualizations should remain unchanged.
2. Dashboard conditions are evaluated after that existing filtering flow.
3. Conditions can point at a different dataset than the row or widget they control.

V1 supports:

- one inline `dashboardCondition` per row
- one conditional column with ordered candidate widgets when a component-level dashboard condition is needed
- operators `hasData`, `hasNoData`, `columnHasAnyValue`, and `filtersIncomplete`
- shared-filter scoping through the existing `usedBy` model

V1 does not support:

- reusable/global condition definitions
- multiple conditions per target
- explicit OR / compound logic
- toggle rows
- multi-viz rows (`multiVizColumn` / `originalMultiVizColumn`)

## Terminology

| Term                 | Meaning                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Modular Dashboards   | The overall feature: dashboards whose rows/widgets can be conditionally shown or hidden.                                          |
| Dashboard Condition  | The inline config object attached to a row or row column.                                                                         |
| Condition target     | The row-level or column-level thing a dashboard condition belongs to.                                                             |
| Shared filter target | A visualization key, row index, or dashboard-condition id that can appear in `sharedFilters[].usedBy`.                            |
| Unresolved           | The condition cannot be evaluated yet, usually because its dataset is not loaded or an applicable filter is still at reset state. |

## Config Shape

The v1 config shape is:

```ts
type DashboardCondition = {
  id?: string
  datasetKey?: string
  operator?: 'hasData' | 'hasNoData' | 'columnHasAnyValue' | 'filtersIncomplete'
  columnName?: string
  values?: string[]
}
```

It is used here:

- `rows[].dashboardCondition`
- `rows[].columns[].conditionalWidgets[].dashboardCondition`

Conditional columns also introduce:

```ts
type ConditionalWidget = {
  widget: string
  dashboardCondition?: DashboardCondition
}
```

Notes:

- `id` is treated as required at runtime once a condition exists, but is still optional in the type because older or hand-authored configs may omit it.
- The editor creates the id when the condition is first saved.
- `datasetKey` may differ from the dataset used by the controlled visualization.
- `filtersIncomplete` is a dashboard-state condition and does not use `datasetKey`, `columnName`, or `values`.
- `columnName` and `values` are only meaningful for `columnHasAnyValue`.
- component-level conditions always live on `conditionalWidgets[]` entries.
- saving the first component condition converts a simple `column.widget` into `conditionalWidgets[0]`.

## High-Level Flow

The feature intentionally rides on top of the existing dashboard filter pipeline instead of replacing it.

### Phase 1: Existing dashboard filtering

The original dashboard flow still precomputes filtered data for:

- visualization keys
- row indexes

That behavior lives in:

- [packages/dashboard/src/helpers/getFilteredData.ts](../packages/dashboard/src/helpers/getFilteredData.ts)
- [packages/dashboard/src/helpers/getUpdateConfig.ts](../packages/dashboard/src/helpers/getUpdateConfig.ts)

### Phase 2: Condition precompute

Dashboard conditions are added as a third target type in the same `filteredData` cache.

For each dashboard condition target:

1. Find the condition target id.
2. For `filtersIncomplete`, collect applicable shared filters for that condition target and store a resolved match when any applicable visible filter is at reset state.
3. For data operators, read the condition dataset from `dashboardCondition.datasetKey`.
4. Collect applicable shared filters for that condition target.
5. Ignore filters whose `columnName` is missing from the condition dataset.
6. If an applicable filter is still at reset state, treat the condition as unresolved.
7. Otherwise filter the condition dataset and store the result at `filteredData[dashboardCondition.id]`.

This logic lives in:

- [packages/dashboard/src/helpers/dashboardFilterTargets.ts](../packages/dashboard/src/helpers/dashboardFilterTargets.ts)
- [packages/dashboard/src/helpers/dashboardConditions.ts](../packages/dashboard/src/helpers/dashboardConditions.ts)

### Phase 3: Render-time evaluation

At render time, `VisualizationRow` reads the precomputed condition data and evaluates the final operator.

This keeps render-time logic simple:

- missing cache entry for a condition id means unresolved
- `[]` means resolved-empty
- non-empty array means resolved-non-empty

That distinction is what allows `hasNoData` to work without treating unresolved state as empty data.

## Why Conditions Use Their Own Filtered Data

Conditions do not directly reuse a row’s or visualization’s filtered data because:

- a condition can point at a different `datasetKey`
- a condition can have its own `usedBy` scope through its condition id
- the existing row/viz `filteredData` cache is keyed by row index or visualization key, not by condition id

So the feature extends the same precompute model rather than trying to borrow an unrelated row/viz filtered result.

## Shared Filter Targeting

The feature reuses the dashboard’s existing `usedBy` concept instead of inventing a separate scoping model.

That means `sharedFilters[].usedBy` can now contain:

- visualization keys
- row indexes
- dashboard-condition ids

This target-resolution logic lives in:

- [packages/dashboard/src/helpers/dashboardFilterTargets.ts](../packages/dashboard/src/helpers/dashboardFilterTargets.ts)

Important helpers:

- `getSharedFilterTargetOptions`
- `getDashboardConditionTargets`
- `getApplicableFiltersForTarget`
- `matchesSharedFilterTarget`

The target helper file is intentionally broader than dashboard conditions alone. It owns filter-target semantics, while `dashboardConditions.ts` owns condition-specific evaluation and id behavior.

## Render Rules

The runtime rules are:

- A row-level `dashboardCondition` must pass for the row to render.
- A simple column-level `dashboardCondition` must pass for that widget to render.
- A conditional column renders the first candidate widget whose entry-level `dashboardCondition` passes.
- If no conditional entry matches, the column renders empty and keeps its grid width.
- Row and column conditions combine with implicit AND.
- Hidden widgets preserve their grid width.
- If every widget column in a row is hidden, the row does not render.
- Dashboards without a `filtersIncomplete` condition keep the legacy incomplete-filter row suppression and static `Please complete your selection to continue.` message.
- Dashboards with at least one `filtersIncomplete` condition suppress that static reset-filter message and let authored conditional rows/widgets handle the incomplete-filter state.

Implementation lives in:

- [packages/dashboard/src/components/VisualizationRow.tsx](../packages/dashboard/src/components/VisualizationRow.tsx)

## Unresolved vs Empty

This distinction is central to the feature.

| State                                 | Meaning             | Render behavior    |
| ------------------------------------- | ------------------- | ------------------ |
| No `filteredData[conditionId]` entry  | Unresolved          | Hidden             |
| `filteredData[conditionId] = []`      | Resolved, empty     | `hasNoData` passes |
| `filteredData[conditionId] = [ ... ]` | Resolved, non-empty | `hasData` may pass |

Typical unresolved cases:

- the condition dataset has not loaded yet
- an applicable shared filter is still at reset state

This is why unresolved conditions must not be treated as a synonym for empty filtered results.

`filtersIncomplete` is the exception to the data-operator unresolved rule. It is resolved from dashboard filter state alone: it passes when any applicable visible shared filter is at reset state, and fails when applicable filters are complete or absent.

## Editor Model

The editor keeps condition authoring inline at the row or row-column location.

Key editor surfaces:

- [packages/dashboard/src/components/Row.tsx](../packages/dashboard/src/components/Row.tsx)
- [packages/dashboard/src/components/Widget/Widget.tsx](../packages/dashboard/src/components/Widget/Widget.tsx)
- [packages/dashboard/src/components/DashboardConditionModal.tsx](../packages/dashboard/src/components/DashboardConditionModal.tsx)

Important distinction:

- `Row.tsx` and `Widget.tsx` are builder/editor components.
- `VisualizationRow.tsx` is the runtime rendering component.

The editor uses full dataset access when authoring `columnHasAnyValue`:

- dataset selection
- column selection
- distinct value selection

That is separate from runtime visibility, which uses precomputed filtered condition data.

Current editor behavior to preserve:

- row and widget condition controls are separate from data-configuration controls
- the condition control shows a dedicated icon instead of text-only `If`
- condition buttons render with an active visual state when a condition already exists
- the modal uses a `Condition Type` dropdown with `No condition` representing the absence of `dashboardCondition`
- tooltips explain the condition-type choices and the column/value authoring flow for `columnHasAnyValue`
- a column stays in simple mode until the first widget condition is explicitly saved
- the second conditional component slot appears only after the first conditional entry has a saved condition
- cleanup back to simple mode happens only after completed save or delete actions, not while the first condition is still being authored

## Supported Operators

### `hasData`

Passes when the filtered condition dataset contains at least one row.

### `hasNoData`

Passes when the filtered condition dataset resolves successfully and is empty.

### `columnHasAnyValue`

Passes when at least one filtered row contains a value that loosely matches one of the authored string values.

### `filtersIncomplete`

Passes when any visible shared filter applicable to the condition target is at reset state. It uses the same targeting rules as other dashboard conditions, including unscoped shared filters through `getApplicableFiltersForTarget(..., { includeUnscoped: true })`.

It ignores filters scoped only to unrelated rows, widgets, or condition ids. It is intended for authored "please select filters" content and does not match data/API loading states by itself.

Comparison behavior:

- values are compared with string coercion
- this allows dataset numbers like `2024` to match authored values like `'2024'`

## Contract Note

The saved operator values are now:

- `hasData`
- `hasNoData`
- `columnHasAnyValue`
- `filtersIncomplete`

## V1 Exclusions

Dashboard conditions are intentionally unavailable for:

- toggle rows
- multi-viz rows

The shared helper `dashboardConditionsSupportedForRow(...)` exists to keep that rule consistent across:

- editor gating
- target discovery
- runtime evaluation

If a config somehow contains a dashboard condition on one of those unsupported row types, runtime ignores it in v1.

## Key Files

| File                                                                                                                                                                                                              | Role                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [packages/dashboard/src/helpers/dashboardColumnWidgets.ts](../packages/dashboard/src/helpers/dashboardColumnWidgets.ts)                                                                                           | Column widget source-of-truth, first-match resolution, and collapse normalization  |
| [packages/dashboard/src/helpers/dashboardConditions.ts](../packages/dashboard/src/helpers/dashboardConditions.ts)                                                                                                 | Dashboard-condition ids and operator evaluation                                    |
| [packages/dashboard/src/helpers/dashboardFilterTargets.ts](../packages/dashboard/src/helpers/dashboardFilterTargets.ts)                                                                                           | Shared-filter target resolution for rows, visualizations, and dashboard conditions |
| [packages/dashboard/src/helpers/getFilteredData.ts](../packages/dashboard/src/helpers/getFilteredData.ts)                                                                                                         | Runtime filtered-data precompute, now including condition targets                  |
| [packages/dashboard/src/helpers/getUpdateConfig.ts](../packages/dashboard/src/helpers/getUpdateConfig.ts)                                                                                                         | Config-update precompute, also includes condition targets                          |
| [packages/dashboard/src/components/VisualizationRow.tsx](../packages/dashboard/src/components/VisualizationRow.tsx)                                                                                               | Runtime row/column visibility decisions                                            |
| [packages/dashboard/src/components/DashboardConditionModal.tsx](../packages/dashboard/src/components/DashboardConditionModal.tsx)                                                                                 | Inline condition authoring modal                                                   |
| [packages/dashboard/src/components/DashboardFilters/DashboardFiltersEditor/components/FilterEditor.tsx](../packages/dashboard/src/components/DashboardFilters/DashboardFiltersEditor/components/FilterEditor.tsx) | Shared-filter `usedBy` targeting UI, now includes dashboard-condition targets      |

## Intentional Compatibility Decisions

These decisions were made to reduce risk to existing dashboards:

- Existing row/viz shared-filter behavior remains on its legacy code path.
- Dashboard conditions are added alongside that behavior rather than replacing it.
- Reducer-wide defensive condition-id normalization was intentionally avoided.
- A narrow fallback id-normalization step still exists in `getUpdateConfig(...)`.

That last point follows the existing dashboard pattern reasonably well:

- ids are usually created at authoring time
- config-preparation code may still hydrate or repair ids when needed

## Known Gotchas

### Legacy row/viz filter semantics are quirky

Do not assume the existing row/viz shared-filter matching should be “cleaned up” while touching dashboard conditions.

Some existing dashboards depend on legacy behavior in the normal row/viz filter path. If you change that behavior while working on conditions, you can break dashboards that do not use the feature at all.

### `renderIndex` vs original row index matters

When runtime rows are filtered before rendering, the original row index still needs to be preserved for row-level filtered-data lookups.

Use a separate render-position variable for things like `isLastRow`.

### Editor data and runtime data are intentionally different

If the editor is populating value options from the full dataset while runtime visibility uses filtered data, that is expected.

Do not “simplify” that distinction away unless you are intentionally changing authoring behavior.

## Testing Guidance

The most useful tests for this area are:

- condition-target precompute tests in `getFilteredData.test.ts`
- condition evaluation tests in `dashboardConditions.test.ts`
- `usedBy` UI option tests in `FilterEditor.test.tsx`
- runtime render tests in `CdcDashboardComponent.test.tsx`

When adding behavior, test these cases first:

- row condition true/false
- column condition true/false
- conditional column first-match wins
- conditional column no-match renders empty
- conversion into conditional mode only after the first condition save
- collapse back to simple mode when one unconditioned entry remains
- unresolved vs resolved-empty
- different condition dataset than visualization dataset
- sibling components with independent conditions
- shared-filter scoping through condition ids
- unsupported row types ignored consistently

## Future Refactor Ideas

These are reasonable future improvements, but they were intentionally left out of v1:

- multiple conditions per target
- compound logic (`AND` / `OR`)
- reusable condition definitions
- clearer separation between legacy row/viz filter matching and modern target matching
- moving more dataset-target relationship helpers into `dashboardFilterTargets.ts`

For now, prefer compatibility and explicitness over aggressive cleanup.
