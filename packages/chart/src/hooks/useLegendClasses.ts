export default function useLegendClasses(config) {
  let containerClasses = ['legend-container']
  let innerClasses = ['legend-container__inner']

  // Legend Positioning
  if (config.legend.position === 'left') {
    containerClasses.push('left')
  }

  if (config.legend.position === 'bottom') {
    containerClasses.push('bottom')
    innerClasses.push('double-column')
    if (!config.legend.hasBorder) containerClasses.push('no-border')
    innerClasses.push('bottom')
  }
  if (config.legend.position === 'top') {
    containerClasses.push('top')
    innerClasses.push('double-column')
    if (!config.legend.hasBorder) containerClasses.push('no-border')
    innerClasses.push('top')
  }

  if (['bottom', 'top'].includes(config.legend.position) && config.legend.singleRow) {
    innerClasses.push('single-row')
  }

  // Legend > Item Ordering
  if (config.legend.reverseLabelOrder) {
    innerClasses.push('d-flex')
    innerClasses.push('flex-column-reverse')
  }
  if (['bottom', 'top'].includes(config.legend.position) && config.legend.verticalSorted) {
    innerClasses.push('vertical-sorted')
  }
  if (config.legend.style === 'gradient' && config.legend.position !== 'left' && config.legend.position !== 'right') {
    innerClasses.push('gradient')
    containerClasses.push('gradient')
    innerClasses = innerClasses.filter(className => className !== 'double-column')
  }
  return {
    containerClasses,
    innerClasses
  }
}
