import { useContext, useState, useEffect, useRef, useMemo } from 'react'
import ConfigContext from '../../../ConfigContext'
import DOMPurify from 'dompurify'

// helpers
import { findNearestDatum } from './findNearestDatum'
// prettier-ignore
import {
  applyBandScaleOffset,
  createPoints,
  handleConnectionHorizontalType,
  handleConnectionVerticalType,
  handleMobileXPosition,
  handleMobileYPosition,
  handleTextX,
  handleTextY
} from './helpers'
import useColorScale from '../../../hooks/useColorScale'

// visx
import { HtmlLabel, CircleSubject, EditableAnnotation, Connector, Annotation as VisxAnnotation } from '@visx/annotation'
import { Drag } from '@visx/drag'
import { MarkerArrow } from '@visx/marker'
import { LinePath } from '@visx/shape'
import * as allCurves from '@visx/curve'
import { fontSizes } from '@cdc/core/helpers/cove/fontSettings'

// styles
import './AnnotationDraggable.styles.css'
import { fa } from '@faker-js/faker'

const Annotations = ({ xScale, yScale, xMax, svgRef, onDragStateChange }) => {
  const { config, dimensions, updateConfig, isEditor, currentViewport, isDraggingAnnotation, isLegendBottom } = useContext(ConfigContext)
  const [width, height] = dimensions
  const { annotations } = config
  const { colorScale } = useColorScale()
  const prevDimensions = useRef(dimensions)
  const AnnotationComponent = isEditor ? EditableAnnotation : VisxAnnotation

  const [trueDimensions, setTrueDimensions] = useState<[width: number, height: number]>([width, height])
  const restrictedArea = { xMin: 0 + config.yAxis.size, xMax: xMax - config.yAxis.size / 2, yMax: config.heights.vertical - config.xAxis.size, yMin: 0 }

  useEffect(() => {
    setTrueDimensions([svgRef.current.clientWidth, svgRef.current.clientHeight])
  }, [dimensions])

  useEffect(() => {
    /*
     * This useEffect hook adjusts annotation positions when SVG dimensions change.
     * It calculates the difference between current and previous SVG dimensions.
     * If the change exceeds a threshold, it scales annotation positions accordingly.
     * The hook is triggered by changes in dimensions, annotations, config, viewport, SVG reference, or editor mode.
     */
    if (config.annotations.length < 1) return
    const threshold: number = 0.05

    const widthChange: number = Math.abs(trueDimensions[0] - prevDimensions.current[0])
    const heightChange: number = Math.abs(trueDimensions[1] - prevDimensions.current[1])

    // Only update if the dimensions have changed by more than the threshold
    if (widthChange > threshold || heightChange > threshold) {
      const updatedAnnotations = annotations.map((annotation, idx) => {
        const DEBUG = true
        DEBUG &&
          console.table({
            'Saved x value': annotation.originalX,
            'Resized x value': annotation.x,
            'Saved Dimensions': `Width: ${annotation.savedDimensions[0]}, Height: ${annotation.savedDimensions[1]}`
          })
        const getNewX = () => {
          if (isEditor) {
            // update saved dimensions after a few seconds time out.
            return (annotation.originalX * Number(trueDimensions[0])) / Number(annotation.savedDimensions[0])
          } else {
            return (annotation.originalX * Number(trueDimensions[0])) / Number(annotation.savedDimensions[0])
          }
        }

        return {
          ...annotation,
          x: getNewX()
        }
      })
      if (updatedAnnotations === annotations) return
      updateConfig({
        ...config,
        annotations: updatedAnnotations
      })
      prevDimensions.current = [trueDimensions[0], trueDimensions[1]]
    }
  }, [dimensions, annotations, updateConfig, config, currentViewport, svgRef, isLegendBottom])

  return (
    annotations &&
    annotations.map((annotation, index) => {
      const text = annotation.text || ''

      // sanitize the text for setting dangerouslySetInnerHTML
      const sanitizedData = () => ({
        __html: DOMPurify.sanitize(text)
      })

      const points = createPoints(annotation, xScale, yScale, config)
      const categoricalOffsetCheck = +(config.xAxis.type !== 'date-time' ? xScale.bandwidth() / 2 : 0)

      return (
        <Drag
          key={`annotation--${index}`}
          width={width}
          height={height}
          dx={annotation.dx} // label x position
          dy={annotation.dy} // label y postion
          x={annotation.x} // subject x
          y={annotation.y} // subject y
          restrict={restrictedArea}
          resetOnStart
        >
          {({ dragStart, dragEnd, dragMove, isDragging, x, y, dx, dy }) => {
            return (
              <>
                <AnnotationComponent
                  width={200}
                  height={height}
                  dx={annotation.dx} // label position
                  dy={annotation.dy} // label postion
                  x={annotation.snapToNearestPoint ? (config.xAxis.type !== 'date-time' ? applyBandScaleOffset(xScale(annotation.xKey), config, xScale) : annotation.xKey ? xScale(new Date(annotation.xKey)) + Number(config.yAxis.size) : 0) : annotation.x}
                  y={annotation.snapToNearestPoint ? yScale(annotation.yKey) : annotation.y}
                  canEditLabel={annotation.edit.label || false}
                  canEditSubject={(annotation.edit.subject && annotation.connectionType !== 'none') || false}
                  onDragEnd={props => {
                    onDragStateChange(false)
                    const updatedAnnotations = annotations.map((annotation, idx) => {
                      if (idx === index) {
                        const nearestDatum = findNearestDatum(
                          {
                            data: config.data.map(data => data[config.xAxis.dataKey]),
                            xScale,
                            yScale,
                            config,
                            xMax: xMax - config.yAxis.size / 2,
                            annotationSeriesKey: annotation.seriesKey
                          },
                          props.x
                        )

                        return {
                          ...annotation,
                          xKey: nearestDatum.x,
                          yKey: nearestDatum.y,
                          x: annotation.snapToNearestPoint && nearestDatum.x ? xScale(nearestDatum.x) : Number(props.x) ? Number(props.x) : 0,
                          originalX: annotation.snapToNearestPoint && nearestDatum.x ? xScale(nearestDatum.x) : Number(props.x) ? Number(props.x) : 0,
                          originalDX: props.dx,
                          originalY: annotation.snapToNearestPoint && nearestDatum.y ? yScale(nearestDatum.y) : Number(props.y) ? Number(props.y) : 0,
                          y: annotation.snapToNearestPoint && nearestDatum.y ? yScale(nearestDatum.y) : Number(props.y) ? Number(props.y) : 0,
                          dx: props.dx,
                          dy: props.dy,
                          savedDimensions: trueDimensions
                        }
                      }
                      return annotation
                    })
                    if (updatedAnnotations !== annotations) {
                      updateConfig({
                        ...config,
                        annotations: updatedAnnotations
                      })
                    }
                  }}
                  onMouseMove={dragMove}
                  onMouseUp={dragEnd}
                  onMouseDown={dragStart}
                  onTouchStart={dragStart}
                  onTouchMove={dragMove}
                  onTouchEnd={dragEnd}
                  anchorPosition={'auto'}
                  onDragStart={() => onDragStateChange(true)}
                  labelDragHandleProps={{ r: 15, stroke: isDraggingAnnotation ? 'red' : 'var(--primary)' }}
                  subjectDragHandleProps={{ r: 15, stroke: isDraggingAnnotation ? 'red' : 'var(--primary)' }}
                >
                  <HtmlLabel className='annotation__desktop-label' showAnchorLine={false} horizontalAnchor={handleConnectionHorizontalType(annotation, xScale, config)} verticalAnchor={handleConnectionVerticalType(annotation, xScale, config)}>
                    <div
                      style={{
                        borderRadius: 5, // Optional: set border radius
                        backgroundColor: `rgba(255, 255, 255, ${annotation?.opacity ? Number(annotation?.opacity) / 100 : 1})`,
                        padding: '10px',
                        width: 'auto',
                        display: config.general.showAnnotationDropdown ? 'inline-flex' : 'flex',
                        justifyContent: 'start',
                        flexDirection: 'row'
                      }}
                      role='presentation'
                      // ! IMPORTANT: Workaround for 508
                      // - HTML needs to be set from the editor and we need a wrapper with the tabIndex
                      // - TabIndex is only supposed to be used on interactive elements. This is a workaround.
                      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                      tabIndex={0}
                      aria-label={`Annotation text that reads: ${annotation.text}`}
                    >
                      {config?.general?.showAnnotationDropdown && (
                        <>
                          <p className='annotation__has-dropdown-number' style={{ margin: '2px 6px' }}>
                            {index + 1}
                          </p>
                        </>
                      )}
                      <div style={{ fontSize: fontSizes[config.fontSize] }} dangerouslySetInnerHTML={sanitizedData()} />
                    </div>
                  </HtmlLabel>
                  {annotation.connectionType === 'line' && <Connector type='line' pathProps={{ markerStart: 'url(#marker-start)' }} />}
                  {annotation.connectionType === 'elbow' && <Connector type='elbow' pathProps={{ markerStart: 'url(#marker-start)' }} />}
                  {annotation.connectionType === 'curve' && false && <LinePath data={points} x={d => d.xPos + Number(config.yAxis.size) + categoricalOffsetCheck} y={d => d.yPos} stroke='black' strokeWidth={1} curve={allCurves[annotation.lineType]} markerStart={`url(#marker-start)`} />}
                  {/* MARKERS */}
                  {annotation.marker === 'circle' && <CircleSubject className='circle-subject' stroke={colorScale(annotation.seriesKey)} radius={8} />}
                  {annotation.marker === 'arrow' && (
                    <MarkerArrow fill='black' id='marker-start' x={annotation.snapToNearestPoint ? Number(xScale(annotation.xKey)) : annotation.x} y={yScale(annotation.yKey)} stroke='#333' markerWidth={10} size={10} strokeWidth={1} orient='auto-start-reverse' markerUnits='userSpaceOnUse' />
                  )}
                  {annotation.connectionType === 'curve' && (
                    <LinePath
                      // M - Moves the pen to the starting point
                      // Q - Draws a quadratic Bézier curve from the current position to the end point.
                      // Control Point - ${annotation.x + annotation.dx / 2}, ${annotation.y + annotation.dy / 2 - 21}
                      // End Point - ${annotation.x + annotation.dx},${annotation.y + annotation.dy}
                      d={`M ${annotation.x},${annotation.y}
                             Q ${annotation.x + annotation.dx / 2}, ${annotation.y + annotation.dy / 2 + Number(annotation?.bezier) || 0} ${annotation.x + annotation.dx},${annotation.y + annotation.dy}`}
                      stroke='black'
                      strokeWidth='2'
                      fill='none'
                      marker-start='url(#marker-start)'
                    />
                  )}
                  {/* Mobile Labels */}
                  <circle fill='white' cx={handleMobileXPosition(annotation, xScale, config)} cy={handleMobileYPosition(annotation, yScale, config)} r={16} className='annotation__mobile-label annotation__mobile-label-circle' stroke={colorScale(annotation.seriesKey)} />
                  <text x={handleTextX(annotation, xScale, config)} y={handleTextY(annotation, yScale, config)} className='annotation__mobile-label'>
                    {index + 1}
                  </text>
                </AnnotationComponent>
              </>
            )
          }}
        </Drag>
      )
    })
  )
}

export default Annotations
