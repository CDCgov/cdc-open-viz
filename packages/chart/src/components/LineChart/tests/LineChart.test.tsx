import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { scaleBand, scaleLinear } from '@visx/scale'
import LineChart from '..'
import ConfigContext from '../../../ConfigContext'
import { createMockChartContext } from '../../LinearChart/tests/mockConfigContext'

const data = [
  { Date: 'Jan', value: 10 },
  { Date: 'Feb', value: 20 }
]

const renderLineChart = (configOverrides = {}) => {
  const series = [{ dataKey: 'value', type: 'Line', axis: 'Left', lineType: 'curveLinear' }]
  const context = createMockChartContext(
    {
      visualizationType: 'Line',
      preliminaryData: [],
      confidenceKeys: {},
      visual: {
        lineDatapointSymbol: 'circle',
        maximumShapeAmount: 6
      },
      lineDatapointStyle: 'hover',
      lineDatapointColor: 'Same as Line',
      xAxis: {
        ...createMockChartContext().config.xAxis,
        type: 'categorical',
        dataKey: 'Date'
      },
      series,
      runtime: {
        ...createMockChartContext().config.runtime,
        series,
        seriesKeys: ['value'],
        lineSeriesKeys: ['value'],
        seriesLabels: { value: 'Value' }
      },
      ...configOverrides
    },
    {
      colorScale: () => '#005ea8',
      tableData: data,
      transformedData: data,
      yAxisDomainData: data
    } as any
  )

  const xScale = scaleBand({ domain: ['Jan', 'Feb'], range: [0, 400] })
  const yScale = scaleLinear({ domain: [0, 100], range: [300, 0] })

  return render(
    <ConfigContext.Provider value={context as any}>
      <svg>
        <LineChart
          xScale={xScale}
          yScale={yScale}
          yAxisWidth={50}
          getXAxisData={d => d.Date}
          getYAxisData={(d, seriesKey) => Number(d[seriesKey])}
          xMax={400}
          yMax={300}
          handleTooltipMouseOver={() => {}}
          handleTooltipMouseOff={() => {}}
          handleTooltipClick={() => {}}
          tooltipData={undefined}
          showTooltip={false}
          seriesStyle={undefined as any}
          svgRef={{ current: null }}
        />
      </svg>
    </ConfigContext.Provider>
  )
}

describe('LineChart', () => {
  it('does not render confidence interval areas when confidenceKeys is empty', () => {
    const { container } = renderLineChart()

    expect(container.querySelectorAll('path.visx-linepath')).toHaveLength(1)
    expect(container.querySelectorAll('path.visx-area-closed')).toHaveLength(0)
  })
})
