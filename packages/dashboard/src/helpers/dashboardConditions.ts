import { Dashboard } from '../types/Dashboard'
import { ConfigRow, DashboardCondition } from '../types/ConfigRow'
import { DashboardConfig } from '../types/DashboardConfig'
import { createCoveId } from '@cdc/core/helpers/createCoveId'
import { AnyVisualization } from '@cdc/core/types/Visualization'
import { getConditionalWidgets, hasConditionalWidgets, resolveColumnWidgetEntry } from './dashboardColumnWidgets'
import { filterData, getClientSideFilterColumnName, isFilterAtResetState } from './filterData'
import {
  dashboardConditionsSupportedForRow,
  getApplicableFiltersForTarget,
  SharedFilterTarget
} from './dashboardFilterTargets'
import { getVizRowColumnLocator } from './getVizRowColumnLocator'

export type DashboardConditionEvaluation = {
  matches: boolean
  resolved: boolean
}

export const getDashboardConditionIds = (rows: ConfigRow[] = []) =>
  rows.flatMap(row => {
    // Reducer/editor callers can still pass hand-authored legacy row arrays.
    if (Array.isArray(row)) return []

    const rowConditionIds = row.dashboardCondition?.id ? [row.dashboardCondition.id] : []
    const columnConditionIds =
      row.columns?.flatMap(column =>
        getConditionalWidgets(column).flatMap(entry =>
          entry.dashboardCondition?.id ? [entry.dashboardCondition.id] : []
        )
      ) || []

    return [...rowConditionIds, ...columnConditionIds]
  })

export const ensureRowConditionIds = (rows: ConfigRow[]): ConfigRow[] => {
  const existingConditionIds = new Set(getDashboardConditionIds(rows).map(id => String(id)))

  return rows.map(row => {
    // Initial load migrates row shape first, but reducer/editor callers may not.
    if (Array.isArray(row)) return row

    const nextRow = { ...row }

    if (nextRow.dashboardCondition && !nextRow.dashboardCondition.id) {
      const id = createCoveId('condition', { existingIds: existingConditionIds })
      existingConditionIds.add(id)
      nextRow.dashboardCondition = { ...nextRow.dashboardCondition, id }
    }

    if (Array.isArray(nextRow.columns)) {
      nextRow.columns = nextRow.columns.map(column => {
        if (hasConditionalWidgets(column)) {
          return {
            ...column,
            conditionalWidgets: getConditionalWidgets(column).map(entry => {
              if (!entry.dashboardCondition || entry.dashboardCondition.id) return entry

              const id = createCoveId('condition', { existingIds: existingConditionIds })
              existingConditionIds.add(id)

              return {
                ...entry,
                dashboardCondition: {
                  ...entry.dashboardCondition,
                  id
                }
              }
            })
          }
        }
        return column
      })
    }

    return nextRow
  })
}

const dashboardConditionHasRequiredInputs = (dashboardCondition?: DashboardCondition) => {
  if (!dashboardCondition?.operator) return false
  if (dashboardCondition.operator === 'filtersIncomplete') return true
  if (!dashboardCondition.datasetKey) return false
  if (dashboardCondition.operator !== 'columnHasAnyValue') return true

  return !!dashboardCondition.columnName && !!dashboardCondition.values?.length
}

export const dashboardConditionUsesFiltersIncomplete = (dashboardCondition?: DashboardCondition) =>
  dashboardCondition?.operator === 'filtersIncomplete'

export const dashboardRowsUseFiltersIncomplete = (rows: ConfigRow[] = []) =>
  rows.some(row => {
    if (!dashboardConditionsSupportedForRow(row)) return false
    if (dashboardConditionUsesFiltersIncomplete(row.dashboardCondition)) return true

    return row.columns?.some(column =>
      getConditionalWidgets(column).some(entry => dashboardConditionUsesFiltersIncomplete(entry.dashboardCondition))
    )
  })

export const getDashboardConditionDatasetKeys = (rows: ConfigRow[] = []) =>
  rows.flatMap(row => {
    if (!dashboardConditionsSupportedForRow(row)) return []

    const rowDatasetKey = row.dashboardCondition?.datasetKey ? [row.dashboardCondition.datasetKey] : []
    const columnDatasetKeys =
      row.columns?.flatMap(column =>
        getConditionalWidgets(column).flatMap(entry =>
          entry.dashboardCondition?.datasetKey ? [entry.dashboardCondition.datasetKey] : []
        )
      ) || []

    return [...rowDatasetKey, ...columnDatasetKeys]
  })

const getDashboardConditionApplicableFilters = (
  dashboard: Dashboard,
  filterTarget: SharedFilterTarget,
  datasetColumns: string[]
) => {
  const candidateFilters = getApplicableFiltersForTarget(dashboard, filterTarget, { includeUnscoped: true })
  if (!candidateFilters) return []

  return candidateFilters.filter(filter => {
    const columnName = getClientSideFilterColumnName(filter)
    return !!columnName && datasetColumns.includes(columnName)
  })
}

