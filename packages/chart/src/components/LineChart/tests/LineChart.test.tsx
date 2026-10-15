import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { scaleBand, scaleLinear } from '@visx/scale'
import LineChart from '..'
import ConfigContext from '../../../ConfigContext'
import { handleLineType } from '../../../helpers/handleLineType'
import { createMockChartContext } from '../../LinearChart/tests/mockConfigContext'

const data = [
  { Date: 'Jan', value: 10 },
  { Date: 'Feb', value: 20 }
]

const lineEffectData = [
  { Date: 'Jan', value: 10, Coverage: '' },
  { Date: 'Feb', value: 20, Coverage: 'Limited Coverage' },
  { Date: 'Mar', value: 30, Coverage: '' }
]

const getDynamicCategoryConfig = () => {
  const series = ['Alpha', 'Beta'].map(dataKey => ({
    dataKey,
    originalDataKey: 'Value',
    dynamicCategory: 'Category',
    type: 'Line',
    axis: 'Left',
    lineType: 'curveLinear'
  }))

  return {
    series,
    runtime: {
      ...createMockChartContext().config.runtime,
      series,
      seriesKeys: ['Alpha', 'Beta'],
      lineSeriesKeys: ['Alpha', 'Beta'],
      seriesLabels: { Alpha: 'Alpha', Beta: 'Beta' }
    }
  }
}

const dynamicCategoryColorScale = label => (label === 'Alpha' ? '#005ea8' : '#a83279')

const getPathXCoordinates = (path: Element | null) =>
  Array.from(path?.getAttribute('d')?.matchAll(/[ML](-?\d+(?:\.\d+)?)/g) || [], match => Number(match[1]))

