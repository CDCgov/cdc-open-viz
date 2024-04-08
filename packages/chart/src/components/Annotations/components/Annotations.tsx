import React, { useContext, useState, useRef, useEffect } from 'react'
import ConfigContext from '../../../ConfigContext'
import { Drag, raise } from '@visx/drag'
import { Text } from '@visx/text'
import { Group } from '@visx/group'
import { HtmlLabel, Label, Connector, CircleSubject, LineSubject, EditableAnnotation } from '@visx/annotation'
import { findNearestDatum } from './findNearestDatum'

const Annotations = ({ xScale, yScale, xMax }) => {
  const [draggingItems, setDraggingItems] = useState([])
  const { config, dimensions, updateConfig } = useContext(ConfigContext)
  const [width, height] = dimensions
  const prevDimensions = useRef(dimensions)

  const annotationRefs = useRef([])

  // useEffect(() => {
  //   function handleResize() {
  //     const [prevWidth, prevHeight] = prevDimensions.current

  //     // Calculate the scaling factors for both axes
  //     const xScaleFactor = width / prevWidth
  //     const yScaleFactor = height / prevHeight

  //     // Update the annotation positions
  //     const updatedAnnotations = config.annotations.map((annotation, index) => {
  //       const xValue = annotation.coordinates.xValue
  //       const yValue = annotation.coordinates.yValue

  //       // Calculate new x and y positions based on the scaling factors
  //       const x = annotation.coordinates.x * xScaleFactor + config.yAxis.size
  //       const y = annotation.coordinates.y * yScaleFactor

  //       return {
  //         ...annotation,
  //         coordinates: {
  //           x: x,
  //           y: y
  //         }
  //       }
  //     })

  //     updateConfig({
  //       ...config,
  //       annotations: updatedAnnotations
  //     })

  //     // Update the previous dimensions
  //     prevDimensions.current = [width, height]
  //   }

  //   window.addEventListener('resize', handleResize)
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [config, updateConfig, width, height])

  const restrictedArea = { xMin: 0 + config.yAxis.size, xMax: xMax - config.yAxis.size / 2, yMax: config.heights.vertical - config.xAxis.size, yMin: 0 }

  return (
    config?.annotations &&
    config.annotations.map((annotation, index) => {
      return (
        <Drag
          key={`annotation--${index}`}
          width={width}
          height={height}
          x={annotation.coordinates.x}
          y={annotation.coordinates.y}
          restrict={restrictedArea}
          onDragStart={() => {
            setDraggingItems(raise(config.annotations, index))
          }}
          onDragEnd={props => {
            const updatedAnnotations = config.annotations.map((annotation, idx) => {
              if (idx === index) {
                const nearestDatum = findNearestDatum(
                  {
                    data: config.data.map(data => data[config.xAxis.dataKey]),
                    xScale,
                    yScale,
                    config
                  },
                  props.x
                )

                return {
                  ...annotation,
                  coordinates: {
                    x: props.x + props.dx,
                    y: props.y + props.dy
                  },
                  circleCoordinates: { x: nearestDatum.x, y: nearestDatum.y[0] }
                }
              }
              return annotation
            })
            updateConfig({
              ...config,
              annotations: updatedAnnotations
            })
          }}
        >
          {({ dragStart, dragEnd, dragMove, isDragging, x, y, dx, dy }) => {
            const annotationSquare = annotationRefs?.current[index]?.getBoundingClientRect()
            const padding = 12
            const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary')
            var style = getComputedStyle(document.body)

            return (
              <>
                <EditableAnnotation
                  dx={dx}
                  dy={dy}
                  x={x}
                  y={y}
                  canEditSubject={true}
                  canEditLabel={true}
                  onDragEnd={props => {
                    // send x value to get nearest data item?
                    const nearestDatum = findNearestDatum(
                      {
                        data: config.data.map(data => data[config.xAxis.dataKey]),
                        xScale,
                        yScale,
                        config
                      },
                      props.x
                    )

                    const updatedAnnotations = config.annotations.map((annotation, idx) => {
                      if (idx === index) {
                        const nearestDatum = findNearestDatum(
                          {
                            data: config.data.map(data => data[config.xAxis.dataKey]),
                            xScale,
                            yScale,
                            config
                          },
                          props.x
                        )

                        return {
                          ...annotation,
                          coordinates: {
                            x: props.x + props.dx,
                            y: props.y + props.dy
                          },
                          circleCoordinates: { x: nearestDatum.x, y: nearestDatum.y[0] }
                        }
                      }
                      return annotation
                    })

                    updateConfig({
                      ...config,
                      annotations: updatedAnnotations
                    })

                    annotationRefs[index]
                  }}
                  onMouseMove={dragMove}
                  onMouseUp={dragEnd}
                  onMouseDown={dragStart}
                  onTouchStart={dragStart}
                  onTouchMove={dragMove}
                  onTouchEnd={dragEnd}
                >
                  <HtmlLabel
                    horizontalAnchor={'end'}
                    verticalAnchor={'end'}
                    containerStyle={{
                      background: 'white',
                      border: `1px solid ${style.getPropertyValue('--primary')}`,
                      borderRadius: 2,
                      color: `${style.getPropertyValue('--primary')}`,
                      fontSize: '0.55em',
                      lineHeight: '1em',
                      padding: '1rem',
                      fontWeight: 200
                    }}
                  >
                    <p>{annotation.text}</p>
                  </HtmlLabel>
                  <Connector />
                  <CircleSubject className='circle-subject' stroke={'orange'} x={xScale(annotation.circleCoordinates?.x)} y={yScale(annotation.circleCoordinates?.y)} />
                  {annotation.anchor.horizontal && <LineSubject orientation={'horizontal'} stroke={'gray'} min={config.yAxis.size} max={xMax + xScale.bandwidth()} />}
                  {annotation.anchor.vertical && <LineSubject orientation={'vertical'} stroke={'gray'} min={config.heights.vertical - config.xAxis.size} max={0} />}
                </EditableAnnotation>
              </>
            )
          }}
        </Drag>
      )
    })
  )
}

export default Annotations
