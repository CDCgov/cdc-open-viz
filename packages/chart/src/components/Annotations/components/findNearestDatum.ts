import { timeParse } from 'd3-time-format'

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

  if (config.xAxis.type === 'date') {
    const xValue = x // Assuming x is the coordinate on the chart
    const xTimestamp = convertXValueToTimestamp(x, 0, xMax, xScale.domain())

    // Calculate the closest date to the x coordinate
    let closestDate = null
    let minDistance = Number.MAX_VALUE

    xScale.domain().forEach(timestamp => {
      const distance = Math.abs(xTimestamp - timestamp)
      if (distance < minDistance) {
        minDistance = distance
        closestDate = timestamp
      }
    })

    return closestDate
  }

  return x
}

const findNearestDatum = ({ data, xScale, yScale, config, xMax, annotationSeriesKey }, xPosition) => {
  const { xAxis, visualizationType, orientation } = config

  const convertXValueToTimestamp = (xValue, minX, maxX, domain, xScale) => {
    let ticks = []
    if (config.xAxis.type === 'date-time') {
      minX = new Date(minX)
      maxX = new Date(maxX)
      domain = domain.map(d => new Date(d))
      ticks = xScale.ticks().map(d => new Date(d))
    }

    // Calculate the percentage position of xValue between minX and maxX
    const percentage = (xValue - minX) / (maxX - minX)

    // Calculate the index in the domain array corresponding to the percentage position
    const index = Math.round(percentage * (domain.length - 1))

    if (config.xAxis.type === 'date-time') {
      return ticks[index]
    }

    // Return the timestamp from the domain array at the calculated index
    return domain[index]
  }

  const getXValueFromCoordinate = (x, isClick = false) => {
    if (visualizationType === 'Pie') return
    if (orientation === 'horizontal') return

    if (config.xAxis.type === 'date-time') {
      // Calculate the percentage position of xValue between minX and maxX
      const invertedValue = new Date(xScale.invert(x))
      const ticks = config.data.map(d => new Date(d[config.xAxis.dataKey]).getTime())
      let minDistance = Infinity
      let closestDate = null

      ticks.forEach(timestamp => {
        const distance = Math.abs(invertedValue.getTime() - timestamp)
        if (distance < minDistance) {
          minDistance = distance
          closestDate = timestamp
        }
      })

      return new Date(closestDate).getTime()
    }

    // Check the type of x equal to point or if the type of xAxis is equal to continuous or date
    if (config.xAxis.type === 'categorical' || (visualizationType === 'Combo' && orientation !== 'horizontal' && visualizationType !== 'Forest Plot')) {
      const range = xScale.range()[1] - xScale.range()[0]
      const eachBand = range / (xScale.domain().length + 1)

      let numerator = x
      const index = Math.floor((Number(numerator) - eachBand / 2) / eachBand)
      return xScale.domain()[index] // fixes off by 1 error
    }

    if (config.xAxis.type === 'date') {
      const xValue = x // Assuming x is the coordinate on the chart
      const xTimestamp = convertXValueToTimestamp(x, 0, xMax, xScale.domain(), xScale)

      // Calculate the closest date to the x coordinate
      let closestDate = null
      let minDistance = Number.MAX_VALUE

      xScale.domain().forEach(timestamp => {
        const distance = Math.abs(xTimestamp - timestamp)
        if (distance < minDistance) {
          minDistance = distance
          closestDate = timestamp
        }
      })

      return closestDate
    }

    return x
  }

  const xValue = getXValueFromCoordinate(xPosition - Number(config.yAxis.size || 0))

  let closestSeries = []

  if (!xValue) return { x: 0, y: 0 }

  if (xAxis.type === 'categorical') {
    closestSeries = config.data.filter(d => d[config.xAxis.dataKey] === xValue)
  }

  if (xAxis.type === 'date' || xAxis.type === 'date-time') {
    closestSeries = config.data.filter(d => new Date(d[config.xAxis.dataKey]).getTime() === xValue)
  }

  const y = closestSeries[0][annotationSeriesKey] // Map each key to its corresponding value in data
  const x = xValue
  return { x, y }
}

export { findNearestDatum, getXValueFromCoordinate }
