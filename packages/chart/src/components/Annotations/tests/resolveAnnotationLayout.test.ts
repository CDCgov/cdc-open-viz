import { describe, expect, it } from 'vitest'
import {
  getAnnotationAttachment,
  getAnnotationLabelRect,
  getFacingAnnotationSide,
  getPreferredAnnotationSide,
  MIN_ANNOTATION_LABEL_WIDTH_EM,
  MIN_EVENT_LINE_LABEL_WIDTH_EM,
  resolveAnnotationLayout,
  resolveAnnotationRectangleDrag
} from '../helpers/resolveAnnotationLayout'

const base = {
  endpointX: 200,
  endpointY: 150,
  dx: 100,
  dy: 10,
  labelWidth: 120,
  labelHeight: 40,
  plotWidth: 400,
  plotHeight: 300,
  fontSize: 16,
  labelPosition: 'auto' as const
}

describe('resolveAnnotationLayout', () => {
  it.each([
    [100, 10, 'right'],
    [-100, 10, 'left'],
    [10, -100, 'above'],
    [10, 100, 'below']
  ] as const)('derives %s/%s as the %s preferred side', (dx, dy, side) => {
    expect(getPreferredAnnotationSide(dx, dy)).toBe(side)
    expect(resolveAnnotationLayout({ ...base, dx, dy }).side).toBe(side)
  })

  it('slides parallel to the preferred side without changing sides', () => {
    const result = resolveAnnotationLayout({ ...base, endpointY: 5 })

    expect(result.side).toBe('right')
    expect(result.y).toBe(20)
    expect(result.x).toBe(200)
  })

  it('keeps a short label on its preferred side near an edge when its measured width fits', () => {
    const result = resolveAnnotationLayout({ ...base, endpointX: 320, labelWidth: 70 })

    expect(result.side).toBe('right')
    expect(result.constrainedWidth).toBeUndefined()
  })

  it('constrains a long label to the 6em minimum without changing sides', () => {
    const result = resolveAnnotationLayout({ ...base, endpointX: 100, labelWidth: 180 })

    expect(result.side).toBe('right')
    expect(result.width).toBe(180)

    const constrained = resolveAnnotationLayout({ ...base, endpointX: 304, labelWidth: 180 })
    expect(constrained.side).toBe('right')
    expect(constrained.width).toBe(96)
    expect(constrained.constrainedWidth).toBe(96)
  })

  it('accepts the 4em event-line minimum', () => {
    const result = resolveAnnotationLayout({
      ...base,
      endpointX: 336,
      labelWidth: 180,
      minWidthEm: MIN_EVENT_LINE_LABEL_WIDTH_EM,
      labelPosition: 'right'
    })

    expect(result.width).toBe(64)
    expect(result.constrainedWidth).toBe(64)
  })

  it('keeps a persisted automatic side even when the scaled offsets favor another side', () => {
    const result = resolveAnnotationLayout({
      ...base,
      endpointX: 350,
      endpointY: 30,
      dx: 10,
      dy: -200,
      autoSide: 'right',
      labelWidth: 140,
      labelHeight: 60
    })

    expect(result.side).toBe('right')
  })

  it('keeps the preferred side for unavoidable overflow', () => {
    const result = resolveAnnotationLayout({
      ...base,
      endpointX: 390,
      endpointY: 150,
      labelWidth: 240,
      labelHeight: 310
    })

    expect(result.side).toBe('right')
    expect(result.width).toBe(MIN_ANNOTATION_LABEL_WIDTH_EM * base.fontSize)
    expect(result.constrainedWidth).toBe(MIN_ANNOTATION_LABEL_WIDTH_EM * base.fontSize)
  })

  it.each([
    ['left', -100, 150, 96, 150],
    ['right', 500, 150, 304, 150],
    ['above', 200, -100, 200, 40],
    ['below', 200, 500, 200, 260]
  ] as const)('clamps %s placement to the same-side boundary', (autoSide, endpointX, endpointY, x, y) => {
    const result = resolveAnnotationLayout({ ...base, endpointX, endpointY, autoSide })

    expect(result.side).toBe(autoSide)
    expect(result.x).toBe(x)
    expect(result.y).toBe(y)
  })

  it.each(['left', 'right', 'above', 'below'] as const)(
    'keeps explicit %s placement even when it cannot fit',
    labelPosition => {
      const result = resolveAnnotationLayout({
        ...base,
        endpointX: 5,
        endpointY: 5,
        labelWidth: 300,
        labelHeight: 200,
        labelPosition
      })

      expect(result.side).toBe(labelPosition)
    }
  )
})

describe('rectangle-based annotation dragging', () => {
  const rect = { left: 100, top: 60, width: 120, height: 40 }

  it.each(['left', 'right', 'above', 'below'] as const)(
    'reconstructs the same rectangle from its %s attachment',
    side => {
      const attachment = getAnnotationAttachment(rect, side)

      expect(getAnnotationLabelRect(attachment.x, attachment.y, rect.width, rect.height, side)).toEqual(rect)
    }
  )

  it.each([
    [20, 80, 'right'],
    [300, 80, 'left'],
    [160, 0, 'below'],
    [160, 150, 'above']
  ] as const)('chooses the edge facing a subject at %s/%s', (subjectX, subjectY, side) => {
    expect(getFacingAnnotationSide(subjectX, subjectY, rect)).toBe(side)
  })

  it('normalizes distance by the rectangle dimensions when choosing the facing edge', () => {
    const wideRect = { left: 0, top: 80, width: 200, height: 40 }

    expect(getFacingAnnotationSide(160, 140, wideRect)).toBe('above')
  })

  it('changes only the attachment when the selected side changes', () => {
    const right = resolveAnnotationRectangleDrag({
      rect,
      subjectX: 20,
      subjectY: 80,
      plotWidth: 400,
      plotHeight: 300,
      side: 'right'
    })
    const below = resolveAnnotationRectangleDrag({
      rect,
      subjectX: 160,
      subjectY: 0,
      plotWidth: 400,
      plotHeight: 300,
      side: 'below'
    })

    expect(right.rect).toEqual(rect)
    expect(below.rect).toEqual(rect)
    expect({ x: right.layout.x, y: right.layout.y }).toEqual({ x: 100, y: 80 })
    expect({ x: below.layout.x, y: below.layout.y }).toEqual({ x: 160, y: 60 })
  })

  it('clamps the rectangle before deriving the persisted attachment', () => {
    const result = resolveAnnotationRectangleDrag({
      rect: { ...rect, left: 350, top: -20 },
      subjectX: 200,
      subjectY: 150,
      plotWidth: 400,
      plotHeight: 300,
      side: 'left'
    })

    expect(result.rect).toEqual({ ...rect, left: 280, top: 0 })
    expect(result.layout.x).toBe(400)
    expect(result.layout.y).toBe(20)
    expect(result.dx).toBe(200)
    expect(result.dy).toBe(-130)
  })
})
