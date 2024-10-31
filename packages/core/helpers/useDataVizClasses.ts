export default function useDataVizClasses(config, viewport = null) {
  const {
    legend,
    lineDatapointStyle,
    showTitle,
    title,
    visualizationType,
    subtext,
    biteStyle,
    general,
    visual,
    shadow
  } = config

  let lineDatapointClass = ''

  if (lineDatapointStyle === 'hover') {
    lineDatapointClass = ' chart-line--hover'
  }
  if (lineDatapointStyle === 'always show') {
    lineDatapointClass = ' chart-line--always'
  }

  let innerContainerClasses = ['cove-component__inner']
  let contentClasses = ['cove-component__content']

  if (visualizationType === 'Spark Line' || visualizationType === 'chart') {
    if (title && showTitle) contentClasses.push('component--has-title')
  }

  showTitle && contentClasses.push('component--has-title')
  title &&
    visualizationType !== 'chart' &&
    visualizationType !== 'Spark Line' &&
    contentClasses.push('component--has-title')
  subtext && innerContainerClasses.push('component--has-subtext')
  biteStyle && innerContainerClasses.push(`bite__style--${biteStyle}`)
  general?.isCompactStyle && innerContainerClasses.push(`component--isCompactStyle`)

  !visual?.border && contentClasses.push('no-borders')
  visualizationType === 'Spark Line' && contentClasses.push('sparkline')
  visual?.borderColorTheme && contentClasses.push('component--has-borderColorTheme')
  visual?.accent && contentClasses.push('component--has-accent')
  visual?.background && contentClasses.push('component--has-background')
  visual?.hideBackgroundColor && contentClasses.push('component--hideBackgroundColor')

  // ! these two will be retired.
  shadow && innerContainerClasses.push('shadow')
  config?.visual?.roundedBorders && innerContainerClasses.push('bite--has-rounded-borders')

  let sparkLineStyles = {
    width: '100%'
  }

  // Starting work on combining legend classes.
  // Using short circuiting to check between charts & maps for now.
  const getListPosition = () => {
    if (legend?.position === 'side' && legend?.singleColumn) return 'legend-container__ul--single-column'
    if (legend?.position !== 'side' && legend?.singleRow) return 'single-row'
    if (legend?.verticalSorted && !legend?.singleRow) return 'vertical-sorted'
    return ''
  }

  const getUlClasses = () => {
    const ulClasses = ['legend-container__ul']
    ulClasses.push(getListPosition())
    return ulClasses
  }
  const hasBorder = legend?.hideBorder ? 'no-border' : ''
  const legendOuterClasses = [
    `${legend?.position}`,
    `${getListPosition()}`,
    `cdcdataviz-sr-focusable`,
    `${viewport}`,
    `${hasBorder}`
  ]

  const usePadding = !legend?.hideBorder

  const legendClasses = {
    aside: legendOuterClasses,
    section: ['legend-container', usePadding ? 'legend-padding' : ''],
    ul: getUlClasses(),
    li: ['single-legend-item', 'legend-container__li'],
    title: ['legend-container__title'],
    description: ['legend-container__description'],
    div: [legend?.position === 'bottom' && legend?.singleRow ? 'shape-container single-row' : 'shape-container']
  }

  return { innerContainerClasses, contentClasses, lineDatapointClass, sparkLineStyles, legendClasses }
}
