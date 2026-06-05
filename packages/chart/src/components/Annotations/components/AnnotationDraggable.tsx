import { useContext, useState } from 'react'
import ConfigContext from '../../../ConfigContext'
import DOMPurify from 'dompurify'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'
import { isMobileAnnotationViewport, isMobileFontViewport } from '@cdc/core/helpers/viewports'

// helpers
import { findNearestDatum } from './findNearestDatum'

// visx
import { HtmlLabel, CircleSubject, EditableAnnotation, Connector, Annotation as VisxAnnotation } from '@visx/annotation'
import { MarkerArrow } from '@visx/marker'
import { LinePath } from '@visx/shape'

// styles
import './AnnotationDraggable.styles.css'

export const EVENT_LINE_LABEL_OFFSET = 2
export const snapEventLineDx = (dx: number) => (dx >= 0 ? EVENT_LINE_LABEL_OFFSET : -EVENT_LINE_LABEL_OFFSET)

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
  const { config, dimensions, isEditor, updateConfig, colorScale, transformedData, parseDate, currentViewport, visibleAnnotations } = useContext(ConfigContext)

  // destructure config items here...
  const { annotations, visualizationType } = config
  const [height] = dimensions

  const AnnotationComponent = isEditor ? EditableAnnotation : VisxAnnotation
  const isMobile = isMobileAnnotationViewport(currentViewport) && config?.general?.mobileAnnotationDisplay !== 'text'

  // Match the axis tick label font size (and its viewport-based scaling) for visual consistency.
  const tickLabelFontSize = isMobileFontViewport(currentViewport) ? TICK_LABEL_FONT_SIZE_SMALL : TICK_LABEL_FONT_SIZE

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
  const [liveDrag, setLiveDrag] = useState<{ index: number; dx: number } | null>(null)

  // Helper to determine label anchoring when near chart edges
  const getAnnotationAnchors = (annotationX: number, dx: number, labelWidth: number) => {
    const endpointX = annotationX + dx

    const leftOverflow = dx < 0 && endpointX - labelWidth < 0
    const rightOverflow = dx > 0 && endpointX + labelWidth > xMax

    if (leftOverflow || rightOverflow) {
      // Center label above the endpoint
      return { horizontalAnchor: 'middle' as const, verticalAnchor: 'end' as const }
    }

    // Let visx auto-decide
    return { horizontalAnchor: null, verticalAnchor: null }
  }

  return (
    visibleAnnotations &&
    visibleAnnotations.map((annotation, annotationIndex) => {
      const originalIndex = annotations.indexOf(annotation)
      const text = annotation.text || ''
      const isEventLine = annotation.style === 'event-line'

      // Calculate scaled dx/dy offsets based on savedDimensions
      const { scaledDx: rawScaledDx, scaledDy } = getScaledOffsets(annotation)
      const scaledDx = isEventLine ? snapEventLineDx(rawScaledDx) : rawScaledDx

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

      // sanitize the text for setting dangerouslySetInnerHTML
      const sanitizedData = () => ({
        __html: DOMPurify.sanitize(text)
      })

      return (
        <AnnotationComponent
          key={`annotation-${originalIndex}-${annotation.x}-${annotation.y}-${annotation.dx}-${annotation.dy}`}
          width={xMax}
          height={yMax}
          dx={scaledDx} // label position (scaled to current chart dimensions)
          dy={scaledDy} // label position (scaled to current chart dimensions)
          x={annotationX}
          y={annotationY}
          canEditLabel={annotation.edit.label || false}
          canEditSubject={(annotation.edit.subject && (isEventLine || annotation.connectionType !== 'none')) || false}
          labelDragHandleProps={{ r: 15, stroke: 'red' }}
          subjectDragHandleProps={{ r: 15, stroke: 'red' }}
          onDragStart={() => {
            onDragStateChange(true)
            setLiveDrag({ index: annotationIndex, dx: scaledDx })
          }}
          onDragMove={props => {
            const previewDx = isEventLine ? snapEventLineDx(props.dx) : props.dx
            setLiveDrag({ index: annotationIndex, dx: previewDx })
          }}
          onDragEnd={props => {
            onDragStateChange(false)
            setLiveDrag(null)

            let updatedAnnotations = [...annotations]

            // Current chart dimensions to save with the annotation
            const currentDimensions: [number, number] = [xMax, yMax]

            const isLabelOnlyDrag =
              annotation.anchorMode === 'data'
                ? annotationX === props.x && annotationY === props.y
                : annotation.x === xScaleAnnotation.invert(props.x) && annotation.y === yScaleAnnotation.invert(props.y)

            if (isLabelOnlyDrag) {
              // Event-line snaps dx; callout persists raw drag offset.
              const persistedDx = isEventLine ? snapEventLineDx(props.dx) : props.dx
              updatedAnnotations[originalIndex] = {
                ...updatedAnnotations[originalIndex],
                dx: persistedDx,
                dy: props.dy,
                savedDimensions: currentDimensions
              }
            } else {
              if (annotation.anchorMode === 'data') {
                let nearestDatum = findNearestDatum({
                  data: transformedData || config.data,
                  xScale,
                  xAxisType: config.xAxis.type,
                  xAxisDataKey: config.xAxis.dataKey,
                  seriesKey: annotation.seriesKey,
                  xPixel: props.x,
                  parseDate
                })

                if (nearestDatum) {
                  updatedAnnotations[originalIndex] = {
                    ...updatedAnnotations[originalIndex],
                    dataX: nearestDatum.x,
                    x: xScaleAnnotation.invert(props.x),
                    y: yScaleAnnotation.invert(props.y),
                    savedDimensions: currentDimensions
                  }
                }
              } else {
                updatedAnnotations[originalIndex] = {
                  ...updatedAnnotations[originalIndex],
                  x: xScaleAnnotation.invert(props.x),
                  y: yScaleAnnotation.invert(props.y),
                  savedDimensions: currentDimensions
                }
              }
            }

            updateConfig({
              ...config,
              annotations: updatedAnnotations
            })
          }}
        >
          {isEventLine ? (
            <>
              <line
                x1={annotationX}
                x2={annotationX}
                y1={0}
                y2={yMax}
                stroke='#333'
                strokeWidth={1}
                className='annotation__event-line'
                pointerEvents='none'
              />
              {!isMobile &&
                (() => {
                  // Use live dx during drag (already in current space), otherwise use scaled dx
                  const currentDx = liveDrag?.index === annotationIndex ? liveDrag.dx : scaledDx
                  const onRight = currentDx >= 0
                  return (
                    <HtmlLabel
                      className='annotation__desktop-label'
                      containerStyle={{ width: 'fit-content', maxWidth: '186px' }}
                      horizontalAnchor={onRight ? 'start' : 'end'}
                      verticalAnchor='middle'
                      showAnchorLine={false}
                    >
                      <div
                        className={`annotation__event-line-label ${
                          onRight
                            ? 'cove-annotation-event-line__label--right'
                            : 'cove-annotation-event-line__label--left'
                        }`}
                        style={{
                          backgroundColor: `rgba(255, 255, 255, ${
                            annotation?.opacity ? Number(annotation?.opacity) / 100 : 1
                          })`,
                          padding: '6px 8px',
                          color: annotation.colors?.label || APP_FONT_COLOR,
                          fontSize: tickLabelFontSize
                        }}
                        tabIndex={0}
                        aria-label={`Annotation text that reads: ${annotation.text}`}
                      >
                        <div dangerouslySetInnerHTML={sanitizedData()} />
                      </div>
                    </HtmlLabel>
                  )
                })()}
              {isMobile && (
                <>
                  <circle
                    fill='white'
                    cx={annotationX + scaledDx}
                    cy={annotationY + scaledDy}
                    r={12}
                    className='annotation__mobile-label annotation__mobile-label-circle'
                    stroke={APP_FONT_COLOR}
                  />
                  <text
                    height={16}
                    x={annotationX + scaledDx}
                    y={annotationY + scaledDy + 1}
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
                  const labelWidth = config.general.showAnnotationDropdown ? 186 : 150
                  // Use live dx during drag (already in current space), otherwise use scaled dx
                  const currentDx = liveDrag?.index === annotationIndex ? liveDrag.dx : scaledDx
                  const { horizontalAnchor, verticalAnchor } = getAnnotationAnchors(annotationX, currentDx, labelWidth)
                  return (
                    <HtmlLabel
                      className='annotation__desktop-label'
                      containerStyle={{ width: 'fit-content', maxWidth: `${labelWidth}px` }}
                      horizontalAnchor={horizontalAnchor}
                      verticalAnchor={verticalAnchor}
                      showAnchorLine={false}
                    >
                      <div
                        style={{
                          borderRadius: 5, // Optional: set border radius
                          backgroundColor: `rgba(255, 255, 255, ${
                            annotation?.opacity ? Number(annotation?.opacity) / 100 : 1
                          })`,
                          padding: '10px',
                          width: 'auto',
                          display: config.general.showAnnotationDropdown ? 'inline-flex' : 'flex',
                          justifyContent: 'start',
                          flexDirection: 'row',
                          alignItems: 'center',
                          fontSize: tickLabelFontSize
                        }}
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
                        <div dangerouslySetInnerHTML={sanitizedData()} />
                      </div>
                    </HtmlLabel>
                  )
                })()}
              {annotation.connectionType === 'line' && (
                <Connector type='line' pathProps={{ markerStart: `url(#marker-start--${originalIndex})` }} />
              )}
              {annotation.connectionType === 'elbow' && (
                <Connector type='elbow' pathProps={{ markerStart: `url(#marker-start--${originalIndex})` }} />
              )}
              {annotation.connectionType === 'curve' && (
                <LinePath
                  d={`M ${annotationX},${annotationY}
                      Q ${annotationX + scaledDx / 2}, ${
                    annotationY + scaledDy / 2 + Number(annotation?.bezier) || 0
                  } ${annotationX + scaledDx},${annotationY + scaledDy}`}
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
                  x={annotationX}
                  y={annotationY}
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
                    cx={annotationX + scaledDx}
                    cy={annotationY + scaledDy}
                    r={12}
                    className='annotation__mobile-label annotation__mobile-label-circle'
                    stroke={APP_FONT_COLOR}
                  />
                  <text
                    height={16}
                    x={annotationX + scaledDx}
                    y={annotationY + scaledDy + 1}
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
        </AnnotationComponent>
      )
    })
  )
}

export default Annotations
