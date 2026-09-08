import {
  colorPalettesChart as colorPalettes,
  colorPalettesChartV2,
  sequentialPalettes,
  twoColorPalette
} from '@cdc/core/data/colorPalettes'
import { getCurrentPaletteName, getFallbackColorPalette, migratePaletteWithMap } from '@cdc/core/helpers/palettes/utils'
import { chartPaletteMigrationMap, paletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'
import { getPaletteAccessor } from '@cdc/core/helpers/getPaletteAccessor'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import { isV1Palette } from '@cdc/core/helpers/palettes/utils'
import { v2ColorDistribution } from '@cdc/core/helpers/palettes/colorDistributions'
import { updatePaletteNames } from '@cdc/core/helpers/updatePaletteNames'
import { buildForecastPaletteMappings } from '../../../helpers/buildForecastPaletteMappings'
import { getFullColorPalette } from '../../../helpers/smallMultiplesHelpers'
import { hasSeriesColorAssignmentOverrides } from '../../../helpers/colorAssignmentHelpers'
import { FaStar } from 'react-icons/fa'
import { Label } from '../../../types/Label'
import { ColorScale, TransformedData } from '../../../types/ChartContext'
import { ChartConfig } from '../../../types/ChartConfig'
import cloneDeep from 'lodash/cloneDeep'
import sortBy from 'lodash/sortBy'
import { scaleSequential } from 'd3-scale'
import { interpolateRgbBasis } from 'd3-interpolate'
import { filterChartColorPalettes } from '@cdc/core/helpers/filterColorPalettes'

const FORECASTING_CI_FILL_OPACITY = 0.5

type ForecastConfidenceInterval = {
  high?: string
  low?: string
  showInTooltip?: boolean
}

const getConfidenceLevel = (confidenceInterval: ForecastConfidenceInterval): number | null => {
  const sourceText = [confidenceInterval.high, confidenceInterval.low].filter(Boolean).join(' ')
  const percentMatch = sourceText.match(/(\d+(?:\.\d+)?)\s*%/)
  if (percentMatch) return Number(percentMatch[1])

  const upperLowerMatch = sourceText.match(
    /(?:^|[\s_-])(?:upper|lower|high|low|hi|lo)[\s_-]*(\d+(?:\.\d+)?)(?=$|[\s_%_-])/i
  )
  if (upperLowerMatch) return Number(upperLowerMatch[1])

  const confidenceMatch = sourceText.match(
    /(?:^|[\s_-])(\d+(?:\.\d+)?)[\s_-]*(?:confidence|ci|interval)(?=$|[\s_%_-])/i
  )
  if (confidenceMatch) return Number(confidenceMatch[1])

  return null
}

const getConfidenceIntervalLegendText = (confidenceInterval: ForecastConfidenceInterval, index: number): string => {
  const confidenceLevel = getConfidenceLevel(confidenceInterval)
  return confidenceLevel === null ? `CI ${index + 1}` : `${confidenceLevel}% CI`
}

const getForecastingConfidenceIntervalLegendItems = (confidenceIntervals: ForecastConfidenceInterval[] = []) =>
  confidenceIntervals
    .map((confidenceInterval, originalIndex) => ({
      confidenceInterval,
      originalIndex,
      confidenceLevel: getConfidenceLevel(confidenceInterval)
    }))
    .filter(({ confidenceInterval }) => confidenceInterval.high && confidenceInterval.low)
    .sort((a, b) => {
      if (a.confidenceLevel !== null && b.confidenceLevel !== null) {
        return a.confidenceLevel - b.confidenceLevel
      }

      if (a.confidenceLevel !== null) return -1
      if (b.confidenceLevel !== null) return 1

      return a.originalIndex - b.originalIndex
    })

const parseColorToRgb = (color: string): [number, number, number] | null => {
  const normalizedColor = color.trim()
  const hex = normalizedColor.startsWith('#') ? normalizedColor.slice(1) : normalizedColor

  if (/^[0-9a-f]{3}$/i.test(hex)) {
    return hex.split('').map(value => parseInt(`${value}${value}`, 16)) as [number, number, number]
  }

  if (/^[0-9a-f]{6}$/i.test(hex)) {
    return [0, 2, 4].map(index => parseInt(hex.slice(index, index + 2), 16)) as [number, number, number]
  }

  const rgbMatch = normalizedColor.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i)
  if (!rgbMatch) return null

  return [Number(rgbMatch[1]), Number(rgbMatch[2]), Number(rgbMatch[3])]
}

