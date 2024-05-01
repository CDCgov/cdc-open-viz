import { ViewPort } from '../../types/ViewPort'
import { Visualization } from '../../types/Visualization'
import EditorWrapper from '../EditorWrapper/EditorWrapper'
import DataTable from './DataTable'
import DataTableEditorPanel from './components/DataTableEditorPanel'

type StandAloneProps = {
  visualizationKey: string
  config: Visualization
  viewport?: ViewPort
  isEditor?: boolean
  updateConfig?: Function
}

const DataTableStandAlone: React.FC<StandAloneProps> = ({ visualizationKey, config, viewport, isEditor, updateConfig }) => {
  if (isEditor)
    return (
      <EditorWrapper component={DataTableStandAlone} visualizationKey={visualizationKey} visualizationConfig={config} updateConfig={updateConfig} type={'Table'} viewport={viewport}>
        <DataTableEditorPanel key={visualizationKey} config={config} updateConfig={updateConfig} />
      </EditorWrapper>
    )
  return <DataTable expandDataTable={true} config={config} rawData={config.data} runtimeData={config.formattedData} tabbingId={visualizationKey} tableTitle={config.table.label} viewport={viewport || 'lg'} />
}

export default DataTableStandAlone
