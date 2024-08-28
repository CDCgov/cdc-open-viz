import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

type FilterOrderProps = {
  orderedValues: string[]
  handleFilterOrder?: Function
}
const FilterOrder: React.FC<FilterOrderProps> = ({ orderedValues, handleFilterOrder }) => {
  return (
    <DragDropContext onDragEnd={({ source, destination }) => handleFilterOrder(source.index, destination.index)}>
      <Droppable droppableId='filter_order'>
        {provided => (
          <ul {...provided.droppableProps} className='sort-list' ref={provided.innerRef} style={{ marginTop: '1em' }}>
            {orderedValues?.map((value, index) => {
              return (
                <Draggable key={value} draggableId={`draggableFilter-${value}`} index={index}>
                  {(provided, snapshot) => (
                    <li>
                      <div className={snapshot.isDragging ? 'currently-dragging' : ''} style={provided.draggableProps.style} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {value}
                      </div>
                    </li>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default FilterOrder
