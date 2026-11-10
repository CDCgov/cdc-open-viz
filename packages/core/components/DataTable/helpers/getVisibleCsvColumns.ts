import uniq from 'lodash/uniq'
import { getDataSeriesColumns } from './getDataSeriesColumns'
import { TableConfig } from '../types/TableConfig'

type Params = {
  config: TableConfig
  runtimeData: Object[]
  isVertical: boolean
  filterColumns?: string[]
}

export const getVisibleCsvColumns = ({ config, runtimeData, isVertical, filterColumns = [] }: Params): string[] => {
  const visibleColumns = getDataSeriesColumns(config, isVertical, runtimeData)
  const groupBy = config.table?.groupBy

  return uniq(visibleColumns.filter(column => column !== groupBy).concat(filterColumns))
}
