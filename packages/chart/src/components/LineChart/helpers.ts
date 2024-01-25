import { type PreliminaryDataItem, DataItem } from './LineChartProps'

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

export const segmentData = (preliminaryData: PreliminaryDataItem[], data: DataItem[], seriesKey: string, stroke: string, handleLineType: any) => {
  let result = [[]]
  let styles = [{}]

  data.forEach(item => {
    let newLineStyle = ''
    let preliminaryMatch = preliminaryData.filter(d => item.style !== 'Open Circles' && item[d.column] === d.value && d.seriesKey === seriesKey)
    if (preliminaryMatch.length > 0) {
      newLineStyle = preliminaryMatch[0].style
    }

    newLineStyle = newLineStyle ? handleLineType(newLineStyle) : '1'
    let currentLineStyle = styles[styles.length - 1].strokeDasharray

    //First line segment, add style properties to first object
    if (!currentLineStyle) {
      styles[styles.length - 1].stroke = stroke
      styles[styles.length - 1].strokeWidth = 2
      styles[styles.length - 1].strokeDasharray = newLineStyle
      result[result.length - 1].push(item)
      //New datapoint is same style as previous, add to current line segment
    } else if (currentLineStyle === newLineStyle) {
      result[result.length - 1].push(item)
      // New datapoint has different style, add new line segment
    } else {
      styles.push({
        stroke: stroke,
        strokeWidth: 2,
        strokeDasharray: newLineStyle
      })
      result.push([item])
    }
  })

  return { segmentedData: result, segmentedStyles: styles }
}
