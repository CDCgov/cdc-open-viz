import { AnyVisualization } from '../types/AnyVisualization'

export const hasDashboardApplyBehavior = (visualizations: Record<string, AnyVisualization>) => {
  return Object.values(visualizations).some(v => v.filterBehavior === 'Apply Button' && v.type === 'dashboardFilters')
}
