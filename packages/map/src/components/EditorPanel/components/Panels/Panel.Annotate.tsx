import React, { useContext } from 'react'

// CDC Core
import { approvedCurveTypes } from '@cdc/core/helpers/lineChartHelpers'
import Accordion from '@cdc/core/components/ui/Accordion'
import Button from '@cdc/core/components/elements/Button'
import { MapContext } from '../../../../types/MapContext'
import ConfigContext from '../../../../context'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'
// types
// styles

const PanelAnnotate: React.FC = props => {
  const {
    state: config,
    setState: updateConfig,
    dimensions,
    isDraggingAnnotation
  } = useContext<MapContext>(ConfigContext)
  const getColumns = (filter = true) => {
    const columns = {}
    config.data.forEach(row => {
      Object.keys(row).forEach(columnName => (columns[columnName] = true))
    })

    if (filter) {
      Object.keys(columns).forEach(key => {
        if (
          (config.series && config.series.filter(series => series.dataKey === key).length > 0) ||
          (config.confidenceKeys && Object.keys(config.confidenceKeys).includes(key))
        ) {
          delete columns[key]
        }
      })
    }

    return Object.keys(columns)
  }

  const handleAnnotationUpdate = (value, property, index) => {
    const annotations = [...config?.annotations]
    annotations[index][property] = value
    annotations[index].savedDimensions = [dimensions[0] * 0.73, dimensions[1]]

    updateConfig({
      ...config,
      annotations
    })
  }

  const handleAddAnnotation = () => {
    const svgContainer = document
      .querySelector('.map-container > section > svg, .map-container > section > canvas')
      ?.getBoundingClientRect()
    const newSvgDims = [svgContainer.width, svgContainer.height]

    const newAnnotation = {
      text: 'New Annotation',
      snapToNearestPoint: false,
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
      xKey: null,
      yKey: null,
      dx: 0,
      dy: 0,
      opacity: '100',
      savedDimensions: [dimensions[0] * 0.73, dimensions[1]]
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
    <Accordion>
      <Accordion.Section title={props.name}>
        <label>
          Show Annotation Dropdown
          <input
            type='checkbox'
            checked={config?.general?.showAnnotationDropdown}
            onClick={e => {
              updateConfig({
                ...config,
                general: {
                  ...config.general,
                  showAnnotationDropdown: e.target.checked
                }
              })
            }}
          />
        </label>

        <label>
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

        {config?.annotations &&
          config?.annotations.map((annotation, index) => (
            <Accordion>
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
                  {/* <label>
                      Vertical Anchor
                      <input
                        type='checkbox'
                        checked={config?.annotations[index].anchor.vertical}
                        onClick={e => {
                          const updatedAnnotations = [...config?.annotations]
                          updatedAnnotations[index].anchor.vertical = e.target.checked
                          updateConfig({
                            ...config,
                            annotations: updatedAnnotations
                          })
                        }}
                      />
                    </label>
                    <label>
                      Horizontal Anchor
                      <input
                        type='checkbox'
                        checked={config?.annotations[index].anchor.horizontal}
                        onClick={e => {
                          const updatedAnnotations = [...config?.annotations]
                          updatedAnnotations[index].anchor.horizontal = e.target.checked
                          updateConfig({
                            ...config,
                            annotations: updatedAnnotations
                          })
                        }}
                      />
                    </label> */}

                  <label>
                    Opacity
                    <br />
                    <input
                      type='range'
                      onChange={e => {
                        const updatedAnnotations = [...config?.annotations]
                        updatedAnnotations[index].opacity = e.target.value
                        updateConfig({
                          ...config,
                          annotations: updatedAnnotations
                        })
                      }}
                      value={config?.annotations?.[index]?.opacity || '100'}
                    />
                  </label>

                  <label>
                    Edit Subject
                    <input
                      type='checkbox'
                      checked={config?.annotations[index]?.edit?.subject}
                      onClick={e => {
                        const updatedAnnotations = [...config?.annotations]
                        updatedAnnotations[index].edit.subject = e.target.checked
                        updateConfig({
                          ...config,
                          annotations: updatedAnnotations
                        })
                      }}
                    />
                  </label>
                  <label>
                    Edit Label
                    <input
                      type='checkbox'
                      checked={config?.annotations[index]?.edit?.label}
                      onClick={e => {
                        const updatedAnnotations = [...config?.annotations]
                        updatedAnnotations[index].edit.label = e.target.checked
                        updateConfig({
                          ...config,
                          annotations: updatedAnnotations
                        })
                      }}
                    />
                  </label>

                  <Select
                    label='Connection Type'
                    value={config?.annotations[index]?.connectionType || ''}
                    options={['curve', 'line', 'elbow', 'none'].map(side => ({
                      value: side,
                      label: side
                    }))}
                    onChange={event => {
                      const updatedAnnotations = [...config?.annotations]
                      updatedAnnotations[index].connectionType = event.target.value
                      updateConfig({
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
                        const updatedAnnotations = [...config?.annotations]
                        updatedAnnotations[index].lineType = event.target.value
                        updateConfig({
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
                      const updatedAnnotations = [...config?.annotations]
                      updatedAnnotations[index].marker = event.target.value
                      updateConfig({
                        ...config,
                        annotations: updatedAnnotations
                      })
                    }}
                  />

                  <Button className='btn btn-danger' onClick={() => handleRemoveAnnotation(index)}>
                    Delete Annotation
                  </Button>
                </div>
              </Accordion.Section>
            </Accordion>
          ))}
        {config?.annotations?.length < 3 && (
          <button className='btn btn-primary full-width' onClick={handleAddAnnotation}>
            Add Annotation
          </button>
        )}
      </Accordion.Section>
    </Accordion>
  )
}

export default PanelAnnotate
