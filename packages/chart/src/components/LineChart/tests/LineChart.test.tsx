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

const renderLineChart = (configOverrides = {}, contextOverrides = {}) => {
  const series = [{ dataKey: 'value', type: 'Line', axis: 'Left', lineType: 'curveLinear' }]
  const transformedData = (contextOverrides as any).transformedData ?? data
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
      yAxisDomainData: data,
      ...contextOverrides
    } as any
  )

  const xScale = scaleBand({ domain: transformedData.map(row => row.Date), range: [0, 400] })
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

  it('renders effect circles only for rows in the brushed data subset', () => {
    const tableData = [
      { Date: 'Jan', value: 10, Coverage: 'Limited Coverage' },
      { Date: 'Feb', value: 20, Coverage: 'Limited Coverage' }
    ]
    const transformedData = [tableData[1]]

    const { container } = renderLineChart(
      {
        preliminaryData: [
          {
            type: 'effect',
            seriesKeys: ['value'],
            label: 'Limited Coverage',
            column: 'Coverage',
            value: 'Limited Coverage',
            style: 'Open Circles',
            circleSize: 4
          }
        ]
      },
      { brushData: transformedData, tableData, transformedData, yAxisDomainData: tableData }
    )

    const effectCircles = Array.from(container.querySelectorAll('.line-chart-group > g > circle'))

    expect(effectCircles).toHaveLength(1)
    expect(Number.isFinite(Number(effectCircles[0].getAttribute('cx')))).toBe(true)
  })

  it('does not render suppression segments for rows outside the brushed data subset', () => {
    const tableData = [
      { Date: 'Jan', value: 'Suppressed' },
      { Date: 'Feb', value: 20 },
      { Date: 'Mar', value: 30 }
    ]
    const brushData = tableData.slice(1)

    const { container } = renderLineChart(
      {
        preliminaryData: [
          {
            type: 'suppression',
            seriesKeys: ['value'],
            label: 'Suppressed',
            column: 'value',
            value: 'Suppressed',
            style: 'dashed',
            hideLineStyle: false
          }
        ]
      },
      {
        brushData,
        tableData,
        transformedData: brushData,
        yAxisDomainData: tableData,
        handleLineType: style => (style === 'dashed' ? '5 5' : '')
      }
    )

    expect(container.querySelectorAll('path[stroke-dasharray="5 5"]')).toHaveLength(0)
  })

  it('uses raw brushed rows to render selected suppression segments', () => {
    const tableData = [
      { Date: 'Jan', value: 10 },
      { Date: 'Feb', value: 'Suppressed' },
      { Date: 'Mar', value: 30 }
    ]
    const brushData = tableData.slice(1)
    const transformedData = brushData.map(row => ({ ...row, value: row.value === 'Suppressed' ? '' : row.value }))

    const { container } = renderLineChart(
      {
        preliminaryData: [
          {
            type: 'suppression',
            seriesKeys: ['value'],
            label: 'Suppressed',
            column: 'value',
            value: 'Suppressed',
            style: 'dashed',
            hideLineStyle: false
          }
        ]
      },
      {
        brushData,
        tableData,
        transformedData,
        yAxisDomainData: tableData,
        handleLineType: style => (style === 'dashed' ? '5 5' : '')
      }
    )

    const suppressionSegments = Array.from(container.querySelectorAll('path[stroke-dasharray="5 5"]'))

    expect(suppressionSegments).toHaveLength(1)
    expect(suppressionSegments[0].getAttribute('d')).not.toContain('NaN')
  })
})
