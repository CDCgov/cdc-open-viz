import { describe, expect, it, vi } from 'vitest'
import {
  getColumnWidgetEntries,
  hasAuthoredWidgetEntries,
  normalizeConditionalColumn,
  resolveColumnWidgetEntry
} from '../dashboardColumnWidgets'

describe('dashboardColumnWidgets', () => {
  it('resolves simple columns through column.widget', () => {
    expect(
      resolveColumnWidgetEntry({
        width: 12,
        widget: 'viz-1'
      } as any)
    ).toMatchObject({ widget: 'viz-1', matches: true })
  })

  it('resolves the first matching conditional widget in author order', () => {
    const evaluateCondition = vi
      .fn()
      .mockImplementation(condition => ({ matches: condition?.id === 'condition-2', resolved: true }))

    const result = resolveColumnWidgetEntry(
      {
        width: 12,
        conditionalWidgets: [
          { widget: 'viz-1', dashboardCondition: { id: 'condition-1', operator: 'hasData' } },
          { widget: 'viz-2', dashboardCondition: { id: 'condition-2', operator: 'hasData' } },
          { widget: 'viz-3', dashboardCondition: { id: 'condition-3', operator: 'hasData' } }
        ]
      } as any,
      { evaluateCondition }
    )

    expect(result).toMatchObject({ widget: 'viz-2', matches: true })
    expect(evaluateCondition).toHaveBeenCalledTimes(2)
  })

  it('passes the conditional widget entry to the condition evaluator', () => {
    const conditionalEntry = { widget: 'viz-1', dashboardCondition: { id: 'condition-1', operator: 'hasData' } }
    const evaluateCondition = vi.fn().mockReturnValue({ matches: true, resolved: true })

    resolveColumnWidgetEntry(
      {
        width: 12,
        conditionalWidgets: [conditionalEntry]
      } as any,
      { evaluateCondition }
    )

    expect(evaluateCondition).toHaveBeenCalledWith(conditionalEntry.dashboardCondition, conditionalEntry)
  })

  it('returns an empty resolution when no conditional widget matches', () => {
    const result = resolveColumnWidgetEntry(
      {
        width: 12,
        conditionalWidgets: [
          { widget: 'viz-1', dashboardCondition: { id: 'condition-1', operator: 'hasData' } },
          { widget: 'viz-2', dashboardCondition: { id: 'condition-2', operator: 'hasData' } }
        ]
      } as any,
      {
        evaluateCondition: () => ({ matches: false, resolved: true })
      }
    )

    expect(result).toEqual({ widget: undefined, matches: false, resolved: true })
  })

  it('returns an unresolved empty resolution when no conditional widget matches and a condition is unresolved', () => {
    const result = resolveColumnWidgetEntry(
      {
        width: 12,
        conditionalWidgets: [
          { widget: 'viz-1', dashboardCondition: { id: 'condition-1', operator: 'hasData' } },
          { widget: 'viz-2', dashboardCondition: { id: 'condition-2', operator: 'hasData' } }
        ]
      } as any,
      {
        evaluateCondition: condition => ({
          matches: false,
          resolved: condition?.id !== 'condition-1'
        })
      }
    )

    expect(result).toEqual({ widget: undefined, matches: false, resolved: false })
  })

  it('collapses a one-entry conditional column back to simple mode when the condition is removed', () => {
    expect(
      normalizeConditionalColumn({
        width: 12,
        widget: undefined,
        conditionalWidgets: [{ widget: 'viz-1' }]
      } as any)
    ).toMatchObject({
      width: 12,
      widget: 'viz-1',
      conditionalWidgets: undefined
    })
  })

  it('keeps one-entry conditional columns in conditional mode when the remaining entry still has a condition', () => {
    expect(
      normalizeConditionalColumn({
        width: 12,
        conditionalWidgets: [{ widget: 'viz-1', dashboardCondition: { id: 'condition-1', operator: 'hasData' } }]
      } as any)
    ).toMatchObject({
      width: 12,
      widget: undefined,
      conditionalWidgets: [{ widget: 'viz-1', dashboardCondition: { id: 'condition-1', operator: 'hasData' } }]
    })
  })

  it('ignores column.widget when conditional widgets are present', () => {
    expect(
      getColumnWidgetEntries({
        width: 12,
        widget: 'simple-viz',
        conditionalWidgets: [{ widget: 'conditional-viz', dashboardCondition: { id: 'condition-1' } }]
      } as any)
    ).toEqual([{ widget: 'conditional-viz', dashboardCondition: { id: 'condition-1' } }])
  })

  it('reports whether a column has authored widget entries', () => {
    expect(hasAuthoredWidgetEntries({ width: 12, widget: 'viz-1' } as any)).toBe(true)
    expect(hasAuthoredWidgetEntries({ width: 12, conditionalWidgets: [{ widget: 'viz-2' }] } as any)).toBe(true)
    expect(hasAuthoredWidgetEntries({ width: 12 } as any)).toBe(false)
  })
})
