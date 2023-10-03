import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'

export const useEditorPermissions = () => {
  const { config } = useContext(ConfigContext)
  const { visualizationType, series, orientation } = config

  // Overall support for the chart types
  // prettier-ignore
  const enabledChartTypes = [
    'Area Chart',
    'Bar',
    'Box Plot',
    'Combo',
    'Deviation Bar',
    'Forecasting',
    'Forest Plot',
    'Line',
    'Paired Bar',
    'Pie',
    'Scatter Plot',
    'Spark Line'
]

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
      case 'Forest Plot':
        return false
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

  const visSupportsDateCategoryAxisLabel = () => {
    const disabledCharts = ['Forest Plot']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsDateCategoryAxisLine = () => {
    const disabledCharts = ['Forest Plot']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsDateCategoryAxisTicks = () => {
    const disabledCharts = ['Forest Plot']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsDateCategoryTickRotation = () => {
    const disabledCharts = ['Forest Plot']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsDateCategoryNumTicks = () => {
    const disabledCharts = ['Forest Plot']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsRegions = () => {
    const disabledCharts = ['Forest Plot', 'Pie', 'Paired Bar']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsFilters = () => {
    const disabledCharts = ['Forest Plot']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsValueAxisGridLines = () => {
    const disabledCharts = ['Forest Plot']
    if (orientation === 'horizontal') return false
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  // implement later
  const visSupportsValueAxisTicks = () => {
    return true
  }

  // implement later
  const visSupportsValueAxisLine = () => {
    return true
  }

  // implement later
  const visSupportsValueAxisLabels = () => {
    return true
  }

  const visSupportsBarSpace = () => {
    const disabledCharts = ['Forest Plot']
    if (disabledCharts.includes(visualizationType)) return false
    if (orientation === 'horizontal' || visualizationType === 'Paired Bar') return true
    return false
  }

  const visSupportsBarThickness = () => {
    const disabledCharts = ['Forest Plot']
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
    visHasLegend,
    visSupportsTooltipLines,
    visSupportsNonSequentialPallete,
    visSupportsSequentialPallete,
    visSupportsReverseColorPalette,
    visSupportsDateCategoryAxisLabel,
    visSupportsDateCategoryAxisLine,
    visSupportsDateCategoryAxisTicks,
    visSupportsDateCategoryTickRotation,
    visSupportsDateCategoryNumTicks,
    visSupportsRegions,
    visSupportsFilters,
    visSupportsValueAxisGridLines,
    visSupportsValueAxisTicks,
    visSupportsValueAxisLine,
    visSupportsValueAxisLabels,
    visSupportsBarSpace,
    visSupportsBarThickness
  }
}
