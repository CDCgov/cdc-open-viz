import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it, beforeAll, vi } from 'vitest'
import { scaleBand, scaleLinear } from '@visx/scale'
import AnnotationDraggable, {
  EVENT_LINE_LABEL_OFFSET,
  getCalloutContentAlignment,
  getExplicitAnnotationAnchors,
  snapEventLineDx
} from '../components/AnnotationDraggable'
import ConfigContext from '../../../ConfigContext'
import { createMockChartContext } from '../../LinearChart/tests/mockConfigContext'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'

// jsdom compat for visx (ResizeObserver + SVG bbox).
vi.stubGlobal(
  'ResizeObserver',
  vi.fn(function ResizeObserver() {
    return {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn()
    }
  })
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

const pointerEvent = (type: string, clientX: number, clientY = 0) => {
  const event = new Event(type, { bubbles: true, cancelable: true })
  Object.defineProperty(event, 'clientX', { value: clientX })
  Object.defineProperty(event, 'clientY', { value: clientY })
  return event
}

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

const buildAnnotationContext = (annotation: any, contextOverrides: Record<string, any> = {}) => {
  const data = [
    { month: 'Jan', value: 50 },
    { month: 'Feb', value: 75 }
  ]
  return createMockChartContext(
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
      visibleAnnotations: [annotation],
      ...contextOverrides
    }
  )
}

const annotationTree = (context: any, xMax = 800, yMax = 400) => {
  const scales = buildScales(xMax, yMax)
  return (
    <ConfigContext.Provider value={context}>
      <svg width={xMax} height={yMax}>
        <AnnotationDraggable
          {...scales}
          xMax={xMax}
          yMax={yMax}
          seriesScale={undefined}
          svgRef={{ current: null } as any}
          onDragStateChange={context.handleDragStateChange || (() => {})}
        />
      </svg>
    </ConfigContext.Provider>
  )
}

const renderAnnotationDraggable = (
  annotation: any,
  xMax = 800,
  yMax = 400,
  contextOverrides: Record<string, any> = {}
) => {
  const context = buildAnnotationContext(annotation, contextOverrides)
  context.handleDragStateChange = contextOverrides.handleDragStateChange || (() => {})
  return render(annotationTree(context, xMax, yMax))
}

