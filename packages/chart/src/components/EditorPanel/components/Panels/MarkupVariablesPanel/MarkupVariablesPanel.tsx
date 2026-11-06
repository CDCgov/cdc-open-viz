import PanelMarkup from '@cdc/core/components/EditorPanel/components/PanelMarkup'
import type { ChartConfig } from '../../../../../types/ChartConfig'

type MarkupVariablesPanelProps = {
  config: ChartConfig
  data: Record<string, any>[]
  updateField: (...args: any[]) => void
}

const MarkupVariablesPanel = ({ config, data, updateField }: MarkupVariablesPanelProps) => {
  if (config.visualizationType === 'Radar') return null

  return (
    <PanelMarkup
      name='Markup Variables'
      markupVariables={config.markupVariables || []}
      data={data}
      enableMarkupVariables={config.enableMarkupVariables || false}
      onMarkupVariablesChange={variables => updateField(null, null, 'markupVariables', variables)}
      onToggleEnable={enabled => updateField(null, null, 'enableMarkupVariables', enabled)}
      dataMetadata={config.dataMetadata}
    />
  )
}

export default MarkupVariablesPanel
