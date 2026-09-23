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

  it('uses raw edge-list columns for Network charts with no configured series', () => {
    const config = {
      visualizationType: 'Network',
      data: [{ source: 'Clinic', target: 'Hospital', weight: 3 }],
      runtime: { series: [] }
    } as any

    expect(getDataSeriesColumns(config, true, config.data)).toEqual(['source', 'target', 'weight'])
  })

  it('hides Network style metadata columns by default', () => {
    const config = {
      visualizationType: 'Network',
      data: [
        {
          source: 'Clinic',
          target: 'Hospital',
          weight: 3,
          linkStyle: 'dashed',
          nodeColor: '#005eaa'
        }
      ],
      columns: {},
      network: {
        columns: { source: 'source', target: 'target', weight: 'weight', style: 'linkStyle', nodeColor: 'nodeColor' }
      }
    } as any

    expect(getDataSeriesColumns(config, true, config.data)).toEqual(['source', 'target', 'weight'])
  })

  it('lets Network column configuration override metadata visibility and ordering', () => {
    const config = {
      visualizationType: 'Network',
      data: [{ source: 'Clinic', target: 'Hospital', linkStyle: 'dashed', nodeColor: '#005eaa' }],
      columns: {
        source: { name: 'source', dataTable: false },
        nodeColor: { name: 'nodeColor', dataTable: true, order: 1 }
      },
      network: {
        columns: { source: 'source', target: 'target', style: 'linkStyle', nodeColor: 'nodeColor' }
      }
    } as any

    expect(getDataSeriesColumns(config, true, config.data)).toEqual(['nodeColor', 'target'])
  })
})
