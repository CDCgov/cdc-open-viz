import React from 'react'
import { useContext, FC } from 'react'
import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { type PanelProps } from './../PanelProps'
import Button from '@cdc/core/components/elements/Button'
import ConfigContext from '../../../../ConfigContext.js'

import './../panels.scss'

type Annotation = {
  id: number
  text: string
  fontSize: number
  show: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
  markerType: 'arrow'
  connectorType: 'line'
  colors: {
    label: string
    connector: string
    marker: string
  }
  coordinates: {
    x: number
    y: number
  }
  selected: boolean
}

const PanelAnnotate: React.FC<PanelProps> = props => {
  const { updateConfig, config, unfilteredData } = useContext(ConfigContext)

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

    updateConfig({
      ...config,
      annotations
    })
  }

  const handleAddAnnotation = () => {
    const newAnnotation = {
      title: 'New Annotation Title',
      text: 'New Annotation Subtext',
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
      coordinates: {
        x: 0 + Number(config.yAxis.size),
        y: 0
      },
      selected: true,
      anchor: {
        vertical: false,
        horizontal: false
      },
      edit: {
        subject: true,
        label: true
      }
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
            <div className='annotation-group'>
              <label>
                Annotation Title:
                <input type='text' value={annotation.title} onChange={e => handleAnnotationUpdate(e.target.value, 'title', index)} />
              </label>
              <label>
                Annotation Text:
                <textarea rows={5} value={annotation.text} onChange={e => handleAnnotationUpdate(e.target.value, 'text', index)} />
              </label>
              <label>
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
              </label>

              <label>
                Opacity
                <input
                  type='text'
                  checked={config?.annotations[index].opacity}
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
                  {getColumns(false).map((column, columnIndex) => {
                    return <option>{column}</option>
                  })}
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
              <Button className='warn btn-warn btn btn-remove delete' onClick={() => handleRemoveAnnotation(index)}>
                Delete Annotation
              </Button>
            </div>
          ))}
        {config?.annotations?.length < 3 && <Button onClick={handleAddAnnotation}>Add Annotation</Button>}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default PanelAnnotate
