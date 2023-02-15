const filterData = (filters, data) => {
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
