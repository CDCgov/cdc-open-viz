import { useContext } from 'react'

// Context
import Context from '../../context'

// Components
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import '@cdc/core/components/EditorPanel/editor.scss'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import Accordion from '@cdc/core/components/ui/Accordion'
import DataAndFormattingSection from './sections/DataAndFormattingSection'
import DataDrivenColorsSection from './sections/DataDrivenColorsSection'
import GeneralSection from './sections/GeneralSection'
import ImagesSection from './sections/ImagesSection'
import MarkupVariablesSection from './sections/MarkupVariablesSection'
import VisualSettingsSection from './sections/VisualSettingsSection'

const EditorPanel = () => {
  const { config, updateConfig, loading, setParentConfig, isDashboard } = useContext(Context)

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
              <MarkupVariablesSection />
            </Accordion.Section>
          </Accordion>
          <AdvancedEditor loadConfig={updateConfig} config={config} convertStateToConfig={convertStateToConfig} />
        </>
      )}
    </BaseEditorPanel>
  )
}

export default EditorPanel
