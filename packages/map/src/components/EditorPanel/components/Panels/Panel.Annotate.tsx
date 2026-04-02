import React, { useContext } from 'react'
import cloneDeep from 'lodash/cloneDeep'

// CDC Core
import { approvedCurveTypes } from '@cdc/core/helpers/lineChartHelpers'
import Accordion from '@cdc/core/components/ui/Accordion'
import Button from '@cdc/core/components/elements/Button'
import GroupedList from '@cdc/core/components/EditorPanel/GroupedList'
import { MapContext } from '../../../../types/MapContext'
import ConfigContext from '../../../../context'
import { CheckBox, Select } from '@cdc/core/components/EditorPanel/Inputs'
import {
  Accordion as AccessibleAccordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
// types
// styles

const PanelAnnotate: React.FC = props => {
  const { config, setConfig, dimensions } = useContext<MapContext>(ConfigContext)

  /**
   * Get the current SVG/canvas dimensions for saving with annotations.
   * Uses getBoundingClientRect for consistency with how annotations are rendered.
   * Falls back to context dimensions if DOM query fails.
   */
  const getMapDimensions = (): [number, number] => {
    const container = document
      .querySelector('.map-container > section > svg, .map-container > section > canvas')
      ?.getBoundingClientRect()
    if (container && container.width > 0 && container.height > 0) {
      return [container.width, container.height]
    }
    // Fallback to context dimensions
    return dimensions as [number, number]
  }

  const handleAnnotationUpdate = (value, property, index) => {
    const annotations = [...config?.annotations]
    annotations[index][property] = value
    annotations[index].savedDimensions = getMapDimensions()

    setConfig({
      ...config,
      annotations
    })
  }

  const handleAddAnnotation = () => {
    const newSvgDims = getMapDimensions()

    const newAnnotation = {
      text: 'New annotation',
      anchorMode: 'fixed',
      fontSize: 16,
      show: {
        desktop: true,
        tablet: true,
        mobile: true
      },
      markerType: 'arrow',
      connectorType: 'line',
      colors: {
        label: 'black',
        connector: 'black',
        marker: 'black'
      },
      selected: true,
      anchor: {
        vertical: false,
        horizontal: false
      },
      connectionType: 'line',
      marker: 'arrow',
      edit: {
        subject: true,
        label: true
      },
      seriesKey: '',
      x: Number(newSvgDims?.[0]) / 2,
      y: Number(newSvgDims?.[1] / 2),
      dx: 0,
      dy: 0,
      opacity: '100',
      savedDimensions: newSvgDims as [number, number]
    }

    const annotations = Array.isArray(config.annotations) ? config.annotations : []

    setConfig({
      ...config,
      annotations: [...annotations, newAnnotation]
    })
  }

  const handleRemoveAnnotation = (annotationIndex: number) => {
    const updated = config.annotations.filter((_, index) => index !== annotationIndex)
    setConfig({
      ...config,
      annotations: updated
    })
  }

  return (
    <Accordion>
      <Accordion.Section title={props.name}>
        <CheckBox
          value={config?.general?.showAnnotationDropdown || false}
          section='general'
          subsection={null}
          fieldName='showAnnotationDropdown'
          label='Show Annotation Dropdown'
          updateField={(_section, _subsection, _fieldName, value) => {
            setConfig({
              ...config,
              general: {
                ...config.general,
                showAnnotationDropdown: value
              }
            })
          }}
        />

        {config.general.showAnnotationDropdown && (
          <label>
            Annotation Dropdown Title:
            <input
              type='text'
              style={{ marginBottom: '10px' }}
              value={config?.general?.annotationDropdownText}
              onChange={e => {
                setConfig({
                  ...config,
                  general: {
                    ...config.general,
                    annotationDropdownText: e.target.value
                  }
                })
              }}
            />
          </label>
        )}

        <GroupedList
          items={config?.annotations}
          label='Text Annotations'
          droppableId='map-annotations-order'
          draggable={false}
          renderItem={(annotation, index) => (
            <AccessibleAccordion key={`annotation-${index}`} allowZeroExpanded>
              <AccordionItem className='series-item series-item--chart'>
                <AccordionItemHeading className='series-item__title'>
                  <AccordionItemButton className='accordion__button'>
                    {annotation.text ? annotation.text.substring(0, 15) + '...' : `Annotation ${index + 1}`}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className='series-item__panel-actions'>
                    <Button
                      type='button'
                      variant='danger'
                      size='sm'
                      className='grouped-list__remove'
                      onClick={() => handleRemoveAnnotation(index)}
                    >
                      Delete Annotation
                    </Button>
                  </div>
                  <label>
                    Annotation Text:
                    <textarea
                      rows={5}
                      value={annotation.text}
                      onChange={e => handleAnnotationUpdate(e.target.value, 'text', index)}
                    />
                  </label>

                  <label>
                    Opacity
                    <br />
                    <input
                      type='range'
                      onChange={e => {
                        const updatedAnnotations = cloneDeep(config?.annotations)
                        updatedAnnotations[index].opacity = e.target.value
                        setConfig({
                          ...config,
                          annotations: updatedAnnotations
                        })
                      }}
                      value={config?.annotations?.[index]?.opacity || '100'}
                    />
                  </label>

                  <CheckBox
                    value={config?.annotations[index]?.edit?.subject || false}
                    section='annotations'
                    subsection={null}
                    fieldName={`${index}.edit.subject`}
                    label='Edit Subject'
                    updateField={(_section, _subsection, _fieldName, value) => {
                      const updatedAnnotations = cloneDeep(config?.annotations)
                      updatedAnnotations[index].edit.subject = value
                      setConfig({
                        ...config,
                        annotations: updatedAnnotations
                      })
                    }}
                  />
                  <CheckBox
                    value={config?.annotations[index]?.edit?.label || false}
                    section='annotations'
                    subsection={null}
                    fieldName={`${index}.edit.label`}
                    label='Edit Label'
                    updateField={(_section, _subsection, _fieldName, value) => {
                      const updatedAnnotations = cloneDeep(config?.annotations)
                      updatedAnnotations[index].edit.label = value
                      setConfig({
                        ...config,
                        annotations: updatedAnnotations
                      })
                    }}
                  />

                  <Select
                    label='Connection Type'
                    value={config?.annotations[index]?.connectionType || ''}
                    options={['curve', 'line', 'elbow', 'none'].map(side => ({
                      value: side,
                      label: side
                    }))}
                    onChange={event => {
                      const updatedAnnotations = cloneDeep(config?.annotations)
                      updatedAnnotations[index].connectionType = event.target.value
                      setConfig({
                        ...config,
                        annotations: updatedAnnotations
                      })
                    }}
                  />

                  {annotation.connectionType === 'curve' && (
                    <Select
                      label='Line Type'
                      value={config?.annotations[index]?.lineType || ''}
                      options={Object.entries(approvedCurveTypes).map(([value, key]) => ({
                        value: key,
                        label: value
                      }))}
                      onChange={event => {
                        const updatedAnnotations = cloneDeep(config?.annotations)
                        updatedAnnotations[index].lineType = event.target.value
                        setConfig({
                          ...config,
                          annotations: updatedAnnotations
                        })
                      }}
                    />
                  )}

                  <Select
                    label='Marker'
                    value={config?.annotations[index]?.marker || ''}
                    options={['circle', 'arrow'].map(option => ({
                      value: option,
                      label: option
                    }))}
                    onChange={event => {
                      const updatedAnnotations = cloneDeep(config?.annotations)
                      updatedAnnotations[index].marker = event.target.value
                      setConfig({
                        ...config,
                        annotations: updatedAnnotations
                      })
                    }}
                  />
                </AccordionItemPanel>
              </AccordionItem>
            </AccessibleAccordion>
          )}
        />
        {config?.annotations?.length < 3 && (
          <Button variant='editor-primary' onClick={handleAddAnnotation}>
            Add Annotation
          </Button>
        )}
      </Accordion.Section>
    </Accordion>
  )
}

export default PanelAnnotate
