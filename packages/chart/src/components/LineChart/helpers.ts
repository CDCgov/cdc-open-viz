import { type PreliminaryDataItem, DataItem, StyleProps, Style } from './LineChartProps'

export const createStyles = (props: StyleProps): Style[] => {
  const { preliminaryData, data, stroke, strokeWidth, handleLineType, lineType, seriesKey } = props

  const validPreliminaryData: PreliminaryDataItem[] = preliminaryData.filter(pd => pd.seriesKey && pd.column && pd.value && pd.style)
  const validSuppressedData: PreliminaryDataItem[] = preliminaryData.filter(pd => pd.type === 'suppression' && pd.value && pd.symbol)
  const getMatchingPd = (point: DataItem): PreliminaryDataItem => validPreliminaryData.find(pd => pd.seriesKey === seriesKey && point[pd.column] === pd.value && pd.type === 'effect' && pd.style !== 'Open Circles')
  const getMatchingSp = (point: DataItem): PreliminaryDataItem => validSuppressedData.find(pd => point[seriesKey] === pd.value && (!pd.column || pd.column === seriesKey))
  let styles: Style[] = []
  const createStyle = (lineStyle): Style => ({
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: lineStyle
  })

  data.forEach((d, index) => {
    let matchingPd: PreliminaryDataItem = getMatchingPd(d)
    let matchingSp: PreliminaryDataItem = getMatchingSp(d)
    console.log(matchingSp, 'validPreliminaryData')

    let style: Style = matchingPd ? createStyle(handleLineType(matchingPd.style)) : createStyle(handleLineType(lineType))
    let styleX: Style = matchingSp ? createStyle(handleLineType(matchingSp.symbol)) : createStyle(handleLineType(lineType))
    if (matchingPd) {
      styles.push(style)
    } else {
      styles.push(styleX)
    }

    // If matchingSP exists, update the previous style if there is a previous element
    if (matchingSp && index > 0 && matchingSp.symbol) {
      styles[index - 1] = createStyle(handleLineType(matchingSp.symbol))
    }

    // If matchingPd exists, update the previous style if there is a previous element
    if (matchingPd && index > 0) {
      styles[index - 1] = createStyle(handleLineType(matchingPd.style))
    }
  })
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
