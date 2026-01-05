import { useContext, useEffect, useRef, useState } from 'react'
import ConfigContext from '../../../ConfigContext'
import DOMPurify from 'dompurify'

// helpers
import { findNearestDatum } from './findNearestDatum'

// prettier-ignore
import {
  handleConnectionHorizontalType,
  handleConnectionVerticalType
} from './helpers'

// visx
import { HtmlLabel, CircleSubject, EditableAnnotation, Connector, Annotation as VisxAnnotation } from '@visx/annotation'
import { MarkerArrow } from '@visx/marker'
import { LinePath } from '@visx/shape'

// styles
import './AnnotationDraggable.styles.css'

const Annotations = ({ xScale, yScale, xScaleAnnotation, yScaleAnnotation, xMax, svgRef, onDragStateChange }) => {
  // prettier-ignore
  const { config, dimensions, isEditor, updateConfig, colorScale, transformedData } = useContext(ConfigContext)

  // destructure config items here...
  const { annotations } = config
  const [height] = dimensions

  const AnnotationComponent = isEditor ? EditableAnnotation : VisxAnnotation

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
          annotationX = xScale(annotation.dataX) + (xScale.bandwidth?.() / 2 || 0)
          annotationY = yScale(dataYValue) - 10
        }
      }

      // sanitize the text for setting dangerouslySetInnerHTML
      const sanitizedData = () => ({
        __html: DOMPurify.sanitize(text)
      })

      return (
        <AnnotationComponent
          key={`annotation-${index}`}
          width={200}
          height={height}
          dx={annotation.dx} // label position
          dy={annotation.dy} // label postion
          x={annotationX}
          y={annotationY}
          canEditLabel={annotation.edit.label || false}
          canEditSubject={(annotation.edit.subject && annotation.connectionType !== 'none') || false}
          onDragStart={() => onDragStateChange(true)}
          onDragEnd={props => {
            onDragStateChange(false)

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
                  xPixel: props.x
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
          <HtmlLabel
            className='annotation__desktop-label'
            showAnchorLine={false}
            horizontalAnchor={handleConnectionHorizontalType(annotation, xScale, config)}
            verticalAnchor={handleConnectionVerticalType(annotation, xScale, config)}
          >
            <div
              style={{
                borderRadius: 5, // Optional: set border radius
                backgroundColor: `rgba(255, 255, 255, ${annotation?.opacity ? Number(annotation?.opacity) / 100 : 1})`,
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
              stroke='black'
              strokeWidth='2'
              fill='none'
              marker-start={`url(#marker-start--${index})`}
            />
          )}
          {annotation.marker === 'circle' && (
            <CircleSubject
              id={`marker-start--${index}`}
              className='circle-subject'
              stroke={colorScale(annotation.seriesKey)}
              radius={8}
            />
          )}
          {annotation.marker === 'arrow' && (
            <MarkerArrow
              fill='black'
              id={`marker-start--${index}`}
              x={annotationX}
              y={annotationY}
              stroke='#333'
              markerWidth={10}
              size={10}
              strokeWidth={1}
              orient='auto-start-reverse'
              markerUnits='userSpaceOnUse'
            />
          )}
          <circle
            fill='white'
            cx={annotationX + annotation.dx}
            cy={annotationY + annotation.dy}
            r={16}
            className='annotation__mobile-label annotation__mobile-label-circle'
            stroke={colorScale(annotation.seriesKey)}
          />
          <text
            height={16}
            x={annotationX + annotation.dx}
            y={annotationY + annotation.dy}
            className='annotation__mobile-label'
            alignmentBaseline='middle'
            textAnchor='middle'
          >
            {index + 1}
          </text>
        </AnnotationComponent>
      )
    })
  )
}

export default Annotations
