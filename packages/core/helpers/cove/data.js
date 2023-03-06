export function getDataColumns(dataArray) {
  if (dataArray) {
    let columns = {}
    dataArray.map(row => Object.keys(row).forEach(columnName => columns[columnName] = true))
    return Object.keys(columns)
  }
}

export function filterData(filters, data) {
  let filteredData = []

  if (data) {
    data.forEach(row => {
      let add = true

      filters.forEach(filter => {
        if (row[filter.columnName] !== filter.active) {
          add = false
        }
      })

      if (add) filteredData.push(row)
    })
    return filteredData
  }
}

export default filterData



