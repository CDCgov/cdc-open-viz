import { getUniqueValues } from '../helpers'
import { handleSorting } from '@cdc/core/components/Filters'
import { MapConfig } from '../types/MapConfig'
import { useCallback } from 'react'

const useGenerateRuntimeFilters = (state: MapConfig) => {
  return useCallback((obj, hash, runtimeFilters) => {
    if (typeof obj === 'undefined' || undefined === obj.filters || obj.filters.length === 0) return []

    let filters = []

    if (hash) filters.fromHash = hash

    obj?.filters.forEach(
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
          setByQueryParameter
        },
        idx
      ) => {
        let newFilter = runtimeFilters[idx]

        const sort = (a, b) => {
          const asc = obj.filters[idx].order !== 'desc'
          return String(asc ? a : b).localeCompare(String(asc ? b : a), 'en', { numeric: true })
        }

        if (type !== 'url') {
          values = getUniqueValues(state.data, columnName)

          if (obj.filters[idx].order === 'cust') {
            if (obj.filters[idx]?.values.length > 0) {
              values = obj.filters[idx].values
            }
          } else {
            values = values.sort(sort)
          }
        }

        if (undefined === newFilter) {
          newFilter = {}
        }

        newFilter.order = obj.filters[idx].order ? obj.filters[idx].order : 'asc'
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
        newFilter.filterStyle = obj.filters[idx].filterStyle ? obj.filters[idx].filterStyle : 'dropdown'
        newFilter.showDropdown = showDropdown
        newFilter.subGrouping = obj.filters[idx].subGrouping

        filters.push(newFilter)
      }
    )

    return filters
  })
}

export default useGenerateRuntimeFilters
