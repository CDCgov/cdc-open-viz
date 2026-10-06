import type { AnnotationLabelPosition, AnnotationLabelSide } from '@cdc/core/types/Annotation'

export const MIN_ANNOTATION_LABEL_WIDTH_EM = 6
export const MIN_EVENT_LINE_LABEL_WIDTH_EM = 4

export type AnnotationLayout = {
  side: AnnotationLabelSide
  horizontalAnchor: 'start' | 'middle' | 'end'
  verticalAnchor: 'start' | 'middle' | 'end'
  x: number
  y: number
  width: number
  constrainedWidth?: number
}

type ResolveAnnotationLayoutArgs = {
  endpointX: number
  endpointY: number
  dx: number
  dy: number
  labelWidth: number
  labelHeight: number
  plotWidth: number
  plotHeight: number
  fontSize: number
  minWidthEm?: number
  labelPosition?: AnnotationLabelPosition
  autoSide?: AnnotationLabelSide
  clampNormalAxis?: boolean
}

type ResolvedAnnotationDrag = {
  dx: number
  dy: number
  layout: AnnotationLayout
}

export type AnnotationLabelRect = {
  left: number
  top: number
  width: number
  height: number
}

const anchorsBySide = {
  left: { horizontalAnchor: 'end', verticalAnchor: 'middle' },
  right: { horizontalAnchor: 'start', verticalAnchor: 'middle' },
  above: { horizontalAnchor: 'middle', verticalAnchor: 'end' },
  below: { horizontalAnchor: 'middle', verticalAnchor: 'start' }
} as const

export const getAnnotationLabelRect = (
  x: number,
  y: number,
  width: number,
  height: number,
  side: AnnotationLabelSide
): AnnotationLabelRect => {
  switch (side) {
    case 'left':
      return { left: x - width, top: y - height / 2, width, height }
    case 'right':
      return { left: x, top: y - height / 2, width, height }
    case 'above':
      return { left: x - width / 2, top: y - height, width, height }
    case 'below':
      return { left: x - width / 2, top: y, width, height }
  }
}

export const getFacingAnnotationSide = (
  subjectX: number,
  subjectY: number,
  rect: AnnotationLabelRect
): AnnotationLabelSide => {
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const horizontal = (subjectX - centerX) / Math.max(rect.width / 2, 1)
  const vertical = (subjectY - centerY) / Math.max(rect.height / 2, 1)

  if (Math.abs(horizontal) >= Math.abs(vertical)) return horizontal < 0 ? 'right' : 'left'
  return vertical < 0 ? 'below' : 'above'
}

export const getAnnotationAttachment = (rect: AnnotationLabelRect, side: AnnotationLabelSide) => {
  switch (side) {
    case 'left':
      return { x: rect.left + rect.width, y: rect.top + rect.height / 2 }
    case 'right':
      return { x: rect.left, y: rect.top + rect.height / 2 }
    case 'above':
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height }
    case 'below':
      return { x: rect.left + rect.width / 2, y: rect.top }
  }
}

const clampAnnotationLabelRect = (
  rect: AnnotationLabelRect,
  plotWidth: number,
  plotHeight: number
): AnnotationLabelRect => ({
  ...rect,
  left:
    rect.width >= plotWidth ? (plotWidth - rect.width) / 2 : Math.min(Math.max(rect.left, 0), plotWidth - rect.width),
  top:
    rect.height >= plotHeight
      ? (plotHeight - rect.height) / 2
      : Math.min(Math.max(rect.top, 0), plotHeight - rect.height)
})

export const resolveAnnotationRectangleDrag = ({
  rect,
  subjectX,
  subjectY,
  plotWidth,
  plotHeight,
  side
}: {
  rect: AnnotationLabelRect
  subjectX: number
  subjectY: number
  plotWidth: number
  plotHeight: number
  side: AnnotationLabelSide
}): ResolvedAnnotationDrag & { rect: AnnotationLabelRect } => {
  const boundedRect = clampAnnotationLabelRect(rect, plotWidth, plotHeight)
  const attachment = getAnnotationAttachment(boundedRect, side)

  return {
    dx: attachment.x - subjectX,
    dy: attachment.y - subjectY,
    rect: boundedRect,
    layout: {
      side,
      ...anchorsBySide[side],
      x: attachment.x,
      y: attachment.y,
      width: boundedRect.width,
      constrainedWidth: boundedRect.width
    }
  }
}

export const getPreferredAnnotationSide = (dx: number, dy: number): AnnotationLabelSide => {
  if (Math.abs(dx) >= Math.abs(dy)) return dx >= 0 ? 'right' : 'left'
  return dy >= 0 ? 'below' : 'above'
}

const slideCoordinate = (coordinate: number, size: number, bound: number) => {
  if (size >= bound) return bound / 2
  return Math.min(Math.max(coordinate, size / 2), bound - size / 2)
}

const evaluateSide = (
  side: AnnotationLabelSide,
  {
    endpointX,
    endpointY,
    labelWidth,
    labelHeight,
    plotWidth,
    plotHeight,
    fontSize,
    minWidthEm,
    clampNormalAxis = true
  }: ResolveAnnotationLayoutArgs
): AnnotationLayout => {
  const minWidth = (minWidthEm ?? MIN_ANNOTATION_LABEL_WIDTH_EM) * fontSize
  const requiredWidth = Math.min(labelWidth, minWidth)
  const x = !clampNormalAxis
    ? endpointX
    : side === 'left'
    ? Math.max(Math.min(endpointX, plotWidth), Math.min(requiredWidth, plotWidth))
    : side === 'right'
    ? Math.min(Math.max(endpointX, 0), Math.max(0, plotWidth - requiredWidth))
    : endpointX
  const y = !clampNormalAxis
    ? endpointY
    : side === 'above'
    ? Math.max(Math.min(endpointY, plotHeight), Math.min(labelHeight, plotHeight))
    : side === 'below'
    ? Math.min(Math.max(endpointY, 0), Math.max(0, plotHeight - labelHeight))
    : endpointY
  const availableWidth = side === 'left' ? x : side === 'right' ? plotWidth - x : plotWidth
  const width = Math.min(labelWidth, Math.max(minWidth, availableWidth))
  const boundedX = side === 'above' || side === 'below' ? slideCoordinate(x, width, plotWidth) : x
  const boundedY = side === 'left' || side === 'right' ? slideCoordinate(y, labelHeight, plotHeight) : y
  const widthReduction = Math.max(0, labelWidth - width)

  return {
    side,
    ...anchorsBySide[side],
    x: boundedX,
    y: boundedY,
    width,
    constrainedWidth: widthReduction > 0 ? width : undefined
  }
}

/**
 * Resolves a label on its authored side. Automatic placement uses a persisted
 * side when available and never changes sides to accommodate the viewport.
 */
export const resolveAnnotationLayout = (args: ResolveAnnotationLayoutArgs): AnnotationLayout => {
  const preferredSide =
    args.labelPosition && args.labelPosition !== 'auto'
      ? args.labelPosition
      : args.autoSide ?? getPreferredAnnotationSide(args.dx, args.dy)

  return evaluateSide(preferredSide, args)
}
