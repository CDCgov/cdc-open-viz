import { SharedFilter } from '../../types/SharedFilter'
import { addValuesToDashboardFilters } from '../addValuesToDashboardFilters'

describe('addValuesToDashboardFilters', () => {
  const colA = { columnName: 'colA', id: 11, active: 'apple', values: [], type: 'datafilter' } as SharedFilter
  const colB = { columnName: 'colB', id: 22, active: '1', values: [], type: 'datafilter' } as SharedFilter
  const colC = {
    columnName: 'colC',
    id: 33,
    values: [],
    setByQueryParameter: 'colC',
    type: 'datafilter'
  } as SharedFilter

  const data = {
    key: [
      { colA: 'apple', colB: 3, colC: 'abc' },
      { colA: 'apple', colB: 1, colC: 'bcd' },
      { colA: 'pear', colB: 4, colC: 'test' }
    ]
  }
  const filters = [colA, colC, colB]
  it('adds filter values', () => {
    const newFilters = addValuesToDashboardFilters(filters, data)
    expect(newFilters[0].values).toEqual(['apple', 'pear'])
  })
  it('converts to multiselect', () => {
    colA.multiSelect = true
    const newFilters = addValuesToDashboardFilters(filters, data)
    expect(newFilters[0].active).toEqual(['apple'])
  })

  it('sets active value by query string', () => {
    delete window.location
    window.location = new URL('https://www.example.com?colC=test')
    const newFilters = addValuesToDashboardFilters(filters, data)
    expect(newFilters[1].active).toEqual('test')
  })
  const colA2 = {
    apiFilter: { valueSelector: 'colA' },
    id: 11,
    active: 'apple',
    values: [],
    type: 'urlfilter'
  } as SharedFilter
  const colB2 = {
    apiFilter: { valueSelector: 'colB' },
    id: 22,
    active: '1',
    values: [],
    type: 'urlfilter'
  } as SharedFilter
  const colC2 = {
    apiFilter: { valueSelector: 'colC' },
    id: 33,
    values: [],
    setByQueryParameter: 'colC',
    type: 'urlfilter'
  } as SharedFilter
  const filters2 = [colA2, colC2, colB2]
  it('skips urlfilters', () => {
    // urlfilter reloading happens in the dashboard in the loadAPIFilters function
    delete window.location
    window.location = new URL('https://www.example.com?colC=test')
    const newFilters = addValuesToDashboardFilters(filters2, data)
    expect(newFilters[1].active).toEqual(undefined)
  })

  describe('subGrouping validation', () => {
    const filterWithSubGrouping = {
      columnName: 'state',
      id: 44,
      active: 'CA',
      values: [],
      type: 'datafilter',
      subGrouping: {
        active: '',
        columnName: 'city',
        setByQueryParameter: 'city',
        valuesLookup: {
          CA: { values: ['Los Angeles', 'San Francisco', 'San Diego'] },
          TX: { values: ['Houston', 'Austin', 'Dallas'] },
          NY: { values: ['New York City', 'Buffalo', 'Rochester'] }
        }
      }
    } as SharedFilter

    const dataWithSubGrouping = {
      key: [
        { state: 'CA', city: 'Los Angeles' },
        { state: 'CA', city: 'San Francisco' },
        { state: 'TX', city: 'Houston' },
        { state: 'NY', city: 'New York City' }
      ]
    }

    it('validates query string value against currentGroupValues for subGrouping', () => {
      delete window.location
      // Valid city for CA
      window.location = new URL('https://www.example.com?city=San Francisco')
      const newFilters = addValuesToDashboardFilters([filterWithSubGrouping], dataWithSubGrouping)
      expect(newFilters[0].subGrouping.active).toEqual('San Francisco')
    })

    it('rejects invalid query string value for subGrouping', () => {
      delete window.location
      // Invalid city for CA (Houston is in TX, not CA)
      window.location = new URL('https://www.example.com?city=Houston')
      const newFilters = addValuesToDashboardFilters([filterWithSubGrouping], dataWithSubGrouping)
      // Should fall back to first value since query string value is invalid
      expect(newFilters[0].subGrouping.active).toEqual('Los Angeles')
    })

    it('rejects non-existent query string value for subGrouping', () => {
      delete window.location
      // Non-existent city
      window.location = new URL('https://www.example.com?city=InvalidCity')
      const newFilters = addValuesToDashboardFilters([filterWithSubGrouping], dataWithSubGrouping)
      // Should fall back to first value
      expect(newFilters[0].subGrouping.active).toEqual('Los Angeles')
    })

    it('uses configured defaultValue if query string is invalid', () => {
      const filterWithDefault = {
        ...filterWithSubGrouping,
        subGrouping: {
          ...filterWithSubGrouping.subGrouping,
          defaultValue: 'San Diego'
        }
      } as SharedFilter

      delete window.location
      window.location = new URL('https://www.example.com?city=InvalidCity')
      const newFilters = addValuesToDashboardFilters([filterWithDefault], dataWithSubGrouping)
      // Should use defaultValue when query string is invalid
      expect(newFilters[0].subGrouping.active).toEqual('San Diego')
    })

    it('prefers valid query string over defaultValue', () => {
      const filterWithDefault = {
        ...filterWithSubGrouping,
        subGrouping: {
          ...filterWithSubGrouping.subGrouping,
          defaultValue: 'San Diego'
        }
      } as SharedFilter

      delete window.location
      window.location = new URL('https://www.example.com?city=San Francisco')
      const newFilters = addValuesToDashboardFilters([filterWithDefault], dataWithSubGrouping)
      // Valid query string should take priority over defaultValue
      expect(newFilters[0].subGrouping.active).toEqual('San Francisco')
    })
  })
})
