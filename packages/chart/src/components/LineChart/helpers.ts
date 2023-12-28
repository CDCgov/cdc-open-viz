export const splitData = (seriesKey, data, config) => {
  // Filter out only valid preliminary data entries
  const validPreliminaryData = config.preliminaryData.filter(pd => pd.seriesKey && pd.column && pd.value && pd.type && pd.style)

  // find a matching preliminary data  for a given data point
  const getMatchingPd = point => validPreliminaryData.find(pd => pd.seriesKey === seriesKey && point[pd.column] === pd.value && pd.type === 'effect')

  //  create segment with given points, style, etc
  const createSegment = (points, dashed, style) => ({
    data: points.filter(Boolean), // Filter out any null/undefined points
    dashed: dashed,
    lineType: style
  })

  let segments = []
  let currentSegment = []

  data.forEach((d, index) => {
    const matchingPd = getMatchingPd(d)
    const nextD = data[index + 1] // Get the next data point
    const isNextMatch = nextD && getMatchingPd(nextD)

    if (matchingPd) {
      // Finish the current segment before starting a dashed segment
      if (currentSegment.length > 0) {
        segments.push(createSegment(currentSegment, false, 'none'))
        currentSegment = []
      }

      // Create a dashed segment including previous, current, and next data points
      const dashedSegment = index > 0 ? [data[index - 1], d, nextD] : [d, nextD]
      segments.push(createSegment(dashedSegment, true, matchingPd.style))

      // Skip the next data point in iteration if it's included in the dashed segment
      if (isNextMatch) index++
    } else {
      // Continue building the current segment
      currentSegment.push(d)
    }
  })

  // Add any remaining data as a solid segment
  if (currentSegment.length > 0) {
    segments.push(createSegment(currentSegment, false, 'none'))
  }

  return segments
}

export const filterCircles = (preliminaryData, data, seriesKey) => {
  // Find the 'value' and 'column' in preliminaryData where style is 'Circle'
  const circlesFiltered = preliminaryData.filter(item => item.style === 'Open Circles' && item.type === 'effect').map(item => ({ column: item.column, value: item.value, seriesKey: item.seriesKey }))
  let filteredData = []
  //  find matching
  data.forEach((item, index) => {
    if (circlesFiltered.some(d => item[d.column] === d.value && d.seriesKey === seriesKey)) {
      // Add previous item if it exists
      if (index > 0) {
        filteredData.push(data[index - 1])
      }

      // Add current  item
      filteredData.push(item)

      // Add next item if it exists
      if (index < data.length - 1) {
        filteredData.push(data[index + 1])
      }
    }
  })

  return filteredData
}
