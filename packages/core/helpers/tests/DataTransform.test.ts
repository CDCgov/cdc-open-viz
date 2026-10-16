import { describe, it, expect } from 'vitest'
import DataTransform from '../DataTransform'

describe('DataTransform', () => {
  let transformer: DataTransform

  beforeEach(() => {
    transformer = new DataTransform()
  })

  describe('autoStandardize', () => {
    it('returns undefined for empty data', () => {
      expect(transformer.autoStandardize([])).toBeUndefined()
      expect(transformer.autoStandardize(null)).toBeUndefined()
      expect(transformer.autoStandardize(undefined)).toBeUndefined()
    })

    it('returns undefined for invalid data format', () => {
      expect(transformer.autoStandardize(['string', 'array'])).toBeUndefined()
      expect(transformer.autoStandardize([1, 2, 3])).toBeUndefined()
    })

    it('returns data unchanged when already in object format', () => {
      const data = [
        { name: 'Alice', value: 10 },
        { name: 'Bob', value: 20 }
      ]
      const result = transformer.autoStandardize(data)
      expect(result).toEqual(data)
    })

    it('converts array of arrays to array of objects', () => {
      const data = [
        ['name', 'value'],
        ['Alice', 10],
        ['Bob', 20]
      ]
      const result = transformer.autoStandardize(data)
      expect(result).toEqual([
        { name: 'Alice', value: 10 },
        { name: 'Bob', value: 20 }
      ])
    })

    it('handles array of arrays with multiple columns', () => {
      const data = [
        ['state', 'year', 'population'],
        ['CA', 2020, 39538223],
        ['TX', 2020, 29145505]
      ]
      const result = transformer.autoStandardize(data)
      expect(result).toEqual([
        { state: 'CA', year: 2020, population: 39538223 },
        { state: 'TX', year: 2020, population: 29145505 }
      ])
    })
  })

  describe('cleanDataPoint', () => {
    it('removes commas from numbers', () => {
      expect(transformer.cleanDataPoint('1,234')).toBe('1234')
      expect(transformer.cleanDataPoint('1,234,567')).toBe('1234567')
    })

    it('removes dollar signs', () => {
      expect(transformer.cleanDataPoint('$100')).toBe('100')
      expect(transformer.cleanDataPoint('$1,234')).toBe('1234')
    })

    it('removes percent signs', () => {
      expect(transformer.cleanDataPoint('50%')).toBe('50')
      expect(transformer.cleanDataPoint('99.9%')).toBe('99.9')
    })

    it('handles combined formatting', () => {
      expect(transformer.cleanDataPoint('$1,234,567')).toBe('1234567')
    })

    it('handles null and empty values', () => {
      expect(transformer.cleanDataPoint(null)).toBe('')
      expect(transformer.cleanDataPoint('')).toBe('')
    })

    it('handles non-string values', () => {
      expect(transformer.cleanDataPoint(123)).toBe(123)
      expect(transformer.cleanDataPoint(0)).toBe(0)
    })

    it('returns plain numbers unchanged', () => {
      expect(transformer.cleanDataPoint('123')).toBe('123')
      expect(transformer.cleanDataPoint('45.67')).toBe('45.67')
    })
  })

  describe('developerStandardize', () => {
    it('returns empty array when data is falsy', () => {
      expect(transformer.developerStandardize(null, {})).toEqual([])
      expect(transformer.developerStandardize(undefined, {})).toEqual([])
    })

    it('returns undefined when description is missing', () => {
      const data = [{ a: 1 }]
      expect(transformer.developerStandardize(data, null)).toBeUndefined()
      expect(transformer.developerStandardize(data, undefined)).toBeUndefined()
    })

    it('returns undefined when description is incomplete', () => {
      const data = [{ a: 1 }]
      expect(transformer.developerStandardize(data, {})).toBeUndefined()
      expect(transformer.developerStandardize(data, { horizontal: true })).toBeUndefined()
      expect(transformer.developerStandardize(data, { series: true })).toBeUndefined()
    })

    it('handles horizontal data without series', () => {
      const data = [
        { category: 'A', val1: 10, val2: 20 },
        { category: 'B', val1: 30, val2: 40 }
      ]
      const description = { horizontal: true, series: false }
      const result = transformer.developerStandardize(data, description)
      expect(result).toBeDefined()
      expect(Array.isArray(result)).toBe(true)
    })
  })
})
