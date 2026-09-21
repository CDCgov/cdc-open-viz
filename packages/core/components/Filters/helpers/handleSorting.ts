import _ from 'lodash'

export const handleSorting = singleFilter => {
  const singleFilterValues = _.cloneDeep(singleFilter.values)
  if (singleFilter.order === 'cust') {
    singleFilter.values = singleFilter.orderedValues?.length ? singleFilter.orderedValues : singleFilterValues
    return singleFilter
  }

  if (singleFilter.order === 'column' || singleFilter.order === 'data') {
    // Column sorting is done in generateValuesForFilter. Data order preserves extraction order.
    return singleFilter
  }

  const sort = (a, b) => {
    const asc = singleFilter.order !== 'desc'
    return String(asc ? a : b).localeCompare(String(asc ? b : a), 'en', { numeric: true })
  }

  singleFilter.values = singleFilterValues?.sort(sort)
  singleFilter.orderedValues = singleFilterValues?.sort(sort)

  return singleFilter
}
