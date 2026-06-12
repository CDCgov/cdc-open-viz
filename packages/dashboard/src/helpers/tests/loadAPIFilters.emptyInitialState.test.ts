import { vi } from 'vitest'
import { loadAPIFiltersFactory } from '../loadAPIFilters'
import { SharedFilter } from '../../types/SharedFilter'

const endpointMockData = {
  'cdc.gov/filters/Disease': [
    { disease_name: 'Asthma', disease_id: 'asthma' },
    { disease_name: 'Cancer', disease_id: 'cancer' }
  ],
  'cdc.gov/filters/NestedDisease': [
    { group_name: 'Viral', group_id: 'viral', disease_name: 'Measles', disease_id: 'measles' },
    { group_name: 'Viral', group_id: 'viral', disease_name: 'Mumps', disease_id: 'mumps' },
    { group_name: 'Vector', group_id: 'vector', disease_name: 'Lyme disease', disease_id: 'lyme' }
  ]
}

const fetchMock = vi.fn(endpoint => {
  const baseEndpoint = endpoint.split('?')[0]
  return Promise.resolve({
    json: () => Promise.resolve(endpointMockData[baseEndpoint])
  })
})

describe('loadAPIFiltersFactory empty initial state', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', fetchMock)
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.unstubAllGlobals()
  })

  it('loads File Name filter options without selecting the first option when empty initial state is allowed', async () => {
    const dispatch = vi.fn()
    const dispatchErrorMessages = vi.fn()
    const setAPIFilterDropdowns = vi.fn()
    const loadAPIFilters = loadAPIFiltersFactory(dispatch, dispatchErrorMessages, setAPIFilterDropdowns, [])
    const sharedFilters = [
      {
        key: 'Disease',
        type: 'urlfilter',
        filterBy: 'File Name',
        filterStyle: 'combobox',
        showDropdown: true,
        active: '',
        allowEmptyInitialState: true,
        fileNameTargets: [{ datasetKey: 'diseaseData', fileName: 'disease-${value}' }],
        apiFilter: {
          apiEndpoint: 'cdc.gov/filters/Disease',
          valueSelector: 'disease_id',
          textSelector: 'disease_name'
        }
      }
    ] as SharedFilter[]

    const newSharedFilters = await loadAPIFilters(sharedFilters, {}, true)

    expect(newSharedFilters[0].active).toBe('')
    expect(setAPIFilterDropdowns).toHaveBeenCalledWith({
      'cdc.gov/filters/Disease': [
        { text: 'Asthma', value: 'asthma' },
        { text: 'Cancer', value: 'cancer' }
      ]
    })
  })

  it('loads File Name nested dropdown options without selecting the first subgroup when empty initial state is allowed', async () => {
    const dispatch = vi.fn()
    const dispatchErrorMessages = vi.fn()
    const setAPIFilterDropdowns = vi.fn()
    const loadAPIFilters = loadAPIFiltersFactory(dispatch, dispatchErrorMessages, setAPIFilterDropdowns, [])
    const sharedFilters = [
      {
        key: 'Disease',
        type: 'urlfilter',
        filterBy: 'File Name',
        filterStyle: 'nested-dropdown',
        showDropdown: true,
        active: '',
        resetLabel: 'Type to search for a disease',
        allowEmptyInitialState: true,
        fileNameTargets: [{ datasetKey: 'diseaseData', fileName: 'disease-${value}' }],
        apiFilter: {
          apiEndpoint: 'cdc.gov/filters/NestedDisease',
          valueSelector: 'group_id',
          textSelector: 'group_name',
          subgroupValueSelector: 'disease_id',
          subgroupTextSelector: 'disease_name'
        },
        subGrouping: { active: '' }
      }
    ] as SharedFilter[]

    const newSharedFilters = await loadAPIFilters(sharedFilters, {}, true)

    expect(newSharedFilters[0].active).toBe('')
    expect(newSharedFilters[0].subGrouping.active).toBe('')
    expect(setAPIFilterDropdowns).toHaveBeenCalledWith({
      'cdc.gov/filters/NestedDisease': [
        {
          text: 'Viral',
          value: 'viral',
          subOptions: [
            { text: 'Measles', value: 'measles' },
            { text: 'Mumps', value: 'mumps' }
          ]
        },
        {
          text: 'Vector',
          value: 'vector',
          subOptions: [{ text: 'Lyme disease', value: 'lyme' }]
        }
      ]
    })
  })
})
