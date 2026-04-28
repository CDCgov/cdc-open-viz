import { describe, expect, it } from 'vitest'
import reducer, { DashboardState } from './dashboard.reducer'

const baseState = (): DashboardState =>
  ({
    config: {
      type: 'dashboard',
      activeDashboard: 0,
      dashboard: { sharedFilters: [] },
      datasets: {},
      rows: [
        {
          columns: [
            {
              width: 12,
              conditionalWidgets: [
                {
                  widget: 'viz-1',
                  dashboardCondition: {
                    id: 'condition-1',
                    datasetKey: 'condition-data',
                    operator: 'hasData'
                  }
                },
                {
                  widget: 'viz-2',
                  dashboardCondition: {
                    id: 'condition-2',
                    datasetKey: 'condition-data',
                    operator: 'hasNoData'
                  }
                }
              ]
            }
          ],
          expandCollapseAllButtons: false
        }
      ],
      visualizations: {
        'viz-1': { uid: 'viz-1', type: 'markup-include', visualizationType: 'markup-include' },
        'viz-2': { uid: 'viz-2', type: 'markup-include', visualizationType: 'markup-include' },
        'viz-3': { uid: 'viz-3', type: 'markup-include', visualizationType: 'markup-include' }
      },
      table: {},
      runtime: {}
    } as any,
    data: {},
    filteredData: {},
    loading: false,
    preview: false,
    tabSelected: undefined as any,
    filtersApplied: false
  } as DashboardState)

describe('dashboard reducer conditional columns', () => {
  it('collapses back to simple mode when deleting alternates leaves one unconditioned entry', () => {
    const state = baseState()
    state.config.rows[0].columns[0].conditionalWidgets = [
      { widget: 'viz-1' },
      {
        widget: 'viz-2',
        dashboardCondition: {
          id: 'condition-2',
          datasetKey: 'condition-data',
          operator: 'hasData'
        }
      }
    ]

    const nextState = reducer(state, {
      type: 'DELETE_WIDGET',
      payload: { uid: 'viz-2' }
    })

    expect(nextState.config.rows[0].columns[0]).toMatchObject({
      width: 12,
      widget: 'viz-1',
      conditionalWidgets: undefined
    })
  })

  it('moves a conditional entry into a new conditional slot without dropping its condition', () => {
    const state = baseState()
    state.config.rows[0].columns.push({
      width: 12,
      conditionalWidgets: [
        {
          widget: 'viz-3',
          dashboardCondition: {
            id: 'condition-3',
            datasetKey: 'condition-data',
            operator: 'hasData'
          }
        }
      ]
    })

    const nextState = reducer(state, {
      type: 'MOVE_VISUALIZATION',
      payload: {
        rowIdx: 0,
        colIdx: 1,
        entryIdx: 1,
        widget: {
          uid: 'viz-1',
          rowIdx: 0,
          colIdx: 0,
          entryIdx: 0
        }
      }
    } as any)

    expect(nextState.config.rows[0].columns[1].conditionalWidgets).toEqual([
      {
        widget: 'viz-3',
        dashboardCondition: {
          id: 'condition-3',
          datasetKey: 'condition-data',
          operator: 'hasData'
        }
      },
      {
        widget: 'viz-1',
        dashboardCondition: {
          id: 'condition-1',
          datasetKey: 'condition-data',
          operator: 'hasData'
        }
      }
    ])
    expect(nextState.config.rows[0].columns[0].conditionalWidgets).toEqual([
      {
        widget: 'viz-2',
        dashboardCondition: {
          id: 'condition-2',
          datasetKey: 'condition-data',
          operator: 'hasNoData'
        }
      }
    ])
  })

  it('remaps shared filter targets when a condition edit replaces an id in the same slot', () => {
    const state = baseState()
    state.config.dashboard.sharedFilters = [
      {
        key: 'County',
        type: 'datafilter',
        columnName: 'county',
        usedBy: ['condition-1', 'condition-2']
      }
    ] as any

    const nextState = reducer(state, {
      type: 'UPDATE_ROW',
      payload: {
        rowIndex: 0,
        rowData: {
          columns: [
            {
              width: 12,
              conditionalWidgets: [
                {
                  widget: 'viz-1',
                  dashboardCondition: {
                    id: 'condition-1-replacement',
                    datasetKey: 'condition-data',
                    operator: 'hasData'
                  }
                },
                {
                  widget: 'viz-2',
                  dashboardCondition: {
                    id: 'condition-2',
                    datasetKey: 'condition-data',
                    operator: 'hasNoData'
                  }
                }
              ]
            }
          ]
        }
      }
    } as any)

    expect(nextState.config.dashboard.sharedFilters[0].usedBy).toEqual(['condition-1-replacement', 'condition-2'])
  })
})
