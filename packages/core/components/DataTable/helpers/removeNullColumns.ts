type RuntimeData = Object[] & Record<string, Object>

// removes null and excluded columns
const removeNullColumns = (runtimeData: Object[] | RuntimeData): RuntimeData => {
  if (!Array.isArray(runtimeData)) {
    // currently we don't support Record types
    return runtimeData
  } else {
    const runtimeDataMemo = {}
    runtimeData.forEach(row => {
      Object.keys(row).forEach(key => {
        if (runtimeDataMemo[key] === undefined) runtimeDataMemo[key] = null
        if (row[key] !== null) runtimeDataMemo[key] = true
      })
    })
    return runtimeData.map(d => {
      const sourceRow = d as Record<string, any>
      const row = {}
      Object.keys(sourceRow).forEach(key => {
        if (key.match(/row[_-]?type/i)) row['row_type'] = d[key]
        if (runtimeDataMemo[key] === true) row[key] = d[key]
      })
      if (
        Object.prototype.hasOwnProperty.call(sourceRow, 'uid') &&
        !Object.prototype.propertyIsEnumerable.call(sourceRow, 'uid')
      ) {
        Object.defineProperty(row, 'uid', { value: sourceRow.uid, writable: true })
      }
      return row
    }) as RuntimeData
  }
}

export default removeNullColumns
