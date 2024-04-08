import { bisector } from '@visx/vendor/d3-array'
import { scaleLinear, scaleTime } from '@visx/scale'
import { useContext } from 'react'
import ConfigContext from '../../../ConfigContext'
import { formatDate, isDateScale } from '@cdc/core/helpers/cove/date.js'
import { timeParse, timeFormat } from 'd3-time-format'

const invertedScaleValue = (value, xScale, data) => {
  const range = xScale.range()
  const domain = xScale.domain()
  const percent = (value - range[0]) / (range[1] - range[0])
  const index = Math.floor((domain.length - 1) * percent)
  if (index >= domain.length) {
    return data[domain.length - 1]
  }
  return data[index]
}

const findNearestDatum = ({ data, xScale, yScale, config }, xPosition) => {
  const { xAxis, visualizationType, orientation } = config

  const parseDate = (dateString, showError = true) => {
    let date = timeParse(config.runtime[config.xAxis.dataKey].dateParseFormat)(dateString)
    if (!date) {
      if (showError) {
        config.runtime.editorErrorMessage = `Error parsing date "${dateString}". Try reviewing your data and date parse settings in the X Axis section.`
      }
      return new Date()
    } else {
      return date
    }
  }

  const getXValueFromCoordinate = (x, isClick = false) => {
    if (visualizationType === 'Pie') return
    if (orientation === 'horizontal') return

    // Check the type of x equal to point or if the type of xAxis is equal to continuous or date
    if (config.xAxis.type === 'categorical' || (visualizationType === 'Combo' && orientation !== 'horizontal' && visualizationType !== 'Forest Plot')) {
      let range = xScale.range()[1] - xScale.range()[0]
      let eachBand = range / (xScale.domain().length + 1)

      let numerator = x
      const index = Math.floor((Number(numerator) - eachBand / 2) / eachBand)
      return xScale.domain()[index] // fixes off by 1 error
    }
  }

  const invertedXValue = getXValueFromCoordinate(xPosition - Number(config.yAxis.size || 0))
  console.log('inverted', invertedXValue)
  if (!invertedScaleValue) return { x: 0, y: 0 }

  const closestSeries = config.data.filter(d => d[config.xAxis.dataKey] === invertedXValue)
  if (closestSeries.length === 0) return { x: 0, y: 0 }
  console.log('closest', closestSeries)
  const yValues = config.runtime.seriesLabelsAll?.map(key => closestSeries[0][key]) // Map each key to its corresponding value in data
  const x = invertedXValue
  const y = yValues
  console.log('y', y)

  return { x, y }
}

export { findNearestDatum }
