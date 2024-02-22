import { type PreliminaryDataItem, DataItem, StyleProps, Style } from './LineChartProps'

export const createStyles = (props: StyleProps): Style[] => {
  const { preliminaryData, rawData, stroke, handleLineType, lineType, seriesKey } = props

  const validPreliminaryData: PreliminaryDataItem[] = preliminaryData.filter(pd => pd.seriesKey && pd.column && pd.value && pd.type && pd.style)
  const getMatchingPd = (point: DataItem): PreliminaryDataItem => validPreliminaryData.find(pd => pd.seriesKey === seriesKey && point[pd.column] === pd.value && pd.type === 'effect' && pd.style !== 'Open Circles')

  let styles: Style[] = []
  const createStyle = (lineStyle): Style => ({
    stroke: stroke,
    strokeWidth: 2,
    strokeDasharray: lineStyle
  })

  if (rawData) {
    rawData.forEach((d, index) => {
      let matchingPd: PreliminaryDataItem = getMatchingPd(d)
      let style: Style = matchingPd ? createStyle(handleLineType(matchingPd.style)) : createStyle(handleLineType(lineType))

      styles.push(style)

      // If matchingPd exists, update the previous style if there is a previous element
      if (matchingPd && index > 0) {
        styles[index - 1] = createStyle(handleLineType(matchingPd.style))
      }
    })
  }
  return styles as Style[]
}

export const filterCircles = (preliminaryData: PreliminaryDataItem[], data: DataItem[], seriesKey: string): DataItem[] => {
  // Filter and map preliminaryData to get circlesFiltered
  const circlesFiltered = preliminaryData.filter(item => item.style === 'Open Circles' && item.type === 'effect').map(item => ({ column: item.column, value: item.value, seriesKey: item.seriesKey }))

  let filteredData: DataItem[] = []

  // Process data to find matching items
  data.forEach(item => {
    if (circlesFiltered.some(d => item[d.column] === d.value && d.seriesKey === seriesKey)) {
      // Add current item
      filteredData.push(item)
    }
  })

  return filteredData
}
