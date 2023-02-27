export default function getDataColumns(dataArray) {
  try {
    let columns = {}
    dataArray.map(row => Object.keys(row).forEach(columnName => columns[columnName] = true))
    return Object.keys(columns)
  } catch (err) {
    console.warn('Unable to map over the provided dataset; is it an array?', dataArray)
  }
}
