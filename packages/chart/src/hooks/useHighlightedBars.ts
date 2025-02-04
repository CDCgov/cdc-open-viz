import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'
import { ChartConfig } from '../types/ChartConfig'

export const useHighlightedBars = (config: ChartConfig, updateConfig: (config) => void) => {
  const { formatDate, parseDate } = useContext(ConfigContext)

  let highlightedSeries = [] // only allow single series for highlights
  let highlightedSeriesKey = ''
  let highlightedBarValues = []
  let highlightedSeriesValues = []

  if (config.series?.length > 0 && config.data) {
    highlightedSeries = config.series[0] // only allow single series for highlights
    highlightedSeriesKey = config.series[0].dataKey
    highlightedBarValues = config.highlightedBarValues
    highlightedSeriesValues = config.data.map(item => item[config.xAxis.dataKey])
  } else {
    highlightedSeries = [] // only allow single series for highlights
    highlightedSeriesKey = ''
    highlightedBarValues = []
    highlightedSeriesValues = []
  }

  const handleUpdateHighlightedBorderWidth = (e, index) => {
    const copyOfHighlightedBarValues = [...config.highlightedBarValues]
    copyOfHighlightedBarValues[index].borderWidth = e.target.value

    updateConfig({
      ...config,
      highlightedBarValues: copyOfHighlightedBarValues
    })
  }

  const handleUpdateHighlightedBar = (e, index) => {
    e.preventDefault()

    const copyOfHighlightedBarValues = [...config.highlightedBarValues]

    copyOfHighlightedBarValues[index].value = e.target.value
    copyOfHighlightedBarValues[index].dataKey = highlightedSeriesKey

    updateConfig({
      ...config,
      highlightedBarValues: copyOfHighlightedBarValues
    })
  }

  const handleAddNewHighlightedBar = (e, index) => {
    e.preventDefault()
    const copyOfHighlightedBarValues = [...config.highlightedBarValues]
    copyOfHighlightedBarValues.push({ dataKey: highlightedSeriesKey })

    updateConfig({
      ...config,
      highlightedBarValues: copyOfHighlightedBarValues
    })
  }

  const handleRemoveHighlightedBar = (e, index) => {
    e.preventDefault()
    const copyOfHighlightedBarValues = [...config.highlightedBarValues]
    copyOfHighlightedBarValues.splice(index, 1)
    updateConfig({
      ...config,
      highlightedBarValues: copyOfHighlightedBarValues
    })
  }

  const handleUpdateHighlightedBarColor = (e, index) => {
    const copyOfHighlightedBarValues = [...config.highlightedBarValues]
    copyOfHighlightedBarValues[index].color = e.target.value

    updateConfig({
      ...config
    })
  }

  const handleHighlightedBarLegendLabel = (e, index) => {
    const copyOfHighlightedBarValues = [...config.highlightedBarValues]
    copyOfHighlightedBarValues[index].legendLabel = e.target.value

    updateConfig({
      ...config,
      copyOfHighlightedBarValues
    })
  }

  const HighLightedBarUtils = () => {}

  /**
   * @param {string} formattedValue - The value to check for.
   * @param {Array<string>} highlightedBarValuesIn - An array of highlighted bar values.
   * @param {string} labelColor - The default label color.
   * @returns {string} - Returns the font color for the given value.
   */
  HighLightedBarUtils.checkFontColor = (formattedValue, highlightedBarValuesIn, labelColor) => {
    if (config.xAxis.type === 'date') {
      if (HighLightedBarUtils.formatDates(highlightedBarValuesIn).includes(formattedValue)) {
        return '#000'
      }
    } else {
      if (highlightedBarValuesIn.includes(formattedValue)) {
        return '#000'
      }
    }
    return labelColor
  }

  /**
   * Formats an array of date values using the formatDate and parseDate functions.
   *
   * @param {string[]} highlightedBarValues - An array of date values to format.
   * @returns {?Date[]} - An array of formatted date objects, or null if invalid input is provided.
   */
  HighLightedBarUtils.formatDates = highlightedBarValues => {
    return highlightedBarValues.map(dateItem => {
      if (!dateItem) return false
      return formatDate(parseDate(dateItem))
    })
  }

  /**
   * Finds duplicate objects in an array based on the legendLabel property.
   *
   * @param {Array} arr - The array of objects to be checked.
   * @return {Array} - An array of arrays, each containing objects that have the same legendLabel property.
   */
  HighLightedBarUtils.findDuplicates = arr => {
    const duplicates = {}
    const result = arr?.filter(obj => {
      const { legendLabel } = obj
      if (!duplicates[legendLabel]) {
        duplicates[legendLabel] = true
        return true
      }
      return false
    })
    return result
  }

  return {
    HighLightedBarUtils,
    highlightedSeries,
    highlightedSeriesKey,
    highlightedBarValues,
    highlightedSeriesValues,
    handleUpdateHighlightedBar,
    handleAddNewHighlightedBar,
    handleRemoveHighlightedBar,
    handleUpdateHighlightedBarColor,
    handleHighlightedBarLegendLabel,
    handleUpdateHighlightedBorderWidth
  }
}
