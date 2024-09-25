import _ from 'lodash'
import { SubGrouping, VizFilter, OrderBy } from '../../../types/VizFilter'
import { filterOrderOptions, handleSorting } from '../../Filters'
import FilterOrder from './components/FilterOrder'
import { Visualization } from '../../../types/Visualization'

type NestedDropdownEditorProps = {
  config: Visualization
  dataColumns: string[]
  filterIndex: number
  handleNameChange: Function
  rawData: Object[]
  updateField: Function
  updateFilterStyle: Function
  handleGroupingCustomOrder: (index1: number, index2: number) => void
}

const NestedDropdownEditor: React.FC<NestedDropdownEditorProps> = ({
  config,
  dataColumns,
  handleGroupingCustomOrder,
  handleNameChange: handleGroupColumnNameChange,
  filterIndex,
  rawData,
  updateField
}) => {
  const filter = config.filters[filterIndex]
  const subGrouping = filter?.subGrouping
  const listOfUsedColumnNames: string[] = []

  config.filters.forEach((filter: VizFilter, index) => {
    if (filterIndex === index) return
    listOfUsedColumnNames.push(filter.columnName)
    if (subGrouping?.columnName) listOfUsedColumnNames.push(subGrouping.columnName)
  })

  const updateGroupingFilterProp = (prop, value) => {
    updateField('filters', filterIndex, prop, value)
  }

  const handleGroupingOrderBy = (order: OrderBy) => {
    const groupSortObject = {
      values: _.cloneDeep(filter.values),
      order
    }
    const newOrderedValues = handleSorting(groupSortObject).values

    const newAllFilters = _.cloneDeep(config.filters)
    newAllFilters[filterIndex] = { ...filter, values: newOrderedValues, order }
    if (order === 'cust') {
      newAllFilters[filterIndex].orderedValues = newOrderedValues
    } else {
      delete newAllFilters[filterIndex].orderedValues
    }
    updateField(null, null, 'filters', newAllFilters)
  }

  const updateSubGroupingFilterProperty = (newSubGrouping: SubGrouping) => {
    updateField('filters', filterIndex, 'subGrouping', newSubGrouping)
  }

  const handleSubGroupColumnNameChange = value => {
    const filterGroups = filter.orderedValues?.length ? filter.orderedValues : filter.values

    const valuesLookup = filterGroups.reduce((acc, groupName) => {
      const values: string[] = _.uniq(
        rawData
          .map(d => {
            return d[filter.columnName] === groupName ? d[value] : ''
          })
          .filter(value => value !== '')
      ).sort()

      acc[groupName] = {
        values // add temp values when column changes
      }
      return acc
    }, {})
    const newSubGrouping: SubGrouping = {
      ...subGrouping,
      columnName: value,
      valuesLookup
    }

    updateSubGroupingFilterProperty(newSubGrouping)
  }

  const handleSubGroupingOrderBy = (order: OrderBy) => {
    const newValuesLookup = Object.keys(subGrouping.valuesLookup).reduce((acc, groupName) => {
      const subGroup = subGrouping.valuesLookup[groupName]

      const { values } = handleSorting({ values: subGroup.values, order })
      acc[groupName] = {
        values
      }
      if (order === 'cust') {
        acc[groupName].orderedValues = values
      } else {
        delete acc[groupName].orderedValues
      }
      return acc
    }, {})
    const newSortedSubGrouping = { ...subGrouping, order, valuesLookup: newValuesLookup }
    updateSubGroupingFilterProperty(newSortedSubGrouping)
  }

  const handleSubGroupingCustomOrder = (
    currentIndex,
    newIndex,
    subGroupingFitlerOrder: string[],
    groupName: string
  ) => {
    const updatedGroupOrderedValues = _.cloneDeep(subGroupingFitlerOrder)
    const [movedItem] = updatedGroupOrderedValues.splice(currentIndex, 1)
    updatedGroupOrderedValues.splice(newIndex, 0, movedItem)
    const newSubGrouping = _.cloneDeep(subGrouping)
    newSubGrouping.valuesLookup[groupName].values = updatedGroupOrderedValues
    newSubGrouping.valuesLookup[groupName].orderedValues = updatedGroupOrderedValues
    updateSubGroupingFilterProperty({ ...newSubGrouping, order: 'cust' })
  }

  const columnNameOptions = dataColumns.filter(columnName => !listOfUsedColumnNames.includes(columnName))

  return (
    <div className='nesteddropdown-editor'>
      <label>
        <span className='edit-label column-heading mt-2'>Label</span>
        <input
          type='text'
          value={filter.label}
          onChange={e => {
            updateGroupingFilterProp('label', e.target.value)
          }}
        />
      </label>

      <label>
        <div className='edit-label column-heading mt-2'>
          Filter Grouping
          <span></span>
        </div>
        <select value={filter.columnName} onChange={e => handleGroupColumnNameChange(e.target.value)}>
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
          checked={!!filter.setByQueryParameter}
          aria-label='Create query parameters'
          onChange={e => {
            updateGroupingFilterProp('setByQueryParameter', filter.columnName)
            updateSubGroupingFilterProperty({ ...subGrouping, setByQueryParameter: subGrouping.columnName })
          }}
        />
        <span> Create query parameters</span>
        {!!filter.setByQueryParameter && (
          <>
            <span className='edit-label column-heading mt-2'>
              Grouping: Default Value Set By Query String Parameter
            </span>
            <input
              type='text'
              value={filter.setByQueryParameter}
              onChange={e => {
                updateGroupingFilterProp('setByQueryParameter', e.target.value)
              }}
            />
            <span className='edit-label column-heading mt-2'>
              SubGrouping: Default Value Set By Query String Parameter
            </span>
            <input
              type='text'
              value={subGrouping.setByQueryParameter}
              onChange={e => {
                const setByQueryParameter = e.target.value
                updateSubGroupingFilterProperty({ ...subGrouping, setByQueryParameter })
              }}
            />
          </>
        )}
      </label>

      <label className='mt-2'>
        <div className='edit-label column-heading float-right'>{filter.columnName} </div>
        <span className={'edit-filterOrder column-heading '}>Group Order</span>
        <select value={filter.order} onChange={e => handleGroupingOrderBy(e.target.value as OrderBy)}>
          {filterOrderOptions.map((option, index) => {
            return (
              <option value={option.value} key={`filter-${option.label}-${index}`}>
                {option.label}
              </option>
            )
          })}
        </select>
        {filter.order === 'cust' && (
          <FilterOrder orderedValues={filter.orderedValues} handleFilterOrder={handleGroupingCustomOrder} />
        )}
      </label>

      {subGrouping?.columnName && (
        <label className='mt-2'>
          <span className={'edit-filterOrder column-heading'}>SubGrouping Order</span>
          <div className='edit-label column-heading float-right'>{subGrouping.columnName} </div>
          <select
            value={subGrouping.order ? subGrouping.order : 'asc'}
            onChange={e => handleSubGroupingOrderBy(e.target.value as OrderBy)}
          >
            {filterOrderOptions.map((option, index) => {
              return (
                <option value={option.value} key={`filter-${index}`}>
                  {option.label}
                </option>
              )
            })}
          </select>
          {subGrouping?.order === 'cust' &&
            filter.values.map((groupName, i) => {
              const orderedSubGroupValues = subGrouping.valuesLookup[groupName].orderedValues
              return (
                <div key={`group-subgroup-values-${groupName}-${i}`}>
                  <span className='font-weight-bold'>{groupName}</span>
                  <FilterOrder
                    key={`subgroup-values-${groupName}-${i}`}
                    orderedValues={orderedSubGroupValues}
                    handleFilterOrder={(sourceIndex, destinationIndex) => {
                      handleSubGroupingCustomOrder(sourceIndex, destinationIndex, orderedSubGroupValues, groupName)
                    }}
                  />
                </div>
              )
            })}
        </label>
      )}
    </div>
  )
}

export default NestedDropdownEditor
