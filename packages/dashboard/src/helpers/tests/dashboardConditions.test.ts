import { describe, expect, it } from 'vitest'
import {
  dashboardRowsUseFiltersIncomplete,
  ensureRowConditionIds,
  evaluateDashboardCondition,
  getDashboardConditionFilteredData,
  hasIncompleteFiltersForDashboardCondition
} from '../dashboardConditions'
import {
  getDashboardConditionTargets,
  getSharedFilterTargetOptions,
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

  it('assigns row condition ids without requiring normalized columns', () => {
    const rows = ensureRowConditionIds([
      {
        dashboardCondition: { datasetKey: 'dataset-1', operator: 'hasData' },
        expandCollapseAllButtons: false
      }
    ] as any)

    expect(rows[0].dashboardCondition?.id).toMatch(/^dashboard-condition-/)
    expect(rows[0]).not.toHaveProperty('columns')
  })

  it('preserves legacy array-shaped rows for version migrations', () => {
    const legacyRow = [{ width: 12, widget: 'viz-1' }]
    const rows = ensureRowConditionIds([legacyRow] as any)

    expect(rows[0]).toBe(legacyRow)
  })

  it('tracks dashboard condition owner filter targets without exposing condition ids as Used By options', () => {
    const rows = [
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
        columns: [
          {
            width: 12,
            conditionalWidgets: [
              { widget: 'viz-row-data', dashboardCondition: { id: 'row-data-condition', operator: 'hasData' } }
            ]
          }
        ],
        dataKey: 'row-data',
        expandCollapseAllButtons: false
      },
      {
        columns: [{ width: 12, widget: 'viz-2' }],
        dashboardCondition: { id: 'row-condition-2', operator: 'hasData' },
        expandCollapseAllButtons: false,
        toggle: true
      }
    ] as any
    const { nameLookup, options } = getSharedFilterTargetOptions(
      {
        dashboard: { sharedFilters: [] },
        rows,
        visualizations: {
          'viz-1': { uid: 'viz-1', type: 'markup-include', visualizationType: 'markup-include' },
          'viz-2': { uid: 'viz-2', type: 'markup-include', visualizationType: 'markup-include' },
          'viz-3': { uid: 'viz-3', type: 'markup-include', visualizationType: 'markup-include' },
          'viz-row-data': { uid: 'viz-row-data', type: 'markup-include', visualizationType: 'markup-include' }
        }
      } as any,
      {}
    )

    expect(
      getDashboardConditionTargets(rows).map(conditionTarget => ({
        id: conditionTarget.id,
        filterTarget: conditionTarget.filterTarget
      }))
    ).toEqual([
      { id: 'row-condition-1', filterTarget: 0 },
      { id: 'column-condition-1', filterTarget: 'viz-1' },
      { id: 'column-condition-3', filterTarget: 'viz-3' },
      { id: 'row-data-condition', filterTarget: 1 }
    ])
    expect(options).toEqual(['viz-1', 'viz-2', 'viz-3', 0, 1])
    expect(nameLookup['0']).toBe('Row 1')
    expect(nameLookup['1']).toBe('Row 2')
    expect(nameLookup['row-condition-1']).toBeUndefined()
    expect(nameLookup['column-condition-1']).toBeUndefined()
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
            usedBy: [0]
          }
        ]
      } as any,
      {
        'condition-data': [{ region: 'East' }]
      },
      0
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
            usedBy: ['markup-1']
          }
        ]
      } as any,
      {},
      'markup-1'
    )

    expect(filteredData).toEqual([{}])
    expect(
      evaluateDashboardCondition({ id: 'column-condition-1', operator: 'filtersIncomplete' }, filteredData)
    ).toEqual({ matches: true, resolved: true })
  })

  it('uses owner-target filter semantics for filtersIncomplete, including unscoped filters', () => {
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
      hasIncompleteFiltersForDashboardCondition(
        { id: 'column-condition-1', operator: 'filtersIncomplete' },
        dashboard,
        'markup-1'
      )
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
            usedBy: ['other-widget']
          }
        ]
      } as any,
      {},
      'markup-1'
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
            usedBy: [0]
          }
        ]
      } as any,
      {
        'condition-data': [{ region: 'East' }]
      },
      0
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
      },
      0
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

  it('preserves unknown string usedBy targets when remapping row targets', () => {
    const remappedTargets = remapRowTargetsInSharedFilters(
      [
        {
          key: 'Legacy Footnote Filter',
          type: 'datafilter',
          columnName: 'FootnoteScope',
          usedBy: ['footnotes-legacy-target', 1]
        }
      ] as any,
      rowIndex => (rowIndex === 1 ? 0 : rowIndex)
    )

    expect(remappedTargets[0].usedBy).toEqual(['footnotes-legacy-target', 0])
  })

  it('does not treat unrelated unknown targets as owner targets for data-backed conditions', () => {
    const filteredData = getDashboardConditionFilteredData(
      { id: 'row-condition-1', datasetKey: 'condition-data', operator: 'hasData' },
      {
        sharedFilters: [
          {
            key: 'Unknown Target Filter',
            type: 'datafilter',
            columnName: 'region',
            showDropdown: true,
            active: '',
            usedBy: ['legacy-footnote-target']
          }
        ]
      } as any,
      {
        'condition-data': [{ region: 'East' }]
      },
      0
    )

    expect(filteredData).toEqual([{ region: 'East' }])
  })
})
