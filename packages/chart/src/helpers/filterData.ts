export const filterData = (filters, data) => {
  let filteredData: any[] = []

  data.forEach(row => {
    let add = true
    filters
      .filter(filter => filter.type !== 'url')
      .forEach(filter => {
        if (row[filter.columnName] != filter.active) {
          add = false
        }
      })

    if (add) filteredData.push(row)
  })

  return filteredData
}
