import {
  setAutoLoadDefaultValue,
  getToFetch,
  getFilterValues,
  getLoadingFilterMemo,
  getParentParams,
  setActiveNestedDropdown,
  setActiveMultiDropdown
} from '../apiFilterHelpers'
import _ from 'lodash'
import type { APIFilterDropdowns } from '../../components/DashboardFilters'
import { SharedFilter } from '../../types/SharedFilter'
import { FILTER_STYLE } from '../../types/FilterStyles'

describe('getLoadingFilterMemo', () => {
  it('should return correct APIFilterDropdowns for valid inputs', () => {
    const sharedAPIFilters = ['endpoint1', 'endpoint2']
    const apiFilterDropdowns: APIFilterDropdowns = {
      endpoint1: { text: 'text1', value: 'value1' }
    }
    const expectedOutput: APIFilterDropdowns = {
      endpoint1: { text: 'text1', value: 'value1' },
      endpoint2: undefined
    }
    expect(getLoadingFilterMemo(sharedAPIFilters, apiFilterDropdowns)).toEqual(expectedOutput)
  })

  it('should return an empty object for empty sharedAPIFilters', () => {
    const sharedAPIFilters: string[] = []
    const apiFilterDropdowns: APIFilterDropdowns = {
      endpoint1: { text: 'text1', value: 'value1' }
    }
    const expectedOutput: APIFilterDropdowns = {}
    expect(getLoadingFilterMemo(sharedAPIFilters, apiFilterDropdowns)).toEqual(expectedOutput)
  })

  it('should return APIFilterDropdowns with null values for empty apiFilterDropdowns', () => {
    const sharedAPIFilters = ['endpoint1', 'endpoint2']
    const apiFilterDropdowns: APIFilterDropdowns = {}
    const expectedOutput: APIFilterDropdowns = {
      endpoint1: undefined,
      endpoint2: undefined
    }
    expect(getLoadingFilterMemo(sharedAPIFilters, apiFilterDropdowns)).toEqual(expectedOutput)
  })

  it('should not overwrite existing data in apiFilterDropdowns, so return original dropdowns', () => {
    const sharedAPIFilters = ['endpoint1', 'endpoint2']
    const apiFilterDropdowns: APIFilterDropdowns = {
      endpoint1: { text: 'text1', value: 'value1' },
      endpoint2: { text: 'text2', value: 'value2' }
    }
    expect(getLoadingFilterMemo(sharedAPIFilters, apiFilterDropdowns)).toEqual(apiFilterDropdowns)
  })
})

describe('getParentParams', () => {
  it('should return null when there are no parent filters', () => {
    const childFilter: SharedFilter = {
      key: 'child',
      parents: [],
      apiFilter: {}
    }
    const sharedFilters: SharedFilter[] = []

    const result = getParentParams(childFilter, sharedFilters)
    expect(result).toBeNull()
  })

  it('should return key-value pairs for nestedDropdown parent filters', () => {
    const childFilter: SharedFilter = {
      key: 'child',
      parents: ['parent1'],
      apiFilter: {}
    }
    const sharedFilters: SharedFilter[] = [
      {
        key: 'parent1',
        filterStyle: FILTER_STYLE.nestedDropdown,
        apiFilter: {
          valueSelector: 'parent1Value',
          subgroupValueSelector: 'parent1SubValue'
        },
        active: 'activeValue1',
        subGrouping: {
          active: 'activeSubValue1'
        }
      }
    ]

    const expectedOutput = [
      { key: 'parent1Value', value: 'activeValue1' },
      { key: 'parent1SubValue', value: 'activeSubValue1' }
    ]

    const result = getParentParams(childFilter, sharedFilters)
    expect(result).toEqual(expectedOutput)
  })

  it('should return key-value pairs for non-nestedDropdown parent filters', () => {
    const childFilter: SharedFilter = {
      key: 'child',
      parents: ['parent1'],
      apiFilter: {}
    }
    const sharedFilters: SharedFilter[] = [
      {
        key: 'parent1',
        filterStyle: 'someOtherStyle',
        apiFilter: {
          valueSelector: 'parent1Value'
        },
        active: 'activeValue1'
      }
    ]

    const expectedOutput = [{ key: 'parent1Value', value: 'activeValue1' }]

    const result = getParentParams(childFilter, sharedFilters)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle queuedActive values for nestedDropdown parent filters', () => {
    const childFilter: SharedFilter = {
      key: 'child',
      parents: ['parent1'],
      apiFilter: {}
    }
    const sharedFilters: SharedFilter[] = [
      {
        key: 'parent1',
        filterStyle: FILTER_STYLE.nestedDropdown,
        apiFilter: {
          valueSelector: 'parent1Value',
          subgroupValueSelector: 'parent1SubValue'
        },
        queuedActive: ['queuedActiveValue1', 'queuedActiveSubValue1']
      }
    ]

    const expectedOutput = [
      { key: 'parent1Value', value: 'queuedActiveValue1' },
      { key: 'parent1SubValue', value: 'queuedActiveSubValue1' }
    ]

    const result = getParentParams(childFilter, sharedFilters)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle queuedActive values for non-nestedDropdown parent filters', () => {
    const childFilter: SharedFilter = {
      key: 'child',
      parents: ['parent1'],
      apiFilter: {}
    }
    const sharedFilters: SharedFilter[] = [
      {
        key: 'parent1',
        filterStyle: 'someOtherStyle',
        apiFilter: {
          valueSelector: 'parent1Value'
        },
        queuedActive: 'queuedActiveValue1'
      }
    ]

    const expectedOutput = [{ key: 'parent1Value', value: 'queuedActiveValue1' }]

    const result = getParentParams(childFilter, sharedFilters)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle array values for non-nestedDropdown parent filters', () => {
    const childFilter: SharedFilter = {
      key: 'child',
      parents: ['parent1'],
      apiFilter: {}
    }
    const sharedFilters: SharedFilter[] = [
      {
        key: 'parent1',
        filterStyle: 'someOtherStyle',
        apiFilter: {
          valueSelector: 'parent1Value'
        },
        active: ['activeValue1', 'activeValue2']
      }
    ]

    const expectedOutput = [
      { key: 'parent1Value', value: 'activeValue1' },
      { key: 'parent1Value', value: 'activeValue2' }
    ]

    const result = getParentParams(childFilter, sharedFilters)
    expect(result).toEqual(expectedOutput)
  })
})

