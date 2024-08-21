import { useState } from 'react'
import _ from 'lodash'
import { NestedDropdownFilter, SubGroupingType, VizFilter } from '../../../types/VizFilter'
import { filterOrderOptions } from '../../Filters'
import FilterOrder from './components/FilterOrder'
import { Visualization } from '../../../types/Visualization'

type NestedDropdownEditorProps = {
  config: Visualization
  dataColumns: string[]
  filterIndex: number
  handleNameChange: Function
  handleSorting: Function
  rawData: {}
  updateField: Function
  updateFilterStyle: Function
  updateFilterProp: Function
  handleFilterCustomOrderChange: Function
}

const NestedDropdownEditor: React.FC<NestedDropdownEditorProps> = ({ config, dataColumns, handleFilterCustomOrderChange, handleNameChange, handleSorting, filterIndex, rawData, updateField, updateFilterProp }) => {
  const allFilters = config.filters
  const filter = allFilters[filterIndex]
  const subGrouping = filter?.subGroupingFilter
  const orderedSubGroupValues = subGrouping?.allValues
  const listOfUsedColumnNames: string[] = []

  allFilters.forEach((filter: NestedDropdownFilter, index) => {
    if (filterIndex === index) return
    listOfUsedColumnNames.push(filter.columnName)
    if (subGrouping?.columnName) listOfUsedColumnNames.push(subGrouping.columnName)
  })

  const columnNameOptions = dataColumns.filter(columnName => !listOfUsedColumnNames.includes(columnName))

  const handleFitlerGroupColumnNameChange = value => {
    updateField('filters', filterIndex, 'columnName', value)
    handleNameChange(value)
  }

  const updateSubGroupingFilterProperty = newSubGrouping => {
    updateField('filters', filterIndex, 'subGroupingFilter', newSubGrouping)
  }

  const arrangeSubGroupFilterOptions = filterOrder => {
    const newSubGroupingFilter = { ...filter.subGroupingFilter, allValues: [] }
    filterOrder.map(filterOption =>
      [...filter.subGroupingFilter?.allValues].forEach(grouping => {
        if (grouping.groupName === filterOption) {
          newSubGroupingFilter.allValues.push(grouping)
        }
      })
    )
    return newSubGroupingFilter
  }

  const handleFilterOrderOptionSelection = sortBy => {
    const groupSortObject = {
      values: _.cloneDeep(filter.values),
      order: sortBy
    }
    const newOrderedValues = handleSorting(groupSortObject).orderedValues
    const newSubFilterOrderedOptions = filter.subGroupingFilter?.allValues.length > 0 ? arrangeSubGroupFilterOptions(newOrderedValues) : []

    const newAllFilters = _.cloneDeep(allFilters)
    newAllFilters[filterIndex] = { ...filter, orderedValues: newOrderedValues, order: sortBy, subGroupingFilter: newSubFilterOrderedOptions }
    updateField(null, null, 'filters', newAllFilters)
  }

  const handleSubGroupColumnNameChange = value => {
    const filterGroupingOptions = filter?.orderedValues ?? filter.values

    const subFilterAllValues = []
    filterGroupingOptions.map(filterGroupOption => {
      const subFilterGroupingValues: string[] = _.uniq(
        _.values(_.cloneDeep(rawData))
          .map(d => {
            return d[filter.columnName] === filterGroupOption ? d[value] : ''
          })
          .filter(option => option !== '')
      ).sort()

      subFilterAllValues.push({
        groupName: filterGroupOption,
        values: subFilterGroupingValues,
        orderedValues: subFilterGroupingValues
      })
    })
    const newSubGrouping: SubGroupingType = {
      ...subGrouping,
      columnName: value,
      type: '',
      allValues: subFilterAllValues
    }

    updateSubGroupingFilterProperty(newSubGrouping)
  }

  const handleSubFilterOrderOptionSelection = sortBy => {
    const newSortedSubGrouping = { ...subGrouping, order: sortBy }
    newSortedSubGrouping.allValues.map((group, groupIndex) => {
      const groupSortObject = {
        values: group.values,
        order: sortBy
      }

      const newOrderedValues = handleSorting(groupSortObject).orderedValues
      newSortedSubGrouping.allValues[groupIndex].orderedValues = newOrderedValues
    })
    updateField('filters', filterIndex, 'subGroupingFilter', newSortedSubGrouping)
  }

  const handleSubGroupFilterCustomOrderChange = (movedItemIndex, indexWhereItemDropped, subGroupingFitlerOrder: string[], groupIndex) => {
    const updatedGroupOrderedValues = subGroupingFitlerOrder
    const [movedItem] = updatedGroupOrderedValues.splice(movedItemIndex, 1)
    updatedGroupOrderedValues.splice(indexWhereItemDropped, 0, movedItem)
    const newAllValues = orderedSubGroupValues
    newAllValues[groupIndex].orderedValues = updatedGroupOrderedValues
    const newSubGrouping = { ...subGrouping, order: 'cust', allValues: newAllValues }

    updateSubGroupingFilterProperty(newSubGrouping)
  }

  return (
    <div className='nesteddropdown-editor'>
      <label>
        <span className='edit-label column-heading mt-2'>Label</span>
        <input
          type='text'
          value={filter.label}
          onChange={e => {
            updateFilterProp('label', filterIndex, e.target.value)
          }}
        />
      </label>

      <label>
        <div className='edit-label column-heading mt-2'>
          Filter Grouping
          <span></span>
        </div>
        <select value={filter.columnName} onChange={e => handleFitlerGroupColumnNameChange(e.target.value)}>
          <option value=''>- Select Option -</option>
          {columnNameOptions.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        <div className='edit-label column-heading mt-2'>
          Filter SubGrouping
          <span></span>
        </div>
        <select
          value={subGrouping?.columnName ?? ''}
          onChange={e => {
            handleSubGroupColumnNameChange(e.target.value)
          }}
        >
          <option value=''>- Select Option -</option>
          {columnNameOptions.map((option, index) => {
            if (option !== filter.columnName) {
              return (
                <option value={option} key={index}>
                  {option}
                </option>
              )
            }
          })}
        </select>
      </label>

      <label>
        <input
          type='checkbox'
          checked={filter.useQueryParameter}
          aria-label='Create query parameters'
          onChange={e => {
            updateFilterProp('useQueryParameter', filterIndex, e.target.checked)
          }}
        />
        <span> Create query parameters</span>
        {filter.useQueryParameter && (
          <>
            <span className='edit-label column-heading mt-2'>Default Value Set By Query String Parameter</span>
            <input
              type='text'
              value={filter.setByQueryParameter}
              onChange={e => {
                updateFilterProp('setByQueryParameter', filterIndex, e.target.value)
              }}
            />
          </>
        )}
      </label>

      <label className='mt-2'>
        <div className='edit-label column-heading float-right'>{filter.columnName} </div>
        <span className={'edit-filterOrder column-heading '}>Group Order</span>
        <select value={filter.order} onChange={e => handleFilterOrderOptionSelection(e.target.value)}>
          {filterOrderOptions.map((option, index) => {
            return (
              <option value={option.value} key={`filter-${option.label}-${index}`}>
                {option.label}
              </option>
            )
          })}
        </select>
        {filter.order === 'cust' && <FilterOrder orderedValues={filter.orderedValues} handleFilterOrder={(sourceIndex, destinationIndex) => handleFilterCustomOrderChange(sourceIndex, destinationIndex, filterIndex, filter)} />}
      </label>

      {subGrouping?.columnName && (
        <label className='mt-2'>
          <span className={'edit-filterOrder column-heading'}>SubGrouping Order</span>
          <div className='edit-label column-heading float-right'>{subGrouping.columnName} </div>
          <select value={subGrouping.order ? subGrouping.order : 'asc'} onChange={e => handleSubFilterOrderOptionSelection(e.target.value)}>
            {filterOrderOptions.map((option, index) => {
              return (
                <option value={option.value} key={`filter-${index}`}>
                  {option.label}
                </option>
              )
            })}
          </select>
          {subGrouping?.order === 'cust' &&
            filter.orderedValues.map((filterValue, orderedFilterValueindex) => {
              const orderedValues = orderedSubGroupValues[orderedFilterValueindex].orderedValues
              return (
                <div key={`group-subgroup-values-${filterValue}-${orderedFilterValueindex}`}>
                  <span className='font-weight-bold'>{filterValue}</span>
                  <FilterOrder key={`subgroup-values-${filterValue}-${orderedFilterValueindex}`} orderedValues={orderedValues} handleFilterOrder={(sourceIndex, destinationIndex) => handleSubGroupFilterCustomOrderChange(sourceIndex, destinationIndex, orderedValues, orderedFilterValueindex)} />
                </div>
              )
            })}
        </label>
      )}
    </div>
  )
}

export default NestedDropdownEditor
