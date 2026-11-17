import { getUniqueValues } from '@cdc/core/helpers/getUniqueValues'
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'
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
        defaultValue,
        values,
        type,
        showDropdown,
        setByQueryParameter,
        order
      },
      idx
    ) => {
      const newFilter = { ...runtimeFilters[idx] }

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
      newFilter.defaultValue = defaultValue
      handleSorting(newFilter)
      const configuredDefault = defaultValue === '' ? undefined : defaultValue
      newFilter.active = getQueryStringFilterValue(newFilter) ?? active ?? configuredDefault ?? newFilter.values[0]
      newFilter.filterStyle = state.filters[idx].filterStyle ? state.filters[idx].filterStyle : 'dropdown'
      newFilter.showDropdown = showDropdown
      const subGrouping = state.filters[idx].subGrouping
      newFilter.subGrouping = subGrouping ? { ...subGrouping } : undefined
      if (newFilter.filterStyle === 'nested-dropdown' && subGrouping) {
        // Interactive filter updates can clear lookup values; rebuild options from the current data.
        const childValues = new Map<string, Set<string>>()
        for (const row of state.data ?? []) {
          const parent = row[columnName]
          const child = row[subGrouping.columnName]
          if (parent == null || child == null) continue
          const key = String(parent)
          if (!childValues.has(key)) childValues.set(key, new Set())
          childValues.get(key).add(String(child))
        }
        const valuesLookup = Object.fromEntries(
          newFilter.values.map(parent => [
            parent,
            {
              ...subGrouping.valuesLookup?.[parent],
              values: handleSorting({
                values: Array.from(childValues.get(String(parent)) ?? []),
                order: subGrouping.order
              }).values
            }
          ])
        )
        newFilter.subGrouping.valuesLookup = valuesLookup
        const groupOptions = valuesLookup[newFilter.active]
        const availableValues = groupOptions?.values ?? []
        const availableSet = new Set(availableValues)
        const orderedValues = groupOptions?.orderedValues?.filter(value => availableSet.has(value))
        const subValues = orderedValues ?? availableValues
        const activeChild = getQueryStringFilterValue({ ...subGrouping, values: subValues }) ?? subGrouping.active
        newFilter.subGrouping.active = new Set(subValues).has(activeChild) ? activeChild : subValues[0]
      }

      return newFilter
    }
  )
  if (hash) filters.fromHash = hash
  return filters
}
