import { useContext } from 'react'

import { Select } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { useFilterManagement } from '@cdc/core/hooks/useFilterManagement'

import ConfigContext from '../../../ConfigContext'

const DataPointFiltersSection = ({ columns, columnSourceData }) => {
  const { config, updateConfig } = useContext(ConfigContext)
  const { addNewFilter, removeFilter, updateFilterProp, getFilterColumnValues } = useFilterManagement(
    config,
    updateConfig,
    columnSourceData
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
        <ul className='filters-list' style={{ paddingLeft: 0, marginBottom: '1rem' }}>
          {config.filters.map((filter, index) => (
            <fieldset className='edit-block' key={index}>
              <button
                type='button'
                className='remove-column'
                onClick={() => {
                  removeFilter(index)
                }}
              >
                Remove
              </button>
              <Select
                label='Column'
                value={filter.columnName || ''}
                options={columns}
                initial='- Select Option -'
                onChange={e => {
                  updateFilterProp('columnName', index, e.target.value)
                }}
              />
              <Select
                label='Column Value'
                value={filter.columnValue || ''}
                options={getFilterColumnValues(index)}
                initial='- Select Option -'
                onChange={e => {
                  updateFilterProp('columnValue', index, e.target.value)
                }}
              />
            </fieldset>
          ))}
        </ul>
      )}
      <Button onClick={addNewFilter} fluid>
        Add Filter
      </Button>
    </>
  )
}

export default DataPointFiltersSection
