import { describe, expect, it } from 'vitest'
import {
  DASHBOARD_CONDITION_TYPE_LABELS,
  getColumnHasAnyValueSummaryParts,
  getDashboardConditionSummary
} from '../dashboardConditionUi'

describe('dashboardConditionUi', () => {
  it('uses shared dropdown labels for simple condition summaries', () => {
    expect(getDashboardConditionSummary({ operator: 'hasData' })).toBe(DASHBOARD_CONDITION_TYPE_LABELS.hasData)
    expect(getDashboardConditionSummary({ operator: 'hasNoData' })).toBe(DASHBOARD_CONDITION_TYPE_LABELS.hasNoData)
    expect(getDashboardConditionSummary({ operator: 'filtersIncomplete' })).toBe(
      DASHBOARD_CONDITION_TYPE_LABELS.filtersIncomplete
    )
  })

  it('summarizes columnHasAnyValue with only the inspected column name', () => {
    expect(
      getDashboardConditionSummary({
        operator: 'columnHasAnyValue',
        datasetKey: 'condition-data',
        columnName: 'state',
        values: ['Adams', 'Brown']
      })
    ).toBe('Show based on the value in the state column')
  })

  it('shares columnHasAnyValue summary parts for rich text rendering', () => {
    expect(getColumnHasAnyValueSummaryParts('state')).toEqual({
      prefix: 'Show based on the value in the ',
      columnName: 'state',
      suffix: ' column'
    })
  })

  it('falls back safely for incomplete or unknown condition details', () => {
    expect(getDashboardConditionSummary({ operator: 'columnHasAnyValue' })).toBe('Show when column has a value')
    expect(getDashboardConditionSummary({ operator: 'unknownOperator' } as any)).toBe('Dashboard condition configured')
    expect(getDashboardConditionSummary()).toBe('Dashboard condition configured')
  })
})
