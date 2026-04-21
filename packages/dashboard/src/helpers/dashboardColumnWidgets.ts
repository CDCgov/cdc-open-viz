import { DashboardCondition } from '../types/ConfigRow'

export type ConditionalWidget = {
  widget: string
  dashboardCondition?: DashboardCondition
}

type ColumnWithWidgets = {
  widget?: string | null
  conditionalWidgets?: ConditionalWidget[]
}

export const hasConditionalWidgets = (column?: ColumnWithWidgets): boolean => !!column?.conditionalWidgets?.length

export const getConditionalWidgets = (column?: ColumnWithWidgets): ConditionalWidget[] =>
  column?.conditionalWidgets?.filter(entry => !!entry?.widget) || []

export const getColumnWidgetEntries = (column?: ColumnWithWidgets): ConditionalWidget[] => {
  if (!column) return []
  if (hasConditionalWidgets(column)) {
    return getConditionalWidgets(column)
  }

  return column.widget ? [{ widget: column.widget }] : []
}

export const getColumnWidgetKeys = (column?: ColumnWithWidgets): string[] =>
  getColumnWidgetEntries(column)
    .map(entry => entry.widget)
    .filter(Boolean)

export const getColumnPrimaryWidget = (column?: ColumnWithWidgets): string | undefined =>
  getColumnWidgetEntries(column)[0]?.widget

export type DashboardConditionMatch = {
  matches: boolean
  resolved: boolean
}

export type ResolvedColumnWidgetEntry = {
  widget?: string
  dashboardCondition?: DashboardCondition
} & DashboardConditionMatch

type ResolveColumnWidgetOptions = {
  evaluateCondition?: (dashboardCondition?: DashboardCondition) => DashboardConditionMatch
}

export const resolveColumnWidgetEntry = (
  column?: ColumnWithWidgets,
  { evaluateCondition = () => ({ matches: true, resolved: true }) }: ResolveColumnWidgetOptions = {}
): ResolvedColumnWidgetEntry | undefined => {
  const widgetEntries = getColumnWidgetEntries(column)

  for (const entry of widgetEntries) {
    if (!entry.dashboardCondition) {
      return { ...entry, matches: true, resolved: true }
    }

    const evaluation = evaluateCondition(entry.dashboardCondition)
    if (evaluation.matches) {
      return { ...entry, ...evaluation }
    }
  }

  return widgetEntries.length ? { widget: undefined, matches: false, resolved: true } : undefined
}

export const normalizeConditionalColumn = <T extends ColumnWithWidgets>(column: T): T => {
  const conditionalWidgets = getConditionalWidgets(column)

  if (conditionalWidgets.length > 1) {
    return {
      ...column,
      widget: undefined,
      conditionalWidgets
    }
  }

  if (conditionalWidgets.length === 1) {
    const [entry] = conditionalWidgets
    if (entry.dashboardCondition) {
      return {
        ...column,
        widget: undefined,
        conditionalWidgets: [entry]
      }
    }

    return {
      ...column,
      widget: entry.widget,
      conditionalWidgets: undefined
    }
  }

  return {
    ...column,
    conditionalWidgets: undefined
  }
}
