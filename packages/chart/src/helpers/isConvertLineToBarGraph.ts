export const isConvertLineToBarGraph = (
  visualizationType,
  filteredData,
  allowLineToBarGraph,
  isDynamicWithLessThanThreePoints = false
) => {
  const convertLineToBarGraph =
    ((visualizationType === 'Line' && filteredData?.length < 3) || isDynamicWithLessThanThreePoints) &&
    allowLineToBarGraph
      ? true
      : false
  return convertLineToBarGraph
}
