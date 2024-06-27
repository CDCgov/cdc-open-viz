import { useContext, useState, useEffect, useRef } from 'react'
import ConfigContext from '../../../ConfigContext'

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
import { HtmlLabel, CircleSubject, LineSubject, EditableAnnotation, Connector, Annotation as VisxAnnotation } from '@visx/annotation'
import { Drag, raise } from '@visx/drag'
import { MarkerArrow } from '@visx/marker'
import { LinePath } from '@visx/shape'
import * as allCurves from '@visx/curve'

// styles
import './AnnotationDraggable.styles.css'

const Annotations = ({ xScale, yScale, xMax, svgRef }) => {
  const [draggingItems, setDraggingItems] = useState([])
  const { config, dimensions, updateConfig, isEditor, currentViewport } = useContext(ConfigContext)
  const [width, height] = dimensions
  const { annotations } = config
  const { colorScale } = useColorScale()
  const prevDimensions = useRef(dimensions)
  const AnnotationComponent = isEditor ? EditableAnnotation : VisxAnnotation

  const restrictedArea = { xMin: 0 + config.yAxis.size, xMax: xMax - config.yAxis.size / 2, yMax: config.heights.vertical - config.xAxis.size, yMin: 0 }

  useEffect(() => {
    /*
     * This useEffect hook adjusts annotation positions when SVG dimensions change.
     * It calculates the difference between current and previous SVG dimensions.
     * If the change exceeds a threshold, it scales annotation positions accordingly.
     * The hook is triggered by changes in dimensions, annotations, config, viewport, SVG reference, or editor mode.
     */
    if (config.annotations.length < 1) return
    const threshold: number = 0.05
    const trueDimensions: [number, number] = [svgRef.current.getBoundingClientRect().width, Number(svgRef.current.getBoundingClientRect().height)]
    const widthChange: number = Math.abs(trueDimensions[0] - prevDimensions.current[0])
    const heightChange: number = Math.abs(trueDimensions[1] - prevDimensions.current[1])

    // Only update if the dimensions have changed significantly
    if (widthChange > threshold || heightChange > threshold) {
      const updatedAnnotations = annotations.map((annotation, idx) => {
        const newX = (annotation.originalX * trueDimensions[0]) / Number(annotation.savedDimensions[0])
        return {
          ...annotation,
          x: newX - 17 // 17 is 1rem in pixels for the margin offset.
        }
      })
      if (updatedAnnotations === annotations) return
      updateConfig({
        ...config,
        annotations: updatedAnnotations
      })
      prevDimensions.current = [trueDimensions[0], trueDimensions[1]]
    }
  }, [dimensions, annotations, updateConfig, config, currentViewport, svgRef])

  return (
    annotations &&
    annotations.map((annotation, index) => {
      const points = createPoints(annotation, xScale, yScale, config)
      const categoricalOffsetCheck = +(config.xAxis.type !== 'date-time' ? xScale.bandwidth() / 2 : 0)

      return (
        <Drag
          key={`annotation--${index}`}
          width={width}
          height={height}
          x={annotation.x} // subject x
          y={annotation.y} // subject y
          restrict={restrictedArea}
          onDragStart={() => {
            setDraggingItems(raise(annotations, index))
          }}
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
                          dy: props.dy
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
                >
                  <HtmlLabel width={200} className='annotation__desktop-label' showAnchorLine={false} horizontalAnchor={handleConnectionHorizontalType(annotation, xScale, config)} verticalAnchor={handleConnectionVerticalType(annotation, xScale, config)}>
                    <div
                      style={{
                        borderRadius: 5, // Optional: set border radius
                        backgroundColor: `rgba(255, 255, 255, ${annotation?.opacity ? Number(annotation?.opacity) / 100 : 1})`,
                        padding: '10px'
                      }}
                      dangerouslySetInnerHTML={{ __html: annotation.text }}
                    />
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
                  {/* ANCHORS */}
                  {annotation.anchor.horizontal && <LineSubject orientation={'horizontal'} stroke={'gray'} min={config.yAxis.size} max={xMax + Number(config.yAxis.size) + categoricalOffsetCheck} />}
                  {annotation.anchor.vertical && <LineSubject orientation={'vertical'} stroke={'gray'} min={config.heights.vertical - config.xAxis.size} max={0} />}
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
