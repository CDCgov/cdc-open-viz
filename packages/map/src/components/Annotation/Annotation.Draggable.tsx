import { useContext, useState, useEffect, useRef } from 'react'

// helpers
import { applyBandScaleOffset, handleConnectionHorizontalType, handleConnectionVerticalType, createPoints } from '@cdc/chart/src/components/Annotations/components/helpers'

// visx
import { HtmlLabel, CircleSubject, LineSubject, EditableAnnotation, Connector, Annotation as VisxAnnotation } from '@visx/annotation'
import { Drag, raise } from '@visx/drag'
import { MarkerArrow } from '@visx/marker'
import { LinePath } from '@visx/shape'
import * as allCurves from '@visx/curve'
import { Annotation } from '@cdc/core/types/Annotation'

// styles
import './Annotation.Draggable.styles.css'
import ConfigContext from '../../context'
import { MapContext } from '../../types/MapContext'

const Annotations = ({ xScale, yScale, xMax, svgRef }) => {
  const [draggingItems, setDraggingItems] = useState([])
  const { state: config, dimensions, setState: updateConfig, isEditor } = useContext<MapContext>(ConfigContext)
  const [width, height] = dimensions
  const { annotations } = config
  // const { colorScale } = useColorScale()
  const prevDimensions = useRef(dimensions)
  const AnnotationComponent = isEditor ? EditableAnnotation : VisxAnnotation

  // Store the initial SVG dimensions and the initial relative position of the annotation
  // const initialRelativePositions = useRef(
  //   annotations.map(annotation => ({
  //     dx: annotation.dx / annotation.savedDimensions[0],
  //     dy: annotation.dy / annotation.savedDimensions[1]
  //   }))
  // )

  // useEffect(() => {
  //   if (config.annotations.length < 1) return
  //   const threshold: number = 0.25
  //   const widthChange: number = Math.abs(dimensions[0] - prevDimensions.current[0])
  //   const heightChange: number = Math.abs(dimensions[1] - prevDimensions.current[1])

  //   // Only update if the dimensions have changed significantly
  //   if (widthChange > threshold || heightChange > threshold) {
  //     const updatedAnnotations: Annotation[] = annotations.map((annotation: Annotation, index: number) => {
  //       // Calculate new dx based on the initial relative position and the new dimensions
  //       let newDx: number
  //       let newX: number

  //       if (prevDimensions.current[0] !== 0) {
  //         // If the previous width is not 0, scale the dx (label) value to the new width
  //         const oldWidth: number = prevDimensions.current[0]
  //         const newWidth: number = dimensions[0]
  //         const oldDx: number = annotation.dx
  //         const oldX: number = annotation.x

  //         newDx = (oldDx / oldWidth) * newWidth
  //         newX = (oldX / oldWidth) * newWidth
  //       } else {
  //         // If the previous width is 0, use the current dx value
  //         newDx = annotation.dx
  //         newX = annotation.x
  //       }

  //       // If the initial relative dx position is less than config.yAxis.size, add a buffer to newDx
  //       // if (initialRelativePositions.current[index]?.dx < config.yAxis.size) {
  //       //   // Calculate the buffer based on the new dimensions of the SVG
  //       //   const annotationWidthBuffer: number = dimensions[0] * 0.1 // 10% of the SVG's width
  //       //   newDx += Number(config.yAxis.size) + annotationWidthBuffer + 200
  //       //   newX += Number(config.yAxis.size) + annotationWidthBuffer + 200
  //       // }

  //       const newDy: number = prevDimensions.current[1] !== 0 ? (annotation.dy / prevDimensions.current[1]) * dimensions[1] : annotation.dy
  //       const newY: number = prevDimensions.current[1] !== 0 ? (annotation.y / prevDimensions.current[1]) * dimensions[1] : annotation.y

  //       return {
  //         ...annotation,
  //         dx: newDx,
  //         dy: newDy,
  //         x: newX,
  //         y: newY
  //       }
  //     })

  //     updateConfig({
  //       ...config,
  //       annotations: updatedAnnotations
  //     })

  //     // Update the previous dimensions to the current dimensions
  //     prevDimensions.current = dimensions
  //   }
  // }, [dimensions, annotations, updateConfig, config])

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
      return (
        <>
          <Drag
            key={`annotation--${index}`}
            width={width}
            height={height}
            x={annotation.x} // subject x
            y={annotation.y} // subject y
            onDragStart={() => {
              setDraggingItems(raise(annotations, index))
            }}
          >
            {({ dragStart, dragEnd, dragMove, isDragging, x, y, dx, dy }) => {
              return (
                <>
                  <AnnotationComponent
                    dx={annotation.dx} // label position
                    dy={annotation.dy} // label postion
                    x={annotation.x}
                    y={annotation.y}
                    canEditLabel={annotation.edit.label || false}
                    canEditSubject={annotation.edit.subject || false}
                    onDragEnd={props => {
                      const updatedAnnotations = annotations.map((annotation, idx) => {
                        if (idx === index) {
                          const nearestDatum = annotation

                          return {
                            ...annotation,
                            x: props.x,
                            y: props.y,
                            dx: props.dx,
                            dy: props.dy
                          }
                        }
                        return annotation
                      })

                      updateConfig({
                        ...config,
                        annotations: updatedAnnotations
                      })
                    }}
                    onMouseMove={dragMove}
                    onMouseUp={dragEnd}
                    onMouseDown={dragStart}
                    onTouchStart={dragStart}
                    onTouchMove={dragMove}
                    onTouchEnd={dragEnd}
                    anchorPosition={'auto'}
                  >
                    <HtmlLabel className='' showAnchorLine={false}>
                      <div
                        style={{
                          padding: '10px',
                          borderRadius: 5, // Optional: set border radius
                          backgroundColor: `rgba(255, 255, 255, ${annotation?.opacity ? Number(annotation?.opacity) / 100 : 1})`
                        }}
                        dangerouslySetInnerHTML={{ __html: annotation.text }}
                      />
                    </HtmlLabel>

                    {annotation.connectionType === 'line' && <Connector type='line' pathProps={{ markerStart: 'url(#marker-start)' }} />}

                    {annotation.connectionType === 'elbow' && <Connector type='elbow' pathProps={{ markerStart: 'url(#marker-start)' }} />}

                    {/* MARKERS */}
                    {annotation.marker === 'circle' && <CircleSubject className='circle-subject' stroke={'black'} radius={8} />}
                    {annotation.marker === 'arrow' && <MarkerArrow fill='black' id='marker-start' x={annotation.x} y={annotation.dy} stroke='#333' markerWidth={10} size={10} strokeWidth={1} orient='auto-start-reverse' />}
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
