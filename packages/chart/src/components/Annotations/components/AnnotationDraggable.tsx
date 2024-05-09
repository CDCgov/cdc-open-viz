import { useContext, useState } from 'react'
import ConfigContext from '../../../ConfigContext'

// helpers
import { findNearestDatum } from './findNearestDatum'
import { applyBandScaleOffset } from './helpers'
import useColorScale from '../../../hooks/useColorScale'

// visx
import { HtmlLabel, CircleSubject, LineSubject, EditableAnnotation } from '@visx/annotation'
import { Drag, raise } from '@visx/drag'
import { MarkerArrow } from '@visx/marker'
import { LinePath } from '@visx/shape'
import * as allCurves from '@visx/curve'

// styles
import './AnnotationDraggable.styles.css'

const Annotations = ({ xScale, yScale, xMax }) => {
  const [draggingItems, setDraggingItems] = useState([])
  const { config, dimensions, updateConfig } = useContext(ConfigContext)
  const [width, height] = dimensions
  const { annotations } = config
  const { colorScale } = useColorScale()
  const labelPadding = 5

  const restrictedArea = { xMin: 0 + config.yAxis.size, xMax: xMax - config.yAxis.size / 2, yMax: config.heights.vertical - config.xAxis.size, yMin: 0 }

  const createPoints = annotation => {
    const { x, y, dx, dy, xKey, yKey } = annotation
    const bendFactor = 0.95 // Adjust the bend factor as needed
    const controlX = x + dx * bendFactor
    const controlY = y + dy * bendFactor
    const padding = 10

    const points = [
      { x, y, xKey, yKey, xPos: xScale(xKey), yPos: yScale(yKey) },
      // { x: controlX, y: controlY, xKey, yKey, xPos: xScale(xKey) + controlX - dx, yPos: yScale(yKey) + dy },
      { x: x + dx, y: y + dy, xKey, yKey, xPos: xScale(xKey) + dx, yPos: yScale(yKey) + dy }
    ]

    return points
  }

  return (
    annotations &&
    annotations.map((annotation, index) => {
      const points = createPoints(annotation)

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
                  <EditableAnnotation
                    width={width}
                    height={height}
                    dx={annotation.dx}
                    dy={annotation.dy}
                    x={config.xAxis.type !== 'date-time' ? applyBandScaleOffset(xScale(annotation.xKey), config, xScale) : annotation.xKey ? xScale(new Date(annotation.xKey)) + Number(config.yAxis.size) + 15 : 0}
                    y={yScale(annotation.yKey) || y}
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
                            x: xScale(nearestDatum.x) || 0,
                            y: yScale(nearestDatum.y) || 0,
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
                    <HtmlLabel className='annotation__desktop-label' anchorLineStroke={null}>
                      <div
                        style={{
                          borderRadius: 5, // Optional: set border radius
                          backgroundColor: `rgba(255, 255, 255, ${annotation?.opacity ? annotation?.opacity / 100 : 1})`,
                          border: '1px solid gray',
                          padding: '10px'
                        }}
                        dangerouslySetInnerHTML={{ __html: annotation.text }}
                      />
                    </HtmlLabel>
                    {/* Custom Connector */}
                    {/* prettier-ignore */}
                    <LinePath
                      data={points}
                      x={d => d.xPos + Number(config.yAxis.size) + (config.xAxis.type !== 'date-time' ? xScale.bandwidth() / 2 : 0) }
                      y={d => d.yPos}
                      stroke='black'
                      strokeWidth={1}
                      curve={allCurves[annotation.lineType]}
                      markerStart={`url(#marker-start)`}
                      />

                    {/* MARKERS */}
                    {annotation.marker === 'circle' && <CircleSubject className='circle-subject' stroke={colorScale(annotation.seriesKey)} />}
                    {annotation.marker === 'arrow' && <MarkerArrow fill='black' id='marker-start' x={Number(xScale(annotation.xKey))} y={yScale(annotation.yKey)} stroke='#333' markerWidth={10} size={10} strokeWidth={1} orient='auto-start-reverse' />}

                    {/* Mobile Labels */}
                    <circle
                      fill='white'
                      cx={Number(annotation.dx) + xScale(annotation.xKey) + (config.xAxis.type !== 'date-time' ? xScale.bandwidth() / 2 : 0) + Number(config.yAxis.size)}
                      cy={yScale(annotation.yKey) + Number(annotation.dy)}
                      r={16}
                      className='annotation__mobile-label annotation__mobile-label-circle'
                      stroke={colorScale(annotation.seriesKey)}
                    />

                    <text x={Number(annotation.dx) + Number(xScale(annotation.xKey)) + (config.xAxis.type !== 'date-time' ? xScale.bandwidth() / 2 : 0) + Number(config.yAxis.size) - 16 / 3} y={yScale(annotation.yKey) + Number(annotation.dy) + 5} className='annotation__mobile-label'>
                      {index + 1}
                    </text>

                    {/* ANCHORS */}
                    {annotation.anchor.horizontal && <LineSubject orientation={'horizontal'} stroke={'gray'} min={config.yAxis.size} max={xMax + Number(config.yAxis.size) + (config.xAxis.type !== 'date-time' ? xScale.bandwidth() / 2 : 0)} />}
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
