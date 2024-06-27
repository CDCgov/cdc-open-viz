import { useContext, useEffect, useRef, useState } from 'react'
import ConfigContext from '../../../ConfigContext'
import DOMPurify from 'dompurify'

// helpers
import { findNearestDatum } from './findNearestDatum'

// prettier-ignore
import {
  applyBandScaleOffset,
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
import { fontSizes } from '@cdc/core/helpers/cove/fontSettings'

// styles
import './AnnotationDraggable.styles.css'

const Annotations = ({ xScale, yScale, xMax, svgRef, onDragStateChange }) => {
  // prettier-ignore
  const {
    config,
    currentViewport,
    dimensions,
    isDraggingAnnotation,
    isEditor,
    isLegendBottom,
    updateConfig
  } = useContext(ConfigContext)

  // destructure config items here...
  const { annotations } = config
  const [width, height] = dimensions
  const { colorScale } = useColorScale()
  const prevDimensions = useRef(dimensions)
  const [svgDimensions, setSvgDimensions] = useState([0, 0])
  const AnnotationComponent = isEditor ? EditableAnnotation : VisxAnnotation

  // TODO: this doesn't seem to be restricting the draggable area at the moment.
  const restrictedArea = { xMin: 0 + config.yAxis.size, xMax: xMax - config.yAxis.size / 2, yMax: config.heights.vertical - config.xAxis.size, yMin: 0 }

  useEffect(() => {
    // TODO: when the legend hits the bottom the annotations need to be re-rendered because of the visual change.
    setSvgDimensions([svgRef.current.clientWidth, svgRef.current.clientHeight])
  }, [isLegendBottom, svgRef, dimensions])

  useEffect(() => {
    /*
     * This useEffect hook adjusts annotation positions when SVG dimensions change.
     * It calculates the difference between current and previous SVG dimensions.
     * If the change exceeds a threshold, it scales annotation positions accordingly.
     * The hook is triggered by changes in dimensions, annotations, config, viewport, SVG reference, or editor mode.
     */
    if (config.annotations.length < 1) return
    const threshold: number = 0
    const widthChange: number = Math.abs(svgDimensions[0] - prevDimensions.current[0])
    const heightChange: number = Math.abs(svgDimensions[1] - prevDimensions.current[1])

    // Only update if the dimensions have changed by more than the threshold
    if (widthChange > threshold || heightChange > threshold) {
      const updatedAnnotations = annotations.map((annotation, idx) => {
        const DEBUG = true
        DEBUG &&
          console.table({
            'Saved x value': annotation.originalX,
            'Resized x value': annotation.x,
            'Saved Dimensions': `Width: ${annotation.savedDimensions[0]}, Height: ${annotation.savedDimensions[1]}`,
            'True Dimensiosn': `Width: ${svgDimensions[0]}, Height: ${svgDimensions[1]}`
          })
        const getNewX = () => {
          /**
           * TODO:
           * Not sure if this is helpful but the chart width is modified in LinearChart.tsx to be .73 * width
           * This issue might be related to the legend moving to the bottom outlined above.
           * This is to account for the legend width, but it's not clear if this is the best way to handle it.
           * This is for testing the aspect ratio. It seems like the legend disappearing is what is causing part of the issue.
           */
          const aspectRatioOffset = isLegendBottom ? 15 : 0 // maybe 15 is the radius?
          let x = (annotation.originalX * Number(svgDimensions[0])) / Number(annotation.savedDimensions[0])
          return x + aspectRatioOffset
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
      prevDimensions.current = [svgDimensions[0], svgDimensions[1]]
    }
  }, [dimensions, annotations, updateConfig, config, currentViewport, svgRef, isLegendBottom, svgDimensions])

  return (
    annotations &&
    annotations.map((annotation, index) => {
      const text = annotation.text || ''

      // sanitize the text for setting dangerouslySetInnerHTML
      const sanitizedData = () => ({
        __html: DOMPurify.sanitize(text)
      })

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
                      // avoid calling expensive findNearestDatum if the annotation doesn't use snapToNearestPoint
                      if (idx === index && annotation.snapToNearestPoint) {
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
                          savedDimensions: svgDimensions
                        }
                      } else {
                        return {
                          ...annotation,
                          x: Number(props.x) ? Number(props.x) : 0,
                          originalX: Number(props.x) ? Number(props.x) : 0,
                          originalDX: props.dx,
                          originalY: Number(props.y) ? Number(props.y) : 0,
                          y: Number(props.y) ? Number(props.y) : 0,
                          dx: props.dx,
                          dy: props.dy,
                          savedDimensions: svgDimensions
                        }
                      }
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
                  {/* MARKERS */}
                  {annotation.marker === 'circle' && <CircleSubject className='circle-subject' stroke={colorScale(annotation.seriesKey)} radius={8} />}
                  {annotation.marker === 'arrow' && (
                    <MarkerArrow fill='black' id='marker-start' x={annotation.snapToNearestPoint ? Number(xScale(annotation.xKey)) : annotation.x} y={yScale(annotation.yKey)} stroke='#333' markerWidth={10} size={10} strokeWidth={1} orient='auto-start-reverse' markerUnits='userSpaceOnUse' />
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