describe('getFilterValues', () => {
  it('should return correct filter values for valid inputs', () => {
    const data = [{ key1: 'value1', key2: 'value2' }]
    const apiFilter = { textSelector: 'key1', valueSelector: 'key2' }
    const expectedOutput = [{ text: 'value1', value: 'value2' }]
    expect(getFilterValues(data, apiFilter)).toEqual(expectedOutput)
    delete apiFilter.textSelector
    const expectedOutput2 = [{ text: 'value2', value: 'value2' }]
    expect(getFilterValues(data, apiFilter)).toEqual(expectedOutput2)
  })

  it('should return nested dropdown options when subgroupValueSelector is provided', () => {
    const data = [
      { id: 1, name: 'Group 1', subId: 101, subName: 'Subgroup 1-1' },
      { id: 1, name: 'Group 1', subId: 102, subName: 'Subgroup 1-2' },
      { id: 2, name: 'Group 2', subId: 201, subName: 'Subgroup 2-1' }
    ]

    const apiFilter = {
      textSelector: 'name',
      valueSelector: 'id',
      subgroupTextSelector: 'subName',
      subgroupValueSelector: 'subId'
    }

    const expectedOutput = [
      {
        text: 'Group 1',
        value: 1,
        subOptions: [
          { text: 'Subgroup 1-1', value: 101 },
          { text: 'Subgroup 1-2', value: 102 }
        ]
      },
      {
        text: 'Group 2',
        value: 2,
        subOptions: [{ text: 'Subgroup 2-1', value: 201 }]
      }
    ]

    expect(getFilterValues(data, apiFilter)).toEqual(expectedOutput)
  })
})

describe('getToFetch', () => {
  it('should return an empty object when sharedAPIFilters is empty', () => {
    const result = getToFetch([], {})
    expect(result).toEqual({})
  })

  it('should return an object with endpoints when apiFilterDropdowns is empty', () => {
    const sharedAPIFilters = [{ apiFilter: { apiEndpoint: '/endpoint1' }, parents: [] }]
    const result = getToFetch(sharedAPIFilters, {})
    expect(result).toEqual({ '/endpoint1': ['/endpoint1', 0] })
  })

  it('should return and empty object when sharedAPIFilters contains filters with no parents', () => {
    const sharedAPIFilters = [{ apiFilter: { apiEndpoint: '/endpoint1' }, parents: [] }]
    const apiFilterDropdowns = { '/endpoint1': true }
    const result = getToFetch(sharedAPIFilters, apiFilterDropdowns)
    expect(result).toEqual({})
  })

  it('should return an empty object when parentParams contains an empty value', () => {
    const sharedAPIFilters = [
      { key: 'parent1', apiFilter: { apiEndpoint: '/endpoint1' }, parents: [] },
      { apiFilter: { apiEndpoint: '/endpoint1' }, parents: ['parent1'] }
    ]
    const apiFilterDropdowns = { '/endpoint1': true }
    const result = getToFetch(sharedAPIFilters, apiFilterDropdowns)
    expect(result).toEqual({})
  })

  it('should return an empty object when parentParams contains an empty value', () => {
    const sharedAPIFilters = [
      { key: 'parent1', value: '', apiFilter: { apiEndpoint: '/endpoint1' }, parents: [] },
      { apiFilter: { apiEndpoint: '/endpoint1' }, parents: ['parent1'] }
    ]
    const apiFilterDropdowns = { '/endpoint1': true }
    const result = getToFetch(sharedAPIFilters, apiFilterDropdowns)
    expect(result).toEqual({})
  })
})

