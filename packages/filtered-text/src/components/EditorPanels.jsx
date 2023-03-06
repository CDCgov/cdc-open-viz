import React, { useEffect, useState } from 'react'

// Store
import { useConfigStoreContext } from '@cdc/core/components/hoc/ConfigProxy'
import useDataStore from '@cdc/core/stores/data/dataSlice'

// Helpers
import CoveHelper from '@cdc/core/helpers/cove'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import PanelGlobal from '@cdc/core/components/editor/Panel.Global.jsx'
import InputText from '@cdc/core/components/input/InputText'
import InputSelect from '@cdc/core/components/input/InputSelect'
import PanelComponentFilters from '@cdc/core/components/editor/Panel.Component.Filters.jsx'

const EditorPanels = () => {
  // Store Selectors
  const { config } = useConfigStoreContext()
  const { data } = useDataStore()

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
      <InputText label="Title" placeholder="Filterable Text Title" configField="title"/>
    </Accordion.Section>
  )

  const panelData = (
    <Accordion.Section label="Data">
      <InputSelect label="Text Column" options={CoveHelper.Data.getDataColumns(data)} configField="textColumn" initialDisabled/>
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
