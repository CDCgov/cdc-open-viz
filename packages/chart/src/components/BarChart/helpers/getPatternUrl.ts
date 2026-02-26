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
  if (!patterns || Object.keys(patterns).length === 0) {
    return null
  }

  const entries = Object.entries(patterns)
  const specificPatterns = entries.filter(([, pattern]) => normalizeString(pattern?.dataKey) !== '')
  const broadPatterns = entries.filter(([, pattern]) => normalizeString(pattern?.dataKey) === '')

  for (const [patternKey, pattern] of specificPatterns) {
    const dataKey = normalizeString(pattern.dataKey)
    if (!hasPatternValue(pattern.dataValue)) {
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

  for (const [patternKey, pattern] of broadPatterns) {
    if (!hasPatternValue(pattern.dataValue)) {
      continue
    }

    if (valuesMatch(seriesValue, pattern.dataValue)) {
      return `url(#chart-pattern-${patternKey})`
    }
  }

  return null
}
