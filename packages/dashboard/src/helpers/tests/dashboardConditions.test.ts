import { describe, expect, it } from 'vitest'
import {
  ensureRowConditionIds,
  evaluateDashboardCondition,
  getDashboardConditionFilteredData
} from '../dashboardConditions'
import { getDashboardConditionTargetOptions } from '../dashboardFilterTargets'

describe('dashboardConditions', () => {
  it('assigns missing condition ids and preserves existing ones', () => {
    const rows = ensureRowConditionIds([
      {
        columns: [
          { width: 6, widget: 'viz-1', dashboardCondition: { datasetKey: 'dataset-1', operator: 'hasData' } },
          {
            width: 6,
            widget: 'viz-2',
            dashboardCondition: { id: 'column-condition-2', datasetKey: 'dataset-1', operator: 'hasData' }
          }
        ],
        dashboardCondition: { datasetKey: 'dataset-1', operator: 'hasData' },
        expandCollapseAllButtons: false
      }
    ] as any)

    expect(rows[0].dashboardCondition?.id).toMatch(/^dashboard-condition-/)
    expect(rows[0].columns[0].dashboardCondition?.id).toMatch(/^dashboard-condition-/)
    expect(rows[0].columns[1].dashboardCondition?.id).toBe('column-condition-2')
  })

  it('includes row and column dashboard condition targets for supported rows only', () => {
    const { nameLookup, options } = getDashboardConditionTargetOptions([
      {
        columns: [
          { width: 12, widget: 'viz-1', dashboardCondition: { id: 'column-condition-1', operator: 'hasData' } }
        ],
        dashboardCondition: { id: 'row-condition-1', operator: 'hasData' },
        expandCollapseAllButtons: false
      },
      {
        columns: [
          { width: 12, widget: 'viz-2', dashboardCondition: { id: 'column-condition-2', operator: 'hasData' } }
        ],
        dashboardCondition: { id: 'row-condition-2', operator: 'hasData' },
        expandCollapseAllButtons: false,
        toggle: true
      }
    ] as any)

    expect(options).toEqual(['row-condition-1', 'column-condition-1'])
    expect(nameLookup['row-condition-1']).toBe('Row 1 Dashboard Condition')
    expect(nameLookup['column-condition-1']).toBe('Row 1 Column 1 Dashboard Condition')
    expect(nameLookup['row-condition-2']).toBeUndefined()
  })

  it('treats reset-state filters as unresolved instead of hasNoData', () => {
    const filteredData = getDashboardConditionFilteredData(
      { id: 'row-condition-1', datasetKey: 'condition-data', operator: 'hasNoData' },
      {
        sharedFilters: [
          {
            key: 'Region',
            type: 'datafilter',
            columnName: 'region',
            showDropdown: true,
            active: '',
            usedBy: ['row-condition-1']
          }
        ]
      } as any,
      {
        'condition-data': [{ region: 'East' }]
      }
    )

    expect(filteredData).toBeUndefined()
  })

  it('ignores filters whose columns are missing from the condition dataset', () => {
    const filteredData = getDashboardConditionFilteredData(
      { id: 'row-condition-1', datasetKey: 'condition-data', operator: 'hasData' },
      {
        sharedFilters: [
          {
            key: 'Missing Column Filter',
            type: 'datafilter',
            columnName: 'missingColumn',
            showDropdown: true,
            active: 'x',
            usedBy: ['row-condition-1']
          }
        ]
      } as any,
      {
        'condition-data': [{ region: 'East' }]
      }
    )

    expect(filteredData).toEqual([{ region: 'East' }])
  })

  it('matches columnHasAnyValue with loose string coercion', () => {
    const result = evaluateDashboardCondition(
      {
        id: 'column-condition-1',
        datasetKey: 'condition-data',
        operator: 'columnHasAnyValue',
        columnName: 'year',
        values: ['2024', '2025']
      },
      [{ year: 2024 }]
    )

    expect(result.matches).toBe(true)
    expect(result.resolved).toBe(true)
  })

  it('does not treat unrelated unscoped filters without matching dataset columns as unresolved', () => {
    const filteredData = getDashboardConditionFilteredData(
      { id: 'row-condition-1', datasetKey: 'condition-data', operator: 'hasData' },
      {
        sharedFilters: [
          {
            key: 'Unscoped URL Filter',
            type: 'urlfilter',
            showDropdown: true,
            active: '',
            usedBy: []
          },
          {
            key: 'Different Dataset Column',
            type: 'datafilter',
            columnName: 'not_in_dataset',
            showDropdown: true,
            active: '',
            usedBy: []
          }
        ]
      } as any,
      {
        'condition-data': [{ region: 'East' }]
      }
    )

    expect(filteredData).toEqual([{ region: 'East' }])
  })

  it('treats missing precomputed condition data as unresolved', () => {
    const result = evaluateDashboardCondition(
      { id: 'row-condition-1', datasetKey: 'condition-data', operator: 'hasNoData' },
      undefined
    )

    expect(result).toEqual({ matches: false, resolved: false })
  })
})
