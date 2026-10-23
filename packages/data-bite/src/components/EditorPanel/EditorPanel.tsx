import { useContext } from 'react'

// Context
import Context from '../../context'

// Components
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import '@cdc/core/components/EditorPanel/editor.scss'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import Button from '@cdc/core/components/elements/Button'
import PanelMarkup from '@cdc/core/components/EditorPanel/components/PanelMarkup'
import Accordion from '@cdc/core/components/ui/Accordion'
import DataAndFormattingSection from './sections/DataAndFormattingSection'
import DataDrivenColorsSection from './sections/DataDrivenColorsSection'
import GeneralSection from './sections/GeneralSection'
import ImagesSection from './sections/ImagesSection'
import VisualSettingsSection from './sections/VisualSettingsSection'

type DataBiteEditorPanelProps = {
  // Add any props if needed
}

const EditorPanel: React.FC<DataBiteEditorPanelProps> = () => {
  const { config, updateConfig, loading, data, editorData, setParentConfig, isDashboard } = useContext(Context)

  const updateField = updateFieldFactory(config, updateConfig, true)

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
              <DataAndFormattingSection />
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
