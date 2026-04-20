import { Dashboard } from '../types/Dashboard'
import { ConfigRow, DashboardCondition } from '../types/ConfigRow'
import { filterData, isFilterAtResetState } from './filterData'
import { getApplicableFiltersForTarget } from './dashboardFilterTargets'

export type DashboardConditionEvaluation = {
  matches: boolean
  resolved: boolean
}

export const createDashboardConditionId = () =>
  `dashboard-condition-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

export const ensureRowConditionIds = (rows: ConfigRow[]): ConfigRow[] =>
  rows.map(row => {
    const nextRow = { ...row }

    if (nextRow.dashboardCondition && !nextRow.dashboardCondition.id) {
      nextRow.dashboardCondition = { ...nextRow.dashboardCondition, id: createDashboardConditionId() }
    }

    nextRow.columns = nextRow.columns.map(column => {
      if (!column.dashboardCondition || column.dashboardCondition.id) return column
      return {
        ...column,
        dashboardCondition: {
          ...column.dashboardCondition,
          id: createDashboardConditionId()
        }
      }
    })

    return nextRow
  })

const dashboardConditionHasRequiredInputs = (dashboardCondition?: DashboardCondition) => {
  if (!dashboardCondition?.datasetKey || !dashboardCondition.operator) return false
  if (dashboardCondition.operator !== 'columnHasAnyValue') return true

  return !!dashboardCondition.columnName && !!dashboardCondition.values?.length
}

const getDashboardConditionApplicableFilters = (
  dashboard: Dashboard,
  target: string | number,
  datasetColumns: string[]
) => {
  const candidateFilters = getApplicableFiltersForTarget(dashboard, target, { includeUnscoped: true })
  if (!candidateFilters) return []

  return candidateFilters.filter(filter => !!filter.columnName && datasetColumns.includes(filter.columnName))
}

export const getDashboardConditionFilteredData = (
  dashboardCondition: DashboardCondition | undefined,
  dashboard: Dashboard,
  data: Record<string, any[]>
): Record<string, any>[] | undefined => {
  if (!dashboardConditionHasRequiredInputs(dashboardCondition)) {
    return undefined
  }

  const rawDataset = data[dashboardCondition.datasetKey]
  if (!Array.isArray(rawDataset)) {
    return undefined
  }
  const dataset = rawDataset || []

  const datasetColumns = dataset[0] ? Object.keys(dataset[0]) : []
  const applicableFilters = getDashboardConditionApplicableFilters(
    dashboard,
    dashboardCondition.id || '',
    datasetColumns
  )

  if (applicableFilters.some(isFilterAtResetState)) {
    return undefined
  }

  return applicableFilters.length ? filterData(applicableFilters, dataset) : dataset
}

export const evaluateDashboardCondition = (
  dashboardCondition: DashboardCondition | undefined,
  filteredData?: Record<string, any>[]
): DashboardConditionEvaluation => {
  if (!dashboardConditionHasRequiredInputs(dashboardCondition) || filteredData === undefined) {
    return { matches: false, resolved: false }
  }

  if (dashboardCondition.operator === 'hasData') {
    return { matches: filteredData.length > 0, resolved: true }
  }

  if (dashboardCondition.operator === 'hasNoData') {
    return { matches: filteredData.length === 0, resolved: true }
  }

  const matches = filteredData.some(row => {
    const currentValue = row?.[dashboardCondition.columnName]
    return (
      currentValue !== undefined &&
      currentValue !== null &&
      dashboardCondition.values?.some(value => String(currentValue) === String(value))
    )
  })

  return { matches, resolved: true }
}
