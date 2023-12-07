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

  const headerColors = ['theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber']

  const visSupportsSuperTitle = () => {
    const disabledCharts = ['Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsFootnotes = () => {
    const disabledCharts = ['Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visHasLabelOnData = () => {
    const disabledCharts = ['Area Chart', 'Box Plot', 'Pie', 'Scatter Plot', 'Forest Plot', 'Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visCanAnimate = () => {
    const disabledCharts = ['Area Chart', 'Scatter Plot', 'Box Plot', 'Forest Plot', 'Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visHasLegend = () => {
    switch (visualizationType) {
      case 'Box Plot':
        return false
      case 'Forest Plot':
        return false
      case 'Spark Line':
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
      case 'Spark Line':
        return false
      default:
        return true
    }
  }

  const visSupportsTooltipOpacity = () => {
    const disabledCharts = ['Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsTooltipLines = () => {
    const enabledCharts = ['Combo', 'Forecasting', 'Area Chart', 'Line', 'Bar']
    if (enabledCharts.includes(visualizationType)) return true
    return false
  }

  const visSupportsSequentialPallete = () => {
    const disabledCharts = ['Paired Bar', 'Deviation Bar', 'Forest Plot', 'Forecasting']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsNonSequentialPallete = () => {
    const disabledCharts = ['Paired Bar', 'Deviation Bar', 'Forest Plot', 'Forecasting']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsReverseColorPalette = () => {
    const disabledCharts = ['Forest Plot', 'Paired Bar', 'Deviation Bar']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsDateCategoryAxisLabel = () => {
    const disabledCharts = ['Forest Plot', 'Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsDateCategoryAxisLine = () => {
    const disabledCharts = ['Forest Plot', 'Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsDateCategoryAxisTicks = () => {
    const disabledCharts = ['Forest Plot', 'Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsDateCategoryTickRotation = () => {
    const disabledCharts = ['Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsDateCategoryNumTicks = () => {
    const disabledCharts = ['Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsResponsiveTicks = () => {
    const disabledCharts = ['Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsRegions = () => {
    const disabledCharts = ['Forest Plot', 'Pie', 'Paired Bar', 'Spark Line']
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

  const visSupportsChartHeight = () => {
    const disabledCharts = ['Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsLeftValueAxis = () => {
    const disabledCharts = ['Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsRankByValue = () => {
    const disabledCharts = ['Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsDateCategoryHeight = () => {
    const disabledCharts = ['Spark Line']
    if (disabledCharts.includes(visualizationType)) return false
    return true
  }

  const visSupportsReactTooltip = () => {
    if (['Deviation Bar', 'Box Plot', 'Scatter Plot', 'Paired Bar'].includes(visualizationType) || (visualizationType === 'Bar' && config.tooltips.singleSeries)) {
      return true
    }
  }

  return {
    enabledChartTypes,
    headerColors,
    visCanAnimate,
    visHasAnchors,
    visHasBarBorders,
    visHasDataCutoff,
    visHasLabelOnData,
    visHasLegend,
    visHasNumbersOnBars,
    visSupportsBarSpace,
    visSupportsBarThickness,
    visSupportsChartHeight,
    visSupportsDateCategoryAxisLabel,
    visSupportsDateCategoryAxisLine,
    visSupportsDateCategoryAxisTicks,
    visSupportsDateCategoryHeight,
    visSupportsDateCategoryNumTicks,
    visSupportsDateCategoryTickRotation,
    visSupportsFilters,
    visSupportsFootnotes,
    visSupportsLeftValueAxis,
    visSupportsNonSequentialPallete,
    visSupportsRankByValue,
    visSupportsRegions,
    visSupportsResponsiveTicks,
    visSupportsReverseColorPalette,
    visSupportsSequentialPallete,
    visSupportsSuperTitle,
    visSupportsTooltipLines,
    visSupportsTooltipOpacity,
    visSupportsValueAxisGridLines,
    visSupportsValueAxisLabels,
    visSupportsValueAxisLine,
    visSupportsValueAxisTicks,
    visSupportsReactTooltip
  }
}
