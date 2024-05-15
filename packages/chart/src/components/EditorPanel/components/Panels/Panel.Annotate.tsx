import React from 'react'
import { useContext } from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { type PanelProps } from './../PanelProps'
import Button from '@cdc/core/components/elements/Button'
import ConfigContext from '../../../../ConfigContext.js'
import { approvedCurveTypes } from '@cdc/core/helpers/lineChartHelpers'

import './../panels.scss'
import { s } from 'vitest/dist/reporters-1evA5lom'

const PanelAnnotate: React.FC<PanelProps> = props => {
  const { updateConfig, config, unfilteredData, dimensions } = useContext(ConfigContext)

  const getColumns = (filter = true) => {
    let columns = {}
    unfilteredData.forEach(row => {
      Object.keys(row).forEach(columnName => (columns[columnName] = true))
    })

    if (filter) {
      Object.keys(columns).forEach(key => {
        if (
          (config.series && config.series.filter(series => series.dataKey === key).length > 0) ||
          (config.confidenceKeys && Object.keys(config.confidenceKeys).includes(key))
          /*
            TODO: Resolve errors when config keys exist, but have no value
              Proposal:  (((confidenceUpper && confidenceLower) || confidenceUpper || confidenceLower) && Object.keys(config.confidenceKeys).includes(key))
          */
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
    const svgContainer = document.querySelector('.chart-container > div > svg')?.getBoundingClientRect()
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
      xKey: config.xAxis.type === 'date' ? new Date(config?.data?.[0]?.[config.xAxis.dataKey]).getTime() : config.xAxis.type === 'categorical' ? '1/15/2016' : '',
      yKey: '',
      dx: 0,
      dy: 0,
      opacity: 100,
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
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{props.name}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {config?.annotations &&
          config?.annotations.map((annotation, index) => (
            <Accordion allowZeroExpanded>
              <AccordionItem className='series-item series-item--chart' key={`${index}`}>
                <AccordionItemHeading className='series-item__title'>
                  <AccordionItemButton>{annotation.text ? annotation.text.substring(0, 15) + '...' : `Annotation ${index + 1}`}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className='annotation-group'>
                    <label>
                      Annotation Text:
                      <textarea rows={5} value={annotation.text} onChange={e => handleAnnotationUpdate(e.target.value, 'text', index)} />
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
                        onClick={e => {
                          const updatedAnnotations = [...config?.annotations]
                          updatedAnnotations[index].opacity = e.target.value
                          updateConfig({
                            ...config,
                            annotations: updatedAnnotations
                          })
                        }}
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
                    <label>
                      Associated Series:
                      <select
                        onChange={e => {
                          const updatedAnnotations = [...config?.annotations]
                          updatedAnnotations[index].seriesKey = e.target.value
                          updateConfig({
                            ...config,
                            annotations: updatedAnnotations
                          })
                        }}
                      >
                        <option key='none' value='none'>
                          None
                        </option>
                        {getColumns(false).map((column, columnIndex) => {
                          return <option>{column}</option>
                        })}
                      </select>
                    </label>

                    <label>
                      Connection Type:
                      <select
                        onChange={e => {
                          const updatedAnnotations = [...config?.annotations]
                          updatedAnnotations[index].connectionType = e.target.value
                          updateConfig({
                            ...config,
                            annotations: updatedAnnotations
                          })
                        }}
                      >
                        {['curve', 'line', 'elbow', 'none'].map((side, index) => (
                          <option key={side} value={side}>
                            {side}
                          </option>
                        ))}
                      </select>
                    </label>

                    {annotation.connectionType === 'curve' && (
                      <label>
                        Line Type:
                        <select
                          onChange={e => {
                            const updatedAnnotations = [...config?.annotations]
                            updatedAnnotations[index].lineType = e.target.value
                            updateConfig({
                              ...config,
                              annotations: updatedAnnotations
                            })
                          }}
                        >
                          {Object.entries(approvedCurveTypes).map(([value, key]) => (
                            <option key={key} value={key}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </label>
                    )}

                    <label>
                      Connection Location:
                      <select
                        onChange={e => {
                          const updatedAnnotations = [...config?.annotations]
                          updatedAnnotations[index].connectionLocation = e.target.value
                          updateConfig({
                            ...config,
                            annotations: updatedAnnotations
                          })
                        }}
                      >
                        {['auto', 'left', 'top', 'bottom', 'right'].map((side, index) => (
                          <option key={side} value={side}>
                            {side}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label>
                      Marker
                      <select
                        onChange={e => {
                          const updatedAnnotations = [...config?.annotations]
                          updatedAnnotations[index].marker = e.target.value
                          updateConfig({
                            ...config,
                            annotations: updatedAnnotations
                          })
                        }}
                      >
                        {['circle', 'arrow'].map((column, columnIndex) => {
                          return <option>{column}</option>
                        })}
                      </select>
                    </label>

                    <label>
                      Snap to Nearest Point
                      <input
                        type='checkbox'
                        checked={config?.annotations[index]?.snapToNearestPoint}
                        onClick={e => {
                          const updatedAnnotations = [...config?.annotations]
                          updatedAnnotations[index].snapToNearestPoint = e.target.checked
                          updateConfig({
                            ...config,
                            annotations: updatedAnnotations
                          })
                        }}
                      />
                    </label>

                    <Button className='warn btn-warn btn btn-remove delete' onClick={() => handleRemoveAnnotation(index)}>
                      Delete Annotation
                    </Button>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          ))}
        {config?.annotations?.length < 3 && <Button onClick={handleAddAnnotation}>Add Annotation</Button>}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default PanelAnnotate
