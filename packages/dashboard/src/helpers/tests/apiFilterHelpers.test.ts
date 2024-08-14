import { setAutoLoadDefaultValue, getToFetch, getFilterValues, getLoadingFilterMemo } from '../apiFilterHelpers'
import _ from 'lodash'
import type { APIFilterDropdowns } from '../../components/DashboardFilters'
import type { SharedFilter } from '../../types/SharedFilter'

describe('getLoadingFilterMemo', () => {
  it('should return correct APIFilterDropdowns for valid inputs', () => {
    const sharedAPIFilters: SharedFilter[] = [{ apiFilter: { apiEndpoint: 'endpoint1' } }, { apiFilter: { apiEndpoint: 'endpoint2' } }]
    const apiFilterDropdowns: APIFilterDropdowns = {
      endpoint1: { text: 'text1', value: 'value1' }
    }
    const expectedOutput: APIFilterDropdowns = {
      endpoint2: null
    }
    expect(getLoadingFilterMemo(sharedAPIFilters, apiFilterDropdowns)).toEqual(expectedOutput)
  })

  it('should return an empty object for empty sharedAPIFilters', () => {
    const sharedAPIFilters: SharedFilter[] = []
    const apiFilterDropdowns: APIFilterDropdowns = {
      endpoint1: { text: 'text1', value: 'value1' }
    }
    const expectedOutput: APIFilterDropdowns = {}
    expect(getLoadingFilterMemo(sharedAPIFilters, apiFilterDropdowns)).toEqual(expectedOutput)
  })

  it('should return APIFilterDropdowns with null values for empty apiFilterDropdowns', () => {
    const sharedAPIFilters: SharedFilter[] = [{ apiFilter: { apiEndpoint: 'endpoint1' } }, { apiFilter: { apiEndpoint: 'endpoint2' } }]
    const apiFilterDropdowns: APIFilterDropdowns = {}
    const expectedOutput: APIFilterDropdowns = {
      endpoint1: null,
      endpoint2: null
    }
    expect(getLoadingFilterMemo(sharedAPIFilters, apiFilterDropdowns)).toEqual(expectedOutput)
  })

  it('should not overwrite existing data in apiFilterDropdowns, so return empty object', () => {
    const sharedAPIFilters: SharedFilter[] = [{ apiFilter: { apiEndpoint: 'endpoint1' } }, { apiFilter: { apiEndpoint: 'endpoint2' } }]
    const apiFilterDropdowns: APIFilterDropdowns = {
      endpoint1: { text: 'text1', value: 'value1' },
      endpoint2: { text: 'text2', value: 'value2' }
    }
    expect(getLoadingFilterMemo(sharedAPIFilters, apiFilterDropdowns)).toEqual({})
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
