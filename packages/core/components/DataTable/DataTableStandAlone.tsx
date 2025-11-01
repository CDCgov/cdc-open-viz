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
    filterVizData(config.filters, config.formattedData || config.data)
  )

  // Helper function to safely extract array data for filtering
  const getFilterableData = (data: any) => {
    if (Array.isArray(data)) {
      return data
    }
    // Handle Sankey data format - extract tableData if available
    if (data && typeof data === 'object' && data[0]?.tableData) {
      return data[0].tableData
    }
    // Fallback to empty array if data format is not recognized
    return []
  }

  useEffect(() => {
    // when using editor changes to filter should update the data
    const filterableData = getFilterableData(config.data)
    const filters = addValuesToFilters(config.filters, filterableData)
    setFilteredData(filterVizData(filters, config?.formattedData?.length > 0 ? config.formattedData : config.data))
  }, [config.filters])

  const setFilters = (newFilters: any) => {
    const filterableData = getFilterableData(config.data)
    const filters = addValuesToFilters(newFilters, filterableData)
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
      <Filters
        config={config}
        setFilters={setFilters}
        excludedData={Array.isArray(config.formattedData) ? config.formattedData : getFilterableData(config.data)}
      />
      <DataTable
        expandDataTable={config.table.expanded}
        config={config}
        rawData={getFilterableData(config.data)}
        runtimeData={filteredData as Object[] & Record<string, Object>}
        tabbingId={visualizationKey}
        tableTitle={config.table.label}
        viewport={viewport || 'lg'}
        interactionLabel={interactionLabel}
      />
      <FootnotesStandAlone config={config.footnotes} filters={config.filters?.filter(f => f.filterFootnotes)} />
    </>
  )
}

export default DataTableStandAlone
