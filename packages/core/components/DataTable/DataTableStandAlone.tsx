import { ViewPort } from '../../types/ViewPort'
import { Visualization } from '../../types/Visualization'
import DataTable from './DataTable'

type StandAloneProps = {
  visualizationKey: string
  config: Visualization
  viewport?: ViewPort
}

const DataTableStandAlone: React.FC<StandAloneProps> = ({ visualizationKey, config, viewport }) => {
  return <DataTable expandDataTable={true} config={config} rawData={config.data} runtimeData={config.formattedData} tabbingId={visualizationKey} tableTitle={config.table.label} viewport={viewport || 'lg'} />
}

export default DataTableStandAlone
