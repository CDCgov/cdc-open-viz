import { ConfigRow, DashboardCondition } from '../types/ConfigRow'
import { DashboardConfig } from '../types/DashboardConfig'
import { Dashboard } from '../types/Dashboard'
import { SharedFilter } from '../types/SharedFilter'
import { getConditionalWidgets, hasConditionalWidgets } from './dashboardColumnWidgets'
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
  filterTarget: SharedFilterTarget
  columnIndex?: number
  entryIndex?: number
}

export const dashboardConditionsSupportedForRow = (row?: ConfigRow) =>
  !!row && !row.toggle && !row.multiVizColumn && !row.originalMultiVizColumn

const normalizeTarget = (target: SharedFilterTarget) => `${target}`

const dedupeSharedFilterTargets = (targets: SharedFilterTarget[]) =>
  targets.filter(
    (value, index, values) => values.findIndex(entry => normalizeTarget(entry) === normalizeTarget(value)) === index
  )

export const matchesSharedFilterTarget = (usedBy: SharedFilter['usedBy'], target: SharedFilterTarget) =>
  !!usedBy?.some(entry => normalizeTarget(entry) === normalizeTarget(target))

export const getDashboardConditionTargets = (rows: ConfigRow[]): DashboardConditionTarget[] =>
  rows.reduce((targets, row, rowIndex) => {
    if (!dashboardConditionsSupportedForRow(row)) return targets

    if (row.dashboardCondition?.id) {
      targets.push({
        id: row.dashboardCondition.id,
        dashboardCondition: row.dashboardCondition,
        rowIndex,
        filterTarget: rowIndex
      })
    }

    row.columns?.forEach((column, columnIndex) => {
      if (hasConditionalWidgets(column)) {
        getConditionalWidgets(column).forEach((entry, entryIndex) => {
          if (!entry.dashboardCondition?.id) return
          targets.push({
            id: entry.dashboardCondition.id,
            dashboardCondition: entry.dashboardCondition,
            rowIndex,
            filterTarget: row.dataKey ? rowIndex : entry.widget,
            columnIndex,
            entryIndex
          })
        })
        return
      }
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
    if (row.dataKey || (dashboardConditionsSupportedForRow(row) && row.dashboardCondition)) {
      nameLookup[`${rowIndex}`] = `Row ${rowIndex + 1}`
      options.push(rowIndex)
    }
  })

  // Preserve legacy row targets that are no longer offered as new selectable targets.
  filter.usedBy?.forEach(target => {
    const isNumericRowTarget = typeof target === 'number' || (typeof target === 'string' && /^-?\d+$/.test(target))
    if (isNumericRowTarget) {
      const rowIndex = Number(target)
      if (!config.rows[rowIndex]) return
      nameLookup[`${target}`] = `Row ${rowIndex + 1}`
      options.push(target)
    }
  })

  return {
    nameLookup,
    options: dedupeSharedFilterTargets(options)
  }
}

export const remapRowTargetsInSharedFilters = (
  sharedFilters: SharedFilter[],
  remapRowIndex: (rowIndex: number) => number | null
): SharedFilter[] =>
  sharedFilters.map(sharedFilter => {
    if (!sharedFilter.usedBy) return sharedFilter

    const nextUsedBy = dedupeSharedFilterTargets(
      sharedFilter.usedBy.flatMap(target => {
        const isNumericRowTarget = typeof target === 'number' || (typeof target === 'string' && /^-?\d+$/.test(target))
        if (!isNumericRowTarget) return [target]

        const mappedRowIndex = remapRowIndex(Number(target))
        return mappedRowIndex === null ? [] : [typeof target === 'number' ? mappedRowIndex : `${mappedRowIndex}`]
      })
    )

    return nextUsedBy === sharedFilter.usedBy ? sharedFilter : { ...sharedFilter, usedBy: nextUsedBy }
  })

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
