import { useEffect, useState } from 'react'
import { ViewPort } from '../../types/ViewPort'
import { Visualization } from '../../types/Visualization'
import DataTable from './DataTable'
import Filters from '../Filters'

type StandAloneProps = {
  visualizationKey: string
  config: Visualization
  viewport?: ViewPort
  setConfig: (Visualization) => void
}

// filterData is copied from ./packages/chart/src/helpers/filterData.ts
// consider moving this to a shared location
const filterData = (filters, data) => {
  if (!filters) return data
  let filteredData: any[] = []

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

const DataTableStandAlone: React.FC<StandAloneProps> = ({ visualizationKey, config, setConfig, viewport }) => {
  const [filteredData, setFilteredData] = useState<Record<string, any>[]>(filterData(config.filters, config.formattedData))

  useEffect(() => {
    // when using editor changes to filter should update the data
    setFilteredData(filterData(config.filters, config.formattedData))
  }, [config.filters])

  return (
    <>
      <Filters config={config} setConfig={setConfig} setFilteredData={setFilteredData} filterData={filterData} filteredData={filteredData} excludedData={config.formattedData} />
      <DataTable expandDataTable={true} config={config} rawData={config.data} runtimeData={filteredData} tabbingId={visualizationKey} tableTitle={config.table.label} viewport={viewport || 'lg'} />
    </>
  )
}

export default DataTableStandAlone
