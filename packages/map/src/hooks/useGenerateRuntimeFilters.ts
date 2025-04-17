import { getUniqueValues } from '../helpers'
import { handleSorting } from '@cdc/core/components/Filters'

export const generateRuntimeFilters = (state, hash, runtimeFilters) => {
  if (typeof state === 'undefined' || undefined === state.filters || state.filters.length === 0) return []

  const filters = state?.filters.map(
    (
      {
        columnName,
        label,
        labels,
        queryParameter,
        orderedValues,
        active,
        values,
        type,
        showDropdown,
        setByQueryParameter,
        order
      },
      idx
    ) => {
      const newFilter = runtimeFilters[idx] || {}

      const sort = (a, b) => {
        const asc = order !== 'desc'
        return String(asc ? a : b).localeCompare(String(asc ? b : a), 'en', { numeric: true })
      }

      if (type !== 'url') {
        values = getUniqueValues(state.data, columnName)

        if (state.filters[idx].order === 'cust') {
          if (state.filters[idx]?.values.length > 0) {
            values = state.filters[idx].values
          }
        } else {
          values = values.sort(sort)
        }
      }

      newFilter.order = state.filters[idx].order ? state.filters[idx].order : 'asc'
      newFilter.type = type
      newFilter.label = label ?? ''
      newFilter.columnName = columnName
      newFilter.orderedValues = orderedValues
      newFilter.queryParameter = queryParameter
      newFilter.labels = labels
      newFilter.values = values
      newFilter.setByQueryParameter = setByQueryParameter
      handleSorting(newFilter)
      newFilter.active = active ?? values[0] // Default to first found value
      newFilter.filterStyle = state.filters[idx].filterStyle ? state.filters[idx].filterStyle : 'dropdown'
      newFilter.showDropdown = showDropdown
      newFilter.subGrouping = state.filters[idx].subGrouping

      return newFilter
    }
  )
  if (hash) filters.fromHash = hash
  return filters
}
