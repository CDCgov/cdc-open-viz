import React, { useContext, useState, useRef, useEffect } from 'react'
import ConfigContext from '../../../ConfigContext'
import { Drag, raise } from '@visx/drag'
import { Text } from '@visx/text'
import { Group } from '@visx/group'

const Annotations = ({ xScale, yScale, xMax }) => {
  const [draggingItems, setDraggingItems] = useState([])
  const { config, dimensions, updateConfig } = useContext(ConfigContext)
  const [width, height] = dimensions
  const prevDimensions = useRef(dimensions)

  const annotationRefs = useRef([])

  useEffect(() => {
    function handleResize() {
      const [prevWidth, prevHeight] = prevDimensions.current

      // Calculate the scaling factors for both axes
      const xScaleFactor = width / prevWidth
      const yScaleFactor = height / prevHeight

      // Update the annotation positions
      const updatedAnnotations = config.annotations.map((annotation, index) => {
        const xValue = annotation.coordinates.xValue
        const yValue = annotation.coordinates.yValue

        // Calculate new x and y positions based on the scaling factors
        const x = annotation.coordinates.x * xScaleFactor + config.yAxis.size
        const y = annotation.coordinates.y * yScaleFactor

        return {
          ...annotation,
          coordinates: {
            x: x,
            y: y
          }
        }
      })

      updateConfig({
        ...config,
        annotations: updatedAnnotations
      })

      // Update the previous dimensions
      prevDimensions.current = [width, height]
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [config, updateConfig, width, height])

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
                return {
                  ...annotation,
                  coordinates: {
                    x: props.x + props.dx,
                    y: props.y + props.dy
                  }
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
            return (
              <Group>
                <rect
                  transform={`translate(${dx}, ${dy})`}
                  style={{ strokeWidth: 2, stroke: isDragging ? primaryColor : 'transparent', strokeDasharray: '5 5' }}
                  fill='transparent'
                  x={x - padding / 2}
                  y={y - annotationSquare?.height - padding / 3}
                  width={annotationSquare?.width + padding}
                  height={annotationSquare?.height + padding}
                />
                <Text
                  fontSize={annotation.fontSize}
                  x={x}
                  y={y}
                  transform={`translate(${dx}, ${dy})`}
                  onMouseMove={dragMove}
                  onMouseUp={dragEnd}
                  onMouseDown={dragStart}
                  onTouchStart={dragStart}
                  onTouchMove={dragMove}
                  onTouchEnd={dragEnd}
                  style={{
                    cursor: 'move'
                  }}
                  innerRef={el => (annotationRefs.current[index] = el)}
                  textAnchor='start'
                >
                  {annotation.text}
                </Text>
              </Group>
            )
          }}
        </Drag>
      )
    })
  )
}

export default Annotations
