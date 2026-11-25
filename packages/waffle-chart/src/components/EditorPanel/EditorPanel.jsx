import { memo, useContext } from 'react'

import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import '@cdc/core/components/EditorPanel/editor.css'
import Accordion from '@cdc/core/components/ui/Accordion'

import ConfigContext from '../../ConfigContext'
import WarningImage from '../../images/warning.svg'
import Panels from './components/Panels'

const EditorPanel = memo(() => {
  const { config, updateConfig, loading, setParentConfig, isDashboard } = useContext(ConfigContext)

  return (
    <BaseEditorPanel
      config={config}
      updateConfig={updateConfig}
      loading={loading}
      setParentConfig={setParentConfig}
      isDashboard={isDashboard}
      title='Configure Waffle Chart'
    >
      {({ convertStateToConfig }) => (
        <>
          <Accordion>
            <Accordion.Section title='General'>
              <Panels.General />
            </Accordion.Section>

            <Accordion.Section
              icon={
                !config.dataColumn || !config.dataFunction ? <WarningImage width='15' className='warning-icon' /> : ''
              }
              title='Data'
            >
              <Panels.Data />
            </Accordion.Section>

            {config.visualizationType !== 'Gauge' && config.visualizationType !== 'TP5 Gauge' && (
              <Accordion.Section title='Chart Settings'>
                <Panels.ChartSettings />
              </Accordion.Section>
            )}

            {/* Visual section for TP5 style */}
            {(config.visualizationType === 'TP5 Waffle' || config.visualizationType === 'TP5 Gauge') && (
              <Accordion.Section title='Visual'>
                <Panels.Visual variant='tp5' />
              </Accordion.Section>
            )}

            {/* Visual section for other styles */}
            {config.visualizationType !== 'TP5 Waffle' && config.visualizationType !== 'TP5 Gauge' && (
              <Accordion.Section title='Visual'>
                <Panels.Visual variant='standard' />
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
})

export default EditorPanel
