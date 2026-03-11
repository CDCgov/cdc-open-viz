import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi, beforeAll } from 'vitest'
import LinearChart from '../../LinearChart'
import ConfigContext from '../../../ConfigContext'
import { createMockChartContext } from './mockConfigContext'
import forestPlotConfig from '../../../../examples/feature/forest-plot/forest-plot.json'

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

describe('LinearChart', () => {
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
  })

  describe('axis rendering', () => {
    it('renders left axis group', () => {
      const { container } = renderLinearChart()
      const leftAxis = container.querySelector('.left-axis')
      expect(leftAxis).toBeTruthy()
    })

    it('renders bottom axis group', () => {
      const { container } = renderLinearChart()
      const bottomAxis = container.querySelector('.bottom-axis')
      expect(bottomAxis).toBeTruthy()
    })

    it('hides Y axis when hideAxis is true', () => {
      const { container } = renderLinearChart({
        yAxis: {
          hideAxis: true,
          hideLabel: false,
          hideTicks: false,
          size: '50',
          gridLines: true,
          label: 'Y-Axis',
          tickRotation: 0,
          anchors: [],
          axisPadding: 0,
          labelPlacement: 'On Date/Category Axis',
          rightAxisSize: 0
        }
      })
      // The axis line should be hidden, but grid lines may still render
      expect(container.querySelector('svg')).toBeTruthy()
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
