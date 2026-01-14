import { useContext } from 'react'

// Context
import ConfigContext from '../../ConfigContext'

// Helpers
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useFilterManagement } from '@cdc/core/hooks/useFilterManagement'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'

// Components
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import { TextField, Select, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Accordion from '@cdc/core/components/ui/Accordion'
import { VisualSection } from '@cdc/core/components/EditorPanel/sections/VisualSection'

type FilteredTextEditorPanelProps = {
  // Add any props if needed
}

const EditorPanel: React.FC<FilteredTextEditorPanelProps> = () => {
  const { config, updateConfig, loading, stateData: data, setParentConfig, isDashboard } = useContext(ConfigContext)
  const updateField = updateFieldFactory(config, updateConfig, true)

  // Filters -------------------------
  const { addNewFilter, removeFilter, updateFilterProp, getFilterColumnValues } = useFilterManagement(
    config,
    updateConfig,
    data
  )

  // Extract column names from data with memoization (replaces getColumns)
  const columns = useDataColumns(data)

  return (
    <BaseEditorPanel
      config={config}
      updateConfig={updateConfig as (config: any) => void}
      loading={loading}
      setParentConfig={setParentConfig as ((config: any) => void) | undefined}
      isDashboard={isDashboard}
      title='Configure Filtered Text'
    >
      {() => (
        <Accordion>
          <Accordion.Section title='General'>
            <TextField
              value={config.title}
              fieldName='title'
              label='Title'
              placeholder='Filterable Text Title'
              updateField={updateField}
            />
            <Select
              value={config.titleStyle}
              fieldName='titleStyle'
              label='Title Style'
              updateField={updateField}
              options={[
                { value: 'small', label: 'Small (h3)' },
                { value: 'large', label: 'Large (h2)' },
                { value: 'legacy', label: 'Legacy' }
              ]}
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>
                      Choose the visual style for the title. Consider heading order on your page when selecting the
                      title style. For 508 reasons, ensure your page follows a proper heading order.
                    </p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
          </Accordion.Section>
          <Accordion.Section title='Data'>
            <Select
              value={config.textColumn || ''}
              fieldName='textColumn'
              label='Text Column'
              updateField={updateField}
              initial='Select'
              options={columns}
            />

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
                {config.filters.map((filter: any, index: number) => (
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
                      options={[
                        { value: '', label: '- Select Option -' },
                        ...columns.map(col => ({ value: col, label: col }))
                      ]}
                      onChange={e => {
                        updateFilterProp('columnName', index, e.target.value)
                      }}
                    />
                    <Select
                      label='Column Value'
                      value={filter.columnValue || ''}
                      options={[
                        { value: '', label: '- Select Option -' },
                        ...getFilterColumnValues(index).map(val => ({ value: val, label: val }))
                      ]}
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
          </Accordion.Section>
          <Accordion.Section title='Visual'>
            <VisualSection config={config} updateField={updateField} updateConfig={updateConfig} />
          </Accordion.Section>
        </Accordion>
      )}
    </BaseEditorPanel>
  )
}

export default EditorPanel
