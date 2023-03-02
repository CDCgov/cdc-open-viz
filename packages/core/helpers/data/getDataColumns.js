export default function getDataColumns(dataArray) {
  if (dataArray) {
    let columns = {}
    dataArray.map(row => Object.keys(row).forEach(columnName => columns[columnName] = true))
    return Object.keys(columns)
  }
}
