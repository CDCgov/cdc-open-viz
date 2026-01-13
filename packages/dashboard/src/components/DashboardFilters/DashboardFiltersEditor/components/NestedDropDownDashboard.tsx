import { DashboardConfig } from '../../../../types/DashboardConfig'
import { SharedFilter } from '../../../../types/SharedFilter'
import _ from 'lodash'
import { SubGrouping, OrderBy } from '@cdc/core/types/VizFilter'
import { TextField, Select } from '@cdc/core/components/EditorPanel/Inputs'
import { handleSorting } from '@cdc/core/components/Filters/helpers/handleSorting'
import { filterOrderOptions } from '@cdc/core/helpers/filterOrderOptions'
import FilterOrder from '@cdc/core/components/EditorPanel/VizFilterEditor/components/FilterOrder'

type NestedDropDownEditorDashboardProps = {
  config: DashboardConfig
  filter: SharedFilter
  isDashboard: boolean
  updateFilterProp: Function
}

const NestedDropDownDashboard: React.FC<NestedDropDownEditorDashboardProps> = ({
  filter,
  config,
  isDashboard = false,
  updateFilterProp
}) => {
  const subGrouping = filter?.subGrouping

  const datasets = Object.keys(config.datasets)
  const columnNameOptionsInDataset = []
  datasets.map(datasetKey => {
    const data = config.datasets[datasetKey].data
    if (data) {
      const columnNamesInDataset = Object.keys(data[0])
      columnNamesInDataset.forEach(columnName =>
        columnNameOptionsInDataset.push({
          datasetKey,
          columnName
        })
      )
    }
  })

  const subGroupingColumnNameOptions = []

  const populateSubGroupingOptions = (selectedOptionDatasetName, filterColumnName) => {
    columnNameOptionsInDataset.forEach(columnNameObject => {
      if (
        columnNameObject.datasetKey === selectedOptionDatasetName &&
        columnNameObject.columnName !== filterColumnName
      ) {
        subGroupingColumnNameOptions.push(columnNameObject.columnName)
      }
    })
  }

  const handleFitlerGroupColumnNameChange = (value: string) => {
    if (!value) {
      updateFilterProp('columnName', '')
      return
    }
    const [newColumnName, selectedOptionDatasetName] = value.split('|')
    updateFilterProp('columnName', newColumnName)
    populateSubGroupingOptions(selectedOptionDatasetName, newColumnName)
  }

  const handleSubGroupColumnNameChange = (value: string) => {
    if (!value) {
      updateFilterProp('subGrouping', { ...subGrouping, columnName: '', valuesLookup: {}, defaultValue: '' })
      return
    }
    const [newColumnName, selectedOptionDatasetName] = value.split('|')

    const order = subGrouping?.order || 'asc'

    const valuesLookup = filter.values.reduce((acc, groupName) => {
      const rawValues: string[] = _.uniq(
        config.datasets[selectedOptionDatasetName].data
          .map(d => {
            return d[filter.columnName] === groupName ? d[newColumnName] : ''
          })
          .filter(value => value !== '')
      )

      // Sort values according to the order setting
      const { values: sortedValues } = handleSorting({ values: rawValues, order })

      acc[groupName] = {
        values: sortedValues,
        orderedValues: sortedValues
      }
      return acc
    }, {})

    const newSubGrouping: SubGrouping = {
      ...subGrouping,
      columnName: newColumnName,
      valuesLookup,
      order,
      defaultValue: '' // Reset default value when column changes
    }

    updateFilterProp('subGrouping', newSubGrouping)
  }

  // Handle group order change (asc/desc/cust)
  const handleGroupingOrderBy = (order: OrderBy) => {
    const groupSortObject = {
      values: _.cloneDeep(filter.values),
      order
    }
    const { values: newOrderedValues } = handleSorting(groupSortObject)

    const updates: Partial<SharedFilter> = {
      values: newOrderedValues,
      order
    }

    if (order === 'cust') {
      updates.orderedValues = newOrderedValues
    } else {
      updates.orderedValues = undefined
    }

    // Update filter with new order and values
    updateFilterProp('order', order)
  }

  // Handle drag-drop reorder for group values
  const handleGroupingCustomOrder = (sourceIndex: number, destinationIndex: number) => {
    if (sourceIndex === undefined || destinationIndex === undefined || sourceIndex === destinationIndex) return

    const orderedValues = _.cloneDeep(filter.orderedValues || filter.values)
    const [movedItem] = orderedValues.splice(sourceIndex, 1)
    orderedValues.splice(destinationIndex, 0, movedItem)

    // Update both values and orderedValues, and ensure order is 'cust'
    updateFilterProp('orderedValues', orderedValues)
    if (filter.order !== 'cust') {
      updateFilterProp('order', 'cust')
    }
  }

  // Handle subgroup order change (asc/desc/cust)
  const handleSubGroupingOrderBy = (order: OrderBy) => {
    const newValuesLookup = Object.keys(subGrouping.valuesLookup).reduce((acc, groupName) => {
      const subGroup = subGrouping.valuesLookup[groupName]
      const { values: sortedValues } = handleSorting({ values: _.cloneDeep(subGroup.values), order })

      acc[groupName] = {
        values: sortedValues,
        orderedValues: order === 'cust' ? sortedValues : undefined
      }
      return acc
    }, {})

    const newSubGrouping: SubGrouping = {
      ...subGrouping,
      order,
      valuesLookup: newValuesLookup
    }

    updateFilterProp('subGrouping', newSubGrouping)
  }

  // Handle drag-drop reorder for subgroup values within a specific group
  const handleSubGroupingCustomOrder = (
    sourceIndex: number,
    destinationIndex: number,
    currentOrderedValues: string[],
    groupName: string
  ) => {
    if (sourceIndex === undefined || destinationIndex === undefined || sourceIndex === destinationIndex) return

    const updatedGroupOrderedValues = _.cloneDeep(currentOrderedValues)
    const [movedItem] = updatedGroupOrderedValues.splice(sourceIndex, 1)
    updatedGroupOrderedValues.splice(destinationIndex, 0, movedItem)

    const newSubGrouping = _.cloneDeep(subGrouping)
    newSubGrouping.valuesLookup[groupName].values = updatedGroupOrderedValues
    newSubGrouping.valuesLookup[groupName].orderedValues = updatedGroupOrderedValues
    newSubGrouping.order = 'cust'

    updateFilterProp('subGrouping', newSubGrouping)
  }

  return (
    <div className='nesteddropdown-editor'>
      {!isDashboard && (
        <TextField
          label='Label'
          value={filter.key}
          updateField={(_section, _subSection, _key, value) => updateFilterProp('key', value)}
        />
      )}
      <Select
        label='Filter Grouping'
        value={
          filter.columnName
            ? `${filter.columnName}|${
                columnNameOptionsInDataset.find(opt => opt.columnName === filter.columnName)?.datasetKey || ''
              }`
            : ''
        }
        options={[
          { value: '', label: '- Select Option -' },
          ...columnNameOptionsInDataset.map(option => ({
            value: `${option.columnName}|${option.datasetKey}`,
            label: option.columnName
          }))
        ]}
        onChange={e => handleFitlerGroupColumnNameChange(e.target.value)}
      />
      <Select
        label='Filter SubGrouping'
        value={
          subGrouping?.columnName
            ? `${subGrouping.columnName}|${
                columnNameOptionsInDataset.find(opt => opt.columnName === subGrouping.columnName)?.datasetKey || ''
              }`
            : ''
        }
        options={[
          { value: '', label: '- Select Option -' },
          ...columnNameOptionsInDataset
            .filter(option => option.columnName !== filter.columnName)
            .map(option => ({
              value: `${option.columnName}|${option.datasetKey}`,
              label: option.columnName
            }))
        ]}
        onChange={e => handleSubGroupColumnNameChange(e.target.value)}
      />

      {/* Default Value for Main Group */}
      {filter.columnName && filter.values && filter.values.length > 0 && (
        <Select
          value={filter.defaultValue}
          options={filter.orderedValues || filter.values}
          updateField={(_section, _subSection, _key, value) => updateFilterProp('defaultValue', value)}
          label={'Group Default Value'}
          initial={'Select'}
        />
      )}

      {/* Default Value for Sub Group */}
      {subGrouping?.columnName && (filter.defaultValue || filter.active) && subGrouping.valuesLookup && (
        <Select
          value={subGrouping.defaultValue}
          options={(() => {
            const groupKey = filter.defaultValue || (Array.isArray(filter.active) ? filter.active[0] : filter.active)
            const lookup = subGrouping.valuesLookup[groupKey as string]
            return lookup?.orderedValues || lookup?.values || []
          })()}
          updateField={(_section, _subSection, _key, value) => {
            const newSubGrouping = { ...subGrouping, defaultValue: value }
            updateFilterProp('subGrouping', newSubGrouping)
          }}
          label={'Sub Group Default Value'}
          initial={'Select'}
        />
      )}

      {/* Group Order */}
      {filter.columnName && filter.values && filter.values.length > 0 && (
        <div className='mt-2'>
          <Select
            label='Group Order'
            value={filter.order || 'asc'}
            options={filterOrderOptions}
            onChange={e => handleGroupingOrderBy(e.target.value as OrderBy)}
          />
          {filter.order === 'cust' && (
            <FilterOrder
              orderedValues={filter.orderedValues || filter.values}
              handleFilterOrder={handleGroupingCustomOrder}
            />
          )}
        </div>
      )}

      {/* SubGrouping Order */}
      {subGrouping?.columnName && subGrouping.valuesLookup && Object.keys(subGrouping.valuesLookup).length > 0 && (
        <div className='mt-2'>
          <Select
            label='SubGrouping Order'
            value={subGrouping.order || 'asc'}
            options={filterOrderOptions}
            onChange={e => handleSubGroupingOrderBy(e.target.value as OrderBy)}
          />
          {subGrouping.order === 'cust' &&
            (filter.orderedValues || filter.values)?.map((groupName, i) => {
              const lookup = subGrouping.valuesLookup[groupName]
              if (!lookup) return null
              const orderedSubGroupValues = lookup.orderedValues || lookup.values
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

export default NestedDropDownDashboard
