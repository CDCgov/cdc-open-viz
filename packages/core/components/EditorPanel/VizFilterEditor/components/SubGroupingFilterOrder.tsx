import { filterOrderOptions } from '../../../Filters'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

type SubGroupingFilterOrderProps = {
  filter: NestedDropdownFilter
  handleSubGroupFilterOrderChange: (sourceIndex: number, destinationIndex: number, subGroupingFitlerOrder: string[], groupIndex: number) => void
  updateSubFilterProp: Function
}

const SubGroupingFilterOrder: React.FC<SubGroupingFilterOrderProps> = ({ filter, updateSubFilterProp, handleSubGroupFilterOrderChange }) => {
  const filterOrder = filter.values
  const subGrouping = filter?.subGroupingFilter

  return (
    <label>
      <span className='edit-filterOrder column-heading'>Filter Order</span>
      <select value={subGrouping?.order ?? 'asc'} onChange={e => updateSubFilterProp({ ...subGrouping, order: e.target.value })}>
        {filterOrderOptions.map((option, index) => {
          return (
            <option value={option.value} key={`filter-${index}`}>
              {option.label}
            </option>
          )
        })}
      </select>

      {subGrouping.order === 'cust' &&
        filterOrder.map((group, groupIndex) => {
          const subGroupingFitlerOrder = subGrouping.values[groupIndex]
          return (
            <>
              {group}
              <DragDropContext onDragEnd={({ source, destination }) => handleSubGroupFilterOrderChange(source.index, destination.index, subGroupingFitlerOrder, groupIndex)}>
                <Droppable droppableId={`subGroupoing_filter_order`}>
                  {provided => (
                    <ul {...provided.droppableProps} className='sort-list' ref={provided.innerRef} style={{ marginTop: '1em' }}>
                      {subGroupingFitlerOrder &&
                        subGroupingFitlerOrder.map((value, index) => {
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
            </>
          )
        })}
    </label>
  )
}

export default SubGroupingFilterOrder
