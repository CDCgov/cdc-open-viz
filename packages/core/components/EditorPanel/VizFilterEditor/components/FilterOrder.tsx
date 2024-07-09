import { VizFilter } from '../../../../types/VizFilter'
import { filterOrderOptions } from '../../../Filters'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

type FilterOrderProps = {
  filterIndex: number
  filter: VizFilter
  updateFilterProp: (prop: string, index: number, value: string) => void
  handleFilterOrder: (sourceIndex: number, destinationIndex: number, filterIndex: number, filter: VizFilter) => void
}

const FilterOrder: React.FC<FilterOrderProps> = ({ filterIndex, filter, updateFilterProp, handleFilterOrder }) => {
  return (
    <label>
      <span className='edit-filterOrder column-heading'>Filter Order</span>
      <select value={filter.order ? filter.order : 'asc'} onChange={e => updateFilterProp('order', filterIndex, e.target.value)}>
        {filterOrderOptions.map((option, index) => {
          return (
            <option value={option.value} key={`filter-${index}`}>
              {option.label}
            </option>
          )
        })}
      </select>

      {filter.order === 'cust' && (
        <DragDropContext onDragEnd={({ source, destination }) => handleFilterOrder(source.index, destination.index, filterIndex, filter)}>
          <Droppable droppableId='filter_order'>
            {provided => (
              <ul {...provided.droppableProps} className='sort-list' ref={provided.innerRef} style={{ marginTop: '1em' }}>
                {filter?.values.map((value, index) => {
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
      )}
    </label>
  )
}

export default FilterOrder
