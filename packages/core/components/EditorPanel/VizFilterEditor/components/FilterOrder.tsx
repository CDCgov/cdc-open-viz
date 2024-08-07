import { NestedDropdownFilter, VizFilter } from '../../../../types/VizFilter'
import { filterOrderOptions } from '../../../Filters'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

type FilterOrderProps = {
  filter: VizFilter & NestedDropdownFilter
  filterIndex: number
  isSubFilter?: boolean
  handleFilterOrder?: (sourceIndex: number, destinationIndex: number, filterIndex: number, filter: VizFilter) => void
  updateFilterProp?: (prop: string, index: number, value: string | boolean) => void
  handleSubGroupFilterOrderChange?: (sourceIndex: number, destinationIndex: number, subGroupingFitlerValues: string[], groupIndex: number) => void
  updateSubFilterProp?: Function
}

const FilterOrder: React.FC<FilterOrderProps> = ({ filter, filterIndex, isSubFilter = false, handleFilterOrder, updateFilterProp, handleSubGroupFilterOrderChange, updateSubFilterProp }) => {
  const filterOrder = filter.values
  const subGrouping = filter?.subGroupingFilter

  const currentFilter = isSubFilter ? subGrouping : filter

  return (
    <label>
      <span className={`edit-filterOrder column-heading${filter.filterStyle === 'nested-dropdown' ? ' d-none ' : ''}`}>Filter Order</span>
      <select value={currentFilter.order ? currentFilter.order : 'asc'} onChange={e => (!isSubFilter ? updateFilterProp('order', filterIndex, e.target.value) : updateSubFilterProp({ ...subGrouping, order: e.target.value }))}>
        {filterOrderOptions.map((option, index) => {
          return (
            <option value={option.value} key={`filter-${index}`}>
              {option.label}
            </option>
          )
        })}
      </select>

      {!isSubFilter && filter.order === 'cust' && (
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
      {isSubFilter &&
        subGrouping.order === 'cust' &&
        filterOrder.map((group, groupIndex) => {
          const subGroupingFitlerValues = subGrouping.values[groupIndex]
          return (
            <>
              {group}
              <DragDropContext onDragEnd={({ source, destination }) => handleSubGroupFilterOrderChange(source.index, destination.index, subGroupingFitlerValues, groupIndex)}>
                <Droppable droppableId={`subGroupoing_filter_order`}>
                  {provided => (
                    <ul {...provided.droppableProps} className='sort-list' ref={provided.innerRef} style={{ marginTop: '1em' }}>
                      {subGroupingFitlerValues &&
                        subGroupingFitlerValues.map((value, index) => {
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

export default FilterOrder
