import { describe, it, expect, vi } from 'vitest'
import { gatherQueryParams } from '../gatherQueryParams'

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
