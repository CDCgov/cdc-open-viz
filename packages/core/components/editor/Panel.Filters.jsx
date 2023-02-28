import React from 'react'

// Store
import useConfigStore from '../../stores/configStore'

// Helpers
import getDataColumns from '../../helpers/data/getDataColumns'

// Components
import Button from '../element/Button'
import InputSelect from '../input/InputSelect'
import Label from '../element/Label'
import SectionBlock from '../ui/SectionBlock'

const PanelFilters = () => {
  // Store Selectors
  const { config, updateConfig } = useConfigStore()

  const addNewFilter = () => {
    let newFilters = config.filters ? [ ...config.filters ] : []
    newFilters.push({ values: [] })
    updateConfig({ filters: newFilters })
  }

  const updateFilter = (filterName, filterIndex, filterValue) => {
    let newFilters = [...config.filters]
    newFilters[filterIndex] = {
      ...config.filters[filterIndex],
      [filterName]: filterValue
    }
    updateConfig({ filters: newFilters })
  }

  const removeFilter = (removeIndex) => {
    let newFilters = [ ...config.filters ]
    newFilters.splice(removeIndex, 1)
    updateConfig({ filters: newFilters })
  }

  const getFilterColumnValues = (filterIndex) => {
    const filterColumnName = config.filters[filterIndex].columnName
    let filterDataOptions = []
    if (config.data && filterColumnName) {
      config.data.forEach(row => {
        if (undefined !== row[filterColumnName] && -1 === filterDataOptions.indexOf(row[filterColumnName])) {
          filterDataOptions.push(row[filterColumnName])
        }
      })
      filterDataOptions.sort()
    }
    return filterDataOptions
  }

  return <>
    <Label tooltip={`To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").`}>
      Data Point Filters
    </Label>

    {config.filters && config.filters.map((filter, index) => (
      <SectionBlock key={index}>
        <Button className="cove-button--remove" onClick={() => removeFilter(index)}>
          Remove
        </Button>
        <InputSelect
          label="Column"
          options={getDataColumns(config.data)}
          initial="Select data column"
          onChange={(e) => updateFilter('columnName', index, e.target.value)}
          value={filter.columnName}
        />
        <InputSelect
          label="Column Value"
          options={getFilterColumnValues(index)}
          initial="Select column value"
          onChange={(e) => updateFilter('columnValue', index, e.target.value)}
          value={filter.columnValue}
          disabled={!config.filters[index].columnName}
        />
      </SectionBlock>
    ))}

    {(!config.filters || config.filters.length === 0) &&
      <p className="my-2" style={{ fontStyle: 'italic', textAlign: 'center' }}>
        There are currently no filters.
      </p>
    }

    <Button onClick={addNewFilter} fluid>Add Filter</Button>
  </>
}

export default PanelFilters
