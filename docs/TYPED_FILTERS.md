# Typed Filter System

This document describes the strongly-typed filter system in COVE, which provides compile-time type safety for visualization and dashboard filters.

## Overview

COVE now provides two levels of typed filter systems:

1. **TypedVizFilter** - For visualization-level filters
2. **TypedSharedFilter** - For dashboard-level shared filters

Both use discriminated unions based on the `filterStyle` property to enable TypeScript to narrow types automatically.

## Visualization Filters (TypedVizFilter)

### Available Types

```typescript
import {
  TypedVizFilter,
  TypedSingleSelectFilter,
  TypedMultiSelectFilter,
  TypedNestedDropdownFilter
} from '@cdc/core/types/VizFilter'
```

### Filter Types

#### SingleSelectFilter
Used for filters where only one value can be selected at a time.

**Filter Styles**: `'dropdown'` | `'tab'` | `'pill'` | `'combobox'`

**Active Type**: `string`

```typescript
const dropdownFilter: TypedSingleSelectFilter = {
  filterStyle: 'dropdown',
  id: 'state',
  label: 'Select State',
  active: 'California',
  values: ['California', 'Texas', 'New York'],
  columnName: 'state',
  order: 'asc'
}
```

#### MultiSelectFilter
Used for filters where multiple values can be selected.

**Filter Styles**: `'multi-select'`

**Active Type**: `string[]`

**Additional Properties**: `selectLimit?: number`

```typescript
const multiSelectFilter: TypedMultiSelectFilter = {
  filterStyle: 'multi-select',
  id: 'regions',
  label: 'Select Regions',
  active: ['Northeast', 'West'],
  values: ['Northeast', 'West', 'South', 'Midwest'],
  columnName: 'region',
  order: 'asc',
  selectLimit: 3 // Optional: limit number of selections
}
```

#### NestedDropdownFilter
Used for hierarchical/nested filter selections.

**Filter Styles**: `'nested-dropdown'`

**Active Type**: `string`

**Required Properties**: `subGrouping: SubGrouping`

```typescript
const nestedFilter: TypedNestedDropdownFilter = {
  filterStyle: 'nested-dropdown',
  id: 'location',
  label: 'Select Location',
  active: 'New York City',
  values: ['New York State', 'New York City', 'Albany'],
  columnName: 'location',
  order: 'asc',
  subGrouping: {
    groupBy: 'state',
    subGroupBy: 'city'
  }
}
```

### Type Guards

Use type guards to safely narrow filter types:

```typescript
import {
  isMultiSelectFilter,
  isNestedDropdownFilter,
  isSingleSelectFilter
} from '@cdc/core/types/VizFilter'

function handleFilter(filter: TypedVizFilter) {
  if (isMultiSelectFilter(filter)) {
    // TypeScript knows: filter.active is string[]
    console.log(`Selected ${filter.active.length} items`)
    if (filter.selectLimit) {
      console.log(`Max selections: ${filter.selectLimit}`)
    }
  } else if (isNestedDropdownFilter(filter)) {
    // TypeScript knows: filter.subGrouping is required
    console.log(`Grouping by ${filter.subGrouping.groupBy}`)
  } else if (isSingleSelectFilter(filter)) {
    // TypeScript knows: filter.active is string
    console.log(`Selected: ${filter.active}`)
  }
}
```

### Helper Functions

```typescript
import {
  getFilterActive,
  hasActiveSelection,
  getSelectedValues
} from '@cdc/core/types/VizFilter'

// Get active value(s) - handles both string and string[]
const active = getFilterActive(filter) // string | string[] | undefined

// Check if filter has an active selection
if (hasActiveSelection(filter)) {
  // Filter has a non-empty selection
}

// Always get values as array (normalizes single-select to array)
const values = getSelectedValues(filter) // string[]
```

## Dashboard Filters (TypedSharedFilter)

### Available Types

```typescript
import {
  TypedSharedFilter,
  SingleSelectDashboardFilter,
  MultiSelectDashboardFilter,
  NestedDropdownDashboardFilter
} from '@cdc/core/types/SharedFilter'
```

### Filter Types

Dashboard filters extend visualization filters with additional properties for cross-widget filtering:

#### SingleSelectDashboardFilter

**Filter Styles**: `'dropdown'` | `'tab'` | `'tab-simple'` | `'pill'` | `'tab bar'` | `'combobox'`

**Active Type**: `string | undefined`

```typescript
const dashboardFilter: SingleSelectDashboardFilter = {
  filterStyle: 'dropdown',
  key: 'year-filter',
  label: 'Select Year',
  active: '2023',
  values: ['2020', '2021', '2022', '2023'],
  columnName: 'year',
  order: 'desc',
  type: 'datafilter',
  usedBy: ['chart1', 'chart2'], // Which widgets use this filter
  defaultValue: '2023',
  resetLabel: 'All Years'
}
```

#### MultiSelectDashboardFilter

**Filter Styles**: `'multi-select'`

**Active Type**: `string[] | undefined`

```typescript
const multiSelectDashboard: MultiSelectDashboardFilter = {
  filterStyle: 'multi-select',
  key: 'states-filter',
  label: 'Select States',
  active: ['CA', 'TX'],
  values: ['CA', 'TX', 'NY', 'FL'],
  columnName: 'state',
  order: 'asc',
  selectLimit: 5,
  type: 'datafilter',
  usedBy: [1, 2], // Used by widgets in rows 1 and 2
  defaultValue: 'CA'
}
```

