import React, { useContext, useEffect, useState } from 'react'
import ConfigContext from '../ConfigContext'
import { formatNumber as formatColNumber } from '@cdc/core/helpers/cove/number'
import { appFontSize } from '@cdc/core/helpers/cove/fontSettings'
export const useBarChart = () => {
  const { config, colorPalettes, tableData, updateConfig, parseDate, formatDate, setSeriesHighlight, seriesHighlight } =
    useContext(ConfigContext)
  const { orientation } = config
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
    const palettesArr = config.customColors ?? colorPalettes[config.palette]
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
  const updateBars = defaultBars => {
    // function updates  stacked && regular && lollipop horizontal bars
    if (config.visualizationType !== 'Bar' && !isHorizontal) return defaultBars

    const barsArr = [...defaultBars]
    let barHeight

    const heights = {
      stacked: config.barHeight,
      lollipop: lollipopBarWidth
    }

    if (!isStacked) {
      barHeight = heights[config.isLollipopChart ? 'lollipop' : 'stacked'] * stackCount
    } else {
      barHeight = heights.stacked
    }

    const labelHeight = isLabelBelowBar ? appFontSize * 1.2 : 0
    let barSpace = Number(config.barSpace)

    // calculate height of container based height, space and fontSize of labels
    let totalHeight = barsArr.length * (barHeight + labelHeight + barSpace)

    if (isHorizontal) {
      config.heights.horizontal = totalHeight
    }

    // return new updated bars/groupes
    return barsArr.map((bar, i) => {
      // set bars Y dynamically to handle space between bars
      let y = 0
      bar.index !== 0 && (y = (barHeight + barSpace + labelHeight) * i)

      return { ...bar, y: y, height: barHeight }
    })
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
      if (series && config.columns[colKeys].series && config.columns[colKeys].series !== series) return
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

  const onMouseOverBar = (categoryValue, barKey) => {
    if (config.legend.highlightOnHover && config.legend.behavior === 'highlight' && barKey) setSeriesHighlight([barKey])
    setHoveredBar(categoryValue)
  }
  const onMouseLeaveBar = () => {
    if (config.legend.highlightOnHover && config.legend.behavior === 'highlight') setSeriesHighlight([])
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
    updateBars,
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
