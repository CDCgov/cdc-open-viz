export const getMarginTop = (isBottomOrSmallViewport, isBrushActive) => {
  if (!isBottomOrSmallViewport) return '0px'
  if (isBrushActive) return '30px'
  return '15px'
}
