import defaults from '../../data/initial-state'
import { createNewChartConfig } from '../createNewChartConfig'
import { CURRENT_COVE_CONFIG_VERSION } from '@cdc/core/helpers/coveUpdateWorker'

describe('createNewChartConfig', () => {
  it('deeply combines starter settings with current chart defaults', () => {
    const starterConfig = {
      type: 'chart',
      visualizationType: 'Bar',
      xAxis: { type: 'categorical', size: 100 },
      filters: []
    }

    const config = createNewChartConfig(starterConfig)

    expect(config).toMatchObject({
      type: 'chart',
      visualizationType: 'Bar',
      version: CURRENT_COVE_CONFIG_VERSION,
      titleStyle: 'small',
      barThickness: defaults.barThickness,
      xAxis: {
        type: 'categorical',
        size: 100,
        numTicks: 6,
        viewportNumTicks: { xs: 4, xxs: 4 }
      },
      yAxis: {
        titlePlacement: 'top',
        numTicks: 4,
        gridLines: true,
        hideAxis: true,
        hideTicks: true,
        autoMaxStrategy: 'clean-top-tick'
      },
      legend: { position: 'top', unified: true },
      table: { download: true, expanded: false, show: true, stickyFirstColumn: false },
      dataFormat: { commas: true }
    })
    expect(config.filters).toEqual([])
    expect(starterConfig).toEqual({
      type: 'chart',
      visualizationType: 'Bar',
      xAxis: { type: 'categorical', size: 100 },
      filters: []
    })
  })

  it.each([
    ['Area Chart', { visualizationSubType: 'stacked' }],
    ['Forecasting', { xAxis: { type: 'date', dateParseFormat: '%Y-%m-%d', dateDisplayFormat: '%b. %-d %Y' } }],
    ['HeatMap', { yAxis: { type: 'categorical', titlePlacement: 'top' }, legend: { position: 'top' } }],
    ['Horizon Chart', { horizon: { numLayers: 4, mode: 'offset', bandGap: 15, bottomPadding: 15 } }],
    ['Box Plot', { yAxis: { labelPlacement: 'On Date/Category Axis' } }],
    ['Paired Bar', { orientation: 'horizontal' }],
    ['Deviation Bar', { orientation: 'horizontal' }],
    ['Bump Chart', { xAxis: { type: 'date-time' } }]
  ])('authors the %s stable type contract', (visualizationType, expected) => {
    expect(createNewChartConfig({ type: 'chart', visualizationType })).toMatchObject(expected)
  })

  it('uses dashboard-specific table visibility', () => {
    const config = createNewChartConfig({ type: 'chart', visualizationType: 'Bar' }, { isDashboard: true })

    expect(config.table.show).toBe(false)
    expect(config.table.download).toBe(false)
  })

  it('preserves an explicit table download opt-out', () => {
    const config = createNewChartConfig({
      type: 'chart',
      visualizationType: 'Bar',
      table: { download: false }
    })

    expect(config.table.download).toBe(false)
  })

  it('preserves an explicit unified legend opt-out', () => {
    const config = createNewChartConfig({
      type: 'chart',
      visualizationType: 'Bar',
      legend: { unified: false }
    })

    expect(config.legend.unified).toBe(false)
  })

  it('uses compact label gaps and automatic ticks for a new HeatMap', () => {
    const config = createNewChartConfig({ type: 'chart', visualizationType: 'HeatMap' })

    expect(config.heatmap).toMatchObject({
      rowLabelGap: 0,
      columnLabelGap: 15,
      horizontalScroll: false,
      minColumnWidth: 44
    })
    expect(config.xAxis.manual).toBe(false)
    expect(config.xAxis.numTicks).toBeUndefined()
    expect(config.xAxis.viewportNumTicks).toEqual({})
  })

  it.each([
    ['Bar', 'sequential_blue', false],
    ['Line', 'qualitative_standard', false],
    ['Horizon Chart', 'sequential_blue', false],
    ['HeatMap', 'sequential_blue', false],
    ['Sankey', 'sequential_bluereverse', true]
  ])('uses the new-chart palette for %s charts', (visualizationType, name, isReversed) => {
    const config = createNewChartConfig({ type: 'chart', visualizationType })

    expect(config.general.palette).toMatchObject({ name, isReversed, version: '2.1' })
  })

  it('preserves an explicit palette instead of replacing it with the chart-type default', () => {
    const config = createNewChartConfig({
      type: 'chart',
      visualizationType: 'Line',
      general: { palette: { name: 'qualitative_bold', isReversed: true, version: '2.1' } }
    })

    expect(config.general.palette).toMatchObject({ name: 'qualitative_bold', isReversed: true, version: '2.1' })
    expect(defaults.general.palette.name).toBe('sequential_blue')
  })
})
