import { type PointerEvent as ReactPointerEvent, useContext, useEffect, useRef, useState } from 'react'
import ConfigContext from '../../../ConfigContext'
import DOMPurify from 'dompurify'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'
import { isMobileAnnotationViewport, isMobileFontViewport } from '@cdc/core/helpers/viewports'

// helpers
import { findNearestDatum } from './findNearestDatum'
import {
  type AnnotationLabelRect,
  type AnnotationLayout,
  getAnnotationLabelRect,
  getFacingAnnotationSide,
  MIN_ANNOTATION_LABEL_WIDTH_EM,
  MIN_EVENT_LINE_LABEL_WIDTH_EM,
  resolveAnnotationLayout,
  resolveAnnotationRectangleDrag
} from '../helpers/resolveAnnotationLayout'

// visx
import { HtmlLabel, CircleSubject, Connector, Annotation as VisxAnnotation } from '@visx/annotation'
import { MarkerArrow } from '@visx/marker'
import { LinePath } from '@visx/shape'

// styles
import './AnnotationDraggable.styles.css'

export const EVENT_LINE_LABEL_OFFSET = 2
export const snapEventLineDx = (dx: number) => (dx >= 0 ? EVENT_LINE_LABEL_OFFSET : -EVENT_LINE_LABEL_OFFSET)

type ContentAlignment = 'start' | 'center' | 'end'

const getCalloutContentAlignment = (horizontalAnchor: AnnotationLayout['horizontalAnchor']): ContentAlignment => {
  if (horizontalAnchor === 'middle') return 'center'
  return horizontalAnchor === 'end' ? 'end' : 'start'
}

type ResizeHandleProps = {
  edge: 'left' | 'right'
  initialWidth: number
  maxWidth: number
  minWidthEm: number
  onPreview: (width: number) => void
  onCommit: (width: number, fontSize: number) => void
  onCancel: () => void
}

const AnnotationResizeHandle = ({
  edge,
  initialWidth,
  maxWidth,
  minWidthEm,
  onPreview,
  onCommit,
  onCancel
}: ResizeHandleProps) => {
  const handlePointerDown = (event: ReactPointerEvent<HTMLSpanElement>) => {
    event.preventDefault()
    event.stopPropagation()

    const startX = event.clientX
    const labelElement = event.currentTarget.parentElement
    const measuredWidth = labelElement?.getBoundingClientRect().width || 0
    const startWidth = measuredWidth > 0 ? measuredWidth : initialWidth
    const computedFontSize = labelElement ? Number.parseFloat(window.getComputedStyle(labelElement).fontSize) || 16 : 16
    const minWidth = minWidthEm * computedFontSize
    const boundedMaxWidth = Math.max(minWidth, maxWidth)
    let previewWidth = startWidth
    let moved = false

    const removeListeners = () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', finishResize)
      window.removeEventListener('pointercancel', cancelResize)
    }

    const handlePointerMove = (pointerEvent: PointerEvent) => {
      pointerEvent.preventDefault()
      pointerEvent.stopPropagation()
      const delta = pointerEvent.clientX - startX
      previewWidth = Math.min(boundedMaxWidth, Math.max(minWidth, startWidth + (edge === 'right' ? delta : -delta)))
      moved = true
      onPreview(previewWidth)
    }

    const finishResize = (pointerEvent: PointerEvent) => {
      pointerEvent.preventDefault()
      pointerEvent.stopPropagation()
      removeListeners()
      if (moved) onCommit(previewWidth, computedFontSize)
    }

    const cancelResize = (pointerEvent: PointerEvent) => {
      pointerEvent.preventDefault()
      pointerEvent.stopPropagation()
      removeListeners()
      onCancel()
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', finishResize)
    window.addEventListener('pointercancel', cancelResize)
  }

  return (
    <span
      className={`annotation__resize-handle annotation__resize-handle--${edge}`}
      data-testid='annotation-resize-handle'
      aria-hidden='true'
      onPointerDown={handlePointerDown}
      onClick={event => {
        event.preventDefault()
        event.stopPropagation()
      }}
    />
  )
}

// Keep annotation label text in sync with axis tick labels (see LinearChart.tsx).
const TICK_LABEL_FONT_SIZE = 16
const TICK_LABEL_FONT_SIZE_SMALL = 13

