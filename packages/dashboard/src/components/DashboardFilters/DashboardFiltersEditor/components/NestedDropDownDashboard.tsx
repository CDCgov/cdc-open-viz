import { DashboardConfig } from '../../../../types/DashboardConfig'
import { SharedFilter } from '../../../../types/SharedFilter'
import _ from 'lodash'
import { SubGrouping } from '@cdc/core/types/VizFilter'
import { TextField, Select } from '@cdc/core/components/EditorPanel/Inputs'

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
      updateFilterProp('defaultValue', '')
      return
    }
    const [newColumnName, selectedOptionDatasetName] = value.split('|')
    updateFilterProp('columnName', newColumnName)
    updateFilterProp('defaultValue', '') // Reset default value when column changes
    populateSubGroupingOptions(selectedOptionDatasetName, newColumnName)
  }

  const handleSubGroupColumnNameChange = (value: string) => {
    if (!value) {
      updateFilterProp('subGrouping', { ...subGrouping, columnName: '', valuesLookup: {}, defaultValue: '' })
      return
    }
    const [newColumnName, selectedOptionDatasetName] = value.split('|')

    const valuesLookup = filter.values.reduce((acc, groupName) => {
      const values: string[] = _.uniq(
        config.datasets[selectedOptionDatasetName].data
          .map(d => {
            return d[filter.columnName] === groupName ? d[newColumnName] : ''
          })
          .filter(value => value !== '')
      ).sort()

      acc[groupName] = {
        values,
        orderedValues: values
      }
      return acc
    }, {})

    const newSubGrouping: SubGrouping = {
      ...subGrouping,
      columnName: newColumnName,
      valuesLookup,
      defaultValue: '' // Reset default value when column changes
    }

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
          options={filter.values}
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
            return subGrouping.valuesLookup[groupKey as string]?.values || []
          })()}
          updateField={(_section, _subSection, _key, value) => {
            const newSubGrouping = { ...subGrouping, defaultValue: value }
            updateFilterProp('subGrouping', newSubGrouping)
          }}
          label={'Sub Group Default Value'}
          initial={'Select'}
        />
      )}
    </div>
  )
}

export default NestedDropDownDashboard
