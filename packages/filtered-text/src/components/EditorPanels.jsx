import React, { useEffect, useState } from 'react'

// Store
import useConfigStore from '@cdc/core/stores/configStore'

// Helpers
import { isConfigEqual } from '@cdc/core/helpers/configHelpers'
import getDataColumns from '@cdc/core/helpers/data/getDataColumns'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import PanelGlobal from '@cdc/core/components/editor/Panel.Global.jsx'
import InputText from '@cdc/core/components/input/InputText'
import InputSelect from '@cdc/core/components/input/InputSelect'
import PanelComponentFilters from '@cdc/core/components/editor/Panel.Component.Filters.jsx'

const EditorPanels = ({ setParentConfig }) => {
  // Store Selectors
  const { config } = useConfigStore()

  /** PARENT CONFIG UPDATE SECTION ---------------------------------------------------------------- */
  const [ tempConfig, setTempConfig ] = useState(config)

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
  }, [ tempConfig, setParentConfig ])


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
      <PanelComponentFilters/>
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
