import { describe, expect, it, vi } from 'vitest'
import { getColumnWidgetEntries, normalizeConditionalColumn, resolveColumnWidgetEntry } from '../dashboardColumnWidgets'

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
})
