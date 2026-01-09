import { useContext, useEffect, useRef, useState } from 'react'
import ConfigContext from '../../../ConfigContext'
import DOMPurify from 'dompurify'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'
import { isMobileAnnotationViewport } from '@cdc/core/helpers/viewports'

// helpers
import { findNearestDatum } from './findNearestDatum'

// visx
import { HtmlLabel, CircleSubject, EditableAnnotation, Connector, Annotation as VisxAnnotation } from '@visx/annotation'
import { MarkerArrow } from '@visx/marker'
import { LinePath } from '@visx/shape'

// styles
import './AnnotationDraggable.styles.css'

const Annotations = ({ xScale, yScale, xScaleAnnotation, yScaleAnnotation, xMax, svgRef, onDragStateChange }) => {
  // prettier-ignore
  const { config, dimensions, isEditor, updateConfig, colorScale, transformedData, parseDate, currentViewport } = useContext(ConfigContext)

  // destructure config items here...
  const { annotations, visualizationType } = config
  const [height] = dimensions

  const AnnotationComponent = isEditor ? EditableAnnotation : VisxAnnotation
  const isMobile = isMobileAnnotationViewport(currentViewport)

  // Track live drag position for real-time anchor calculations
  const [liveDrag, setLiveDrag] = useState<{ index: number; dx: number } | null>(null)

  // Helper to determine label anchoring when near chart edges
  const getAnnotationAnchors = (annotationX: number, dx: number, labelWidth: number) => {
    const endpointX = annotationX + dx

    const leftOverflow = dx < 0 && endpointX - labelWidth < 0
    const rightOverflow = dx > 0 && endpointX + labelWidth > xMax

    if (leftOverflow || rightOverflow) {
      // Center label above the endpoint
      return { horizontalAnchor: 'middle' as const, verticalAnchor: 'end' as const }
    }

    // Let visx auto-decide
    return { horizontalAnchor: null, verticalAnchor: null }
  }

  return (
    annotations &&
    annotations.map((annotation, index) => {
      const text = annotation.text || ''

      // Default to absolute positioning
      let annotationX = xScaleAnnotation(annotation.x)
      let annotationY = yScaleAnnotation(annotation.y)

      // Override with data-anchored positioning if applicable
      if (annotation.anchorMode === 'data' && annotation.dataX !== undefined) {
        const dataSource = transformedData || config.data
        const dataPoint = dataSource.find(d => d[config.xAxis.dataKey] === annotation.dataX)

        if (dataPoint) {
          const dataYValue = dataPoint[annotation.seriesKey]

          // For date/date-time axes, convert raw value to timestamp for scale
          let xScaleInput = annotation.dataX
          if (config.xAxis.type === 'date' || config.xAxis.type === 'date-time') {
            xScaleInput = parseDate(xScaleInput, false)?.getTime()
          }

          // Base X position (centered on data point)
          annotationX = xScale(xScaleInput) + (xScale.bandwidth?.() / 2 || 0)

          // Adjust X for arrow markers based on label direction
          if (annotation.marker === 'arrow' && Math.abs(annotation.dx) >= 100) {
            const direction = annotation.dx > 0 ? 1 : -1
            const nudgeAmount = xScale.bandwidth?.() ? xScale.bandwidth() / 6 : 2
            annotationX += direction * nudgeAmount
          }

          // Y position based on marker type
          annotationY = yScale(dataYValue) - (annotation.marker === 'circle' ? 0 : 5)
        }
      }

      // sanitize the text for setting dangerouslySetInnerHTML
      const sanitizedData = () => ({
        __html: DOMPurify.sanitize(text)
      })

      return (
        <AnnotationComponent
          key={`annotation-${index}-${annotation.x}-${annotation.y}-${annotation.dx}-${annotation.dy}`}
          width={200}
          height={height}
          dx={annotation.dx} // label position
          dy={annotation.dy} // label postion
          x={annotationX}
          y={annotationY}
          canEditLabel={annotation.edit.label || false}
          canEditSubject={(annotation.edit.subject && annotation.connectionType !== 'none') || false}
          labelDragHandleProps={{ r: 15, stroke: 'red' }}
          subjectDragHandleProps={{ r: 15, stroke: 'red' }}
          onDragStart={() => {
            onDragStateChange(true)
            setLiveDrag({ index, dx: annotation.dx })
          }}
          onDragMove={props => {
            setLiveDrag({ index, dx: props.dx })
          }}
          onDragEnd={props => {
            onDragStateChange(false)
            setLiveDrag(null)

            let updatedAnnotations = [...annotations]

            const isLabelOnlyDrag =
              annotation.anchorMode === 'data'
                ? annotationX === props.x && annotationY === props.y
                : annotation.x === xScaleAnnotation.invert(props.x) && annotation.y === yScaleAnnotation.invert(props.y)

            if (isLabelOnlyDrag) {
              updatedAnnotations[index] = { ...updatedAnnotations[index], dx: props.dx, dy: props.dy }
            } else {
              if (annotation.anchorMode === 'data') {
                let nearestDatum = findNearestDatum({
                  data: transformedData || config.data,
                  xScale,
                  xAxisType: config.xAxis.type,
                  xAxisDataKey: config.xAxis.dataKey,
                  seriesKey: annotation.seriesKey,
                  xPixel: props.x,
                  parseDate
                })

                if (nearestDatum) {
                  updatedAnnotations[index] = {
                    ...updatedAnnotations[index],
                    dataX: nearestDatum.x,
                    x: xScaleAnnotation.invert(props.x),
                    y: yScaleAnnotation.invert(props.y)
                  }
                }
              } else {
                updatedAnnotations[index] = {
                  ...updatedAnnotations[index],
                  x: xScaleAnnotation.invert(props.x),
                  y: yScaleAnnotation.invert(props.y)
                }
              }
            }

            updateConfig({
              ...config,
              annotations: updatedAnnotations
            })
          }}
        >
          {!isMobile &&
            (() => {
              const labelWidth = config.general.showAnnotationDropdown ? 200 : 150
              // Use live dx during drag, otherwise use stored annotation.dx
              const currentDx = liveDrag?.index === index ? liveDrag.dx : annotation.dx
              const { horizontalAnchor, verticalAnchor } = getAnnotationAnchors(annotationX, currentDx, labelWidth)
              return (
                <HtmlLabel
                  className='annotation__desktop-label'
                  containerStyle={{ width: `${labelWidth}px` }}
                  horizontalAnchor={horizontalAnchor}
                  verticalAnchor={verticalAnchor}
                  showAnchorLine={false}
                >
                  <div
                    style={{
                      borderRadius: 5, // Optional: set border radius
                      backgroundColor: `rgba(255, 255, 255, ${
                        annotation?.opacity ? Number(annotation?.opacity) / 100 : 1
                      })`,
                      padding: '10px',
                      width: 'auto',
                      display: config.general.showAnnotationDropdown ? 'inline-flex' : 'flex',
                      justifyContent: 'start',
                      flexDirection: 'row'
                    }}
                    // role='presentation'
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
                    <div dangerouslySetInnerHTML={sanitizedData()} />
                  </div>
                </HtmlLabel>
              )
            })()}
          {annotation.connectionType === 'line' && (
            <Connector type='line' pathProps={{ markerStart: `url(#marker-start--${index})` }} />
          )}
          {annotation.connectionType === 'elbow' && (
            <Connector type='elbow' pathProps={{ markerStart: `url(#marker-start--${index})` }} />
          )}
          {annotation.connectionType === 'curve' && (
            <LinePath
              d={`M ${annotationX},${annotationY}
                      Q ${annotationX + annotation.dx / 2}, ${
                annotationY + annotation.dy / 2 + Number(annotation?.bezier) || 0
              } ${annotationX + annotation.dx},${annotationY + annotation.dy}`}
              stroke={APP_FONT_COLOR}
              fill='none'
              marker-start={`url(#marker-start--${index})`}
            />
          )}
          {annotation.marker === 'circle' && (
            <CircleSubject className='circle-subject' stroke={APP_FONT_COLOR} radius={8} />
          )}
          {annotation.marker === 'arrow' && (
            <MarkerArrow
              fill={APP_FONT_COLOR}
              id={`marker-start--${index}`}
              x={annotationX}
              y={annotationY}
              stroke={APP_FONT_COLOR}
              markerWidth={12}
              size={10}
              strokeWidth={1}
              orient='auto-start-reverse'
              markerUnits='userSpaceOnUse'
            />
          )}
          {isMobile && (
            <>
              <circle
                fill='white'
                cx={annotationX + annotation.dx}
                cy={annotationY + annotation.dy}
                r={12}
                className='annotation__mobile-label annotation__mobile-label-circle'
                stroke={APP_FONT_COLOR}
              />
              <text
                height={16}
                x={annotationX + annotation.dx}
                y={annotationY + annotation.dy + 1}
                fontSize={14}
                className='annotation__mobile-label'
                alignmentBaseline='middle'
                textAnchor='middle'
              >
                {index + 1}
              </text>
            </>
          )}
        </AnnotationComponent>
      )
    })
  )
}

export default Annotations
