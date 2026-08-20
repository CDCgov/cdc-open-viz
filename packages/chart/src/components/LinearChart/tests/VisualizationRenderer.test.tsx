import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { scaleBand, scaleLinear } from '@visx/scale'
import VisualizationRenderer from '../VisualizationRenderer'
import ConfigContext from '../../../ConfigContext'
import { createMockChartContext } from './mockConfigContext'

vi.mock('../../AreaChart', () => ({
  AreaChartStacked: () => <g data-testid='area-chart-stacked' />
}))

vi.mock('../../BarChart', () => ({
  default: () => <g data-testid='bar-chart' />
}))

vi.mock('../../LineChart', () => ({
  default: () => <g className='line-chart-group' data-testid='line-chart' />
}))

vi.mock('../../Forecasting', () => ({
  default: () => <g data-testid='forecasting' />
}))

vi.mock('../../BoxPlot/BoxPlot.Vertical', () => ({
  default: () => <g data-testid='box-plot-vertical' />
}))

vi.mock('../../BoxPlot/BoxPlot.Horizontal', () => ({
  default: () => <g data-testid='box-plot-horizontal' />
}))

vi.mock('../../DeviationBar', () => ({
  default: () => <g data-testid='deviation-bar' />
}))

vi.mock('../../ForestPlot', () => ({
  default: () => <g data-testid='forest-plot' />
}))

vi.mock('../../HorizonChart', () => ({
  HorizonChart: () => <g data-testid='horizon-chart' />
}))

vi.mock('../../PairedBarChart', () => ({
  default: () => <g data-testid='paired-bar-chart' />
}))

vi.mock('../../ScatterPlot', () => ({
  default: () => <g data-testid='scatter-plot' />
}))

vi.mock('../../WarmingStripes', () => ({
  default: () => <g data-testid='warming-stripes' />
}))

const renderVisualizationRenderer = (configOverrides = {}) => {
  const context = createMockChartContext(configOverrides)
  const xScale = scaleBand({ domain: ['Jan', 'Feb'], range: [0, 400] })
  const yScale = scaleLinear({ domain: [0, 100], range: [300, 0] })

  return render(
    <ConfigContext.Provider value={context}>
      <svg>
        <VisualizationRenderer
          xScale={xScale}
          yScale={yScale}
          xMax={400}
          yMax={300}
          seriesScale={undefined}
          xScaleNoPadding={xScale}
          min={0}
          max={100}
          parentWidth={500}
          yAxisWidth={50}
          forestHeight={300}
          animatedChart={false}
          tooltipData={undefined}
          showTooltip={undefined}
          handleTooltipMouseOver={() => {}}
          handleTooltipMouseOff={() => {}}
          handleTooltipClick={() => {}}
          getXAxisData={d => d.Date}
          getYAxisData={(d, seriesKey) => d[seriesKey]}
          svgRef={{ current: null }}
          forestPlotRightLabelRef={{ current: null }}
        />
      </svg>
    </ConfigContext.Provider>
  )
}

describe('VisualizationRenderer', () => {
  it('renders only the Combo layers represented by runtime series keys', () => {
    const { container } = renderVisualizationRenderer({
      visualizationType: 'Combo',
      runtime: {
        ...createMockChartContext().config.runtime,
        barSeriesKeys: ['cases'],
        lineSeriesKeys: ['coverage'],
        areaSeriesKeys: [],
        forecastingSeriesKeys: []
      }
    })

    expect(container.querySelectorAll('[data-testid="bar-chart"]')).toHaveLength(1)
    expect(container.querySelectorAll('.line-chart-group')).toHaveLength(1)
    expect(container.querySelectorAll('[data-testid="area-chart-stacked"]')).toHaveLength(0)
    expect(container.querySelectorAll('[data-testid="forecasting"]')).toHaveLength(0)
  })

  it('does not render BarChart or LineChart for Combo when those runtime buckets are empty', () => {
    const { container } = renderVisualizationRenderer({
      visualizationType: 'Combo',
      runtime: {
        ...createMockChartContext().config.runtime,
        barSeriesKeys: [],
        lineSeriesKeys: [],
        areaSeriesKeys: [{ dataKey: 'area' }],
        forecastingSeriesKeys: [{ dataKey: 'forecast' }]
      }
    })

    expect(container.querySelectorAll('[data-testid="bar-chart"]')).toHaveLength(0)
    expect(container.querySelectorAll('.line-chart-group')).toHaveLength(0)
    expect(container.querySelectorAll('[data-testid="area-chart-stacked"]')).toHaveLength(1)
    expect(container.querySelectorAll('[data-testid="forecasting"]')).toHaveLength(1)
  })

  it('renders the Bump Chart line layer once', () => {
    const { container } = renderVisualizationRenderer({ visualizationType: 'Bump Chart' })

    expect(container.querySelectorAll('.line-chart-group')).toHaveLength(1)
  })

  it('keeps non-Combo Bar rendering unchanged', () => {
    const { container } = renderVisualizationRenderer({ visualizationType: 'Bar' })

    expect(container.querySelectorAll('[data-testid="bar-chart"]')).toHaveLength(1)
  })
})
