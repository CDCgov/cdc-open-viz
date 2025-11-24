import _ from 'lodash'
import { SubGrouping, VizFilter, OrderBy } from '../../../types/VizFilter'
import { handleSorting } from '../../Filters/helpers/handleSorting'
import { filterOrderOptions } from '../../../helpers/filterOrderOptions'
import FilterOrder from './components/FilterOrder'
import { Visualization } from '../../../types/Visualization'
import { useMemo } from 'react'
import { Select } from '../Inputs'

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

  const useParameters = useMemo(() => {
    const filter = config.filters[filterIndex]
    return !!(filter.setByQueryParameter && filter.subGrouping?.setByQueryParameter)
  }, [config, filterIndex])

  const handleParametersCheckboxClick = e => {
    const updatedFilters = config.filters
    const { checked } = e.target
    const groupColumnName = checked ? filter.columnName : ''
    const subGroupColumnName = checked ? subGrouping.columnName : ''
    updatedFilters[filterIndex] = {
      ...config.filters[filterIndex],
      setByQueryParameter: groupColumnName,
      subGrouping: { ...subGrouping, setByQueryParameter: subGroupColumnName }
    }

    updateField(null, null, 'filters', updatedFilters)
  }

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

      <Select
        label='Filter Grouping'
        value={filter.columnName}
        options={[{ value: '', label: '- Select Option -' }, ...columnNameOptions.map(opt => ({ value: opt, label: opt }))]}
        onChange={e => handleGroupColumnNameChange(e.target.value)}
      />

      <Select
        label='Filter SubGrouping'
        value={subGrouping?.columnName ?? ''}
        options={[
          { value: '', label: '- Select Option -' },
          ...columnNameOptions
            .filter(option => option !== filter.columnName)
            .map(opt => ({ value: opt, label: opt }))
        ]}
        onChange={e => {
          handleSubGroupColumnNameChange(e.target.value)
        }}
      />

      <label>
        <input
          type='checkbox'
          checked={useParameters}
          aria-label='Create query parameters'
          disabled={!filter.columnName || !subGrouping?.columnName}
          onChange={e => handleParametersCheckboxClick(e)}
        />
        <span> Create query parameters</span>
        {useParameters && (
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
              value={subGrouping?.setByQueryParameter}
              onChange={e => {
                const setByQueryParameter = e.target.value
                updateSubGroupingFilterProperty({ ...subGrouping, setByQueryParameter })
              }}
            />
          </>
        )}
      </label>

      <div className='mt-2'>
        <div className='edit-label column-heading float-right'>{filter.columnName} </div>
        <Select
          label='Group Order'
          value={filter.order}
          options={filterOrderOptions}
          onChange={e => handleGroupingOrderBy(e.target.value as OrderBy)}
        />
        {filter.order === 'cust' && (
          <FilterOrder orderedValues={filter.orderedValues} handleFilterOrder={handleGroupingCustomOrder} />
        )}
      </div>

      {subGrouping?.columnName && (
        <div className='mt-2'>
          <div className='edit-label column-heading float-right'>{subGrouping.columnName} </div>
          <Select
            label='SubGrouping Order'
            value={subGrouping.order ? subGrouping.order : 'asc'}
            options={filterOrderOptions}
            onChange={e => handleSubGroupingOrderBy(e.target.value as OrderBy)}
          />
          {subGrouping?.order === 'cust' &&
            filter.values.map((groupName, i) => {
              const orderedSubGroupValues = subGrouping.valuesLookup[groupName].orderedValues
              return (
                <div key={`group-subgroup-values-${groupName}-${i}`}>
                  <span className='font-weight-bold fw-bold'>{groupName}</span>
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
        </div>
      )}
    </div>
  )
}

export default NestedDropdownEditor
