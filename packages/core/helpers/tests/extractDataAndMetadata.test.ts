import { extractDataAndMetadata } from '../extractDataAndMetadata'
import { expect, describe, it } from 'vitest'

describe('extractDataAndMetadata', () => {
  it('should return plain array input as data with empty metadata', () => {
    const input = [{ state: 'CA' }, { state: 'TX' }]
    const result = extractDataAndMetadata(input)

    expect(result.data).toEqual(input)
    expect(result.dataMetadata).toEqual({})
  })

  it('should extract data array and metadata siblings from wrapper object', () => {
    const input = {
      lastUpdated: 'January 15, 2026',
      source: 'CDC NREVSS',
      data: [{ state: 'CA' }, { state: 'TX' }]
    }
    const result = extractDataAndMetadata(input)

    expect(result.data).toEqual([{ state: 'CA' }, { state: 'TX' }])
    expect(result.dataMetadata).toEqual({
      lastUpdated: 'January 15, 2026',
      source: 'CDC NREVSS'
    })
  })

  it('should handle wrapper with multiple metadata keys', () => {
    const input = {
      lastUpdated: '2026-01-15',
      source: 'CDC',
      reportingPeriod: 'Q1 2026',
      data: [{ value: '100' }]
    }
    const result = extractDataAndMetadata(input)

    expect(result.dataMetadata).toEqual({
      lastUpdated: '2026-01-15',
      source: 'CDC',
      reportingPeriod: 'Q1 2026'
    })
    expect(result.data).toEqual([{ value: '100' }])
  })

  it('should handle wrapper with empty data array', () => {
    const input = {
      lastUpdated: '2026-01-15',
      source: 'CDC',
      data: []
    }
    const result = extractDataAndMetadata(input)

    expect(result.data).toEqual([])
    expect(result.dataMetadata).toEqual({
      lastUpdated: '2026-01-15',
      source: 'CDC'
    })
  })

  it('should return non-array non-object input as data with empty metadata', () => {
    expect(extractDataAndMetadata('hello')).toEqual({ data: 'hello', dataMetadata: {} })
    expect(extractDataAndMetadata(42)).toEqual({ data: 42, dataMetadata: {} })
    expect(extractDataAndMetadata(null)).toEqual({ data: null, dataMetadata: {} })
    expect(extractDataAndMetadata(undefined)).toEqual({ data: undefined, dataMetadata: {} })
  })

  it('should return object without data property as data with empty metadata', () => {
    const input = { foo: 'bar', baz: 123 }
    const result = extractDataAndMetadata(input)

    expect(result.data).toEqual(input)
    expect(result.dataMetadata).toEqual({})
  })

  it('should return object where data is not an array as data with empty metadata', () => {
    const input = { data: 'string value', source: 'CDC' }
    const result = extractDataAndMetadata(input)

    expect(result.data).toEqual(input)
    expect(result.dataMetadata).toEqual({})
  })

  it('should pass through existing plain-array format unchanged (backward compatibility)', () => {
    const legacyData = [
      { state: 'California', population: '39538223' },
      { state: 'Texas', population: '29145505' }
    ]
    const result = extractDataAndMetadata(legacyData)

    expect(result.data).toBe(legacyData)
    expect(result.dataMetadata).toEqual({})
  })
})
