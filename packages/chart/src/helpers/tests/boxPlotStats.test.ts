import { describe, expect, it } from 'vitest'

import { calculateBoxPlotStats, getSortedBoxPlotValues } from '../boxPlotStats'

describe('boxPlotStats', () => {
  it('normalizes numeric strings once for all box plot stats consumers', () => {
    expect(getSortedBoxPlotValues(['1,000', '20', '', null, undefined, 'n/a', '3'])).toEqual([3, 20, 1000])
  })

  it('calculates quartiles, fences, whiskers, and outliers from sorted numeric values', () => {
    const stats = calculateBoxPlotStats(['10', '20', '30', '40', '1,000'])

    expect(stats).toMatchObject({
      values: [10, 20, 30, 40, 1000],
      q1: 20,
      q3: 40,
      median: 30,
      iqr: 20,
      lowerBound: -10,
      upperBound: 70,
      nonOutliers: [10, 20, 30, 40],
      outliers: [1000],
      whiskerMin: 10,
      whiskerMax: 40
    })
  })

  it('returns null when no finite values can be calculated', () => {
    expect(calculateBoxPlotStats(['', null, undefined, 'n/a'])).toBeNull()
  })
})
