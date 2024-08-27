import { SharedFilter } from '../../types/SharedFilter'
import { addValuesToDashboardFilters } from '../addValuesToDashboardFilters'

describe('addValuesToDashboardFilters', () => {
  const colA = { columnName: 'colA', id: 11, active: 'apple', values: [], type: 'datafilter' } as SharedFilter
  const colB = { columnName: 'colB', id: 22, active: '1', values: [], type: 'datafilter' } as SharedFilter
  const colC = { columnName: 'colC', id: 33, values: [], setByQueryParameter: 'colC', type: 'datafilter' } as SharedFilter

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
  const colA2 = { apiFilter: { valueSelector: 'colA' }, id: 11, active: 'apple', values: [], type: 'urlfilter' } as SharedFilter
  const colB2 = { apiFilter: { valueSelector: 'colB' }, id: 22, active: '1', values: [], type: 'urlfilter' } as SharedFilter
  const colC2 = { apiFilter: { valueSelector: 'colC' }, id: 33, values: [], setByQueryParameter: 'colC', type: 'urlfilter' } as SharedFilter
  const filters2 = [colA2, colC2, colB2]
  it('skips urlfilters', () => {
    // urlfilter reloading happens in the dashboard in the loadAPIFilters function
    delete window.location
    window.location = new URL('https://www.example.com?colC=test')
    const newFilters = addValuesToDashboardFilters(filters2, data)
    expect(newFilters[1].active).toEqual(undefined)
  })
})
