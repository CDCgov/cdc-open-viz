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

  it('hides canonical optional Network columns before they are mapped', () => {
    const config = {
      visualizationType: 'Network',
      data: [
        {
          source: 'Clinic',
          target: 'Hospital',
          weight: 3,
          style: 'dashed',
          linkStyle: 'dashed',
          nodeColor: '#005eaa',
          notes: 'Open weekdays'
        }
      ],
      runtime: { series: [] }
    } as any

    expect(getDataSeriesColumns(config, true, config.data)).toEqual(['source', 'target', 'notes'])
  })

  it('hides optional Network mapping columns from the data table by default', () => {
    const config = {
      visualizationType: 'Network',
      data: [
        {
          source: 'Clinic',
          target: 'Hospital',
          weight: 3,
          linkStyle: 'dashed',
          nodeColor: '#005eaa',
          notes: 'Open weekdays'
        }
      ],
      columns: {},
      network: {
        columns: { source: 'source', target: 'target', weight: 'weight', style: 'linkStyle', nodeColor: 'nodeColor' }
      }
    } as any

    expect(getDataSeriesColumns(config, true, config.data)).toEqual(['source', 'target', 'notes'])
  })

  it('lets Network column configuration override metadata visibility and ordering', () => {
    const config = {
      visualizationType: 'Network',
      data: [
        { source: 'Clinic', target: 'Hospital', weight: 3, linkStyle: 'dashed', nodeColor: '#005eaa' }
      ],
      columns: {
        source: { name: 'source', dataTable: false },
        weight: { dataTable: true, order: 1 },
        linkStyle: { name: 'linkStyle', dataTable: true, order: 2 },
        nodeColor: { name: 'nodeColor', dataTable: true, order: 3 },
        target: { name: 'target', order: 4 }
      },
      network: {
        columns: { source: 'source', target: 'target', weight: 'weight', style: 'linkStyle', nodeColor: 'nodeColor' }
      }
    } as any

    expect(getDataSeriesColumns(config, true, config.data)).toEqual([
      'weight',
      'linkStyle',
      'nodeColor',
      'target'
    ])
  })

  it('prioritizes an explicitly ordered Network mapping over an unconfigured column with the same position', () => {
    const config = {
      visualizationType: 'Network',
      data: [{ source: 'Clinic', target: 'Hospital', weight: 3 }],
      columns: {
        weight: { name: 'weight', dataTable: true, order: 1 }
      },
      network: {
        columns: { source: 'source', target: 'target', weight: 'weight' }
      }
    } as any

    expect(getDataSeriesColumns(config, true, config.data)).toEqual(['weight', 'source', 'target'])
  })

  it('honors an explicit data table exclusion for an optional Network mapping column', () => {
    const config = {
      visualizationType: 'Network',
      data: [{ source: 'Clinic', target: 'Hospital', weight: 3 }],
      columns: {
        weight: { name: 'weight', dataTable: false }
      },
      network: {
        columns: { source: 'source', target: 'target', weight: 'weight' }
      }
    } as any

    expect(getDataSeriesColumns(config, true, config.data)).toEqual(['source', 'target'])
  })

  it('keeps required Network columns visible when optional mappings reuse them', () => {
    const config = {
      visualizationType: 'Network',
      data: [{ source: 'Clinic', target: 'Hospital', weight: 3 }],
      columns: {},
      network: {
        columns: { source: 'source', target: 'target', weight: 'source', style: 'target', nodeColor: 'source' }
      }
    } as any

    expect(getDataSeriesColumns(config, true, config.data)).toEqual(['source', 'target'])
  })

  it('hides Dendrogram style and color metadata by default and honors Columns overrides', () => {
    const config = {
      visualizationType: 'Dendrogram',
      data: [{ node: 'Root', parent: '', label: 'Root node', linkStyle: 'solid', nodeColor: '#005eaa' }],
      columns: { nodeColor: { name: 'nodeColor', dataTable: true, order: 1 } },
      dendrogram: {
        columns: { node: 'node', parent: 'parent', style: 'linkStyle', nodeColor: 'nodeColor' }
      }
    } as any

    expect(getDataSeriesColumns(config, true, config.data)).toEqual(['nodeColor', 'node', 'parent', 'label'])
  })

  it('includes later-row Dendrogram columns and never hides required mappings reused as metadata', () => {
    const config = {
      visualizationType: 'Dendrogram',
      data: [
        { node: 'Root', parent: '' },
        { node: 'Child', parent: 'Root', details: 'Later-row value' }
      ],
      dendrogram: {
        columns: { node: 'node', parent: 'parent', style: 'node', nodeColor: 'parent' }
      }
    } as any

    expect(getDataSeriesColumns(config, true, config.data)).toEqual(['node', 'parent', 'details'])
  })
})
