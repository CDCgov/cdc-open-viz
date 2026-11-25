import { interpolateRgbBasis } from 'd3-interpolate'
import { scaleQuantize } from 'd3-scale'
import { filterChartColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
import { migratePaletteWithMap, getFallbackColorPalette } from '@cdc/core/helpers/palettes/utils'
import { paletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'
import { type ChartConfig } from '../../../types/ChartConfig'
import { HEATMAP_CONFIG_DEFAULTS, MAX_HEATMAP_COLOR_BUCKETS, MIN_HEATMAP_COLOR_BUCKETS } from '../heatmap.constants'
import { type HeatMapDataGroupRange } from '../types'

type FormatLegendValueFn = (value: number, axis?: string) => string

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

export const getHeatMapPalette = (config: ChartConfig): string[] => {
  const colorPalettes: Record<string, string[]> = filterChartColorPalettes(config)
  const configPalette = config.general?.palette?.name
  const migratedPaletteName =
    configPalette || getFallbackColorPalette(config as Parameters<typeof getFallbackColorPalette>[0])
  const isReversedPalette = migratedPaletteName?.endsWith('reverse')
  const basePaletteName = isReversedPalette ? migratedPaletteName.slice(0, -7) : migratedPaletteName
  const configuredPalette = configPalette ? colorPalettes[configPalette] : undefined

  let palette =
    config.general?.palette?.customColors ||
    colorPalettes[migratePaletteWithMap(basePaletteName, paletteMigrationMap, false)] ||
    colorPalettes[basePaletteName] ||
    configuredPalette

  if (!palette || palette.length < 2) {
    palette = DEFAULT_HEATMAP_PALETTE
  }

  const shouldReverse = config.general?.palette?.isReversed || isReversedPalette
  return shouldReverse ? [...palette].reverse() : palette
}

export const getHeatMapColorBucketCount = (config: ChartConfig) => {
  const numericValue = Number(config.heatmap?.colorBucketCount)

  if (!Number.isFinite(numericValue)) return HEATMAP_CONFIG_DEFAULTS.colorBucketCount

  return Math.min(Math.max(Math.round(numericValue), MIN_HEATMAP_COLOR_BUCKETS), MAX_HEATMAP_COLOR_BUCKETS)
}

export const getHeatMapBucketPalette = (config: ChartConfig): string[] => {
  const palette = getHeatMapPalette(config)
  const bucketCount = getHeatMapColorBucketCount(config)

  const interpolate = interpolateRgbBasis(palette)
  return Array.from({ length: bucketCount }, (_, index) => {
    return interpolate(bucketCount === 1 ? 0.5 : index / (bucketCount - 1))
  })
}

const getCleanRangeBoundary = (value: number) => Number(value.toFixed(12))

const getFormattedRangeValue = (value: number, formatNumber?: FormatLegendValueFn) => {
  const cleanValue = getCleanRangeBoundary(value)
  return typeof formatNumber === 'function' ? String(formatNumber(cleanValue, 'left')) : String(cleanValue)
}

export const getHeatMapDataGroupRanges = (
  config: ChartConfig,
  minValue: number,
  maxValue: number,
  formatNumber?: FormatLegendValueFn
): HeatMapDataGroupRange[] => {
  if (maxValue <= minValue) {
    const value = getCleanRangeBoundary(minValue)
    return [{ min: value, max: value, label: getFormattedRangeValue(value, formatNumber) }]
  }

  const bucketCount = getHeatMapColorBucketCount(config)
  const rangeSize = (maxValue - minValue) / bucketCount

  return Array.from({ length: bucketCount }, (_, index) => {
    const min = getCleanRangeBoundary(minValue + index * rangeSize)
    const max = getCleanRangeBoundary(index === bucketCount - 1 ? maxValue : minValue + (index + 1) * rangeSize)
    const formattedMin = getFormattedRangeValue(min, formatNumber)
    const formattedMax = getFormattedRangeValue(max, formatNumber)

    return {
      min,
      max,
      label: min === max ? formattedMin : `${formattedMin}\u2013${formattedMax}`
    }
  })
}

export const getHeatMapColorScale = (config: ChartConfig, minValue: number, maxValue: number) => {
  const bucketCount = getHeatMapColorBucketCount(config)
  const palette = getHeatMapBucketPalette(config)
  const domainMax = minValue === maxValue ? maxValue + 1 : maxValue

  return scaleQuantize<string>().domain([minValue, domainMax]).range(palette)
}
