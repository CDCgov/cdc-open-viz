import { useCallback, useMemo } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import _ from 'lodash'

type CustomSortOrderProps = {
  column: string
  data: Record<string, any>[]
  customOrder?: string[]
  updateField: Function
  updateTarget?: {
    section?: string | null
    subsection?: string | number | null
    fieldName?: string
  }
  /** Optional transform for display labels (e.g. displayGeoName for maps) */
  displayTransform?: (value: string) => string
  droppableId?: string
  draggableIdPrefix?: string
}

const DEFAULT_UPDATE_TARGET = { section: 'table', subsection: 'defaultSort', fieldName: 'customOrder' }

/**
 * Editor component for drag-and-drop custom sort ordering.
 * Shows unique values from the selected column and allows reordering via DnD.
 */
const CustomSortOrder: React.FC<CustomSortOrderProps> = ({
  column,
  data,
  customOrder,
  updateField,
  updateTarget = DEFAULT_UPDATE_TARGET,
  displayTransform,
  droppableId = 'custom_sort_order',
  draggableIdPrefix = 'customSort'
}) => {
  // Compute unique values from the selected column
  const uniqueValues = useMemo(() => {
    if (!column || !data?.length) return []
    const values = data.map(row => String(row[column] ?? '')).filter(v => v !== '')
    return _.uniq(values)
  }, [column, data])

  // Use customOrder if set, otherwise fall back to natural unique order
  const orderedValues = useMemo(() => {
    if (customOrder?.length) {
      // Include any new values from data that aren't in customOrder
      const customOrderValues = customOrder.map(String)
      const customOrderSet = new Set(customOrderValues)
      const uniqueValueSet = new Set(uniqueValues)
      const extra = uniqueValues.filter(v => !customOrderSet.has(v))
      return [...customOrderValues.filter(v => uniqueValueSet.has(v)), ...extra]
    }
    return uniqueValues
  }, [customOrder, uniqueValues])

  const handleDragEnd = useCallback(
    ({ source, destination }) => {
      if (!destination || source.index === destination.index) return
      const reordered = [...orderedValues]
      const [moved] = reordered.splice(source.index, 1)
      reordered.splice(destination.index, 0, moved)
      updateField(updateTarget.section, updateTarget.subsection, updateTarget.fieldName, reordered)
    },
    [orderedValues, updateField, updateTarget.fieldName, updateTarget.section, updateTarget.subsection]
  )

  if (!orderedValues.length) return null

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={droppableId}>
          {provided => (
            <ul
              {...provided.droppableProps}
              className='sort-list'
              ref={provided.innerRef}
              style={{ marginTop: '0.5em', paddingLeft: 0, listStyle: 'none' }}
            >
              {orderedValues.map((value, index) => (
                <Draggable key={value} draggableId={`${draggableIdPrefix}-${value}`} index={index}>
                  {(provided, snapshot) => (
                    <li style={{ marginBottom: '2px' }}>
                      <div
                        className={snapshot.isDragging ? 'currently-dragging' : ''}
                        style={{
                          ...provided.draggableProps.style
                        }}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {displayTransform ? displayTransform(value) : value}
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default CustomSortOrder
