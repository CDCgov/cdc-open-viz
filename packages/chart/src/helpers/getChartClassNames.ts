export const getChartSubTextClasses = (config, currentViewport, isLegendWrapViewport) => {
  const { legend = {}, isResponsiveTicks, brush } = config
  const { position, hide } = legend
  const isLegendOnBottom = position === 'bottom' || isLegendWrapViewport(currentViewport)

  const classes = ['subtext', 'mt-4']

  // Responsive Ticks
  if (isResponsiveTicks) {
    classes.push('subtext--responsive-ticks')
  }

  // Brush Active
  if (brush?.active) {
    if (!isLegendOnBottom || hide) {
      classes.push('subtext--brush-active')
    }
  }

  return classes
}

export const getChartWrapperClasses = (
  config,
  currentViewport,
  isLegendWrapViewport,
  lineDatapointClass,
  dashboardConfig,
  contentClasses
) => {
  const { legend = {}, barHasBorder, brush } = config // Destructure config properties
  const { position, hide } = legend // Destructure legend properties
  const isLegendOnBottom = position === 'bottom' || isLegendWrapViewport(currentViewport)

  const classes = ['chart-container', 'p-relative']

  // Legend Position
  if (position) {
    if (isLegendWrapViewport(currentViewport) && position !== 'top') {
      classes.push('legend-bottom')
    } else {
      classes.push(`legend-${position}`)
    }
  }

  // Legend Hidden
  if (hide) {
    classes.push('legend-hidden')
  }

  // Line Datapoint Class
  if (lineDatapointClass) {
    classes.push(lineDatapointClass)
  }

  // Bar Border
  if (!barHasBorder) {
    classes.push('chart-bar--no-border')
  }

  // Dashboard Brush
  const isDashboard = dashboardConfig?.type === 'dashboard'
  if (brush?.active && isDashboard && (!isLegendOnBottom || hide)) {
    classes.push('dashboard-brush')
  }

  // Additional Content Classes
  classes.push(...contentClasses)

  return classes
}
