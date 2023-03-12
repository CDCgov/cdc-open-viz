import React from 'react'

// Store
import useStore from '@cdc/core/store/store'

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
  const data = useStore(state => state.data)

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
