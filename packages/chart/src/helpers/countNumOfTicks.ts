export const countNumOfTicks = ({ axis, max, runtime, currentViewport, isHorizontal, data, config, min }) => {
  let { numTicks } = runtime[axis]
  if (runtime[axis].viewportNumTicks && runtime[axis].viewportNumTicks[currentViewport]) {
    numTicks = runtime[axis].viewportNumTicks[currentViewport]
  }
  let tickCount = undefined

  if (axis === 'yAxis') {
    tickCount =
      isHorizontal && !numTicks
        ? data.length
        : isHorizontal && numTicks
        ? numTicks
        : !isHorizontal && !numTicks
        ? undefined
        : !isHorizontal && numTicks && numTicks
    // to fix edge case of small numbers with decimals
    if (tickCount === undefined) {
      tickCount = 4 // same default as standalone components
    }
  }

  if (axis === 'xAxis') {
    tickCount =
      isHorizontal && !numTicks
        ? undefined
        : isHorizontal && numTicks
        ? numTicks
        : !isHorizontal && !numTicks
        ? undefined
        : !isHorizontal && numTicks && numTicks
    if (isHorizontal && tickCount === undefined) {
      tickCount = 4 // same default as standalone components
    }

    if (config.visualizationType === 'Forest Plot') {
      tickCount = config.yAxis.numTicks !== '' ? config.yAxis.numTicks : 4
    }
  }

  return tickCount
}
