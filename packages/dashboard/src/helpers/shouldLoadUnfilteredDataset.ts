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
    if (viz.visualizationType === 'footnotes') return false
    return viz.dataKey === datasetKey
  })
  const datasetUsedByRows = config.rows.reduce((acc, row, index) => {
    if (row.footnotesId && config.visualizations[row.footnotesId]?.dataKey === datasetKey) acc.push(index)
    else if (row.dataKey === datasetKey) acc.push(index)
    return acc
  }, [])
  const datasetIsUsedByCurrentTab = Boolean(datasetUsedByVisualizations.length || datasetUsedByRows.length)

  const datasetIsNotAPIFiltered = !config.dashboard.sharedFilters?.find(
    filter =>
      filter.type !== 'datafilter' &&
      _.intersection(filter.usedBy, [...datasetUsedByVisualizations, ...datasetUsedByRows]).length
  )
  return !hasApplyBehavior && datasetIsUsedByCurrentTab && datasetIsNotAPIFiltered
}
