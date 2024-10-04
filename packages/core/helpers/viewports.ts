function isLegendWrapViewport(currentViewport) {
  return ['xs', 'xxs'].includes(currentViewport)
}

function isMobileHeightViewport(currentViewport) {
  return ['xs', 'xxs'].includes(currentViewport)
}

export { isLegendWrapViewport, isMobileHeightViewport }
