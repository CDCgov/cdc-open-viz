import { DashboardConfig } from '../../../../types/DashboardConfig'
import { SharedFilter } from '../../../../types/SharedFilter'
import _ from 'lodash'
import { SubGrouping } from '@cdc/core/types/VizFilter'
import { TextField } from '@cdc/core/components/EditorPanel/Inputs'

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
    const columnNamesInDataset = Object.keys(config.datasets[datasetKey].data[0])
    columnNamesInDataset.forEach(columnName =>
      columnNameOptionsInDataset.push({
        datasetKey,
        columnName
      })
    )
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

  const handleFitlerGroupColumnNameChange = selectedOption => {
    const selectedOptionDatasetName = selectedOption.selectedOptions[0].dataset.set
    const newColumnName = selectedOption.value
    updateFilterProp('columnName', newColumnName)
    populateSubGroupingOptions(selectedOptionDatasetName, newColumnName)
  }

  const handleSubGroupColumnNameChange = selectedOption => {
    const selectedOptionDatasetName = selectedOption.selectedOptions[0].dataset.set
    const newColumnName = selectedOption.value

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
      valuesLookup
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
      <label>
        <div className='edit-label column-heading mt-2'>
          Filter Grouping
          <span></span>
        </div>
        <select value={filter.columnName} onChange={e => handleFitlerGroupColumnNameChange(e.target)}>
          <option value=''>- Select Option -</option>
          {columnNameOptionsInDataset?.map(option => (
            <option
              value={option.columnName}
              data-set={option.datasetKey}
              key={`filter_${option.datasetKey}_${option.columnName} `}
            >
              {option.columnName}
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
            handleSubGroupColumnNameChange(e.target)
          }}
        >
          <option value=''>- Select Option -</option>
          {columnNameOptionsInDataset.map(option => {
            if (option.columnName !== filter.columnName) {
              return (
                <option
                  value={option.columnName}
                  data-set={option.datasetKey}
                  key={`subFilter_${option.datasetKey}_${option.columnName} `}
                >
                  {option.columnName}
                </option>
              )
            }
          })}
        </select>
      </label>
    </div>
  )
}

export default NestedDropDownDashboard
