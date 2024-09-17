import { gatherQueryParams } from '../gatherQueryParams'
import { expect, describe, it, vi } from 'vitest'
describe('invertValue', () => {
  it('should return the inverted value if xScale has an invert function', () => {
    const _params = [
      { key: 'YearQuarter', value: '2020-Q3' },
      { key: 'abc', value: 'def' }
    ]

    const result = gatherQueryParams('', _params)
    expect(result).toBe('?YearQuarter="2020-Q3"&abc="def"')
  })
})
