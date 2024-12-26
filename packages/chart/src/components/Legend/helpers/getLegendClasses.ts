import { ChartConfig } from './../../../types/ChartConfig'

export const getLegendClasses = (config: ChartConfig) => {
  const { position, singleRow, reverseLabelOrder, verticalSorted, hideBorder } = config.legend
  const containerClasses = ['legend-container', 'p-3']
  const innerClasses = ['legend-container__inner']

  // Handle legend positioning
  switch (position) {
    case 'left':
      containerClasses.push('left')
      break
    case 'right':
      containerClasses.push('right')
      break
    case 'bottom':
      containerClasses.push('bottom')
      innerClasses.push('double-column', 'bottom')
      break
    case 'top':
      containerClasses.push('top')
      innerClasses.push('double-column', 'top')
      break
  }

  // Handle single row configuration for 'bottom' and 'top' positions
  if (['bottom', 'top'].includes(position) && singleRow) {
    innerClasses.push('single-row')
  }

  // Reverse label order
  if (reverseLabelOrder) {
    innerClasses.push('d-flex', 'flex-column-reverse')
  }

  // Vertical sorting for 'bottom' and 'top' positions
  if (['bottom', 'top'].includes(position) && verticalSorted) {
    innerClasses.push('vertical-sorted')
  }

  // Configure border classes
  if (hideBorder.side && (['right', 'left'].includes(position) || !position)) {
    containerClasses.push('border-0')
  }

  if (hideBorder.topBottom && ['top', 'bottom'].includes(position)) {
    containerClasses.push('border-0')
  }

  if (hideBorder.topBottom && ['top'].includes(position)) {
    containerClasses.push('p-0')
  }

  return {
    containerClasses,
    innerClasses
  }
}
export default getLegendClasses
