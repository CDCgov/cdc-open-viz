import { DragDropContext, Droppable, type DropResult } from '@hello-pangea/dnd'
import type { ReactNode } from 'react'
import './GroupedList.styles.css'

type GroupedListProps<T> = {
  items?: T[]
  label?: ReactNode
  droppableId: string
  onDragEnd?: (result: DropResult) => void
  renderItem: (item: T, index: number) => ReactNode
  className?: string
  listClassName?: string
  draggable?: boolean
}

const joinClassNames = (...classNames: Array<string | undefined>) => classNames.filter(Boolean).join(' ')
const noop = () => {}

const GroupedList = <T,>({
  items = [],
  label,
  droppableId,
  onDragEnd,
  renderItem,
  className,
  listClassName,
  draggable = true
}: GroupedListProps<T>) => {
  if (!items.length) return null

  const listStyle = {
    border: '1px solid #d1d1d1',
    borderRadius: '2px',
    boxSizing: 'border-box' as const,
    margin: 0,
    overflow: 'hidden',
    padding: 0
  }

  return (
    <div className={joinClassNames('grouped-list', className)}>
      {label && <div className='grouped-list__label'>{label}</div>}
      {!draggable && (
        <ul className={joinClassNames('grouped-list__items', listClassName)} style={listStyle}>
          {items.map((item, index) => renderItem(item, index))}
        </ul>
      )}
      {draggable && (
        <DragDropContext onDragEnd={onDragEnd || noop}>
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
                style={listStyle}
              >
                {items.map((item, index) => renderItem(item, index))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  )
}

export default GroupedList
