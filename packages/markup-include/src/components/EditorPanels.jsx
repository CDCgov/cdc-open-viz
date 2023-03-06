import React, { useEffect, useState } from 'react'

// Store
import { useConfigStoreContext } from '@cdc/core/components/hoc/ConfigProxy'

// Helpers
import { isConfigEqual } from '@cdc/core/helpers/configHelpers'
import CoveHelper from '@cdc/core/helpers/cove'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import AlertBox from '@cdc/core/components/ui/AlertBox'
import Icon from '@cdc/core/components/ui/Icon'
import InputText from '@cdc/core/components/input/InputText'
import PanelGlobal from '@cdc/core/components/editor/Panel.Global'

const EditorPanels = () => {
  // Store Selectors
  const { config } = useConfigStoreContext()

  /** PARENT CONFIG UPDATE SECTION ---------------------------------------------------------------- */
  /*const [ tempConfig, setTempConfig ] = useState(config)

  useEffect(() => {
    // Remove any newViz entries and update tempConfig cache to send to parent, if one exists
    if (!isConfigEqual(config, tempConfig)) {
      let tempConfig = { ...config }
      delete tempConfig.newViz
      setTempConfig(tempConfig)
    }
  }, [ config, tempConfig ])

  useEffect(() => {
    // Pass tempConfig settings back up to parent, if one exists
    if (setParentConfig) setParentConfig(tempConfig)
  }, [ tempConfig, setParentConfig ])*/


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
