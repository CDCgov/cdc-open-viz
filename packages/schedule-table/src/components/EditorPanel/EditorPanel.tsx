import { useContext } from 'react'

// Context
import ConfigContext from '../../ConfigContext'

// Components
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import '@cdc/core/styles/v2/components/editor.scss'
import Accordion from '@cdc/core/components/ui/Accordion'
import { Select, TextField, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import { VisualSection } from '@cdc/core/components/EditorPanel/sections/VisualSection'
import { chartColorPalettes } from '@cdc/core/data/chartColorPalettes'

// Helpers
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'
import { useFilterManagement } from '@cdc/core/hooks/useFilterManagement'

// Types
import { RecommendationCategory, Footnote } from '../../types/Config'
import { PaletteSelector } from '@cdc/core/components/PaletteSelector'
import Footnotes from '@cdc/core/components/Footnotes/Footnotes'

const EditorPanel: React.FC = () => {
  const { config, updateConfig, loading, data, setParentConfig, isDashboard } = useContext(ConfigContext)

  const updateField = updateFieldFactory(config, updateConfig, true)

  // Extract column names from data
  const columns = useDataColumns(data)

  // Filters management
  const { addNewFilter, removeFilter, updateFilterProp, getFilterColumnValues } = useFilterManagement(
    config,
    updateConfig,
    data
  )

  // Legend position options
  const legendPositionOptions = [
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' }
  ]

  // Handlers for recommendations
  const addRecommendation = () => {
    const newRecommendation: RecommendationCategory = {
      value: '',
      label: '',
      color: '#cccccc',
      symbol: ''
    }
    const updatedRecommendations = [...(config.recommendations || []), newRecommendation]
    updateConfig({ ...config, recommendations: updatedRecommendations })
  }

  const removeRecommendation = (index: number) => {
    const updatedRecommendations = [...config.recommendations]
    updatedRecommendations.splice(index, 1)
    updateConfig({ ...config, recommendations: updatedRecommendations })
  }

  const updateRecommendation = (index: number, field: keyof RecommendationCategory, value: any) => {
    const updatedRecommendations = [...config.recommendations]
    updatedRecommendations[index] = { ...updatedRecommendations[index], [field]: value }
    updateConfig({ ...config, recommendations: updatedRecommendations })
  }

  // Handlers for footnotes
  const addFootnote = () => {
    const newFootnote: Footnote = {
      symbol: '',
      text: ''
    }
    const updatedFootnotes = [...(config.footnotes || []), newFootnote]
    updateConfig({ ...config, footnotes: updatedFootnotes })
  }

  const removeFootnote = (index: number) => {
    const updatedFootnotes = [...(config.footnotes || [])]
    updatedFootnotes.splice(index, 1)
    updateConfig({ ...config, footnotes: updatedFootnotes })
  }

  const updateFootnote = (index: number, field: keyof Footnote, value: string) => {
    const updatedFootnotes = [...(config.footnotes || [])]
    updatedFootnotes[index] = { ...updatedFootnotes[index], [field]: value }
    updateConfig({ ...config, footnotes: updatedFootnotes })
  }

  return (
    <BaseEditorPanel
      config={config}
      updateConfig={updateConfig}
      loading={loading}
      setParentConfig={setParentConfig}
      isDashboard={isDashboard}
      title='Configure Schedule Table'
    >
      {({ convertStateToConfig }) => (
        <Accordion>
          <Accordion.Section title='General'>
            <TextField
              value={config.title}
              fieldName='title'
              label='Title'
              placeholder='Schedule Table Title'
              updateField={updateField}
            />
            <CheckBox value={config.showTitle} fieldName='showTitle' label='Show Title' updateField={updateField} />
          </Accordion.Section>

          <Accordion.Section title='Data Mapping'>
            <label className='edit-label'>
              <span className='edit-label__heading'>Matrix Configuration</span>
              <span className='edit-label__description'>Configure how data maps to the schedule table</span>
            </label>

            <Select
              value={config.matrix?.rowKey}
              section='matrix'
              fieldName='rowKey'
              label='Row Key'
              updateField={updateField}
              options={columns}
              initial='Select Column'
            />

            <Select
              value={config.matrix?.columnKey}
              section='matrix'
              fieldName='columnKey'
              label='Column Key'
              updateField={updateField}
              options={columns}
              initial='Select Column'
            />

            <Select
              value={config.matrix?.valueKey}
              section='matrix'
              fieldName='valueKey'
              label='Value Key'
              updateField={updateField}
              options={columns}
              initial='Select Column'
            />

            <Select
              value={config.matrix?.displayKey}
              section='matrix'
              fieldName='displayKey'
              label='Display Key'
              updateField={updateField}
              options={columns}
              initial='Select Column'
            />

            <Select
              value={config.matrix?.notesKey}
              section='matrix'
              fieldName='notesKey'
              label='Notes Key (Optional)'
              updateField={updateField}
              options={columns}
              initial='Select Column'
            />
          </Accordion.Section>

          <Accordion.Section title='Legend'>
            <label className='edit-label'>
              <span className='edit-label__heading'>Recommendation Categories</span>
              <span className='edit-label__description'>Define color-coded recommendation categories</span>
            </label>

            {config.recommendations?.map((rec, index) => (
              <fieldset key={index} className='edit-block' style={{ marginBottom: '1rem' }}>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => removeRecommendation(index)}
                  style={{ marginBottom: '0.5rem' }}
                >
                  Remove Category {index + 1}
                </button>

                <TextField
                  value={rec.value}
                  label='Value'
                  placeholder='e.g., recommended'
                  updateField={(_section, _field, value) => updateRecommendation(index, 'value', value)}
                />

                <TextField
                  value={rec.label}
                  label='Label'
                  placeholder='e.g., Recommended for all persons'
                  updateField={(_section, _field, value) => updateRecommendation(index, 'label', value)}
                />

                <TextField
                  value={rec.color}
                  label='Color (Hex Code)'
                  placeholder='e.g., #ffc107'
                  updateField={(_section, _field, value) => updateRecommendation(index, 'color', value)}
                />

                <TextField
                  value={rec.symbol}
                  label='Symbol (Optional)'
                  placeholder='e.g., ■'
                  updateField={(_section, _field, value) => updateRecommendation(index, 'symbol', value)}
                />
              </fieldset>
            ))}

            <button type='button' className='btn btn-primary' onClick={addRecommendation}>
              + Add Recommendation
            </button>
          </Accordion.Section>

          <Accordion.Section title='Table Settings'>
            <TextField
              value={config.table?.caption}
              section='table'
              fieldName='caption'
              label='Table Caption'
              placeholder='Optional caption'
              updateField={updateField}
            />

            <CheckBox
              value={config.table?.showLegend}
              section='table'
              fieldName='showLegend'
              label='Show Legend'
              updateField={updateField}
            />

            {config.table?.showLegend && (
              <Select
                value={config.table?.legendPosition}
                section='table'
                fieldName='legendPosition'
                label='Legend Position'
                updateField={updateField}
                options={legendPositionOptions}
              />
            )}

            <CheckBox
              value={config.table?.stickyHeaders}
              section='table'
              fieldName='stickyHeaders'
              label='Sticky Headers'
              updateField={updateField}
            />

            <TextField
              value={config.table?.cellMinWidth?.toString()}
              section='table'
              fieldName='cellMinWidth'
              label='Cell Minimum Width (px)'
              placeholder='150'
              type='number'
              updateField={updateField}
            />

            <CheckBox
              value={config.table?.showNotesLinks}
              section='table'
              fieldName='showNotesLinks'
              label='Show Notes Links'
              updateField={updateField}
            />

            {config.table?.showNotesLinks && (
              <TextField
                value={config.table?.notesLinkText}
                section='table'
                fieldName='notesLinkText'
                label='Notes Link Text'
                placeholder='See Notes'
                updateField={updateField}
              />
            )}
          </Accordion.Section>

          <Accordion.Section title='Footnotes'>
            <label className='edit-label'>
              <span className='edit-label__heading'>Footnotes</span>
              <span className='edit-label__description'>Add footnotes to your schedule table</span>
            </label>

            {/* Editing UI remains the same, but display uses shared Footnotes */}
            {config.footnotes?.map((footnote, index) => (
              <fieldset key={index} className='edit-block' style={{ marginBottom: '1rem' }}>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => removeFootnote(index)}
                  style={{ marginBottom: '0.5rem' }}
                >
                  Remove Footnote {index + 1}
                </button>

                <TextField
                  value={footnote.symbol}
                  label='Symbol'
                  placeholder='e.g., *'
                  updateField={(_section, _field, value) => updateFootnote(index, 'symbol', value)}
                />

                <TextField
                  value={footnote.text}
                  label='Text'
                  placeholder='Footnote text'
                  updateField={(_section, _field, value) => updateFootnote(index, 'text', value)}
                />
              </fieldset>
            ))}

            <button type='button' className='btn btn-primary' onClick={addFootnote}>
              + Add Footnote
            </button>

            {/* Display footnotes using shared component for preview */}
            <Footnotes footnotes={config.footnotes || []} />
          </Accordion.Section>

          <Accordion.Section title='Filters'>
            <label className='edit-label'>
              <span className='edit-label__heading'>Data Filters</span>
              <span className='edit-label__description'>Filter data displayed in the table</span>
            </label>

            {config.filters?.map((filter: any, index: number) => (
              <fieldset key={index} className='edit-block' style={{ marginBottom: '1rem' }}>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => removeFilter(index)}
                  style={{ marginBottom: '0.5rem' }}
                >
                  Remove Filter {index + 1}
                </button>

                <Select
                  value={filter.columnName || ''}
                  label='Column'
                  updateField={(_section, _subsection, fieldName, value) => updateFilterProp(fieldName, index, value)}
                  fieldName='columnName'
                  options={columns}
                  initial='Select Column'
                />

                <Select
                  value={filter.columnValue || ''}
                  label='Value'
                  updateField={(_section, _subsection, fieldName, value) => updateFilterProp(fieldName, index, value)}
                  fieldName='columnValue'
                  options={getFilterColumnValues(filter.columnName)}
                  initial='Select Value'
                />
              </fieldset>
            ))}

            <button type='button' className='btn btn-primary' onClick={addNewFilter}>
              + Add Filter
            </button>
          </Accordion.Section>

          <Accordion.Section title='Visual'>
            <VisualSection
              config={config}
              updateField={updateField}
              updateConfig={updateConfig}
              showBorder={true}
              showAccent={true}
              showBackground={true}
            />

            <PaletteSelector
              palettes={Object.keys(chartColorPalettes.v2)}
              colorPalettes={chartColorPalettes.v2}
              config={config}
              selectedPalette={config.palette || Object.keys(chartColorPalettes.v2)[0]}
              onPaletteSelect={palette => updateConfig({ ...config, palette })}
              element='button'
            />
          </Accordion.Section>
        </Accordion>
      )}
    </BaseEditorPanel>
  )
}

export default EditorPanel
