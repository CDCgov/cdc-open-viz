import { formatNumber as formatColumnNumber } from '@cdc/core/helpers/cove/number'
import { type ChartConfig } from '../../../types/ChartConfig'
import { buildTooltipListHtml } from '../../../helpers/tooltipHelpers'
import { findColumnConfigByName, getAdditionalColumnFormattingParams } from '../../../helpers/seriesColumnSettings'
import { DEFAULT_SERIES_LABEL, DEFAULT_VALUE_LABEL, EMPTY_VALUE_LABEL } from '../heatmap.constants'
import { type FormatCellValueFn, type HeatMapCell, type HeatMapColumn, type TooltipColumn } from '../types'

const isDateAxisType = (axisType?: string) => ['date', 'date-time'].includes(axisType || '')

/**
 * Axis labels and tooltip labels intentionally use separate lookups.
 * The x-axis should follow the standard axis date formatter, while tooltips may use
 * `config.tooltips.dateDisplayFormat` through `formatTooltipsDate`.
 */
export const buildXLabelLookup = (
  columns: HeatMapColumn[],
  xAxisType: string | undefined,
  formatDate: (value: Date) => string,
  parseDate: (value: string, showError?: boolean) => Date
): Record<string, string> =>
  Object.fromEntries(
    columns.map(column => [
      column.key,
      isDateAxisType(xAxisType) ? formatDate(parseDate(String(column.rawValue), false)) : column.label
    ])
  )

/**
 * Additional tooltip rows come from column configs with `tooltips: true`.
 * The x-axis column and heatmap series columns are skipped because they are already
 * represented by the tooltip heading, row label, and cell value.
 */
export const getTooltipColumns = (
  config: ChartConfig,
  xDataKey: string | undefined,
  heatMapSeries: { dataKey: string }[]
): TooltipColumn[] =>
  Object.entries(config.columns || {}).reduce<TooltipColumn[]>((tooltipColumns, [columnKey, value]) => {
    const columnName = value.name || columnKey
    if (!value.tooltips || !columnName) return tooltipColumns
    if (columnName === xDataKey) return tooltipColumns
    if (heatMapSeries.some(series => series.dataKey === columnName)) return tooltipColumns

    tooltipColumns.push({
      label: value.label || columnName,
      name: columnName,
      options: getAdditionalColumnFormattingParams(value)
    })

    return tooltipColumns
  }, [])

export const getFormattedValueText = (cell: HeatMapCell, formatCellValue: FormatCellValueFn) =>
  cell.value === null ? EMPTY_VALUE_LABEL : formatCellValue(cell)

const getHeatMapSeriesLabel = (
  config: ChartConfig,
  seriesEntry: { dataKey: string; name?: string },
  runtimeSeriesLabels?: Record<string, string>
) => {
  const columnEntry = findColumnConfigByName(config.columns || {}, seriesEntry.dataKey)
  const configuredColumnLabel = columnEntry?.columnConfig?.label
  const hasCustomColumnLabel = configuredColumnLabel && configuredColumnLabel !== seriesEntry.dataKey

  return hasCustomColumnLabel
    ? configuredColumnLabel
    : runtimeSeriesLabels?.[seriesEntry.dataKey] || seriesEntry.name || seriesEntry.dataKey
}

export const getHeatMapSeriesLabels = (config: ChartConfig, heatMapSeries: { dataKey: string; name?: string }[]) =>
  heatMapSeries.reduce<Record<string, string>>((seriesLabels, seriesEntry) => {
    seriesLabels[seriesEntry.dataKey] = getHeatMapSeriesLabel(config, seriesEntry, config.runtime?.seriesLabels)
    return seriesLabels
  }, {})

export const getHeatMapSeriesTooltipEnabled = (config: ChartConfig, seriesKey: string) =>
  config.series?.find(series => series.dataKey === seriesKey)?.tooltip !== false

/**
 * Aggregated cells can represent multiple source rows. If all source rows share the same
 * formatted additional-column value, show it once. If the source rows disagree, summarize
 * that field as "Multiple values" instead of implying one row's value represents all rows.
 */
const formatAdditionalColumnValue = (cell: HeatMapCell, column: TooltipColumn, config: ChartConfig) => {
  const formattedValues = cell.sourceRows
    .map(sourceRow => sourceRow[column.name])
    .filter(value => value !== undefined && value !== null && value !== '')
    .map(value => String(formatColumnNumber(value, 'left', false, config as any, column.options as any)))

  const uniqueValues = Array.from(new Set(formattedValues))

  if (uniqueValues.length === 0) return EMPTY_VALUE_LABEL
  if (uniqueValues.length > 1) return 'Multiple values'
  return uniqueValues[0]
}

/**
 * Each cell is keyboard-focusable, so it needs a concise label that matches the visual
 * encoding: x bucket, row/series label, and formatted numeric value.
 */
export const getHeatMapCellLabel = ({
  cell,
  config,
  formatNumber,
  xLabel,
  xDataKey
}: {
  cell: HeatMapCell
  config: ChartConfig
  formatNumber: FormatCellValueFn
  xLabel: string
  xDataKey?: string
}) => {
  const xAxisLabel = config.xAxis?.label || xDataKey
  const yAxisLabel = config.yAxis?.label || DEFAULT_SERIES_LABEL
  const valueLabel = config.legend?.label || DEFAULT_VALUE_LABEL

  return `${xAxisLabel}: ${xLabel}; ${yAxisLabel}: ${cell.rowLabel}; ${valueLabel}: ${getFormattedValueText(
    cell,
    formatNumber
  )}`
}

/**
 * Tooltip HTML uses the shared chart tooltip list helper to preserve consistent tooltip
 * markup and styling across chart types. Empty cells still receive a tooltip so users can
 * distinguish missing values from very low values.
 */
export const buildTooltipHtml = ({
  cell,
  additionalColumns,
  config,
  formatNumber,
  xLabel,
  xDataKey,
  showSeriesRows
}: {
  cell: HeatMapCell
  additionalColumns: TooltipColumn[]
  config: ChartConfig
  formatNumber: FormatCellValueFn
  xLabel: string
  xDataKey?: string
  showSeriesRows: boolean
}) => {
  const sourceRow = cell.sourceRows[0]
  const xAxisLabel = config.xAxis?.label || xDataKey
  const yAxisLabel = config.yAxis?.label || DEFAULT_SERIES_LABEL
  const valueLabel = config.legend?.label || DEFAULT_VALUE_LABEL

  const extraRows = sourceRow
    ? additionalColumns.map(column => ({
        text: `${column.label}: ${formatAdditionalColumnValue(cell, column, config)}`
      }))
    : []

  return buildTooltipListHtml({
    heading: `${xAxisLabel}: ${xLabel}`,
    bodyRows: [
      ...(showSeriesRows
        ? [
            { text: `${yAxisLabel}: ${cell.rowLabel}` },
            { text: `${valueLabel}: ${getFormattedValueText(cell, formatNumber)}` }
          ]
        : []),
      ...(cell.sourceRows.length > 1 ? [{ text: `Aggregated Rows: ${String(cell.sourceRows.length)}` }] : []),
      ...extraRows
    ]
  })
}
