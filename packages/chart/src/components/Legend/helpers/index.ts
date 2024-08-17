export const getMarginTop = (isBottomOrSmallViewport, isBrushActive) => {
  if (!isBottomOrSmallViewport) return '0px'
  if (isBrushActive) return '35px'
  return '15px'
}

export const getGradientLegendWidth = (chartWidth: string, currentViewport: string) => {
  let newWidth = Number(chartWidth)
  switch (currentViewport) {
    case 'lg':
      newWidth = newWidth / 3
      break
    case 'md':
      newWidth = newWidth / 2
      break
    case 'sm':
      newWidth = newWidth / 1.3
      break
    case 'xs':
      newWidth = newWidth / 1.1
      break
    case 'xxs':
      newWidth = newWidth
      break
    default:
      return newWidth
  }
  return newWidth
}
