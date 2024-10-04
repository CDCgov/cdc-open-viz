import { changePivotColumns, removeMultiSelectPropFromMultiselect } from '../4.24.10'
import { expect, describe, it } from 'vitest'

describe('removeMultiSelectPropFromMultiSelect() ', () => {
  it('replaces multiSelect boolean with filterStyle = multiSelect', () => {
    const mockConfig = { type: 'dashboard', dashboard: { sharedFilters: [{ multiSelect: true }] } } as any
    removeMultiSelectPropFromMultiselect(mockConfig)
    expect(mockConfig.dashboard.sharedFilters[0].filterStyle).toBe('multi-select')
    expect(mockConfig.dashboard.sharedFilters[0].multiSelect).toBeUndefined()
  })
})

describe('changePivotColumns() ', () => {
  it('works with dashboards', () => {
    const config = {
      type: 'dashboard',
      visualizations: { a: { table: { pivot: { valueColumn: 'value' } } } }
    }
    const expectedConfig = {
      type: 'dashboard',
      visualizations: { a: { table: { pivot: { valueColumns: ['value'] } } } }
    }
    expect(changePivotColumns(config)).toEqual(expectedConfig)
  })
  it('works with regularVisualizations', () => {
    const config = {
      type: 'chart',
      table: { pivot: { valueColumn: 'value' } }
    }
    const expectedConfig = {
      type: 'chart',
      table: { pivot: { valueColumns: ['value'] } }
    }
    expect(changePivotColumns(config)).toEqual(expectedConfig)
  })
})
