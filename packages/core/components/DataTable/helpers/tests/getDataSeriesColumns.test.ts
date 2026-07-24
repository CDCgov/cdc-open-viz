import { describe, expect, it } from 'vitest'
import { getDataSeriesColumns } from '../getDataSeriesColumns'

describe('getDataSeriesColumns', () => {
  it('uses Sankey tabular runtime rows instead of legacy tableData', () => {
    const config = {
      visualizationType: 'Sankey',
      data: [{ source: 'Screened', target: 'Eligible', value: 850 }]
    } as any
    const runtimeData = [{ source: 'Screened', target: 'Eligible', value: 850 }]

    expect(getDataSeriesColumns(config, true, runtimeData)).toEqual(['source', 'target', 'value'])
  })

  it('uses Sankey config rows when runtime rows are unavailable', () => {
    const config = {
      visualizationType: 'Sankey',
      data: [{ source: 'Screened', target: 'Eligible', value: 850 }]
    } as any

    expect(getDataSeriesColumns(config, true, [])).toEqual(['source', 'target', 'value'])
  })

  it('does not throw when Sankey has no data rows', () => {
    const config = {
      visualizationType: 'Sankey',
      data: []
    } as any

    expect(getDataSeriesColumns(config, true, [])).toEqual([])
  })
})
