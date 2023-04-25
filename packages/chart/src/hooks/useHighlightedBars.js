import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'

export const useHighlightedBars = (config, updateConfig) => {
  const { formatDate, parseDate } = useContext(ConfigContext)

  if (!config.series) return
  const highlightedSeries = config.series[0] // only allow single series for highlights
  const highlightedSeriesKey = config.series[0]?.dataKey
  const highlightedBarValues = config.highlightedBarValues
  const highlightedSeriesValues = config.data.map(item => item[config.xAxis.dataKey])

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
    if (HighLightedBarUtils.formatDates(highlightedBarValuesIn).includes(formattedValue)) {
      return '#000'
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
      if (!dateItem) return null
      return formatDate(parseDate(dateItem))
    })
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
    handleHighlightedBarLegendLabel
  }
}
