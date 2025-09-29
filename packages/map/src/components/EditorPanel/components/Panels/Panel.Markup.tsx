import React, { useContext } from 'react'

// CDC Core
import MarkupVariablesEditor from '@cdc/core/components/EditorPanel/components/MarkupVariablesEditor'
import Accordion from '@cdc/core/components/ui/Accordion'

// context
import ConfigContext from '../../../../context'
import { MapContext } from '../../../../types/MapContext'

const PanelMarkup: React.FC<{ name: string }> = props => {
  const { config, setConfig } = useContext<MapContext>(ConfigContext)

  const handleMarkupVariablesChange = (variables: any[]) => {
    setConfig({
      ...config,
      markupVariables: variables
    })
  }

  const handleToggleEnable = (enabled: boolean) => {
    setConfig({
      ...config,
      enableMarkupVariables: enabled
    })
  }

  return (
    <Accordion>
      <Accordion.Section title={props.name}>
        <MarkupVariablesEditor
          markupVariables={config.markupVariables || []}
          data={config.data || []}
          onChange={handleMarkupVariablesChange}
          enableMarkupVariables={config.enableMarkupVariables || false}
          onToggleEnable={handleToggleEnable}
        />
      </Accordion.Section>
    </Accordion>
  )
}

export default PanelMarkup