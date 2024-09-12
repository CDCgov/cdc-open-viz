type ConfigType = {
  legend: {
    position: 'left' | 'bottom' | 'top' | 'right'
    singleRow?: boolean
    reverseLabelOrder?: boolean
    verticalSorted?: boolean
    hideBorder: {
      side?: boolean
      topBottom?: boolean
    }
  }
}

const useLegendClasses = (config: ConfigType) => {
  const containerClasses = ['legend-container']
  const innerClasses = ['legend-container__inner']

  // Handle legend positioning
  switch (config.legend.position) {
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
  if (['bottom', 'top'].includes(config.legend.position) && config.legend.singleRow) {
    innerClasses.push('single-row')
  }

  // Reverse label order
  if (config.legend.reverseLabelOrder) {
    innerClasses.push('d-flex', 'flex-column-reverse')
  }

  // Vertical sorting for 'bottom' and 'top' positions
  if (['bottom', 'top'].includes(config.legend.position) && config.legend.verticalSorted) {
    innerClasses.push('vertical-sorted')
  }

  // Configure border classes
  if (
    config.legend.hideBorder.side &&
    (['right', 'left'].includes(config.legend.position) || !config.legend.position)
  ) {
    containerClasses.push('no-border')
  }

  // if (config.legend.hideBorder.topBottom && ['top', 'bottom'].includes(config.legend.position)) {
  //   containerClasses.push('no-border')
  // }

  return {
    containerClasses,
    innerClasses
  }
}
export default useLegendClasses
