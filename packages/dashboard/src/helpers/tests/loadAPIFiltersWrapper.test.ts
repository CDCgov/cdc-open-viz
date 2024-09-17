import { vi } from 'vitest'
import { loadAPIFiltersFactory } from '../loadAPIFilters'
import { faker } from '@faker-js/faker'
import _ from 'lodash'
import { SharedFilter } from '../../types/SharedFilter'

faker.seed(123)

const endpointMockData = {
  'cdc.gov/filters/Sex': [
    { Sex: 'male', Abbreviation: 'M' },
    { Sex: 'female', Abbreviation: 'F' }
  ],
  'cdc.gov/filters/Quarter': [{ Quarter: 'Q1' }, { Quarter: 'Q2' }, { Quarter: 'Q3' }, { Quarter: 'Q4' }],
  'cdc.gov/filters/YearQuarter': [
    { Year: 2020, YearQuarter: '2020Q1' },
    { Year: 2021, YearQuarter: '2021Q1' }
  ]
}

const sharedFilters = [
  {
    key: 'Sex',
    active: 'F',
    showDropdown: true,
    type: 'urlfilter',
    apiFilter: {
      apiEndpoint: 'cdc.gov/filters/Sex',
      valueSelector: 'Abbreviation',
      textSelector: 'Sex'
    }
  },
  {
    key: 'Quarter',
    showDropdown: true,
    type: 'urlfilter',
    apiFilter: {
      apiEndpoint: 'cdc.gov/filters/Quarter',
      valueSelector: 'Quarter',
      textSelector: ''
    },
    parents: ['Sex']
  },
  {
    key: 'YearQuarter',
    showDropdown: true,
    type: 'urlfilter',
    apiFilter: {
      apiEndpoint: 'cdc.gov/filters/YearQuarter',
      valueSelector: 'Year',
      textSelector: 'YearQuarter'
    },
    parents: ['Sex', 'Quarter'],
    filterStyle: 'multi-select'
  }
] as SharedFilter[]

const fetch = vi.fn(endpoint => {
  const baseEndpoint = endpoint.split('?')[0]
  return Promise.resolve({
    json: () => Promise.resolve(endpointMockData[baseEndpoint])
  })
})

global.fetch = fetch

describe('loadAPIFiltersFactory', () => {
  const dispatch = vi.fn()
  const setAPIFilterDropdowns = vi.fn()
  const apiFilterDropdowns = {
    'cdc.gov/filters/Sex': [
      { text: 'male', value: 'M' },
      { text: 'female', value: 'F' }
    ]
  }
  afterEach(() => {
    vi.restoreAllMocks()
  })
  const loadAPIFilters = loadAPIFiltersFactory(dispatch, setAPIFilterDropdowns, [2])
  it('creates a function', () => {
    expect(typeof loadAPIFilters).toEqual('function')
  })

  it('loadAPIFilters() should return a promise', async () => {
    const result = loadAPIFilters([], apiFilterDropdowns)
    expect(result).toBeInstanceOf(Promise)
    await result
  })

  it('loadAPIFilters() load dropdowns for children when parent is selected', async () => {
    const newSharedFilters = await loadAPIFilters(sharedFilters, apiFilterDropdowns)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(setAPIFilterDropdowns).toHaveBeenCalledTimes(1)

    const expectedDropdowns = {
      'cdc.gov/filters/Quarter': [
        {
          text: 'Q1',
          value: 'Q1'
        },
        {
          text: 'Q2',
          value: 'Q2'
        },
        {
          text: 'Q3',
          value: 'Q3'
        },
        {
          text: 'Q4',
          value: 'Q4'
        }
      ],
      'cdc.gov/filters/Sex': [
        {
          text: 'male',
          value: 'M'
        },
        {
          text: 'female',
          value: 'F'
        }
      ]
    }

    expect(setAPIFilterDropdowns).toHaveBeenCalledWith(expectedDropdowns)
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(newSharedFilters).toEqual(sharedFilters)
  })

  it('loadAPIFilters() load dropdowns for children when parents are selected, and autoload any autoloading filters', async () => {
    sharedFilters[1].active = 'Q1'
    const newSharedFilters = await loadAPIFilters(sharedFilters, apiFilterDropdowns)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(setAPIFilterDropdowns).toHaveBeenCalledTimes(1)

    const expectedDropdowns = {
      'cdc.gov/filters/Quarter': [
        {
          text: 'Q1',
          value: 'Q1'
        },
        {
          text: 'Q2',
          value: 'Q2'
        },
        {
          text: 'Q3',
          value: 'Q3'
        },
        {
          text: 'Q4',
          value: 'Q4'
        }
      ],
      'cdc.gov/filters/Sex': [
        {
          text: 'male',
          value: 'M'
        },
        {
          text: 'female',
          value: 'F'
        }
      ],
      'cdc.gov/filters/YearQuarter': [
        { value: 2020, text: '2020Q1' },
        { value: 2021, text: '2021Q1' }
      ]
    }

    expect(setAPIFilterDropdowns).toHaveBeenCalledWith(expectedDropdowns)
    expect(fetch).toHaveBeenCalledTimes(2)
    expect(newSharedFilters[2].active).toEqual([2020])
  })
  it('returns new active values for multiselect', async () => {
    const _sharedFilters = _.cloneDeep(sharedFilters)
    _sharedFilters[1].active = 'Q1'
    _sharedFilters[2].active = ['2020', '2021']
    const apiDropdownsLoaded = {
      'cdc.gov/filters/Quarter': [
        {
          text: 'Q1',
          value: 'Q1'
        },
        {
          text: 'Q2',
          value: 'Q2'
        },
        {
          text: 'Q3',
          value: 'Q3'
        },
        {
          text: 'Q4',
          value: 'Q4'
        }
      ],
      'cdc.gov/filters/Sex': [
        {
          text: 'male',
          value: 'M'
        },
        {
          text: 'female',
          value: 'F'
        }
      ],
      'cdc.gov/filters/YearQuarter': [
        { value: '2020', text: '2020Q1' },
        { value: '2021', text: '2021Q1' }
      ]
    }
    const newSharedFilters = await loadAPIFilters(_sharedFilters, apiDropdownsLoaded)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(setAPIFilterDropdowns).toHaveBeenCalledTimes(1)

    expect(newSharedFilters[2].active).toEqual(['2020', '2021'])
  })
})
