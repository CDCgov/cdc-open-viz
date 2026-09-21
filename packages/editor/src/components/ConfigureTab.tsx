import React, { useContext } from 'react'

import ConfigContext from '@cdc/core/contexts/EditorContext'
import VisualizationRenderer from './VisualizationRenderer'

type ConfigureTabProps = {
  containerEl?: HTMLElement
}

export default function ConfigureTab({ containerEl }: ConfigureTabProps) {
  const { config, setTempConfig, isDebug, configUrl } = useContext(ConfigContext)

  return (
    <VisualizationRenderer
      config={config}
      mode='editor'
      containerEl={containerEl}
      setConfig={setTempConfig}
      isDebug={isDebug}
      configUrl={configUrl}
    />
  )
}
