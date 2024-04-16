import React, { useContext, useState, useRef, useEffect } from 'react'
import ConfigContext from '../../../ConfigContext'
import { Drag, raise } from '@visx/drag'
import { Text } from '@visx/text'
import { Group } from '@visx/group'
import { HtmlLabel, Label, Connector, CircleSubject, LineSubject, EditableAnnotation } from '@visx/annotation'
import { findNearestDatum } from './findNearestDatum'
import { updateOrdinalScale } from '@visx/scale/lib/scales/ordinal'
import { update } from 'lodash'

const Annotations = ({ xScale, yScale, xMax }) => {
  const [draggingItems, setDraggingItems] = useState([])
  const { config, dimensions, updateConfig } = useContext(ConfigContext)
  const [width, height] = dimensions

  const { annotations } = config

  const restrictedArea = { xMin: 0 + config.yAxis.size, xMax: xMax - config.yAxis.size / 2, yMax: config.heights.vertical - config.xAxis.size, yMin: 0 }
  const applyBandScaleOffset = (num: number) => num + Number(config.yAxis.size) + xScale.bandwidth() / 2

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
            restrict={restrictedArea}
            onDragStart={() => {
              setDraggingItems(raise(annotations, index))
            }}
          >
            {({ dragStart, dragEnd, dragMove, isDragging, x, y, dx, dy }) => {
              var style = getComputedStyle(document.body)
              return (
                <>
                  <EditableAnnotation
                    dx={dx}
                    dy={dy}
                    x={applyBandScaleOffset(annotation.x) || x}
                    y={annotation.y || y}
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
                              xMax: xMax - config.yAxis.size / 2
                            },
                            props.x
                          )

                          return {
                            ...annotation,
                            xKey: nearestDatum.x,
                            yKey: nearestDatum.y[0],
                            x: xScale(nearestDatum.x),
                            y: yScale(nearestDatum.y[0]),
                            dx: dx,
                            dy: dy
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
                    <Label className='annotation-box' title={annotation.title} subtitle={annotation.text} backgroundFill='#f5f5f5' />
                    <Connector />
                    <CircleSubject className='circle-subject' stroke={style.getPropertyValue('--primary')} />
                    {annotation.anchor.horizontal && <LineSubject orientation={'horizontal'} stroke={'gray'} min={config.yAxis.size} max={xMax + Number(config.yAxis.size) + xScale.bandwidth() / 2} />}
                    {annotation.anchor.vertical && <LineSubject orientation={'vertical'} stroke={'gray'} min={config.heights.vertical - config.xAxis.size} max={0} />}
                  </EditableAnnotation>
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
