import { useContext, useState, useRef } from 'react'

// visx
import { HtmlLabel, CircleSubject, EditableAnnotation, Connector, Annotation as VisxAnnotation } from '@visx/annotation'
import { Drag, raise } from '@visx/drag'
import { MarkerArrow } from '@visx/marker'

// styles
import './Annotation.Draggable.styles.css'
import ConfigContext from '../../context'
import { MapContext } from '../../types/MapContext'

const Annotations = ({ xScale, yScale, xMax, svgRef, onDragStateChange }) => {
  const [draggingItems, setDraggingItems] = useState([])
  const {
    state: config,
    setState: updateConfig,
    isDraggingAnnotation,
    isEditor,
    dimensions
  } = useContext<MapContext>(ConfigContext)
  const [width, height] = dimensions
  const { annotations } = config
  const prevDimensions = useRef(dimensions)
  const AnnotationComponent = isEditor ? EditableAnnotation : VisxAnnotation

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
                    labelDragHandleProps={{ r: 15, stroke: isDraggingAnnotation ? 'red' : 'var(--primary)' }}
                    subjectDragHandleProps={{ r: 15, stroke: isDraggingAnnotation ? 'red' : 'var(--primary)' }}
                    onDragEnd={props => {
                      onDragStateChange(false)
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
                    onDragStart={() => {
                      onDragStateChange(true)
                    }}
                  >
                    <HtmlLabel className='' showAnchorLine={false}>
                      <div
                        style={{
                          padding: '10px',
                          borderRadius: 5, // Optional: set border radius
                          backgroundColor: `rgba(255, 255, 255, ${
                            annotation?.opacity ? Number(annotation?.opacity) / 100 : 1
                          })`
                        }}
                        role='presentation'
                        // ! IMPORTANT: Workaround for 508
                        // - HTML needs to be set from the editor and we need a wrapper with the tabIndex
                        // - TabIndex is only supposed to be used on interactive elements. This is a workaround.
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                        tabIndex={0}
                        aria-label={`Annotation text that reads: ${annotation.text}`}
                        dangerouslySetInnerHTML={{ __html: annotation.text }}
                      />
                    </HtmlLabel>

                    {annotation.connectionType === 'line' && (
                      <Connector type='line' pathProps={{ markerStart: 'url(#marker-start)' }} />
                    )}

                    {annotation.connectionType === 'elbow' && (
                      <Connector type='elbow' pathProps={{ markerStart: 'url(#marker-start)' }} />
                    )}

                    {/* MARKERS */}
                    {annotation.marker === 'circle' && (
                      <CircleSubject className='circle-subject' stroke={'black'} radius={8} />
                    )}
                    {annotation.marker === 'arrow' && (
                      <MarkerArrow
                        fill='black'
                        id='marker-start'
                        x={annotation.x}
                        y={annotation.dy}
                        stroke='#333'
                        markerWidth={10}
                        size={10}
                        strokeWidth={1}
                        orient='auto-start-reverse'
                      />
                    )}
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
