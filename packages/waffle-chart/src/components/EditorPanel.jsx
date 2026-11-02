import { memo, useContext } from 'react'

import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import '@cdc/core/components/EditorPanel/editor.scss'
import Accordion from '@cdc/core/components/ui/Accordion'

import ConfigContext from '../ConfigContext'
import WarningImage from '../images/warning.svg'
import ChartSettingsSection from './EditorPanel/sections/ChartSettingsSection'
import DataAndFormattingSection from './EditorPanel/sections/DataAndFormattingSection'
import GeneralSection from './EditorPanel/sections/GeneralSection'
import MarkupVariablesSection from './EditorPanel/sections/MarkupVariablesSection'
import VisualSettingsSection from './EditorPanel/sections/VisualSettingsSection'

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
              <GeneralSection />
            </Accordion.Section>

            <Accordion.Section
              icon={
                !config.dataColumn || !config.dataFunction ? <WarningImage width='15' className='warning-icon' /> : ''
              }
              title='Data'
            >
              <DataAndFormattingSection />
            </Accordion.Section>

            {config.visualizationType !== 'Gauge' && config.visualizationType !== 'TP5 Gauge' && (
              <Accordion.Section title='Chart Settings'>
                <ChartSettingsSection />
              </Accordion.Section>
            )}

            {/* Visual section for TP5 style */}
            {(config.visualizationType === 'TP5 Waffle' || config.visualizationType === 'TP5 Gauge') && (
              <Accordion.Section title='Visual'>
                <VisualSettingsSection variant='tp5' />
              </Accordion.Section>
            )}

            {/* Visual section for other styles */}
            {config.visualizationType !== 'TP5 Waffle' && config.visualizationType !== 'TP5 Gauge' && (
              <Accordion.Section title='Visual'>
                <VisualSettingsSection variant='standard' />
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
})

export default EditorPanel
