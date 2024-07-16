import { AnyVisualization } from '@cdc/core/types/Visualization'
import { DashboardFilters } from '../types/DashboardFilters'

export const getAutoLoadVisualization = (visualizations: Record<string, AnyVisualization>): DashboardFilters | undefined => {
  const autoLoadViz = Object.values(visualizations).filter(vis => {
    return vis.type === 'dashboardFilters' && vis.autoLoad
  }) as DashboardFilters[]
  if (autoLoadViz.length === 0) return
  if (autoLoadViz.length > 1) throw new Error('Only one filter row can be autoloaded')
  return autoLoadViz[0]
}
