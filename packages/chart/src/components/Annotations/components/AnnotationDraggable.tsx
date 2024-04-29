import { useContext, useState, useRef, useEffect } from 'react'
import ConfigContext from '../../../ConfigContext'
import { Drag, raise } from '@visx/drag'
import { Label, Connector, CircleSubject, LineSubject, EditableAnnotation } from '@visx/annotation'
import { findNearestDatum } from './findNearestDatum'
import { applyBandScaleOffset } from './helpers'
import { scaleOrdinal } from '@visx/scale'
import { MarkerArrow } from '@visx/marker'
import { LinePath } from '@visx/shape'

import './AnnotationDraggable.styles.css'
import useColorScale from '../../../hooks/useColorScale'

const Annotations = ({ xScale, yScale, xMax }) => {
  const [draggingItems, setDraggingItems] = useState([])
  const { config, dimensions, updateConfig } = useContext(ConfigContext)
  const [width, height] = dimensions
  const prevDimensions = useRef(dimensions)
  const { annotations } = config
  const { colorScale } = useColorScale()

  const restrictedArea = { xMin: 0 + config.yAxis.size, xMax: xMax - config.yAxis.size / 2, yMax: config.heights.vertical - config.xAxis.size, yMin: 0 }

  const convertXValueToTimestamp = (xValue, minX, maxX, domain) => {
    // Calculate the percentage position of xValue between minX and maxX
    const percentage = (xValue - minX) / (maxX - minX)

    // Calculate the index in the domain array corresponding to the percentage position
    const index = Math.round(percentage * (domain.length - 1))

    // Return the timestamp from the domain array at the calculated index
    return domain[index]
  }

  const getXValueFromCoordinate = (x, isClick = false) => {
    const { visualizationType, orientation } = config
    if (visualizationType === 'Pie') return
    if (orientation === 'horizontal') return

    // Check the type of x equal to point or if the type of xAxis is equal to continuous or date
    if (config.xAxis.type === 'categorical' || (visualizationType === 'Combo' && orientation !== 'horizontal' && visualizationType !== 'Forest Plot')) {
      let range = xScale.range()[1] - xScale.range()[0]
      let eachBand = range / (xScale.domain().length + 1)

      let numerator = x
      const index = Math.floor((Number(numerator) - eachBand / 2) / eachBand)
      return xScale.domain()[index] // fixes off by 1 error
    }

    if (config.xAxis.type === 'date') {
      const xTimestamp = convertXValueToTimestamp(x, 0, xMax, xScale.domain())

      // Calculate the closest date to the x coordinate
      let closestDate = null
      let minDistance = Number.MAX_VALUE

      xScale.domain().forEach(timestamp => {
        const distance = Math.abs(xTimestamp - timestamp)
        if (distance < minDistance) {
          minDistance = distance
          closestDate = timestamp
        }
      })

      return closestDate
    }

    return x
  }

  // useEffect(() => {
  //   const handleResize = () => {
  //     const [prevWidth, prevHeight] = prevDimensions.current

  //     // Calculate the scaling factors for both axes
  //     const xScaleFactor = width / prevWidth
  //     const yScaleFactor = height / prevHeight

  //     // Update the previous dimensions
  //     prevDimensions.current = [width, height]

  //     // Update the annotation positions
  //     const updatedAnnotations = config.annotations.map((annotation, index) => {
  //       // Calculate new x and y positions based on the scaling factors
  //       const nearestDatum = findNearestDatum(
  //         {
  //           data: config.data.map(data => data[config.xAxis.dataKey]),
  //           xScale,
  //           yScale,
  //           config,
  //           xMax: xMax - config.yAxis.size / 2
  //         },
  //         annotation.x
  //       )

  //       const x = annotation.x * xScaleFactor

  //       const y = annotation.y * yScaleFactor

  //       return {
  //         ...annotation,
  //         x: xScale(getXValueFromCoordinate(annotation.x)),
  //         y: y
  //       }
  //     })

  //     // Update the annotations in your config or state
  //     // For example, if config is a state variable:
  //     setTimeout(() => {
  //       updateConfig({ ...config, annotations: updatedAnnotations })
  //     }, 1000)
  //   }

  //   window.addEventListener('resize', handleResize)
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [width, height, config, xMax])

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
                    width={width}
                    height={height}
                    dx={annotation.dx}
                    dy={annotation.dy}
                    x={config.xAxis.type !== 'date-time' ? applyBandScaleOffset(xScale(annotation.xKey), config, xScale) : annotation.xKey ? xScale(new Date(annotation.xKey)) + Number(config.yAxis.size) : 0}
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
                            x: xScale(nearestDatum.x),
                            y: yScale(nearestDatum.y),
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
                    <Label className='annotation__desktop-label' title={annotation.title} subtitle={annotation.text} backgroundFill='#f5f5f5' backgroundProps={{ opacity: annotation.opacity ? Number(annotation.opacity) / 100 : 1 }} />
                    <Connector />
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

                    {annotation.marker === 'arrow' && (
                      <>
                        <MarkerArrow
                          markerWidth={10}
                          markerHeight={10}
                          id='marker-arrow-odd'
                          refX={Number(annotation.dx) + xScale(annotation.xKey) + (config.xAxis.type !== 'date-time' ? xScale.bandwidth() / 2 : 0) + Number(config.yAxis.size)}
                          refY={yScale(annotation.yKey) + Number(annotation.dy)}
                          stroke='#333'
                          size={22}
                          strokeWidth={4}
                          markerUnits='userSpaceOnUse'
                        />
                        <LinePath
                          curve={'curveMonotoneX'}
                          data={config.data}
                          x={d => xScale(d[annotation.xKey]) ?? 0}
                          y={d => yScale(d[annotation.yKey]) ?? 0}
                          stroke='#333'
                          strokeWidth={2}
                          strokeOpacity={1}
                          shapeRendering='geometricPrecision'
                          markerMid='url(#marker-circle)'
                          markerStart={'url(#marker-arrow)'}
                          markerEnd={'url(#marker-arrow)'}
                        />
                      </>
                    )}
                    {annotation.marker === 'circle' && <CircleSubject className='circle-subject' stroke={colorScale(annotation.seriesKey)} />}
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
