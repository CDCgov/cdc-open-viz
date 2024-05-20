import { useContext } from 'react'
import ConfigContext from '../ConfigContext'
import { type ChartContext } from '../types/ChartContext'

// third party
import { localPoint } from '@visx/event'
import { bisector } from 'd3-array'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
const transform = new DataTransform()

import { formatNumber as formatColNumber } from '@cdc/core/helpers/cove/number'
import { isDateScale } from '@cdc/core/helpers/cove/date'

export const useTooltip = props => {
  const { tableData, config, formatNumber, capitalize, formatDate, formatTooltipsDate, parseDate, setSharedFilter } = useContext<ChartContext>(ConfigContext)
  const { xScale, yScale, showTooltip, hideTooltip } = props
  const { xAxis, visualizationType, orientation, yAxis, runtime } = config
  const data = transform.applySuppression(tableData, config.suppressedData)
  /**
   * Provides the tooltip information based on the tooltip data array and svg cursor coordinates
   * @function getTooltipInformation
   * @param {Array} tooltipDataArray - The array containing the tooltip data.
   * @param {Object} eventSvgCoords - The object containing the SVG coordinates of the event.
   * @return {Object} - The tooltip information with tooltip data.
   */
  const getTooltipInformation = (tooltipDataArray, eventSvgCoords) => {
    const { x, y } = eventSvgCoords
    let initialTooltipData = tooltipDataArray || {}

    const tooltipData = {
      data: initialTooltipData,
      dataXPosition: x + 10,
      dataYPosition: y
    }

    const tooltipInformation = {
      tooltipLeft: tooltipData.dataXPosition,
      tooltipTop: tooltipData.dataYPosition,
      tooltipData: tooltipData
    }

    return tooltipInformation
  }

  /**
   * Handles the mouse over event for the tooltip.
   * @function handleTooltipMouseOver
   * @param {Event} e - The event object.
   * @return {void} - The tooltip information is displayed
   */
  const handleTooltipMouseOver = (e, additionalChartData) => {
    e.stopPropagation()
    const eventSvgCoords = localPoint(e)
    const { x, y } = eventSvgCoords

    // Additional data for pie charts
    const { data: pieChartData, arc } = additionalChartData ?? {}

    const closestXScaleValue = getXValueFromCoordinate(x - Number(config.yAxis.size || 0))

    const includedSeries = visualizationType !== 'Pie' ? config.series.filter(series => series.tooltip === true).map(item => item.dataKey) : config.series.map(item => item.dataKey)
    includedSeries.push(config.xAxis.dataKey)
    if (config.visualizationType === 'Forecasting') {
      config.series.map(s => {
        s.confidenceIntervals.map(c => {
          if (c.showInTooltip) {
            includedSeries.push(c.high)
            includedSeries.push(c.low)
          }
        })
      })
    }
    function getColumnNames(columns) {
      let names = []
      for (let key in columns) {
        if (columns.hasOwnProperty(key)) {
          names.push(columns[key].name)
        }
      }
      return names
    }
    includedSeries.push(...getColumnNames(config.columns))
    includedSeries.push(...getColumnNames(config.columns))

    const yScaleValues = getYScaleValues(closestXScaleValue, includedSeries)
    const xScaleValues = data.filter(d => d[xAxis.dataKey] === getClosestYValue(y))

    const resolvedScaleValues = orientation === 'vertical' ? yScaleValues : xScaleValues

    const getAxisPosition = seriesKey => {
      const seriesObj = config.series.filter(s => s.dataKey === seriesKey)[0]
      const position = seriesObj?.axis ? String(seriesObj.axis).toLowerCase() : 'left'
      return position
    }

    const getTooltipDataArray = () => {
      const columns = config.columns
      const columnsWithTooltips = []
      const tooltipItems = []

      for (const [colKeys, colVals] of Object.entries(columns)) {
        const formattingParams = {
          addColPrefix: config.columns[colKeys].prefix,
          addColSuffix: config.columns[colKeys].suffix,
          addColRoundTo: config.columns[colKeys].roundToPlace ? config.columns[colKeys].roundToPlace : '',
          addColCommas: config.columns[colKeys].commas
        }
        let closestValue = null

        if (config.visualizationType === 'Pie') {
          closestValue = arc?.data[colVals.name]
        } else {
          closestValue = resolvedScaleValues[0]?.[colVals.name]
        }

        const formattedValue = formatColNumber(closestValue, 'left', true, config, formattingParams)

        if (colVals.tooltips) {
          columnsWithTooltips.push([colVals.label, formattedValue])
        }
      }
      const additionalTooltipItems = []

      columnsWithTooltips.forEach(columnData => {
        additionalTooltipItems.push([columnData[0], columnData[1]])
      })

      if (visualizationType === 'Pie') {
        tooltipItems.push(
          // ignore
          [config.xAxis.dataKey, pieChartData],
          [config.runtime.yAxis.dataKey, formatNumber(arc?.data[config.runtime.yAxis.dataKey])],
          ['Percent', `${Math.round((((arc?.endAngle - arc?.startAngle) * 180) / Math.PI / 360) * 100) + '%'}`]
        )
      }

      if (visualizationType === 'Forest Plot') {
        tooltipItems.push([config.xAxis.dataKey, getClosestYValue(y)])
      }

      if (visualizationType !== 'Pie' && visualizationType !== 'Forest Plot') {
        tooltipItems.push(
          ...getIncludedTooltipSeries()
            ?.filter(seriesKey => config.series?.find(item => item.dataKey === seriesKey && item?.tooltip) || config.xAxis?.dataKey == seriesKey)
            ?.flatMap(seriesKey => {
              let formattedValue = seriesKey === config.xAxis.dataKey ? resolvedScaleValues[0]?.[seriesKey] : formatNumber(resolvedScaleValues[0]?.[seriesKey], getAxisPosition(seriesKey))
              return resolvedScaleValues?.[0]?.[seriesKey] ? [[seriesKey, formattedValue, getAxisPosition(seriesKey)]] : []
            })
        )
      }

      return [...tooltipItems, ...additionalTooltipItems]
    }

    // Returns an array of arrays.
    // ie. [ ['Date', '01/01/2023'], ['close', 300] ]
    const tooltipDataArray = getTooltipDataArray()

    if (!tooltipDataArray) return
    const tooltipInformation = getTooltipInformation(tooltipDataArray, eventSvgCoords)
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

      data.forEach(d => {
        const xPosition = isDateScale(xAxis) ? xScale(parseDate(d[xAxis.dataKey])) : xScale(d[xAxis.dataKey])
        let bwOffset = config.barHeight
        const distance = Math.abs(Number(xPosition - offset + (isClick ? bwOffset * 2 : 0)))

        if (distance <= minDistance) {
          minDistance = distance
          closestX = isDateScale(xAxis) ? d[xAxis.dataKey] : d[xAxis.dataKey]
        }
      })
      return closestX
    }

    if (config.xAxis.type === 'categorical' || (visualizationType === 'Combo' && orientation !== 'horizontal' && visualizationType !== 'Forest Plot')) {
      let range = xScale.range()[1] - xScale.range()[0]
      let eachBand = range / (xScale.domain().length + 1)

      let numerator = x
      const index = Math.floor((Number(numerator) - eachBand / 2) / eachBand)
      return xScale.domain()[index] // fixes off by 1 error
    }

    if (isDateScale(xAxis) && visualizationType !== 'Combo' && orientation !== 'horizontal') {
      const bisectDate = bisector(d => parseDate(d[config.xAxis.dataKey])).left
      const x0 = xScale.invert(x)
      const index = bisectDate(config.data, x0, 1)
      const val = parseDate(config.data[index - 1][config.xAxis.dataKey])
      return val
    }
  }

  const getClosestYValue = (yPosition, key) => {
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
   * Provides an array of objects with the closest y series data items
   * @param {String} closestXScaleValue
   * @param {Array} includedSeries
   * @returns an array of objects with the closest y series data items
   */
  const getYScaleValues = (closestXScaleValue, includedSeries) => {
    try {
      let dataToSearch

      if (xAxis.type === 'categorical') {
        dataToSearch = data.filter(d => d[xAxis.dataKey] === closestXScaleValue)
      } else {
        dataToSearch = data.filter(d => d[xAxis.dataKey] === closestXScaleValue)
      }
      // Return an empty array if no matching data is found.
      if (!dataToSearch || dataToSearch.length === 0) {
        return []
      }

      const yScaleValues = dataToSearch.map(object => {
        return Object.fromEntries(Object.entries(object).filter(([key, value]) => includedSeries.includes(key)))
      })

      return yScaleValues
    } catch (error) {
      console.error('COVE', error)
    }
  }

  /**
   * Retrieves an array of items to be included in a tooltip.
   *
   * @function getIncludedTooltipSeries
   * @returns {Array} Array of items to be included in the tooltip.
   */
  const getIncludedTooltipSeries = () => {
    try {
      let standardLoopItems

      let stageColumns = []
      let ciItems = []

      // loop through series for items to add to tooltip.
      // there is probably a better way of doing this.
      config.series?.forEach(s => {
        if (s.type === 'Forecasting') {
          stageColumns.push(s.stageColumn)

          s?.confidenceIntervals.forEach(ci => {
            if (ci.showInTooltip === true) {
              ciItems.push(ci.low)
              ciItems.push(ci.high)
            }
          })
        }
      })

      if (!config.dashboard) {
        switch (visualizationType) {
          case 'Combo':
            standardLoopItems = [runtime.xAxis.dataKey, ...runtime?.seriesKeys, ...ciItems]
            break
          case 'Forecasting':
            standardLoopItems = [runtime.xAxis.dataKey, ...stageColumns, ...ciItems]
            break
          case 'Line':
            standardLoopItems = [runtime.xAxis.dataKey, ...runtime?.seriesKeys]
            break
          case 'Area Chart':
            standardLoopItems = [runtime.xAxis.dataKey, ...runtime?.seriesKeys]
            break
          case 'Bar':
            standardLoopItems = orientation === 'vertical' ? [runtime.xAxis.dataKey, ...runtime?.seriesKeys] : [runtime.yAxis.dataKey, ...runtime?.seriesKeys]
            break
          case 'Pie':
            standardLoopItems = [runtime.xAxis.dataKey, ...runtime?.seriesKeys]
          default:
            throw new Error('No visualization type found in handleTooltipMouseOver')
        }
      }

      if (config.dashboard) {
        standardLoopItems = [runtime.xAxis.dataKey, ...runtime?.barSeriesKeys, ...runtime?.lineSeriesKeys, ...stageColumns, ...ciItems]
      }

      return standardLoopItems
    } catch (error) {
      console.error('COVE', error)
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
    let series = config.series.filter(s => s.dataKey === originalColumnName)
    if (series[0]?.name) return series[0]?.name
    return originalColumnName
  }

  const TooltipListItem = ({ item }) => {
    const [index, additionalData] = item
    const [key, value, axisPosition] = additionalData

    if (visualizationType === 'Forest Plot') {
      if (key === config.xAxis.dataKey) return <li className='tooltip-heading'>{`${capitalize(config.xAxis.dataKey ? `${config.xAxis.dataKey}: ` : '')} ${isDateScale(yAxis) ? formatDate(parseDate(key, false)) : value}`}</li>
      return <li className='tooltip-body'>{`${getSeriesNameFromLabel(key)}: ${formatNumber(value, 'left')}`}</li>
    }
    const formattedDate = config.tooltips.dateDisplayFormat ? formatTooltipsDate(parseDate(value, false)) : formatDate(parseDate(value, false))

    // TOOLTIP HEADING
    if (visualizationType === 'Bar' && orientation === 'horizontal' && key === config.xAxis.dataKey) return <li className='tooltip-heading'>{`${capitalize(config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ` : '')} ${config.xAxis.type === 'date' ? formattedDate : value}`}</li>

    if (key === config.xAxis.dataKey) return <li className='tooltip-heading'>{`${capitalize(config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ` : '')} ${isDateScale(xAxis) ? formattedDate : value}`}</li>

    // TOOLTIP BODY
    return <li className='tooltip-body'>{`${getSeriesNameFromLabel(key)}: ${value}`}</li>
  }

  return {
    getIncludedTooltipSeries,
    getXValueFromCoordinate,
    getXValueFromCoordinateDate,
    getYScaleValues,
    handleTooltipClick,
    handleTooltipMouseOff,
    handleTooltipMouseOver,
    TooltipListItem,
    tooltipStyles
  }
}
