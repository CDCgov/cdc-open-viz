import _ from 'lodash'
import type { AnyVisualization } from '@cdc/core/types/Visualization'
import { createCoveId } from '@cdc/core/helpers/createCoveId'
import type { MultiDashboardConfig } from '../types/MultiDashboard'
import type { ConfigRow, DashboardCondition } from '../types/ConfigRow'
import type { Dashboard } from '../types/Dashboard'
import type { SharedFilter } from '../types/SharedFilter'
import { getDashboardConditionIds } from './dashboardConditions'
import { getConditionalWidgets, hasConditionalWidgets, normalizeConditionalColumn } from './dashboardColumnWidgets'

export type CloneDashboardWidgetTarget = {
  rowIdx: number
  colIdx: number
  entryIdx?: number
}

export type CopiedDashboardWidget = {
  sourceWidgetKey: string
  label: string
  visualization: AnyVisualization
  dashboard: Pick<Dashboard, 'sharedFilters'>
  sourceDashboardIndex?: number
  sourceDashboardCondition?: DashboardCondition
  sourceFilterTarget: string | number
}

export type CloneDashboardWidgetOptions = {
  isCrossDashboardPaste?: boolean
}

const normalizeTarget = (target: string | number) => `${target}`

const appendTarget = (targets: (string | number)[], target: string | number) => {
  if (targets.some(existingTarget => normalizeTarget(existingTarget) === normalizeTarget(target))) return targets
  return [...targets, target]
}

const createClonedWidgetKey = (
  sourceVisualization: AnyVisualization,
  visualizations: Record<string, AnyVisualization>
) => {
  return createCoveId(sourceVisualization.type, { existingIds: Object.keys(visualizations) })
}

const getSourceDashboardCondition = (rows: ConfigRow[], sourceWidgetKey: string): DashboardCondition | undefined => {
  for (const row of rows) {
    for (const column of row.columns || []) {
      if (!hasConditionalWidgets(column)) continue

      const sourceEntry = getConditionalWidgets(column).find(entry => entry.widget === sourceWidgetKey)
      if (sourceEntry?.dashboardCondition) return sourceEntry.dashboardCondition
    }
  }

  return undefined
}

const getWidgetFilterTarget = (rows: ConfigRow[], widgetKey: string): string | number => {
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex]
    const widgetInRow = row.columns?.some(
      column => column.widget === widgetKey || getConditionalWidgets(column).some(entry => entry.widget === widgetKey)
    )

    if (widgetInRow) {
      return row.dataKey ? rowIndex : widgetKey
    }
  }

  return widgetKey
}

export const createCopiedDashboardWidget = (
  config: MultiDashboardConfig,
  sourceWidgetKey: string,
  label: string,
  sourceVisualization: AnyVisualization = config.visualizations[sourceWidgetKey]
): CopiedDashboardWidget => ({
  sourceWidgetKey,
  label,
  visualization: _.cloneDeep(sourceVisualization),
  dashboard: {
    sharedFilters: _.cloneDeep(config.dashboard?.sharedFilters || [])
  },
  sourceDashboardIndex: config.activeDashboard,
  sourceDashboardCondition: _.cloneDeep(getSourceDashboardCondition(config.rows || [], sourceWidgetKey)),
  sourceFilterTarget: getWidgetFilterTarget(config.rows || [], sourceWidgetKey)
})

