import * as d3 from 'd3-array'
import { sortByNumber, toSortableNumber } from '@cdc/core/helpers/sorting'

export type BoxPlotStats = {
  deviation: number | undefined
  iqr: number
  lowerBound: number
  mean: number | undefined
  median: number | undefined
  nonOutliers: number[]
  outliers: number[]
  q1: number
  q3: number
  upperBound: number
  values: number[]
  whiskerMax: number
  whiskerMin: number
}

export const getSortedBoxPlotValues = (values: unknown[] = []): number[] => {
  return sortByNumber(
    values.filter(value => value !== null && value !== undefined && value !== '').map(toSortableNumber)
  ).filter(Number.isFinite)
}

export const calculateBoxPlotStats = (values: unknown[] = []): BoxPlotStats | null => {
  const sortedValues = getSortedBoxPlotValues(values)
  if (!sortedValues.length) return null

  const q1 = d3.quantile(sortedValues, 0.25) ?? 0
  const q3 = d3.quantile(sortedValues, 0.75) ?? 0
  const iqr = q3 - q1
  const lowerBound = q1 - 1.5 * iqr
  const upperBound = q3 + 1.5 * iqr
  const nonOutliers = sortedValues.filter(value => value >= lowerBound && value <= upperBound)
  const outliers = sortedValues.filter(value => value < lowerBound || value > upperBound)

  return {
    deviation: d3.deviation(sortedValues),
    iqr,
    lowerBound,
    mean: d3.mean(sortedValues),
    median: d3.median(sortedValues),
    nonOutliers,
    outliers,
    q1,
    q3,
    upperBound,
    values: sortedValues,
    whiskerMax: nonOutliers[nonOutliers.length - 1] ?? q3,
    whiskerMin: nonOutliers[0] ?? q1
  }
}
