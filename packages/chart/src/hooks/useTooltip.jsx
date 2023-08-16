import { useContext } from 'react'
import ConfigContext from '../ConfigContext'

// third party
import { localPoint } from '@visx/event'
import { bisector } from 'd3-array'

export const useTooltip = props => {
  const { isEditor, transformedData: data, config, formatNumber, capitalize, formatDate, parseDate, rawData } = useContext(ConfigContext)
  const { xScale, yScale, showTooltip, hideTooltip } = props
  const { xAxis, visualizationType, orientation, yAxis, runtime } = config

  /**
   * Provides the tooltip information based on the tooltip data array and svg cursor coordinates
   * @function getTooltipInformation
   * @param {Array} tooltipDataArray - The array containing the tooltip data.
   * @param {Object} eventSvgCoords - The object containing the SVG coordinates of the event.
   * @return {Object} - The tooltip information with tooltip data.
   */
  const getTooltipInformation = (tooltipDataArray, eventSvgCoords) => {
    const { x, y } = eventSvgCoords
    let initialTooltipData = tooltipDataArray ? tooltipDataArray : {}
    let tooltipData = {}
    tooltipData.data = initialTooltipData
    tooltipData.dataXPosition = x + 10
    tooltipData.dataYPosition = y

    const tooltipInformation = {
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
    const eventSvgCoords = localPoint(e)
    const { x, y } = eventSvgCoords

    // Additional data for pie charts
    const { data: pieChartData, arc } = additionalChartData

    const closestXScaleValue = getXValueFromCoordinate(x)

    const includedSeries = visualizationType !== 'Pie' ? config.series.filter(series => series.tooltip === true).map(item => item.dataKey) : config.series.map(item => item.dataKey)
    includedSeries.push(config.xAxis.dataKey)
    const yScaleValues = getYScaleValues(closestXScaleValue, includedSeries)
    const xScaleValues = data.filter(d => d[xAxis.dataKey] === getClosestYValue(y))
    const resolvedScaleValues = orientation === 'vertical' ? yScaleValues : xScaleValues

    console.log('resolvedYScaleValues', resolvedScaleValues)

    // Returns an array of arrays.
    // ie. [ ['Date', '01/01/2023'], ['close', 300] ]
    const tooltipDataArray =
      visualizationType !== 'Pie'
        ? getIncludedTooltipSeries()
            .filter(Boolean)
            .flatMap(seriesKey => {
              return resolvedScaleValues[0][seriesKey] ? [[seriesKey, resolvedScaleValues[0][seriesKey]]] : []
            })
        : [
            [config.xAxis.dataKey, pieChartData],
            [config.runtime.yAxis.dataKey, formatNumber(arc.data[config.runtime.yAxis.dataKey])],
            ['Percent', `${Math.round((((arc.endAngle - arc.startAngle) * 180) / Math.PI / 360) * 100) + '%'}`]
          ]

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

    if (config.xAxis.type === 'date' && config.visualizationType !== 'Combo') {
      const bisectDate = bisector(d => parseDate(d[config.xAxis.dataKey])).left
      const x0 = xScale.invert(xScale(x)) // GETTING INVALID DATE ****
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
  const getXValueFromCoordinate = x => {
    if (visualizationType === 'Pie') return
    if (orientation === 'horizontal') return
    if (xScale.type === 'point') {
      // Find the closest x value by calculating the minimum distance
      let closestX = null
      let minDistance = Number.MAX_VALUE
      let offset = x - yAxis.size

      data.forEach(d => {
        const xPosition = xAxis.type === 'date' ? xScale(parseDate(d[xAxis.dataKey])) : xScale(d[xAxis.dataKey])
        const distance = Math.abs(Number(xPosition - offset))

        if (distance < minDistance) {
          minDistance = distance
          closestX = xAxis.type === 'date' ? parseDate(d[xAxis.dataKey]) : d[xAxis.dataKey]
        }
      })
      return closestX
    }

    if (config.xAxis.type === 'categorical' || (visualizationType === 'Combo' && orientation !== 'horizontal' && visualizationType !== 'Forest Plot')) {
      let eachBand = xScale.step()
      let numerator = x
      const index = Math.floor(Number(numerator) / eachBand)
      return xScale.domain()[index - 1] // fixes off by 1 error
    }

    if (config.xAxis.type === 'date' && visualizationType !== 'Combo' && orientation !== 'horizontal') {
      const bisectDate = bisector(d => parseDate(d[config.xAxis.dataKey])).left
      const x0 = xScale.invert(x)
      const index = bisectDate(config.data, x0, 1)
      const val = parseDate(config.data[index - 1][config.xAxis.dataKey])
      return val
    }
  }

  const getClosestYValue = yPosition => {
    if (visualizationType === 'Pie') return
    let minDistance = Number.MAX_VALUE
    let closestYValue = null

    data.forEach((d, index) => {
      const yPositionOnPlot = yScale(d[config.xAxis.dataKey])

      const distance = Math.abs(yPositionOnPlot - yPosition)

      if (distance < minDistance) {
        minDistance = distance
        closestYValue = d[config.xAxis.dataKey]
      }
    })
    return closestYValue
  }

  // Tooltip helper for getting data to the closest y value hovered.
  const handleForestPlotMouseOver = e => {
    const eventSvgCoords = localPoint(e)

    if (!eventSvgCoords) return
    const { x, y } = eventSvgCoords

    // Function to get the closest y-axis value from the cursor's position
    // Function to get the closest y-axis value from the cursor's position
    const getClosestYValue = yPosition => {
      let minDistance = Number.MAX_VALUE
      let closestYValue = null

      data.forEach((d, index) => {
        const yPositionOnPlot = yScale(index)
        const distance = Math.abs(yPositionOnPlot - yPosition)

        if (distance < minDistance) {
          minDistance = distance
          closestYValue = d[config.xAxis.dataKey]
        }
      })
      return closestYValue
    }

    const xValue = data?.filter(d => d[xAxis.dataKey] === getClosestYValue(y))[0][config.forestPlot.estimateField]

    let standardLoopItems = [
      [config.xAxis.dataKey, getClosestYValue(y)],
      ['Estimate', xValue]
    ]

    let initialTooltipData = standardLoopItems ? standardLoopItems : {}

    let tooltipData = {}
    tooltipData.data = initialTooltipData
    tooltipData.dataXPosition = isEditor ? x + 10 : x + 10
    tooltipData.dataYPosition = y

    let tooltipInformation = {
      tooltipData: tooltipData,
      tooltipTop: 0,
      tooltipValues: 'test',
      tooltipLeft: x
    }

    showTooltip(tooltipInformation)
  }

  /**
   * handleTooltipClick - used on dashboard filters
   *  with visx tooltips, the handler is overwritten and we have to get the closest
   *  x axis value.
   * TODO: move tooltip handlers to there own hook.
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
      let closestXScaleValue = getXValueFromCoordinate(x)
      if (!closestXScaleValue) throw new Error('COVE: no closest x scale value in handleTooltipClick')
      let datum = config.data.filter(item => item[config.xAxis.dataKey] === closestXScaleValue)

      if (setSharedFilter) {
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
    const formattedDate = formatDate(closestXScaleValue)

    let dataToSearch

    if (xAxis.type === 'categorical') {
      dataToSearch = data.filter(d => d[xAxis.dataKey] === closestXScaleValue)
    } else {
      dataToSearch = rawData.filter(d => formatDate(parseDate(d[xAxis.dataKey])) === formattedDate)
    }

    console.log('data to search', dataToSearch)

    // Return an empty array if no matching data is found.
    if (!dataToSearch || dataToSearch.length === 0) {
      return []
    }

    const yScaleValues = dataToSearch.map(object => {
      return Object.fromEntries(Object.entries(object).filter(([key, value]) => includedSeries.includes(key)))
    })

    return yScaleValues
  }

  /**
   * Retrieves an array of items to be included in a tooltip.
   *
   * @function getIncludedTooltipSeries
   * @returns {Array} Array of items to be included in the tooltip.
   */
  const getIncludedTooltipSeries = () => {
    let standardLoopItems

    let stageColumns = []
    let ciItems = []

    // loop through series for items to add to tooltip.
    // there is probably a better way of doing this.
    config.series?.forEach(s => {
      if (s.type === 'Forecasting') {
        stageColumns.push(s.stageColumn)

        // greedy fn 😭
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
          standardLoopItems = [runtime.xAxis.dataKey, ...runtime?.barSeriesKeys, ...runtime?.lineSeriesKeys, ...stageColumns, ...ciItems]
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
          console.info('COVE: no visualization type found in handleTooltipMouseOver')
          break
      }
    }

    if (config.dashboard) {
      standardLoopItems = [runtime.xAxis.dataKey, ...runtime?.barSeriesKeys, ...runtime?.lineSeriesKeys, ...stageColumns, ...ciItems]
    }

    return standardLoopItems
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

  const TooltipListItem = ({ item }) => {
    const [index, keyValue] = item
    const [key, value] = keyValue

    console.log('key', key)
    console.log('key', config.xAxis.dataKey)

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

    if (visualizationType === 'Forest Plot') {
      if (key === config.xAxis.dataKey) return <li className='tooltip-heading'>{`${capitalize(config.xAxis.dataKey ? `${config.xAxis.dataKey}: ` : '')} ${config.yAxis.type === 'date' ? formatDate(parseDate(key, false)) : value}`}</li>
      return <li className='tooltip-body'>{`${getSeriesNameFromLabel(key)}: ${formatNumber(value, 'left')}`}</li>
    }

    if (visualizationType === 'Bar' && orientation === 'horizontal' && key === config.xAxis.dataKey) return <li className='tooltip-heading'>{`${capitalize(config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ` : '')} ${value}`}</li>
    if (key === config.xAxis.dataKey) return <li className='tooltip-heading'>{`${capitalize(config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ` : '')} ${config.xAxis.type === 'date' ? value : value}`}</li>

    // if (value[0] === config.runtime.yAxis.dataKey) return <li className='tooltip-heading'>{`${capitalize(config.runtime.yAxis.dataKey ? `${config.runtime.yAxis.label}: ` : '')} ${config.xAxis.type === 'date' ? formatDate(parseDate(value[1], false)) : value[1]}`}</li>
    // if (value[0] === config.xAxis.dataKey) return <li className='tooltip-heading'>{`${capitalize(config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ` : '')} ${config.xAxis.type === 'date' ? formatDate(parseDate(value[1], false)) : value[1]}`}</li>
    return <li className='tooltip-body'>{`${getSeriesNameFromLabel(key)}: ${formatNumber(value, 'left')}`}</li>
  }

  return {
    getIncludedTooltipSeries,
    getXValueFromCoordinate,
    getXValueFromCoordinateDate,
    getYScaleValues,
    handleForestPlotMouseOver,
    handleTooltipClick,
    handleTooltipMouseOff,
    handleTooltipMouseOver,
    TooltipListItem,
    tooltipStyles
  }
}
