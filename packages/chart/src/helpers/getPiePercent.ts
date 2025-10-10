import _ from 'lodash'

export const getPiePercent = (data: Record<string, any>[], seriesKey: string): Record<string, any>[] => {
  // getonly the numeric values for each seriesKey
  const numericValues = data.map(row => _.toNumber(row[seriesKey])).filter(v => !Number.isNaN(v))

  const total = numericValues.reduce((sum, v) => sum + v, 0)

  return data.map(row => {
    const raw = _.toNumber(row[seriesKey])
    if (Number.isNaN(raw)) {
      // skip non-numeric / undefined
      return row
    }

    const pct = total === 0 ? 0 : (raw / total) * 100
    return {
      ...row,
      [seriesKey]: pct
    }
  })
}
