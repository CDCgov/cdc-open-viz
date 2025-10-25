import { describe, it, expect } from 'vitest'
import { getFilterResetValue, resetFilterToValue, clearChildFilterDropdowns } from '../filterResetHelpers'
import { SharedFilter } from '../../types/SharedFilter'
import { APIFilterDropdowns } from '../../components/DashboardFilters'
import { FILTER_STYLE } from '../../types/FilterStyles'
import _ from 'lodash'

describe('getFilterResetValue', () => {
  const mockAPIFilterDropdowns: APIFilterDropdowns = {
    'api.example.com/filter1': [
      { value: 'option1', text: 'Option 1' },
      { value: 'option2', text: 'Option 2' }
    ],
    'api.example.com/filter2': []
  }

  describe('when forceEmpty is true', () => {
    it('should return empty string for API filters without resetLabel', () => {
      const filter: SharedFilter = {
        key: 'testFilter',
        apiFilter: {
          apiEndpoint: 'api.example.com/filter1',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }

      const result = getFilterResetValue(filter, mockAPIFilterDropdowns, true)
      expect(result).toBe('')
    })

    it('should return empty string for API filters with resetLabel', () => {
      const filter: SharedFilter = {
        key: 'testFilter',
        resetLabel: 'Select One',
        apiFilter: {
          apiEndpoint: 'api.example.com/filter1',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }

      const result = getFilterResetValue(filter, mockAPIFilterDropdowns, true)
      expect(result).toBe('')
    })

    it('should return empty string for data filters with resetLabel', () => {
      const filter: SharedFilter = {
        key: 'testFilter',
        resetLabel: 'Select One',
        values: ['value1', 'value2']
      }

      const result = getFilterResetValue(filter, mockAPIFilterDropdowns, true)
      expect(result).toBe('')
    })

    it('should return undefined for data filters without resetLabel', () => {
      const filter: SharedFilter = {
        key: 'testFilter',
        values: ['value1', 'value2']
      }

      const result = getFilterResetValue(filter, mockAPIFilterDropdowns, true)
      expect(result).toBeUndefined()
    })
  })

  describe('when forceEmpty is false', () => {
    it('should return defaultValue if it exists', () => {
      const filter: SharedFilter = {
        key: 'testFilter',
        defaultValue: 'defaultVal',
        resetLabel: 'Select One',
        apiFilter: {
          apiEndpoint: 'api.example.com/filter1',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }

      const result = getFilterResetValue(filter, mockAPIFilterDropdowns, false)
      expect(result).toBe('defaultVal')
    })

    it('should return empty string if resetLabel exists (no defaultValue)', () => {
      const filter: SharedFilter = {
        key: 'testFilter',
        resetLabel: 'Select One',
        apiFilter: {
          apiEndpoint: 'api.example.com/filter1',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }

      const result = getFilterResetValue(filter, mockAPIFilterDropdowns, false)
      expect(result).toBe('')
    })

    it('should return first API option if no defaultValue or resetLabel', () => {
      const filter: SharedFilter = {
        key: 'testFilter',
        apiFilter: {
          apiEndpoint: 'api.example.com/filter1',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }

      const result = getFilterResetValue(filter, mockAPIFilterDropdowns, false)
      expect(result).toBe('option1')
    })

    it('should return undefined if API filter has no options', () => {
      const filter: SharedFilter = {
        key: 'testFilter',
        apiFilter: {
          apiEndpoint: 'api.example.com/filter2',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }

      const result = getFilterResetValue(filter, mockAPIFilterDropdowns, false)
      expect(result).toBeUndefined()
    })

    it('should return undefined if no API filter, defaultValue, or resetLabel', () => {
      const filter: SharedFilter = {
        key: 'testFilter',
        values: ['value1', 'value2']
      }

      const result = getFilterResetValue(filter, mockAPIFilterDropdowns, false)
      expect(result).toBeUndefined()
    })
  })
})

describe('resetFilterToValue', () => {
  const mockAPIFilterDropdowns: APIFilterDropdowns = {
    'api.example.com/nested': [
      {
        value: 'group1',
        text: 'Group 1',
        subOptions: [
          { value: 'sub1', text: 'Sub 1' },
          { value: 'sub2', text: 'Sub 2' }
        ]
      },
      {
        value: 'group2',
        text: 'Group 2',
        subOptions: [{ value: 'sub3', text: 'Sub 3' }]
      }
    ]
  }

  describe('multi-select filters', () => {
    it('should reset to array with single value when resetValue is provided', () => {
      const filter: SharedFilter = {
        key: 'multiFilter',
        filterStyle: FILTER_STYLE.multiSelect,
        active: ['value1', 'value2'],
        queuedActive: ['value3']
      }

      resetFilterToValue(filter, 'value1', mockAPIFilterDropdowns)

      expect(filter.active).toEqual(['value1'])
      expect(filter.queuedActive).toBeUndefined()
    })

    it('should reset to empty array when resetValue is undefined', () => {
      const filter: SharedFilter = {
        key: 'multiFilter',
        filterStyle: FILTER_STYLE.multiSelect,
        active: ['value1', 'value2']
      }

      resetFilterToValue(filter, undefined, mockAPIFilterDropdowns)

      expect(filter.active).toEqual([])
      expect(filter.queuedActive).toBeUndefined()
    })

    it('should reset to empty array when resetValue is empty string', () => {
      const filter: SharedFilter = {
        key: 'multiFilter',
        filterStyle: FILTER_STYLE.multiSelect,
        active: ['value1', 'value2']
      }

      resetFilterToValue(filter, '', mockAPIFilterDropdowns)

      expect(filter.active).toEqual([])
      expect(filter.queuedActive).toBeUndefined()
    })
  })

  describe('nested dropdown filters', () => {
    it('should clear both group and subgroup when resetValue is empty string', () => {
      const filter: SharedFilter = {
        key: 'nestedFilter',
        filterStyle: FILTER_STYLE.nestedDropdown,
        active: 'group1',
        subGrouping: {
          active: 'sub1'
        },
        apiFilter: {
          apiEndpoint: 'api.example.com/nested',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }

      resetFilterToValue(filter, '', mockAPIFilterDropdowns)

      expect(filter.active).toBe('')
      expect(filter.subGrouping.active).toBe('')
      expect(filter.queuedActive).toBeUndefined()
    })

    it('should clear both group and subgroup when resetValue is undefined', () => {
      const filter: SharedFilter = {
        key: 'nestedFilter',
        filterStyle: FILTER_STYLE.nestedDropdown,
        active: 'group1',
        subGrouping: {
          active: 'sub1'
        },
        apiFilter: {
          apiEndpoint: 'api.example.com/nested',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }

      resetFilterToValue(filter, undefined, mockAPIFilterDropdowns)

      expect(filter.active).toBe('')
      expect(filter.subGrouping.active).toBe('')
      expect(filter.queuedActive).toBeUndefined()
    })

    it('should set to resetValue and first suboption when resetValue is provided', () => {
      const filter: SharedFilter = {
        key: 'nestedFilter',
        filterStyle: FILTER_STYLE.nestedDropdown,
        active: 'oldValue',
        subGrouping: {
          active: 'oldSub'
        },
        apiFilter: {
          apiEndpoint: 'api.example.com/nested',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }

      resetFilterToValue(filter, 'group2', mockAPIFilterDropdowns)

      expect(filter.active).toBe('group2')
      expect(filter.subGrouping.active).toBe('sub3')
      expect(filter.queuedActive).toBeUndefined()
    })

    it('should fallback to first option when no resetValue and options exist', () => {
      const filter: SharedFilter = {
        key: 'nestedFilter',
        filterStyle: FILTER_STYLE.nestedDropdown,
        active: 'oldValue',
        subGrouping: {
          active: 'oldSub'
        },
        apiFilter: {
          apiEndpoint: 'api.example.com/nested',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }

      resetFilterToValue(filter, undefined, mockAPIFilterDropdowns)

      expect(filter.active).toBe('')
      expect(filter.subGrouping.active).toBe('')
      expect(filter.queuedActive).toBeUndefined()
    })
  })

  describe('standard dropdown filters', () => {
    it('should reset to provided resetValue', () => {
      const filter: SharedFilter = {
        key: 'standardFilter',
        active: 'oldValue',
        queuedActive: 'queuedValue'
      }

      resetFilterToValue(filter, 'newValue', mockAPIFilterDropdowns)

      expect(filter.active).toBe('newValue')
      expect(filter.queuedActive).toBeUndefined()
    })

    it('should reset to empty string when resetValue is empty string', () => {
      const filter: SharedFilter = {
        key: 'standardFilter',
        active: 'oldValue'
      }

      resetFilterToValue(filter, '', mockAPIFilterDropdowns)

      expect(filter.active).toBe('')
      expect(filter.queuedActive).toBeUndefined()
    })

    it('should reset to undefined when resetValue is undefined', () => {
      const filter: SharedFilter = {
        key: 'standardFilter',
        active: 'oldValue'
      }

      resetFilterToValue(filter, undefined, mockAPIFilterDropdowns)

      expect(filter.active).toBeUndefined()
      expect(filter.queuedActive).toBeUndefined()
    })
  })
})

describe('clearChildFilterDropdowns', () => {
  it('should clear dropdowns for filters with parents', () => {
    const sharedFilters: SharedFilter[] = [
      {
        key: 'parentFilter',
        apiFilter: {
          apiEndpoint: 'api.example.com/parent',
          valueSelector: 'value',
          textSelector: 'text'
        }
      },
      {
        key: 'childFilter',
        parents: ['parentFilter'],
        apiFilter: {
          apiEndpoint: 'api.example.com/child',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }
    ]

    const apiFilterDropdowns: APIFilterDropdowns = {
      'api.example.com/parent': [
        { value: 'parent1', text: 'Parent 1' },
        { value: 'parent2', text: 'Parent 2' }
      ],
      'api.example.com/child': [
        { value: 'child1', text: 'Child 1' },
        { value: 'child2', text: 'Child 2' }
      ]
    }

    const result = clearChildFilterDropdowns(sharedFilters, apiFilterDropdowns)

    // Parent filter dropdown should remain unchanged
    expect(result['api.example.com/parent']).toEqual([
      { value: 'parent1', text: 'Parent 1' },
      { value: 'parent2', text: 'Parent 2' }
    ])

    // Child filter dropdown should be cleared to empty array
    expect(result['api.example.com/child']).toEqual([])
  })

  it('should not clear dropdowns for filters without parents', () => {
    const sharedFilters: SharedFilter[] = [
      {
        key: 'filter1',
        apiFilter: {
          apiEndpoint: 'api.example.com/filter1',
          valueSelector: 'value',
          textSelector: 'text'
        }
      },
      {
        key: 'filter2',
        apiFilter: {
          apiEndpoint: 'api.example.com/filter2',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }
    ]

    const apiFilterDropdowns: APIFilterDropdowns = {
      'api.example.com/filter1': [{ value: 'val1', text: 'Value 1' }],
      'api.example.com/filter2': [{ value: 'val2', text: 'Value 2' }]
    }

    const result = clearChildFilterDropdowns(sharedFilters, apiFilterDropdowns)

    // Both should remain unchanged since neither has parents
    expect(result['api.example.com/filter1']).toEqual([{ value: 'val1', text: 'Value 1' }])
    expect(result['api.example.com/filter2']).toEqual([{ value: 'val2', text: 'Value 2' }])
  })

  it('should handle filters with empty parents array', () => {
    const sharedFilters: SharedFilter[] = [
      {
        key: 'filter1',
        parents: [],
        apiFilter: {
          apiEndpoint: 'api.example.com/filter1',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }
    ]

    const apiFilterDropdowns: APIFilterDropdowns = {
      'api.example.com/filter1': [{ value: 'val1', text: 'Value 1' }]
    }

    const result = clearChildFilterDropdowns(sharedFilters, apiFilterDropdowns)

    // Should remain unchanged since parents array is empty
    expect(result['api.example.com/filter1']).toEqual([{ value: 'val1', text: 'Value 1' }])
  })

  it('should handle mixed filters with and without parents', () => {
    const sharedFilters: SharedFilter[] = [
      {
        key: 'parent',
        apiFilter: {
          apiEndpoint: 'api.example.com/parent',
          valueSelector: 'value',
          textSelector: 'text'
        }
      },
      {
        key: 'child1',
        parents: ['parent'],
        apiFilter: {
          apiEndpoint: 'api.example.com/child1',
          valueSelector: 'value',
          textSelector: 'text'
        }
      },
      {
        key: 'independent',
        apiFilter: {
          apiEndpoint: 'api.example.com/independent',
          valueSelector: 'value',
          textSelector: 'text'
        }
      },
      {
        key: 'child2',
        parents: ['child1'],
        apiFilter: {
          apiEndpoint: 'api.example.com/child2',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }
    ]

    const apiFilterDropdowns: APIFilterDropdowns = {
      'api.example.com/parent': [{ value: 'p1', text: 'Parent 1' }],
      'api.example.com/child1': [{ value: 'c1', text: 'Child 1' }],
      'api.example.com/independent': [{ value: 'i1', text: 'Independent 1' }],
      'api.example.com/child2': [{ value: 'c2', text: 'Child 2' }]
    }

    const result = clearChildFilterDropdowns(sharedFilters, apiFilterDropdowns)

    // Parent and independent should remain unchanged
    expect(result['api.example.com/parent']).toEqual([{ value: 'p1', text: 'Parent 1' }])
    expect(result['api.example.com/independent']).toEqual([{ value: 'i1', text: 'Independent 1' }])

    // Children should be cleared
    expect(result['api.example.com/child1']).toEqual([])
    expect(result['api.example.com/child2']).toEqual([])
  })

  it('should not mutate original apiFilterDropdowns', () => {
    const sharedFilters: SharedFilter[] = [
      {
        key: 'child',
        parents: ['parent'],
        apiFilter: {
          apiEndpoint: 'api.example.com/child',
          valueSelector: 'value',
          textSelector: 'text'
        }
      }
    ]

    const apiFilterDropdowns: APIFilterDropdowns = {
      'api.example.com/child': [{ value: 'child1', text: 'Child 1' }]
    }

    const originalDropdowns = _.cloneDeep(apiFilterDropdowns)
    const result = clearChildFilterDropdowns(sharedFilters, apiFilterDropdowns)

    // Original should remain unchanged
    expect(apiFilterDropdowns).toEqual(originalDropdowns)
    // Result should have cleared child
    expect(result['api.example.com/child']).toEqual([])
  })

  it('should handle filters without apiFilter', () => {
    const sharedFilters: SharedFilter[] = [
      {
        key: 'dataFilter',
        parents: ['parent'],
        values: ['value1', 'value2']
      }
    ]

    const apiFilterDropdowns: APIFilterDropdowns = {
      'api.example.com/other': [{ value: 'val1', text: 'Value 1' }]
    }

    const result = clearChildFilterDropdowns(sharedFilters, apiFilterDropdowns)

    // Should remain unchanged since dataFilter doesn't have apiFilter
    expect(result).toEqual(apiFilterDropdowns)
  })
})
