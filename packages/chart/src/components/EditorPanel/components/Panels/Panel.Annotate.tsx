import React from 'react'
import { useContext, FC } from 'react'
import { AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { type PanelProps } from './../PanelProps'
import Button from '@cdc/core/components/elements/Button'
import EditorPanel from '@cdc/map/src/components/EditorPanel'
import EditorPanelContext from '../../EditorPanelContext'
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
  const { updateConfig, config } = useContext(ConfigContext)

  const handleAnnotationUpdate = (value, property, index) => {
    const annotations = [...config?.annotations]
    console.log('ann', annotations)
    annotations[index][property] = value

    updateConfig({
      ...config,
      annotations
    })
  }

  const handleAddAnnotation = () => {
    const newAnnotation = {
      text: 'New Annotation',
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
        x: 0,
        y: 0
      },
      selected: true,
      anchor: {
        vertical: false,
        horizontal: false
      }
    }

    const annotations = Array.isArray(config.annotations) ? config.annotations : []

    updateConfig({
      ...config,
      annotations: [...annotations, newAnnotation]
    })
  }

  const handleRemoveAnnotation = (annotationIndex: number) => {
    console.log(config.annotations)
    const updated = config.annotations.filter((_, index) => index !== annotationIndex)
    console.log('updated', updated)
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
                Mobile
                <input
                  type='checkbox'
                  checked={config?.annotations[index].show.mobile}
                  onClick={e => {
                    const updatedAnnotations = [...config?.annotations]
                    updatedAnnotations[index].show.mobile = e.target.checked
                    updateConfig({
                      ...config,
                      annotations: updatedAnnotations
                    })
                  }}
                />
              </label>
              <label>
                Tablet
                <input
                  type='checkbox'
                  checked={config?.annotations[index].show.tablet}
                  onClick={e => {
                    const updatedAnnotations = [...config?.annotations]
                    updatedAnnotations[index].show.tablet = e.target.checked
                    updateConfig({
                      ...config,
                      annotations: updatedAnnotations
                    })
                  }}
                />
              </label>
              <label>
                Desktop
                <input
                  type='checkbox'
                  checked={config?.annotations[index].show.desktop}
                  onClick={e => {
                    const updatedAnnotations = [...config?.annotations]
                    updatedAnnotations[index].show.desktop = e.target.checked
                    updateConfig({
                      ...config,
                      annotations: updatedAnnotations
                    })
                  }}
                />
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
