# Dashboard Filters Flow & Refactoring Guide

> **Companion to:** [DASHBOARD_FILTERS.md](./DASHBOARD_FILTERS.md)
> **Purpose:** Visual flow diagrams, data transformations, and refactoring opportunities

## Table of Contents

1. [Complete Filter Flow Diagram](#1-complete-filter-flow-diagram)
2. [Data Transformation Pipeline](#2-data-transformation-pipeline)
3. [Critical Code Paths](#3-critical-code-paths)
4. [Refactoring Opportunities](#4-refactoring-opportunities)
5. [Performance Bottlenecks](#5-performance-bottlenecks)
6. [Testing Gaps](#6-testing-gaps)

---

## 1. Complete Filter Flow Diagram

### Phase 1: User Interaction → State Update

```
┌─────────────────────────────────────────────────────────────────┐
│ USER INTERACTION                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ DashboardFilters.tsx                                             │
│ • User selects dropdown option                                   │
│ • onChange(value) fired                                          │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ DashboardFiltersWrapper.tsx:handleOnChange()                     │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Step 1: Update filter state                                 │ │
│ │   changeFilterActive(index, value, filters, vizConfig)      │ │
│ │   → Returns: [newFilters, clearedChildIndices]              │ │
│ │                                                              │ │
│ │ Step 2: Check filter behavior                               │ │
│ │   IF FilterBehavior.Apply && !autoLoad:                     │ │
│ │     • Store in filter.queuedActive                          │ │
│ │     • Update URL params immediately                         │ │
│ │     • DON'T reload data yet                                 │ │
│ │   ELSE (autoLoad OR FilterChange behavior):                 │ │
│ │     • Store in filter.active                                │ │
│ │     • Clear child filters                                   │ │
│ │     • Proceed to data reload ↓                              │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Dispatch: SET_SHARED_FILTERS                                     │
│ • State updates in DashboardContext                              │
│ • All subscribers re-render                                      │
└─────────────────────────────────────────────────────────────────┘
```

### Phase 2: Data Loading & Filter Options Update

```
┌─────────────────────────────────────────────────────────────────┐
│ IF autoLoad OR Apply Button Clicked                             │
└─────────────────────────────────────────────────────────────────┘
                              ↓
         ┌────────────────────┴────────────────────┐
         ↓                                         ↓
┌──────────────────────┐                 ┌──────────────────────┐
│ loadAPIFilters()     │                 │ reloadURLData()      │
│ (if has apiFilter)   │                 │ (if has urlfilter)   │
│                      │                 │                      │
│ • Fetch from API     │                 │ • Build URL with     │
│ • Extract values     │                 │   filter params      │
│ • Cache results      │                 │ • Fetch fresh data   │
│ • Check parent deps  │                 │ • Dispatch SET_DATA  │
└──────────────────────┘                 └──────────────────────┘
         │                                         │
         └────────────────────┬────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ updateChildFilters()                                             │
│ • Filter data by parent's active value                           │
│ • Extract unique child values                                    │
│ • Update child.values array                                      │
│ • Preserve/clear child.active based on multi-select              │
│                                                                  │
│ ⚠️ REFACTOR NEEDED - See Section 4.2                             │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ addValuesToDashboardFilters()                                    │
│ • Extract unique values from dataset columns                     │
│ • Preserve user selections when valid                            │
│ • Apply defaults when invalid                                    │
│ • Update filter.values arrays                                    │
└─────────────────────────────────────────────────────────────────┘
```

### Phase 3: Filter Application & Data Transformation

```
┌─────────────────────────────────────────────────────────────────┐
│ getFilteredData(state, initialFilteredData?, dataOverride?)      │
│                                                                  │
│ FOR EACH visualization/row:                                      │
└─────────────────────────────────────────────────────────────────┘
         │
         ├─→ getApplicableFilters(dashboard, target)
         │   • Shared filters apply when usedBy is missing, empty,
         │     or explicitly includes the visualization key or row index
         │   • Return filters that apply to this target
         │
         ├─→ IF no applicable filters:
         │   • Use unfiltered data
         │   • Skip to next viz
         │
         └─→ IF has applicable filters:
             │
             ↓
    ┌─────────────────────────────────────────────────────────────┐
    │ filterData(filters, data)                                    │
    │ ┌─────────────────────────────────────────────────────────┐ │
    │ │ Step 1: Calculate filter tiers                          │ │
    │ │   • Root filters (no parents) = tier 1                  │ │
    │ │   • Each child level = parent tier + 1                  │ │
    │ │                                                          │ │
    │ │ Step 2: Check for reset state                           │ │
    │ │   IF any filter at reset (empty/null/resetLabel):       │ │
    │ │     RETURN [] (empty array)                             │ │
    │ │     ⚠️ CONTROVERSIAL - See Section 4.3                   │ │
    │ │                                                          │ │
    │ │ Step 3: Apply filters by tier                           │ │
    │ │   FOR each tier (1, 2, 3...):                           │ │
    │ │     FOR each data row:                                  │ │
    │ │       FOR each filter in tier:                          │ │
    │ │         IF row[columnName] !== filter.active:           │ │
    │ │           Exclude row                                   │ │
    │ │                                                          │ │
    │ │ Step 4: Return filtered dataset                         │ │
    │ └─────────────────────────────────────────────────────────┘ │
    └─────────────────────────────────────────────────────────────┘
             │
             ↓
    ┌─────────────────────────────────────────────────────────────┐
    │ Store result: filteredData[vizKey] = filtered rows           │
    └─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Dispatch: SET_FILTERED_DATA                                      │
│ • All visualizations with affected filters re-render             │
└─────────────────────────────────────────────────────────────────┘
```

### Phase 4: Visualization Rendering

```
┌─────────────────────────────────────────────────────────────────┐
│ VisualizationRow.tsx (for each row)                             │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ const _data = dashboardFilteredData[index] || row.formattedData  │
│ • Pull filtered data from context                                │
│ • Fallback to row.formattedData if no filters                    │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ getVizConfig(vizKey, rowNum, config, data, filteredData, ...)    │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ • Clone base visualization config                           │ │
│ │ • Merge row-specific data settings                          │ │
│ │ • Attach footnote data                                      │ │
│ │ • Collect shared filter columns (for CSV export)            │ │
│ │ • Apply filtered data to viz.data                           │ │
│ │ • Process footnotes with filters                            │ │
│ │ • Handle multi-viz column grouping                          │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ <CdcChart config={visualizationConfig} />                        │
│ <CdcMap config={visualizationConfig} />                          │
│ <DataTableStandAlone config={visualizationConfig} />             │
│                                                                  │
│ • Visualization renders with config.data (filtered)              │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Data Transformation Pipeline

### Filter State Transformations

```javascript
// 1. INITIAL STATE (from config)
{
  key: 'state-filter',
  type: 'datafilter',
  columnName: 'state',
  active: undefined,        // Not yet selected
  values: [],              // Empty until data loads
  resetLabel: '- Select State -'
}

// 2. AFTER DATA LOADS (addValuesToDashboardFilters)
{
  ...
  active: undefined,
  values: ['Alabama', 'Alaska', 'Arizona', ...],  // Extracted from data
}

// 3. USER SELECTS VALUE (changeFilterActive)
// IF autoLoad or FilterChange behavior:
{
  ...
  active: 'California',    // Applied immediately
  queuedActive: undefined
}

// IF Apply Button behavior (not yet applied):
{
  ...
  active: undefined,       // Still at reset
  queuedActive: 'California'  // Queued for later
}

// 4. AFTER APPLY BUTTON CLICKED
{
  ...
  active: 'California',    // Moved from queuedActive
  queuedActive: undefined
}
```

### Data Filtering Transformation

```javascript
// INPUT: Raw dataset
const rawData = [
  { state: 'California', county: 'Los Angeles', value: 100 },
  { state: 'California', county: 'San Diego', value: 80 },
  { state: 'Texas', county: 'Harris', value: 90 },
  { state: 'Texas', county: 'Dallas', value: 70 }
]

// FILTER APPLIED: state = 'California'
const filters = [{
  columnName: 'state',
  active: 'California',
  tier: 1
}]

// OUTPUT: Filtered dataset
const filteredData = [
  { state: 'California', county: 'Los Angeles', value: 100 },
  { state: 'California', county: 'San Diego', value: 80 }
]
// ✅ Passed to visualization as config.data
```

### Parent-Child Filter Cascade

```javascript
// BEFORE: Parent changes from 'Texas' → 'California'
parentFilter = {
  key: 'state',
  columnName: 'state',
  active: 'California'  // Just changed
}

childFilter = {
  key: 'county',
  columnName: 'county',
  parents: ['state'],
  values: ['Harris', 'Dallas'],      // Texas counties (now invalid!)
  active: 'Harris'                   // Now invalid!
}

// AFTER: updateChildFilters() runs
childFilter = {
  ...
  values: ['Los Angeles', 'San Diego'],  // California counties
  active: undefined                      // Cleared (was invalid)
  // OR
  active: ['Los Angeles', 'San Diego']   // All values (if multi-select)
}
```

---

## 3. Critical Code Paths

### 3.1 Filter Change Path

**Entry Point:** `DashboardFiltersWrapper.tsx:handleOnChange()`

```
handleOnChange(index, value)
  ├─→ changeFilterActive(index, value, filters, vizConfig)
  │   └─→ Returns [newFilters, clearedChildIndices]
  │
  ├─→ dispatch({ type: 'SET_SHARED_FILTERS', payload: newFilters })
  │
  ├─→ IF autoLoad OR onChange behavior:
  │   ├─→ loadAPIFilters(...)
  │   ├─→ reloadURLData(...)
  │   └─→ updateChildFilters(newFilters, data)
  │
  └─→ ELSE (Apply Button behavior):
      └─→ Only update URL params, wait for Apply click
```

**Files Involved:**
- `components/DashboardFilters/DashboardFiltersWrapper.tsx:180-250`
- `helpers/changeFilterActive.ts:31-65`
- `helpers/updateChildFilters.ts:4-50`

### 3.2 Apply Button Path

**Entry Point:** `DashboardFiltersWrapper.tsx:applyFilters()`

```
applyFilters()
  ├─→ Move queuedActive → active for all filters
  │
  ├─→ dispatch({ type: 'SET_SHARED_FILTERS', payload: updatedFilters })
  │
  ├─→ loadAPIFilters(...)
  │
  ├─→ reloadURLData(...)
  │
  └─→ dispatch({ type: 'SET_FILTERS_APPLIED', payload: true })
```

**Files Involved:**
- `components/DashboardFilters/DashboardFiltersWrapper.tsx:300-350`
- `helpers/loadAPIFilters.ts`
- `helpers/reloadURLHelpers.ts`

### 3.3 Data Filtering Path

**Entry Point:** `helpers/getFilteredData.ts`

```
getFilteredData(state, initialFilteredData?, dataOverride?)
  │
  ├─→ FOR each visualization/row:
  │   ├─→ getApplicableFilters(dashboard, target)
  │   │   └─→ Returns filters where usedBy is missing, empty, or includes target
  │   │
  │   ├─→ IF has applicable filters:
  │   │   └─→ filterData(applicableFilters, data)
  │   │       ├─→ Calculate filter tiers
  │   │       ├─→ Check for reset state → return []
  │   │       └─→ Apply filters sequentially by tier
  │   │
  │   └─→ Store: filteredData[vizKey] = result
  │
  └─→ dispatch({ type: 'SET_FILTERED_DATA', payload: filteredData })
```

**Files Involved:**
- `helpers/getFilteredData.ts:15-120`
- `helpers/filterData.ts:1-150`

### 3.4 Visualization Rendering Path

**Entry Point:** `components/VisualizationRow.tsx`

```
VisualizationRow({ row, index, ... })
  │
  ├─→ Get filtered data: dashboardFilteredData[index]
  │
  ├─→ FOR each visualization in row:
  │   ├─→ getVizConfig(vizKey, rowNum, config, data, filteredData)
  │   │   ├─→ Clone viz config
  │   │   ├─→ Merge row data
  │   │   ├─→ Apply filtered data to viz.data
  │   │   └─→ Process footnotes
  │   │
  │   └─→ Render: <CdcChart config={visualizationConfig} />
  │
  └─→ Visualization consumes config.data (filtered)
```

**Files Involved:**
- `components/VisualizationRow.tsx:100-200`
- `helpers/getVizConfig.ts:38-129`

---

## 4. Refactoring Opportunities

### 4.1 changeFilterActive.ts - Logic Complexity

**File:** `packages/dashboard/src/helpers/changeFilterActive.ts:31-65`

**Issues:**
1. ❌ Complex branching logic (immediate vs queued apply)
2. ❌ Nested dropdown special case handling
3. ❌ Duplicated `handleChildren()` call at end (line 64)
4. ❌ URL query param updates scattered throughout

**Current Code Problems:**
```typescript
// Line 64 - handleChildren called TWICE
if (vizConfig.filterBehavior !== FilterBehavior.Apply || vizConfig.autoLoad) {
  // ...
  handleChildren(sharedFiltersCopy, filterIndex)  // Called here
}
// ...
return [sharedFiltersCopy, handleChildren(sharedFiltersCopy, filterIndex)]  // Called again!
```

**Refactoring Recommendation:**

```typescript
// ✅ Extract strategy pattern for filter behaviors
interface FilterUpdateStrategy {
  shouldApplyImmediately: boolean
  updateFilter(filter: SharedFilter, value: any): void
  syncToURL(filter: SharedFilter): void
}

class ImmediateApplyStrategy implements FilterUpdateStrategy {
  shouldApplyImmediately = true
  updateFilter(filter, value) { filter.active = value }
  syncToURL(filter) { updateQueryString({ [filter.setByQueryParameter]: filter.active }) }
}

class QueuedApplyStrategy implements FilterUpdateStrategy {
  shouldApplyImmediately = false
  updateFilter(filter, value) { filter.queuedActive = value }
  syncToURL(filter) { updateQueryParam(filter.setByQueryParameter, value) }
}

// ✅ Simplified main function
export const changeFilterActive = (...) => {
  const strategy = getStrategy(vizConfig)
  const updatedFilters = _.cloneDeep(sharedFilters)
  const currentFilter = updatedFilters[filterIndex]

  // Apply value update
  strategy.updateFilter(currentFilter, value)

  // Sync to URL
  strategy.syncToURL(currentFilter)

  // Clear children ONCE
  const clearedChildren = strategy.shouldApplyImmediately
    ? handleChildren(updatedFilters, filterIndex)
    : []

  return [updatedFilters, clearedChildren]
}
```

**Benefits:**
- ✅ Single responsibility per strategy
- ✅ Eliminates duplicate `handleChildren()` call
- ✅ Easier to test each behavior independently
- ✅ Centralizes URL sync logic

---

### 4.2 updateChildFilters.ts - Performance & Bug Fixes

**File:** `packages/dashboard/src/helpers/updateChildFilters.ts:4-50`

**Issues:**
1. ❌ **BUG:** Line 20 - `String(childFilter.parents) === String(filter.key)`
   - Breaks if `parents` is an array (stringifies to `"key1,key2"`)
2. ❌ **Performance:** O(n²) complexity - loops through all filters for each child
3. ❌ **Type safety:** `parentsActiveValues: string[]` but contains objects
4. ❌ **Complex ternary:** Lines 34-40 hard to read

**Status:** ✅ **ALREADY REFACTORED** (see earlier work)

**What Was Fixed:**
- ✅ Created `Map<key, filter>` for O(1) parent lookup
- ✅ Fixed parent matching to handle arrays: `Array.isArray(parents) ? parents[0] : parents`
- ✅ Extracted helper functions for clarity
- ✅ Replaced nested ternary with clear if/return logic

---

### 4.3 filterData.ts - "Reset Filter" Behavior

**File:** `packages/dashboard/src/helpers/filterData.ts:100`

**Issue:**
```typescript
// Line 100 - Controversial logic
const hasResetFilters = filters.some(filter => isFilterAtResetState(filter))
if (hasResetFilters) {
  return []  // ❌ Returns EMPTY array if ANY filter is at reset
}
```

**Why This Is Problematic:**
1. ❌ **UX Issue:** If user has 5 filters and resets 1, ALL data disappears
2. ❌ **Counter-intuitive:** Users expect reset filter to show "all" data for that dimension
3. ❌ **Forces "No Data" state:** Dashboard shows "Select filters to view data" message
4. ❌ **Inconsistent:** Conflicts with expected filter behavior (reset = no filter applied)

**Current Behavior:**
```
Filters: [State = "California", County = <reset>]
Result: [] (no data shown)
Expected: All counties in California
```

**Refactoring Recommendation:**

```typescript
// ✅ Option 1: Skip reset filters (treat as "all")
export const filterData = (filters: SharedFilter[], data: any[]): any[] => {
  // Filter OUT any filters at reset state
  const activeFilters = filters.filter(f => !isFilterAtResetState(f))

  if (activeFilters.length === 0) {
    return data  // No active filters = show all data
  }

  // Apply only active filters
  return applyFiltersByTier(activeFilters, data)
}

// ✅ Option 2: Make behavior configurable
interface FilterConfig {
  resetBehavior: 'show-none' | 'show-all' | 'require-all'
}

export const filterData = (filters, data, config: FilterConfig) => {
  const hasReset = filters.some(isFilterAtResetState)

  switch (config.resetBehavior) {
    case 'show-none':
      return hasReset ? [] : applyFilters(filters, data)
    case 'show-all':
      return applyFilters(filters.filter(f => !isFilterAtResetState(f)), data)
    case 'require-all':
      return hasReset ? [] : applyFilters(filters, data)
  }
}
```

**Benefits:**
- ✅ Users can see partial results while selecting filters
- ✅ More intuitive UX
- ✅ Configurable per dashboard

**Migration Path:**
1. Add config flag: `dashboard.filterResetBehavior = 'show-none'` (default, preserve current)
2. Allow dashboards to opt into `'show-all'` behavior
3. Monitor usage and switch default if preferred

---

### 4.4 getVizConfig.ts - Reduce Complexity

**File:** `packages/dashboard/src/helpers/getVizConfig.ts:38-129`

**Issues:**
1. ❌ Function is 90+ lines (too long)
2. ❌ Multiple responsibilities: data merging, filter collection, footnote processing
3. ❌ Complex conditional logic for different data sources
4. ❌ Hard to test individual pieces

**Refactoring Recommendation:**

```typescript
// ✅ Extract smaller focused functions

/**
 * Merges row-level data configuration into visualization config
 */
const mergeRowData = (vizConfig: AnyVisualization, rowData: any) => {
  if (!rowData?.dataKey) return vizConfig

  return {
    ...vizConfig,
    ..._.pick(rowData, ['dataKey', 'dataDescription', 'formattedData', 'data'])
  }
}

/**
 * Collects shared filter columns for CSV export
 */
const collectSharedFilterColumns = (
  sharedFilters: SharedFilter[],
  visualizationKey: string
): string[] => {
  return sharedFilters.reduce((acc, filter) => {
    if (!filter.usedBy?.length || filter.usedBy.includes(visualizationKey)) {
      const apiFilter = filter.apiFilter
      const colName = apiFilter?.textSelector || apiFilter?.valueSelector || filter.columnName
      acc.push(colName)

      const subGrouping = apiFilter?.subgroupTextSelector ||
                          apiFilter?.subgroupValueSelector ||
                          filter.subGrouping?.columnName
      if (subGrouping) acc.push(subGrouping)
    }
    return acc
  }, [])
}

/**
 * Determines which data to use for visualization
 */
const selectVisualizationData = (
  vizConfig: AnyVisualization,
  data: Object,
  filteredData: Object,
  filteredDataOverride: Object[],
  sharedFilterColumns: string[]
): any[] => {
  if (filteredDataOverride) return filteredDataOverride
  if (filteredData) return filteredData

  const dataKey = vizConfig.dataKey || 'backwards-compatibility'
  const shouldClearData = sharedFilterColumns.length && vizConfig.type !== 'markup-include'

  return shouldClearData ? [] : data[dataKey] || []
}

// ✅ Simplified main function
export const getVizConfig = (...args): AnyVisualization => {
  // Step 1: Setup
  const baseConfig = cloneConfig(config.visualizations[visualizationKey])
  const vizConfig = mergeRowData(baseConfig, config.rows[rowNumber])

  // Step 2: Collect filter metadata
  const sharedFilterColumns = collectSharedFilterColumns(config.dashboard.sharedFilters, visualizationKey)
  const activeDashboardFilters = collectActiveDashboardFilters(config.dashboard.sharedFilters)

  // Step 3: Apply data
  vizConfig.data = selectVisualizationData(
    vizConfig, data, filteredData, filteredDataOverride, sharedFilterColumns
  )

  // Step 4: Process footnotes
  if (vizConfig.footnotes) {
    return processFootnotes(vizConfig, rowNumber, config, visualizationKey, multiVizColumn, filteredDataOverride)
  }

  return vizConfig
}
```

**Benefits:**
- ✅ Each function has single responsibility
- ✅ Easier to unit test
- ✅ Main function reads like documentation
- ✅ Can reuse helpers in other contexts

---

### 4.5 DashboardFiltersWrapper.tsx - State Management

**File:** `components/DashboardFilters/DashboardFiltersWrapper.tsx`

**Issues:**
1. ❌ **Massive component:** 600+ lines
2. ❌ **Too many responsibilities:**
   - Filter state management
   - API loading orchestration
   - Child filter updates
   - URL persistence
   - Apply button logic
   - Reset logic
3. ❌ **Complex useEffect dependencies**
4. ❌ **Difficult to test**

**Refactoring Recommendation:**

```typescript
// ✅ Extract custom hooks

/**
 * Manages filter value changes and queued state
 */
const useFilterValueManagement = (filters, vizConfig, dispatch) => {
  const handleChange = useCallback((index, value) => {
    const [newFilters, cleared] = changeFilterActive(index, value, filters, vizConfig)
    dispatch({ type: 'SET_SHARED_FILTERS', payload: newFilters })
    return { newFilters, clearedIndices: cleared }
  }, [filters, vizConfig, dispatch])

  return { handleChange }
}

/**
 * Manages API filter loading with caching and dependencies
 */
const useAPIFilterLoading = (filters, data, isStale) => {
  const [apiDropdowns, setApiDropdowns] = useState({})

  const loadFilters = useCallback(async (filterIndices) => {
    const results = await loadAPIFilters(filters, filterIndices, isStale)
    setApiDropdowns(prev => ({ ...prev, ...results }))
  }, [filters, isStale])

  return { apiDropdowns, loadFilters }
}

/**
 * Manages apply button state and behavior
 */
const useApplyButtonBehavior = (filters, dispatch) => {
  const applyFilters = useCallback(() => {
    const updatedFilters = filters.map(f => ({
      ...f,
      active: f.queuedActive ?? f.active,
      queuedActive: undefined
    }))
    dispatch({ type: 'SET_SHARED_FILTERS', payload: updatedFilters })
    dispatch({ type: 'SET_FILTERS_APPLIED', payload: true })
  }, [filters, dispatch])

  const resetFilters = useCallback(() => {
    const resetFilters = filters.map(f => ({
      ...f,
      active: undefined,
      queuedActive: undefined
    }))
    dispatch({ type: 'SET_SHARED_FILTERS', payload: resetFilters })
  }, [filters, dispatch])

  return { applyFilters, resetFilters }
}

// ✅ Simplified wrapper component
const DashboardFiltersWrapper = (props) => {
  const { handleChange } = useFilterValueManagement(...)
  const { apiDropdowns, loadFilters } = useAPIFilterLoading(...)
  const { applyFilters, resetFilters } = useApplyButtonBehavior(...)

  return (
    <DashboardFilters
      filters={filters}
      onChange={handleChange}
      onApply={applyFilters}
      onReset={resetFilters}
      apiDropdowns={apiDropdowns}
    />
  )
}
```

**Benefits:**
- ✅ Each hook has single responsibility
- ✅ Easier to test hooks independently
- ✅ Reusable across different filter UIs
- ✅ Clearer component structure

---

## 5. Performance Bottlenecks

### 5.1 Redundant Filter Calculations

**Problem:**
```typescript
// getFilteredData() recalculates ALL visualizations on ANY filter change
// Even if filter only affects 1 visualization
```

**Location:** `helpers/getFilteredData.ts:20-100`

**Impact:**
- Dashboard with 20 visualizations × 1000 data rows = 20,000 filter operations
- User changes 1 filter → all 20 visualizations recalculate

**Solution:**

```typescript
// ✅ Memoize filtered data per visualization
const useFilteredVisualizationData = (vizKey, filters, data) => {
  return useMemo(() => {
    const applicableFilters = getApplicableFilters(filters, vizKey)
    if (!applicableFilters.length) return data
    return filterData(applicableFilters, data)
  }, [
    vizKey,
    // Only recalc if THIS viz's filters change
    JSON.stringify(applicableFilters.map(f => ({ key: f.key, active: f.active }))),
    data
  ])
}

// ✅ Or use selector pattern with reselect
import { createSelector } from 'reselect'

const makeFilteredDataSelector = (vizKey) => createSelector(
  [
    state => state.data,
    state => state.dashboard.sharedFilters,
    () => vizKey
  ],
  (data, filters, vizKey) => {
    const applicable = getApplicableFilters(filters, vizKey)
    return applicable.length ? filterData(applicable, data) : data
  }
)
```

**Estimated Improvement:** 90%+ reduction in filter calculations

---

### 5.2 Deep Cloning Overhead

**Problem:**
```typescript
// changeFilterActive.ts:37
const sharedFiltersCopy = _.cloneDeep(sharedFilters)  // Deep clone entire array

// updateChildFilters.ts:14
const updatedFilters = _.cloneDeep(newSharedFilters)  // Deep clone again

// getVizConfig.ts:48
const visualizationConfig = cloneConfig(config.visualizations[visualizationKey])  // Deep clone
```

**Impact:**
- Large dashboard configs (50+ filters) cloned multiple times per interaction
- Object with nested arrays/objects = expensive clone operation

**Solution:**

```typescript
// ✅ Use structural sharing (Immer.js)
import produce from 'immer'

export const changeFilterActive = (...) => {
  const updatedFilters = produce(sharedFilters, draft => {
    draft[filterIndex].active = value
    // Only modified objects are cloned, rest are shared
  })

  return [updatedFilters, clearedIndices]
}

// ✅ Or use ImmutableJS for better performance
import { List, Map } from 'immutable'

// Store filters as Immutable.List
const filters = List(sharedFilters)
const updated = filters.update(filterIndex, filter =>
  filter.set('active', value)
)
```

**Estimated Improvement:** 50-70% reduction in clone time

---

### 5.3 Unnecessary Re-renders

**Problem:**
```typescript
// DashboardContext.tsx - All consumers re-render when ANY state changes
<DashboardContext.Provider value={{ config, data, filteredData, loading, ... }}>
```

**Impact:**
- Filter change updates `config.dashboard.sharedFilters`
- ALL visualizations re-render (even those not affected by the filter)

**Solution:**

```typescript
// ✅ Split context into smaller pieces
<DashboardConfigContext.Provider value={config}>
  <DashboardDataContext.Provider value={data}>
    <DashboardFilteredDataContext.Provider value={filteredData}>
      {children}
    </DashboardFilteredDataContext.Provider>
  </DashboardDataContext.Provider>
</DashboardConfigContext.Provider>

// ✅ Or use context selectors
import { useContextSelector } from 'use-context-selector'

const filteredData = useContextSelector(
  DashboardContext,
  state => state.filteredData[vizKey]  // Only re-render when THIS viz's data changes
)
```

**Estimated Improvement:** 80%+ reduction in re-renders

---

## 6. Testing Gaps

### 6.1 Missing Unit Tests

**Critical Paths Without Tests:**

| Function | File | Complexity | Risk |
|----------|------|------------|------|
| `changeFilterActive` | `helpers/changeFilterActive.ts` | High | **Critical** |
| `filterData` | `helpers/filterData.ts` | High | **Critical** |
| `updateChildFilters` | `helpers/updateChildFilters.ts` | Medium | High |
| `getVizConfig` | `helpers/getVizConfig.ts` | High | High |
| `getFilteredData` | `helpers/getFilteredData.ts` | Medium | Medium |

**Recommended Test Coverage:**

```typescript
// ✅ Example test structure for changeFilterActive
describe('changeFilterActive', () => {
  describe('Immediate Apply Mode', () => {
    it('should update filter.active immediately when autoLoad is true')
    it('should clear child filters when parent changes')
    it('should update URL query parameters')
    it('should handle nested dropdown filters correctly')
    it('should preserve other filter values')
  })

  describe('Queued Apply Mode', () => {
    it('should update filter.queuedActive instead of active')
    it('should update URL but not reload data')
    it('should not clear child filters until applied')
  })

  describe('Edge Cases', () => {
    it('should handle undefined filter values')
    it('should handle array values for multi-select')
    it('should handle missing setByQueryParameter')
  })
})
```

---

### 6.2 Missing Integration Tests

**Critical Flows Without Tests:**

1. **Filter Change → Data Reload → Visualization Update**
   - No end-to-end test verifying complete flow

2. **Parent Filter Change → Child Filter Update → Apply**
   - Cascading filter behavior not tested

3. **Apply Button Workflow**
   - Queue → Apply → Data reload → Update viz

**Recommended Integration Tests:**

```typescript
// ✅ Example integration test
describe('Filter Integration Flow', () => {
  it('should update visualization when filter changes', async () => {
    // 1. Render dashboard with filters
    const { getByLabelText, getByTestId } = render(<Dashboard config={mockConfig} />)

    // 2. Change filter value
    fireEvent.change(getByLabelText('State Filter'), { target: { value: 'California' } })

    // 3. Wait for data to reload
    await waitFor(() => expect(getByTestId('loading')).not.toBeInTheDocument())

    // 4. Verify visualization shows filtered data
    const chart = getByTestId('chart-viz-1')
    expect(chart).toHaveAttribute('data-rows', '2')  // Only California rows
  })

  it('should update child filter when parent changes', async () => {
    // Test cascading filter behavior
  })
})
```

---

## 7. Summary of Priority Refactorings

### 🔴 High Priority (Do First)

1. **Fix `updateChildFilters` parent matching bug** ✅ DONE
   - Bug causes filters to break with array parents
   - Performance O(n²) → O(n)

2. **Add unit tests for `changeFilterActive` and `filterData`**
   - Critical paths with complex logic
   - High risk of regression

3. **Split `DashboardFiltersWrapper` into custom hooks**
   - Reduces complexity
   - Improves testability
   - Enables reuse

### 🟡 Medium Priority

4. **Refactor `filterData` reset behavior**
   - UX improvement
   - Make configurable
   - Requires product decision

5. **Optimize filter calculations with memoization**
   - Significant performance win
   - Low risk

6. **Extract `getVizConfig` helper functions**
   - Improves maintainability
   - Easier testing

### 🟢 Low Priority (Nice to Have)

7. **Apply strategy pattern to `changeFilterActive`**
   - Cleaner code structure
   - Not urgent

8. **Split DashboardContext into smaller contexts**
   - Performance optimization
   - Requires broader refactor

---

## Next Steps

1. **Review refactoring priorities** with team
2. **Add tests** for critical paths (especially `changeFilterActive`, `filterData`)
3. **Fix known bugs** (updateChildFilters - ✅ already done)
4. **Create feature flags** for behavior changes (reset filter logic)
5. **Monitor performance** metrics before/after optimizations
6. **Document migration path** for breaking changes

---

**Last Updated:** 2025-12-12
**Companion Doc:** [DASHBOARD_FILTERS.md](./DASHBOARD_FILTERS.md)
