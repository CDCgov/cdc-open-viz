import { Column } from '@cdc/core/types/Column'
import { Series } from '@cdc/core/types/Series'

type ChartColumns = Record<string, Partial<Column>>
type SeriesItem = Series[number]
type ColumnFormattingParams = {
  addColPrefix?: string
  addColSuffix?: string
  addColRoundTo?: number
  addColCommas?: boolean
}

const hasOwn = (object: object, key: keyof Column) => Object.prototype.hasOwnProperty.call(object, key)

export const createDefaultSeriesColumnConfig = (columnName: string): Column => ({
  name: columnName,
  label: columnName,
  prefix: '',
  suffix: '',
  roundToPlace: 0,
  commas: false,
  dataTable: true,
  order: undefined,
  showInViz: false,
  startingPoint: '0',
  series: undefined,
  tooltips: false,
  forestPlot: false,
  forestPlotAlignRight: false,
  forestPlotStartingPoint: 0
})

export const getSeriesOwnedColumnNames = (series: Partial<SeriesItem>[] = []): string[] => {
  return series.map(item => item?.dataKey).filter(Boolean)
}

export const findColumnConfigByName = (
  columns: ChartColumns = {},
  columnName: string
): { columnKey: string; columnConfig: Partial<Column> } | null => {
  for (const [columnKey, columnConfig] of Object.entries(columns)) {
    if (columnConfig?.name === columnName || (!columnConfig?.name && columnKey === columnName)) {
      return { columnKey, columnConfig }
    }
  }

  return null
}

export const getSeriesColumnConfig = (columns: ChartColumns = {}, seriesKey: string) => {
  const existingEntry = findColumnConfigByName(columns, seriesKey)
  const baseColumnConfig = createDefaultSeriesColumnConfig(seriesKey)

  return {
    columnKey: existingEntry?.columnKey || seriesKey,
    columnConfig: {
      ...baseColumnConfig,
      ...(existingEntry?.columnConfig || {}),
      name: seriesKey,
      label: existingEntry?.columnConfig?.label ?? baseColumnConfig.label
    }
  }
}

export const upsertSeriesColumnConfig = (
  columns: ChartColumns = {},
  seriesKey: string,
  updates: Partial<Column>
): ChartColumns => {
  const existingEntry = findColumnConfigByName(columns, seriesKey)
  const columnKey = existingEntry?.columnKey || seriesKey
  const nextColumnConfig = {
    ...(existingEntry?.columnConfig || {}),
    ...updates,
    name: seriesKey
  }

  if (
    nextColumnConfig.label === undefined &&
    !hasOwn(existingEntry?.columnConfig || {}, 'label') &&
    !hasOwn(updates, 'label')
  ) {
    delete nextColumnConfig.label
  }

  return {
    ...columns,
    [columnKey]: nextColumnConfig
  }
}

export const getSeriesColumnFormattingParams = (columnConfig?: Partial<Column>): ColumnFormattingParams | undefined => {
  if (!columnConfig) return undefined

  const formattingParams: ColumnFormattingParams = {}

  if (hasOwn(columnConfig, 'prefix')) {
    formattingParams.addColPrefix = columnConfig.prefix ?? ''
  }

  if (hasOwn(columnConfig, 'suffix')) {
    formattingParams.addColSuffix = columnConfig.suffix ?? ''
  }

  if (hasOwn(columnConfig, 'roundToPlace')) {
    formattingParams.addColRoundTo = columnConfig.roundToPlace ?? 0
  }

  if (hasOwn(columnConfig, 'commas')) {
    formattingParams.addColCommas = columnConfig.commas ?? false
  }

  return Object.keys(formattingParams).length ? formattingParams : undefined
}
