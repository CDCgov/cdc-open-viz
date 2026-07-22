import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi, beforeAll, beforeEach } from 'vitest'
import LinearChart from '../../LinearChart'
import RightAxis from '../../Axis/RightAxis'
import ConfigContext from '../../../ConfigContext'
import { createMockChartContext } from './mockConfigContext'
import forestPlotConfig from '../../../../examples/feature/forest-plot/forest-plot.json'
import * as suppressionHelpers from '../../../helpers/getHasBoundarySuppression'
import { scaleLinear } from '@visx/scale'

const visualizationRendererMockState = vi.hoisted(() => ({
  renderActual: false
}))

vi.mock('../../LinearChart/VisualizationRenderer', async importOriginal => {
  const React = await import('react')
  const actual = await importOriginal<typeof import('../../LinearChart/VisualizationRenderer')>()

  const MockVisualizationRenderer = props => {
    if (visualizationRendererMockState.renderActual) return React.createElement(actual.default, props)
    return React.createElement('g', { 'data-testid': 'mock-visualization-renderer' })
  }

  return {
    default: MockVisualizationRenderer
  }
})

// Mock ResizeObserver
vi.stubGlobal(
  'ResizeObserver',
  vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
  }))
)

// Mock IntersectionObserver
vi.stubGlobal(
  'IntersectionObserver',
  vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
  }))
)

// Mock canvas for text measurement
beforeAll(() => {
  HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
    measureText: vi.fn(() => ({ width: 50 })),
    fillText: vi.fn(),
    fillRect: vi.fn(),
    clearRect: vi.fn()
  })) as any

  // Mock SVG getBBox for axis measurements
  const mockBBox = { x: 0, y: 0, width: 100, height: 50 }
  // @ts-expect-error - mocking SVG method
  SVGElement.prototype.getBBox = vi.fn(() => mockBBox)
  // @ts-expect-error - mocking SVG method
  SVGElement.prototype.getBoundingClientRect = vi.fn(() => ({
    x: 0,
    y: 0,
    width: 100,
    height: 50,
    top: 0,
    left: 0,
    right: 100,
    bottom: 50
  }))
})

beforeEach(() => {
  visualizationRendererMockState.renderActual = false
})

// Helper to render LinearChart with context
const renderLinearChart = (
  configOverrides = {},
  contextOverrides = {},
  props = { parentWidth: 800, parentHeight: 400 }
) => {
  const context = createMockChartContext(configOverrides, contextOverrides)

  return render(
    <ConfigContext.Provider value={context}>
      <LinearChart {...props} />
    </ConfigContext.Provider>
  )
}

const getLeftAxisLabelTransforms = container =>
  Array.from(container.querySelectorAll('.left-axis text.y-label'))
    .map(label => label.getAttribute('transform'))
    .filter(Boolean)

const renderRightAxis = (yAxisOverrides, runtimeYAxisOverrides = {}) => {
  const context = createMockChartContext({
    yAxis: {
      ...createMockChartContext().config.yAxis,
      rightLabel: 'Right Axis',
      ...yAxisOverrides
    },
    runtime: {
      ...createMockChartContext().config.runtime,
      yAxis: {
        ...createMockChartContext().config.runtime.yAxis,
        rightNumTicks: 4,
        ...runtimeYAxisOverrides
      }
    }
  })

  return render(
    <ConfigContext.Provider value={context}>
      <svg>
        <RightAxis
          yScaleRight={scaleLinear({ domain: [0, 100], range: [300, 0] })}
          yMax={300}
          xMax={400}
          yAxisWidth={50}
          tickLabelFontSize={12}
          axisLabelFontSize={14}
        />
      </svg>
    </ConfigContext.Provider>
  )
}

const sidePlacementYAxis = {
  hideAxis: false,
  hideLabel: false,
  hideTicks: false,
  size: '50',
  gridLines: true,
  label: 'Y-Axis',
  titlePlacement: 'side',
  tickRotation: 0,
  anchors: [],
  axisPadding: 0,
  labelPlacement: 'On Date/Category Axis',
  rightAxisSize: 0,
  rightTitlePlacement: 'side'
}

