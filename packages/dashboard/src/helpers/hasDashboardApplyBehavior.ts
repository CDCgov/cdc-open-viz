import { AnyVisualization } from '@cdc/core/types/Visualization'

export const hasDashboardApplyBehavior = (visualizations: Record<string, AnyVisualization>) => {
  return Object.values(visualizations).some(v => v.filterBehavior === 'Apply Button' && v.type === 'dashboardFilters')
}
