import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import { scaleBand, scaleLinear } from '@visx/scale'
import AnnotationDraggable, { EVENT_LINE_LABEL_OFFSET, snapEventLineDx } from '../components/AnnotationDraggable'
import ConfigContext from '../../../ConfigContext'
import { createMockChartContext } from '../../LinearChart/tests/mockConfigContext'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'
import getViewport from '@cdc/core/helpers/getViewport'
import { getAnnotationLabelRect } from '../helpers/resolveAnnotationLayout'

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

afterEach(() => {
  vi.restoreAllMocks()
})

const mockElementRect = (width: number, height: number) =>
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
    x: 0,
    y: 0,
    width,
    height,
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    toJSON: () => ({})
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
      general: {
        showAnnotationDropdown: false,
        mobileAnnotationDisplay: contextOverrides.mobileAnnotationDisplay || 'symbol'
      } as any
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

  it('keeps the legacy 186px fit-content cap when width is omitted', () => {
    const { container } = renderAnnotationDraggable(baseEventLineAnnotation, 120)
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    const wrapper = label.parentElement as HTMLElement

    expect(wrapper.style.width).toBe('fit-content')
    expect(wrapper.style.maxWidth).toBe('186px')
    expect(label.style.boxSizing).toBe('')
  })

  it('renders an authored event-line width with the 4em floor', () => {
    const { container } = renderAnnotationDraggable({ ...baseEventLineAnnotation, labelWidthEm: 2 })
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    const wrapper = label.parentElement as HTMLElement

    expect(wrapper.style.width).toBe('64px')
    expect(label.style.boxSizing).toBe('border-box')
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

  it('preserves production dx/dy scaling from saved dimensions', () => {
    const annotation = {
      ...baseEventLineAnnotation,
      style: 'callout' as const,
      anchorMode: 'fixed' as const,
      dataX: undefined,
      dx: 100,
      dy: -50,
      savedDimensions: [400, 200]
    }
    const { container } = renderAnnotationDraggable(annotation, 800, 400)
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement

    expect(label.dataset.labelDx).toBe('200')
    expect(label.dataset.labelDy).toBe('-100')
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
    expect(label.dataset.horizontalAnchor).toBe('start')
    expect(label.dataset.verticalAnchor).toBe('middle')
  })

  it('keeps legacy automatic text left aligned while placing the resize handle on the resolved side', () => {
    const annotation = { ...calloutAnnotation, dx: -100, dy: 0 }
    const { getByTestId, container } = renderAnnotationDraggable(annotation, 800, 400, { isEditor: true })

    expect(getByTestId('annotation-resize-handle')).toHaveClass('annotation__resize-handle--left')
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    const text = label.querySelector('.annotation__label-text') as HTMLElement
    expect(label).toHaveClass('annotation__label--editable')
    expect(label.dataset.contentAlignment).toBe('start')
    expect(text).not.toHaveClass('annotation__label-text--right')
  })

  it('uses directional text alignment when autoSide is persisted', () => {
    const annotation = { ...calloutAnnotation, dx: -100, dy: 0, autoSide: 'left' as const }
    const { container } = renderAnnotationDraggable(annotation)
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    const text = label.querySelector('.annotation__label-text') as HTMLElement

    expect(label.dataset.contentAlignment).toBe('end')
    expect(text).toHaveClass('annotation__label-text--right')
  })

  it('centers the content block for an automatically resolved vertical label while keeping its text left aligned', () => {
    const annotation = { ...calloutAnnotation, dx: 10, dy: -100, autoSide: 'above' as const, labelWidthEm: 12 }
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

  it('derives pixel widths from saved em values and the responsive font size', () => {
    const wide = { ...calloutAnnotation, labelWidthEm: 12.5 }
    const first = renderAnnotationDraggable(wide, 800, 400, { currentViewport: 'lg', vizViewport: 'lg' })
    const firstLabel = first.container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    expect((firstLabel.parentElement as HTMLElement).style.width).toBe('200px')
    expect(firstLabel.style.fontSize).toBe('16px')
    first.unmount()

    const second = renderAnnotationDraggable(wide, 400, 400, {
      currentViewport: 'lg',
      vizViewport: 'xxs',
      mobileAnnotationDisplay: 'text'
    })
    const secondLabel = second.container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    expect((secondLabel.parentElement as HTMLElement).style.width).toBe('162.5px')
    expect(secondLabel.style.fontSize).toBe('13px')
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
        labelWidthEm: 12
      }
      const { container } = renderAnnotationDraggable(annotation)
      const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement

      expect(label.dataset.horizontalAnchor).toBe(horizontal)
      expect(label.dataset.verticalAnchor).toBe(vertical)
      expect(label.dataset.contentAlignment).toBe(contentAlignment)
      expect(label.querySelector('.annotation__label-text')).toHaveClass(
        contentAlignment === 'end' ? 'annotation__label-text--right' : 'annotation__label-text'
      )
      if (contentAlignment !== 'end') {
        expect(label.querySelector('.annotation__label-text')).not.toHaveClass('annotation__label-text--right')
      }
      expect(label.dataset.resolvedSide).toBe(labelPosition)
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

  it('persists the bounded automatic position used by the label and connector', () => {
    mockElementRect(96, 40)
    const updateConfig = vi.fn()
    const annotation = { ...calloutAnnotation, x: 90, y: 50, dx: 100, dy: 0 }
    const { container } = renderAnnotationDraggable(annotation, 800, 400, { isEditor: true, updateConfig })
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement

    expect(label.dataset.resolvedSide).toBe('right')
    fireEvent(label, pointerEvent('pointerdown', 0, 0))
    fireEvent(window, pointerEvent('pointermove', 20, 15))
    fireEvent(window, pointerEvent('pointerup', 20, 15))

    const saved = updateConfig.mock.calls.at(-1)?.[0].annotations[0]
    expect(saved.dx).toBe(-16)
    expect(saved.dy).toBe(15)
    expect(saved.autoSide).toBe('right')
    expect(saved.savedDimensions).toEqual([800, 400])
  })

  it('keeps the dragged rectangle continuous when its facing edge changes', () => {
    mockElementRect(100, 20)
    const updateConfig = vi.fn()
    const annotation = { ...calloutAnnotation, x: 50, y: 50, dx: 100, dy: 0, labelWidthEm: 6.25 }
    const { container } = renderAnnotationDraggable(annotation, 800, 400, { isEditor: true, updateConfig })
    const label = container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement

    fireEvent(label, pointerEvent('pointerdown', 0, 0))
    fireEvent(window, pointerEvent('pointermove', -200, -20))
    expect(label.dataset.resolvedSide).toBe('above')
    fireEvent(window, pointerEvent('pointerup', -200, -20))

    const saved = updateConfig.mock.calls.at(-1)?.[0].annotations[0]
    expect(saved.autoSide).toBe('above')
    expect(getAnnotationLabelRect(400 + saved.dx, 200 + saved.dy, 100, 20, saved.autoSide)).toEqual({
      left: 300,
      top: 170,
      width: 100,
      height: 20
    })
  })

  it('keeps a persisted automatic side across chart sizes', () => {
    const annotation = { ...calloutAnnotation, x: 90, y: 50, dx: 100, dy: 0, autoSide: 'right' as const }
    const wide = renderAnnotationDraggable(annotation, 800, 400)
    const wideLabel = wide.container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    expect(wideLabel.dataset.resolvedSide).toBe('right')
    wide.unmount()

    const narrow = renderAnnotationDraggable(annotation, 300, 400)
    const narrowLabel = narrow.container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    expect(narrowLabel.dataset.resolvedSide).toBe('right')
  })

  it('uses scaled offsets to choose the legacy automatic side when autoSide is omitted', () => {
    const annotation = {
      ...calloutAnnotation,
      dx: -43,
      dy: -38,
      savedDimensions: [1368, 250]
    }
    const taller = renderAnnotationDraggable(annotation, 800, 200)
    const tallerLabel = taller.container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    expect(tallerLabel.dataset.resolvedSide).toBe('above')
    taller.unmount()

    const shorter = renderAnnotationDraggable(annotation, 800, 100)
    const shorterLabel = shorter.container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    expect(shorterLabel.dataset.resolvedSide).toBe('left')
  })

  it('stops at the top edge and begins the next drag without dead distance', () => {
    mockElementRect(100, 20)
    const updateConfig = vi.fn()
    const annotation = { ...calloutAnnotation, labelPosition: 'right' as const }
    const rendered = renderAnnotationDraggable(annotation, 800, 400, { isEditor: true, updateConfig })
    let label = rendered.container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement

    fireEvent(label, pointerEvent('pointerdown', 0, 0))
    fireEvent(window, pointerEvent('pointermove', 0, -500))
    expect(label.dataset.labelDy).toBe('-190')
    fireEvent(window, pointerEvent('pointerup', 0, -500))

    const firstSaved = updateConfig.mock.calls.at(-1)?.[0].annotations[0]
    expect(firstSaved.dy).toBe(-190)

    const secondContext = buildAnnotationContext(firstSaved, { isEditor: true, updateConfig })
    rendered.rerender(annotationTree(secondContext))
    label = rendered.container.querySelector('div[aria-label^="Annotation text"]') as HTMLElement
    fireEvent(label, pointerEvent('pointerdown', 0, 0))
    fireEvent(window, pointerEvent('pointermove', 0, 5))
    fireEvent(window, pointerEvent('pointerup', 0, 5))

    const secondSaved = updateConfig.mock.calls.at(-1)?.[0].annotations[0]
    expect(secondSaved.dy).toBe(-185)
  })

  it('previews resize locally, persists em on release, and does not start label dragging', () => {
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
    expect((label.parentElement as HTMLElement).style.width).toBe('388px')

    fireEvent(window, pointerEvent('pointerup', 350))
    expect(updateConfig).toHaveBeenCalledOnce()
    expect(updateConfig.mock.calls[0][0].annotations[0].labelWidthEm).toBe(24.25)
  })

  it.each([
    ['callout', calloutAnnotation, 6],
    ['event-line', baseEventLineAnnotation, 4]
  ] as const)('uses the %s resize floor', (_style, annotation, expectedWidthEm) => {
    const updateConfig = vi.fn()
    const { getByTestId } = renderAnnotationDraggable(annotation, 800, 400, {
      isEditor: true,
      updateConfig
    })

    const handle = getByTestId('annotation-resize-handle')
    fireEvent(handle, pointerEvent('pointerdown', 300))
    fireEvent(window, pointerEvent('pointermove', 0))
    fireEvent(window, pointerEvent('pointerup', 0))

    expect(updateConfig.mock.calls[0][0].annotations[0].labelWidthEm).toBe(expectedWidthEm)
  })

  it('leaves mobile symbol annotations unchanged', () => {
    const annotation = {
      ...calloutAnnotation,
      labelPosition: 'left' as const,
      labelWidthEm: 12
    }
    const { container, queryByTestId } = renderAnnotationDraggable(annotation, 320, 200, {
      currentViewport: 'lg',
      vizViewport: 'xxs',
      isEditor: true
    })

    expect(container.querySelector('.annotation__desktop-label')).toBeFalsy()
    expect(container.querySelector('.annotation__mobile-label-circle')).toBeTruthy()
    expect(queryByTestId('annotation-resize-handle')).toBeNull()
  })

  it.each(['line', 'elbow', 'curve'] as const)(
    'connects the %s path to the mobile number instead of the hidden text layout',
    connectionType => {
      const annotation = {
        ...calloutAnnotation,
        connectionType,
        dx: 100,
        dy: 0,
        labelPosition: 'right' as const,
        labelWidthEm: 12
      }
      const { container } = renderAnnotationDraggable(annotation, 320, 200, {
        currentViewport: 'xxs',
        vizViewport: 'xxs'
      })
      const circle = container.querySelector('.annotation__mobile-label-circle')
      const connector =
        connectionType === 'curve'
          ? container.querySelector(`path[marker-start="url(#marker-start--0)"]`)
          : container.querySelector('.visx-annotation-connector')
      const pathEnd = connector?.getAttribute('d')?.match(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)$/)

      expect(pathEnd).toBeTruthy()
      expect(Number(pathEnd?.[1])).toBe(Number(circle?.getAttribute('cx')))
      expect(Number(pathEnd?.[2])).toBe(Number(circle?.getAttribute('cy')))
    }
  )

  it('uses vizViewport ahead of currentViewport for in-chart mobile behavior', () => {
    const { container } = renderAnnotationDraggable(calloutAnnotation, 320, 200, {
      currentViewport: 'xxs',
      vizViewport: 'lg'
    })

    expect(container.querySelector('.annotation__desktop-label')).toBeTruthy()
    expect(container.querySelector('.annotation__mobile-label-circle')).toBeFalsy()
  })

  it('preserves the text-to-symbol transition between 577px and 576px', () => {
    const desktopViewport = getViewport(577)
    const mobileViewport = getViewport(576)
    expect(desktopViewport).toBe('sm')
    expect(mobileViewport).toBe('xs')

    const desktop = renderAnnotationDraggable(calloutAnnotation, 577, 400, {
      currentViewport: desktopViewport,
      vizViewport: desktopViewport
    })
    expect(desktop.container.querySelector('.annotation__desktop-label')).toBeTruthy()
    desktop.unmount()

    const mobile = renderAnnotationDraggable(calloutAnnotation, 576, 400, {
      currentViewport: mobileViewport,
      vizViewport: mobileViewport
    })
    expect(mobile.container.querySelector('.annotation__mobile-label-circle')).toBeTruthy()
  })
})
