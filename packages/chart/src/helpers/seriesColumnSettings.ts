import { Column } from '@cdc/core/types/Column'
import { Series } from '@cdc/core/types/Series'

type ChartColumns = Record<string, Partial<Column>>

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

export const getSeriesOwnedColumnNames = (series: Partial<Series>[] = []): string[] => {
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
  const { columnKey, columnConfig } = getSeriesColumnConfig(columns, seriesKey)

  return {
    ...columns,
    [columnKey]: {
      ...columnConfig,
      ...updates,
      name: seriesKey
    }
  }
}
