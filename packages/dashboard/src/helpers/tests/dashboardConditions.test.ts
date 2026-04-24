import { describe, expect, it } from 'vitest'
import {
  dashboardRowsUseFiltersIncomplete,
  ensureRowConditionIds,
  evaluateDashboardCondition,
  getDashboardConditionFilteredData,
  hasIncompleteFiltersForDashboardCondition
} from '../dashboardConditions'
import {
  cleanupSharedFilterUsedByTargets,
  getDashboardConditionTargetOptions,
  remapRowTargetsInSharedFilters
} from '../dashboardFilterTargets'

describe('dashboardConditions', () => {
  it('assigns missing condition ids and preserves existing ones', () => {
    const rows = ensureRowConditionIds([
      {
        columns: [
          {
            width: 6,
            conditionalWidgets: [
              { widget: 'viz-1', dashboardCondition: { datasetKey: 'dataset-1', operator: 'hasData' } }
            ]
          },
          { width: 6, widget: 'viz-2' }
        ],
        dashboardCondition: { datasetKey: 'dataset-1', operator: 'hasData' },
        expandCollapseAllButtons: false
      }
    ] as any)

    expect(rows[0].dashboardCondition?.id).toMatch(/^dashboard-condition-/)
    expect(rows[0].columns[0].conditionalWidgets?.[0].dashboardCondition?.id).toMatch(/^dashboard-condition-/)
    expect(rows[0].columns[1]).toMatchObject({ widget: 'viz-2' })
  })

  it('includes row and column dashboard condition targets for supported rows only', () => {
    const { nameLookup, options } = getDashboardConditionTargetOptions([
      {
        columns: [
          {
            width: 12,
            conditionalWidgets: [
              { widget: 'viz-1', dashboardCondition: { id: 'column-condition-1', operator: 'hasData' } },
              { widget: 'viz-3', dashboardCondition: { id: 'column-condition-3', operator: 'hasNoData' } }
            ]
          }
        ],
        dashboardCondition: { id: 'row-condition-1', operator: 'hasData' },
        expandCollapseAllButtons: false
      },
      {
        columns: [{ width: 12, widget: 'viz-2' }],
        dashboardCondition: { id: 'row-condition-2', operator: 'hasData' },
        expandCollapseAllButtons: false,
        toggle: true
      }
    ] as any)

    expect(options).toEqual(['row-condition-1', 'column-condition-1', 'column-condition-3'])
    expect(nameLookup['row-condition-1']).toBe('Row 1 Dashboard Condition')
    expect(nameLookup['column-condition-1']).toBe('Row 1 Column 1 Component 1 Dashboard Condition')
    expect(nameLookup['column-condition-3']).toBe('Row 1 Column 1 Component 2 Dashboard Condition')
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

  it('detects filtersIncomplete conditions without requiring a dataset', () => {
    expect(
      dashboardRowsUseFiltersIncomplete([
        {
          columns: [
            {
              width: 12,
              conditionalWidgets: [
                {
                  widget: 'markup-1',
                  dashboardCondition: { id: 'column-condition-1', operator: 'filtersIncomplete' }
                }
              ]
            }
          ],
          expandCollapseAllButtons: false
        }
      ] as any)
    ).toBe(true)

    const filteredData = getDashboardConditionFilteredData(
      { id: 'column-condition-1', operator: 'filtersIncomplete' },
      {
        sharedFilters: [
          {
            key: 'Region',
            type: 'datafilter',
            columnName: 'region',
            showDropdown: true,
            active: '',
            usedBy: ['column-condition-1']
          }
        ]
      } as any,
      {}
    )

    expect(filteredData).toEqual([{}])
    expect(
      evaluateDashboardCondition({ id: 'column-condition-1', operator: 'filtersIncomplete' }, filteredData)
    ).toEqual({ matches: true, resolved: true })
  })

  it('uses condition-target filter semantics for filtersIncomplete, including unscoped filters', () => {
    const dashboard = {
      sharedFilters: [
        {
          key: 'Unscoped Region',
          type: 'datafilter',
          columnName: 'region',
          showDropdown: true,
          active: '',
          usedBy: []
        }
      ]
    } as any

    expect(
      hasIncompleteFiltersForDashboardCondition({ id: 'column-condition-1', operator: 'filtersIncomplete' }, dashboard)
    ).toBe(true)
  })

  it('ignores reset filters scoped only to unrelated targets for filtersIncomplete', () => {
    const filteredData = getDashboardConditionFilteredData(
      { id: 'column-condition-1', operator: 'filtersIncomplete' },
      {
        sharedFilters: [
          {
            key: 'Other Region',
            type: 'datafilter',
            columnName: 'region',
            showDropdown: true,
            active: '',
            usedBy: ['other-condition']
          }
        ]
      } as any,
      {}
    )

    expect(filteredData).toEqual([])
    expect(
      evaluateDashboardCondition({ id: 'column-condition-1', operator: 'filtersIncomplete' }, filteredData)
    ).toEqual({ matches: false, resolved: true })
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

  it('cleans orphaned widget and dashboard condition targets out of shared filter usedBy', () => {
    const sharedFilters = cleanupSharedFilterUsedByTargets({
      dashboard: {
        sharedFilters: [
          {
            key: 'Region',
            type: 'datafilter',
            columnName: 'region',
            usedBy: ['viz-1', 'deleted-viz', 'row-condition-1', 'deleted-condition']
          }
        ]
      },
      rows: [
        {
          dataKey: 'row-data',
          columns: [
            {
              width: 12,
              conditionalWidgets: [
                { widget: 'viz-1', dashboardCondition: { id: 'row-condition-1', operator: 'hasData' } }
              ]
            }
          ]
        }
      ],
      visualizations: {
        'viz-1': { uid: 'viz-1', type: 'markup-include', visualizationType: 'markup-include' }
      }
    } as any)

    expect(sharedFilters[0].usedBy).toEqual(['viz-1', 'row-condition-1'])
  })

  it('remaps row usedBy targets when rows are deleted or moved', () => {
    const deletedRowTargets = remapRowTargetsInSharedFilters(
      [
        {
          key: 'Row Filter',
          type: 'datafilter',
          columnName: 'region',
          usedBy: [0, 1, '2', 'viz-1']
        }
      ] as any,
      rowIndex => {
        if (rowIndex === 1) return null
        if (rowIndex > 1) return rowIndex - 1
        return rowIndex
      }
    )

    expect(deletedRowTargets[0].usedBy).toEqual([0, '1', 'viz-1'])

    const movedRowTargets = remapRowTargetsInSharedFilters(
      [
        {
          key: 'Row Filter',
          type: 'datafilter',
          columnName: 'region',
          usedBy: [0, 1, 'viz-1']
        }
      ] as any,
      rowIndex => {
        if (rowIndex === 0) return 1
        if (rowIndex === 1) return 0
        return rowIndex
      }
    )

    expect(movedRowTargets[0].usedBy).toEqual([1, 0, 'viz-1'])
  })
})
