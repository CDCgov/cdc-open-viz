import React, { useEffect, useState } from 'react'

// Store
import useConfigStore from '@cdc/core/stores/configStore'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import AlertBox from '@cdc/core/components/ui/AlertBox'
import PanelGlobal from '@cdc/core/components/editor/Panel.Global.jsx'
import Icon from '@cdc/core/components/ui/Icon'
import InputText from '@cdc/core/components/input/InputText'


// COVE Refactor - TODO: Rename and lift this into core helpers
const isConfigEqual = (a, b) => (JSON.stringify(a) === JSON.stringify(b))

const EditorPanels = ({ config: configFromParent, setParentConfig }) => {
  // Store Selectors
  const { config } = useConfigStore(state => ({
    config: state.config
  }))

  /** PARENT CONFIG UPDATE SECTION ---------------------------------------------------------------- */
  const [ configCache, setConfigCache ] = useState(configFromParent)

  useEffect(() => {
    console.log('got config from parent', configFromParent)
    // Update tempConfig cache if configFromParent changes
    let newConfig = { ...configFromParent }
    // Remove any newViz entries and update tempConfig cache to send to parent, if one exists
    delete newConfig.newViz
    setConfigCache(configFromParent)
  }, [ configFromParent ])

  useEffect(() => {
    // Pass tempConfig settings back up to parent, if one exists
    if (setParentConfig && !isConfigEqual(configCache, config.visualizations[configFromParent.uid]))
      setParentConfig(configCache)
  }, [ configCache, setParentConfig ])

  /** Panels ------------------------------------------------------------------------------------- */
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
      {PanelGlobal}
    </Accordion>
  </>
}

export default EditorPanels
