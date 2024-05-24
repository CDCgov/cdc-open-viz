import { useEffect, useState } from 'react'
import { ViewPort } from '../../types/ViewPort'
import EditorWrapper from '../EditorWrapper/EditorWrapper'
import DataTable from './DataTable'
import DataTableEditorPanel from './components/DataTableEditorPanel'
import Filters from '../Filters'
import { TableConfig } from './types/TableConfig'

type StandAloneProps = {
  visualizationKey: string
  config: TableConfig
  viewport?: ViewPort
  isEditor?: boolean
  updateConfig?: (Visualization) => void
}

// filterData is copied from ./packages/chart/src/helpers/filterData.ts
// consider moving this to a shared location
const filterData = (filters, data) => {
  if (!filters) return data
  const filteredData: any[] = []

  data.forEach(row => {
    let add = true
    filters
      .filter(filter => filter.type !== 'url')
      .forEach(filter => {
        if (row[filter.columnName] != filter.active) {
          add = false
        }
      })

    if (add) filteredData.push(row)
  })

  return filteredData
}

const DataTableStandAlone: React.FC<StandAloneProps> = ({ visualizationKey, config, updateConfig, viewport, isEditor }) => {
  const [filteredData, setFilteredData] = useState<Record<string, any>[]>(filterData(config.filters, config.formattedData))

  useEffect(() => {
    // when using editor changes to filter should update the data
    setFilteredData(filterData(config.filters, config.formattedData))
  }, [config.filters])

  if (isEditor)
    return (
      <EditorWrapper component={DataTableStandAlone} visualizationKey={visualizationKey} visualizationConfig={config} updateConfig={updateConfig} type={'Table'} viewport={viewport}>
        <DataTableEditorPanel key={visualizationKey} config={config} updateConfig={updateConfig} />
      </EditorWrapper>
    )

  return (
    <>
      <Filters config={config} setConfig={updateConfig} setFilteredData={setFilteredData} filterData={filterData} filteredData={filteredData} excludedData={config.formattedData} />
      <DataTable expandDataTable={true} config={config} rawData={config.data} runtimeData={filteredData} tabbingId={visualizationKey} tableTitle={config.table.label} viewport={viewport || 'lg'} />
    </>
  )
}

export default DataTableStandAlone
