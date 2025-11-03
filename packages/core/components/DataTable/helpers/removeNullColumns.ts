import { RuntimeData } from '../../../types/RuntimeData'

// removes null and excluded columns
const removeNullColumns = (runtimeData: RuntimeData): RuntimeData => {
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
      const row = {}
      Object.keys(d).forEach(key => {
        if (key.match(/row[_-]?type/i)) row['row_type'] = d[key]
        if (runtimeDataMemo[key] === true) row[key] = d[key]
      })
      return row
    })
  }
}

export default removeNullColumns
