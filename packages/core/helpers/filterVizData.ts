export const filterVizData = (filters, data) => {
  if (!data) {
    console.warn('COVE: No data to filter')
    return []
  }

  if (!filters) return data
  const filteredData: any[] = []

  data?.forEach(row => {
    let add = true
    filters
      .filter(filter => filter.type !== 'url')
      .forEach(filter => {
        if (filter.active === undefined) return
        const value = row[filter.columnName]

        if (Array.isArray(filter.active)) {
          if (!filter.active.includes(value)) {
            add = false
          }
        } else if (value != filter.active) {
          add = false
        }
        if (filter.filterStyle === 'nested-dropdown' && filter.subGroupingFilter && add === true) {
          const subGroup = filter.subGroupingFilter
          const subGroupValue = row[filter.subGroupingFilter.columnName]
          if (subGroup.active === undefined) return
          if (!subGroup.active.includes(subGroupValue)) {
            add = false
          } else if (subGroupValue != subGroup.active) {
            add = false
          }
        }

        if (add) filteredData.push(row)
      })
  })

  return filteredData
}
