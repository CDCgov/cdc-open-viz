import React, { useContext } from 'react'
import ConfigContext from '../../../../ConfigContext.js'
import { useEditorPermissions } from '../../useEditorPermissions'

// CDC Core
import Accordion from '@cdc/core/components/ui/Accordion'
import Button from '@cdc/core/components/elements/Button'
import { CheckBox, Select } from '@cdc/core/components/EditorPanel/Inputs'
import _ from 'lodash'

// types
import { type PanelProps } from './../PanelProps'
// styles
import './../panels.css'

const PanelAnnotate: React.FC<PanelProps> = props => {
  const { updateConfig, config, transformedData } = useContext(ConfigContext)
  const { visSupportsDataAnnotations } = useEditorPermissions()

  const updateField = (section, subsection, fieldName, value) => {
    if (subsection) {
      updateConfig({
        ...config,
        [section]: {
          ...config[section],
          [subsection]: {
            ...config[section][subsection],
            [fieldName]: value
          }
        }
      })
    } else {
      updateConfig({
        ...config,
        [section]: {
          ...config[section],
          [fieldName]: value
        }
      })
    }
  }

  const handleAnnotationUpdate = (value, property, index) => {
    const annotations = [...config?.annotations]
    annotations[index][property] = value

    updateConfig({
      ...config,
      annotations
    })
  }

  const handleAddAnnotation = () => {
    const newAnnotation = {
      text: 'New annotation',
      anchorMode: 'fixed',
      fontSize: 16,
      bezier: 10,
      show: {
        desktop: true,
        tablet: true,
        mobile: true
      },
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
      marker: 'arrow',
      edit: {
        subject: true,
        label: true
      },
      // seriesKey and dataX are only set when switching to data mode
      x: 50,
      y: 50,
      dx: 20,
      dy: -20,
      opacity: '100',
      connectionType: 'line'
    }

    const annotations = Array.isArray(config.annotations) ? config.annotations : []

    updateConfig({
      ...config,
      annotations: [...annotations, newAnnotation]
    })
  }

  const handleRemoveAnnotation = (annotationIndex: number) => {
    const updated = config.annotations.filter((_, index) => index !== annotationIndex)
    updateConfig({
      ...config,
      annotations: updated
    })
  }

  return (
    <Accordion key={props.name}>
      <Accordion.Section title={props.name} key={props.name}>
        <CheckBox
          value={config?.general?.showAnnotationDropdown || false}
          section='general'
          subsection={null}
          fieldName='showAnnotationDropdown'
          label='Show Annotation Dropdown'
          updateField={updateField}
        />

        {config.general.showAnnotationDropdown && (
          <label key={`key-2`}>
            Annotation Dropdown Title:
            <input
              type='text'
              style={{ marginBottom: '10px' }}
              value={config?.general?.annotationDropdownText}
              onChange={e => {
                updateConfig({
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
        {config?.annotations &&
          config?.annotations.map((annotation, index) => (
            <Accordion key={index}>
              <Accordion.Section
                title={annotation.text ? annotation.text.substring(0, 15) + '...' : `Annotation ${index + 1}`}
              >
                <div className='annotation-group'>
                  <label>
                    Annotation Text:
                    <textarea
                      rows={5}
                      value={annotation.text}
                      onChange={e => handleAnnotationUpdate(e.target.value, 'text', index)}
                    />
                  </label>

                  {visSupportsDataAnnotations() && (
                    <Select
                      label='Position Mode:'
                      value={annotation.anchorMode || 'fixed'}
                      options={[
                        { value: 'fixed', label: 'Fixed position' },
                        { value: 'data', label: 'Snap to data' }
                      ]}
                      section='annotations'
                      subsection={null}
                      fieldName='anchorMode'
                      updateField={(section, subsection, fieldName, value) => {
                        const updatedAnnotations = _.cloneDeep(config?.annotations)
                        updatedAnnotations[index].anchorMode = value

                        // When switching to data mode, ensure seriesKey and dataX are initialized
                        if (value === 'data') {
                          if (!updatedAnnotations[index].seriesKey) {
                            updatedAnnotations[index].seriesKey = config.series?.[0]?.dataKey || ''
                          }
                          if (!updatedAnnotations[index].dataX) {
                            updatedAnnotations[index].dataX = transformedData?.[0]?.[config.xAxis.dataKey] || ''
                          }
                        }

                        updateConfig({
                          ...config,
                          annotations: updatedAnnotations
                        })
                      }}
                    />
                  )}

                  {visSupportsDataAnnotations() && annotation.anchorMode === 'data' && (
                    <Select
                      label='Series:'
                      value={annotation.seriesKey || config.series?.[0]?.dataKey || ''}
                      options={config.series.map(s => s.dataKey)}
                      section='annotations'
                      subsection={null}
                      fieldName='seriesKey'
                      updateField={(section, subsection, fieldName, value) => {
                        const updatedAnnotations = _.cloneDeep(config?.annotations)
                        updatedAnnotations[index].seriesKey = value || config.series?.[0]?.dataKey
                        updateConfig({
                          ...config,
                          annotations: updatedAnnotations
                        })
                      }}
                    />
                  )}

                  <label>
                    Opacity
                    <br />
                    <input
                      type='range'
                      onChange={e => {
                        const updatedAnnotations = _.cloneDeep(config?.annotations)
                        updatedAnnotations[index].opacity = e.target.value
                        updateConfig({
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
                    updateField={(section, subsection, fieldName, value) => {
                      const updatedAnnotations = _.cloneDeep(config?.annotations)
                      updatedAnnotations[index].edit.subject = value
                      updateConfig({
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
                    updateField={(section, subsection, fieldName, value) => {
                      const updatedAnnotations = _.cloneDeep(config?.annotations)
                      updatedAnnotations[index].edit.label = value
                      updateConfig({
                        ...config,
                        annotations: updatedAnnotations
                      })
                    }}
                  />

                  <Select
                    label='Connection Type:'
                    value={config?.annotations[index]?.connectionType}
                    options={['Select', 'curve', 'line', 'elbow', 'none']}
                    section='annotations'
                    subsection={null}
                    fieldName='connectionType'
                    updateField={(section, subsection, fieldName, value) => {
                      const updatedAnnotations = _.cloneDeep(config?.annotations)
                      updatedAnnotations[index].connectionType = value
                      updateConfig({
                        ...config,
                        annotations: updatedAnnotations
                      })
                    }}
                  />

                  {annotation.connectionType === 'curve' && (
                    <>
                      <label>
                        Curve Control
                        {/* create a range input */}
                        <input
                          type='range'
                          min='-20'
                          max='20'
                          value={config?.annotations[index]?.bezier || 0}
                          onChange={e => {
                            const updatedAnnotations = _.cloneDeep(config?.annotations)
                            updatedAnnotations[index].bezier = e.target.value
                            updateConfig({
                              ...config,
                              annotations: updatedAnnotations
                            })
                          }}
                        />
                      </label>
                    </>
                  )}

                  <Select
                    label='Marker'
                    value={annotation.marker}
                    options={['arrow', 'circle']}
                    section='annotations'
                    subsection={null}
                    fieldName='marker'
                    updateField={(section, subsection, fieldName, value) => {
                      const updatedAnnotations = _.cloneDeep(config?.annotations)
                      updatedAnnotations[index].marker = value
                      updateConfig({
                        ...config,
                        annotations: updatedAnnotations
                      })
                    }}
                  />

                  <Button className='btn btn-danger full-width' onClick={() => handleRemoveAnnotation(index)}>
                    Delete Annotation
                  </Button>
                </div>
              </Accordion.Section>
            </Accordion>
          ))}
        {config?.annotations?.length < 3 && (
          <button onClick={handleAddAnnotation} className='btn btn-primary mt-2 full-width'>
            Add Annotation
          </button>
        )}
      </Accordion.Section>
    </Accordion>
  )
}

export default PanelAnnotate
