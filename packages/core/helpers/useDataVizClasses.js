export default function useDataVizClasses(config, viewport = null) {
  const { legend } = config
  let lineDatapointClass = ''
  let barBorderClass = ''

  if (config.lineDatapointStyle === 'hover') {
    lineDatapointClass = ' chart-line--hover'
  }
  if (config.lineDatapointStyle === 'always show') {
    lineDatapointClass = ' chart-line--always'
  }
  if (config.barHasBorder === 'false') {
    barBorderClass = ' chart-bar--no-border'
  }

  let innerContainerClasses = ['cove-component__inner']
  let contentClasses = ['cove-component__content']

  const { visualizationType, title, showTitle } = config

  if (visualizationType === 'Spark Line' || visualizationType === 'chart') {
    if (title && showTitle) contentClasses.push('component--has-title')
  }

  if (config.type === 'markup-include') {
    contentClasses = contentClasses.filter(item => item !== 'cove-component__content')
  }

  config.showTitle && contentClasses.push('component--has-title')
  config.title && config.visualizationType !== 'chart' && config.visualizationType !== 'Spark Line' && contentClasses.push('component--has-title')
  config.subtext && innerContainerClasses.push('component--has-subtext')
  config.biteStyle && innerContainerClasses.push(`bite__style--${config.biteStyle}`)
  config.general?.isCompactStyle && innerContainerClasses.push(`component--isCompactStyle`)

  !config.visual?.border && contentClasses.push('no-borders')
  config.visualizationType === 'Spark Line' && contentClasses.push('sparkline')
  config.visual?.borderColorTheme && contentClasses.push('component--has-borderColorTheme')
  config.visual?.accent && contentClasses.push('component--has-accent')
  config.visual?.background && contentClasses.push('component--has-background')
  config.visual?.hideBackgroundColor && contentClasses.push('component--hideBackgroundColor')

  // ! these two will be retired.
  config.shadow && innerContainerClasses.push('shadow')
  config?.visual?.roundedBorders && innerContainerClasses.push('bite--has-rounded-borders')

  let sparkLineStyles = {
    width: '100%'
  }

  // Starting work on combining legend classes.
  // Using short circuiting to check between charts & maps for now.
  const getListPosition = () => {
    if (legend?.position === 'side' && legend?.singleColumn) return 'legend-container__ul--single-column'
    if (legend?.position === 'bottom' && legend?.singleRow) return 'single-row'
    if (legend?.verticalSorted && !legend?.singleRow) return 'vertical-sorted'
    return ''
  }

  const getUlClasses = () => {
    const ulClasses = ['legend-container__ul']
    ulClasses.push(getListPosition())
    return ulClasses
  }
  const legendOuterClasses = [`${legend?.position}`, `${getListPosition()}`, `cdcdataviz-sr-focusable`, `${viewport}`]

  const legendClasses = {
    aside: legendOuterClasses,
    section: ['legend-container'],
    ul: getUlClasses(),
    li: ['single-legend-item', 'legend-container__li'],
    title: ['legend-container__title'],
    description: ['legend-container__description'],
    div: [legend?.position === 'bottom' && legend?.singleRow ? 'shape-container single-row' : 'shape-container']
  }

  return { innerContainerClasses, contentClasses, barBorderClass, lineDatapointClass, sparkLineStyles, legendClasses }
}
