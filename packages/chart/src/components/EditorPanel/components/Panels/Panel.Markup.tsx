import React, { useContext } from 'react'
import ConfigContext from '../../../../ConfigContext.js'

// core
import MarkupVariablesEditor from '@cdc/core/components/EditorPanel/components/MarkupVariablesEditor'
import Accordion from '@cdc/core/components/ui/Accordion'

// contexts
import { useEditorPanelContext } from '../../EditorPanelContext.js'

// types
import { type PanelProps } from './../PanelProps'

const PanelMarkup: React.FC<PanelProps> = props => {
  const { config, rawData } = useContext(ConfigContext)
  const { updateField } = useEditorPanelContext()

  return (
    <Accordion key={props.name}>
      <Accordion.Section title={props.name} key={props.name}>
        <MarkupVariablesEditor
          markupVariables={config.markupVariables || []}
          data={rawData}
          onChange={variables => updateField(null, null, 'markupVariables', variables)}
          enableMarkupVariables={config.enableMarkupVariables || false}
          onToggleEnable={enabled => updateField(null, null, 'enableMarkupVariables', enabled)}
        />
      </Accordion.Section>
    </Accordion>
  )
}

export default PanelMarkup
