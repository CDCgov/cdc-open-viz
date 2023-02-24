import React, { useEffect, useState } from 'react'

// Store
import useConfigStore from '@cdc/core/stores/configStore'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import AlertBox from '@cdc/core/components/ui/AlertBox'
import EditorPanelGlobal from '@cdc/core/components/editor/EditorPanelGlobal'
import Icon from '@cdc/core/components/ui/Icon'
import InputText from '@cdc/core/components/input/InputText'

const EditorPanels = () => {
  // Store Selectors
  const { config, updateConfig, updateParentConfig } = useConfigStore(state => ({
    config: state.config,
    updateConfig: state.updateConfig,
    updateParentConfig: state.updateParentConfig
  }))

  const [ tempConfig, setTempConfig ] = useState(config)

  // Remove any newViz entries and update tempConfig cache to send to parent, if one exists
  useEffect(() => {
    if (JSON.stringify(config) !== JSON.stringify(tempConfig)) {
      let tempConfig = {...config}
      delete tempConfig.newViz
      setTempConfig(tempConfig)
    }
  }, [ config, tempConfig ])

  // Pass tempConfig settings back up to parent, if one exists
  useEffect(() => {
    if (updateParentConfig) updateParentConfig(tempConfig)
  }, [ tempConfig, updateParentConfig ])

  const panelGeneral = (
    <Accordion.Section label="General">
      <InputText label="Title" configField="title" placeholder="Markup Include Title"/>
      <InputText label="Source URL" configField="srcUrl" placeholder="https://www.example.com/file.html"/>
      {config.srcUrl === '' &&
        <AlertBox type="info">
          <Icon display="info"/> Need a preview? Set the <strong>Source URL</strong> as <code>#example</code> to use example markup data.
        </AlertBox>
      }
    </Accordion.Section>
  )

  return <>
    <Accordion>
      {panelGeneral}
      {EditorPanelGlobal}
    </Accordion>
  </>
}

export default EditorPanels
