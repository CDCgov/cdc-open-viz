import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'

export const useEditorPermissions = () => {
  const { config } = useContext(ConfigContext)
  const { visualizationType, series } = config

  // Overall support for the chart types
  const enabledChartTypes = ['Area Chart', 'Bar', 'Box Plot', 'Combo', 'Deviation Bar', 'Forecasting', 'Forest Plot', 'Line', 'Paired Bar', 'Pie', 'Scatter Plot', 'Spark Line']

  const visHasLabelOnData = () => {
    const disabledCharts = ['Area Chart', 'Box Plot', 'Pie', 'Scatter Plot', 'Forest Plot']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visCanAnimate = () => {
    const disabledCharts = ['Area Chart', 'Scatter Plot', 'Box Plot', 'Forest Plot']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visHasLegend = () => {
    switch (visualizationType) {
      case 'Box Plot':
        return false
      case 'Forest Plot':
        return false
      default:
        return true
    }
  }

  const visHasNumbersOnBars = () => {
    if (visualizationType === 'Forest Plot') return false
    if (config.orientation === 'horizontal' && (config.yAxis.labelPlacement === 'Below Bar' || config.yAxis.labelPlacement === 'On Date/Category Axis' || config.visualizationType === 'Paired Bar' || config.visualizationType === 'Deviation Bar')) return true
    return false
  }

  const visHasAnchors = () => {
    switch (visualizationType) {
      case 'Area Chart':
        return true
      case 'Combo':
        return true
      case 'Line':
        return true
      case 'Bar':
        return true
      case 'Scatter Plot':
        return true
      default:
        return false
    }
  }

  const visHasBarBorders = () => {
    const disabledCharts = ['Box Plot', 'Scatter Plot', 'Pie']
    if (disabledCharts.includes(visualizationType)) return false
    return series?.some(series => series.type === 'Bar' || series.type === 'Paired Bar' || series.type === 'Deviation Bar')
  }

  const visHasDataCutoff = () => {
    switch (visualizationType) {
      case 'Box Plot':
        return false
      case 'Pie':
        return false
      default:
        return true
    }
  }

  const visSupportsTooltipLines = () => {
    const enabledCharts = ['Combo', 'Forecasting', 'Area Chart', 'Line', 'Bar']
    if (enabledCharts.includes(visualizationType)) return true
    return false
  }

  const visSupportsSequentialPallete = () => {
    const disabledCharts = ['Paired Bar', 'Deviation Bar', 'Forest Plot']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsNonSequentialPallete = () => {
    const disabledCharts = ['Paired Bar', 'Deviation Bar', 'Forest Plot']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsReverseColorPalette = () => {
    const disabledCharts = ['Forest Plot', 'Paired Bar', 'Deviation Bar']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  return {
    enabledChartTypes,
    visHasLabelOnData,
    visHasNumbersOnBars,
    visHasAnchors,
    visHasBarBorders,
    visHasDataCutoff,
    visCanAnimate,
    visHasDataCutoff,
    visHasLegend,
    visSupportsTooltipLines,
    visSupportsNonSequentialPallete,
    visSupportsSequentialPallete,
    visSupportsReverseColorPalette
  }
}
