import { describe, it, expect } from 'vitest'
import { handleSorting } from '../handleSorting'
import _ from 'lodash'

describe('handleSorting', () => {
  it('should use orderedValues when order is "cust" and filterStyle is not "nested-dropdown"', () => {
    const singleFilter = {
      values: ['value3', 'value1', 'value2'],
      orderedValues: ['value1', 'value2', 'value3'],
      order: 'cust',
      filterStyle: 'someOtherStyle'
    }

    const result = handleSorting(singleFilter)

    expect(result.values).toEqual(['value1', 'value2', 'value3'])
  })

  it('should sort orderedValues in asc order if order is asc"', () => {
    const singleFilter = {
      values: ['value3', 'value1', 'value2'],
      orderedValues: ['value2', 'value1', 'value3'],
      order: 'asc',
      filterStyle: 'nested-dropdown'
    }

    const result = handleSorting(singleFilter)

    expect(result.orderedValues).toEqual(['value1', 'value2', 'value3'])
  })

  it('should sort orderedValues in desc order if order is desc"', () => {
    const singleFilter = {
      values: ['value3', 'value1', 'value2'],
      orderedValues: ['value1', 'value2', 'value1'],
      order: 'desc',
      filterStyle: 'nested-dropdown'
    }

    const result = handleSorting(singleFilter)

    expect(result.orderedValues).toEqual(['value3', 'value2', 'value1'])
  })

  it('should sort values in ascending order by default', () => {
    const singleFilter = {
      values: ['value3', 'value1', 'value2'],
      order: 'asc',
      filterStyle: 'someOtherStyle'
    }

    const result = handleSorting(singleFilter)

    expect(result.values).toEqual(['value1', 'value2', 'value3'])
  })

  it('should sort values in descending order when order is "desc"', () => {
    const singleFilter = {
      values: ['value3', 'value1', 'value2'],
      order: 'desc',
      filterStyle: 'someOtherStyle'
    }

    const result = handleSorting(singleFilter)

    expect(result.values).toEqual(['value3', 'value2', 'value1'])
  })

  it('should not use orderedValues when filterStyle is "nested-dropdown"', () => {
    const singleFilter = {
      values: ['value3', 'value1', 'value2'],
      orderedValues: ['value1', 'value2', 'value3'],
      order: 'cust',
      filterStyle: 'nested-dropdown'
    }

    const result = handleSorting(singleFilter)

    expect(result.values).toEqual(['value1', 'value2', 'value3'])
  })

  it('should handle empty orderedValues when order is "cust"', () => {
    const singleFilter = {
      values: ['value3', 'value1', 'value2'],
      orderedValues: [],
      order: 'cust',
      filterStyle: 'someOtherStyle'
    }

    const result = handleSorting(singleFilter)

    expect(result.values).toEqual(['value3', 'value1', 'value2'])
  })
})
