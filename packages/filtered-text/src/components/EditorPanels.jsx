import React, { useEffect, useState } from 'react'

// Store
import useConfigStore from '@cdc/core/stores/configStore'

// Helpers
import getDataColumns from '@cdc/core/helpers/data/getDataColumns'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import PanelGlobal from '@cdc/core/components/editor/Panel.Global.jsx'
import InputText from '@cdc/core/components/input/InputText'
import InputSelect from '@cdc/core/components/input/InputSelect'
import PanelFilters from '@cdc/core/components/editor/Panel.Filters.jsx'

const EditorPanels = () => {
  // Store Selectors
  const { config, updateParentConfig } = useConfigStore(state => ({
    config: state.config,
    updateParentConfig: state.updateParentConfig
  }))

  /** PARENT CONFIG UPDATE SECTION ---------------------------------------------------------------- */
  const [ tempConfig, setTempConfig ] = useState(config)

  useEffect(() => {
    // Remove any newViz entries and update tempConfig cache to send to parent, if one exists
    if (JSON.stringify(config) !== JSON.stringify(tempConfig)) {
      let tempConfig = { ...config }
      delete tempConfig.newViz
      setTempConfig(tempConfig)
    }
  }, [ config, tempConfig ])

  useEffect(() => {
    // Pass tempConfig settings back up to parent, if one exists
    if (updateParentConfig) updateParentConfig(tempConfig)
  }, [ tempConfig, updateParentConfig ])


  /** Panels ------------------------------------------------------------------------------------- */
  const panelGeneral = (
    <Accordion.Section label="General">
      <InputText label="Title" placeholder="Filterable Text Title" configField="title"/>
    </Accordion.Section>
  )

  const panelData = (
    <Accordion.Section label="Data">
      <InputSelect label="Text Column" options={getDataColumns(config.data)} configField="textColumn" initialDisabled/>

      <hr className="cove-editor__divider"/>

      <PanelFilters/>

    </Accordion.Section>
  )

  return <>
    <Accordion>
      {panelGeneral}
      {panelData}
      {PanelGlobal}
    </Accordion>
  </>
}

export default EditorPanels
