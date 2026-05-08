import { describe, expect, it } from 'vitest'
import { cloneDashboardWidget } from '../cloneDashboardWidget'

const makeConfig = () =>
  ({
    dashboard: {
      sharedFilters: [
        { key: 'scoped-to-source', usedBy: ['source-widget'], setBy: 'source-widget' },
        { key: 'scoped-to-condition', usedBy: ['source-condition'] },
        { key: 'unscoped' },
        { key: 'empty-used-by', usedBy: [] },
        { key: 'row-target', usedBy: [0] }
      ]
    },
    rows: [
      {
        dashboardCondition: { id: 'row-condition', operator: 'hasData', datasetKey: 'row-condition-data' },
        columns: [
          {
            width: 4,
            conditionalWidgets: [
              {
                widget: 'source-widget',
                dashboardCondition: {
                  id: 'source-condition',
                  operator: 'columnHasAnyValue',
                  datasetKey: 'condition-data',
                  columnName: 'state',
                  values: ['CA']
                }
              }
            ]
          },
          { width: 4 },
          {
            width: 4,
            conditionalWidgets: [
              {
                widget: 'existing-widget',
                dashboardCondition: { id: 'existing-condition', operator: 'hasData', datasetKey: 'condition-data' }
              }
            ]
          }
        ],
        expandCollapseAllButtons: false
      }
    ],
    visualizations: {
      'source-widget': {
        uid: 'source-widget',
        type: 'markup-include',
        visualizationType: 'markup-include',
        contentEditor: { title: 'Source' }
      },
      'existing-widget': {
        uid: 'existing-widget',
        type: 'markup-include',
        visualizationType: 'markup-include',
        contentEditor: { title: 'Existing' }
      }
    }
  } as any)

describe('cloneDashboardWidget', () => {
  it('clones a simple component into an empty simple column with a fresh key and uid', () => {
    const config = makeConfig()
    delete config.rows[0].columns[0].conditionalWidgets[0].dashboardCondition

    const result = cloneDashboardWidget(config, 'source-widget', { rowIdx: 0, colIdx: 1 })
    const clonedWidgetKey = result.rows[0].columns[1].widget

    expect(clonedWidgetKey).toBeTruthy()
    expect(clonedWidgetKey).not.toBe('source-widget')
    expect(result.visualizations[clonedWidgetKey].uid).toBe(clonedWidgetKey)
    expect(result.visualizations[clonedWidgetKey].contentEditor.title).toBe('Source')
    expect(result.rows[0].columns[0].conditionalWidgets[0].widget).toBe('source-widget')
    expect(config.rows[0].columns[1].widget).toBeUndefined()
  })

  it('clones a component into an empty conditional slot and copies its component condition with a fresh id', () => {
    const config = makeConfig()

    const result = cloneDashboardWidget(config, 'source-widget', { rowIdx: 0, colIdx: 2, entryIdx: 1 })
    const clonedEntry = result.rows[0].columns[2].conditionalWidgets[1]

    expect(clonedEntry.widget).toBeTruthy()
    expect(clonedEntry.widget).not.toBe('source-widget')
    expect(clonedEntry.dashboardCondition).toMatchObject({
      operator: 'columnHasAnyValue',
      datasetKey: 'condition-data',
      columnName: 'state',
      values: ['CA']
    })
    expect(clonedEntry.dashboardCondition.id).toBeTruthy()
    expect(clonedEntry.dashboardCondition.id).not.toBe('source-condition')
    expect(clonedEntry.dashboardCondition.id).not.toBe('row-condition')
  })

  it('updates explicitly scoped shared filter targets while leaving unscoped filters and setBy unchanged', () => {
    const config = makeConfig()

    const result = cloneDashboardWidget(config, 'source-widget', { rowIdx: 0, colIdx: 2, entryIdx: 1 })
    const clonedEntry = result.rows[0].columns[2].conditionalWidgets[1]

    expect(result.dashboard.sharedFilters[0].usedBy).toEqual(['source-widget', clonedEntry.widget])
    expect(result.dashboard.sharedFilters[0].setBy).toBe('source-widget')
    expect(result.dashboard.sharedFilters[1].usedBy).toEqual(['source-condition', clonedEntry.dashboardCondition.id])
    expect(result.dashboard.sharedFilters[2].usedBy).toBeUndefined()
    expect(result.dashboard.sharedFilters[3].usedBy).toEqual([])
    expect(result.dashboard.sharedFilters[4].usedBy).toEqual([0])
  })
})
