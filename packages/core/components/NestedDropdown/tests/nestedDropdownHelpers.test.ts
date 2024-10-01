import { describe, it, expect, vi } from 'vitest'
import { handleSearchTerm, OptionsMemo } from '../nestedDropdownHelpers'

describe('handleSearchTerm()', () => {
  const optsMemo: OptionsMemo = [
    [
      'Fruits',
      [
        {
          value: 'Fruits',
          text: 'Fruits',
          subgroupValue: 'Apple',
          subgroupText: 'Apple'
        },
        {
          value: 'Fruits',
          text: 'Fruits',
          subgroupValue: 'Cantaloupe',
          subgroupText: 'Cantaloupe'
        },
        {
          value: 'Fruits',
          text: 'Fruits',
          subgroupValue: 'Orange',
          subgroupText: 'Orange'
        },
        {
          value: 'Fruits',
          text: 'Fruits',
          subgroupValue: 'Tomato',
          subgroupText: 'Tomato'
        }
      ]
    ],
    [
      'Vegetables',
      [
        {
          value: 'Vegetables',
          text: 'Vegetables',
          subgroupValue: 'Spinach',
          subgroupText: 'Spinach'
        },
        {
          value: 'Vegetables',
          text: 'Vegetables',
          subgroupValue: 'Broccoli',
          subgroupText: 'Broccoli'
        },
        {
          value: 'Vegetables',
          text: 'Vegetables',
          subgroupValue: 'Carrot',
          subgroupText: 'Carrot'
        },
        {
          value: 'Vegetables',
          text: 'Vegetables',
          subgroupValue: 'Tomato',
          subgroupText: 'Tomato'
        }
      ]
    ],
    [
      'Fungi',
      [
        {
          value: 'Fungi',
          text: 'Fungi',
          subgroupValue: 'Portobello',
          subgroupText: 'Portobello'
        },
        {
          value: 'Fungi',
          text: 'Fungi',
          subgroupValue: 'Morel',
          subgroupText: 'Morel'
        },
        {
          value: 'Fungi',
          text: 'Fungi',
          subgroupValue: 'Chanterelle',
          subgroupText: 'Chanterelle'
        }
      ]
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
    const expectedResult2: OptionsMemo = [
      [
        'Fruits',
        [
          {
            value: 'Fruits',
            text: 'Fruits',
            subgroupValue: 'Apple',
            subgroupText: 'Apple'
          },
          {
            value: 'Fruits',
            text: 'Fruits',
            subgroupValue: 'Cantaloupe',
            subgroupText: 'Cantaloupe'
          },
          {
            value: 'Fruits',
            text: 'Fruits',
            subgroupValue: 'Orange',
            subgroupText: 'Orange'
          },
          {
            value: 'Fruits',
            text: 'Fruits',
            subgroupValue: 'Tomato',
            subgroupText: 'Tomato'
          }
        ]
      ]
    ]
    expect(result2).toEqual(expectedResult2)
    const result3 = handleSearchTerm('VEG', optsMemo)
    const expectedResult3: OptionsMemo = [
      [
        'Vegetables',
        [
          {
            value: 'Vegetables',
            text: 'Vegetables',
            subgroupValue: 'Spinach',
            subgroupText: 'Spinach'
          },
          {
            value: 'Vegetables',
            text: 'Vegetables',
            subgroupValue: 'Broccoli',
            subgroupText: 'Broccoli'
          },
          {
            value: 'Vegetables',
            text: 'Vegetables',
            subgroupValue: 'Carrot',
            subgroupText: 'Carrot'
          },
          {
            value: 'Vegetables',
            text: 'Vegetables',
            subgroupValue: 'Tomato',
            subgroupText: 'Tomato'
          }
        ]
      ]
    ]
    expect(result3).toEqual(expectedResult3)
    const result4 = handleSearchTerm('f', optsMemo)
    const expectedResult4: OptionsMemo = [
      [
        'Fruits',
        [
          {
            value: 'Fruits',
            text: 'Fruits',
            subgroupValue: 'Apple',
            subgroupText: 'Apple'
          },
          {
            value: 'Fruits',
            text: 'Fruits',
            subgroupValue: 'Cantaloupe',
            subgroupText: 'Cantaloupe'
          },
          {
            value: 'Fruits',
            text: 'Fruits',
            subgroupValue: 'Orange',
            subgroupText: 'Orange'
          },
          {
            value: 'Fruits',
            text: 'Fruits',
            subgroupValue: 'Tomato',
            subgroupText: 'Tomato'
          }
        ]
      ],
      [
        'Fungi',
        [
          {
            value: 'Fungi',
            text: 'Fungi',
            subgroupValue: 'Portobello',
            subgroupText: 'Portobello'
          },
          {
            value: 'Fungi',
            text: 'Fungi',
            subgroupValue: 'Morel',
            subgroupText: 'Morel'
          },
          {
            value: 'Fungi',
            text: 'Fungi',
            subgroupValue: 'Chanterelle',
            subgroupText: 'Chanterelle'
          }
        ]
      ]
    ]
    expect(result4).toEqual(expectedResult4)
  })
  it('Filter out the subvalues', () => {
    const result = handleSearchTerm('ap', optsMemo)
    const expectedResult: OptionsMemo = [
      [
        'Fruits',
        [
          {
            value: 'Fruits',
            text: 'Fruits',
            subgroupValue: 'Apple',
            subgroupText: 'Apple'
          }
        ]
      ]
    ]
    expect(result).toEqual(expectedResult)
    const result2 = handleSearchTerm('ca', optsMemo)
    const expectedResult2: OptionsMemo = [
      [
        'Fruits',
        [
          {
            value: 'Fruits',
            text: 'Fruits',
            subgroupValue: 'Cantaloupe',
            subgroupText: 'Cantaloupe'
          }
        ]
      ],
      [
        'Vegetables',
        [
          {
            value: 'Vegetables',
            text: 'Vegetables',
            subgroupValue: 'Carrot',
            subgroupText: 'Carrot'
          }
        ]
      ]
    ]
    expect(result2).toEqual(expectedResult2)
    const result3 = handleSearchTerm('tomato', optsMemo)
    const expectedResult3: OptionsMemo = [
      [
        'Fruits',
        [
          {
            value: 'Fruits',
            text: 'Fruits',
            subgroupValue: 'Tomato',
            subgroupText: 'Tomato'
          }
        ]
      ],
      [
        'Vegetables',
        [
          {
            value: 'Vegetables',
            text: 'Vegetables',
            subgroupValue: 'Tomato',
            subgroupText: 'Tomato'
          }
        ]
      ]
    ]
    expect(result3).toEqual(expectedResult3)
  })
})
