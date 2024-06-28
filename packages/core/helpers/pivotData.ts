import _ from 'lodash'

/** columnName is the column you'd like to select data values from to show as column headers.
 *  Pivot is the value column who's data you'd like to show under those respective columns*/
export const pivotData = (data: Record<string, any>[], columnName: string, pivot: string) => {
  const grouped = _.groupBy(data, val => val[columnName])
  const newData = []
  for (const key in grouped) {
    const group = grouped[key]
    group.forEach((val, index) => {
      const row = newData[index] || {}
      row[key] = val[pivot]
      const toAdd = _.omit(val, [columnName, pivot])
      newData[index] = { ...toAdd, ...row }
    })
  }
  return newData
}
