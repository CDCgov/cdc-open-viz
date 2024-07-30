export default function useLegendClasses(config) {
  let containerClasses = ['legend-container']
  let innerClasses = ['legend-container__inner']

  // Legend Positioning
  if (config.legend.position === 'left') {
    containerClasses.push('left')
  }
  if (config.legend.position === 'bottom') {
    containerClasses.push('bottom')
    innerClasses.push('bottom')
  }

  if (config.legend.position === 'bottom' && config.legend.singleRow) {
    innerClasses.push('single-row')
  }

  // Legend > Item Ordering
  if (config.legend.reverseLabelOrder) {
    innerClasses.push('d-flex')
    innerClasses.push('flex-column-reverse')
  }
  if (config.legend.position === 'bottom' && config.legend.verticalSorted) {
    innerClasses.push('vertical-sorted')
  }

  return {
    containerClasses,
    innerClasses
  }
}
