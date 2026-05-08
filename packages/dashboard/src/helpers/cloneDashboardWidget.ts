import _ from 'lodash'
import type { AnyVisualization } from '@cdc/core/types/Visualization'
import type { DashboardConfig } from '../types/DashboardConfig'
import { ConfigRow, DashboardCondition } from '../types/ConfigRow'
import { createDashboardConditionId } from './dashboardConditions'
import { getConditionalWidgets, hasConditionalWidgets, normalizeConditionalColumn } from './dashboardColumnWidgets'

export type CloneDashboardWidgetTarget = {
  rowIdx: number
  colIdx: number
  entryIdx?: number
}

const normalizeTarget = (target: string | number) => `${target}`

const appendTarget = (targets: (string | number)[], target: string | number) => {
  if (targets.some(existingTarget => normalizeTarget(existingTarget) === normalizeTarget(target))) return targets
  return [...targets, target]
}

const createClonedWidgetKey = (sourceWidgetKey: string, visualizations: Record<string, AnyVisualization>) => {
  let clonedKey = ''

  do {
    clonedKey = `${sourceWidgetKey}-copy-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
  } while (visualizations[clonedKey])

  return clonedKey
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

export const cloneDashboardWidget = (
  config: DashboardConfig,
  sourceWidgetKey: string,
  target: CloneDashboardWidgetTarget
): DashboardConfig => {
  const sourceVisualization = config.visualizations?.[sourceWidgetKey]
  const targetColumn = config.rows?.[target.rowIdx]?.columns?.[target.colIdx]

  if (!sourceVisualization || !targetColumn) return config

  if (target.entryIdx !== undefined) {
    const existingEntry = getConditionalWidgets(targetColumn)[target.entryIdx]
    if (existingEntry?.widget) return config
  } else if (targetColumn.widget || hasConditionalWidgets(targetColumn)) {
    return config
  }

  const clonedWidgetKey = createClonedWidgetKey(sourceWidgetKey, config.visualizations)
  const clonedVisualization = { ..._.cloneDeep(sourceVisualization), uid: clonedWidgetKey }
  const sourceDashboardCondition = getSourceDashboardCondition(config.rows, sourceWidgetKey)
  const clonedDashboardCondition = sourceDashboardCondition
    ? { ..._.cloneDeep(sourceDashboardCondition), id: createDashboardConditionId() }
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

  const sourceConditionId = sourceDashboardCondition?.id
  const clonedConditionId = clonedDashboardCondition?.id
  const sharedFilters = config.dashboard.sharedFilters?.map(sharedFilter => {
    if (!sharedFilter.usedBy?.length) return sharedFilter

    let nextUsedBy = sharedFilter.usedBy

    if (sharedFilter.usedBy.some(target => normalizeTarget(target) === normalizeTarget(sourceWidgetKey))) {
      nextUsedBy = appendTarget(nextUsedBy, clonedWidgetKey)
    }

    if (
      sourceConditionId &&
      clonedConditionId &&
      sharedFilter.usedBy.some(target => normalizeTarget(target) === normalizeTarget(sourceConditionId))
    ) {
      nextUsedBy = appendTarget(nextUsedBy, clonedConditionId)
    }

    return nextUsedBy === sharedFilter.usedBy ? sharedFilter : { ...sharedFilter, usedBy: nextUsedBy }
  })

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
