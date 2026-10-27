import { Column } from '../../../types/Column'
import { TableConfig } from '../types/TableConfig'

export type CsvColumnConfig = Partial<Column> & { label?: string; name?: string }
type ColumnMap = Record<string, CsvColumnConfig>

type GetDataTableCsvColumnLabelArgs = {
  config: TableConfig
  columns?: ColumnMap
  columnConfig?: CsvColumnConfig
  columnKey?: string
  columnName?: string
}

export const getMapIndexCsvColumnLabel = (config: TableConfig, columns: ColumnMap = {}) => {
  return config.table?.indexLabel || columns.geo?.label || columns.geo?.name || 'Location'
}

export const getDataTableCsvColumnLabel = ({
  config,
  columns = {},
  columnConfig,
  columnKey,
  columnName
}: GetDataTableCsvColumnLabelArgs) => {
  const isMapGeoColumn =
    config.type === 'map' && (columnKey === 'geo' || (!!columnName && columnName === columns.geo?.name))

  if (isMapGeoColumn) {
    return getMapIndexCsvColumnLabel(config, columns)
  }

  return columnConfig?.label || columnConfig?.name || columnName || columnKey || ''
}

export const getUniqueCsvColumnLabel = (label: string, usedLabels: Set<string>) => {
  if (!usedLabels.has(label)) {
    usedLabels.add(label)
    return label
  }

  let suffix = 2
  let uniqueLabel = `${label} (${suffix})`
  while (usedLabels.has(uniqueLabel)) {
    suffix += 1
    uniqueLabel = `${label} (${suffix})`
  }

  usedLabels.add(uniqueLabel)
  return uniqueLabel
}
