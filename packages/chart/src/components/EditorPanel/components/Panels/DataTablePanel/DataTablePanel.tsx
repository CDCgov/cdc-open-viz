import DataTableEditor from '@cdc/core/components/EditorPanel/DataTableEditor'
import PanelSection from '@cdc/core/components/panels/PanelSection'
import type { ChartConfig } from '../../../../../types/ChartConfig'

type DataTablePanelProps = {
  config: ChartConfig
  columns: string[]
  updateField: (...args: any[]) => void
  isDashboard: boolean
  isLoadedFromUrl: boolean
}

const DataTablePanel = ({ config, columns, updateField, isDashboard, isLoadedFromUrl }: DataTablePanelProps) => {
  if (config.visualizationType === 'Spark Line') return null

  return (
    <PanelSection title='Data Table'>
      <DataTableEditor
        config={config}
        columns={columns}
        updateField={updateField}
        isDashboard={isDashboard}
        isLoadedFromUrl={isLoadedFromUrl}
      />{' '}
    </PanelSection>
  )
}

export default DataTablePanel
