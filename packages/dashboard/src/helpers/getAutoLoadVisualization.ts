import { Visualization } from '@cdc/core/types/Visualization'

export const getAutoLoadVisualization = (visualizations: Record<string, Visualization>): Visualization | undefined => {
  const autoLoadViz = Object.values(visualizations).filter(vis => {
    return vis.autoLoad && vis.type === 'filter-dropdowns'
  })
  if (autoLoadViz.length === 0) return
  if (autoLoadViz.length > 1) throw new Error('Only one filter row can be autoloaded')
  return autoLoadViz[0]
}
