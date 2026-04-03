import React, { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Draggable, type DropResult } from '@hello-pangea/dnd'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'

import GroupedList from '../EditorPanel/GroupedList'
import Button from '../elements/Button'
import Icon from '../ui/Icon'

type StoryItem = {
  id: string
  title: string
  description: string
}

type GroupedListStoryProps = {
  draggable: boolean
  itemCount: number
  labelText: string
  showLabel: boolean
  showDescriptions: boolean
  showActions: boolean
}

const createItems = (itemCount: number): StoryItem[] =>
  Array.from({ length: itemCount }, (_, index) => ({
    id: `grouped-list-item-${index + 1}`,
    title: `Item ${index + 1}`,
    description: `Supporting copy for item ${index + 1}.`
  }))

const GroupedListStory = ({
  draggable,
  itemCount,
  labelText,
  showLabel,
  showDescriptions,
  showActions
}: GroupedListStoryProps) => {
  const [items, setItems] = useState<StoryItem[]>(() => createItems(itemCount))

  useEffect(() => {
    setItems(createItems(itemCount))
  }, [itemCount])

  const handleDragEnd = ({ source, destination }: DropResult) => {
    if (!destination || source.index === destination.index) return

    setItems(currentItems => {
      const nextItems = [...currentItems]
      const [movedItem] = nextItems.splice(source.index, 1)
      nextItems.splice(destination.index, 0, movedItem)
      return nextItems
    })
  }

  const handleRemove = (id: string) => setItems(currentItems => currentItems.filter(item => item.id !== id))

  const renderListItem = (item: StoryItem, index: number) => {
    const content = (
      <Accordion allowZeroExpanded>
        <AccordionItem className='series-item series-item--chart'>
          <AccordionItemHeading className='series-item__title'>
            <AccordionItemButton className='accordion__button'>
              {draggable && <Icon display='move' size={15} style={{ cursor: 'grab' }} />}
              {item.title}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {showActions && (
              <div className='series-item__panel-actions'>
                <Button
                  type='button'
                  variant='danger'
                  size='sm'
                  className='grouped-list__remove'
                  onClick={event => {
                    event.preventDefault()
                    handleRemove(item.id)
                  }}
                >
                  Remove
                </Button>
              </div>
            )}
            {showDescriptions && (
              <p style={{ margin: 0, padding: '0 0 0.75rem' }}>
                {item.description} This mirrors the accordion-based editor rows used in chart, map, and footnote panels.
              </p>
            )}
            <div className='row'>
              <div className='col'>
                <label className='edit-label'>Order</label>
                <input className='form-control' readOnly value={index + 1} />
              </div>
              <div className='col'>
                <label className='edit-label'>Name</label>
                <input className='form-control' readOnly value={item.title} />
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    )

    if (!draggable) return <div key={item.id}>{content}</div>

    return (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={snapshot.isDragging ? 'currently-dragging' : ''}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
          >
            {content}
          </div>
        )}
      </Draggable>
    )
  }

  return (
    <div style={{ maxWidth: '520px', padding: '1rem' }}>
      <GroupedList
        items={items}
        label={showLabel ? labelText : undefined}
        droppableId='storybook-grouped-list'
        draggable={draggable}
        onDragEnd={handleDragEnd}
        renderItem={renderListItem}
      />
    </div>
  )
}

const meta: Meta<typeof GroupedListStory> = {
  title: 'Components/Molecules/GroupedList',
  component: GroupedListStory,
  decorators: [
    Story => (
      <div className='cove-visualization type-chart'>
        <div className='editor-panel'>
          <Story />
        </div>
      </div>
    )
  ],
  args: {
    draggable: true,
    itemCount: 4,
    labelText: 'Series Order',
    showActions: true,
    showDescriptions: true,
    showLabel: true
  },
  argTypes: {
    itemCount: {
      control: { type: 'range', min: 1, max: 8, step: 1 }
    },
    labelText: {
      if: { arg: 'showLabel' }
    }
  }
}

export default meta

type Story = StoryObj<typeof GroupedListStory>

export const Primary: Story = {}
