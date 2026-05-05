import { isDateScale } from '@cdc/core/helpers/cove/date'
import { buildTooltipListHtml, getTooltipSeriesMarker } from './tooltipHelpers'
import { type ChartConfig } from '../types/ChartConfig'
import { type ColorScale } from '../types/ChartContext'

type TooltipDateHelpers = {
  formatDate: (date: Date) => string
  formatTooltipsDate: (date: Date) => string
  parseDate: (dateString: string, showError?: boolean) => Date
}

type BumpTooltipParams = {
  config: ChartConfig
  colorScale?: ColorScale
  dataRow: Record<string, any>
  series: { dataKey: string; name?: string }
  helpers: TooltipDateHelpers
}

const formatXAxisValue = (
  rawValue: unknown,
  config: ChartConfig,
  { formatDate, formatTooltipsDate, parseDate }: TooltipDateHelpers
) => {
  if (!isDateScale(config.xAxis) || rawValue === undefined || rawValue === null || rawValue === '') {
    return rawValue
  }

  const parsedDate = parseDate(String(rawValue), false)
  return config.tooltips.dateDisplayFormat ? formatTooltipsDate(parsedDate) : formatDate(parsedDate)
}

export const buildBumpChartTooltipHtml = ({ config, colorScale, dataRow, series, helpers }: BumpTooltipParams) => {
  const formattedXAxisValue = formatXAxisValue(dataRow[config.xAxis.dataKey], config, helpers)
  const xAxisLabel = config.runtime?.xAxis?.label || config.xAxis.dataKey
  const heading = `${xAxisLabel ? `${xAxisLabel}: ` : ''}${formattedXAxisValue ?? ''}`

  const seriesName = series.name || config.runtime?.seriesLabels?.[series.dataKey] || series.dataKey
  const marker = getTooltipSeriesMarker(config, colorScale, series.dataKey)
  const bodyRows = [
    {
      text: `${seriesName}: ${dataRow[series.dataKey]}`,
      markerColor: marker?.markerColor,
      markerShape: marker?.markerShape
    },
    ...Object.values(config.columns || {})
      .filter(column => column.tooltips && column.name !== config.xAxis.dataKey && column.name !== series.dataKey)
      .map(column => ({
        text: `${column.label || column.name}: ${dataRow[column.name]}`
      }))
  ]

  return buildTooltipListHtml({ heading, bodyRows })
}
