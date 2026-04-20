import { ConfigRow, DashboardCondition } from '../types/ConfigRow'
import { DashboardConfig } from '../types/DashboardConfig'
import { Dashboard } from '../types/Dashboard'
import { SharedFilter } from '../types/SharedFilter'
import { getVizRowColumnLocator } from './getVizRowColumnLocator'

export type SharedFilterTarget = string | number

export type SharedFilterTargetOptions = {
  nameLookup: Record<string, string>
  options: SharedFilterTarget[]
}

export type DashboardConditionTarget = {
  id: string
  dashboardCondition: DashboardCondition
  rowIndex: number
  columnIndex?: number
}

export const dashboardConditionsSupportedForRow = (row?: ConfigRow) =>
  !!row && !row.toggle && !row.multiVizColumn && !row.originalMultiVizColumn

const normalizeTarget = (target: SharedFilterTarget) => `${target}`

export const matchesSharedFilterTarget = (usedBy: SharedFilter['usedBy'], target: SharedFilterTarget) =>
  !!usedBy?.some(entry => normalizeTarget(entry) === normalizeTarget(target))

export const getDashboardConditionLabel = (
  rowIndex: number,
  dashboardCondition: DashboardCondition | undefined,
  columnIndex?: number
) => {
  if (!dashboardCondition?.id) return null
  if (columnIndex === undefined) {
    return { id: dashboardCondition.id, label: `Row ${rowIndex + 1} Dashboard Condition` }
  }

  return {
    id: dashboardCondition.id,
    label: `Row ${rowIndex + 1} Column ${columnIndex + 1} Dashboard Condition`
  }
}

export const getDashboardConditionTargetOptions = (rows: ConfigRow[]): SharedFilterTargetOptions => {
  const nameLookup: Record<string, string> = {}
  const options: SharedFilterTarget[] = []

  rows.forEach((row, rowIndex) => {
    if (!dashboardConditionsSupportedForRow(row)) return

    const rowDashboardCondition = getDashboardConditionLabel(rowIndex, row.dashboardCondition)
    if (rowDashboardCondition) {
      nameLookup[rowDashboardCondition.id] = rowDashboardCondition.label
      options.push(rowDashboardCondition.id)
    }

    row.columns.forEach((column, columnIndex) => {
      const columnDashboardCondition = getDashboardConditionLabel(rowIndex, column.dashboardCondition, columnIndex)
      if (!columnDashboardCondition) return

      nameLookup[columnDashboardCondition.id] = columnDashboardCondition.label
      options.push(columnDashboardCondition.id)
    })
  })

  return { nameLookup, options }
}

export const getDashboardConditionTargets = (rows: ConfigRow[]): DashboardConditionTarget[] =>
  rows.reduce((targets, row, rowIndex) => {
    if (!dashboardConditionsSupportedForRow(row)) return targets

    if (row.dashboardCondition?.id) {
      targets.push({
        id: row.dashboardCondition.id,
        dashboardCondition: row.dashboardCondition,
        rowIndex
      })
    }

    row.columns?.forEach((column, columnIndex) => {
      if (!column.dashboardCondition?.id) return
      targets.push({
        id: column.dashboardCondition.id,
        dashboardCondition: column.dashboardCondition,
        rowIndex,
        columnIndex
      })
    })

    return targets
  }, [] as DashboardConditionTarget[])

export const getSharedFilterTargetOptions = (
  config: DashboardConfig,
  filter: Pick<SharedFilter, 'usedBy' | 'setBy'>
): SharedFilterTargetOptions => {
  const nameLookup: Record<string, string> = {}
  const options: SharedFilterTarget[] = []
  const vizRowColumnLocator = getVizRowColumnLocator(config.rows)

  Object.keys(config.visualizations).forEach(vizKey => {
    const vizLookup = vizRowColumnLocator[vizKey]
    if (!vizLookup) return

    const viz = config.visualizations[vizKey] as any
    if (viz.type === 'dashboardFilters') return

    const vizName =
      viz.visualizationType === 'markup-include'
        ? viz.contentEditor?.title || vizKey
        : viz.general?.title || viz.title || vizKey
    const dataConfiguredOnRow = config.rows[vizLookup.row]?.dataKey

    nameLookup[vizKey] = vizName
    if (filter.setBy !== vizKey && !viz.usesSharedFilter && !dataConfiguredOnRow) {
      options.push(vizKey)
    }
  })

  config.rows.forEach((row, rowIndex) => {
    if (row.dataKey) {
      nameLookup[`${rowIndex}`] = `Row ${rowIndex + 1}`
      options.push(rowIndex)
    }
  })

  const dashboardConditionTargets = getDashboardConditionTargetOptions(config.rows)
  Object.assign(nameLookup, dashboardConditionTargets.nameLookup)
  options.push(...dashboardConditionTargets.options)

  return {
    nameLookup,
    options: options.filter(
      (value, index, values) => values.findIndex(entry => normalizeTarget(entry) === normalizeTarget(value)) === index
    )
  }
}

export const getApplicableFiltersForTarget = (
  dashboard: Dashboard,
  target: SharedFilterTarget,
  options?: { includeUnscoped?: boolean }
): SharedFilter[] | false => {
  const applicableFilters =
    dashboard.sharedFilters?.filter(sharedFilter => {
      if (options?.includeUnscoped && (!sharedFilter.usedBy || sharedFilter.usedBy.length === 0)) {
        return true
      }

      return matchesSharedFilterTarget(sharedFilter.usedBy, target)
    }) || []

  return applicableFilters.length > 0 ? applicableFilters : false
}
