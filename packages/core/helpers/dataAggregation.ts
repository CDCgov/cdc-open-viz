import {
  DATA_FUNCTION_COUNT,
  DATA_FUNCTION_MAX,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_MODE,
  DATA_FUNCTION_RANGE,
  DATA_FUNCTION_SUM
} from './constants'

export const NUMERIC_TREND_ELIGIBLE_FUNCTIONS = new Set([
  DATA_FUNCTION_SUM,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_MAX
])

const sanitizeNumericValues = (values: number[]): number[] => {
  return values.filter(value => typeof value === 'number' && Number.isFinite(value))
}

export const aggregateCount = (values: number[]): number | null => {
  const numericValues = sanitizeNumericValues(values)
  return numericValues.length
}

export const aggregateSum = (values: number[]): number | null => {
  const numericValues = sanitizeNumericValues(values)
  if (!numericValues.length) return null
  return numericValues.reduce((sum, value) => sum + value, 0)
}

export const aggregateMean = (values: number[]): number | null => {
  const numericValues = sanitizeNumericValues(values)
  if (!numericValues.length) return null
  return numericValues.reduce((sum, value) => sum + value, 0) / numericValues.length
}

export const aggregateMedian = (values: number[]): number | null => {
  const numericValues = sanitizeNumericValues(values)
  if (!numericValues.length) return null

  const sortedValues = [...numericValues].sort((a, b) => a - b)
  const midpoint = Math.floor(sortedValues.length / 2)

  return sortedValues.length % 2 !== 0
    ? sortedValues[midpoint]
    : (sortedValues[midpoint - 1] + sortedValues[midpoint]) / 2
}

export const aggregateMode = (values: number[]): string[] | null => {
  const numericValues = sanitizeNumericValues(values)
  if (!numericValues.length) return null

  const frequencies: Record<string, number> = {}
  let maxFrequency = -Infinity

  for (const value of numericValues) {
    const key = String(value)
    frequencies[key] = (frequencies[key] || 0) + 1
    if (frequencies[key] > maxFrequency) {
      maxFrequency = frequencies[key]
    }
  }

  return Object.keys(frequencies).filter(key => frequencies[key] === maxFrequency)
}

export const aggregateMin = (values: number[]): number | null => {
  const numericValues = sanitizeNumericValues(values)
  if (!numericValues.length) return null
  return Math.min(...numericValues)
}

export const aggregateMax = (values: number[]): number | null => {
  const numericValues = sanitizeNumericValues(values)
  if (!numericValues.length) return null
  return Math.max(...numericValues)
}

export const aggregateRange = (values: number[]): [number, number] | null => {
  const numericValues = sanitizeNumericValues(values)
  if (!numericValues.length) return null
  return [Math.min(...numericValues), Math.max(...numericValues)]
}

export type AggregateResult = number | string[] | [number, number] | null

export const aggregateByDataFunction = (values: number[], dataFunction: string): AggregateResult => {
  switch (dataFunction) {
    case DATA_FUNCTION_COUNT:
      return aggregateCount(values)
    case DATA_FUNCTION_SUM:
      return aggregateSum(values)
    case DATA_FUNCTION_MEAN:
      return aggregateMean(values)
    case DATA_FUNCTION_MEDIAN:
      return aggregateMedian(values)
    case DATA_FUNCTION_MODE:
      return aggregateMode(values)
    case DATA_FUNCTION_MIN:
      return aggregateMin(values)
    case DATA_FUNCTION_MAX:
      return aggregateMax(values)
    case DATA_FUNCTION_RANGE:
      return aggregateRange(values)
    default:
      return null
  }
}
