export function getDataColumns(dataArray) {
  if (dataArray) {
    let columns = {}
    dataArray.map(row => Object.keys(row).forEach(columnName => columns[columnName] = true))
    return Object.keys(columns)
  }
}

export function getDataValues(data, dataKey, unique = false) {
  let values = []
  data.forEach(e => {
    values.push(e[dataKey])
  })
  return unique ? [...new Set(values)] : values
}

export function getDataValueOptions(data) {
  if (!data) return []

  const set = new Set()

  for (let i = 0; i < data.length; i++) {
    for (const [key] of Object.entries(data[i])) {
      set.add(key)
    }
  }
  return Array.from(set)
}

export function getFilteredDataColumns(config, dataArray) {
  let columns = []

  if (config && dataArray) {
    columns = getDataColumns(dataArray)
    columns.forEach(key => {
      if (
        (config.series && config.series.filter(series => series.dataKey === key).length > 0) ||
        (config.confidenceKeys && Object.keys(config.confidenceKeys).includes(key))
      ) {
        delete columns[key]
      }
    })
  }

  return columns
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



