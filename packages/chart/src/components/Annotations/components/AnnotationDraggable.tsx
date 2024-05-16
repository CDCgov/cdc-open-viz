import { useContext, useState, useEffect, useRef } from 'react'
import ConfigContext from '../../../ConfigContext'

// helpers
import { findNearestDatum } from './findNearestDatum'
import { applyBandScaleOffset, handleConnectionHorizontalType, handleConnectionVerticalType, createPoints } from './helpers'
import useColorScale from '../../../hooks/useColorScale'

// visx
import { HtmlLabel, CircleSubject, LineSubject, EditableAnnotation, Connector, Annotation as VisxAnnotation } from '@visx/annotation'
import { Drag, raise } from '@visx/drag'
import { MarkerArrow } from '@visx/marker'
import { LinePath } from '@visx/shape'
import * as allCurves from '@visx/curve'
import { Annotation } from '@cdc/core/types/Annotation'

// styles
import './AnnotationDraggable.styles.css'

const Annotations = ({ xScale, yScale, xMax, svgRef }) => {
  const [draggingItems, setDraggingItems] = useState([])
  const { config, dimensions, updateConfig, isEditor } = useContext(ConfigContext)
  const [width, height] = dimensions
  const { annotations } = config
  const { colorScale } = useColorScale()
  const prevDimensions = useRef(dimensions)
  const AnnotationComponent = isEditor ? EditableAnnotation : VisxAnnotation

  const restrictedArea = { xMin: 0 + config.yAxis.size, xMax: xMax - config.yAxis.size / 2, yMax: config.heights.vertical - config.xAxis.size, yMin: 0 }

  // Store the initial SVG dimensions and the initial relative position of the annotation
  const initialRelativePositions = useRef(
    annotations.map(annotation => ({
      dx: annotation.dx / dimensions.width,
      dy: annotation.dy / dimensions.height
    }))
  )

  useEffect(() => {
    if (config.annotations.length < 1) return
    const threshold: number = 0.25
    const widthChange: number = Math.abs(dimensions[0] - prevDimensions.current[0])
    const heightChange: number = Math.abs(dimensions[1] - prevDimensions.current[1])

    // Only update if the dimensions have changed significantly
    if (widthChange > threshold || heightChange > threshold) {
      const updatedAnnotations: Annotation[] = annotations.map((annotation: Annotation, index: number) => {
        // Calculate new dx based on the initial relative position and the new dimensions
        let newDx: number
        let newX: number

        if (prevDimensions.current[0] !== 0) {
          // If the previous width is not 0, scale the dx (label) value to the new width
          const oldWidth: number = prevDimensions.current[0]
          const newWidth: number = dimensions[0]
          const oldDx: number = annotation.dx
          const oldX: number = annotation.x

          newDx = (oldDx / oldWidth) * newWidth
          newX = (oldX / oldWidth) * newWidth
        } else {
          // If the previous width is 0, use the current dx value
          newDx = annotation.dx
          newX = annotation.x
        }

        // If the initial relative dx position is less than config.yAxis.size, add a buffer to newDx
        if (initialRelativePositions.current[index]?.dx < config.yAxis.size) {
          // Calculate the buffer based on the new dimensions of the SVG
          const annotationWidthBuffer: number = dimensions[0] * 0.1 // 10% of the SVG's width
          newDx += Number(config.yAxis.size) + annotationWidthBuffer + 200
          newX += Number(config.yAxis.size) + annotationWidthBuffer + 200
        }

        const newDy: number = prevDimensions.current[1] !== 0 ? (annotation.dy / prevDimensions.current[1]) * dimensions[1] : annotation.dy
        const newY: number = prevDimensions.current[1] !== 0 ? (annotation.y / prevDimensions.current[1]) * dimensions[1] : annotation.y

        return {
          ...annotation,
          dx: newDx,
          dy: newDy,
          x: newX,
          y: newY
        }
      })

      updateConfig({
        ...config,
        annotations: updatedAnnotations
      })

      // Update the previous dimensions to the current dimensions
      prevDimensions.current = dimensions
    }
  }, [dimensions, annotations, updateConfig, config])

  const handleMobileXPosition = annotation => {
    if (annotation.snapToNearestPoint) {
      return Number(annotation.dx) + xScale(annotation.xKey) + (config.xAxis.type !== 'date-time' ? xScale.bandwidth() / 2 : 0) + Number(config.yAxis.size)
    }
    return Number(annotation.x) + Number(annotation.dx)
  }

  const handleMobileYPosition = annotation => {
    if (annotation.snapToNearestPoint) {
      return yScale(annotation.yKey) + Number(annotation.dy)
    }
    return Number(annotation.dy) + Number(annotation.y)
  }

  const handleTextX = annotation => {
    if (annotation.snapToNearestPoint) {
      return Number(annotation.dx) + Number(xScale(annotation.xKey)) + (config.xAxis.type !== 'date-time' ? xScale.bandwidth() / 2 : 0) + Number(config.yAxis.size) - 16 / 3
    }
    return Number(annotation.dx) + Number(annotation.x) - 16 / 3
  }

  const handleTextY = annotation => {
    if (annotation.snapToNearestPoint) {
      return yScale(annotation.yKey) + Number(annotation.dy) + 5
    }
    return Number(annotation.y) + Number(annotation.dy) + 16 / 3
  }

  return (
    annotations &&
    annotations.map((annotation, index) => {
      const points = createPoints(annotation, xScale, yScale)

      const categoricalOffsetCheck = +(config.xAxis.type !== 'date-time' ? xScale.bandwidth() / 2 : 0)

      return (
        <>
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
                    canEditSubject={annotation.edit.subject || false}
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
                            x: annotation.snapToNearestPoint && nearestDatum.x ? xScale(nearestDatum.x) : props.x ? props.x : 0,
                            y: annotation.snapToNearestPoint && nearestDatum.y ? yScale(nearestDatum.y) : props.y ? props.y : 0,
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

                    {annotation.connectionType === 'curve' && <LinePath data={points} x={d => d.xPos + Number(config.yAxis.size) + categoricalOffsetCheck} y={d => d.yPos} stroke='black' strokeWidth={1} curve={allCurves[annotation.lineType]} markerStart={`url(#marker-start)`} />}

                    {/* MARKERS */}
                    {annotation.marker === 'circle' && <CircleSubject className='circle-subject' stroke={colorScale(annotation.seriesKey)} radius={8} />}
                    {annotation.marker === 'arrow' && <MarkerArrow fill='black' id='marker-start' x={annotation.snapToNearestPoint ? Number(xScale(annotation.xKey)) : annotation.x} y={yScale(annotation.yKey)} stroke='#333' markerWidth={10} size={10} strokeWidth={1} orient='auto-start-reverse' />}

                    {/* Mobile Labels */}
                    <circle fill='white' cx={handleMobileXPosition(annotation)} cy={handleMobileYPosition(annotation)} r={16} className='annotation__mobile-label annotation__mobile-label-circle' stroke={colorScale(annotation.seriesKey)} />

                    <text x={handleTextX(annotation)} y={handleTextY(annotation)} className='annotation__mobile-label'>
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
        </>
      )
    })
  )
}

export default Annotations
