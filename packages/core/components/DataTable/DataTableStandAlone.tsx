import { useEffect, useState } from 'react'
import { ViewPort } from '../../types/ViewPort'
import EditorWrapper from '../EditorWrapper'
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
  interactionLabel?: string
}

const getTableSourceData = (config: TableConfig) => {
  if (config?.formattedData?.length > 0) return config.formattedData
  return config.data
}

const DataTableStandAlone: React.FC<StandAloneProps> = ({
  visualizationKey,
  config,
  updateConfig,
  viewport,
  isEditor,
  datasets,
  interactionLabel = ''
}) => {
  const [filteredData, setFilteredData] = useState<Record<string, any>[]>(
    filterVizData(config.filters, getTableSourceData(config))
  )

  useEffect(() => {
    // when using editor changes to filter should update the data
    const filters = addValuesToFilters(config.filters, config.data)
    setFilteredData(filterVizData(filters, getTableSourceData(config)))
  }, [config.filters, config.data, config.formattedData])

  const setFilters = (newFilters: any) => {
    const filters = addValuesToFilters(newFilters, config.data)
    updateConfig({ ...config, filters })
    setFilteredData(filterVizData(filters, getTableSourceData(config)))
  }

  const dataConfig = config.dataKey ? datasets?.[config.dataKey] : undefined
  const rawData = dataConfig?.data?.[0]?.tableData || dataConfig?.data || config.data

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

  const tableContent = (
    <>
      <Filters config={config} setFilters={setFilters} excludedData={config.formattedData} />
      <DataTable
        expandDataTable={config.table.expanded}
        config={config}
        dataConfig={dataConfig}
        rawData={rawData}
        runtimeData={filteredData}
        tabbingId={visualizationKey}
        tableTitle={config.table.label}
        viewport={viewport || 'lg'}
        interactionLabel={interactionLabel}
      />
      <FootnotesStandAlone
        config={config.footnotes}
        filters={config.filters?.filter(f => f.filterFootnotes)}
        markupVariables={config['markupVariables']}
        enableMarkupVariables={config['enableMarkupVariables']}
        data={config.data}
        dataMetadata={config['dataMetadata']}
      />
    </>
  )

  return config.table?.anchorId ? <div id={config.table.anchorId}>{tableContent}</div> : tableContent
}

export default DataTableStandAlone
