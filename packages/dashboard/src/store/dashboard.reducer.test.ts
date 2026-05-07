import { describe, it, expect } from 'vitest'
import reducer, { DashboardState } from './dashboard.reducer'
import { initialState } from '../DashboardContext'

const makeState = (overrides: Partial<DashboardState['config']> = {}): DashboardState => ({
  ...initialState,
  config: {
    type: 'dashboard',
    label: 'Tab A',
    activeDashboard: 0,
    datasets: {},
    visualizations: {},
    rows: [],
    dashboard: { sharedFilters: [] },
    multiDashboards: [
      { label: 'Tab A', dashboard: { sharedFilters: [] }, visualizations: {}, rows: [] },
      { label: 'Tab B', dashboard: { sharedFilters: [] }, visualizations: {}, rows: [] }
    ],
    ...overrides
  } as any
})

describe('RENAME_DASHBOARD_TAB', () => {
  it('updates config.label for the active tab', () => {
    const state = makeState()
    const next = reducer(state, { type: 'RENAME_DASHBOARD_TAB', payload: { current: 'Tab A', new: 'Renamed' } })
    expect(next.config.label).toBe('Renamed')
  })

  it('updates the matching entry in multiDashboards', () => {
    const state = makeState()
    const next = reducer(state, { type: 'RENAME_DASHBOARD_TAB', payload: { current: 'Tab A', new: 'Renamed' } })
    expect(next.config.multiDashboards[0].label).toBe('Renamed')
  })

  it('does not rename non-matching tabs', () => {
    const state = makeState()
    const next = reducer(state, { type: 'RENAME_DASHBOARD_TAB', payload: { current: 'Tab A', new: 'Renamed' } })
    expect(next.config.multiDashboards[1].label).toBe('Tab B')
  })

  it('does not mutate the previous multiDashboards state', () => {
    const state = makeState()
    const next = reducer(state, { type: 'RENAME_DASHBOARD_TAB', payload: { current: 'Tab A', new: 'Renamed' } })

    expect(state.config.multiDashboards[0].label).toBe('Tab A')
    expect(next.config.multiDashboards[0].label).toBe('Renamed')
  })
})

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

  it('removes only deleted dashboard condition targets when a row condition is cleared', () => {
    const state = baseState()
    state.config.rows[0].dashboardCondition = {
      id: 'row-condition-1',
      datasetKey: 'condition-data',
      operator: 'hasData'
    }
    state.config.dashboard.sharedFilters = [
      {
        key: 'County',
        type: 'datafilter',
        columnName: 'county',
        usedBy: ['row-condition-1', 'condition-1', 'legacy-footnote-target', 'viz-1']
      }
    ] as any

    const nextState = reducer(state, {
      type: 'UPDATE_ROW',
      payload: {
        rowIndex: 0,
        rowData: {
          dashboardCondition: undefined
        }
      }
    } as any)

    expect(nextState.config.dashboard.sharedFilters[0].usedBy).toEqual([
      'condition-1',
      'legacy-footnote-target',
      'viz-1'
    ])
  })

  it('removes deleted conditional widget condition targets when deleting a widget', () => {
    const state = baseState()
    state.config.dashboard.sharedFilters = [
      {
        key: 'County',
        type: 'datafilter',
        columnName: 'county',
        usedBy: ['condition-1', 'condition-2', 'legacy-footnote-target', 'viz-2']
      }
    ] as any

    const nextState = reducer(state, {
      type: 'DELETE_WIDGET',
      payload: { uid: 'viz-2' }
    })

    expect(nextState.config.dashboard.sharedFilters[0].usedBy).toEqual(['condition-1', 'legacy-footnote-target'])
  })

  it('clones a visualization through the multi-dashboard save path', () => {
    const state = baseState()
    delete state.config.rows[0].columns[0].conditionalWidgets[0].dashboardCondition
    state.config.rows[0].columns.push({ width: 12 })
    state.config.multiDashboards = [
      {
        label: 'Tab A',
        dashboard: state.config.dashboard,
        visualizations: state.config.visualizations,
        rows: state.config.rows
      },
      { label: 'Tab B', dashboard: { sharedFilters: [] }, visualizations: {}, rows: [] }
    ] as any
    state.config.activeDashboard = 0

    const nextState = reducer(state, {
      type: 'CLONE_VISUALIZATION',
      payload: { sourceWidgetKey: 'viz-1', rowIdx: 0, colIdx: 1 }
    })
    const clonedWidgetKey = nextState.config.rows[0].columns[1].widget

    expect(clonedWidgetKey).toBeTruthy()
    expect(clonedWidgetKey).not.toBe('viz-1')
    expect(nextState.config.visualizations[clonedWidgetKey].uid).toBe(clonedWidgetKey)
    expect(nextState.config.multiDashboards[0].rows[0].columns[1].widget).toBe(clonedWidgetKey)
    expect(nextState.config.multiDashboards[1].label).toBe('Tab B')
  })

  it('precomputes filtered data for a cloned visualization targeted by shared filters', () => {
    const state = baseState()
    const data = [
      { name: 'Alice', value: 1 },
      { name: 'Bob', value: 2 }
    ]

    delete state.config.rows[0].columns[0].conditionalWidgets[0].dashboardCondition
    state.config.rows[0].columns.push({ width: 12 })
    state.config.datasets = {
      data1: { data }
    } as any
    state.data = { data1: data }
    state.config.visualizations['viz-1'] = {
      uid: 'viz-1',
      type: 'chart',
      visualizationType: 'Bar',
      dataKey: 'data1'
    } as any
    state.config.dashboard.sharedFilters = [
      {
        key: 'name',
        id: 1,
        type: 'datafilter',
        filterStyle: 'dropdown',
        showDropdown: true,
        parents: [],
        values: ['Alice', 'Bob'],
        active: 'Alice',
        columnName: 'name',
        usedBy: ['viz-1']
      }
    ] as any

    const nextState = reducer(state, {
      type: 'CLONE_VISUALIZATION',
      payload: { sourceWidgetKey: 'viz-1', rowIdx: 0, colIdx: 1 }
    })
    const clonedWidgetKey = nextState.config.rows[0].columns[1].widget

    expect(nextState.config.dashboard.sharedFilters[0].usedBy).toEqual(['viz-1', clonedWidgetKey])
    expect(nextState.filteredData).toMatchObject({
      'viz-1': [data[0]],
      [clonedWidgetKey]: [data[0]]
    })
  })
})
