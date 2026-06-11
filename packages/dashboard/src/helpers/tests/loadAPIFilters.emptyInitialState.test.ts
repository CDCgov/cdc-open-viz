import { vi } from 'vitest'
import { loadAPIFiltersFactory } from '../loadAPIFilters'
import { SharedFilter } from '../../types/SharedFilter'

const endpointMockData = {
  'cdc.gov/filters/Disease': [
    { disease_name: 'Asthma', disease_id: 'asthma' },
    { disease_name: 'Cancer', disease_id: 'cancer' }
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
})
