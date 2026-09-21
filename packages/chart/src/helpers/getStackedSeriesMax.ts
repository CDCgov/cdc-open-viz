import isNumber from '@cdc/core/helpers/isNumber'

type SeriesKeyOrItem =
  | string
  | {
      dataKey?: string
      originalDataKey?: string
      dynamicCategory?: boolean
    }

const cleanValue = value => {
  if (value === null || value === '') return ''
  return typeof value === 'string' ? value.replace(/[,$]/g, '') : value
}

const getSeriesDataKey = (seriesKeyOrItem: SeriesKeyOrItem) => {
  if (typeof seriesKeyOrItem === 'string') return seriesKeyOrItem
  return seriesKeyOrItem.dynamicCategory && seriesKeyOrItem.originalDataKey
    ? seriesKeyOrItem.originalDataKey
    : seriesKeyOrItem.dataKey
}

const getStackedSeriesMax = (data: Object[] = [], seriesKeysOrSeriesItems: SeriesKeyOrItem[] = []) => {
  let maxValue = Number.NEGATIVE_INFINITY
  let hasValue = false

  for (const row of data) {
    let rowSum = 0
    let hasRowValue = false

    for (const seriesKeyOrItem of seriesKeysOrSeriesItems) {
      const seriesKey = getSeriesDataKey(seriesKeyOrItem)
      if (!seriesKey) continue

      const value = cleanValue(row[seriesKey])
      if (isNumber(value)) {
        rowSum += Number(value)
        hasRowValue = true
      }
    }

    if (hasRowValue) {
      maxValue = Math.max(maxValue, rowSum)
      hasValue = true
    }
  }

  return hasValue ? maxValue : 0
}

export default getStackedSeriesMax
