import { describe, expect, it } from 'vitest'
import getStackedSeriesMax from '../getStackedSeriesMax'

describe('getStackedSeriesMax', () => {
  it('uses the tallest row sum instead of summing independent series maxima', () => {
    const data = [
      { apples: 400, oranges: 10 },
      { apples: 50, oranges: 300 }
    ]

    expect(getStackedSeriesMax(data, ['apples', 'oranges'])).toBe(410)
  })

  it('accepts series objects and dynamic category original data keys', () => {
    const data = [
      { apples: 125, oranges: 75, dynamicFruit: 999 },
      { apples: 10, oranges: 50, dynamicFruit: 999 }
    ]
    const series = [
      { dataKey: 'apples' },
      { dataKey: 'dynamicFruit', originalDataKey: 'oranges', dynamicCategory: true }
    ]

    expect(getStackedSeriesMax(data, series)).toBe(200)
  })
})
