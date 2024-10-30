import { gatherQueryParams } from '../gatherQueryParams'
import { expect, describe, it } from 'vitest'

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

describe('gatherQueryParams', () => {
  it('should return a string of query params', () => {
    const baseEndpoint = 'https://example.com'
    const params = [
      { key: 'key1', value: 'value1' },
      { key: 'key2', value: 'value2' }
    ]
    expect(gatherQueryParams(baseEndpoint, params)).toEqual('?key1="value1"&key2="value2"')
  })

  it('should not wrap strings in extra Quotes', () => {
    const baseEndpoint = 'https://example.com'
    const params = [
      { key: 'key1', value: 'value1' },
      { key: 'key2', value: '"value2"' }
    ]
    expect(gatherQueryParams(baseEndpoint, params)).toEqual('?key1="value1"&key2="value2"')
  })
})
