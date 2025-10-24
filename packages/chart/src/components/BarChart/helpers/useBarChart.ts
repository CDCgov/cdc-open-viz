import React, { useContext, useEffect, useState } from 'react'
import { ChartDispatchContext } from '../../../ConfigContext'
import { formatNumber as formatColNumber } from '@cdc/core/helpers/cove/number'
import { APP_FONT_SIZE } from '@cdc/core/helpers/constants'
import { getPaletteColors } from '@cdc/core/helpers/palettes/utils'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizSubType, getVizTitle } from '@cdc/core/helpers/metrics/utils'

export const useBarChart = (handleTooltipMouseOver, handleTooltipMouseOff, configContext) => {
  const { config, colorPalettes, tableData, updateConfig, parseDate, formatDate, seriesHighlight, interactionLabel } =
    configContext
  const { orientation } = config
  const dispatch = useContext(ChartDispatchContext)
  const [hoveredBar, setHoveredBar] = useState(null)

  const isHorizontal = orientation === 'horizontal'
  const barBorderWidth = 1
  const lollipopBarWidth = config.lollipopSize === 'large' ? 7 : config.lollipopSize === 'medium' ? 6 : 5
  const lollipopShapeSize = config.lollipopSize === 'large' ? 14 : config.lollipopSize === 'medium' ? 12 : 10
  const isLabelBelowBar = config.yAxis.labelPlacement === 'Below Bar'
  const displayNumbersOnBar = config.yAxis.displayNumbersOnBar
  const section = config.orientation === 'horizontal' ? 'yAxis' : 'xAxis'

  const isRounded = config.barStyle === 'rounded'
  const isStacked = config.visualizationSubType === 'stacked'
  const tipRounding = config.tipRounding
  const radius =
    config.roundingStyle === 'standard'
      ? '8px'
      : config.roundingStyle === 'shallow'
      ? '5px'
      : config.roundingStyle === 'finger'
      ? '15px'
      : '0px'
  const stackCount = config.runtime.seriesKeys.length
  const hasMultipleSeries = Object.keys(config.runtime.seriesLabels).length > 1
  const isBarAndLegendIsolate =
    config.visualizationType === 'Bar' && config.legend.behavior === 'isolate' && config.legend.axisAlign
  const barStackedSeriesKeys =
    isBarAndLegendIsolate && seriesHighlight?.length
      ? seriesHighlight
      : config.runtime.barSeriesKeys || config.runtime.seriesKeys

  useEffect(() => {
    if (orientation === 'horizontal' && !config.yAxis.labelPlacement) {
      updateConfig({
        ...config,
        yAxis: {
          ...config.yAxis,
          labelPlacement: 'Below Bar'
        }
      })
    }
  }, [config, updateConfig]) // eslint-disable-line

  useEffect(() => {
    if (config.isLollipopChart === false && config.barHeight < 25) {
      updateConfig({ ...config, barHeight: 25 })
    }
  }, [config.isLollipopChart]) // eslint-disable-line

  useEffect(() => {
    if (config.visualizationSubType === 'horizontal') {
      updateConfig({
        ...config,
        orientation: 'horizontal'
      })
    }
  }, []) // eslint-disable-line

  useEffect(() => {
    if (config.barStyle === 'lollipop' && !config.isLollipopChart) {
      updateConfig({ ...config, isLollipopChart: true })
    }
    if (isRounded || config.barStyle === 'flat') {
      updateConfig({ ...config, isLollipopChart: false })
    }
  }, [config.barStyle]) // eslint-disable-line

  const applyRadius = index => {
    if (index === undefined || index === null || !isRounded) return {}
    let style = {}

    if ((isStacked && index + 1 === stackCount) || !isStacked) {
      style = isHorizontal ? { borderRadius: `0 ${radius}  ${radius}  0` } : { borderRadius: `${radius} ${radius} 0 0` }
    }
    if (!isStacked && index === -1) {
      style = isHorizontal
        ? { borderRadius: `${radius} 0  0 ${radius} ` }
        : { borderRadius: ` 0  0 ${radius} ${radius}` }
    }
    if (tipRounding === 'full' && isStacked && index === 0 && stackCount > 1) {
      style = isHorizontal ? { borderRadius: `${radius} 0 0 ${radius}` } : { borderRadius: `0 0 ${radius} ${radius}` }
    }
    if (tipRounding === 'full' && ((isStacked && index === 0 && stackCount === 1) || !isStacked)) {
      style = { borderRadius: radius }
    }
    return style
  }

  const assignColorsToValues = (barsCount, barIndex, currentBarColor) => {
    if (!config.legend.colorCode && config.series.length > 1) {
      return currentBarColor
    }
    const palettesArr = getPaletteColors(config, colorPalettes)
    const values = tableData.map(d => {
      return d[config.legend.colorCode]
    })
    // Map to hold unique values and their  colors
    let colorMap = new Map()
    // Resultant array to hold colors  to the values
    let palette = []

    for (let i = 0; i < values.length; i++) {
      // If value not in map, add it and assign a color
      if (!colorMap.has(values[i])) {
        colorMap.set(values[i], palettesArr[colorMap.size % palettesArr.length])
      }
      // push the color to the result array
      palette.push(colorMap.get(values[i]))
    }

    // loop throghy existing colors and extend if needed
    while (palette.length < barsCount) {
      palette = palette.concat(palette)
    }
    const barColor = palette[barIndex]
    return barColor
  }

  const getHighlightedBarColorByValue = value => {
    const match = config?.highlightedBarValues.find(item => {
      if (!item.value) return
      return config.xAxis.type === 'date' ? formatDate(parseDate(item.value)) === value : item.value === value
    })

    if (!match?.color) return `rgba(255, 102, 1)`
    return match.color
  }
  const getHighlightedBarByValue = value => {
    const match = config?.highlightedBarValues.filter(item => {
      if (!item.value) return
      return config.xAxis.type === 'date' ? formatDate(parseDate(item.value)) === value : item.value === value
    })[0]

    if (!match?.color) return false
    return match
  }

  const shouldSuppress = bar => {
    return config.preliminaryData?.some(pd => {
      const matchesColumn = pd.column ? pd.column === bar.key : true
      const matchesValue = String(bar.value) === String(pd.value) && pd.value !== ''
      return matchesColumn && matchesValue && pd.symbol && pd.type === 'suppression'
    })
  }

  const getAdditionalColumn = (series, xAxisDataValue) => {
    if (!xAxisDataValue) return ''
    const columns = config.columns
    const columnsWithTooltips = []
    let additionalTooltipItems = ''
    const dynamicCategorySeries = config.runtime?.series?.find(series => series?.dynamicCategory)
    const closestVal =
      tableData.find(d => {
        const dynamicCategoryMatch = dynamicCategorySeries ? d[dynamicCategorySeries.dynamicCategory] === series : true
        return d[config.xAxis.dataKey] === xAxisDataValue && dynamicCategoryMatch
      }) || {}
    Object.keys(columns).forEach(colKeys => {
      const colConfig = config.columns[colKeys]
      if (series && colConfig.series && colConfig.series !== series && !colConfig.tooltips) return
      const formattingParams = {
        addColPrefix: config.columns[colKeys].prefix,
        addColSuffix: config.columns[colKeys].suffix,
        addColRoundTo: config.columns[colKeys].roundToPlace ? config.columns[colKeys].roundToPlace : '',
        addColCommas: config.columns[colKeys].commas
      }

      const formattedValue = formatColNumber(
        closestVal[config.columns[colKeys].name],
        'left',
        true,
        config,
        formattingParams
      )
      if (config.columns[colKeys].tooltips) {
        columnsWithTooltips.push([config.columns[colKeys].label, formattedValue])
      }
    })
    columnsWithTooltips.forEach(columnData => {
      additionalTooltipItems += `${columnData[0]} : ${columnData[1]} <br/>`
    })
    return additionalTooltipItems
  }

  const onMouseOverBar = (categoryValue, barKey, event, data, barValue) => {
    if (config.legend.highlightOnHover && config.legend.behavior === 'highlight' && barKey) {
      dispatch({ type: 'SET_SERIES_HIGHLIGHT', payload: [barKey] })
    }
    handleTooltipMouseOver(event, data)
    setHoveredBar(categoryValue)

    if (config.tooltips.singleSeries) {
      const numericValue = barValue || 'none'
      publishAnalyticsEvent({
        vizType: config.type,
        vizSubType: getVizSubType(config),
        eventType: `chart_hover`,
        eventAction: 'hover',
        eventLabel: interactionLabel,
        vizTitle: getVizTitle(config),
        series: barKey || 'none',
        specifics: `series: ${barKey || 'none'}, yValue: ${
          orientation === 'horizontal' ? categoryValue : numericValue
        }, xValue: ${orientation === 'horizontal' ? numericValue : categoryValue}, orientation: ${
          orientation || 'none'
        }`
      })
    }
  }
  const onMouseLeaveBar = () => {
    if (config.legend.highlightOnHover && config.legend.behavior === 'highlight') {
      dispatch({ type: 'SET_SERIES_HIGHLIGHT', payload: [] })
    }
    handleTooltipMouseOff()
  }

  return {
    isHorizontal,
    barBorderWidth,
    lollipopBarWidth,
    lollipopShapeSize,
    isLabelBelowBar,
    displayNumbersOnBar,
    shouldSuppress,
    section,
    isRounded,
    isStacked,
    tipRounding,
    radius,
    stackCount,
    barStackedSeriesKeys,
    hasMultipleSeries,
    applyRadius,
    assignColorsToValues,
    getHighlightedBarColorByValue,
    getHighlightedBarByValue,
    getAdditionalColumn,
    hoveredBar,
    setHoveredBar,
    onMouseOverBar,
    onMouseLeaveBar
  }
}
