import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import { Draggable } from '@hello-pangea/dnd'
import Icon from '@cdc/core/components/ui/Icon'

const RepeatableGroupSection = props => {
  return <div className='repeatable-group'>{props.children}</div>
}

export const RepeatableGroupItem = props => {
  const { item, index, title } = props

  return (
    <Draggable key={item} draggableId={`draggable-repeatable-item-${item}`} index={index}>
      {(provided, snapshot) => (
        <div key={index} className={snapshot.isDragging ? 'currently-dragging' : ''} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Accordion allowZeroExpanded>
            <AccordionItem className='series-item series-item--chart'>
              <AccordionItemHeading className='series-item__title'>
                <AccordionItemButton className={''}>
                  <Icon display='move' size={15} style={{ cursor: 'default' }} />
                  Title Section
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>panel section to be built</AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </Draggable>
  )
}

export const RepeatableGroup = {
  Section: RepeatableGroupSection,
  Item: RepeatableGroupItem
}
