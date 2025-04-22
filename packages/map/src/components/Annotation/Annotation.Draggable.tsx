import React, { useContext, useState } from 'react'

// visx
import { HtmlLabel, CircleSubject, EditableAnnotation, Connector, Annotation as VisxAnnotation } from '@visx/annotation'
import { Drag, raise } from '@visx/drag'
import { MarkerArrow } from '@visx/marker'

// styles
import './Annotation.Draggable.styles.css'
import ConfigContext from '../../context'
import { MapContext } from '../../types/MapContext'

type AnnotationsProps = {
  onDragStateChange: (state: boolean) => void
}

const Annotations: React.FC<AnnotationsProps> = ({ onDragStateChange }) => {
  const [draggingItems, setDraggingItems] = useState([])
  const {
    config,
    setConfig,
    isDraggingAnnotation,
    isEditor,
    dimensions
  } = useContext<MapContext>(ConfigContext)
  const [width, height] = dimensions
  const { annotations } = config
  const AnnotationComponent = isEditor ? EditableAnnotation : VisxAnnotation

  return (
    annotations &&
    annotations.map((annotation, index) => {
      const { marker, x, y, dx, dy, edit, connectionType } = annotation

      return (
        <>
          <Drag
            key={`annotation--${index}`}
            width={width}
            height={height}
            x={x}
            y={y} // subject y
            onDragStart={() => {
              setDraggingItems(raise(annotations, index))
            }}
          >
            {({ dragStart, dragEnd, dragMove }) => {
              return (
                <>
                  <AnnotationComponent
                    dx={dx} // label position
                    dy={dy} // label postion
                    x={x}
                    y={y}
                    canEditLabel={edit.label || false}
                    canEditSubject={edit.subject || false}
                    labelDragHandleProps={{ r: 15, stroke: isDraggingAnnotation ? 'red' : 'var(--primary)' }}
                    subjectDragHandleProps={{ r: 15, stroke: isDraggingAnnotation ? 'red' : 'var(--primary)' }}
                    onDragEnd={props => {
                      onDragStateChange(false)
                      const updatedAnnotations = annotations.map((annotation, idx) => {
                        if (idx === index) {
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

                      setConfig({
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

                    {connectionType === 'line' && (
                      <Connector type='line' pathProps={{ markerStart: 'url(#marker-start)' }} />
                    )}

                    {connectionType === 'elbow' && (
                      <Connector type='elbow' pathProps={{ markerStart: 'url(#marker-start)' }} />
                    )}

                    {/* MARKERS */}
                    {marker === 'circle' && <CircleSubject className='circle-subject' stroke={'black'} radius={8} />}
                    {marker === 'arrow' && (
                      <MarkerArrow
                        fill='black'
                        id='marker-start'
                        x={x}
                        y={dy}
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
