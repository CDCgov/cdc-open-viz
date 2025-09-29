import { useContext } from 'react'
// Local imports
import parse from 'html-react-parser'
import ConfigContext from '../ConfigContext'
import { type ChartContext } from '../types/ChartContext'
import { formatNumber as formatColNumber } from '@cdc/core/helpers/cove/number'
import { isDateScale } from '@cdc/core/helpers/cove/date'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
// Third-party library imports
import { localPoint } from '@visx/event'
import { bisector } from 'd3-array'
import _ from 'lodash'
import { getHorizontalBarHeights } from '../components/BarChart/helpers/getBarHeights'

export const useTooltip = props => {
  const {
    tableData: data,
    config,
    formatNumber,
    capitalize,
    formatDate,
    formatTooltipsDate,
    parseDate,
    setSharedFilter,
    isDraggingAnnotation
  } = useContext<ChartContext>(ConfigContext)
  const { xScale, yScale, seriesScale, showTooltip, hideTooltip, interactionLabel = '' } = props
  const { xAxis, visualizationType, orientation, yAxis, runtime } = config

  const Y_AXIS_SIZE = Number(config.yAxis.size || 0)

  // function handles only Single series hovered data tooltips
  const findDataKeyByThreshold = (mouseY, datapoint) => {
    let hoveredKey = null
    let hoveredValue = null
    const dynamicSeries = config.series.find(s => s.dynamicCategory)
    if (dynamicSeries) {
      hoveredKey = datapoint[dynamicSeries.dynamicCategory]
      hoveredValue = datapoint[dynamicSeries.dataKey]
    } else {
      let sum = 0
      let threshold
      try {
        threshold = Number(yScale.invert(mouseY))
      } catch (e) {
        return []
      }
      for (let key of config.runtime?.seriesKeys) {
        if (datapoint.hasOwnProperty(key)) {
          sum += Number(datapoint[key])
          if (sum >= threshold) {
            hoveredValue = datapoint[key]
            hoveredKey = key
            break
          }
        }
      }
    }

    // Return null if no matching data is found
    return [hoveredKey, hoveredValue]
  }

  const getFormattedValue = (seriesKey, value, config, getAxisPosition) => {
    // handle case where data is missing
    const showMissingDataValue = config.general.showMissingDataLabel && (!value || value === 'null')
    const formattedValue = seriesKey === config.xAxis.dataKey ? value : formatNumber(value, getAxisPosition(seriesKey))

    return showMissingDataValue ? 'N/A' : formattedValue
  }

  /**
   * Handles the mouse over event for the tooltip.
   * @function handleTooltipMouseOver
   * @param {Event} e - The event object.
   * @return {void} - The tooltip information is displayed
   */
  const handleTooltipMouseOver = (e, additionalChartData) => {
    if (visualizationType === 'Bump Chart') return
    //e.stopPropagation()
    if (isDraggingAnnotation) return

    const eventSvgCoords = localPoint(e)
    const { x, y } = eventSvgCoords

    const resolvedScaleValues = getResolvedScaleValues([x, y])
    const singleSeriesValue = getYValueFromCoordinate(y, resolvedScaleValues)
    const columnsWithTooltips = []
    const tooltipItems = [] as any[][]
    for (const [colKey, column] of Object.entries(config.columns)) {
      const formattingParams = {
        addColPrefix: column.prefix,
        addColSuffix: column.suffix,
        addColRoundTo: column.roundToPlace || '',
        addColCommas: column.commas
      }

      const pieColumnData = additionalChartData?.arc?.data[column.name]
      const columnData =
        config.tooltips.singleSeries && visualizationType === 'Line'
          ? resolvedScaleValues.filter(
              value => value[config.runtime.series[0].dynamicCategory] === singleSeriesValue
            )[0][colKey]
          : resolvedScaleValues[0]?.[colKey]
      const closestValue = config.visualizationType === 'Pie' ? pieColumnData : columnData

      const formattedValue = formatColNumber(closestValue, 'left', true, config, formattingParams)

      if (column.tooltips) {
        columnsWithTooltips.push([column.label, formattedValue])
      }
    }
    const additionalTooltipItems = [] as [string, string | number][]

    columnsWithTooltips.forEach(columnData => {
      additionalTooltipItems.push([columnData[0], columnData[1]])
    })

    if (visualizationType === 'Pie') {
      const roundTo = Number(config.dataFormat.roundTo) || 0

      const pieData = additionalChartData?.data ?? {}
      const startAngle = additionalChartData?.startAngle ?? 0
      const endAngle = additionalChartData?.endAngle ?? 0
      const actualPieValue = Number(additionalChartData.data[config?.yAxis?.dataKey])

      const degrees = ((endAngle - startAngle) * 180) / Math.PI
      const pctOf360 = (degrees / 360) * 100
      const pctString = value => value.toFixed(roundTo) + '%'
      const showPiePercent = config.dataFormat.showPiePercent || false

      if (showPiePercent && pieData[config.xAxis.dataKey] === 'Calculated Area') {
        tooltipItems.push(['', 'Calculated Area'])
      } else {
        // Track hover analytics event for pie chart series
        if (pieData[config.xAxis.dataKey] && interactionLabel) {
          const seriesName = String(pieData[config.xAxis.dataKey]).replace(/[^a-zA-Z0-9]/g, '_')
          publishAnalyticsEvent(`chart_hover_${seriesName.toLowerCase()}`, 'hover', interactionLabel, 'chart', {
            title: config?.title,
            series: pieData[config.xAxis.dataKey]
          })
        }

        tooltipItems.push(
          [config.xAxis.dataKey, pieData[config.xAxis.dataKey]],
          [
            config.runtime.yAxis.dataKey,
            showPiePercent ? pctString(actualPieValue) : formatNumber(pieData[config.runtime.yAxis.dataKey])
          ],
          showPiePercent ? [] : ['Percent', pctString(pctOf360)]
        )
      }
    }

    if (visualizationType === 'Forest Plot') {
      tooltipItems.push([config.xAxis.dataKey, getClosestYValue(y)])
    }

    const isLinearChart = !['Pie', 'Forest Plot'].includes(visualizationType)
    if (isLinearChart) {
      const getAxisPosition = seriesKey => {
        const seriesObj = config.runtime.series.filter(s => s.dataKey === seriesKey)[0]
        const position = seriesObj?.axis ? String(seriesObj.axis).toLowerCase() : 'left'
        return position
      }
      if (!config.tooltips.singleSeries || visualizationType === 'Line') {
        tooltipItems.push(
          ...getIncludedTooltipSeries()
            ?.filter(seriesKey => {
              const series = config.runtime.series?.find(
                s => s.dataKey === seriesKey && s?.tooltip && !s.dynamicCategory
              )
              return series || config.xAxis?.dataKey == seriesKey || visualizationType === 'Forecasting'
            })
            ?.flatMap(seriesKey => {
              const value = resolvedScaleValues[0]?.[seriesKey]
              const formattedValue = getFormattedValue(seriesKey, value, config, getAxisPosition)
              const seriesObjWithName = config.runtime.series.find(
                series => series.dataKey === seriesKey && series.name !== undefined
              )

              // Track hover analytics event for linear chart series
              if (interactionLabel && seriesKey && seriesKey !== config.xAxis?.dataKey) {
                const seriesName = seriesObjWithName?.name || seriesKey
                const safeSeriesName = String(seriesName).replace(/[^a-zA-Z0-9]/g, '_')
                publishAnalyticsEvent(
                  `chart_hover_${safeSeriesName.toLowerCase()}`,
                  'hover',
                  interactionLabel,
                  'chart',
                  {
                    title: config?.title,
                    series: seriesName
                  }
                )
              }

              if (
                (value === null || value === undefined || value === '' || formattedValue === 'N/A') &&
                config.general.hideNullValue
              ) {
                return []
              } else if (seriesObjWithName && seriesObjWithName.name === '') {
                return [['', formattedValue, getAxisPosition(seriesKey)]]
              } else {
                return [[seriesKey, formattedValue, getAxisPosition(seriesKey)]]
              }
            })
        )

        const runtimeSeries =
          config.tooltips.singleSeries && visualizationType === 'Line'
            ? [_.find(config.runtime.series, d => d.dataKey === singleSeriesValue)]
            : config.runtime.series

        runtimeSeries?.forEach(series => {
          if (series?.dynamicCategory) {
            const seriesKey = series.dataKey
            const resolvedScaleValue = resolvedScaleValues.find(v => v[series.dynamicCategory] === seriesKey)
            if (resolvedScaleValue) {
              const value = resolvedScaleValue[series.originalDataKey]
              const formattedValue = getFormattedValue(seriesKey, value, config, getAxisPosition)
              tooltipItems.push([seriesKey, formattedValue, getAxisPosition(seriesKey)])
            }
          }
        })
      } else {
        const dynamicSeries = config.series.find(s => s.dynamicCategory)

        // Show Only the Hovered Series in Tooltip
        const dataColumn = resolvedScaleValues[0]
        const [seriesKey, value] = findDataKeyByThreshold(y, dataColumn)
        if (seriesKey && value) {
          const xVal = dataColumn[config.xAxis.dataKey]
          const closestXScaleValue = getXValueFromCoordinate(x - Y_AXIS_SIZE)

          tooltipItems.push([config.xAxis.dataKey, closestXScaleValue || xVal])
          const formattedValue = getFormattedValue(seriesKey, value, config, getAxisPosition)
          tooltipItems.push([seriesKey, formattedValue])
        } else if (dynamicSeries) {
          Object.keys(dataColumn).forEach(key => {
            tooltipItems.push([key, dataColumn[key]])
          })
        }
      }
    }

    const dataXPosition = eventSvgCoords.x + 10
    const dataYPosition = eventSvgCoords.y

    const tooltipInformation = {
      tooltipLeft: dataXPosition,
      tooltipTop: dataYPosition,
      tooltipData: {
        data: [...tooltipItems, ...additionalTooltipItems],
        dataXPosition,
        dataYPosition
      }
    }
    showTooltip(tooltipInformation)
  }

  /**
   * Handles the mouse off event for the tooltip.
   * @function handleTooltipMouseOff
   * @returns {void} - The tooltip information is hidden
   */
  const handleTooltipMouseOff = () => {
    if (config.visualizationType === 'Area Chart') {
      setTimeout(() => {
        hideTooltip()
      }, 3000)
    } else {
      hideTooltip()
    }
  }

  /**
   * Helper for getting data to the closest date/category hovered.
   * @function getXValueFromCoordinateDate
   * @returns {String} - the closest x value to the cursor position
   */
  const getXValueFromCoordinateDate = x => {
    if (config.xAxis.type === 'categorical' || config.visualizationType === 'Combo') {
      let eachBand = xScale.step()
      let numerator = x
      const index = Math.floor(Number(numerator) / eachBand)
      return xScale.domain()[index - 1] // fixes off by 1 error
    }

    if (isDateScale(config.xAxis) && config.visualizationType !== 'Combo') {
      const bisectDate = bisector(d => parseDate(d[config.xAxis.dataKey])).left
      const x0 = xScale.invert(xScale(x))
      const index = bisectDate(config.data, x0, 1)
      const val = parseDate(config.data[index - 1][config.xAxis.dataKey])
      return val
    }
  }

  /**
   * Helper for getting data to the closest date/category hovered.
   * @function getXValueFromCoordinate
   * @returns {String} - the closest x value to the cursor position
   */
  const getXValueFromCoordinate = (x, isClick = false) => {
    if (visualizationType === 'Pie') return
    if (orientation === 'horizontal') return

    // Check the type of x equal to point or if the type of xAxis is equal to continuous or date
    if (xScale.type === 'point' || xAxis.type === 'continuous' || isDateScale(xAxis)) {
      // Find the closest x value by calculating the minimum distance
      let closestX = null
      let minDistance = Number.MAX_VALUE
      let offset = x

      const barThicknessOffset = config.xAxis.type === 'date' ? xScale.bandwidth() / 2 : 0
      data.forEach(d => {
        const xPosition = isDateScale(xAxis) ? xScale(parseDate(d[xAxis.dataKey])) : xScale(d[xAxis.dataKey])
        let bwOffset = config.barHeight
        const distance = Math.abs(Number(xPosition + barThicknessOffset - offset + (isClick ? bwOffset * 2 : 0)))

        if (distance <= minDistance) {
          minDistance = distance
          closestX = isDateScale(xAxis) ? d[xAxis.dataKey] : d[xAxis.dataKey]
        }
      })
      return closestX
    }

    if (config.xAxis.type === 'categorical' || visualizationType === 'Combo') {
      let range = xScale.range()[1] - xScale.range()[0]
      let eachBand = range / (xScale.domain().length + 1)

      let numerator = x
      const index = Math.floor((Number(numerator) - eachBand / 2) / eachBand)
      return xScale.domain()[index] // fixes off by 1 error
    }
  }

  const findClosest = (dataArray: [any, number][], mouseXorY) => {
    let dataColumn: Object
    dataArray.find(([d, xOrY]) => {
      if (xOrY > mouseXorY) {
        return true
      }
      dataColumn = d
    })
    return dataColumn
  }

  const getYValueFromCoordinate = (y, xData) => {
    let closestYSeriesValue = null
    let minDistance = Number.MAX_VALUE
    let offset = y

    xData.forEach(d => {
      const yPosition = yScale(d[config.runtime.series[0].originalDataKey])
      const distance = Math.abs(Number(yPosition - offset))

      if (distance <= minDistance) {
        minDistance = distance
        closestYSeriesValue = d[config.runtime.series[0].dynamicCategory]
      }
    })
    return closestYSeriesValue
  }

  const getClosestYValueHorizontalChart = mouseY => {
    const barGroups = yScale.domain().map((group, index) => ({ group, index }))
    const barsWithHeights = getHorizontalBarHeights<{ group }>(config, barGroups)

    const barGroup = findClosest(
      barsWithHeights.map(d => [d, _.round(d.y)]),
      mouseY
    )

    const subGroupMouseY = mouseY - barGroup.y
    const columns = data.filter(d => d[config.xAxis.dataKey] === barGroup.group)

    if (config.series.length > 1 && !config.series.find(s => s.dynamicCategory)) {
      const seriesWithY = config.series.map((c, i) => [c, config.barHeight * i]) as [Object, number][]
      const hoveredSeries = findClosest(seriesWithY, subGroupMouseY)
      const exludeColumns = config.series.filter(s => s.dataKey !== hoveredSeries.dataKey).map(s => s.dataKey)
      const dataColumn = _.omit(columns[0], exludeColumns)
      return dataColumn
    } else {
      const columnsWithY = columns.map((c, i) => [c, config.barHeight * i]) as [Object, number][]
      const dataColumn = findClosest(columnsWithY, subGroupMouseY)
      return dataColumn
    }
  }

  const getClosestYValue = (yPosition, key = '') => {
    if (visualizationType === 'Pie') return
    let minDistance = Number.MAX_VALUE
    let closestYValue = null

    data.forEach((d, index) => {
      const yPositionOnPlot = visualizationType !== 'Forest Plot' ? yScale(d[config.xAxis.dataKey]) : yScale(index)

      const distance = Math.abs(yPositionOnPlot - yPosition)
      if (distance < minDistance) {
        minDistance = distance
        closestYValue = key ? d[key] : d[config.xAxis.dataKey]
      }
    })
    return closestYValue
  }

  /**
   * handleTooltipClick - used on dashboard filters
   *  with visx tooltips, the handler is overwritten and we have to get the closest
   *  x axis value.
   *
   * @param {*} e
   * @param {*} data
   */
  const handleTooltipClick = e => {
    try {
      // Get the closest x axis value from the pointer.
      // After getting the closest value, return the data entry with that x scale value.
      // Pass the config.visual uid (not uuid) along with that data entry to setSharedFilters
      if (config.visualizationType === 'Bump Chart') return
      const eventSvgCoords = localPoint(e)
      const { x } = eventSvgCoords
      if (!x) throw new Error('COVE: no x value in handleTooltipClick.')
      let closestXScaleValue = getXValueFromCoordinate(x, true)
      let datum = config.data?.filter(item => item[config.xAxis.dataKey] === closestXScaleValue)
      if (!closestXScaleValue) throw new Error('COVE: no closest x scale value in handleTooltipClick')
      if (isDateScale(xAxis) && closestXScaleValue) {
        closestXScaleValue = new Date(closestXScaleValue)
        closestXScaleValue = formatDate(closestXScaleValue)
        datum = config.data?.filter(item => formatDate(new Date(item[config.xAxis.dataKey])) === closestXScaleValue)
      }

      if (!datum[0]) {
        throw new Error(`COVE: no data found matching the closest xScale value: ${closestXScaleValue}`)
      }

      if (setSharedFilter && config?.uid && datum?.[0]) {
        setSharedFilter(config.uid, datum[0])
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message)
    }
  }

  /**
   * Provides an array of objects with the closest series data items
   */
  const getResolvedScaleValues = ([x, y]) => {
    if (orientation !== 'vertical') {
      if (config.visualizationType === 'Bar' && config.tooltips.singleSeries) {
        return [getClosestYValueHorizontalChart(y)]
      }
      return data.filter(d => d[xAxis.dataKey] === getClosestYValue(y))
    }
    const runtimeSeries = config.runtime.series.filter(
      series => visualizationType === 'Pie' || (series.tooltip === true && !series.dynamicCategory)
    )
    const includedSeries = runtimeSeries.map(item => item.dataKey)
    includedSeries.push(config.xAxis.dataKey)
    // get dynamic category series
    const dynamicDataCategories = _.uniq(
      config.runtime.series.flatMap(series => {
        if (series.dynamicCategory) {
          return [series.dynamicCategory, series.originalDataKey]
        }
      })
    )
    includedSeries.push(...dynamicDataCategories)

    if (config.visualizationType === 'Forecasting') {
      config.runtime.series.map(s => {
        s.confidenceIntervals.map(c => {
          if (c.showInTooltip) {
            includedSeries.push(c.high)
            includedSeries.push(c.low)
          }
        })
      })
    }

    const colNames = Object.values(config.columns).map(column => column.name)
    // @ Murad why are we adding them twice?
    includedSeries.push(...colNames, ...colNames)
    const closestXScaleValue = getXValueFromCoordinate(x - Y_AXIS_SIZE)

    let dataToSearch = (data || []).filter(d => d[xAxis.dataKey] === closestXScaleValue)

    if (config.tooltips.singleSeries && config.visualizationType !== 'Line') {
      const dynamicSeries = config.series.find(s => s.dynamicCategory)
      if (dynamicSeries) {
        const dataWithXScale = dataToSearch.map(
          d => [d, seriesScale(d[dynamicSeries.dynamicCategory])] as [Object, number]
        )
        const xOffset = x - Y_AXIS_SIZE - xScale(closestXScaleValue)
        dataToSearch = [findClosest(dataWithXScale, xOffset)]
      }
    }

    return dataToSearch.map(d => _.pick(d, includedSeries))
  }

  /**
   * Retrieves an array of items to be included in a tooltip.
   *
   * @function getIncludedTooltipSeries
   * @returns {Array} Array of items to be included in the tooltip.
   */
  const getIncludedTooltipSeries = () => {
    const forcastingSeries = config.runtime.series.filter(series => series.type === 'Forecasting')
    const stageColumns = forcastingSeries.map(series => series.stageColumn)
    const ciItems = forcastingSeries.flatMap(series =>
      series.confidenceIntervals?.filter(ci => ci.showInTooltip).map(ci => [ci.low, ci.high])
    )
    const common = [runtime.xAxis.dataKey, ...runtime?.seriesKeys]
    switch (visualizationType) {
      case 'Line':
      case 'Area Chart':
      case 'Pie':
        return common
      case 'Combo':
        return [...common, ...ciItems]
      case 'Forecasting':
        return [runtime.xAxis.dataKey, ...stageColumns, ...ciItems]

      case 'Bar':
        return orientation === 'vertical' ? common : [runtime.yAxis.dataKey, ...runtime?.seriesKeys]
      default:
        throw new Error('No visualization type found in handleTooltipMouseOver')
    }
  }

  /**
   * Updates the tooltip style dynamically, primarily opacity and tooltip x/y positions
   * @param {*} tooltipData
   * @returns {Object} - tooltip styles
   */
  const tooltipStyles = tooltipData => {
    const { dataXPosition, dataYPosition } = tooltipData

    return {
      opacity: config.tooltips.opacity ? config.tooltips.opacity / 100 : 1,
      position: 'absolute',
      backgroundColor: 'white',
      borderRadius: '4px',
      transform: `translate(${dataXPosition}px, ${Number(dataYPosition)}px)`
    }
  }

  /**
   * find the original series and use the name property if available
   * otherwise default back to the original column name.
   * @param {String} input - original columnName
   * @returns user defined series name.
   */
  const getSeriesNameFromLabel = originalColumnName => {
    let series = config.runtime.series.filter(s => s.dataKey === originalColumnName)
    if (series[0]?.name) return series[0]?.name
    return originalColumnName
  }

  const TooltipListItem = ({ item }) => {
    const [index, additionalData] = item
    const [key, value, axisPosition] = additionalData

    if (visualizationType === 'Forest Plot') {
      if (key === config.xAxis.dataKey)
        return (
          <li className='tooltip-heading'>{`${capitalize(config.xAxis.dataKey ? `${config.xAxis.dataKey}: ` : '')} ${
            isDateScale(yAxis) ? formatDate(parseDate(key, false)) : value
          }`}</li>
        )
      return <li className='tooltip-body'>{`${getSeriesNameFromLabel(key)}: ${formatNumber(value, 'left')}`}</li>
    }
    const formattedDate = config.tooltips.dateDisplayFormat
      ? formatTooltipsDate(parseDate(value, false))
      : formatDate(parseDate(value, false))

    // TOOLTIP HEADING
    if (visualizationType === 'Bar' && orientation === 'horizontal' && key === config.xAxis.dataKey)
      return (
        <li className='tooltip-heading'>{`${capitalize(
          config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ` : ''
        )} ${config.xAxis.type === 'date' ? formattedDate : value}`}</li>
      )
    if (visualizationType === 'Pie' && config.dataFormat.showPiePercent && value === 'Calculated Area') {
      return <li className='tooltip-heading'>{`${capitalize('Calculated Area')} `}</li>
    }
    if (key === config.xAxis.dataKey)
      return (
        <li className='tooltip-heading'>{`${capitalize(
          config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ` : ''
        )} ${isDateScale(xAxis) ? formattedDate : value}`}</li>
      )

    // TOOLTIP BODY
    // handle suppressed tooltip items
    const shouldCheckSuppression = config.visualizationSubType !== 'stacked'
    let suppressionEntry
    if (shouldCheckSuppression && config.preliminaryData) {
      suppressionEntry = config.preliminaryData.find(
        pd =>
          pd.label &&
          pd.type === 'suppression' &&
          pd.displayTooltip &&
          value === pd.value &&
          (!pd.column || key === pd.column)
      )
    }

    // Remove suppressed items entirely if not showing symbols
    if (suppressionEntry && !config.general.showSuppressedSymbol) {
      return null
    }

    const { label, displayGray } = suppressionEntry || {}

    let newValue = label || value
    const style = displayGray ? { color: '#8b8b8a' } : {}

    if (index == 1 && config.yAxis?.inlineLabel) {
      newValue = `${config.dataFormat.prefix}${newValue}${config.dataFormat.suffix}`
    }
    const activeLabel = getSeriesNameFromLabel(key)
    const displayText = activeLabel ? `${activeLabel}: ${newValue}` : newValue

    return (
      <li style={style} className='tooltip-body mb-1'>
        {displayText !== undefined ? parse(String(displayText)) : displayText}
      </li>
    )
  }

  return {
    getIncludedTooltipSeries,
    getXValueFromCoordinate,
    getXValueFromCoordinateDate,
    handleTooltipClick,
    handleTooltipMouseOff,
    handleTooltipMouseOver,
    TooltipListItem,
    tooltipStyles
  }
}