describe('setActiveNestedDropdown', () => {
  const dropdownOptions = [
    { value: 'option1', subOptions: [{ value: 'subOption1' }], label: 'Option 1' },
    { value: 'option2', subOptions: [{ value: 'subOption2' }], label: 'Option 2' }
  ]

  const sharedFilters = [
    {
      key: 'filter1',
      active: null,
      filterStyle: FILTER_STYLE.nestedDropdown,
      subGrouping: {},
      queuedActive: null,
      parents: []
    },
    {
      key: 'filter2',
      active: null,
      setByQueryParameter: 'group',
      filterStyle: FILTER_STYLE.nestedDropdown,
      subGrouping: { setByQueryParameter: 'subgroup' },
      queuedActive: null,
      parents: ['filter1']
    }
  ] as SharedFilter[]

  it('should set the active value for a nested dropdown', () => {
    setActiveNestedDropdown(dropdownOptions, sharedFilters[0])
    expect(sharedFilters[0].active).toEqual('option1')
    expect(sharedFilters[0].subGrouping.active).toEqual('subOption1')
  })
  it('should set the active value for nested dropdown with query parameters', () => {
    delete window.location
    window.location = new URL('https://www.example.com?group=option2&subgroup=subOption2')
    setActiveNestedDropdown(dropdownOptions, sharedFilters[1])
    expect(sharedFilters[1].active).toEqual('option2')
    expect(sharedFilters[1].subGrouping.active).toEqual('subOption2')
  })
})

describe('setActiveMultiDropdown', () => {
  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]

  const sharedFilters = [
    {
      key: 'filter1',
      active: null,
      filterStyle: FILTER_STYLE.multiSelect,
      queuedActive: null,
      parents: []
    },
    {
      key: 'filter2',
      active: null,
      filterStyle: FILTER_STYLE.multiSelect,
      setByQueryParameter: 'group',
      queuedActive: null,
      parents: ['filter1']
    }
  ] as SharedFilter[]
  it('should set the active value for a multi dropdown', () => {
    setActiveMultiDropdown(dropdownOptions, sharedFilters[0])
    expect(sharedFilters[0].active).toEqual(['option1'])
  })
  it('should set the active value for a multi dropdown with queryParameters', () => {
    delete window.location
    window.location = new URL('https://www.example.com?group=option1&group=option2')
    setActiveMultiDropdown(dropdownOptions, sharedFilters[1])
    expect(sharedFilters[1].active).toEqual(['option1', 'option2'])
    delete window.location
    window.location = new URL('https://www.example.com?group=option1,option2')
    setActiveMultiDropdown(dropdownOptions, sharedFilters[1])
    expect(sharedFilters[1].active).toEqual(['option1', 'option2'])
  })
})

describe('setAutoLoadDefaultValue', () => {
  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]

  const sharedFilters = [
    { key: 'filter1', active: null, queuedActive: null, parents: [] },
    { key: 'filter2', active: null, queuedActive: null, parents: ['filter1'] }
  ]

  it('should return the original filter when autoLoadFilterIndexes is empty', () => {
    const result = setAutoLoadDefaultValue(0, dropdownOptions, sharedFilters, [])
    expect(result).toEqual(sharedFilters[0])
  })

  it('should return the original filter when dropdownOptions is empty', () => {
    const result = setAutoLoadDefaultValue(0, [], sharedFilters, [0])
    expect(result).toEqual(sharedFilters[0])
  })

  it('should return the original filter when dropdownOptions is undefined', () => {
    const result = setAutoLoadDefaultValue(0, undefined, sharedFilters, [0])
    expect(result).toEqual(sharedFilters[0])
  })

  it('should return the original filter when sharedFilterIndex is not in autoLoadFilterIndexes', () => {
    const result = setAutoLoadDefaultValue(0, dropdownOptions, sharedFilters, [1])
    expect(result).toEqual(sharedFilters[0])
  })

  it('should return the original filter when not all parent filters are selected', () => {
    const result = setAutoLoadDefaultValue(1, dropdownOptions, sharedFilters, [1])
    expect(result).toEqual(sharedFilters[1])
  })

  it('should assign the default value from dropdownOptions when no active value is set', () => {
    const sharedFiltersCopy = _.cloneDeep(sharedFilters)
    sharedFiltersCopy[0].active = null
    const result = setAutoLoadDefaultValue(0, dropdownOptions, sharedFiltersCopy, [0])
    expect(result.active).toEqual('option1')
  })

  it('should retain the current active value if it exists in dropdownOptions', () => {
    const sharedFiltersCopy = _.cloneDeep(sharedFilters)
    sharedFiltersCopy[0].active = 'option1'
    const result = setAutoLoadDefaultValue(0, dropdownOptions, sharedFiltersCopy, [0])
    expect(result.active).toEqual('option1')
  })

  it('should assign the default value if the current active value does not exist in dropdownOptions', () => {
    const sharedFiltersCopy = _.cloneDeep(sharedFilters)
    sharedFiltersCopy[0].active = 'nonexistent'
    const result = setAutoLoadDefaultValue(0, dropdownOptions, sharedFiltersCopy, [0])
    expect(result.active).toEqual('option1')
  })
})
