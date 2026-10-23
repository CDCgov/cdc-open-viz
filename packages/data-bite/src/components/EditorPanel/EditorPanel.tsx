import { useContext } from 'react'

import { DATA_FUNCTIONS } from '@cdc/core/helpers/constants'

// Context
import Context from '../../context'

// Components
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import '@cdc/core/components/EditorPanel/editor.scss'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'
import { Select, TextField, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import PanelMarkup from '@cdc/core/components/EditorPanel/components/PanelMarkup'
import Accordion from '@cdc/core/components/ui/Accordion'
import DataDrivenColorsSection from './sections/DataDrivenColorsSection'
import DataPointFiltersSection from './sections/DataPointFiltersSection'
import GeneralSection from './sections/GeneralSection'
import ImagesSection from './sections/ImagesSection'
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
                <ImagesSection />
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
