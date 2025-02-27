import _ from 'lodash'

export const isConvertLineToBarGraph = (configObj, filteredData) => {
  const { allowLineToBarGraph, series, visualizationType, xAxis } = configObj
  if (!allowLineToBarGraph) return false
  const lineWithLessThanThreePoints = visualizationType === 'Line' && filteredData?.length < 3
  const isDynamicSeries = series?.some(series => series.dynamicCategory)
  const isDynamicWithLessThanThreePoints =
    isDynamicSeries && _.uniq(filteredData?.map(data => data[xAxis.dataKey])).length <= 2
  return lineWithLessThanThreePoints || isDynamicWithLessThanThreePoints
}