export const cloneDashboardWidget = (
  config: MultiDashboardConfig,
  copiedWidget: CopiedDashboardWidget,
  target: CloneDashboardWidgetTarget,
  options: CloneDashboardWidgetOptions = {}
): MultiDashboardConfig => {
  const sourceVisualization = copiedWidget.visualization
  const targetColumn = config.rows?.[target.rowIdx]?.columns?.[target.colIdx]

  if (!sourceVisualization || !targetColumn) return config

  if (target.entryIdx !== undefined) {
    const existingEntry = getConditionalWidgets(targetColumn)[target.entryIdx]
    if (existingEntry?.widget) return config
  } else if (targetColumn.widget || hasConditionalWidgets(targetColumn)) {
    return config
  }

  const clonedWidgetKey = createClonedWidgetKey(sourceVisualization, config.visualizations)
  const clonedVisualization = { ..._.cloneDeep(sourceVisualization), uid: clonedWidgetKey }
  const clonedDashboardCondition = copiedWidget.sourceDashboardCondition
    ? {
        ..._.cloneDeep(copiedWidget.sourceDashboardCondition),
        id: createCoveId('condition', { existingIds: getDashboardConditionIds(config.rows) })
      }
    : undefined

  const nextRows = _.cloneDeep(config.rows)
  const nextTargetColumn = nextRows[target.rowIdx].columns[target.colIdx]

  if (target.entryIdx !== undefined || hasConditionalWidgets(nextTargetColumn) || clonedDashboardCondition) {
    const nextConditionalWidgets = [...(nextTargetColumn.conditionalWidgets || [])]
    const targetEntryIndex = target.entryIdx ?? nextConditionalWidgets.length
    nextConditionalWidgets[targetEntryIndex] = {
      widget: clonedWidgetKey,
      ...(clonedDashboardCondition ? { dashboardCondition: clonedDashboardCondition } : {})
    }
    nextRows[target.rowIdx].columns[target.colIdx] = normalizeConditionalColumn({
      ...nextTargetColumn,
      widget: undefined,
      conditionalWidgets: nextConditionalWidgets.filter(entry => !!entry?.widget)
    })
  } else {
    nextRows[target.rowIdx].columns[target.colIdx].widget = clonedWidgetKey
  }

  let sharedFilters = config.dashboard.sharedFilters
  const isSameDashboard = !options.isCrossDashboardPaste

  if (sourceVisualization.type === 'dashboardFilters') {
    const sourceFilterIndexes = (sourceVisualization.sharedFilterIndexes || []).map(Number)
    const filterIndexMap = sourceFilterIndexes.reduce<Record<number, number>>((acc, sourceFilterIndex) => {
      if (Number.isNaN(sourceFilterIndex)) return acc

      if (isSameDashboard) {
        if (config.dashboard.sharedFilters?.[sourceFilterIndex]) acc[sourceFilterIndex] = sourceFilterIndex
        return acc
      }

      const sourceFilter = copiedWidget.dashboard.sharedFilters?.[sourceFilterIndex]
      if (!sourceFilter) return acc

      const nextFilterIndex = sharedFilters?.length ?? 0
      sharedFilters = [...(sharedFilters || []), _.cloneDeep(sourceFilter) as SharedFilter]
      acc[sourceFilterIndex] = nextFilterIndex
      return acc
    }, {})

    clonedVisualization.sharedFilterIndexes = sourceFilterIndexes
      .filter(sourceFilterIndex => filterIndexMap[sourceFilterIndex] !== undefined)
      .map(sourceFilterIndex => filterIndexMap[sourceFilterIndex])
  } else if (isSameDashboard) {
    const clonedFilterTarget = nextRows[target.rowIdx]?.dataKey ? target.rowIdx : clonedWidgetKey
    sharedFilters = config.dashboard.sharedFilters?.map(sharedFilter => {
      if (!sharedFilter.usedBy?.length) return sharedFilter

      let nextUsedBy = sharedFilter.usedBy

      if (
        sharedFilter.usedBy.some(target => normalizeTarget(target) === normalizeTarget(copiedWidget.sourceFilterTarget))
      ) {
        nextUsedBy = appendTarget(nextUsedBy, clonedFilterTarget)
      }

      return nextUsedBy === sharedFilter.usedBy ? sharedFilter : { ...sharedFilter, usedBy: nextUsedBy }
    })
  }

  return {
    ...config,
    dashboard: {
      ...config.dashboard,
      ...(sharedFilters ? { sharedFilters } : {})
    },
    rows: nextRows,
    visualizations: {
      ...config.visualizations,
      [clonedWidgetKey]: clonedVisualization
    }
  }
}
