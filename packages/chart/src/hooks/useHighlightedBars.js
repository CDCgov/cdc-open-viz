import React from 'react'

export const useHighlightedBars = (config, updateConfig) => {
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

  return {
    highlightedSeries,
    highlightedSeriesKey,
    highlightedBarValues,
    highlightedSeriesValues,
    handleUpdateHighlightedBar,
    handleAddNewHighlightedBar,
    handleRemoveHighlightedBar,
    handleUpdateHighlightedBarColor
  }
}
