import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it, beforeAll, vi } from 'vitest'
import { scaleBand, scaleLinear } from '@visx/scale'
import AnnotationDraggable, { EVENT_LINE_LABEL_OFFSET, snapEventLineDx } from '../components/AnnotationDraggable'
import ConfigContext from '../../../ConfigContext'
import { createMockChartContext } from '../../LinearChart/tests/mockConfigContext'

// jsdom compat for visx (ResizeObserver + SVG bbox).
vi.stubGlobal(
  'ResizeObserver',
  vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
  }))
)

beforeAll(() => {
  const mockBBox = { x: 0, y: 0, width: 100, height: 20 }
  // @ts-expect-error mocking SVG method
  SVGElement.prototype.getBBox = vi.fn(() => mockBBox)
  // @ts-expect-error mocking SVG method
  SVGElement.prototype.getBoundingClientRect = vi.fn(() => ({
    x: 0,
    y: 0,
    width: 100,
    height: 20,
    top: 0,
    left: 0,
    right: 100,
    bottom: 20
  }))
})

const buildScales = (xMax: number, yMax: number) => ({
  xScale: scaleBand({ domain: ['Jan', 'Feb'], range: [0, xMax], padding: 0 }),
  yScale: scaleLinear({ domain: [0, 100], range: [yMax, 0] }),
  xScaleAnnotation: scaleLinear({ domain: [0, 100], range: [0, xMax] }),
  yScaleAnnotation: scaleLinear({ domain: [0, 100], range: [0, yMax] })
})

const baseEventLineAnnotation = {
  text: 'Voting Rights Act',
  style: 'event-line',
  anchorMode: 'data',
  dataX: 'Jan',
  x: 50,
  y: 50,
  dx: 12,
  dy: 0,
  opacity: 100,
  colors: { connector: '#444', label: '#000' },
  edit: { subject: false, label: true },
  anchor: { horizontal: false, vertical: false },
  connectionType: 'line' as const,
  marker: 'arrow' as const,
  snapToSubject: false,
  lineType: 'curveLinear'
}

const renderAnnotationDraggable = (annotation: any, xMax = 800, yMax = 400) => {
  const data = [
    { month: 'Jan', value: 50 },
    { month: 'Feb', value: 75 }
  ]
  const context = createMockChartContext(
    {
      annotations: [annotation],
      visualizationType: 'Line',
      xAxis: { type: 'categorical', dataKey: 'month' } as any,
      series: [{ dataKey: 'value', type: 'Line' }] as any,
      data,
      general: { showAnnotationDropdown: false, mobileAnnotationDisplay: 'symbol' } as any
    } as any,
    {
      transformedData: data,
      visibleAnnotations: [annotation]
    }
  )

  const scales = buildScales(xMax, yMax)
  return render(
    <ConfigContext.Provider value={context as any}>
      <svg width={xMax} height={yMax}>
        <AnnotationDraggable
          {...scales}
          xMax={xMax}
          yMax={yMax}
          seriesScale={undefined}
          svgRef={{ current: null } as any}
          onDragStateChange={() => {}}
        />
      </svg>
    </ConfigContext.Provider>
  )
}

describe('AnnotationDraggable - event-line style', () => {
  it('renders a full-height vertical line that spans 0..yMax', () => {
    const { container } = renderAnnotationDraggable(baseEventLineAnnotation)

    const line = container.querySelector('line.annotation__event-line')
    expect(line).toBeTruthy()
    expect(line?.getAttribute('y1')).toBe('0')
    expect(line?.getAttribute('y2')).toBe('400')
  })

  it('strokes the vertical line with the axis color (#333), ignoring colors.connector', () => {
    const { container } = renderAnnotationDraggable({
      ...baseEventLineAnnotation,
      colors: { connector: '#ff0000', label: '#000' }
    })

    const line = container.querySelector('line.annotation__event-line')
    expect(line?.getAttribute('stroke')).toBe('#333')
  })

  it('uses the right-side label class (text-align left) when dx >= 0', () => {
    const { container } = renderAnnotationDraggable({
      ...baseEventLineAnnotation,
      dx: 12
    })

    expect(container.querySelector('.cove-annotation-event-line__label--right')).toBeTruthy()
    expect(container.querySelector('.cove-annotation-event-line__label--left')).toBeFalsy()
  })

  it('uses the left-side label class (text-align right) when dx < 0', () => {
    const { container } = renderAnnotationDraggable({
      ...baseEventLineAnnotation,
      dx: -12
    })

    expect(container.querySelector('.cove-annotation-event-line__label--left')).toBeTruthy()
    expect(container.querySelector('.cove-annotation-event-line__label--right')).toBeFalsy()
  })

  it('does not render a callout marker (no .circle-subject) for event-line', () => {
    const { container } = renderAnnotationDraggable({
      ...baseEventLineAnnotation,
      marker: 'circle' as const
    })

    expect(container.querySelector('.circle-subject')).toBeFalsy()
  })
})

describe('snapEventLineDx', () => {
  it('snaps any positive value to +EVENT_LINE_LABEL_OFFSET', () => {
    expect(snapEventLineDx(0)).toBe(EVENT_LINE_LABEL_OFFSET)
    expect(snapEventLineDx(1)).toBe(EVENT_LINE_LABEL_OFFSET)
    expect(snapEventLineDx(47)).toBe(EVENT_LINE_LABEL_OFFSET)
    expect(snapEventLineDx(9999)).toBe(EVENT_LINE_LABEL_OFFSET)
  })

  it('snaps any negative value to -EVENT_LINE_LABEL_OFFSET', () => {
    expect(snapEventLineDx(-1)).toBe(-EVENT_LINE_LABEL_OFFSET)
    expect(snapEventLineDx(-47)).toBe(-EVENT_LINE_LABEL_OFFSET)
    expect(snapEventLineDx(-9999)).toBe(-EVENT_LINE_LABEL_OFFSET)
  })
})

describe('AnnotationDraggable - event-line dx snapping at render', () => {
  it('still uses right-side class when stored dx is a large positive value', () => {
    const { container } = renderAnnotationDraggable({
      ...baseEventLineAnnotation,
      dx: 47
    })

    expect(container.querySelector('.cove-annotation-event-line__label--right')).toBeTruthy()
    expect(container.querySelector('.cove-annotation-event-line__label--left')).toBeFalsy()
  })

  it('still uses left-side class when stored dx is a large negative value', () => {
    const { container } = renderAnnotationDraggable({
      ...baseEventLineAnnotation,
      dx: -47
    })

    expect(container.querySelector('.cove-annotation-event-line__label--left')).toBeTruthy()
    expect(container.querySelector('.cove-annotation-event-line__label--right')).toBeFalsy()
  })
})

describe('AnnotationDraggable - callout style (regression)', () => {
  it('still renders a callout annotation without a full-height event line', () => {
    const calloutAnnotation = {
      ...baseEventLineAnnotation,
      style: 'callout' as const,
      anchorMode: 'fixed' as const,
      dataX: undefined
    }
    const { container } = renderAnnotationDraggable(calloutAnnotation)

    expect(container.querySelector('line.annotation__event-line')).toBeFalsy()
  })
})