const renderLineChart = (configOverrides = {}, contextOverrides = {}, xScaleOverride?) => {
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

  const xScale = xScaleOverride || scaleBand({ domain: transformedData.map(row => row.Date), range: [0, 400] })
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

const renderLineChartWithPathMeasurements = (configOverrides, contextOverrides) => {
  const pathPrototype = Object.getPrototypeOf(document.createElementNS('http://www.w3.org/2000/svg', 'path'))
  const totalLengthDescriptor = Object.getOwnPropertyDescriptor(pathPrototype, 'getTotalLength')
  const pointAtLengthDescriptor = Object.getOwnPropertyDescriptor(pathPrototype, 'getPointAtLength')

  Object.defineProperty(pathPrototype, 'getTotalLength', { configurable: true, value: () => 2 })
  Object.defineProperty(pathPrototype, 'getPointAtLength', {
    configurable: true,
    value: distance => ({
      x: 66.66666666666667 + distance * 133.33333333333334,
      y: 270 - distance * 30
    })
  })

  try {
    return renderLineChart(configOverrides, contextOverrides)
  } finally {
    if (totalLengthDescriptor) {
      Object.defineProperty(pathPrototype, 'getTotalLength', totalLengthDescriptor)
    } else {
      delete pathPrototype.getTotalLength
    }

    if (pointAtLengthDescriptor) {
      Object.defineProperty(pathPrototype, 'getPointAtLength', pointAtLengthDescriptor)
    } else {
      delete pathPrototype.getPointAtLength
    }
  }
}

describe('LineChart', () => {
  it('does not render confidence interval areas when confidenceKeys is empty', () => {
    const { container } = renderLineChart()

    expect(container.querySelectorAll('path.visx-linepath')).toHaveLength(1)
    expect(container.querySelectorAll('path.visx-area-closed')).toHaveLength(0)
  })

  it('starts the effect segment at its matching row', () => {
    const { container } = renderLineChartWithPathMeasurements(
      {
        preliminaryData: [
          {
            type: 'effect',
            seriesKeys: ['value'],
            label: 'Limited Coverage',
            column: 'Coverage',
            value: 'Limited Coverage',
            style: 'dashed'
          }
        ]
      },
      {
        tableData: lineEffectData,
        transformedData: lineEffectData,
        handleLineType: style => (style === 'dashed' ? '5 5' : '')
      }
    )
    const dashedPath = container.querySelector('path[stroke-dasharray="5 5"]')

    expect(dashedPath).not.toBeNull()
    expect(dashedPath.getAttribute('d')).toMatch(/^M\s*200[, ]/)
  })

  it('does not render an effect segment for a matching final row', () => {
    const dataWithFinalEffect = lineEffectData.map((row, index) => ({
      ...row,
      Coverage: index === lineEffectData.length - 1 ? 'Limited Coverage' : ''
    }))
    const { container } = renderLineChartWithPathMeasurements(
      {
        preliminaryData: [
          {
            type: 'effect',
            seriesKeys: ['value'],
            label: 'Limited Coverage',
            column: 'Coverage',
            value: 'Limited Coverage',
            style: 'dashed'
          }
        ]
      },
      {
        tableData: dataWithFinalEffect,
        transformedData: dataWithFinalEffect,
        handleLineType: style => (style === 'dashed' ? '5 5' : '')
      }
    )

    expect(container.querySelector('path[stroke-dasharray="5 5"]')).toBeNull()
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

  it('renders an effect marker only for its selected dynamic category in the brushed rows', () => {
    const tableData = [
      { Date: 'Jan', Category: 'Alpha', Value: 10, Coverage: 'Standard' },
      { Date: 'Jan', Category: 'Beta', Value: 15, Coverage: 'Standard' },
      { Date: 'Feb', Category: 'Alpha', Value: 20, Coverage: 'Limited Coverage' },
      { Date: 'Feb', Category: 'Beta', Value: 25, Coverage: 'Limited Coverage' }
    ]
    const brushData = tableData.filter(row => row.Date === 'Feb')

    const { container } = renderLineChart(
      {
        ...getDynamicCategoryConfig(),
        preliminaryData: [
          {
            type: 'effect',
            seriesKeys: ['Alpha'],
            label: 'Limited Coverage',
            column: 'Coverage',
            value: 'Limited Coverage',
            style: 'Open Circles',
            circleSize: 4
          }
        ]
      },
      {
        brushData,
        colorScale: dynamicCategoryColorScale,
        tableData,
        transformedData: brushData,
        yAxisDomainData: tableData
      }
    )

    const effectCircles = Array.from(container.querySelectorAll('.line-chart-group > g > circle[r="4"]'))

    expect(effectCircles).toHaveLength(1)
    expect(effectCircles[0]).toHaveAttribute('stroke', '#005ea8')
    expect(Number.isFinite(Number(effectCircles[0].getAttribute('cx')))).toBe(true)
  })

  it('renders a suppression segment only for its selected dynamic category in the brushed rows', () => {
    const tableData = [
      { Date: 'Jan', Category: 'Alpha', Value: 10 },
      { Date: 'Jan', Category: 'Beta', Value: 15 },
      { Date: 'Feb', Category: 'Alpha', Value: 'Suppressed' },
      { Date: 'Feb', Category: 'Beta', Value: 'Suppressed' },
      { Date: 'Mar', Category: 'Alpha', Value: 30 },
      { Date: 'Mar', Category: 'Beta', Value: 35 },
      { Date: 'Apr', Category: 'Alpha', Value: 40 },
      { Date: 'Apr', Category: 'Beta', Value: 45 }
    ]
    const brushData = tableData.filter(row => row.Date !== 'Apr')
    const transformedData = brushData.map(row => ({
      ...row,
      Value: row.Value === 'Suppressed' ? '' : row.Value
    }))

    const { container } = renderLineChart(
      {
        ...getDynamicCategoryConfig(),
        preliminaryData: [
          {
            type: 'suppression',
            seriesKeys: ['Alpha'],
            label: 'Suppressed',
            column: 'Alpha',
            value: 'Suppressed',
            style: 'dashed',
            hideLineStyle: false
          }
        ]
      },
      {
        brushData,
        colorScale: dynamicCategoryColorScale,
        tableData,
        transformedData,
        yAxisDomainData: tableData,
        handleLineType: style => (style === 'dashed' ? '5 5' : '')
      }
    )

    const suppressionSegments = Array.from(container.querySelectorAll('path[stroke-dasharray="5 5"]'))

    expect(suppressionSegments).toHaveLength(1)
    expect(suppressionSegments[0]).toHaveAttribute('stroke', '#005ea8')
    expect(suppressionSegments[0].getAttribute('d')).not.toContain('NaN')
  })

  it.each([
    ['Line', '0'],
    ['dashed-sm', '5 5'],
    ['dashed-md', '10 5'],
    ['dashed-lg', '15 5']
  ])('preserves the %s series style and weight during Line race playback', (type, dashPattern) => {
    const series = [{ dataKey: 'value', type, weight: 7, axis: 'Left', lineType: 'curveLinear' }]
    const { container } = renderLineChart(
      {
        series,
        runtime: {
          ...createMockChartContext().config.runtime,
          series,
          seriesKeys: ['value'],
          lineSeriesKeys: ['value'],
          seriesLabels: { value: 'Value' }
        }
      },
      { handleLineType, lineRaceProgress: 0.4 }
    )

    const visiblePath = container.querySelector('[data-line-race-series-path]')
    const revealPath = container.querySelector('[data-line-race-reveal-path]')

    expect(visiblePath).toHaveAttribute('stroke-dasharray', dashPattern)
    expect(visiblePath).toHaveAttribute('stroke-width', '7')
    expect(visiblePath?.getAttribute('mask')).toMatch(/^url\(#line-race-reveal-[^)]+\)$/)
    expect(visiblePath).not.toHaveAttribute('pathLength')
    expect(revealPath).toHaveAttribute('stroke-dasharray', '0.4 1')
    expect(revealPath).toHaveAttribute('pathLength', '1')
  })

  it.each([
    [0, '0 1'],
    [1, '1 1'],
    [-0.5, '0 1'],
    [1.5, '1 1'],
    [Number.NaN, '0 1']
  ])('normalizes Line race progress %s without changing authored styling', (progress, revealPattern) => {
    const series = [{ dataKey: 'value', type: 'dashed-sm', weight: 4, axis: 'Left', lineType: 'curveLinear' }]
    const { container } = renderLineChart(
      {
        series,
        runtime: {
          ...createMockChartContext().config.runtime,
          series,
          seriesKeys: ['value'],
          lineSeriesKeys: ['value'],
          seriesLabels: { value: 'Value' }
        }
      },
      { handleLineType, lineRaceProgress: progress }
    )

    expect(container.querySelector('[data-line-race-series-path]')).toHaveAttribute('stroke-dasharray', '5 5')
    expect(container.querySelector('[data-line-race-series-path]')).toHaveAttribute('stroke-width', '4')
    expect(container.querySelector('[data-line-race-reveal-path]')).toHaveAttribute('stroke-dasharray', revealPattern)
  })

  it('uses independent reveal masks for differently styled Line race series', () => {
    const raceData = [
      { Date: 'Jan', alpha: 10, beta: 15 },
      { Date: 'Feb', alpha: 20, beta: 25 }
    ]
    const series = [
      { dataKey: 'alpha', type: 'Line', weight: 3, axis: 'Left', lineType: 'curveLinear' },
      { dataKey: 'beta', type: 'dashed-md', weight: 8, axis: 'Left', lineType: 'curveLinear' }
    ]
    const { container } = renderLineChart(
      {
        series,
        runtime: {
          ...createMockChartContext().config.runtime,
          series,
          seriesKeys: ['alpha', 'beta'],
          lineSeriesKeys: ['alpha', 'beta'],
          seriesLabels: { alpha: 'Alpha', beta: 'Beta' }
        }
      },
      {
        handleLineType,
        lineRaceProgress: 0.5,
        tableData: raceData,
        transformedData: raceData,
        yAxisDomainData: raceData
      }
    )

    const visiblePaths = Array.from(container.querySelectorAll('[data-line-race-series-path]'))
    const maskReferences = visiblePaths.map(path => path.getAttribute('mask'))

    expect(visiblePaths[0]).toHaveAttribute('stroke-dasharray', '0')
    expect(visiblePaths[0]).toHaveAttribute('stroke-width', '3')
    expect(visiblePaths[1]).toHaveAttribute('stroke-dasharray', '10 5')
    expect(visiblePaths[1]).toHaveAttribute('stroke-width', '8')
    expect(new Set(maskReferences).size).toBe(2)
    maskReferences.forEach(reference => {
      const maskId = reference?.match(/^url\(#(.+)\)$/)?.[1]
      expect(maskId).toBeTruthy()
      expect(container.querySelector(`mask[id="${maskId}"]`)).not.toBeNull()
    })
  })

  it('applies one collision-safe reveal mask per dynamic-category Line race series', () => {
    const raceData = [
      { Date: 'Jan', Category: 'Alpha', Value: 10 },
      { Date: 'Jan', Category: 'Beta', Value: 15 },
      { Date: 'Feb', Category: 'Alpha', Value: 20 },
      { Date: 'Feb', Category: 'Beta', Value: 25 }
    ]
    const dynamicConfig = getDynamicCategoryConfig()
    const series = dynamicConfig.series.map(item => ({ ...item, type: 'dashed-lg', weight: 6 }))
    const { container } = renderLineChart(
      {
        ...dynamicConfig,
        series,
        runtime: { ...dynamicConfig.runtime, series }
      },
      {
        colorScale: dynamicCategoryColorScale,
        handleLineType,
        lineRaceProgress: 0.75,
        tableData: raceData,
        transformedData: raceData,
        yAxisDomainData: raceData
      }
    )

    const visiblePaths = Array.from(container.querySelectorAll('[data-line-race-series-path]'))
    const maskReferences = visiblePaths.map(path => path.getAttribute('mask'))

    expect(visiblePaths).toHaveLength(2)
    visiblePaths.forEach(path => {
      expect(path).toHaveAttribute('stroke-dasharray', '15 5')
      expect(path).toHaveAttribute('stroke-width', '6')
    })
    expect(new Set(maskReferences).size).toBe(2)
  })

  it.each([
    ['date band domain', 'date', scaleBand({ domain: ['2022-01-01', '2021-01-01', '2020-01-01'], range: [0, 400] })],
    ['date-time reversed range', 'date-time', scaleLinear({ domain: [2020, 2022], range: [400, 0] })]
  ])('orders newest-first Line race geometry by rendered position for a %s', (_strategy, axisType, xScale) => {
    const raceData = [
      { Date: axisType === 'date' ? '2020-01-01' : 2020, value: 10 },
      { Date: axisType === 'date' ? '2021-01-01' : 2021, value: 20 },
      { Date: axisType === 'date' ? '2022-01-01' : 2022, value: 30 }
    ]
    const sourceOrder = raceData.map(row => row.Date)
    const { container } = renderLineChart(
      { xAxis: { ...createMockChartContext().config.xAxis, type: axisType, dataKey: 'Date' } },
      {
        lineRaceProgress: 0.5,
        tableData: raceData,
        transformedData: raceData,
        yAxisDomainData: raceData
      },
      xScale
    )

    const visiblePath = container.querySelector('[data-line-race-series-path]')
    const revealPath = container.querySelector('[data-line-race-reveal-path]')
    const xCoordinates = getPathXCoordinates(visiblePath)

    expect(xCoordinates).toHaveLength(3)
    expect(xCoordinates[0]).toBeLessThan(xCoordinates[1])
    expect(xCoordinates[1]).toBeLessThan(xCoordinates[2])
    expect(revealPath?.getAttribute('d')).toBe(visiblePath?.getAttribute('d'))
    expect(raceData.map(row => row.Date)).toEqual(sourceOrder)
  })

  it('orders categorical Line race geometry by the rendered custom category order', () => {
    const raceData = [
      { Date: 'Jan', value: 10 },
      { Date: 'Feb', value: 20 },
      { Date: 'Mar', value: 30 }
    ]
    const sourceOrder = raceData.map(row => row.Date)
    const customOrderScale = scaleBand({ domain: ['Mar', 'Jan', 'Feb'], range: [0, 400] })
    const { container } = renderLineChart(
      {},
      {
        lineRaceProgress: 0.5,
        tableData: raceData,
        transformedData: raceData,
        yAxisDomainData: raceData
      },
      customOrderScale
    )

    const visiblePath = container.querySelector('[data-line-race-series-path]')
    const revealPath = container.querySelector('[data-line-race-reveal-path]')
    const xCoordinates = getPathXCoordinates(visiblePath)

    expect(xCoordinates).toHaveLength(3)
    expect(xCoordinates[0]).toBeLessThan(xCoordinates[1])
    expect(xCoordinates[1]).toBeLessThan(xCoordinates[2])
    expect(revealPath?.getAttribute('d')).toBe(visiblePath?.getAttribute('d'))
    expect(raceData.map(row => row.Date)).toEqual(sourceOrder)
  })
})
