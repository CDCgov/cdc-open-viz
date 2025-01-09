import { useContext, useEffect, useRef, useState } from 'react'
import ConfigContext from '../../../ConfigContext'
import DOMPurify from 'dompurify'

// helpers
import { findNearestDatum } from './findNearestDatum'

// prettier-ignore
import {
  applyBandScaleOffset,
  handleConnectionHorizontalType,
  handleConnectionVerticalType,
  handleMobileXPosition,
  handleMobileYPosition,
  handleTextX,
  handleTextY
} from './helpers'

// visx
import { HtmlLabel, CircleSubject, EditableAnnotation, Connector, Annotation as VisxAnnotation } from '@visx/annotation'
import { Drag } from '@visx/drag'
import { MarkerArrow } from '@visx/marker'
import { LinePath } from '@visx/shape'

// styles
import './AnnotationDraggable.styles.css'

const Annotations = ({ xScale, yScale, xScaleAnnotation, xMax, svgRef, onDragStateChange }) => {
  // prettier-ignore
  const { config, dimensions, isEditor, updateConfig, colorScale } = useContext(ConfigContext)

  // destructure config items here...
  const { annotations } = config
  const [height] = dimensions

  const AnnotationComponent = isEditor ? EditableAnnotation : VisxAnnotation

  return (
    annotations &&
    annotations.map((annotation, index) => {
      const text = annotation.text || ''

      const annotationX = xScaleAnnotation(annotation.x)

      // sanitize the text for setting dangerouslySetInnerHTML
      const sanitizedData = () => ({
        __html: DOMPurify.sanitize(text)
      })

      return (
        <AnnotationComponent
          width={200}
          height={height}
          dx={annotation.dx} // label position
          dy={annotation.dy} // label postion
          x={annotationX}
          y={annotation.y}
          canEditLabel={annotation.edit.label || false}
          canEditSubject={(annotation.edit.subject && annotation.connectionType !== 'none') || false}
          onDragStart={() => onDragStateChange(true)}
          onDragEnd={props => {
            onDragStateChange(false)

            let updatedAnnotations = [...annotations]

            if (annotation.x === xScaleAnnotation.invert(props.x) && annotation.y === props.y) {
              updatedAnnotations[index] = { ...updatedAnnotations[index], dx: props.dx, dy: props.dy }
            } else {
              if (annotation.snapToNearestPoint) {
                let nearestDatum = findNearestDatum(
                  {
                    data: config.data,
                    xScale,
                    yScale,
                    config,
                    xMax: xMax - config.yAxis.size / 2,
                    annotationSeriesKey: annotation.seriesKey
                  },
                  props.x
                )

                updatedAnnotations[index] = {
                  ...updatedAnnotations[index],
                  x: xScaleAnnotation.invert(xScale(nearestDatum.x)),
                  y: yScale(nearestDatum.y)
                }
              } else {
                updatedAnnotations[index] = {
                  ...updatedAnnotations[index],
                  x: xScaleAnnotation.invert(props.x),
                  y: props.y
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
              d={`M ${annotationX},${annotation.y}
                      Q ${annotationX + annotation.dx / 2}, ${
                annotation.y + annotation.dy / 2 + Number(annotation?.bezier) || 0
              } ${annotationX + annotation.dx},${annotation.y + annotation.dy}`}
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
              y={annotation.y}
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
            cy={annotation.y + annotation.dy}
            r={16}
            className='annotation__mobile-label annotation__mobile-label-circle'
            stroke={colorScale(annotation.seriesKey)}
          />
          <text
            height={16}
            x={annotationX + annotation.dx}
            y={annotation.y + annotation.dy}
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
