type LegendPattern = {
  dataKey?: string
  dataValue?: string | number
}

type SeriesLabels = Record<string, string> | undefined

type GetPatternUrlArgs = {
  patterns?: Record<string, LegendPattern>
  datum: Record<string, any>
  seriesKey: string
  seriesValue: string | number
  seriesLabels?: SeriesLabels
  seriesKeys?: string[]
  allowNonSeriesFieldMatch?: boolean
}

const normalizeString = (value: unknown): string => String(value ?? '').trim()

const hasPatternValue = (value: unknown): boolean => normalizeString(value) !== ''

const isNumericLike = (value: string): boolean => value !== '' && !Number.isNaN(Number(value))

const valuesMatch = (left: unknown, right: unknown): boolean => {
  const normalizedLeft = normalizeString(left)
  const normalizedRight = normalizeString(right)

  if (normalizedLeft === '' || normalizedRight === '') {
    return false
  }

  if (isNumericLike(normalizedLeft) && isNumericLike(normalizedRight)) {
    return Number(normalizedLeft) === Number(normalizedRight)
  }

  return normalizedLeft === normalizedRight
}

const isSeriesDataKey = (dataKey: string, seriesLabels?: SeriesLabels, seriesKeys?: string[]): boolean => {
  if (Array.isArray(seriesKeys) && seriesKeys.length > 0) {
    return seriesKeys.includes(dataKey)
  }
  if (!seriesLabels) return false
  return Object.prototype.hasOwnProperty.call(seriesLabels, dataKey)
}

export const getPatternUrl = ({
  patterns,
  datum,
  seriesKey,
  seriesValue,
  seriesLabels,
  seriesKeys,
  allowNonSeriesFieldMatch = true
}: GetPatternUrlArgs): string | null => {
  if (!patterns) {
    return null
  }

  let broadMatchUrl: string | null = null

  for (const patternKey in patterns) {
    if (!Object.prototype.hasOwnProperty.call(patterns, patternKey)) continue
    const pattern = patterns[patternKey]
    const dataKey = normalizeString(pattern.dataKey)

    if (!hasPatternValue(pattern.dataValue)) {
      continue
    }

    if (dataKey === '') {
      if (!broadMatchUrl && valuesMatch(seriesValue, pattern.dataValue)) {
        broadMatchUrl = `url(#chart-pattern-${patternKey})`
      }
      continue
    }

    if (dataKey === seriesKey && valuesMatch(seriesValue, pattern.dataValue)) {
      return `url(#chart-pattern-${patternKey})`
    }

    if (
      allowNonSeriesFieldMatch &&
      !isSeriesDataKey(dataKey, seriesLabels, seriesKeys) &&
      valuesMatch(datum?.[dataKey], pattern.dataValue)
    ) {
      return `url(#chart-pattern-${patternKey})`
    }
  }

  return broadMatchUrl
}
