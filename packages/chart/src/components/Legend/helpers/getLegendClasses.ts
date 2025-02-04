import { ChartConfig } from './../../../types/ChartConfig'

export const getLegendClasses = (config: ChartConfig) => {
  const { position, singleRow, verticalSorted, hideBorder } = config.legend

  const containerClassMap = {
    left: 'left',
    right: 'right',
    bottom: 'bottom',
    top: 'top'
  }

  const innerClassMap = {
    bottom: singleRow ? ['single-row', 'bottom'] : ['double-column', 'bottom'],
    top: singleRow ? ['single-row', 'top'] : ['double-column', 'top']
  }

  const containerClasses = ['legend-container', containerClassMap[position]].filter(Boolean)
  const innerClasses = ['legend-container__inner', ...(innerClassMap[position] || [])]

  // Add vertical sorting class for 'bottom' and 'top' positions
  if (['bottom', 'top'].includes(position) && verticalSorted) {
    innerClasses.push('vertical-sorted')
  }

  // Add border and padding classes based on position and hideBorder
  const shouldHideBorder = (['right', 'left'].includes(position) || !position) && hideBorder.side
  const shouldHideTopBottomBorder = ['top', 'bottom'].includes(position) && hideBorder.topBottom

  if (shouldHideBorder || shouldHideTopBottomBorder) {
    containerClasses.push('border-0', 'p-0')
  } else {
    containerClasses.push('p-3')
  }

  return {
    containerClasses,
    innerClasses
  }
}
export default getLegendClasses
