import { DragDropContext, Droppable, type DropResult } from '@hello-pangea/dnd'
import type { ReactNode } from 'react'
import './GroupedList.styles.css'

type GroupedListProps<T> = {
  items?: T[]
  label?: ReactNode
  droppableId: string
  onDragEnd: (result: DropResult) => void
  renderItem: (item: T, index: number) => ReactNode
  className?: string
  listClassName?: string
}

const joinClassNames = (...classNames: Array<string | undefined>) => classNames.filter(Boolean).join(' ')

const GroupedList = <T,>({
  items = [],
  label,
  droppableId,
  onDragEnd,
  renderItem,
  className,
  listClassName
}: GroupedListProps<T>) => {
  if (!items.length) return null

  return (
    <div className={joinClassNames('grouped-list', className)}>
      {label && <div className='grouped-list__label'>{label}</div>}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={droppableId}>
          {(provided, snapshot) => (
            <ul
              {...provided.droppableProps}
              className={joinClassNames(
                'grouped-list__items',
                snapshot.isDraggingOver ? 'grouped-list__items--drag-over' : undefined,
                listClassName
              )}
              ref={provided.innerRef}
              style={{
                border: '1px solid #d1d1d1',
                borderRadius: '2px',
                boxSizing: 'border-box',
                margin: 0,
                overflow: 'hidden',
                padding: 0
              }}
            >
              {items.map((item, index) => renderItem(item, index))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default GroupedList
