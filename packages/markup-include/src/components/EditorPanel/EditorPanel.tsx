import { useContext } from 'react'
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import Accordion from '@cdc/core/components/ui/Accordion'
import type { Datasets } from '@cdc/core/types/DataSet'
import ConfigContext from '../../ConfigContext'
import Panels from './components/Panels'
import './EditorPanel.styles.css'

type MarkupIncludeEditorPanelProps = { datasets?: Datasets }

const EditorPanel: React.FC<MarkupIncludeEditorPanelProps> = ({ datasets }) => {
  const { config, isDashboard, loading, setParentConfig, updateConfig } = useContext(ConfigContext)
  const isTp5Style = config.contentEditor?.style === 'tp5'

  return (
    <BaseEditorPanel
      config={config}
      updateConfig={updateConfig as (config: any) => void}
      loading={loading}
      setParentConfig={setParentConfig as ((config: any) => void) | undefined}
      isDashboard={isDashboard}
      title='Configure Markup Include'
    >
      {() => (
        <Accordion>
          <Accordion.Section title='General'>
            <Panels.General />
          </Accordion.Section>
          <Accordion.Section title='Content Editor'>
            <Panels.ContentEditor />
          </Accordion.Section>
          <Accordion.Section title='Visual'>
            <Panels.Visual />
          </Accordion.Section>
          {isTp5Style && (
            <Accordion.Section title='Data-Driven Colors'>
              <Panels.DataDrivenColors />
            </Accordion.Section>
          )}
          {isDashboard && (
            <Accordion.Section title='Footnotes'>
              <Panels.Footnotes datasets={datasets} />
            </Accordion.Section>
          )}
          <Accordion.Section title='Markup Variables'>
            <Panels.MarkupVariables datasets={datasets} />
          </Accordion.Section>
        </Accordion>
      )}
    </BaseEditorPanel>
  )
}

export default EditorPanel
