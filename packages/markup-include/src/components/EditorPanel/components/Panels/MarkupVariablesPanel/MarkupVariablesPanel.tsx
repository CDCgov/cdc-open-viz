import { useContext } from 'react'
import MarkupVariablesEditor from '@cdc/core/components/EditorPanel/components/MarkupVariablesEditor'
import type { Datasets } from '@cdc/core/types/DataSet'
import ConfigContext from '../../../../../ConfigContext'

type MarkupVariablesPanelProps = { datasets?: Datasets }

const MarkupVariablesPanel = ({ datasets }: MarkupVariablesPanelProps) => {
  const { config, data, editorData, updateConfig } = useContext(ConfigContext)
  const markupEditorData = Array.isArray(editorData) ? editorData : data || []

  return (
    <MarkupVariablesEditor
      markupVariables={config.markupVariables || []}
      data={Array.isArray(data) ? data : []}
      editorData={markupEditorData}
      datasets={datasets}
      config={config}
      onChange={variables => updateConfig({ ...config, markupVariables: variables })}
      enableMarkupVariables={config.enableMarkupVariables || false}
      onToggleEnable={enabled => updateConfig({ ...config, enableMarkupVariables: enabled })}
      dataMetadata={config.dataMetadata}
    />
  )
}

export default MarkupVariablesPanel
