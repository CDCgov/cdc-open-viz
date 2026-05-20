import { DashboardCondition } from '../types/ConfigRow'

export type DashboardConditionTypeOption = DashboardCondition['operator'] | ''
type DashboardConditionOperator = NonNullable<DashboardCondition['operator']>

export const DASHBOARD_CONDITION_TYPE_LABELS: Record<DashboardConditionOperator, string> = {
  hasData: "Show when there's data",
  hasNoData: "Show when there's no data",
  columnHasAnyValue: 'Show when column has a value',
  filtersIncomplete: 'Show when filters are incomplete'
}

export const DASHBOARD_CONDITION_TYPE_OPTIONS: { value: DashboardConditionTypeOption; label: string }[] = [
  { value: '', label: 'Always show' },
  { value: 'hasData', label: DASHBOARD_CONDITION_TYPE_LABELS.hasData },
  { value: 'hasNoData', label: DASHBOARD_CONDITION_TYPE_LABELS.hasNoData },
  { value: 'columnHasAnyValue', label: DASHBOARD_CONDITION_TYPE_LABELS.columnHasAnyValue },
  { value: 'filtersIncomplete', label: DASHBOARD_CONDITION_TYPE_LABELS.filtersIncomplete }
]

export const getColumnHasAnyValueSummaryParts = (columnName?: string) => {
  if (!columnName) return undefined

  return {
    prefix: 'Show based on the value in the ',
    columnName,
    suffix: ' column'
  }
}

export const getColumnHasAnyValueSummary = (columnName?: string) => {
  const summaryParts = getColumnHasAnyValueSummaryParts(columnName)

  if (!summaryParts) return DASHBOARD_CONDITION_TYPE_LABELS.columnHasAnyValue

  return `${summaryParts.prefix}${summaryParts.columnName}${summaryParts.suffix}`
}

export const getDashboardConditionSummary = (dashboardCondition?: DashboardCondition) => {
  if (!dashboardCondition?.operator) return 'Dashboard condition configured'

  if (dashboardCondition.operator === 'columnHasAnyValue') {
    return getColumnHasAnyValueSummary(dashboardCondition.columnName)
  }

  return DASHBOARD_CONDITION_TYPE_LABELS[dashboardCondition.operator] || 'Dashboard condition configured'
}
