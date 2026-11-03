import ColumnsEditor from '@cdc/core/components/EditorPanel/ColumnsEditor'
import PanelSection from '@cdc/core/components/panels/PanelSection'
import type { ChartConfig } from '../../../../../types/ChartConfig'

type ColumnsPanelProps = {
  config: ChartConfig
  updateField: (...args: any[]) => void
  deleteColumn: (...args: any[]) => void
  hiddenColumnNames: string[]
}

const ColumnsPanel = ({ config, updateField, deleteColumn, hiddenColumnNames }: ColumnsPanelProps) => {
  if (['Box Plot', 'Sankey'].includes(config.visualizationType)) return null

  return (
    <PanelSection title='Columns'>
      <ColumnsEditor
        config={config}
        updateField={updateField}
        deleteColumn={deleteColumn}
        hiddenColumnNames={hiddenColumnNames}
      />{' '}
    </PanelSection>
  )
}

export default ColumnsPanel
