import defaults, { DEFAULT_BAR_THICKNESS } from '../../data/initial-state'
import { createNewChartConfig } from '../createNewChartConfig'

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
      titleStyle: 'small',
      barThickness: DEFAULT_BAR_THICKNESS,
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
      legend: { position: 'top' },
      table: { expanded: false, show: true },
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

  it('uses dashboard-specific table visibility', () => {
    const config = createNewChartConfig({ type: 'chart', visualizationType: 'Bar' }, { isDashboard: true })

    expect(config.table.show).toBe(false)
  })

  it.each([
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
