import { colorPalettesChart as colorPalettes, sequentialPalettes, twoColorPalette } from '@cdc/core/data/colorPalettes'
import { FaStar } from 'react-icons/fa'
import { Label } from '../../../types/Label'
import { ColorScale, TransformedData } from '../../../types/ChartContext'
import { ChartConfig } from '../../../types/ChartConfig'

export const createFormatLabels =
  (config: ChartConfig, tableData: Object[], data: TransformedData[], colorScale: ColorScale) =>
  (defaultLabels: Label[]): Label[] => {
    const { visualizationType, visualizationSubType, series, runtime } = config

    const reverseLabels = labels => (config.legend.reverseLabelOrder && config.legend.position === 'bottom' ? labels.reverse() : labels)
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
      let palette = colorPalettes[config.palette]

      while (tableData.length > palette.length) {
        palette = palette.concat(palette)
      }
      palette = palette.slice(0, data.length)
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
          let colorValue = sequentialPalettes[stage.color]?.[2] ? sequentialPalettes[stage.color]?.[2] : colorPalettes[stage.color]?.[2] ? colorPalettes[stage.color]?.[2] : '#ccc'

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
          let colorValue = colorPalettes[config.palette][index] ? colorPalettes[config.palette][index] : '#ccc'

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

    // DEV-4161: replaceable series name in the legend
    const hasNewSeriesName = config.series.filter(item => !!item.name).length > 0
    if (hasNewSeriesName) {
      //store unique values to Set by colorCode
      const set = new Set()

      config.series.forEach(d => {
        set.add(d.name || d.dataKey)
      })

      // create labels with unique values
      const uniqueLabels = Array.from(set).map((val, i) => {
        const newLabel = {
          datum: val,
          index: i,
          text: val,
          value: colorScale(val)
        }
        return newLabel
      })

      return reverseLabels(uniqueLabels)
    }

    if ((config.visualizationType === 'Bar' || config.visualizationType === 'Combo') && config.visualizationSubType === 'regular' && config.suppressedData) {
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
