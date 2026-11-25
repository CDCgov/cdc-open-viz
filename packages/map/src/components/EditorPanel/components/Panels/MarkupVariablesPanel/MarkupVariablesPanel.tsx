import { useContext } from 'react'

import PanelMarkup from '@cdc/core/components/EditorPanel/components/PanelMarkup'

import ConfigContext from '../../../../../context'
import type { MapContext } from '../../../../../types/MapContext'

const MarkupVariablesPanel = () => {
  const { config, setConfig } = useContext<MapContext>(ConfigContext)

  return (
    <PanelMarkup
      name='Markup Variables'
      markupVariables={config.markupVariables || []}
      data={config.data || []}
      enableMarkupVariables={config.enableMarkupVariables || false}
      onMarkupVariablesChange={variables => setConfig({ ...config, markupVariables: variables })}
      onToggleEnable={enabled => setConfig({ ...config, enableMarkupVariables: enabled })}
      dataMetadata={config.dataMetadata}
    />
  )
}

export default MarkupVariablesPanel
