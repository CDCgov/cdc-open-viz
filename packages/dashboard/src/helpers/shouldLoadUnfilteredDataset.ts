import { AnyVisualization } from '@cdc/core/types/Visualization'
import { MultiDashboard } from '../types/MultiDashboard'
import { hasDashboardApplyBehavior } from './hasDashboardApplyBehavior'
import _ from 'lodash'
import { DashboardConfig } from '../types/DashboardConfig'

export const shouldLoadUnfilteredDataset = (config: MultiDashboard | DashboardConfig, datasetKey: string) => {
  const legacySupportApply = (config as any).filterBehavior === 'Apply Button'
  const hasApplyBehavior = hasDashboardApplyBehavior(config.visualizations) || legacySupportApply
  const datasetUsedByVisualizations = Object.keys(config.visualizations).filter(vizKey => {
    const viz = config.visualizations[vizKey] as AnyVisualization
    return viz.dataKey === datasetKey
  })
  const datasetUsedByRows = config.rows.reduce((acc, row, index) => {
    if (row.dataKey === datasetKey) acc.push(index)
    return acc
  }, [])
  const datasetIsUsedByCurrentTab = Boolean(datasetUsedByVisualizations.length || datasetUsedByRows.length)

  const datasetIsNotFiltered = !config.dashboard.sharedFilters.find(
    filter => _.intersection(filter.usedBy, [...datasetUsedByVisualizations, ...datasetUsedByRows]).length
  )
  return !hasApplyBehavior && datasetIsUsedByCurrentTab && datasetIsNotFiltered
}
