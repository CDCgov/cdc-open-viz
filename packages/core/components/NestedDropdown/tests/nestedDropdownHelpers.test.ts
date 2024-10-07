import { describe, it, expect, vi } from 'vitest'
import { handleSearchTerm, OptionsMemo } from '../nestedDropdownHelpers'

describe('handleSearchTerm()', () => {
  const optsMemo: OptionsMemo = [
    [['Fruits'], [['Apple'], ['Cantaloupe'], ['Orange'], ['Tomato']]],
    [['Vegetables'], [['Spinach'], ['Broccoli'], ['Carrot'], ['Tomato']]],
    [
      ['Fungi', 'Mushrooms'],
      [['Portobello', 'Mushroom 1'], ['Morel, Mushroom 2'], ['Chanterelle', 'Mushroom 3']]
    ]
  ]
  it('Return the original OptsMemo when there is no search term', () => {
    const result = handleSearchTerm('', optsMemo)
    expect(result).toEqual(optsMemo)
    const result2 = handleSearchTerm(undefined, optsMemo)
    expect(result2).toEqual(optsMemo)
  })
  it('Return the empty array if there is no match to search term', () => {
    const result = handleSearchTerm('Pizza', optsMemo)
    expect(result).toEqual([])
  })
  it('Filter out the top level groupings', () => {
    const result = handleSearchTerm('', optsMemo)
    expect(result).toEqual(optsMemo)
    const result2 = handleSearchTerm('fruit', optsMemo)
    const expectedResult2: OptionsMemo = [[['Fruits'], [['Apple'], ['Cantaloupe'], ['Orange'], ['Tomato']]]]
    expect(result2).toEqual(expectedResult2)
    const result3 = handleSearchTerm('VEG', optsMemo)
    const expectedResult3: OptionsMemo = [[['Vegetables'], [['Spinach'], ['Broccoli'], ['Carrot'], ['Tomato']]]]
    expect(result3).toEqual(expectedResult3)
    const result4 = handleSearchTerm('mush', optsMemo)
    const expectedResult4: OptionsMemo = [
      [
        ['Fungi', 'Mushrooms'],
        [['Portobello', 'Mushroom 1'], ['Morel, Mushroom 2'], ['Chanterelle', 'Mushroom 3']]
      ]
    ]
    expect(result4).toEqual(expectedResult4)
  })
  it('Filter out the subvalues', () => {
    const result = handleSearchTerm('ap', optsMemo)
    const expectedResult: OptionsMemo = [[['Fruits'], [['Apple']]]]
    expect(result).toEqual(expectedResult)
    const result2 = handleSearchTerm('ca', optsMemo)
    const expectedResult2: OptionsMemo = [
      [['Fruits'], [['Cantaloupe']]],
      [['Vegetables'], [['Carrot']]]
    ]
    expect(result2).toEqual(expectedResult2)
    const result3 = handleSearchTerm('tomato', optsMemo)
    const expectedResult3: OptionsMemo = [
      [['Fruits'], [['Tomato']]],
      [['Vegetables'], [['Tomato']]]
    ]
    expect(result3).toEqual(expectedResult3)
  })
})