export const hasIncompleteFiltersForDashboardCondition = (
  dashboardCondition: DashboardCondition | undefined,
  dashboard: Dashboard,
  filterTarget: SharedFilterTarget = ''
) => {
  if (!dashboardCondition?.id) return false

  const applicableFilters = getApplicableFiltersForTarget(dashboard, filterTarget, { includeUnscoped: true })
  if (!applicableFilters) return false

  return applicableFilters.some(isFilterAtResetState)
}

export const getDashboardConditionFilteredData = (
  dashboardCondition: DashboardCondition | undefined,
  dashboard: Dashboard,
  data: Record<string, any[]>,
  filterTarget: SharedFilterTarget = ''
): Record<string, any>[] | undefined => {
  if (!dashboardConditionHasRequiredInputs(dashboardCondition)) {
    return undefined
  }

  if (dashboardCondition.operator === 'filtersIncomplete') {
    return hasIncompleteFiltersForDashboardCondition(dashboardCondition, dashboard, filterTarget) ? [{}] : []
  }

  const rawDataset = data[dashboardCondition.datasetKey]
  if (!Array.isArray(rawDataset)) {
    return undefined
  }
  const dataset = rawDataset || []

  const datasetColumns = dataset[0] ? Object.keys(dataset[0]) : []
  const applicableFilters = getDashboardConditionApplicableFilters(dashboard, filterTarget, datasetColumns)

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

  if (dashboardCondition.operator === 'filtersIncomplete') {
    return { matches: filteredData.length > 0, resolved: true }
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

const visualizationUsesDataset = (viz: AnyVisualization | undefined, datasetKey: string) =>
  viz?.dataKey === datasetKey || viz?.footnotes?.dataKey === datasetKey

const getDataForConditionEvaluation = (
  datasets: DashboardConfig['datasets'],
  data: Record<string, any[]>
): Record<string, any[]> => {
  return Object.keys(datasets || {}).reduce((acc, datasetKey) => {
    const stateData = data?.[datasetKey]
    const configData = datasets?.[datasetKey]?.data

    if (Array.isArray(stateData)) {
      acc[datasetKey] = stateData
    } else if (Array.isArray(configData)) {
      acc[datasetKey] = configData
    }

    return acc
  }, {} as Record<string, any[]>)
}

type ShouldSuppressFetchErrorParams = Pick<DashboardConfig, 'dashboard' | 'datasets' | 'rows' | 'visualizations'> & {
  data: Record<string, any[]>
  datasetKey: string
}

export const shouldSuppressFetchErrorForHiddenDataset = ({
  dashboard,
  datasets,
  rows,
  visualizations,
  data,
  datasetKey
}: ShouldSuppressFetchErrorParams): boolean => {
  if (!rows?.length || !visualizations || !datasets?.[datasetKey]) return false
  if (getDashboardConditionDatasetKeys(rows).includes(datasetKey)) return false

  const conditionData = getDataForConditionEvaluation(datasets, data)
  const vizRowColumnLocator = getVizRowColumnLocator(rows)
  let foundDatasetConsumer = false

  const evaluateCondition = (dashboardCondition: DashboardCondition | undefined, filterTarget: SharedFilterTarget) => {
    const filteredData = getDashboardConditionFilteredData(dashboardCondition, dashboard, conditionData, filterTarget)
    return evaluateDashboardCondition(dashboardCondition, filteredData)
  }

  const rowIsHiddenByCondition = (row: ConfigRow, rowIndex: number) => {
    if (!row.dashboardCondition) return false

    const evaluation = evaluateCondition(row.dashboardCondition, rowIndex)
    if (!evaluation.resolved) return undefined

    return !evaluation.matches
  }

  const widgetIsHiddenByColumnCondition = (
    row: ConfigRow,
    rowIndex: number,
    columnIndex: number,
    widgetKey: string
  ) => {
    const column = row.columns?.[columnIndex]
    const resolvedEntry = resolveColumnWidgetEntry(column, {
      evaluateCondition: (dashboardCondition, entry) => {
        const filterTarget = row.dataKey ? rowIndex : entry?.widget || ''
        return evaluateCondition(dashboardCondition, filterTarget)
      }
    })

    if (!resolvedEntry) return false
    if (!resolvedEntry.resolved) return undefined

    return resolvedEntry.widget !== widgetKey
  }

  for (const [vizKey, viz] of Object.entries(visualizations)) {
    if (!visualizationUsesDataset(viz, datasetKey)) continue

    foundDatasetConsumer = true

    const locator = vizRowColumnLocator[vizKey]
    if (!locator) return false

    const row = rows[locator.row]
    if (!row || row.toggle || row.multiVizColumn || row.originalMultiVizColumn) return false

    const rowHidden = rowIsHiddenByCondition(row, locator.row)
    if (rowHidden === undefined) return false
    if (rowHidden) continue

    const widgetHidden = widgetIsHiddenByColumnCondition(row, locator.row, locator.column, vizKey)
    if (widgetHidden === undefined || !widgetHidden) return false
  }

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex]
    if (row?.dataKey !== datasetKey) continue

    foundDatasetConsumer = true

    if (row.toggle || row.multiVizColumn || row.originalMultiVizColumn) return false

    const rowHidden = rowIsHiddenByCondition(row, rowIndex)
    if (rowHidden === undefined || !rowHidden) return false
  }

  return foundDatasetConsumer
}
