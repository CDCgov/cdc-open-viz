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
        const value = row[filter.columnName]
        if (filter.active === undefined) return
        if (Array.isArray(filter.active)) {
          if (!filter.active.includes(value)) {
            add = false
          }
        } else if (value != filter.active) {
          add = false
        }
      })

    if (add) filteredData.push(row)
  })

  return filteredData
}
