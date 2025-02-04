import _ from 'lodash'
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'
import { VizFilter } from '../types/VizFilter'
import { FILTER_STYLE } from '@cdc/dashboard/src/types/FilterStyles'

type Filter = {
  columnName: string
  values: (string | number)[]
  filterStyle?: string
  active?: string | number | (string | number)[]
  queuedActive?: string | (string | number)[]
  parents?: (string | number)[]
}

/** MapData is an object */
type MapData = Record<string, any[]>

const cleanLookup = (lookup: Record<string, { values: string[]; orderedValues?: string[] }>) => {
  // for nested-dropdown
  // removes values from subGrouping.valuesLookup
  // keeps orderedValues
  return Object.fromEntries(
    Object.entries(lookup || {}).map(([key, { orderedValues }]) => {
      if (!orderedValues) return [key, { values: [] }]
      return [key, { orderedValues, values: [] }]
    })
  )
}

// Gets filter values from dataset
const generateValuesForFilter = (filter: VizFilter, data: any[] | MapData) => {
  const columnName = filter.columnName
  const orderColumn = filter.orderColumn
  const values: string[] = []
  const valuesWithOrders: [string, string][] = []
  const subGroupingColumn = filter.subGrouping?.columnName
  const subValues = cleanLookup(filter.subGrouping?.valuesLookup)
  if (Array.isArray(data)) {
    data.forEach(row => {
      const value: string = row[columnName]
      if (value !== undefined && !values.includes(value)) {
        if (orderColumn) valuesWithOrders.push([value, row[orderColumn]])
        values.push(value)
      }
      if (subGroupingColumn) {
        const dataValue = row[subGroupingColumn]
        if (value === undefined) return
        if (!subValues[value]) {
          subValues[value] = { values: [] }
        }
        if (!subValues[value].values.includes(dataValue)) {
          subValues[value].values.push(dataValue)
        }
      }
    })
  } else {
    // data is a dataset this loops through ALL datasets to find matching values
    // not sure if this is desired behavior
    // Maps Only
    if (!data) return values
    Object.values(data).forEach((rows: any[]) => {
      rows.forEach(row => {
        const value = row[columnName]
        if (value !== undefined && !values.includes(value)) {
          if (orderColumn) valuesWithOrders.push([value, row[orderColumn]])
          values.push(value)
        }
      })
    })
  }
  if (orderColumn) {
    filter.values = valuesWithOrders
      .sort((a, b) => {
        if (typeof a[1] === 'number' && typeof b[1] === 'number') {
          return a[1] - b[1]
        }
        return String(a[1]).localeCompare(String(b[1]))
      })
      .map(([value]) => value)
  } else if (filter.order && filter.order !== 'cust') {
    const sort = (a, b) => {
      const asc = filter.order !== 'desc'
      return String(asc ? a : b).localeCompare(String(asc ? b : a), 'en', { numeric: true })
    }
    filter.values = values.sort(sort)
  } else {
    filter.values = values
  }
  if (subGroupingColumn) {
    filter.subGrouping.valuesLookup = subValues
  }
}

const handleVizParents = (filter: VizFilter, data: any[] | MapData, filtersLookup: Record<string, Filter>) => {
  let filteredData = Array.isArray(data) ? data : Object.values(data).flat(1)
  filter.parents.forEach(parentKey => {
    const parent = filtersLookup[parentKey] || ({} as Filter)
    const [parentQueuedActive, parentQueuedSubActive] = Array.isArray(parent.queuedActive)
      ? parent.queuedActive
      : [parent.queuedActive]
    const parentActive = parentQueuedActive || parent?.active
    if (parent?.filterStyle === FILTER_STYLE.nestedDropdown) {
      const { subGrouping } = parent as VizFilter
      const parentSubActive = parentQueuedSubActive || subGrouping?.active
      if (parentSubActive) {
        filteredData = filteredData.filter(d => {
          const matchingParentGroup = parentActive == d[parent.columnName]
          const matchingSubGroup = parentSubActive == d[subGrouping.columnName]
          return matchingParentGroup && matchingSubGroup
        })
      }
    } else if (parentActive) {
      filteredData = filteredData.filter(d => {
        if (Array.isArray(parentActive)) {
          return (parentActive as (number | string)[]).includes(d[parent.columnName])
        }
        return parentActive == d[parent.columnName]
      })
    }
  })
  return filteredData
}

const includes = (arr: any[], val: any): boolean => {
  return arr.map(val => String(val)).includes(String(val))
}

export const addValuesToFilters = (filters: VizFilter[], data: any[] | MapData): Array<VizFilter> => {
  const filtersLookup = _.keyBy(filters, 'id')
  return filters?.map(filter => {
    const filterCopy = _.cloneDeep(filter)
    let filteredData = data
    const isMapData = !Array.isArray(data)
    if (filter.parents?.length && !isMapData) {
      filteredData = handleVizParents(filter as VizFilter, data, filtersLookup)
    }
    generateValuesForFilter(filterCopy, filteredData)
    if (filterCopy.values?.length > 0) {
      const queryStringFilterValue = getQueryStringFilterValue(filterCopy)
      if (queryStringFilterValue) {
        filterCopy.active = queryStringFilterValue
      } else if (filterCopy.filterStyle === FILTER_STYLE.multiSelect) {
        const defaultValues = filterCopy.values
        const active = Array.isArray(filterCopy.active) ? filterCopy.active : [filterCopy.active]
        filterCopy.active = active.filter(val => includes(defaultValues, val))
      } else {
        const defaultValue = filterCopy.values[0]
        const active = Array.isArray(filterCopy.active) ? filterCopy.active[0] : filterCopy.active
        filterCopy.active = includes(filterCopy.values, active) ? active : defaultValue
      }
    }
    if (filterCopy.subGrouping) {
      const groupName = filterCopy.active as string
      const subGroupingFilter = {
        ...filterCopy.subGrouping,
        values: filterCopy.subGrouping.valuesLookup[groupName].values
      }
      const queryStringFilterValue = getQueryStringFilterValue(subGroupingFilter)
      const groupActive = groupName || filterCopy.values[0]
      const defaultValue = filterCopy.subGrouping.valuesLookup[groupActive as string].values[0]
      // if the value doesn't exist in the subGrouping then return the default
      const activeValue = queryStringFilterValue || filterCopy.subGrouping.active
      filterCopy.subGrouping.active = activeValue || defaultValue
      filtersLookup[filterCopy.id].subGrouping.active = filterCopy.subGrouping.active
    }
    filtersLookup[filterCopy.id].active = filterCopy.active
    return filterCopy
  })
}
