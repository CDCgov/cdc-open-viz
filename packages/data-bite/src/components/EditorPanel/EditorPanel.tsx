import { useContext } from 'react'

// Context
import Context from '../../context'

// Components
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import '@cdc/core/components/EditorPanel/editor.scss'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import Accordion from '@cdc/core/components/ui/Accordion'
import Panels from './components/Panels'

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
              <Panels.General />
            </Accordion.Section>

            <Accordion.Section title='Data'>
              <Panels.Data />
            </Accordion.Section>

            {/* Visual section for TP5 style */}
            {config.biteStyle === 'tp5' && (
              <Accordion.Section title='Visual'>
                <Panels.Visual variant='tp5' />
              </Accordion.Section>
            )}

            {config.biteStyle === 'tp5' && (
              <Accordion.Section title='Data-Driven Colors'>
                <Panels.DataDrivenColors />
              </Accordion.Section>
            )}

            {/* Visual section for other bite styles */}
            {config.biteStyle !== 'tp5' && (
              <Accordion.Section title='Visual'>
                <Panels.Visual variant='standard' />
              </Accordion.Section>
            )}

            {['title', 'body', 'graphic'].includes(config.biteStyle) && (
              <Accordion.Section title={`Image${['dynamic'].includes(config.imageData.display) ? 's' : ''}`}>
                <Panels.Images />
              </Accordion.Section>
            )}

            <Accordion.Section title='Markup Variables'>
              <Panels.MarkupVariables />
            </Accordion.Section>
          </Accordion>
          <AdvancedEditor loadConfig={updateConfig} config={config} convertStateToConfig={convertStateToConfig} />
        </>
      )}
    </BaseEditorPanel>
  )
}

export default EditorPanel
