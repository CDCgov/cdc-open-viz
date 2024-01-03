import { type PreliminaryDataItem, DataItem, Config } from './LineChartProps'

export const splitData = (seriesKey: string, data: DataItem[], config: Config) => {
  const validPreliminaryData = config.preliminaryData.filter(pd => pd.seriesKey && pd.column && pd.value && pd.type && pd.style)

  const getMatchingPd = (point: DataItem) => validPreliminaryData.find(pd => pd.seriesKey === seriesKey && point[pd.column] === pd.value && pd.type === 'effect')

  const createSegment = (points: DataItem[], dashed: boolean, style: string) => ({
    data: points.filter(Boolean), // Filter out any null/undefined points
    dashed,
    lineType: style
  })

  let segments = []
  let currentSegment: DataItem[] = []

  data.forEach((d, index) => {
    const matchingPd = getMatchingPd(d)
    const nextD = data[index + 1]
    const isNextMatch = nextD && getMatchingPd(nextD)

    if (matchingPd) {
      if (currentSegment.length > 0) {
        segments.push(createSegment(currentSegment, false, 'none'))
        currentSegment = []
      }

      const dashedSegment = index > 0 ? [data[index - 1], d, nextD] : [d, nextD]
      segments.push(createSegment(dashedSegment, true, matchingPd.style))

      if (isNextMatch) index++
    } else {
      currentSegment.push(d)
    }
  })

  if (currentSegment.length > 0) {
    segments.push(createSegment(currentSegment, false, 'none'))
  }

  return segments
}

export const filterCircles = (preliminaryData: PreliminaryDataItem[], data: DataItem[], seriesKey: string): DataItem[] => {
  // Filter and map preliminaryData to get circlesFiltered
  const circlesFiltered = preliminaryData.filter(item => item.style === 'Open Circles' && item.type === 'effect').map(item => ({ column: item.column, value: item.value, seriesKey: item.seriesKey }))

  let filteredData: DataItem[] = []

  // Process data to find matching items
  data.forEach((item, index) => {
    if (circlesFiltered.some(d => item[d.column] === d.value && d.seriesKey === seriesKey)) {
      // Add previous item if it exists
      if (index > 0) {
        filteredData.push(data[index - 1])
      }

      // Add current item
      filteredData.push(item)

      // Add next item if it exists
      if (index < data.length - 1) {
        filteredData.push(data[index + 1])
      }
    }
  })

  return filteredData
}
