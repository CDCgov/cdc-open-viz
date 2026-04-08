import { scaleSequential } from 'd3-scale'
import { interpolateRgbBasis } from 'd3-interpolate'
import { ChartConfig } from '../../types/ChartConfig'
import { filterChartColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
import { getFallbackColorPalette, migratePaletteWithMap } from '@cdc/core/helpers/palettes/utils'
import { paletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'

export type HeatMapSourceRow = Record<string, any>

export type HeatMapCell = {
  rowKey: string
  rowLabel: string
  xValue: any
  xLabel: string
  value: number | null
  sourceRows: HeatMapSourceRow[]
}

export type HeatMapColumn = {
  key: string
  label: string
  rawValue: any
  bins: HeatMapCell[]
}

type HeatMapSeries = { dataKey: string; name?: string }

type BuildHeatMapDataOptions = {
  data: HeatMapSourceRow[]
  xDataKey: string
  series?: HeatMapSeries[]
  seriesLabels?: Record<string, string>
  xAxisType?: string
  parseDate?: (value: string, showError?: boolean) => Date
}

const DEFAULT_HEATMAP_PALETTE = [
  '#eff6fb',
  '#d8e8f7',
  '#bdd9ef',
  '#96c0e0',
  '#67a3ce',
  '#4286be',
  '#2068aa',
  '#0c4f8f',
  '#08306b'
]

const toDisplayLabel = (value: any): string => {
  if (value === null || value === undefined || value === '') return 'No Data'
  return String(value)
}

const isDateAxisType = (xAxisType?: string) => ['date', 'date-time'].includes(xAxisType || '')

const getSeriesLabel = (seriesEntry: HeatMapSeries, seriesLabels?: Record<string, string>) =>
  seriesEntry.name || seriesLabels?.[seriesEntry.dataKey] || seriesEntry.dataKey

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

export const getHeatMapPalette = (config: ChartConfig): string[] => {
  const colorPalettes = filterChartColorPalettes(config)
  const configPalette = config.general?.palette?.name
  const migratedPaletteName = configPalette || getFallbackColorPalette(config)
  const isReversedPalette = migratedPaletteName?.endsWith('reverse')
  const basePaletteName = isReversedPalette ? migratedPaletteName.slice(0, -7) : migratedPaletteName

  let palette =
    config.general?.palette?.customColors ||
    colorPalettes[migratePaletteWithMap(basePaletteName, paletteMigrationMap, false)] ||
    colorPalettes[basePaletteName] ||
    colorPalettes[configPalette]

  if (!palette || palette.length < 2) {
    palette = DEFAULT_HEATMAP_PALETTE
  }

  const shouldReverse = config.general?.palette?.isReversed || isReversedPalette
  return shouldReverse ? [...palette].reverse() : palette
}

export const getHeatMapColorScale = (config: ChartConfig, minValue: number, maxValue: number) => {
  const palette = getHeatMapPalette(config)
  const domainMax = minValue === maxValue ? maxValue + 1 : maxValue

  return scaleSequential(interpolateRgbBasis(palette)).domain([minValue, domainMax])
}
