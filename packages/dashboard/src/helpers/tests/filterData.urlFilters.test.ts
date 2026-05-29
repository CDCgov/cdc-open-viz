import { SharedFilter } from '../../types/SharedFilter'
import { filterData } from '../filterData'

describe('filterData URL filters', () => {
  it('filters File Name URL filters by apiFilter.valueSelector', () => {
    const filters = [
      {
        key: 'State File',
        type: 'urlfilter',
        filterBy: 'File Name',
        columnName: 'state_name',
        active: 'CA',
        apiFilter: { valueSelector: 'state_code' }
      }
    ] as SharedFilter[]
    const data = [
      { state_name: 'California', state_code: 'CA', value: 10 },
      { state_name: 'New York', state_code: 'NY', value: 20 }
    ]

    const result = filterData(filters, data)

    expect(result).toEqual([{ state_name: 'California', state_code: 'CA', value: 10 }])
  })

  it('does not apply a File Name URL filter when the dataset lacks apiFilter.valueSelector', () => {
    const filters = [
      {
        key: 'State File',
        type: 'urlfilter',
        filterBy: 'File Name',
        columnName: 'state_name',
        active: 'California',
        apiFilter: { valueSelector: 'state_code' }
      }
    ] as SharedFilter[]
    const data = [
      { state_name: 'California', value: 10 },
      { state_name: 'New York', value: 20 }
    ]

    const result = filterData(filters, data)

    expect(result).toEqual(data)
  })

  it('does not client-filter Query String URL filters even when apiFilter.valueSelector is present', () => {
    const filters = [
      {
        key: 'State Query',
        type: 'urlfilter',
        filterBy: 'Query String',
        active: 'CA',
        apiFilter: { valueSelector: 'state_code' }
      }
    ] as SharedFilter[]
    const data = [
      { state_code: 'CA', value: 10 },
      { state_code: 'NY', value: 20 }
    ]

    const result = filterData(filters, data)

    expect(result).toEqual(data)
  })

  it('keeps reset-state Query String URL filters from rendering unfiltered data', () => {
    const filters = [
      {
        key: 'State Query',
        type: 'urlfilter',
        filterBy: 'Query String',
        filterStyle: 'dropdown',
        showDropdown: true,
        active: '',
        resetLabel: '- Select State -',
        apiFilter: { valueSelector: 'state_code' }
      }
    ] as SharedFilter[]
    const data = [
      { state_code: 'CA', value: 10 },
      { state_code: 'NY', value: 20 }
    ]

    const result = filterData(filters, data)

    expect(result).toEqual([])
  })

  it('does not use columnName as a fallback for File Name URL filters', () => {
    const filters = [
      {
        key: 'State File',
        type: 'urlfilter',
        filterBy: 'File Name',
        columnName: 'state_name',
        active: 'California',
        apiFilter: { valueSelector: 'state_code' }
      }
    ] as SharedFilter[]
    const data = [
      { state_name: 'California', state_code: 'CA', value: 10 },
      { state_name: 'New York', state_code: 'NY', value: 20 }
    ]

    const result = filterData(filters, data)

    expect(result).toEqual([])
  })
})
