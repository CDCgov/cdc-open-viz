import { useContext } from 'react'
import PanelSection from '@cdc/core/components/panels/PanelSection'
import VizFilterEditor from '@cdc/core/components/EditorPanel/VizFilterEditor'
import { CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import ConfigContext from '../../../../../context'
import type { MapContext } from '../../../../../types/MapContext'

const FiltersPanel = () => {
  const { config, setConfig, isDashboard } = useContext<MapContext>(ConfigContext)
  const updateField = updateFieldFactory(config, setConfig)

  if (config.general.type === 'navigation') return null

  return (
    <PanelSection title='Filters'>
      {config.general.geoType === 'us-county' && (
        <CheckBox
          value={config.general.showStateDropdown || false}
          fieldName='showStateDropdown'
          label='Show State Dropdown'
          updateField={updateField}
          section='general'
        />
      )}
      <VizFilterEditor config={config} updateField={updateField} rawData={config.data} hasFootnotes={isDashboard} />
    </PanelSection>
  )
}

export default FiltersPanel
