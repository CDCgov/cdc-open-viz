import { useState } from 'react'
import _ from 'lodash'
import { NestedDropdownFilter, VizFilter } from '../../../types/VizFilter'
import FilterOrder from './components/FilterOrder'
import SubGroupingFilterOrder from './components/SubGroupingFilterOrder'
import './nestedDropdownEditor.style.css'

type NestedDropdownEditorProps = {
  allFilters: VizFilter[]
  dataColumns: string[]
  filter: NestedDropdownFilter
  filterIndex: number
  handleNameChange: Function
  handleSorting: Function
  rawData: {}
  updateField: Function
  updateFilterStyle: Function
  updateFilterProp: (prop: string, index: number, value: string | boolean) => void
  handleFilterOrder: (sourceIndex: number, destinationIndex: number, filterIndex: number, filter: VizFilter) => void
}

const NestedDropdownEditor: React.FC<NestedDropdownEditorProps> = ({ allFilters, dataColumns, filter, handleFilterOrder, filterIndex, rawData, updateField, updateFilterProp, updateFilterStyle }) => {
  type SubGroupingType = {
    active: string
    columnName: string
    order?: string
    values?: [string[]]
  }
  const [subGrouping, setSubGrouping] = useState<SubGroupingType>(filter.subGroupingFilter)

  const listOfUsedColumnNames: string[] = []

  allFilters.forEach((filter: NestedDropdownFilter, index) => {
    if (filterIndex === index) return
    listOfUsedColumnNames.push(filter.columnName)
    if (filter.subGroupingFilter?.columnName) listOfUsedColumnNames.push(filter.subGroupingFilter.columnName)
  })

  const columnNameOptions = dataColumns.filter(columnName => !listOfUsedColumnNames.includes(columnName))

  const updateSubFilterProp = newSubGrouping => {
    updateField('filters', filterIndex, 'subGroupingFilter', newSubGrouping)
  }

  const handleSubGroupChange = value => {
    const filterGroupingOptions = filter.values

    const subFilterGroupingOptions = []
    filterGroupingOptions.map(filterGroupOption => {
      subFilterGroupingOptions.push(
        _.uniq(
          _.values(_.cloneDeep(rawData))
            .map(d => {
              return d[filter.columnName] === filterGroupOption ? d[value] : ''
            })
            .filter(option => option !== '')
        )
      )
    })

    const newSubGrouping = {
      ...filter.subGroupingFilter,
      columnName: value,
      type: '',
      values: subFilterGroupingOptions
    }
    setSubGrouping(newSubGrouping)

    updateSubFilterProp(newSubGrouping)
  }

  const handleSubGroupFilterOrderChange = (movedItemIndex, indexWhereItemDropped, subGroupingFitlerOrder: string[], groupIndex) => {
    const updatedGroupOrderedValues = subGroupingFitlerOrder
    const [movedItem] = updatedGroupOrderedValues.splice(movedItemIndex, 1)
    updatedGroupOrderedValues.splice(indexWhereItemDropped, 0, movedItem)
    const newValues = subGrouping.values
    newValues[groupIndex] = updatedGroupOrderedValues

    setSubGrouping({ ...subGrouping, order: 'cust', values: newValues })
    updateSubFilterProp({ ...subGrouping, order: 'cust', values: newValues })
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
        <select
          value={filter.columnName}
          onChange={e => {
            updateField('filters', filterIndex, 'columnName', e.target.value)
          }}
        >
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
            handleSubGroupChange(e.target.value)
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

      <label>
        <div className='edit-label column-heading float-left mt-2'>Group</div>
        <div className='edit-label column-heading float-right'>{filter.columnName} </div>
        <FilterOrder filterIndex={filterIndex} filter={filter} updateFilterProp={updateFilterProp} handleFilterOrder={handleFilterOrder} />
      </label>

      {filter.subGroupingFilter && filter.subGroupingFilter.columnName && (
        <label>
          <div className='edit-label column-heading float-left mt-2'>Subgroup</div>
          <div className='edit-label column-heading float-right'>{filter.subGroupingFilter.columnName} </div>
          <SubGroupingFilterOrder filter={filter} updateSubFilterProp={updateSubFilterProp} handleSubGroupFilterOrderChange={handleSubGroupFilterOrderChange} />
        </label>
      )}
    </div>
  )
}

export default NestedDropdownEditor
