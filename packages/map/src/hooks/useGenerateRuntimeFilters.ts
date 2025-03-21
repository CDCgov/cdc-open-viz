import { getUniqueValues } from '../helpers'
import { handleSorting } from '@cdc/core/components/Filters'
import { MapConfig } from '../types/MapConfig'

const useGenerateRuntimeFilters = (state: MapConfig) => {
  return (configObj: MapConfig, hash: number, runtimeFilters) => {
    if (typeof configObj === 'undefined' || undefined === configObj.filters || configObj.filters.length === 0) return []

    let filters = []

    if (hash) filters.fromHash = hash

    configObj?.filters.forEach(
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

        const { filters } = configObj

        const sort = (a, b) => {
          const asc = filters[idx].order !== 'desc'
          return String(asc ? a : b).localeCompare(String(asc ? b : a), 'en', { numeric: true })
        }

        if (type !== 'url') {
          values = getUniqueValues(state.data, columnName)

          if (filters[idx].order === 'cust') {
            if (filters[idx]?.values.length > 0) {
              values = filters[idx].values
            }
          } else {
            values = values.sort(sort)
          }
        }

        if (undefined === newFilter) {
          newFilter = {}
        }

        newFilter.order = configObj.filters[idx].order ? configObj.filters[idx].order : 'asc'
        newFilter.type = type
        newFilter.label = label ?? ''
        newFilter.columnName = columnName
        newFilter.orderedValues = orderedValues
        newFilter.queryParameter = queryParameter
        newFilter.labels = labels
        newFilter.values = values
        newFilter.setByQueryParameter = setByQueryParameter
        handleSorting(newFilter)
        newFilter.active = active || configObj.filters[idx].defaultValue || values[0] // Default to first found value
        newFilter.defaultValue = configObj.filters[idx].defaultValue || ''
        newFilter.filterStyle = configObj.filters[idx].filterStyle ? configObj.filters[idx].filterStyle : 'dropdown'
        newFilter.showDropdown = showDropdown
        newFilter.subGrouping = configObj.filters[idx].subGrouping

        filters.push(newFilter)
      }
    )

    return filters
  }
}

export default useGenerateRuntimeFilters