const applyAlphaToColor = (color: string, alpha: number): string => {
  const rgb = parseColorToRgb(color)
  if (!rgb) return color

  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`
}

const getForecastingCiLegendFill = (fill: string, ciIndex: number, ciCount: number): string => {
  const layerCount = Math.max(ciCount - ciIndex, 1)
  const alpha = Number((1 - Math.pow(1 - FORECASTING_CI_FILL_OPACITY, layerCount)).toFixed(3))

  return applyAlphaToColor(fill, alpha)
}

export const createFormatLabels =
  (
    config: ChartConfig,
    tableData: Object[],
    data: TransformedData[],
    colorScale: ColorScale,
    formatNumber: (value: any, axis: string) => string
  ) =>
  (defaultLabels: Label[]): Label[] => {
    const { visualizationType, visualizationSubType, series, runtime, legend } = config

    // Handle small multiples legend adjustments
    // by-series + same: all tiles use same color, legend should show one color
    if (
      config.smallMultiples?.mode === 'by-series' &&
      config.smallMultiples?.colorMode === 'same' &&
      !hasSeriesColorAssignmentOverrides(config)
    ) {
      const baseColor = colorScale?.range()?.[0]
      return defaultLabels.map((label, i) => ({
        ...label,
        value: baseColor
      }))
    }

    // by-column + different: each tile gets different color, legend should show tile values with their colors
    if (config.smallMultiples?.mode === 'by-column' && config.smallMultiples?.colorMode === 'different') {
      const tileColumn = config.smallMultiples.tileColumn
      const tileValues = Array.from(new Set(data.map(d => d[tileColumn])))
        .filter(Boolean)
        .sort()
      const tilePalette = getFullColorPalette(config, tileValues.length)

      return tileValues.map((value, index) => ({
        datum: value,
        index,
        text: config.smallMultiples.tileTitles?.[value] || String(value),
        value: tilePalette[index]
      }))
    }

    // Handle Warming Stripes legend
    if (visualizationType === 'Warming Stripes') {
      const valueKey = runtime.seriesKeys?.[0]
      if (!valueKey || !data || data.length === 0) {
        return []
      }

      // Calculate min and max values
      const values = data.map(d => Number(d[valueKey])).filter(v => !isNaN(v))
      const minValue = Math.min(...values)
      const maxValue = Math.max(...values)

      // Get the color palette from config (same logic as WarmingStripes component)
      const colorPalettesFiltered = filterChartColorPalettes(config)
      const configPalette = config.general?.palette?.name
      const migratedPaletteName = configPalette ? configPalette : getFallbackColorPalette(config)

      const isReversedPalette = migratedPaletteName?.endsWith('reverse')
      const basePaletteName = isReversedPalette ? migratedPaletteName.slice(0, -7) : migratedPaletteName

      let palette =
        colorPalettesFiltered[migratePaletteWithMap(basePaletteName, paletteMigrationMap, false)] ||
        colorPalettesFiltered[basePaletteName] ||
        colorPalettesFiltered[configPalette]

      if (!palette || palette.length < 2) {
        palette = [
          '#053061',
          '#2166ac',
          '#4393c3',
          '#92c5de',
          '#d1e5f0',
          '#f7f7f7',
          '#fddbc7',
          '#f4a582',
          '#d6604d',
          '#b2182b',
          '#67001f'
        ]
      }

      const shouldReverse = config.general?.palette?.isReversed || isReversedPalette
      const finalPalette = shouldReverse ? [...palette].reverse() : palette
      const warmingColorScale = scaleSequential(interpolateRgbBasis(finalPalette)).domain([minValue, maxValue])

      // For gradient style, create smooth gradient with min/max labels only
      if (legend?.style === 'gradient') {
        // Create many color stops for smooth gradient (these are used for the gradient fill)
        const numColorStops = 20
        const colorStops = []
        for (let i = 0; i < numColorStops; i++) {
          const t = i / (numColorStops - 1)
          const value = minValue + t * (maxValue - minValue)
          colorStops.push(warmingColorScale(value))
        }

        // Create multiple stops for proper spacing, but only show labels at first and last
        // This ensures the first label appears at the left edge and last at the right edge
        const numPositions = 5 // Number of tick positions for spacing
        const labels = []
        for (let i = 0; i < numPositions; i++) {
          const t = i / (numPositions - 1)
          const value = minValue + t * (maxValue - minValue)
          const isFirstOrLast = i === 0 || i === numPositions - 1

          labels.push({
            datum: String(value),
            index: i,
            text: isFirstOrLast ? formatNumber(value, 'left') : '',
            value: colorStops[Math.floor(t * (numColorStops - 1))],
            colors: colorStops
          })
        }

        return labels
      }

      // For interval style, create ranges
      const numIntervals = legend?.warmingStripesIntervals || 5
      const range = maxValue - minValue
      const intervalSize = range / numIntervals

      const intervalLabels = []

      for (let i = 0; i < numIntervals; i++) {
        // Calculate interval boundaries
        // Each interval after the first starts at the exact boundary point
        const start = minValue + i * intervalSize
        const end = i === numIntervals - 1 ? maxValue : minValue + (i + 1) * intervalSize
        const midPoint = (start + end) / 2

        // For display, show the actual start for first interval
        // For subsequent intervals, format the boundary point
        const displayStart = start
        const displayEnd = i === numIntervals - 1 ? end : end

        intervalLabels.push({
          datum: String(midPoint),
          index: i,
          text:
            i === 0
              ? `${formatNumber(displayStart, 'left')} - < ${formatNumber(displayEnd, 'left')}`
              : i === numIntervals - 1
              ? `${formatNumber(displayStart, 'left')} - ${formatNumber(displayEnd, 'left')}`
              : `${formatNumber(displayStart, 'left')} - < ${formatNumber(displayEnd, 'left')}`,
          value: warmingColorScale(midPoint)
        })
      }

      return intervalLabels
    }

    const sortVertical = labels =>
      legend.verticalSorted
        ? sortBy(cloneDeep(labels), label => {
            const match = label.datum?.match(/-?\d+(\.\d+)?/)
            return match ? parseFloat(match[0]) : Number.MAX_SAFE_INTEGER
          })
        : labels
    const reverseLabels = labels => {
      if (config.series.some(series => series.dynamicCategory)) {
        return orderDynamicLabels(labels)
      }

      return config.legend.reverseLabelOrder ? sortVertical(labels).reverse() : sortVertical(labels)
    }

    const orderDynamicLabels = labels => {
      // Handle different ordering configurations
      switch (config.legend.order) {
        case 'dataColumn':
          return labels
        case 'asc':
        case 'desc':
          return labels.sort((a, b) => {
            const valA = a.datum || a.text
            const valB = b.datum || b.text
            const numA = parseFloat(valA)
            const numB = parseFloat(valB)
            if (!isNaN(numA) && !isNaN(numB)) {
              return config.legend.order === 'asc' ? numA - numB : numB - numA
            } else {
              return config.legend.order === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA)
            }
          })

        default:
          return labels // Default case to handle any unexpected config.legend.order values
      }
    }
    const colorCode = config.legend?.colorCode
    if (visualizationType === 'Deviation Bar') {
      let versionName = isV1Palette(config) ? 'v1' : 'v2'
      const [belowColor, aboveColor] = twoColorPalette?.[versionName]?.[config.twoColor.palette] || [
        '#1D6ABF',
        '#935586'
      ]

      const labelBelow = {
        datum: 'X',
        index: 0,
        text: `Below ${config.xAxis.targetLabel}`,
        value: belowColor
      }
      const labelAbove = {
        datum: 'X',
        index: 1,
        text: `Above ${config.xAxis.targetLabel}`,
        value: aboveColor
      }

      return reverseLabels([labelBelow, labelAbove])
    }
    if (visualizationType === 'Bar' && visualizationSubType === 'regular' && colorCode && series?.length === 1) {
      const currentPaletteName = getCurrentPaletteName(config) || getFallbackColorPalette(config)
      const paletteName = migratePaletteWithMap(currentPaletteName, chartPaletteMigrationMap, true)
      let palette = getPaletteAccessor(colorPalettes, config, paletteName)

      const numberOfKeys = data.length

      // Check if we should use v2 distribution logic for better contrast
      const version = getColorPaletteVersion(config)
      const isSequentialOrDivergent =
        paletteName && (paletteName.includes('sequential') || paletteName.includes('divergent'))
      const isPairedBarOrDeviation = ['Paired Bar', 'Deviation Bar'].includes(config.visualizationType)
      const useV2Distribution =
        version === 2 && isSequentialOrDivergent && palette.length === 9 && numberOfKeys <= 9 && !isPairedBarOrDeviation

      if (useV2Distribution && v2ColorDistribution[numberOfKeys]) {
        // Use strategic color distribution for v2 sequential palettes
        const distributionIndices = v2ColorDistribution[numberOfKeys]
        palette = distributionIndices.map(index => palette[index])
      } else {
        // Use existing logic for v1 palettes and other cases
        while (tableData.length > palette?.length) {
          palette = palette.concat(palette)
        }
        palette = palette?.slice(0, data.length)
      }
      //store unique values to Set by colorCode
      const set = new Set()

      tableData.forEach(d => set.add(d[colorCode]))

      // create labels with unique values
      const uniqueLabels = Array.from(set).map((val, i) => {
        const newLabel = {
          datum: val,
          index: i,
          text: val,
          value: palette?.[i]
        }
        return newLabel
      })

      return reverseLabels(uniqueLabels)
    }

    // get forecasting items inside of combo
    if (runtime?.forecastingSeriesKeys?.length > 0) {
      let seriesLabels = []

      // Create palette lookup map - use version-specific palettes
      // Forecasting charts use sequentialPalettes for v1, sequential-only palettes for v2
      const paletteVersion = getColorPaletteVersion(config)

      let forecastPalettes
      if (paletteVersion === 1) {
        // V1: Use original sequential palettes
        forecastPalettes = sequentialPalettes
      } else {
        // V2: Only use sequential palettes (filter out divergent and qualitative)
        const allV2Palettes = colorPalettesChartV2
        forecastPalettes = {}
        Object.keys(allV2Palettes).forEach(key => {
          if (key.startsWith('sequential')) {
            forecastPalettes[key] = allV2Palettes[key]
          }
        })
      }

      const processedPalettes = updatePaletteNames(forecastPalettes)
      const forecastingPalettes = buildForecastPaletteMappings(processedPalettes, paletteVersion)

      config.runtime?.forecastingSeriesKeys?.forEach(outerGroup => {
        const confidenceIntervals = getForecastingConfidenceIntervalLegendItems(outerGroup?.confidenceIntervals)
        const shouldShowConfidenceIntervalLabels = confidenceIntervals.length > 1

        if (shouldShowConfidenceIntervalLabels) {
          confidenceIntervals.forEach(({ confidenceInterval, originalIndex }, ciIndex) => {
            const confidenceIntervalText = getConfidenceIntervalLegendText(confidenceInterval, originalIndex)

            outerGroup?.stages?.forEach(stage => {
              const palette = forecastingPalettes[stage.color] || false
              const colorValue = getForecastingCiLegendFill(palette?.[2] || '#ccc', ciIndex, confidenceIntervals.length)

              const newLabel = {
                datum: stage.key,
                index: seriesLabels.length,
                text: `${confidenceIntervalText} ${stage.key}`,
                value: colorValue
              }

              seriesLabels.push(newLabel)
            })
          })

          return
        }

        outerGroup?.stages?.forEach(stage => {
          const palette = forecastingPalettes[stage.color] || false
          let colorValue = palette?.[2] || '#ccc'

          const newLabel = {
            datum: stage.key,
            index: seriesLabels.length,
            text: stage.key,
            value: colorValue
          }

          seriesLabels.push(newLabel)
        })
      })

      // loop through bars for now to meet requirements.
      config.runtime.barSeriesKeys &&
        config.runtime.barSeriesKeys.forEach((bar, index) => {
          const currentPaletteName = getCurrentPaletteName(config) || getFallbackColorPalette(config)
          const migratedPaletteName = migratePaletteWithMap(currentPaletteName, chartPaletteMigrationMap, true)
          const palette = getPaletteAccessor(colorPalettes, config, migratedPaletteName)
          let colorValue = palette?.[index] || '#ccc'

          const newLabel = {
            datum: bar,
            index: index,
            text: bar,
            value: colorValue
          }

          seriesLabels.push(newLabel)
        })

      return reverseLabels(seriesLabels)
    }

    // For Radar charts, use the entity names from runtime.seriesKeys (set from xAxis.dataKey values)
    // not the series names (which are the dimension keys)
    if (visualizationType === 'Radar') {
      const entityNames = runtime.seriesKeys || []
      const radarLabels = entityNames.map((val, i) => ({
        datum: val,
        index: i,
        text: String(val),
        value: colorScale(val)
      }))
      return reverseLabels(radarLabels)
    }

    if (config.series.some(item => item.name)) {
      const uniqueLabels = Array.from(new Set(config.series.map(d => d.name || d.dataKey))).map((val, i) => ({
        datum: val,
        index: i,
        text: val,
        value: colorScale(val)
      }))
      return reverseLabels(uniqueLabels)
    }

    if (
      (config.visualizationType === 'Bar' || config.visualizationType === 'Combo') &&
      config.visualizationSubType === 'regular' &&
      config.suppressedData
    ) {
      const lastIndex = defaultLabels.length - 1
      let newLabels = []

      config.suppressedData?.forEach(({ label, icon }, index) => {
        if (label && icon) {
          const newLabel = {
            datum: label,
            index: lastIndex + index,
            text: label,
            icon: <FaStar color='#000' size={15} />
          }
          newLabels.push(newLabel)
        }
      })

      return [...defaultLabels, ...newLabels]
    }

    return reverseLabels(defaultLabels)
  }
