import { useEffect, useState } from 'react'
import { ViewPort } from '../../types/ViewPort'
import Footnotes from '../../types/Footnotes'
import EditorWrapper from '../EditorWrapper/EditorWrapper'
import DataTable from './DataTable'
import DataTableEditorPanel from './components/DataTableEditorPanel'
import Filters from '../Filters'
import { TableConfig } from './types/TableConfig'
import { filterVizData } from '../../helpers/filterVizData'
import { addValuesToFilters } from '../../helpers/addValuesToFilters'
import FootnotesStandAlone from '../Footnotes/FootnotesStandAlone'
import { Datasets } from '@cdc/core/types/DataSet'

type StandAloneProps = {
  visualizationKey: string
  config: TableConfig
  viewport?: ViewPort
  isEditor?: boolean
  updateConfig?: (Visualization) => void
  datasets?: Datasets
  configUrl?: string
}

const DataTableStandAlone: React.FC<StandAloneProps> = ({
  visualizationKey,
  config,
  updateConfig,
  viewport,
  isEditor,
  datasets,
  configUrl
}) => {
  const [filteredData, setFilteredData] = useState<Record<string, any>[]>(
    filterVizData(config.filters, config.formattedData || config.data)
  )

  useEffect(() => {
    // when using editor changes to filter should update the data
    const filters = addValuesToFilters(config.filters, config.data)
    setFilteredData(filterVizData(filters, config?.formattedData?.length > 0 ? config.formattedData : config.data))
  }, [config.filters])

  const setFilters = (newFilters: any) => {
    const filters = addValuesToFilters(newFilters, config.data)
    updateConfig({ ...config, filters })
    setFilteredData(filterVizData(filters, config?.formattedData?.length > 0 ? config.formattedData : config.data))
  }

  if (isEditor)
    return (
      <EditorWrapper
        component={DataTableStandAlone}
        visualizationKey={visualizationKey}
        visualizationConfig={config}
        updateConfig={updateConfig}
        type={'Table'}
        viewport={viewport}
      >
        <DataTableEditorPanel key={visualizationKey} config={config} updateConfig={updateConfig} datasets={datasets} />
      </EditorWrapper>
    )

  return (
    <>
      <Filters config={config} setFilters={setFilters} excludedData={config.formattedData} />
      <DataTable
        expandDataTable={config.table.expanded}
        config={config}
        rawData={config.data}
        runtimeData={filteredData}
        tabbingId={visualizationKey}
        tableTitle={config.table.label}
        viewport={viewport || 'lg'}
        configUrl={configUrl}
      />
      <FootnotesStandAlone config={config.footnotes} filters={config.filters?.filter(f => f.filterFootnotes)} />
    </>
  )
}

export default DataTableStandAlone
