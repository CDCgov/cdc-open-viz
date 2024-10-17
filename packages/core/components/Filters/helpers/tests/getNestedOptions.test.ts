import { describe, it, expect } from 'vitest'
import { getNestedOptions } from '../getNestedOptions'
import { SubGrouping } from '../../../../types/VizFilter'
import { NestedOptions } from '../../../NestedDropdown/nestedDropdownHelpers'

describe('getNestedOptions', () => {
  it('should return nested options when orderedValues is not provided', () => {
    const params = {
      values: ['value1', 'value2'],
      subGrouping: null
    }
    const expectedOutput: NestedOptions = [
      [['value1'], []],
      [['value2'], []]
    ]
    expect(getNestedOptions(params)).toEqual(expectedOutput)
  })

  it('should return nested options when orderedValues is provided', () => {
    const params = {
      orderedValues: ['value2', 'value1'],
      values: ['value1', 'value2'],
      subGrouping: null
    }
    const expectedOutput: NestedOptions = [
      [['value2'], []],
      [['value1'], []]
    ]
    expect(getNestedOptions(params)).toEqual(expectedOutput)
  })

  it('should return nested options when subGrouping is not provided', () => {
    const params = {
      values: ['value1', 'value2'],
      subGrouping: null
    }
    const expectedOutput: NestedOptions = [
      [['value1'], []],
      [['value2'], []]
    ]
    expect(getNestedOptions(params)).toEqual(expectedOutput)
  })

  it('should return nested options when subGrouping is provided with nested values', () => {
    const subGrouping: SubGrouping = {
      valuesLookup: {
        value1: {
          orderedValues: ['subValue2', 'subValue1'],
          values: ['subValue1', 'subValue2']
        },
        value2: {
          orderedValues: null,
          values: ['subValue3']
        }
      }
    }
    const params = {
      orderedValues: ['value1', 'value2'],
      values: ['value1', 'value2'],
      subGrouping
    }
    const expectedOutput: NestedOptions = [
      [['value1'], [['subValue2'], ['subValue1']]],
      [['value2'], [['subValue3']]]
    ]
    expect(getNestedOptions(params)).toEqual(expectedOutput)
  })

  it('should return nested options when subGrouping is provided without orderedValues', () => {
    const subGrouping: SubGrouping = {
      valuesLookup: {
        value1: {
          orderedValues: null,
          values: ['subValue1', 'subValue2']
        },
        value2: {
          orderedValues: null,
          values: ['subValue3']
        }
      }
    }
    const params = {
      orderedValues: ['value1', 'value2'],
      values: ['value1', 'value2'],
      subGrouping
    }
    const expectedOutput: NestedOptions = [
      [['value1'], [['subValue1'], ['subValue2']]],
      [['value2'], [['subValue3']]]
    ]
    expect(getNestedOptions(params)).toEqual(expectedOutput)
  })
})