#### NestedDropdownDashboardFilter

```typescript
const nestedDashboard: NestedDropdownDashboardFilter = {
  filterStyle: 'nested-dropdown',
  key: 'location-filter',
  label: 'Select Location',
  active: 'New York City',
  values: ['NY', 'NYC', 'Albany'],
  columnName: 'location',
  order: 'asc',
  subGrouping: {
    groupBy: 'state',
    subGroupBy: 'city'
  },
  type: 'datafilter',
  usedBy: ['map1']
}
```

### Dashboard-Specific Type Guards

```typescript
import {
  isMultiSelectDashboardFilter,
  isNestedDropdownDashboardFilter,
  isSingleSelectDashboardFilter,
  isURLFilter,
  isDataFilter,
  isQueryStringFilter,
  isFileNameFilter
} from '@cdc/core/types/SharedFilter'

function processDashboardFilter(filter: TypedSharedFilter) {
  // Filter style discrimination
  if (isMultiSelectDashboardFilter(filter)) {
    const selections = filter.active || []
    console.log(`${selections.length} items selected`)
  }

  // Filter type discrimination
  if (isURLFilter(filter)) {
    // This is a URL filter
    if (isFileNameFilter(filter)) {
      console.log(`Modifies filename: ${filter.fileName}`)
      console.log(`Dataset: ${filter.datasetKey}`)
    } else if (isQueryStringFilter(filter)) {
      console.log(`Modifies query param: ${filter.queryParameter}`)
    }
  } else if (isDataFilter(filter)) {
    // This is a data filter
    console.log('Filters data directly')
  }
}
```

### Dashboard Helper Functions

```typescript
import {
  getDashboardFilterActive,
  hasDashboardActiveSelection,
  getDashboardSelectedValues
} from '@cdc/core/types/SharedFilter'

// Get active selection
const active = getDashboardFilterActive(filter) // string | string[] | undefined

// Check if filter has selection
if (hasDashboardActiveSelection(filter)) {
  const values = getDashboardSelectedValues(filter) // string[]
  console.log(`Filter has ${values.length} selections`)
}
```

## Migration Guide

### Gradual Migration

Both filter systems maintain backwards compatibility. The original types (`VizFilter` and `SharedFilter`) still exist and work as before.

To migrate code:

1. **Import typed versions**:
```typescript
// Old
import { VizFilter } from '@cdc/core/types/VizFilter'

// New
import { TypedVizFilter } from '@cdc/core/types/VizFilter'
```

2. **Use type guards for safety**:
```typescript
// Old - unsafe
function updateFilter(filter: VizFilter) {
  if (filter.filterStyle === 'multi-select') {
    // filter.active might be string or string[] - runtime error possible
    filter.active.forEach(val => console.log(val))
  }
}

// New - type-safe
function updateFilter(filter: TypedVizFilter) {
  if (isMultiSelectFilter(filter)) {
    // TypeScript guarantees filter.active is string[]
    filter.active.forEach(val => console.log(val))
  }
}
```

3. **Use helper functions**:
```typescript
// Old - manual type checking
function getActive(filter: VizFilter) {
  if (Array.isArray(filter.active)) {
    return filter.active.join(', ')
  }
  return filter.active || ''
}

// New - built-in helper
function getActive(filter: TypedVizFilter) {
  const values = getSelectedValues(filter)
  return values.join(', ')
}
```

## Benefits

1. **Compile-time Safety**: TypeScript catches type errors before runtime
2. **Better IntelliSense**: IDEs provide accurate autocomplete based on filter style
3. **Self-documenting**: Types clearly show which properties are required/optional for each filter style
4. **Prevents Bugs**: Impossible to access `selectLimit` on single-select filters or treat single-select `active` as an array
5. **Easier Refactoring**: Changes to filter types are caught at compile time across the entire codebase

## Examples

### Complete Typed Filter Handler

```typescript
import {
  TypedVizFilter,
  isMultiSelectFilter,
  isNestedDropdownFilter,
  getSelectedValues,
  hasActiveSelection
} from '@cdc/core/types/VizFilter'

function applyFilters(filters: TypedVizFilter[], data: any[]) {
  return data.filter(row => {
    return filters.every(filter => {
      // Skip filters with no selection
      if (!hasActiveSelection(filter)) {
        return true
      }

      const selectedValues = getSelectedValues(filter)
      const rowValue = row[filter.columnName]

      // Handle nested dropdown special logic
      if (isNestedDropdownFilter(filter)) {
        return handleNestedFilter(filter, rowValue)
      }

      // Standard filter logic
      return selectedValues.includes(String(rowValue))
    })
  })
}
```

### Type-safe Dashboard Filter Updates

```typescript
import {
  TypedSharedFilter,
  isMultiSelectDashboardFilter,
  getDashboardSelectedValues
} from '@cdc/core/types/SharedFilter'

function updateDashboardFilter(
  filter: TypedSharedFilter,
  newValue: string | string[]
): TypedSharedFilter {
  if (isMultiSelectDashboardFilter(filter)) {
    // TypeScript knows newValue should be string[]
    const valueArray = Array.isArray(newValue) ? newValue : [newValue]

    // Respect selectLimit
    const limited = filter.selectLimit
      ? valueArray.slice(0, filter.selectLimit)
      : valueArray

    return { ...filter, active: limited, queuedActive: limited }
  }

  // Single-select filters
  const valueString = Array.isArray(newValue) ? newValue[0] : newValue
  return { ...filter, active: valueString, queuedActive: valueString }
}
```
