export const isConvertLineToBarGraph = (visualizationType, filteredData, allowLineToBarGraph) => {
  const convertLineToBarGraph = visualizationType === 'Line' && filteredData?.length < 3 && allowLineToBarGraph ? true : false
  return convertLineToBarGraph
}
