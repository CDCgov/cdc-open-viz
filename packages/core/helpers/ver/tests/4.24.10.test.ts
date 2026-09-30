import { ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import { changePivotColumns, removeMultiSelectPropFromMultiselect, setXAxisLabelOffsetToZero } from '../4.24.10'
import { defineFilterStyles } from '../4.24.10-1'
import { expect, describe, it } from 'vitest'

describe('removeMultiSelectPropFromMultiSelect() ', () => {
  it('replaces multiSelect boolean with filterStyle = multiSelect', () => {
    const mockConfig = { type: 'dashboard', dashboard: { sharedFilters: [{ multiSelect: true }] } } as any
    removeMultiSelectPropFromMultiselect(mockConfig)
    expect(mockConfig.dashboard.sharedFilters[0].filterStyle).toBe('multi-select')
    expect(mockConfig.dashboard.sharedFilters[0].multiSelect).toBeUndefined()
  })
})

describe('defineFilterStyles', () => {
  it('fills a missing style without overwriting an authored style', () => {
    const config: any = { filters: [{ columnName: 'a' }, { columnName: 'b', filterStyle: 'multi-select' }] }

    defineFilterStyles(config)

    expect(config.filters).toEqual([
      { columnName: 'a', filterStyle: 'dropdown' },
      { columnName: 'b', filterStyle: 'multi-select' }
    ])
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

describe('setXAxisLabelOffsetToZero(config) ', () => {
  it('sets the x-axis label offset to 0', () => {
    const mockConfig = { xAxis: { labelOffset: 5 } } as Partial<ChartConfig>
    setXAxisLabelOffsetToZero(mockConfig)
    expect(mockConfig.xAxis?.labelOffset).toBe(0)
  })
})
