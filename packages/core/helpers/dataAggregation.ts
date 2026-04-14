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

export const aggregateCount = (values: number[]): number => {
  return values.length
}

export const aggregateSum = (values: number[]): number => {
  return values.reduce((sum, value) => sum + value, 0)
}

export const aggregateMean = (values: number[]): number => {
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

export const aggregateMedian = (values: number[]): number => {
  const sortedValues = [...values].sort((a, b) => a - b)
  const midpoint = Math.floor(sortedValues.length / 2)

  return sortedValues.length % 2 !== 0
    ? sortedValues[midpoint]
    : (sortedValues[midpoint - 1] + sortedValues[midpoint]) / 2
}

export const aggregateMode = (values: number[]): string[] => {
  const frequencies: Record<string, number> = {}
  let maxFrequency = -Infinity

  for (const value of values) {
    const key = String(value)
    frequencies[key] = (frequencies[key] || 0) + 1
    if (frequencies[key] > maxFrequency) {
      maxFrequency = frequencies[key]
    }
  }

  return Object.keys(frequencies).filter(key => frequencies[key] === maxFrequency)
}

export const aggregateMin = (values: number[]): number => {
  return Math.min(...values)
}

export const aggregateMax = (values: number[]): number => {
  return Math.max(...values)
}

export const aggregateRange = (values: number[]): [number, number] => {
  return [Math.min(...values), Math.max(...values)]
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
