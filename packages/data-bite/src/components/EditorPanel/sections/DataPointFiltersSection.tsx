import { useContext } from 'react'

import Button from '@cdc/core/components/elements/Button'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'
import { useFilterManagement } from '@cdc/core/hooks/useFilterManagement'

import Context from '../../../context'

const DataPointFiltersSection = () => {
  const { config, updateConfig, data, editorData } = useContext(Context)
  const sourceData = Array.isArray(editorData) && editorData.length ? editorData : data
  const columns = useDataColumns(sourceData)
  const { addNewFilter, removeFilter, updateFilterProp, getFilterColumnValues } = useFilterManagement(
    config,
    updateConfig,
    sourceData
  )

  return (
    <>
      <label style={{ marginBottom: '1rem' }}>
        <span className='edit-label'>
          Data Point Filters
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>
                To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a
                column called "Sex").
              </p>
            </Tooltip.Content>
          </Tooltip>
        </span>
      </label>
      {config.filters && (
        <ul className='filters-list'>
          {config.filters.map((filter: any, index: number) => (
            <fieldset className='edit-block' key={index}>
              <button type='button' className='btn btn-danger' onClick={() => removeFilter(index)}>
                Remove
              </button>
              <Select
                value={filter.columnName ? filter.columnName : ''}
                fieldName='columnName'
                label='Column Name'
                updateField={(section, subsection, fieldName, value) => updateFilterProp(fieldName, index, value)}
                options={columns}
                initial='- Select Option -'
              />
              <Select
                value={filter.columnValue || ''}
                fieldName='columnValue'
                label='Column Value'
                updateField={(section, subsection, fieldName, value) => updateFilterProp(fieldName, index, value)}
                options={Array.isArray(getFilterColumnValues(index)) ? getFilterColumnValues(index) : []}
                initial='- Select Option -'
              />
            </fieldset>
          ))}
        </ul>
      )}
      {(!config.filters || config.filters.length === 0) && (
        <div>
          <fieldset className='edit-block'>
            <p style={{ textAlign: 'center' }}>There are currently no filters.</p>
          </fieldset>
        </div>
      )}
      <Button type='button' onClick={addNewFilter} className='btn btn-primary full-width mt-3'>
        Add Filter
      </Button>
    </>
  )
}

export default DataPointFiltersSection
