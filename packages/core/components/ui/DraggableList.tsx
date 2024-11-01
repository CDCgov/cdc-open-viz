import { Draggable } from '@hello-pangea/dnd'
const getItemStyle = (isDragging, draggableStyle) => ({
  ...draggableStyle
})

type DraggableListProps = {
  draggableItems: string[]
}

const DraggableList: React.FC<DraggableListProps> = ({ draggableItems }) => {
  return draggableItems ? (
    draggableItems.map((value, index) => (
      <Draggable key={value} draggableId={`item-${value}`} index={index}>
        {(provided, snapshot) => (
          <li className='p-relative'>
            <div
              className={snapshot.isDragging ? 'currently-dragging' : ''}
              style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {value}
            </div>
          </li>
        )}
      </Draggable>
    ))
  ) : (
    <></>
  )
}
export default DraggableList
