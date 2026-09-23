import { describe, expect, it } from 'vitest'
import { getMissingRequiredFields, missingRequiredSections } from '../missingRequiredSections'

const standardConfig = {
  visualizationType: 'Bar',
  series: [{ dataKey: 'value' }],
  xAxis: { dataKey: 'category' }
}

describe('missingRequiredSections', () => {
  it('returns every missing standard chart field in editor order', () => {
    const config = { ...standardConfig, series: [], xAxis: { dataKey: '' } }

    expect(getMissingRequiredFields(config)).toEqual([
      { target: 'data-series', section: 'Data Series', field: 'Add Data Series' },
      { target: 'date-category-axis', section: 'Date/Category Axis', field: 'Data Key' }
    ])
    expect(missingRequiredSections(config)).toBe(true)
  })

  it('returns only the remaining standard chart requirement', () => {
    expect(getMissingRequiredFields({ ...standardConfig, series: [] })).toEqual([
      { target: 'data-series', section: 'Data Series', field: 'Add Data Series' }
    ])
    expect(getMissingRequiredFields({ ...standardConfig, xAxis: { dataKey: '' } })).toEqual([
      { target: 'date-category-axis', section: 'Date/Category Axis', field: 'Data Key' }
    ])
  })

  it('accepts a complete standard chart and dynamic series charts without static series', () => {
    expect(getMissingRequiredFields(standardConfig)).toEqual([])
    expect(missingRequiredSections(standardConfig)).toBe(false)
    expect(getMissingRequiredFields({ ...standardConfig, series: undefined, dynamicSeries: true })).toEqual([])
  })

  it('adds editor guidance for unset and cleared Pie selections', () => {
    expect(
      getMissingRequiredFields({ visualizationType: 'Pie', yAxis: {}, xAxis: { dataKey: '' } })
    ).toEqual([
      { target: 'pie-data-column', section: 'Data Format', field: 'Data Column' },
      { target: 'pie-segments', section: 'Segments', field: 'Segment Labels' }
    ])
    expect(
      getMissingRequiredFields({ visualizationType: 'Pie', yAxis: { dataKey: 'value' }, xAxis: { dataKey: '' } })
    ).toEqual([{ target: 'pie-segments', section: 'Segments', field: 'Segment Labels' }])
    expect(
      getMissingRequiredFields({ visualizationType: 'Pie', yAxis: { dataKey: '' }, xAxis: { dataKey: 'category' } })
    ).toEqual([{ target: 'pie-data-column', section: 'Data Format', field: 'Data Column' }])
    expect(
      missingRequiredSections({
        visualizationType: 'Pie',
        yAxis: { dataKey: '' },
        xAxis: { dataKey: 'category' }
      })
    ).toBe(false)
  })

  it('reports HeatMap series and category requirements without assuming series exists', () => {
    expect(getMissingRequiredFields({ visualizationType: 'HeatMap', xAxis: {} })).toEqual([
      { target: 'data-series', section: 'Data Series', field: 'Add Data Series' },
      { target: 'date-category-axis', section: 'Date/Category Axis', field: 'Data Key' }
    ])
    expect(
      getMissingRequiredFields({ visualizationType: 'HeatMap', series: [{ dataKey: 'value' }], xAxis: { dataKey: '' } })
    ).toEqual([{ target: 'date-category-axis', section: 'Date/Category Axis', field: 'Data Key' }])
    expect(
      getMissingRequiredFields({
        visualizationType: 'HeatMap',
        dynamicSeries: true,
        series: [],
        xAxis: { dataKey: 'category' }
      })
    ).toEqual([{ target: 'data-series', section: 'Data Series', field: 'Add Data Series' }])
    expect(
      getMissingRequiredFields({
        visualizationType: 'HeatMap',
        series: [null, { dataKey: '' }],
        xAxis: { dataKey: 'category' }
      })
    ).toEqual([])
  })

  it('reports the Radar minimum series and category requirements', () => {
    expect(
      getMissingRequiredFields({
        visualizationType: 'Radar',
        series: [{ dataKey: 'value' }],
        xAxis: { dataKey: '' }
      })
    ).toEqual([
      { target: 'data-series', section: 'Data Series', field: 'At Least 3 Data Series' },
      { target: 'radar-category', section: 'Radar Chart Settings', field: 'Category Column' }
    ])

    expect(
      getMissingRequiredFields({
        visualizationType: 'Radar',
        series: [{ dataKey: 'one' }, { dataKey: 'two' }, { dataKey: 'three' }],
        xAxis: { dataKey: 'category' }
      })
    ).toEqual([])
  })

  it('preserves the Forecasting exemption', () => {
    const visualizationType = 'Forecasting'
    const config = { visualizationType, series: [], xAxis: { dataKey: '' } }

    expect(getMissingRequiredFields(config)).toEqual([])
    expect(missingRequiredSections(config)).toBe(false)
  })

  it('handles a missing config defensively', () => {
    expect(getMissingRequiredFields(undefined)).toEqual([])
  })

  it.each([
    standardConfig,
    { ...standardConfig, series: [] },
    { ...standardConfig, xAxis: { dataKey: '' } },
    { ...standardConfig, series: undefined, dynamicSeries: true },
    { visualizationType: 'Pie', yAxis: {}, xAxis: { dataKey: '' } },
    { visualizationType: 'HeatMap', series: [], xAxis: { dataKey: 'category' } }
  ])('keeps alert presence aligned with the existing required-section result', config => {
    expect(getMissingRequiredFields(config).length > 0).toBe(missingRequiredSections(config))
  })

  it('adds editor guidance for the existing Radar three-dimension requirement without changing the legacy check', () => {
    const config = {
      visualizationType: 'Radar',
      series: [{ dataKey: 'one' }, { dataKey: 'two' }],
      xAxis: { dataKey: 'category' }
    }

    expect(getMissingRequiredFields(config)).toEqual([
      { target: 'data-series', section: 'Data Series', field: 'At Least 3 Data Series' }
    ])
    expect(missingRequiredSections(config)).toBe(false)
  })

  it('adds editor guidance for the existing Lollipop single-series requirement', () => {
    const invalidConfig = {
      visualizationType: 'Bar',
      isLollipopChart: true,
      series: [{ dataKey: 'one' }, { dataKey: 'two' }],
      xAxis: { dataKey: 'category' }
    }

    expect(getMissingRequiredFields(invalidConfig)).toEqual([
      { target: 'data-series', section: 'Data Series', field: 'Exactly 1 Data Series' }
    ])
    expect(missingRequiredSections(invalidConfig)).toBe(false)
    expect(getMissingRequiredFields({ ...invalidConfig, series: [{ dataKey: 'one' }] })).toEqual([])
  })

  it('adds editor guidance for the existing Paired Bar two-series requirement', () => {
    const invalidConfig = {
      visualizationType: 'Paired Bar',
      series: [{ dataKey: 'one' }, { dataKey: 'two' }, { dataKey: 'three' }],
      xAxis: { dataKey: 'category' }
    }

    expect(getMissingRequiredFields(invalidConfig)).toEqual([
      { target: 'data-series', section: 'Data Series', field: 'Exactly 2 Data Series' }
    ])
    expect(missingRequiredSections(invalidConfig)).toBe(false)
    expect(getMissingRequiredFields({ ...invalidConfig, series: invalidConfig.series.slice(0, 2) })).toEqual([])
  })

  it('adds editor guidance for the existing Deviation Bar single-series requirement', () => {
    const invalidConfig = {
      visualizationType: 'Deviation Bar',
      series: [{ dataKey: 'one' }, { dataKey: 'two' }],
      xAxis: { dataKey: 'category' }
    }

    expect(getMissingRequiredFields(invalidConfig)).toEqual([
      { target: 'data-series', section: 'Data Series', field: 'Exactly 1 Data Series' }
    ])
    expect(missingRequiredSections(invalidConfig)).toBe(false)
    expect(getMissingRequiredFields({ ...invalidConfig, series: [{ dataKey: 'one' }] })).toEqual([])
  })

  it('reports each Sankey column while preserving the legacy runtime exemption', () => {
    const config = {
      visualizationType: 'Sankey',
      data: [{ from: 'A', to: 'B', amount: 10 }],
      sankey: { columns: { source: 'from', target: 'target', value: '' } }
    }

    expect(getMissingRequiredFields(config)).toEqual([
      {
        target: 'sankey-target',
        sectionTarget: 'sankey-columns',
        section: 'Sankey',
        field: 'Target Column'
      },
      {
        target: 'sankey-value',
        sectionTarget: 'sankey-columns',
        section: 'Sankey',
        field: 'Value Column'
      }
    ])
    expect(missingRequiredSections(config)).toBe(false)
  })

  it('treats the initial Sankey defaults as missing when they are not imported columns', () => {
    const config = {
      visualizationType: 'Sankey',
      data: [{ example_source: 'A', example_target: 'B', example_value: 10 }],
      sankey: { columns: { source: 'source', target: 'target', value: 'value' } }
    }

    expect(getMissingRequiredFields(config).map(field => field.field)).toEqual([
      'Source Column',
      'Target Column',
      'Value Column'
    ])
    expect(missingRequiredSections(config)).toBe(false)
  })

  it('reports Dendrogram mappings while preserving the legacy runtime check', () => {
    const config = {
      visualizationType: 'Dendrogram',
      data: [{ node: 'Public Health', parent: '' }],
      dendrogram: { columns: { node: '', parent: 'missing' } }
    }

    expect(getMissingRequiredFields(config)).toEqual([
      {
        target: 'dendrogram-node',
        sectionTarget: 'dendrogram-columns',
        section: 'Dendrogram',
        field: 'Node ID Column'
      },
      {
        target: 'dendrogram-parent',
        sectionTarget: 'dendrogram-columns',
        section: 'Dendrogram',
        field: 'Parent ID Column'
      }
    ])
    expect(missingRequiredSections(config)).toBe(true)
    expect(
      getMissingRequiredFields({
        ...config,
        dendrogram: { columns: { node: 'node', parent: 'parent' } }
      })
    ).toEqual([])
    expect(
      missingRequiredSections({
        ...config,
        dendrogram: { columns: { node: 'node', parent: 'missing' } }
      })
    ).toBe(false)
  })

  it('reports every required Forest Plot selection while preserving the legacy runtime exemption', () => {
    const config = {
      visualizationType: 'Forest Plot',
      data: [{ Study: 'A', Estimate: 1, Lower: 0, Upper: 2 }],
      xAxis: { dataKey: '' },
      forestPlot: { type: '', estimateField: '', lower: '', upper: '' }
    }

    expect(getMissingRequiredFields(config).map(field => field.field)).toEqual([
      'Study Column',
      'Forest Plot Type',
      'Point Estimate Column',
      'Lower CI Column',
      'Upper CI Column'
    ])
    expect(missingRequiredSections(config)).toBe(false)
  })

  it('accepts complete Forest Plot selections and catches mappings absent from imported data', () => {
    const config = {
      visualizationType: 'Forest Plot',
      data: [{ Study: 'A', Estimate: 1, Lower: 0, Upper: 2 }],
      xAxis: { dataKey: 'Study' },
      forestPlot: { type: 'Linear', estimateField: 'Estimate', lower: 'Lower', upper: 'Upper' }
    }

    expect(getMissingRequiredFields(config)).toEqual([])
    expect(getMissingRequiredFields({ ...config, forestPlot: { ...config.forestPlot, lower: 'Missing' } })).toEqual([
      {
        target: 'forest-lower',
        sectionTarget: 'forest-plot-settings',
        section: 'Forest Plot Settings',
        field: 'Lower CI Column'
      }
    ])
  })
})
