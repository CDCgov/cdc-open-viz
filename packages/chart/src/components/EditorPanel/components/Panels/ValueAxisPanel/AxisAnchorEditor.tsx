import React from 'react'
import { Draggable } from '@hello-pangea/dnd'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import GroupedList from '@cdc/core/components/EditorPanel/GroupedList'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import type { Anchor } from '@cdc/core/types/Axis'
import type { ChartConfig } from '../../../../../types/ChartConfig'

type AxisAnchorEditorProps = {
  axisKey: 'xAxis' | 'yAxis'
  anchorField?: 'anchors' | 'rightAnchors'
  config: ChartConfig
  lineOptions: { value: string; label?: string }[]
  updateConfig: Function
}

const AxisAnchorEditor: React.FC<AxisAnchorEditorProps> = ({
  axisKey,
  anchorField = 'anchors',
  config,
  lineOptions,
  updateConfig
}) => {
  const anchors = config[axisKey]?.[anchorField] || []

  const updateAnchors = (nextAnchors: Anchor[]) => {
    updateConfig({
      ...config,
      [axisKey]: {
        ...config[axisKey],
        [anchorField]: nextAnchors
      }
    })
  }

  const updateAnchorField = (index: number, field: keyof Anchor, value: string) => {
    const copiedAnchors = [...anchors]
    copiedAnchors[index] = {
      ...copiedAnchors[index],
      [field]: value
    }
    updateAnchors(copiedAnchors)
  }

  const removeAnchor = (index: number) => {
    const copiedAnchors = [...anchors]
    copiedAnchors.splice(index, 1)
    updateAnchors(copiedAnchors)
  }

  const addAnchor = () => {
    updateAnchors([...anchors, {} as Anchor])
  }

  const reorderAnchors = (sourceIndex: number, destinationIndex: number) => {
    const copiedAnchors = [...anchors]
    const [movedAnchor] = copiedAnchors.splice(sourceIndex, 1)
    copiedAnchors.splice(destinationIndex, 0, movedAnchor)
    updateAnchors(copiedAnchors)
  }

  return (
    <>
      <GroupedList
        items={anchors}
        label='Anchors'
        droppableId={`${axisKey}-${anchorField}-order`}
        onDragEnd={({ source, destination }) => {
          if (!destination || source.index === destination.index) return
          reorderAnchors(source.index, destination.index)
        }}
        renderItem={(anchor, index) => (
          <Draggable
            key={`${axisKey}-${anchorField}-anchor-${index}`}
            draggableId={`${axisKey}-${anchorField}-anchor-${index}`}
            index={index}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={snapshot.isDragging ? 'currently-dragging' : ''}
                style={provided.draggableProps.style}
              >
                <Accordion allowZeroExpanded>
                  <AccordionItem className='series-item series-item--chart'>
                    <AccordionItemHeading className='series-item__title'>
                      <AccordionItemButton className='accordion__button'>
                        <Icon display='move' size={15} style={{ cursor: 'default' }} />
                        {`Anchor ${index + 1}`}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className='series-item__panel-actions'>
                        <Button
                          type='button'
                          variant='danger'
                          size='sm'
                          className='grouped-list__remove'
                          onClick={e => {
                            e.preventDefault()
                            removeAnchor(index)
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                      <label>
                        <span>Anchor Value</span>
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Enter the value as its shown in the data column</p>
                          </Tooltip.Content>
                        </Tooltip>
                        <input
                          type='text'
                          value={anchor?.value || ''}
                          onChange={e => {
                            e.preventDefault()
                            updateAnchorField(index, 'value', e.target.value)
                          }}
                        />
                      </label>

                      <label>
                        <span>Anchor Color</span>
                        <input
                          type='text'
                          value={anchor?.color || ''}
                          onChange={e => {
                            e.preventDefault()
                            updateAnchorField(index, 'color', e.target.value)
                          }}
                        />
                      </label>

                      <Select
                        value={anchor?.lineStyle || ''}
                        label='Anchor Line Style'
                        onChange={e => updateAnchorField(index, 'lineStyle', e.target.value)}
                        options={[
                          { value: '', label: 'Select' },
                          ...lineOptions.map(line => ({ value: line.value, label: line.value }))
                        ]}
                      />
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
          </Draggable>
        )}
      />

      <Button
        variant='editor-primary'
        onClick={e => {
          e.preventDefault()
          addAnchor()
        }}
      >
        Add Anchor
      </Button>
    </>
  )
}
export default AxisAnchorEditor
