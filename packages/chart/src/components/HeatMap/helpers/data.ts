import { type HeatMapCell, type HeatMapColumn, type HeatMapSourceRow } from '../types'

type HeatMapSeries = { dataKey: string; name?: string }

type BuildHeatMapDataOptions = {
  data: HeatMapSourceRow[]
  xDataKey: string
  series?: HeatMapSeries[]
  seriesLabels?: Record<string, string>
  xAxisType?: string
  parseDate?: (value: string, showError?: boolean) => Date
}

const toDisplayLabel = (value: any): string => {
  if (value === null || value === undefined || value === '') return 'No Data'
  return String(value)
}

const isDateAxisType = (xAxisType?: string) => ['date', 'date-time'].includes(xAxisType || '')

const getSeriesLabel = (seriesEntry: HeatMapSeries, seriesLabels?: Record<string, string>) =>
  seriesLabels?.[seriesEntry.dataKey] || seriesEntry.name || seriesEntry.dataKey

const createEmptyCell = (xValue: any, rowKey: string, rowLabel: string): HeatMapCell => ({
  rowKey,
  rowLabel,
  xValue,
  xLabel: toDisplayLabel(xValue),
  value: null,
  sourceRows: []
})

const getCellKey = (xValue: any, rowKey: string) => `${String(xValue)}__${String(rowKey)}`

const getHeatMapValueDomain = (aggregated: Map<string, HeatMapCell>) => {
  const values = Array.from(aggregated.values())
    .map(cell => cell.value)
    .filter((value): value is number => typeof value === 'number' && !Number.isNaN(value))

  return {
    minValue: values.length ? Math.min(...values) : 0,
    maxValue: values.length ? Math.max(...values) : 0
  }
}

const sortXValues = (
  values: any[],
  xAxisType: string | undefined,
  parseDate?: (value: string, showError?: boolean) => Date
) => {
  if (!isDateAxisType(xAxisType)) {
    return values
  }

  return [...values].sort((a, b) => {
    const left = parseDate ? parseDate(String(a), false).getTime() : new Date(a).getTime()
    const right = parseDate ? parseDate(String(b), false).getTime() : new Date(b).getTime()
    return left - right
  })
}

export const buildHeatMapData = ({
  data,
  xDataKey,
  series,
  seriesLabels,
  xAxisType,
  parseDate
}: BuildHeatMapDataOptions) => {
  const rows = Array.isArray(data) ? data : []
  const hasSeriesMode = Array.isArray(series) && series.length > 0

  if (!xDataKey || rows.length === 0 || !hasSeriesMode) {
    return { columns: [] as HeatMapColumn[], rowLabels: [] as string[], minValue: 0, maxValue: 0 }
  }

  const xValues = Array.from(new Set(rows.map(row => row[xDataKey])))
  const orderedXValues = sortXValues(xValues, xAxisType, parseDate)

  const aggregated = new Map<string, HeatMapCell>()

  rows.forEach(row => {
    const xValue = row[xDataKey]

    series.forEach(seriesEntry => {
      const numericValue = Number(row[seriesEntry.dataKey])
      if (Number.isNaN(numericValue)) return

      const aggregateKey = getCellKey(xValue, seriesEntry.dataKey)
      const existing = aggregated.get(aggregateKey)

      if (existing) {
        existing.value = (existing.value || 0) + numericValue
        existing.sourceRows.push(row)
        return
      }

      aggregated.set(aggregateKey, {
        rowKey: seriesEntry.dataKey,
        rowLabel: getSeriesLabel(seriesEntry, seriesLabels),
        xValue,
        xLabel: toDisplayLabel(xValue),
        value: numericValue,
        sourceRows: [row]
      })
    })
  })

  const orderedSeries = series.map(seriesEntry => ({
    rowKey: seriesEntry.dataKey,
    rowLabel: getSeriesLabel(seriesEntry, seriesLabels)
  }))

  const columns = orderedXValues.map(xValue => {
    const bins = orderedSeries.map(({ rowKey, rowLabel }) => {
      const aggregateKey = getCellKey(xValue, rowKey)
      return aggregated.get(aggregateKey) || createEmptyCell(xValue, rowKey, rowLabel)
    })

    return {
      key: String(xValue),
      label: toDisplayLabel(xValue),
      rawValue: xValue,
      bins
    }
  })

  const { minValue, maxValue } = getHeatMapValueDomain(aggregated)

  return {
    columns,
    rowLabels: orderedSeries.map(item => item.rowLabel),
    minValue,
    maxValue
  }
}
