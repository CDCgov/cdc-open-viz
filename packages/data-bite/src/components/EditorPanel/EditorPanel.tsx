import { useContext } from 'react'

import { DATA_FUNCTIONS, DATA_OPERATORS } from '@cdc/core/helpers/constants'

// Context
import Context from '../../context'

// Components
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import '@cdc/core/components/EditorPanel/editor.scss'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'
import { useListManagement } from '@cdc/core/hooks/useListManagement'
import { IMAGE_POSITIONS } from '../../constants'
import { Select, TextField, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import PanelMarkup from '@cdc/core/components/EditorPanel/components/PanelMarkup'
import Accordion from '@cdc/core/components/ui/Accordion'
import DataDrivenColorsSection from './sections/DataDrivenColorsSection'
import DataPointFiltersSection from './sections/DataPointFiltersSection'
import GeneralSection from './sections/GeneralSection'
import TrendIndicatorSection from './sections/TrendIndicatorSection'
import VisualSettingsSection from './sections/VisualSettingsSection'

type DataBiteEditorPanelProps = {
  // Add any props if needed
}

const EditorPanel: React.FC<DataBiteEditorPanelProps> = () => {
  const { config, updateConfig, loading, data, editorData, setParentConfig, isDashboard } = useContext(Context)

  const updateField = updateFieldFactory(config, updateConfig, true)
  const columnSourceData = Array.isArray(editorData) && editorData.length ? editorData : data

  // Extract column names from data with memoization (replaces getColumns)
  const columns = useDataColumns(columnSourceData)

  // Dynamic Images ----------------------------------------
  // Use standardized list management hook (Phase 2 improvement)
  const images = useListManagement({
    config,
    updateConfig,
    listPath: 'imageData.options',
    createItem: () => ({
      source: '',
      arguments: [{ operator: '', threshold: '' }],
      alt: '',
      secondArgument: false
    })
  })

  // Helper for removing second argument from dynamic image conditions
  const removeDynamicArgument = (index: number) => {
    const item = images.items[index]
    if (item?.arguments?.length > 1) {
      const updatedArguments = [...item.arguments]
      updatedArguments.pop()
      images.updateField(index, 'arguments', updatedArguments)
    }
  }

  return (
    <BaseEditorPanel
      config={config}
      updateConfig={updateConfig as (config: any) => void}
      loading={loading}
      setParentConfig={setParentConfig as ((config: any) => void) | undefined}
      isDashboard={isDashboard}
      title='Configure Data Bites'
    >
      {({ convertStateToConfig }) => (
        <>
          <Accordion>
            <Accordion.Section title='General'>
              <GeneralSection />
            </Accordion.Section>

            <Accordion.Section title='Data'>
              <ul className='column-edit'>
                <li className='two-col'>
                  <Select
                    value={config.dataColumn || ''}
                    fieldName='dataColumn'
                    label='Data Column'
                    updateField={updateField}
                    initial='Select'
                    required={true}
                    options={columns}
                  />
                  <Select
                    value={config.dataFunction || ''}
                    fieldName='dataFunction'
                    label='Data Function'
                    updateField={updateField}
                    initial='Select'
                    required={true}
                    options={
                      Array.isArray(DATA_FUNCTIONS)
                        ? DATA_FUNCTIONS
                        : DATA_FUNCTIONS
                        ? Object.values(DATA_FUNCTIONS)
                        : []
                    }
                  />
                </li>
              </ul>
              <span className='divider-heading'>Number Formatting</span>
              <ul className='column-edit'>
                <li className='three-col'>
                  <TextField
                    value={config.dataFormat.prefix}
                    section='dataFormat'
                    fieldName='prefix'
                    label='Prefix'
                    updateField={updateField}
                  />
                  <TextField
                    value={config.dataFormat.suffix}
                    section='dataFormat'
                    fieldName='suffix'
                    label='Suffix'
                    updateField={updateField}
                  />
                  <TextField
                    type='number'
                    value={config.dataFormat.roundToPlace}
                    section='dataFormat'
                    fieldName='roundToPlace'
                    label='Round'
                    updateField={updateField}
                    min='0'
                    max='99'
                  />
                </li>
              </ul>
              <CheckBox
                value={config.dataFormat.commas}
                section='dataFormat'
                fieldName='commas'
                label='Add commas'
                updateField={updateField}
              />
              <CheckBox
                value={config.dataFormat.ignoreZeros}
                section='dataFormat'
                fieldName='ignoreZeros'
                label='Ignore Zeros'
                updateField={updateField}
              />
              <hr className='accordion__divider' />
              <TrendIndicatorSection />
              <hr className='accordion__divider' />

              <DataPointFiltersSection />
            </Accordion.Section>

            {/* Visual section for TP5 style */}
            {config.biteStyle === 'tp5' && (
              <Accordion.Section title='Visual'>
                <VisualSettingsSection variant='tp5' />
              </Accordion.Section>
            )}

            {config.biteStyle === 'tp5' && (
              <Accordion.Section title='Data-Driven Colors'>
                <DataDrivenColorsSection />
              </Accordion.Section>
            )}

            {/* Visual section for other bite styles */}
            {config.biteStyle !== 'tp5' && (
              <Accordion.Section title='Visual'>
                <VisualSettingsSection variant='standard' />
              </Accordion.Section>
            )}

            {['title', 'body', 'graphic'].includes(config.biteStyle) && (
              <Accordion.Section title={`Image${['dynamic'].includes(config.imageData.display) ? 's' : ''}`}>
                <Select
                  value={config.imageData.display || ''}
                  section='imageData'
                  fieldName='display'
                  label='Image Display Type'
                  updateField={updateField}
                  options={['none', 'static', 'dynamic']}
                />
                <Select
                  value={config.bitePosition || ''}
                  fieldName='bitePosition'
                  label='Image/Graphic Position'
                  updateField={updateField}
                  initial='Select'
                  options={IMAGE_POSITIONS}
                />
                {['static'].includes(config.imageData.display) && (
                  <>
                    <TextField
                      value={config.imageData.url}
                      section='imageData'
                      fieldName='url'
                      label='Image URL'
                      updateField={updateField}
                    />
                    <TextField
                      value={config.imageData.alt}
                      section='imageData'
                      fieldName='alt'
                      label='Alt Text'
                      updateField={updateField}
                    />
                  </>
                )}

                {['dynamic'].includes(config.imageData.display) && (
                  <>
                    <TextField
                      value={config.imageData.url || ''}
                      section='imageData'
                      fieldName='url'
                      label='Image URL (default)'
                      updateField={updateField}
                    />
                    <TextField
                      value={config.imageData.alt}
                      section='imageData'
                      fieldName='alt'
                      label='Alt Text (default)'
                      updateField={updateField}
                    />

                    <hr className='accordion__divider' />

                    {(!images.items || images.items.length === 0) && (
                      <p style={{ textAlign: 'center' }}>There are currently no dynamic images.</p>
                    )}
                    {images.items && images.items.length > 0 && (
                      <>
                        <ul>
                          {images.items.map((option: any, index: number) => (
                            <fieldset className='edit-block' key={index}>
                              <button
                                type='button'
                                className='remove-column'
                                onClick={() => {
                                  images.remove(index)
                                }}
                              >
                                Remove
                              </button>
                              <label>
                                <span className='edit-label column-heading'>
                                  <strong>{'Image #' + (index + 1)}</strong>
                                </span>

                                <div className='accordion__panel-row align-center'>
                                  <div className='accordion__panel-col flex-auto'>If Value</div>
                                  <div className='accordion__panel-col flex-auto'>
                                    <Select
                                      label=''
                                      value={option.arguments[0]?.operator || ''}
                                      options={DATA_OPERATORS}
                                      onChange={e => {
                                        images.updateNested(index, 'arguments', 0, 'operator', e.target.value)
                                      }}
                                    />
                                  </div>
                                  <div className='accordion__panel-col flex-grow flex-shrink'>
                                    <input
                                      type='number'
                                      value={option.arguments[0]?.threshold || ''}
                                      onChange={e => {
                                        images.updateNested(index, 'arguments', 0, 'threshold', e.target.value)
                                      }}
                                    />
                                  </div>
                                </div>

                                <div className='accordion__panel-row mb-2 align-center'>
                                  <div className='accordion__panel-col flex-grow'>
                                    <Select
                                      label=''
                                      value={option.secondArgument ? 'and' : 'then'}
                                      options={[
                                        { value: 'then', label: 'Then' },
                                        { value: 'and', label: 'And' }
                                      ]}
                                      onChange={e => {
                                        if ('then' === e.target.value) {
                                          images.updateField(index, 'secondArgument', false)
                                          removeDynamicArgument(index)
                                        }
                                        if ('and' === e.target.value) {
                                          images.updateField(index, 'secondArgument', true)
                                        }
                                      }}
                                    />
                                  </div>
                                </div>

                                {option.secondArgument && true === option.secondArgument && (
                                  <>
                                    <div className='accordion__panel-row align-center'>
                                      <div className='accordion__panel-col flex-auto'>If Value</div>
                                      <div className='accordion__panel-col flex-auto'>
                                        <Select
                                          label=''
                                          value={option.arguments[1]?.operator || ''}
                                          options={DATA_OPERATORS}
                                          onChange={e => {
                                            images.updateNested(index, 'arguments', 1, 'operator', e.target.value)
                                          }}
                                        />
                                      </div>
                                      <div className='accordion__panel-col flex-grow flex-shrink'>
                                        <input
                                          type='number'
                                          value={option.arguments[1]?.threshold || ''}
                                          onChange={e => {
                                            images.updateNested(index, 'arguments', 1, 'threshold', e.target.value)
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className='accordion__panel-row mb-2 align-center text-center text-capitalize'>
                                      <div className='accordion__panel-col flex-grow'>Then</div>
                                    </div>
                                  </>
                                )}

                                <div className='accordion__panel-row mb-2 align-center'>
                                  <div className='accordion__panel-col flex-auto'>Show</div>
                                  <div className='accordion__panel-col flex-grow'>
                                    <input
                                      type='text'
                                      value={option.source || ''}
                                      onChange={e => {
                                        images.updateField(index, 'source', e.target.value)
                                      }}
                                    />
                                  </div>
                                </div>

                                <div className='accordion__panel-row mb-2 align-center'>
                                  <div className='accordion__panel-col flex-auto'>Alt Text</div>
                                  <div className='accordion__panel-col flex-grow'>
                                    <input
                                      type='text'
                                      value={option.alt || ''}
                                      onChange={e => {
                                        images.updateField(index, 'alt', e.target.value)
                                      }}
                                    />
                                  </div>
                                </div>
                              </label>
                            </fieldset>
                          ))}
                        </ul>
                      </>
                    )}
                    <button type='button' onClick={images.add} className='btn btn-primary full-width'>
                      Add Dynamic Image
                    </button>
                  </>
                )}
              </Accordion.Section>
            )}

            <Accordion.Section title='Markup Variables'>
              <PanelMarkup
                name='Markup Variables'
                markupVariables={config.markupVariables || []}
                data={data}
                editorData={editorData}
                enableMarkupVariables={config.enableMarkupVariables || false}
                onMarkupVariablesChange={variables => updateField(null, null, 'markupVariables', variables)}
                onToggleEnable={enabled => updateField(null, null, 'enableMarkupVariables', enabled)}
                withAccordion={false}
                dataMetadata={config.dataMetadata}
              />
            </Accordion.Section>
          </Accordion>
          <AdvancedEditor loadConfig={updateConfig} config={config} convertStateToConfig={convertStateToConfig} />
        </>
      )}
    </BaseEditorPanel>
  )
}

export default EditorPanel
