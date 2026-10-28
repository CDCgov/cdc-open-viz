import { useContext } from 'react'

import PanelMarkup from '@cdc/core/components/EditorPanel/components/PanelMarkup'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import Context from '../../../context'

const MarkupVariablesSection = () => {
  const { config, updateConfig, data, editorData } = useContext(Context)
  const updateField = updateFieldFactory(config, updateConfig, true)

  return (
    <PanelMarkup
      name='Markup Variables'
      markupVariables={config.markupVariables || []}
      data={data}
      editorData={editorData}
      enableMarkupVariables={config.enableMarkupVariables || false}
      onMarkupVariablesChange={variables => updateField(null, null, 'markupVariables', variables)}
      onToggleEnable={enabled => updateField(null, null, 'enableMarkupVariables', enabled)}
      withAccordion={false}
      dataMetadata={config.dataMetadata}
    />
  )
}

export default MarkupVariablesSection