const Annotations = ({
  xScale,
  yScale,
  xScaleAnnotation,
  yScaleAnnotation,
  xMax,
  yMax,
  seriesScale,
  svgRef,
  onDragStateChange
}) => {
  // prettier-ignore
  const { config, isEditor, updateConfig, colorScale, transformedData, parseDate, currentViewport, vizViewport, visibleAnnotations } = useContext(ConfigContext)

  // destructure config items here...
  const { annotations, visualizationType } = config
  const annotationViewport = vizViewport ?? currentViewport
  const isMobile = isMobileAnnotationViewport(annotationViewport) && config?.general?.mobileAnnotationDisplay !== 'text'

  // Match the axis tick label font size (and its viewport-based scaling) for visual consistency.
  const usesMobileFontSize = isMobileFontViewport(annotationViewport)
  const tickLabelFontSize = usesMobileFontSize ? TICK_LABEL_FONT_SIZE_SMALL : TICK_LABEL_FONT_SIZE

  /**
   * Scale dx/dy offsets based on savedDimensions vs current dimensions.
   * This ensures label positions scale proportionally when chart is resized.
   * Falls back to unscaled values if savedDimensions is missing (backward compatible).
   */
  const getScaledOffsets = (annotation: { dx: number; dy: number; savedDimensions?: [number, number] }) => {
    const [savedWidth, savedHeight] = annotation.savedDimensions || []

    const scaledDx = savedWidth && savedWidth > 0 ? (annotation.dx / savedWidth) * xMax : annotation.dx
    const scaledDy = savedHeight && savedHeight > 0 ? (annotation.dy / savedHeight) * yMax : annotation.dy

    return { scaledDx, scaledDy }
  }

  // Track live drag position for real-time anchor calculations
  const [liveDrag, setLiveDrag] = useState<{
    index: number
    dx: number
    dy: number
    layout?: AnnotationLayout
  } | null>(null)
  const [liveSubjectDrag, setLiveSubjectDrag] = useState<{ index: number; x: number; y: number } | null>(null)
  const [draggingLabelIndex, setDraggingLabelIndex] = useState<number | null>(null)
  const [draggingSubjectIndex, setDraggingSubjectIndex] = useState<number | null>(null)
  const [previewWidths, setPreviewWidths] = useState<Record<number, number>>({})
  const [labelMeasurements, setLabelMeasurements] = useState<
    Record<number, { width: number; height: number; naturalWidth: number }>
  >({})
  const labelRefs = useRef<Record<number, HTMLDivElement | null>>({})
  const runtimeConstrainedWidths = useRef<Record<number, number | undefined>>({})

  useEffect(() => {
    setLabelMeasurements(current => {
      let changed = false
      const next = { ...current }

      Object.entries(labelRefs.current).forEach(([indexKey, node]) => {
        if (!node) return
        const index = Number(indexKey)
        const { width, height } = node.getBoundingClientRect()
        if (width <= 0 || height <= 0) return
        const previous = current[index]
        const naturalWidth =
          runtimeConstrainedWidths.current[index] === undefined ? width : previous?.naturalWidth ?? width

        if (
          !previous ||
          Math.abs(previous.width - width) > 0.5 ||
          Math.abs(previous.height - height) > 0.5 ||
          Math.abs(previous.naturalWidth - naturalWidth) > 0.5
        ) {
          next[index] = { width, height, naturalWidth }
          changed = true
        }
      })

      return changed ? next : current
    })
  })

  const getSvgPointerPosition = (clientX: number, clientY: number) => {
    const referencedElement = svgRef?.current
    const svg = referencedElement?.ownerSVGElement || referencedElement
    const matrix = svg?.getScreenCTM?.()
    if (!svg?.createSVGPoint || !matrix) return { x: clientX, y: clientY }

    const point = svg.createSVGPoint()
    point.x = clientX
    point.y = clientY
    return point.matrixTransform(matrix.inverse())
  }

  return (
    visibleAnnotations &&
    visibleAnnotations.map((annotation, annotationIndex) => {
      const originalIndex = annotations.indexOf(annotation)
      const text = annotation.text || ''
      const isEventLine = annotation.style === 'event-line'
      // Calculate scaled dx/dy offsets based on savedDimensions
      const { scaledDx: rawScaledDx, scaledDy } = getScaledOffsets(annotation)
      const scaledDx = isEventLine
        ? annotation.labelPosition === 'left'
          ? -EVENT_LINE_LABEL_OFFSET
          : annotation.labelPosition === 'right'
          ? EVENT_LINE_LABEL_OFFSET
          : snapEventLineDx(rawScaledDx)
        : rawScaledDx
      const displayedDx = liveDrag?.index === annotationIndex ? liveDrag.dx : scaledDx
      const displayedDy = liveDrag?.index === annotationIndex ? liveDrag.dy : scaledDy
      const previewLabelWidthPx = previewWidths[originalIndex]

      const previewLabelWidth = (width: number) => {
        setPreviewWidths(current => ({ ...current, [originalIndex]: width }))
      }

      const clearPreviewLabelWidth = () => {
        setPreviewWidths(current => {
          const next = { ...current }
          delete next[originalIndex]
          return next
        })
      }

      const persistLabelWidth = (width: number, fontSize: number) => {
        const updatedAnnotations = [...annotations]
        updatedAnnotations[originalIndex] = {
          ...updatedAnnotations[originalIndex],
          labelWidthEm: width / fontSize
        }
        clearPreviewLabelWidth()
        updateConfig({ ...config, annotations: updatedAnnotations })
      }

      const persistLabelPosition = (dx: number, dy: number, autoSide?: AnnotationLayout['side']) => {
        const updatedAnnotations = [...annotations]
        updatedAnnotations[originalIndex] = {
          ...updatedAnnotations[originalIndex],
          dx,
          dy,
          savedDimensions: [xMax, yMax],
          ...((!annotation.labelPosition || annotation.labelPosition === 'auto') && !isEventLine && autoSide
            ? { autoSide }
            : {})
        }
        updateConfig({ ...config, annotations: updatedAnnotations })
      }

      // Default to absolute positioning
      let annotationX = xScaleAnnotation(annotation.x)
      let annotationY = yScaleAnnotation(annotation.y)

      // Override with data-anchored positioning if applicable
      if (annotation.anchorMode === 'data' && annotation.dataX !== undefined) {
        const dataSource = transformedData || config.data
        const dataPoint = dataSource.find(d => d[config.xAxis.dataKey] === annotation.dataX)

        if (dataPoint) {
          // For date/date-time axes, convert raw value to timestamp for scale
          let xScaleInput = annotation.dataX
          if (config.xAxis.type === 'date' || config.xAxis.type === 'date-time') {
            xScaleInput = parseDate(xScaleInput, false)?.getTime()
          }

          // Event-line annotations are series-agnostic; treat as single (non-grouped) anchor.
          const annotationSeries = isEventLine
            ? undefined
            : config.series?.find(s => s.dataKey === annotation.seriesKey)
          const barSeriesCount = config.series?.filter(s => s.type === 'Bar').length || 0
          const isGroupedBarAnnotation =
            !isEventLine &&
            annotationSeries?.type === 'Bar' &&
            barSeriesCount > 1 &&
            config.visualizationSubType !== 'stacked'

          if (isGroupedBarAnnotation && seriesScale) {
            // Position at group start + series offset + half series bar width
            const seriesOffset = seriesScale(annotation.seriesKey) || 0
            const seriesBandwidth = seriesScale.bandwidth?.() || 0
            annotationX = xScale(xScaleInput) + seriesOffset + seriesBandwidth / 2
          } else {
            // For lines, areas, single bars, etc - center on the data point
            annotationX = xScale(xScaleInput) + (xScale.bandwidth?.() / 2 || 0)
          }

          if (isEventLine) {
            // Anchor visx subject at the plot's vertical middle; the line spans full height.
            annotationY = yMax / 2
          } else {
            // Adjust X for arrow markers based on label direction
            if (annotation.marker === 'arrow' && Math.abs(annotation.dx) >= 100) {
              const direction = annotation.dx > 0 ? 1 : -1
              const relevantBandwidth =
                isGroupedBarAnnotation && seriesScale ? seriesScale.bandwidth?.() : xScale.bandwidth?.()
              const nudgeAmount = relevantBandwidth ? relevantBandwidth / 6 : 2
              annotationX += direction * nudgeAmount
            }

            // Y position based on marker type
            const dataYValue = dataPoint[annotation.seriesKey]
            annotationY = yScale(dataYValue) - (annotation.marker === 'circle' ? 0 : 5)
          }
        }
      }

      const displayedAnnotationX = liveSubjectDrag?.index === annotationIndex ? liveSubjectDrag.x : annotationX
      const displayedAnnotationY = liveSubjectDrag?.index === annotationIndex ? liveSubjectDrag.y : annotationY
      const legacyLabelWidth = isEventLine || config.general.showAnnotationDropdown ? 186 : 150
      const minLabelWidthEm = isEventLine ? MIN_EVENT_LINE_LABEL_WIDTH_EM : MIN_ANNOTATION_LABEL_WIDTH_EM
      const measurement = labelMeasurements[originalIndex]
      const authoredLabelWidth =
        annotation.labelWidthEm === undefined
          ? measurement?.naturalWidth ?? legacyLabelWidth
          : Math.max(minLabelWidthEm, annotation.labelWidthEm) * tickLabelFontSize
      const desiredLabelWidth = previewLabelWidthPx ?? authoredLabelWidth
      const endpointX = displayedAnnotationX + displayedDx
      const endpointY = displayedAnnotationY + displayedDy
      const eventLineSide =
        annotation.labelPosition === 'left' || annotation.labelPosition === 'right'
          ? annotation.labelPosition
          : displayedDx >= 0
          ? 'right'
          : 'left'
      const calculatedLayout = resolveAnnotationLayout({
        endpointX,
        endpointY,
        dx: displayedDx,
        dy: displayedDy,
        labelWidth: desiredLabelWidth,
        labelHeight: measurement?.height ?? 0,
        plotWidth: xMax,
        plotHeight: yMax,
        fontSize: tickLabelFontSize,
        minWidthEm: minLabelWidthEm,
        labelPosition: isEventLine ? eventLineSide : annotation.labelPosition,
        autoSide: isEventLine ? undefined : annotation.autoSide,
        clampNormalAxis: !isEventLine
      })
      const resolvedLayout = liveDrag?.index === annotationIndex && liveDrag.layout ? liveDrag.layout : calculatedLayout
      const renderedDx = resolvedLayout.x - displayedAnnotationX
      const renderedDy = resolvedLayout.y - displayedAnnotationY
      const connectorDx = isMobile ? scaledDx : renderedDx
      const connectorDy = isMobile ? scaledDy : renderedDy
      const usesLegacyEventLineSizing =
        isEventLine && annotation.labelWidthEm === undefined && previewLabelWidthPx === undefined
      const runtimeWidth =
        previewLabelWidthPx ?? (usesLegacyEventLineSizing ? undefined : resolvedLayout.constrainedWidth)
      const availableResizeWidth =
        resolvedLayout.side === 'left'
          ? resolvedLayout.x
          : resolvedLayout.side === 'right'
          ? xMax - resolvedLayout.x
          : xMax
      const maxResizeWidth = Math.max(minLabelWidthEm * tickLabelFontSize, availableResizeWidth)
      runtimeConstrainedWidths.current[originalIndex] =
        previewLabelWidthPx === undefined && !usesLegacyEventLineSizing ? resolvedLayout.constrainedWidth : undefined
      const labelContainerStyle = usesLegacyEventLineSizing
        ? { width: 'fit-content', maxWidth: `${legacyLabelWidth}px` }
        : runtimeWidth !== undefined
        ? { width: `${runtimeWidth}px` }
        : annotation.labelWidthEm !== undefined
        ? { width: `${authoredLabelWidth}px` }
        : { width: 'fit-content', maxWidth: `${legacyLabelWidth}px` }

      const resolveEventLineDraggedPosition = (rawDx: number, rawDy: number) => {
        const dragDx =
          annotation.labelPosition === 'left'
            ? -EVENT_LINE_LABEL_OFFSET
            : annotation.labelPosition === 'right'
            ? EVENT_LINE_LABEL_OFFSET
            : snapEventLineDx(rawDx)
        const dragEventLineSide =
          annotation.labelPosition === 'left' || annotation.labelPosition === 'right'
            ? annotation.labelPosition
            : dragDx >= 0
            ? 'right'
            : 'left'

        const layout = resolveAnnotationLayout({
          endpointX: displayedAnnotationX + dragDx,
          endpointY: displayedAnnotationY + rawDy,
          dx: dragDx,
          dy: rawDy,
          labelWidth: desiredLabelWidth,
          labelHeight: measurement?.height ?? 0,
          plotWidth: xMax,
          plotHeight: yMax,
          fontSize: tickLabelFontSize,
          minWidthEm: minLabelWidthEm,
          labelPosition: dragEventLineSide,
          clampNormalAxis: false
        })

        return {
          dx: layout.x - displayedAnnotationX,
          dy: layout.y - displayedAnnotationY,
          layout
        }
      }

      const startLabelDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
        if (!isEditor || !annotation.edit.label) return

        event.preventDefault()
        event.stopPropagation()
        const startPoint = getSvgPointerPosition(event.clientX, event.clientY)
        const startRect = isEventLine
          ? undefined
          : getAnnotationLabelRect(
              resolvedLayout.x,
              resolvedLayout.y,
              measurement?.width ?? resolvedLayout.width,
              measurement?.height ?? 0,
              resolvedLayout.side
            )
        const initialDrag = isEventLine
          ? resolveEventLineDraggedPosition(scaledDx, scaledDy)
          : {
              dx: renderedDx,
              dy: renderedDy,
              layout: resolvedLayout
            }
        let nextDrag: {
          dx: number
          dy: number
          layout: AnnotationLayout
        } = initialDrag

        const removeListeners = () => {
          window.removeEventListener('pointermove', handlePointerMove)
          window.removeEventListener('pointerup', finishDrag)
          window.removeEventListener('pointercancel', cancelDrag)
        }

        const handlePointerMove = (pointerEvent: PointerEvent) => {
          pointerEvent.preventDefault()
          pointerEvent.stopPropagation()
          const pointer = getSvgPointerPosition(pointerEvent.clientX, pointerEvent.clientY)
          const pointerDx = pointer.x - startPoint.x
          const pointerDy = pointer.y - startPoint.y

          if (isEventLine) {
            nextDrag = resolveEventLineDraggedPosition(initialDrag.dx + pointerDx, initialDrag.dy + pointerDy)
          } else if (startRect) {
            const intendedRect = {
              ...startRect,
              left: startRect.left + pointerDx,
              top: startRect.top + pointerDy
            }
            const dragSide =
              annotation.labelPosition && annotation.labelPosition !== 'auto'
                ? annotation.labelPosition
                : getFacingAnnotationSide(displayedAnnotationX, displayedAnnotationY, intendedRect)

            const resolvedDrag = resolveAnnotationRectangleDrag({
              rect: intendedRect,
              subjectX: displayedAnnotationX,
              subjectY: displayedAnnotationY,
              plotWidth: xMax,
              plotHeight: yMax,
              side: dragSide
            })
            nextDrag = {
              dx: resolvedDrag.dx,
              dy: resolvedDrag.dy,
              layout: resolvedDrag.layout
            }
          }
          setLiveDrag({ index: annotationIndex, ...nextDrag })
        }

        const finishDrag = (pointerEvent: PointerEvent) => {
          pointerEvent.preventDefault()
          pointerEvent.stopPropagation()
          removeListeners()
          onDragStateChange(false)
          setDraggingLabelIndex(null)
          setLiveDrag(null)
          persistLabelPosition(nextDrag.dx, nextDrag.dy, nextDrag.layout.side)
        }

        const cancelDrag = (pointerEvent: PointerEvent) => {
          pointerEvent.preventDefault()
          pointerEvent.stopPropagation()
          removeListeners()
          onDragStateChange(false)
          setDraggingLabelIndex(null)
          setLiveDrag(null)
        }

        onDragStateChange(true)
        setDraggingLabelIndex(annotationIndex)
        setLiveDrag({ index: annotationIndex, ...initialDrag })
        window.addEventListener('pointermove', handlePointerMove)
        window.addEventListener('pointerup', finishDrag)
        window.addEventListener('pointercancel', cancelDrag)
      }

      const startSubjectDrag = (event: ReactPointerEvent<SVGCircleElement>) => {
        if (!isEditor || !annotation.edit.subject || (!isEventLine && annotation.connectionType === 'none')) return

        event.preventDefault()
        event.stopPropagation()
        const startPoint = getSvgPointerPosition(event.clientX, event.clientY)
        let nextX = annotationX
        let nextY = annotationY

        const removeListeners = () => {
          window.removeEventListener('pointermove', handlePointerMove)
          window.removeEventListener('pointerup', finishDrag)
          window.removeEventListener('pointercancel', cancelDrag)
        }

        const handlePointerMove = (pointerEvent: PointerEvent) => {
          pointerEvent.preventDefault()
          pointerEvent.stopPropagation()
          const pointer = getSvgPointerPosition(pointerEvent.clientX, pointerEvent.clientY)
          nextX = annotationX + pointer.x - startPoint.x
          nextY = annotationY + pointer.y - startPoint.y
          setLiveSubjectDrag({ index: annotationIndex, x: nextX, y: nextY })
        }

        const finishDrag = (pointerEvent: PointerEvent) => {
          pointerEvent.preventDefault()
          pointerEvent.stopPropagation()
          removeListeners()
          onDragStateChange(false)
          setDraggingSubjectIndex(null)
          setLiveSubjectDrag(null)

          const updatedAnnotations = [...annotations]
          const currentDimensions: [number, number] = [xMax, yMax]

          if (annotation.anchorMode === 'data') {
            const nearestDatum = findNearestDatum({
              data: transformedData || config.data,
              xScale,
              xAxisType: config.xAxis.type,
              xAxisDataKey: config.xAxis.dataKey,
              seriesKey: annotation.seriesKey,
              xPixel: nextX,
              parseDate
            })

            if (nearestDatum) {
              updatedAnnotations[originalIndex] = {
                ...updatedAnnotations[originalIndex],
                dataX: nearestDatum.x,
                x: xScaleAnnotation.invert(nextX),
                y: yScaleAnnotation.invert(nextY),
                savedDimensions: currentDimensions
              }
            }
          } else {
            updatedAnnotations[originalIndex] = {
              ...updatedAnnotations[originalIndex],
              x: xScaleAnnotation.invert(nextX),
              y: yScaleAnnotation.invert(nextY),
              savedDimensions: currentDimensions
            }
          }

          updateConfig({ ...config, annotations: updatedAnnotations })
        }

        const cancelDrag = (pointerEvent: PointerEvent) => {
          pointerEvent.preventDefault()
          pointerEvent.stopPropagation()
          removeListeners()
          onDragStateChange(false)
          setDraggingSubjectIndex(null)
          setLiveSubjectDrag(null)
        }

        onDragStateChange(true)
        setDraggingSubjectIndex(annotationIndex)
        setLiveSubjectDrag({ index: annotationIndex, x: annotationX, y: annotationY })
        window.addEventListener('pointermove', handlePointerMove)
        window.addEventListener('pointerup', finishDrag)
        window.addEventListener('pointercancel', cancelDrag)
      }

      // sanitize the text for setting dangerouslySetInnerHTML
      const sanitizedData = () => ({
        __html: DOMPurify.sanitize(text)
      })

      return (
        <VisxAnnotation
          key={`annotation-${originalIndex}`}
          dx={connectorDx}
          dy={connectorDy}
          x={displayedAnnotationX}
          y={displayedAnnotationY}
        >
          {isEventLine ? (
            <>
              <line
                x1={displayedAnnotationX}
                x2={displayedAnnotationX}
                y1={0}
                y2={yMax}
                stroke={APP_FONT_COLOR}
                strokeWidth={1}
                className='annotation__event-line'
                pointerEvents='none'
              />
              {!isMobile &&
                (() => {
                  const onRight = resolvedLayout.side === 'right'
                  const horizontalAnchor = resolvedLayout.horizontalAnchor
                  const verticalAnchor = resolvedLayout.verticalAnchor
                  const handleEdge = horizontalAnchor === 'end' ? 'left' : 'right'
                  return (
                    <HtmlLabel
                      className='annotation__desktop-label'
                      containerStyle={labelContainerStyle}
                      horizontalAnchor={horizontalAnchor}
                      verticalAnchor={verticalAnchor}
                      x={resolvedLayout.x}
                      y={resolvedLayout.y}
                      showAnchorLine={false}
                    >
                      <div
                        ref={node => {
                          labelRefs.current[originalIndex] = node
                        }}
                        className={`annotation__event-line-label ${
                          onRight
                            ? 'cove-annotation-event-line__label--right'
                            : 'cove-annotation-event-line__label--left'
                        } ${isEditor && annotation.edit.label ? 'annotation__label--editable' : ''} ${
                          draggingLabelIndex === annotationIndex ? 'annotation__label--dragging' : ''
                        }`}
                        style={{
                          backgroundColor: `rgba(255, 255, 255, ${
                            annotation?.opacity ? Number(annotation?.opacity) / 100 : 1
                          })`,
                          padding: '6px 8px',
                          color: APP_FONT_COLOR,
                          fontSize: tickLabelFontSize,
                          ...(usesLegacyEventLineSizing ? {} : { boxSizing: 'border-box' as const }),
                          ...(usesLegacyEventLineSizing
                            ? {}
                            : { width: '100%', maxWidth: 'none', position: 'relative' as const }),
                          ...(config.general.showAnnotationDropdown
                            ? { display: 'inline-flex', alignItems: 'center', flexDirection: 'row' as const }
                            : {}),
                          ...(usesMobileFontSize ? { lineHeight: '1.1em' } : {})
                        }}
                        data-horizontal-anchor={horizontalAnchor}
                        data-vertical-anchor={verticalAnchor}
                        data-label-dx={renderedDx}
                        data-label-dy={renderedDy}
                        data-resolved-side={resolvedLayout.side}
                        onPointerDown={startLabelDrag}
                        tabIndex={0}
                        aria-label={`Annotation text that reads: ${annotation.text}`}
                      >
                        {config.general.showAnnotationDropdown && (
                          <p
                            className='annotation__has-dropdown-number'
                            style={{ margin: '2px 6px', position: 'relative', left: '-4px' }}
                          >
                            {originalIndex + 1}
                          </p>
                        )}
                        <div
                          className={
                            config.general.showAnnotationDropdown ? 'annotation__event-line-label-text' : undefined
                          }
                          dangerouslySetInnerHTML={sanitizedData()}
                        />
                        {isEditor && annotation.edit.label && (
                          <AnnotationResizeHandle
                            edge={handleEdge}
                            initialWidth={runtimeWidth ?? authoredLabelWidth}
                            maxWidth={maxResizeWidth}
                            minWidthEm={minLabelWidthEm}
                            onPreview={previewLabelWidth}
                            onCommit={persistLabelWidth}
                            onCancel={clearPreviewLabelWidth}
                          />
                        )}
                      </div>
                    </HtmlLabel>
                  )
                })()}
              {isMobile && (
                <>
                  <circle
                    fill='white'
                    cx={displayedAnnotationX + connectorDx}
                    cy={displayedAnnotationY + connectorDy}
                    r={12}
                    className='annotation__mobile-label annotation__mobile-label-circle'
                    stroke={APP_FONT_COLOR}
                  />
                  <text
                    height={16}
                    x={displayedAnnotationX + connectorDx}
                    y={displayedAnnotationY + connectorDy + 1}
                    fontSize={14}
                    className='annotation__mobile-label'
                    alignmentBaseline='middle'
                    textAnchor='middle'
                  >
                    {originalIndex + 1}
                  </text>
                </>
              )}
            </>
          ) : (
            <>
              {!isMobile &&
                (() => {
                  // Use live dx during drag (already in current space), otherwise use scaled dx
                  const currentDx = renderedDx
                  const { horizontalAnchor, verticalAnchor } = resolvedLayout
                  const usesLegacyAlignment =
                    annotation.autoSide === undefined &&
                    (!annotation.labelPosition || annotation.labelPosition === 'auto')
                  const contentAlignment = usesLegacyAlignment ? 'start' : getCalloutContentAlignment(horizontalAnchor)
                  const handleEdge = horizontalAnchor === 'end' ? 'left' : 'right'
                  return (
                    <HtmlLabel
                      className='annotation__desktop-label'
                      containerStyle={labelContainerStyle}
                      horizontalAnchor={horizontalAnchor}
                      verticalAnchor={verticalAnchor}
                      x={resolvedLayout.x}
                      y={resolvedLayout.y}
                      showAnchorLine={false}
                    >
                      <div
                        ref={node => {
                          labelRefs.current[originalIndex] = node
                        }}
                        className={
                          isEditor && annotation.edit.label
                            ? `annotation__label--editable ${
                                draggingLabelIndex === annotationIndex ? 'annotation__label--dragging' : ''
                              }`
                            : undefined
                        }
                        style={{
                          borderRadius: 5, // Optional: set border radius
                          backgroundColor: `rgba(255, 255, 255, ${
                            annotation?.opacity ? Number(annotation?.opacity) / 100 : 1
                          })`,
                          padding: '10px',
                          width: runtimeWidth === undefined && annotation.labelWidthEm === undefined ? 'auto' : '100%',
                          boxSizing: 'border-box',
                          position: 'relative',
                          display: config.general.showAnnotationDropdown ? 'inline-flex' : 'flex',
                          justifyContent:
                            contentAlignment === 'center'
                              ? 'center'
                              : contentAlignment === 'end'
                              ? 'flex-end'
                              : 'flex-start',
                          flexDirection: 'row',
                          alignItems: 'center',
                          color: APP_FONT_COLOR,
                          fontSize: tickLabelFontSize,
                          ...(usesMobileFontSize ? { lineHeight: '1.1em' } : {})
                        }}
                        data-horizontal-anchor={horizontalAnchor}
                        data-vertical-anchor={verticalAnchor}
                        data-label-dx={renderedDx}
                        data-label-dy={renderedDy}
                        data-content-alignment={contentAlignment}
                        data-resolved-side={resolvedLayout.side}
                        onPointerDown={startLabelDrag}
                        // role='presentation'
                        tabIndex={0}
                        aria-label={`Annotation text that reads: ${annotation.text}`}
                      >
                        {config?.general?.showAnnotationDropdown && (
                          <>
                            <p
                              className='annotation__has-dropdown-number'
                              style={{ margin: '2px 6px', position: 'relative', left: '-4px' }}
                            >
                              {originalIndex + 1}
                            </p>
                          </>
                        )}
                        <div
                          className={`annotation__label-text ${
                            contentAlignment === 'end' ? 'annotation__label-text--right' : ''
                          }`}
                          dangerouslySetInnerHTML={sanitizedData()}
                        />
                        {isEditor && annotation.edit.label && (
                          <AnnotationResizeHandle
                            edge={handleEdge}
                            initialWidth={runtimeWidth ?? authoredLabelWidth}
                            maxWidth={maxResizeWidth}
                            minWidthEm={minLabelWidthEm}
                            onPreview={previewLabelWidth}
                            onCommit={persistLabelWidth}
                            onCancel={clearPreviewLabelWidth}
                          />
                        )}
                      </div>
                    </HtmlLabel>
                  )
                })()}
              {annotation.connectionType === 'line' && (
                <Connector
                  type='line'
                  stroke={APP_FONT_COLOR}
                  pathProps={{ markerStart: `url(#marker-start--${originalIndex})` }}
                />
              )}
              {annotation.connectionType === 'elbow' && (
                <Connector
                  type='elbow'
                  stroke={APP_FONT_COLOR}
                  pathProps={{ markerStart: `url(#marker-start--${originalIndex})` }}
                />
              )}
              {annotation.connectionType === 'curve' && (
                <LinePath
                  d={`M ${displayedAnnotationX},${displayedAnnotationY}
                      Q ${displayedAnnotationX + connectorDx / 2}, ${
                    displayedAnnotationY + connectorDy / 2 + Number(annotation?.bezier) || 0
                  } ${displayedAnnotationX + connectorDx},${displayedAnnotationY + connectorDy}`}
                  stroke={APP_FONT_COLOR}
                  fill='none'
                  marker-start={`url(#marker-start--${originalIndex})`}
                />
              )}
              {annotation.marker === 'circle' && (
                <CircleSubject className='circle-subject' stroke={APP_FONT_COLOR} radius={8} />
              )}
              {annotation.marker === 'arrow' && (
                <MarkerArrow
                  fill={APP_FONT_COLOR}
                  id={`marker-start--${originalIndex}`}
                  x={displayedAnnotationX}
                  y={displayedAnnotationY}
                  stroke={APP_FONT_COLOR}
                  markerWidth={12}
                  size={10}
                  strokeWidth={1}
                  orient='auto-start-reverse'
                  markerUnits='userSpaceOnUse'
                />
              )}
              {isMobile && (
                <>
                  <circle
                    fill='white'
                    cx={displayedAnnotationX + connectorDx}
                    cy={displayedAnnotationY + connectorDy}
                    r={12}
                    className='annotation__mobile-label annotation__mobile-label-circle'
                    stroke={APP_FONT_COLOR}
                  />
                  <text
                    height={16}
                    x={displayedAnnotationX + connectorDx}
                    y={displayedAnnotationY + connectorDy + 1}
                    fontSize={14}
                    className='annotation__mobile-label'
                    alignmentBaseline='middle'
                    textAnchor='middle'
                  >
                    {originalIndex + 1}
                  </text>
                </>
              )}
            </>
          )}
          {isEditor && annotation.edit.subject && (isEventLine || annotation.connectionType !== 'none') && (
            <circle
              cx={displayedAnnotationX}
              cy={displayedAnnotationY}
              r={15}
              fill='transparent'
              stroke='red'
              strokeDasharray='4,2'
              strokeWidth={2}
              cursor={draggingSubjectIndex === annotationIndex ? 'grabbing' : 'grab'}
              data-testid='annotation-subject-drag-handle'
              onPointerDown={startSubjectDrag}
            />
          )}
        </VisxAnnotation>
      )
    })
  )
}

export default Annotations