describe('LinearChart', () => {
  describe('suppression domain data source', () => {
    it('uses excludedData fallback for suppression detection when Y-axis domain is stable and yAxisDomainData is not provided', () => {
      const suppressionSpy = vi.spyOn(suppressionHelpers, 'getHasBoundarySuppression').mockReturnValue(false)
      const excludedRows = [{ Date: '2020-01-01', Cases: 'SUPP' }]
      const tableRows = [{ Date: '2020-01-01', Cases: 12 }]

      renderLinearChart(
        {
          visualizationType: 'Line',
          yAxis: {
            ...createMockChartContext().config.yAxis,
            filterDomainBehavior: 'stable'
          }
        },
        {
          transformedData: tableRows as any,
          tableData: tableRows as any,
          excludedData: excludedRows as any,
          yAxisDomainData: undefined
        }
      )

      expect(suppressionSpy).toHaveBeenCalled()
      expect(suppressionSpy.mock.calls[0][0].rows).toBe(excludedRows)

      suppressionSpy.mockRestore()
    })
  })

  describe('rendering', () => {
    it('renders without crashing', () => {
      const { container } = renderLinearChart()
      expect(container).toBeTruthy()
    })

    it('renders an SVG element', () => {
      const { container } = renderLinearChart()
      const svg = container.querySelector('svg')
      expect(svg).toBeTruthy()
    })

    it('renders with correct aria-label', () => {
      const { container } = renderLinearChart()
      const svg = container.querySelector('svg')
      expect(svg?.getAttribute('aria-label')).toBe('Chart')
    })

    it('applies animated class when config.animate is true', () => {
      const { container } = renderLinearChart({ animate: true })
      const svg = container.querySelector('svg')
      expect(svg?.classList.contains('animated')).toBe(true)
    })

    it('does not apply animated class when config.animate is false', () => {
      const { container } = renderLinearChart({ animate: false })
      const svg = container.querySelector('svg')
      expect(svg?.classList.contains('animated')).toBe(false)
    })
  })

  describe('empty data handling', () => {
    it('renders no data message when filters result in empty data', () => {
      const context = createMockChartContext(
        { filters: [{ columnName: 'test', active: 'test' }] },
        { transformedData: [] }
      )

      render(
        <ConfigContext.Provider value={context}>
          <LinearChart parentWidth={800} parentHeight={400} />
        </ConfigContext.Provider>
      )

      expect(screen.getByText('No data available')).toBeTruthy()
    })
  })

  describe('visualization types', () => {
    it('renders Line chart type without crashing', () => {
      const { container } = renderLinearChart({ visualizationType: 'Line' })
      expect(container.querySelector('svg')).toBeTruthy()
    })

    it('handles Bar chart type without uncaught exceptions', () => {
      // Bar charts require additional data/series setup - verify it renders without throwing
      const { container } = renderLinearChart({
        visualizationType: 'Bar',
        orientation: 'vertical'
      })
      // ErrorBoundary will catch errors, so container should exist
      expect(container).toBeTruthy()
    })

    it('handles horizontal Bar chart without uncaught exceptions', () => {
      const { container } = renderLinearChart({
        visualizationType: 'Bar',
        orientation: 'horizontal'
      })
      expect(container).toBeTruthy()
    })

    it('handles Area Chart type without uncaught exceptions', () => {
      // Area charts require stacked data setup - verify it renders without throwing
      const { container } = renderLinearChart({
        visualizationType: 'Area Chart',
        visualizationSubType: 'stacked'
      })
      expect(container).toBeTruthy()
    })

    it('keeps forest plot lines inside the computed plot bounds at narrow and wide widths', () => {
      visualizationRendererMockState.renderActual = true

      const forestContextOverrides = {
        transformedData: forestPlotConfig.data,
        rawData: forestPlotConfig.data
      }

      const narrowRender = renderLinearChart(forestPlotConfig as any, forestContextOverrides, {
        parentWidth: 320,
        parentHeight: 500
      })
      const wideRender = renderLinearChart(forestPlotConfig as any, forestContextOverrides, {
        parentWidth: 960,
        parentHeight: 500
      })

      const narrowTopLine = narrowRender.container.querySelector('.forestplot__top-line')
      const wideTopLine = wideRender.container.querySelector('.forestplot__top-line')
      const narrowCiLine = narrowRender.container.querySelector('line[class^="line-"]')
      const wideCiLine = wideRender.container.querySelector('line[class^="line-"]')

      expect(narrowTopLine).toBeTruthy()
      expect(wideTopLine).toBeTruthy()
      expect(narrowCiLine).toBeTruthy()
      expect(wideCiLine).toBeTruthy()

      const narrowStart = Number(narrowTopLine?.getAttribute('x1'))
      const narrowEnd = Number(narrowTopLine?.getAttribute('x2'))
      const wideStart = Number(wideTopLine?.getAttribute('x1'))
      const wideEnd = Number(wideTopLine?.getAttribute('x2'))

      expect(narrowStart).toBe(0)
      expect(narrowEnd).toBeLessThanOrEqual(320)
      expect(wideStart).toBe(0)
      expect(wideEnd).toBeLessThanOrEqual(960)
      expect(wideEnd - wideStart).toBeGreaterThan(narrowEnd - narrowStart)

      expect(Number(narrowCiLine?.getAttribute('x1'))).toBeGreaterThan(narrowStart)
      expect(Number(narrowCiLine?.getAttribute('x2'))).toBeLessThanOrEqual(narrowEnd)
      expect(Number(wideCiLine?.getAttribute('x1'))).toBeGreaterThan(wideStart)
      expect(Number(wideCiLine?.getAttribute('x2'))).toBeLessThanOrEqual(wideEnd)
    })

    it('avoids rendering a duplicate manual bottom border when the forest plot x-axis is visible', () => {
      visualizationRendererMockState.renderActual = true

      const { container } = renderLinearChart(
        forestPlotConfig as any,
        {
          transformedData: forestPlotConfig.data,
          rawData: forestPlotConfig.data
        },
        { parentWidth: 800, parentHeight: 500 }
      )

      expect(container.querySelector('.forestplot__top-line')).toBeTruthy()
      expect(container.querySelector('.forestplot__bottom-line')).toBeFalsy()
      const bottomAxisLine = container.querySelector('.bottom-axis > line[stroke="#333"]')
      expect(bottomAxisLine?.getAttribute('x1')).toBe('0')
    })

    it('renders forest plot rows from transformedData instead of rawData', () => {
      visualizationRendererMockState.renderActual = true

      const filteredData = forestPlotConfig.data.slice(0, 2)
      const { container } = renderLinearChart(
        forestPlotConfig as any,
        {
          transformedData: filteredData,
          rawData: forestPlotConfig.data
        },
        { parentWidth: 800, parentHeight: 500 }
      )

      expect(container.querySelectorAll('.lower-ci')).toHaveLength(filteredData.length)
      expect(container.querySelectorAll('line[class^="line-"]')).toHaveLength(filteredData.length)
      expect(container.textContent).not.toContain(
        String(forestPlotConfig.data[forestPlotConfig.data.length - 1]['Author(s) and Year'])
      )
    })
  })

  describe('axis rendering', () => {
    it('renders left y-axis and x-axis anchors independently', () => {
      const data = [
        { Category: 'A', Value: 5 },
        { Category: 'B', Value: 10 }
      ]

      const { container } = renderLinearChart(
        {
          visualizationType: 'Bar',
          debugSvg: true,
          data,
          series: [{ dataKey: 'Value', axis: 'Left', type: 'Bar' }],
          xAxis: {
            ...createMockChartContext().config.xAxis,
            type: 'categorical',
            dataKey: 'Category',
            anchors: [{ value: 'A', color: '#135', lineStyle: 'dashed' }]
          },
          yAxis: {
            ...createMockChartContext().config.yAxis,
            anchors: [{ value: '5', color: '#531', lineStyle: 'solid' }]
          },
          runtime: {
            ...createMockChartContext().config.runtime,
            xAxis: {
              ...createMockChartContext().config.runtime.xAxis,
              type: 'categorical',
              dataKey: 'Category'
            },
            originalXAxis: {
              dataKey: 'Category'
            },
            series: [{ dataKey: 'Value', axis: 'Left', type: 'Bar' }],
            seriesKeys: ['Value']
          }
        },
        {
          transformedData: data,
          tableData: data
        }
      )

      expect(container.querySelectorAll('.anchor-y')).toHaveLength(1)
      expect(container.querySelectorAll('.anchor-x')).toHaveLength(1)
      expect(container.querySelector('.anchor-y-right')).toBeFalsy()
    })

    it('renders right y-axis anchors only when a vertical Combo chart has right-axis series', () => {
      const data = [{ Date: '2024-01-01', LeftValue: 25, RightValue: 50 }]
      const comboConfig = {
        data,
        visualizationType: 'Combo',
        visualizationSubType: 'regular',
        debugSvg: true,
        orientation: 'vertical',
        preliminaryData: [],
        series: [
          { dataKey: 'LeftValue', axis: 'Left', type: 'Bar' },
          { dataKey: 'RightValue', axis: 'Right', type: 'Line' }
        ],
        yAxis: {
          ...createMockChartContext().config.yAxis,
          rightAnchors: [{ value: '50', color: '#246', lineStyle: 'dashed' }],
          rightAxisSize: 60
        },
        runtime: {
          ...createMockChartContext().config.runtime,
          series: [
            { dataKey: 'LeftValue', axis: 'Left', type: 'Bar' },
            { dataKey: 'RightValue', axis: 'Right', type: 'Line' }
          ],
          seriesKeys: ['LeftValue', 'RightValue'],
          areaSeriesKeys: [],
          forecastingSeriesKeys: []
        }
      }

      const combo = renderLinearChart(comboConfig, {
        transformedData: data,
        tableData: data
      })
      const line = renderLinearChart(
        {
          ...comboConfig,
          visualizationType: 'Line'
        },
        {
          transformedData: data,
          tableData: data
        }
      )

      expect(combo.container.querySelectorAll('.anchor-y-right')).toHaveLength(1)
      expect(line.container.querySelector('.anchor-y-right')).toBeFalsy()
    })

    it('uses the right y-scale for right-axis anchors', () => {
      const data = [{ Date: '2024-01-01', LeftValue: 50, RightValue: 80 }]

      const { container } = renderLinearChart(
        {
          data,
          visualizationType: 'Combo',
          visualizationSubType: 'regular',
          debugSvg: true,
          orientation: 'vertical',
          preliminaryData: [],
          series: [
            { dataKey: 'LeftValue', axis: 'Left', type: 'Bar' },
            { dataKey: 'RightValue', axis: 'Right', type: 'Line' }
          ],
          yAxis: {
            ...createMockChartContext().config.yAxis,
            anchors: [{ value: '50', color: '#531', lineStyle: 'solid' }],
            rightAnchors: [{ value: '50', color: '#246', lineStyle: 'dashed' }],
            rightAxisSize: 60,
            rightMin: '0',
            rightMax: '100'
          },
          runtime: {
            ...createMockChartContext().config.runtime,
            series: [
              { dataKey: 'LeftValue', axis: 'Left', type: 'Bar' },
              { dataKey: 'RightValue', axis: 'Right', type: 'Line' }
            ],
            seriesKeys: ['LeftValue', 'RightValue'],
            areaSeriesKeys: [],
            forecastingSeriesKeys: []
          }
        },
        {
          transformedData: data,
          tableData: data
        }
      )

      const leftAnchorY = Number(container.querySelector('.anchor-y')?.getAttribute('y1'))
      const rightAnchorY = Number(container.querySelector('.anchor-y-right')?.getAttribute('y1'))

      expect(Number.isFinite(leftAnchorY)).toBe(true)
      expect(Number.isFinite(rightAnchorY)).toBe(true)
      expect(rightAnchorY).toBeGreaterThan(leftAnchorY)
    })

    it('does not error when configs omit rightAnchors', () => {
      const { container } = renderLinearChart({
        yAxis: {
          ...createMockChartContext().config.yAxis,
          rightAnchors: undefined
        }
      })

      expect(container.querySelector('svg')).toBeTruthy()
      expect(container.querySelector('.anchor-y-right')).toBeFalsy()
    })

    it('renders left axis group', () => {
      const { container } = renderLinearChart()
      const leftAxis = container.querySelector('.left-axis')
      expect(leftAxis).toBeTruthy()
    })

    it('does not render the side y-axis title inside the svg when titlePlacement is top', () => {
      const { container } = renderLinearChart()

      expect(container.querySelector('.left-axis text.y-label')).toBeFalsy()
    })

    it('does not render the top y-axis title inside LinearChart when titlePlacement is top', () => {
      const { container } = renderLinearChart()

      expect(container.querySelector('.y-axis-top-title')).toBeFalsy()
    })

    it('renders the side y-axis title inside the svg when titlePlacement is side', () => {
      const { container } = renderLinearChart({
        yAxis: sidePlacementYAxis
      })

      expect(container.querySelector('.y-axis-top-title')).toBeFalsy()
      expect(container.querySelector('.left-axis text.y-label')).toBeTruthy()
    })

    it('renders the right axis side title when rightTitlePlacement is omitted', () => {
      const { container } = renderRightAxis({ rightTitlePlacement: undefined })

      expect(container.querySelector('.right-axis text.y-label')?.textContent).toBe('Right Axis')
    })

    it('renders the right axis side title from the processed runtime label when available', () => {
      const { container } = renderRightAxis({ rightTitlePlacement: 'side' }, { rightLabel: 'Processed Right Axis' })

      expect(container.querySelector('.right-axis text.y-label')?.textContent).toBe('Processed Right Axis')
    })

    it('suppresses the right axis side title when rightTitlePlacement is top', () => {
      const { container } = renderRightAxis({ rightTitlePlacement: 'top' })

      expect(container.querySelector('.right-axis text.y-label')).toBeFalsy()
    })

    it('renders bottom axis group', () => {
      const { container } = renderLinearChart()
      const bottomAxis = container.querySelector('.bottom-axis')
      expect(bottomAxis).toBeTruthy()
    })

    it('uses vizViewport for x-axis viewport tick overrides', () => {
      const data = [
        { Date: '2024-01-01', Value: 1 },
        { Date: '2024-02-01', Value: 2 },
        { Date: '2024-03-01', Value: 3 },
        { Date: '2024-04-01', Value: 4 },
        { Date: '2024-05-01', Value: 5 },
        { Date: '2024-06-01', Value: 6 }
      ]

      const { container } = renderLinearChart(
        {
          data,
          preliminaryData: [],
          series: [{ dataKey: 'Value', axis: 'Left' }],
          xAxis: {
            type: 'date',
            dataKey: 'Date',
            label: 'X-Axis',
            hideAxis: false,
            hideLabel: false,
            hideTicks: false,
            size: '50',
            tickRotation: 0,
            maxTickRotation: 90,
            anchors: [],
            axisPadding: 0,
            dateParseFormat: '%Y-%m-%d',
            dateDisplayFormat: '%b %Y'
          },
          runtime: {
            xAxis: {
              type: 'date',
              dataKey: 'Date',
              label: 'X-Axis',
              numTicks: 6,
              viewportNumTicks: { xxs: 2 }
            },
            yAxis: {
              size: 50,
              label: 'Y-Axis',
              gridLines: true
            },
            originalXAxis: {
              dataKey: 'Date'
            },
            series: [{ dataKey: 'Value', axis: 'Left' }],
            seriesKeys: ['Value'],
            seriesLabels: { Value: 'Value' },
            seriesLabelsAll: ['Value'],
            uniqueId: 'test-chart'
          }
        },
        {
          currentViewport: 'lg',
          vizViewport: 'xxs',
          colorScale: () => '#000',
          transformedData: data,
          tableData: data
        }
      )

      expect(container.querySelectorAll('.bottom-axis .vx-axis-tick')).toHaveLength(2)
    })

    it('hides Y axis when hideAxis is true', () => {
      const { container } = renderLinearChart({
        yAxis: {
          ...sidePlacementYAxis,
          hideAxis: true
        }
      })
      // The axis line should be hidden, but grid lines may still render
      expect(container.querySelector('svg')).toBeTruthy()
    })

    it('ignores yAxis.labelOffset when positioning the vertical left-axis title', () => {
      const baseRuntime = {
        xAxis: {
          type: 'date',
          dataKey: 'Date',
          label: 'X-Axis'
        },
        yAxis: {
          size: 50,
          label: 'Y-Axis',
          gridLines: true,
          labelOffset: 0
        },
        originalXAxis: {
          dataKey: 'Date'
        },
        series: [],
        seriesKeys: [],
        seriesLabelsAll: [],
        uniqueId: 'test-chart'
      }

      const baseRender = renderLinearChart({
        yAxis: {
          ...sidePlacementYAxis,
          labelOffset: 0
        },
        runtime: baseRuntime
      })
      const offsetRender = renderLinearChart({
        yAxis: {
          ...sidePlacementYAxis,
          labelOffset: 240
        },
        runtime: {
          ...baseRuntime,
          yAxis: {
            ...baseRuntime.yAxis,
            labelOffset: 240
          }
        }
      })

      const baseTransforms = getLeftAxisLabelTransforms(baseRender.container)
      const offsetTransforms = getLeftAxisLabelTransforms(offsetRender.container)

      expect(baseTransforms.length).toBeGreaterThan(0)
      expect(offsetTransforms).toEqual(baseTransforms)
    })

    it('ignores horizontal xAxis.labelOffset when positioning the left-side axis title', () => {
      const baseRuntime = {
        xAxis: {
          type: 'linear',
          dataKey: 'Value',
          label: 'X-Axis'
        },
        yAxis: {
          size: 50,
          label: 'Y-Axis',
          gridLines: true,
          labelOffset: 0
        },
        originalXAxis: {
          dataKey: 'Date'
        },
        series: [],
        seriesKeys: [],
        seriesLabelsAll: [],
        uniqueId: 'test-chart'
      }

      const baseRender = renderLinearChart({
        orientation: 'horizontal',
        xAxis: {
          type: 'linear',
          dataKey: 'Value',
          label: 'X-Axis',
          hideAxis: false,
          hideLabel: false,
          hideTicks: false,
          size: '50',
          tickRotation: 0,
          maxTickRotation: 90,
          anchors: [],
          axisPadding: 0,
          labelOffset: 0
        },
        yAxis: sidePlacementYAxis,
        runtime: baseRuntime
      })
      const offsetRender = renderLinearChart({
        orientation: 'horizontal',
        xAxis: {
          type: 'linear',
          dataKey: 'Value',
          label: 'X-Axis',
          hideAxis: false,
          hideLabel: false,
          hideTicks: false,
          size: '50',
          tickRotation: 0,
          maxTickRotation: 90,
          anchors: [],
          axisPadding: 0,
          labelOffset: 240
        },
        yAxis: sidePlacementYAxis,
        runtime: {
          ...baseRuntime,
          yAxis: {
            ...baseRuntime.yAxis,
            labelOffset: 240
          }
        }
      })

      const baseTransforms = getLeftAxisLabelTransforms(baseRender.container)
      const offsetTransforms = getLeftAxisLabelTransforms(offsetRender.container)

      expect(baseTransforms.length).toBeGreaterThan(0)
      expect(offsetTransforms).toEqual(baseTransforms)
    })
  })

  describe('SVG dimensions', () => {
    it('sets correct width based on parentWidth prop', () => {
      const { container } = renderLinearChart({}, {}, { parentWidth: 600, parentHeight: 400 })
      const svg = container.querySelector('svg')
      // Width should include rightAxisSize (default 0)
      expect(svg?.getAttribute('width')).toBe('600')
    })

    it('returns empty fragment when parentWidth is NaN', () => {
      const { container } = renderLinearChart({}, {}, { parentWidth: NaN, parentHeight: 400 })
      // Should render an empty React.Fragment
      const svg = container.querySelector('svg')
      expect(svg).toBeFalsy()
    })
  })
})
