import { describe, it, expect, vi } from 'vitest'
import { filterSearchTerm, NestedOptions } from '../nestedDropdownHelpers'

describe('filterSearchTerm()', () => {
  const optsMemo: NestedOptions = [
    [['Fruits'], [['Apple'], ['Cantaloupe'], ['Orange'], ['Tomato']]],
    [['Vegetables'], [['Spinach'], ['Broccoli'], ['Carrot'], ['Tomato']]],
    [
      ['Fungi', 'Mushrooms'],
      [['Portobello', 'Mushroom 1'], ['Morel, Mushroom 2'], ['Chanterelle', 'Mushroom 3']]
    ]
  ]
  it('Return the original OptsMemo when there is no search term', () => {
    const result = filterSearchTerm('', optsMemo)
    expect(result).toEqual(optsMemo)
    const result2 = filterSearchTerm(undefined, optsMemo)
    expect(result2).toEqual(optsMemo)
  })
  it('Return the empty array if there is no match to search term', () => {
    const result = filterSearchTerm('Pizza', optsMemo)
    expect(result).toEqual([])
  })
  it('Filter out the top level groupings', () => {
    const result = filterSearchTerm('', optsMemo)
    expect(result).toEqual(optsMemo)
    const result2 = filterSearchTerm('fruit', optsMemo)
    const expectedResult2: NestedOptions = [[['Fruits'], [['Apple'], ['Cantaloupe'], ['Orange'], ['Tomato']]]]
    expect(result2).toEqual(expectedResult2)
    const result3 = filterSearchTerm('VEG', optsMemo)
    const expectedResult3: NestedOptions = [[['Vegetables'], [['Spinach'], ['Broccoli'], ['Carrot'], ['Tomato']]]]
    expect(result3).toEqual(expectedResult3)
    const result4 = filterSearchTerm('mush', optsMemo)
    const expectedResult4: NestedOptions = [
      [
        ['Fungi', 'Mushrooms'],
        [['Portobello', 'Mushroom 1'], ['Morel, Mushroom 2'], ['Chanterelle', 'Mushroom 3']]
      ]
    ]
    expect(result4).toEqual(expectedResult4)
  })
  it('Filter out the subvalues', () => {
    const result = filterSearchTerm('ap', optsMemo)
    const expectedResult: NestedOptions = [[['Fruits'], [['Apple']]]]
    expect(result).toEqual(expectedResult)
    const result2 = filterSearchTerm('ca', optsMemo)
    const expectedResult2: NestedOptions = [
      [['Fruits'], [['Cantaloupe']]],
      [['Vegetables'], [['Carrot']]]
    ]
    expect(result2).toEqual(expectedResult2)
    const result3 = filterSearchTerm('tomato', optsMemo)
    const expectedResult3: NestedOptions = [
      [['Fruits'], [['Tomato']]],
      [['Vegetables'], [['Tomato']]]
    ]
    expect(result3).toEqual(expectedResult3)
  })
})