describe('AnnotationDraggable - event-line style', () => {
  it('renders a full-height vertical line that spans 0..yMax', () => {
    const { container } = renderAnnotationDraggable(baseEventLineAnnotation)

    const line = container.querySelector('line.annotation__event-line')
    expect(line).toBeTruthy()
    expect(line?.getAttribute('y1')).toBe('0')
    expect(line?.getAttribute('y2')).toBe('400')
  })

  it('uses the application font color for the vertical line and label, ignoring legacy annotation colors', () => {
    const { container } = renderAnnotationDraggable({
      ...baseEventLineAnnotation,
      colors: { connector: '#ff0000', label: '#000' }
    })

    const line = container.querySelector('line.annotation__event-line')
    const label = container.querySelector('.annotation__event-line-label') as HTMLElement
    const expectedColor = document.createElement('div')
    expectedColor.style.color = APP_FONT_COLOR

    expect(line?.getAttribute('stroke')).toBe(APP_FONT_COLOR)
    expect(label.style.color).toBe(expectedColor.style.color)
  })

  it('uses the right-side label class (text-align left) when dx >= 0', () => {
    const { container } = renderAnnotationDraggable({
      ...baseEventLineAnnotation,
      dx: 12
    })

    const label = container.querySelector('.cove-annotation-event-line__label--right') as HTMLElement
    expect(label).toBeTruthy()
    expect(container.querySelector('.cove-annotation-event-line__label--left')).toBeFalsy()
    expect(label.dataset.contentAlignment).toBeUndefined()
    expect(label.querySelector('.annotation__label-text')).toBeNull()
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
  it('renders text, connectors, and markers with the application font color', () => {
    const calloutAnnotation = {
      ...baseEventLineAnnotation,
      style: 'callout' as const,
      anchorMode: 'fixed' as const,
      dataX: undefined,
      colors: { connector: '#ff0000', label: '#000', marker: '#00ff00' }
    }
    const { container } = renderAnnotationDraggable(calloutAnnotation)

    expect(container.querySelector('line.annotation__event-line')).toBeFalsy()
    expect(container.querySelector('.visx-annotation-connector')?.getAttribute('stroke')).toBe(APP_FONT_COLOR)
    expect(container.querySelector('marker')?.getAttribute('stroke')).toBe(APP_FONT_COLOR)

    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    const expectedColor = document.createElement('div')
    expectedColor.style.color = APP_FONT_COLOR
    expect(label.style.color).toBe(expectedColor.style.color)
  })
})

describe('AnnotationDraggable - width and explicit placement', () => {
  const calloutAnnotation = {
    ...baseEventLineAnnotation,
    style: 'callout' as const,
    anchorMode: 'fixed' as const,
    dataX: undefined,
    edit: { subject: false, label: true }
  }

  it('keeps legacy fit-content width and automatic anchors when the new fields are omitted', () => {
    const { container } = renderAnnotationDraggable(calloutAnnotation)
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    const wrapper = label.parentElement as HTMLElement

    expect(wrapper.style.width).toBe('fit-content')
    expect(wrapper.style.maxWidth).toBe('150px')
    expect(label.dataset.horizontalAnchor).toBe('auto')
    expect(label.dataset.verticalAnchor).toBe('auto')
  })

  it('places the automatic resize handle on the currently resolved label side', () => {
    const annotation = { ...calloutAnnotation, dx: -100, dy: 0 }
    const { getByTestId, container } = renderAnnotationDraggable(annotation, 800, 400, { isEditor: true })

    expect(getByTestId('annotation-resize-handle')).toHaveClass('annotation__resize-handle--left')
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    const text = label.querySelector('.annotation__label-text') as HTMLElement
    expect(label).toHaveClass('annotation__label--editable')
    expect(label.dataset.contentAlignment).toBe('end')
    expect(text).toHaveClass('annotation__label-text--right')
  })

  it('centers the content block for an automatically resolved vertical label while keeping its text left aligned', () => {
    const annotation = { ...calloutAnnotation, dx: 10, dy: -100, labelWidthPercent: 50 }
    const { container } = renderAnnotationDraggable(annotation)
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    const text = label.querySelector('.annotation__label-text') as HTMLElement

    expect(label.dataset.contentAlignment).toBe('center')
    expect(text).toHaveClass('annotation__label-text')
  })

  it('removes the label circle while retaining the enabled subject circle', () => {
    const annotation = { ...calloutAnnotation, edit: { subject: true, label: true } }
    const { container } = renderAnnotationDraggable(annotation, 800, 400, { isEditor: true })

    expect(container.querySelectorAll('circle[stroke="red"]')).toHaveLength(1)
  })

  it('keeps the measured label mounted after label and subject positions are saved', () => {
    const annotation = { ...calloutAnnotation, edit: { subject: true, label: true } }
    const updateConfig = vi.fn()
    const firstRender = renderAnnotationDraggable(annotation, 800, 400, { isEditor: true, updateConfig })
    const initialLabel = firstRender.container.querySelector('g.annotation__desktop-label')
    const label = firstRender.container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement

    fireEvent(label, pointerEvent('pointerdown', 0, 0))
    fireEvent(window, pointerEvent('pointermove', 40, 20))
    fireEvent(window, pointerEvent('pointerup', 40, 20))

    const labelDraggedAnnotation = updateConfig.mock.calls.at(-1)?.[0].annotations[0]
    const labelContext = buildAnnotationContext(labelDraggedAnnotation, { isEditor: true, updateConfig })
    firstRender.rerender(annotationTree(labelContext))
    expect(firstRender.container.querySelector('g.annotation__desktop-label')).toBe(initialLabel)

    const subjectHandle = firstRender.getByTestId('annotation-subject-drag-handle')
    fireEvent(subjectHandle, pointerEvent('pointerdown', 0, 0))
    fireEvent(window, pointerEvent('pointermove', 30, 15))
    fireEvent(window, pointerEvent('pointerup', 30, 15))

    const subjectDraggedAnnotation = updateConfig.mock.calls.at(-1)?.[0].annotations[0]
    const subjectContext = buildAnnotationContext(subjectDraggedAnnotation, { isEditor: true, updateConfig })
    firstRender.rerender(annotationTree(subjectContext))
    expect(firstRender.container.querySelector('g.annotation__desktop-label')).toBe(initialLabel)
  })

  it('does not outline labels outside editor label-edit mode', () => {
    const updateConfig = vi.fn()
    const { container, queryByTestId } = renderAnnotationDraggable(
      {
        ...calloutAnnotation,
        edit: { subject: false, label: false }
      },
      800,
      400,
      { isEditor: true, updateConfig }
    )
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement

    expect(label).not.toHaveClass('annotation__label--editable')
    expect(queryByTestId('annotation-resize-handle')).toBeNull()
    fireEvent(label, pointerEvent('pointerdown', 0, 0))
    fireEvent(window, pointerEvent('pointermove', 60, 30))
    fireEvent(window, pointerEvent('pointerup', 60, 30))
    expect(updateConfig).not.toHaveBeenCalled()
  })

  it('renders saved percentage widths responsively without clamping values above 100%', () => {
    const wide = { ...calloutAnnotation, labelWidthPercent: 125 }
    const first = renderAnnotationDraggable(wide, 800)
    const firstLabel = first.container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    expect((firstLabel.parentElement as HTMLElement).style.width).toBe('1000px')
    first.unmount()

    const second = renderAnnotationDraggable(wide, 400)
    const secondLabel = second.container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    expect((secondLabel.parentElement as HTMLElement).style.width).toBe('500px')
  })

  it.each([
    ['left', 'end', 'middle', 'end'],
    ['right', 'start', 'middle', 'start'],
    ['above', 'middle', 'end', 'center'],
    ['below', 'middle', 'start', 'center']
  ] as const)(
    'maps %s directly to its Visx anchors and content alignment at plot edges',
    (labelPosition, horizontal, vertical, contentAlignment) => {
      const annotation = {
        ...calloutAnnotation,
        x: labelPosition === 'right' ? 100 : 0,
        y: labelPosition === 'below' ? 100 : 0,
        dx: labelPosition === 'left' ? -240 : 240,
        dy: labelPosition === 'above' ? -180 : 180,
        labelPosition,
        labelWidthPercent: 140
      }
      const { container } = renderAnnotationDraggable(annotation)
      const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement

      expect(getExplicitAnnotationAnchors(labelPosition)).toEqual({
        horizontalAnchor: horizontal,
        verticalAnchor: vertical
      })
      expect(getCalloutContentAlignment(horizontal, annotation.dx, annotation.dy)).toBe(contentAlignment)
      expect(label.dataset.horizontalAnchor).toBe(horizontal)
      expect(label.dataset.verticalAnchor).toBe(vertical)
      expect(label.dataset.contentAlignment).toBe(contentAlignment)
      expect(label.querySelector('.annotation__label-text')).toHaveClass(
        contentAlignment === 'end' ? 'annotation__label-text--right' : 'annotation__label-text'
      )
      if (contentAlignment !== 'end') {
        expect(label.querySelector('.annotation__label-text')).not.toHaveClass('annotation__label-text--right')
      }
      expect(label.dataset.labelDx).toBe(String(annotation.dx))
      expect(label.dataset.labelDy).toBe(String(annotation.dy))
    }
  )

  it('keeps explicit event-line side and placement when the label is dragged', () => {
    const updateConfig = vi.fn()
    const annotation = { ...baseEventLineAnnotation, labelPosition: 'left' as const }
    const { container } = renderAnnotationDraggable(annotation, 800, 400, { isEditor: true, updateConfig })
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    const labelGroup = container.querySelector('g.annotation__desktop-label')
    const initialTransform = labelGroup?.getAttribute('transform')
    const initialX = initialTransform?.match(/translate\(([^,]+)/)?.[1]

    expect(container.querySelector('circle[stroke="red"]')).toBeNull()
    fireEvent(label, pointerEvent('pointerdown', 0, 0))
    fireEvent(window, pointerEvent('pointermove', 80, 40))
    expect(labelGroup?.getAttribute('transform')?.match(/translate\(([^,]+)/)?.[1]).toBe(initialX)
    fireEvent(window, pointerEvent('pointerup', 80, 40))

    const saved = updateConfig.mock.calls.at(-1)?.[0].annotations[0]
    expect(saved.labelPosition).toBe('left')
    expect(saved.dx).toBe(-EVENT_LINE_LABEL_OFFSET)
    expect(saved.dy).not.toBe(annotation.dy)
  })

  it('keeps explicit callout placement when the label is dragged', () => {
    const updateConfig = vi.fn()
    const annotation = { ...calloutAnnotation, labelPosition: 'above' as const }
    const { container } = renderAnnotationDraggable(annotation, 800, 400, { isEditor: true, updateConfig })
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement

    expect(container.querySelector('circle[stroke="red"]')).toBeNull()
    fireEvent(label, pointerEvent('pointerdown', 0, 0))
    expect(label).toHaveClass('annotation__label--dragging')
    fireEvent(window, pointerEvent('pointermove', 60, 30))
    fireEvent(window, pointerEvent('pointerup', 60, 30))
    expect(label).not.toHaveClass('annotation__label--dragging')

    const saved = updateConfig.mock.calls.at(-1)?.[0].annotations[0]
    expect(saved.labelPosition).toBe('above')
    expect(saved.dx).not.toBe(annotation.dx)
    expect(saved.dy).not.toBe(annotation.dy)
  })

  it('previews resize locally, persists a percentage on release, and does not start label dragging', () => {
    const updateConfig = vi.fn()
    const onDragStateChange = vi.fn()
    const annotation = { ...calloutAnnotation, labelPosition: 'right' as const }
    const { getByTestId, container } = renderAnnotationDraggable(annotation, 800, 400, {
      isEditor: true,
      updateConfig,
      handleDragStateChange: onDragStateChange
    })
    const handle = getByTestId('annotation-resize-handle')

    fireEvent(handle, pointerEvent('pointerdown', 100))
    fireEvent(window, pointerEvent('pointermove', 350))
    expect(updateConfig).not.toHaveBeenCalled()
    expect(onDragStateChange).not.toHaveBeenCalled()
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    expect((label.parentElement as HTMLElement).style.width).toBe('400px')

    fireEvent(window, pointerEvent('pointerup', 350))
    expect(updateConfig).toHaveBeenCalledOnce()
    expect(updateConfig.mock.calls[0][0].annotations[0].labelWidthPercent).toBe(50)
  })

  it('leaves mobile symbol annotations unchanged', () => {
    const annotation = {
      ...calloutAnnotation,
      labelPosition: 'left' as const,
      labelWidthPercent: 180
    }
    const { container, queryByTestId } = renderAnnotationDraggable(annotation, 320, 200, {
      currentViewport: 'xxs',
      isEditor: true
    })

    expect(container.querySelector('.annotation__desktop-label')).toBeFalsy()
    expect(container.querySelector('.annotation__mobile-label-circle')).toBeTruthy()
    expect(queryByTestId('annotation-resize-handle')).toBeNull()
  })
})
