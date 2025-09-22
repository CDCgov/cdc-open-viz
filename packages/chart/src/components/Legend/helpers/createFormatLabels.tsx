import { colorPalettesChart as colorPalettes, sequentialPalettes, twoColorPalette } from '@cdc/core/data/colorPalettes'
import { getCurrentPaletteName, getFallbackColorPalette, migratePaletteWithMap } from '@cdc/core/helpers/palettes/utils'
import { chartPaletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'
import { getPaletteAccessor } from '@cdc/core/helpers/getPaletteAccessor'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import { v2ColorDistribution } from '@cdc/core/helpers/palettes/colorDistributions'
import { FaStar } from 'react-icons/fa'
import { Label } from '../../../types/Label'
import { ColorScale, TransformedData } from '../../../types/ChartContext'
import { ChartConfig } from '../../../types/ChartConfig'
import _ from 'lodash'

export const createFormatLabels =
  (config: ChartConfig, tableData: Object[], data: TransformedData[], colorScale: ColorScale) =>
  (defaultLabels: Label[]): Label[] => {
    const { visualizationType, visualizationSubType, series, runtime, legend } = config
    const sortVertical = labels =>
      legend.verticalSorted
        ? _.sortBy(_.cloneDeep(labels), label => {
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
      const [belowColor, aboveColor] = twoColorPalette[config.twoColor.palette]
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
        while (tableData.length > palette.length) {
          palette = palette.concat(palette)
        }
        palette = palette.slice(0, data.length)
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
          value: palette[i]
        }
        return newLabel
      })

      return reverseLabels(uniqueLabels)
    }

    // get forecasting items inside of combo
    if (runtime?.forecastingSeriesKeys?.length > 0) {
      let seriesLabels = []

      //store unique values to Set by colorCode
      // loop through each stage/group/area on the chart and create a label
      config.runtime?.forecastingSeriesKeys?.map((outerGroup, index) => {
        return outerGroup?.stages?.map((stage, index) => {
          let colorValue = sequentialPalettes[stage.color]?.[2]
            ? sequentialPalettes[stage.color]?.[2]
            : colorPalettes[stage.color]?.[2]
            ? colorPalettes[stage.color]?.[2]
            : '#ccc'

          const newLabel = {
            datum: stage.key,
            index: index,
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
