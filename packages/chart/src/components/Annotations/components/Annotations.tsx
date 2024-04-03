import React, { useContext, useState, useRef } from 'react'
import ConfigContext from '../../../ConfigContext'
import { Drag, raise } from '@visx/drag'
import { Text } from '@visx/text'
import { Group } from '@visx/group'
import { dirxml } from 'console'
const Annotations = ({ xScale, yScale, xMax }) => {
  const [draggingItems, setDraggingItems] = useState([])
  const { config, dimensions, updateConfig } = useContext(ConfigContext)
  const [width, height] = dimensions
  const annotationRefs = useRef([])
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
            // svg follows the painter model
            // so we need to move the data item
            // to end of the array for it to be drawn
            // "on top of" the other data items
            setDraggingItems(raise(config.annotations, index))
          }}
          onDragEnd={props => {
            const updatedAnnotations = [...config.annotations]
            updatedAnnotations[index].coordinates.x = props.x + props.dx
            updatedAnnotations[index].coordinates.y = props.y + props.dy
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
            console.log('an', annotationSquare)
            return (
              <Group>
                {/* prettier-ignore */}
                <rect
                  style={{ strokeWidth: 2, stroke: isDragging ? primaryColor : 'transparent', strokeDasharray: '5 5' }}
                  transform={`translate(${dx}, ${dy})`}
                  fill='transparent'
                  x={x - padding / 2}
                  y={y - annotationSquare?.height - padding / 3}
                  width={annotationSquare?.width + padding}
                  height={annotationSquare?.height + padding}
                />

                <Text
                  // prettier-ignore
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
