import { afterEach, describe, expect, it, vi } from 'vitest'
import { cloneDashboardWidget, CopiedDashboardWidget } from '../cloneDashboardWidget'

const makeConfig = () =>
  ({
    dashboard: {
      sharedFilters: [
        { key: 'scoped-to-source', usedBy: ['source-widget'], setBy: 'source-widget' },
        { key: 'unknown-target', usedBy: ['legacy-footnote-target'] },
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

const copyWidget = (config: any, sourceWidgetKey = 'source-widget', activeDashboard = 0): CopiedDashboardWidget => ({
  sourceWidgetKey,
  label: 'Source',
  visualization: structuredClone(config.visualizations[sourceWidgetKey]),
  dashboard: structuredClone(config.dashboard),
  sourceDashboardIndex: activeDashboard,
  sourceDashboardCondition: structuredClone(
    config.rows[0]?.columns[0]?.conditionalWidgets?.find(entry => entry.widget === sourceWidgetKey)?.dashboardCondition
  ),
  sourceFilterTarget: sourceWidgetKey
})

describe('cloneDashboardWidget', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('clones a simple component into an empty simple column with a fresh key and uid', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123456789)
    const config = makeConfig()
    delete config.rows[0].columns[0].conditionalWidgets[0].dashboardCondition

    const result = cloneDashboardWidget(config, copyWidget(config), { rowIdx: 0, colIdx: 1 })
    const clonedWidgetKey = result.rows[0].columns[1].widget

    expect(clonedWidgetKey).toBeTruthy()
    expect(clonedWidgetKey).toMatch(/^markup-include-[a-z0-9]{8}$/)
    expect(clonedWidgetKey).not.toContain('copy')
    expect(result.visualizations[clonedWidgetKey].uid).toBe(clonedWidgetKey)
    expect(result.visualizations[clonedWidgetKey].contentEditor.title).toBe('Source')
    expect(result.rows[0].columns[0].conditionalWidgets[0].widget).toBe('source-widget')
    expect(config.rows[0].columns[1].widget).toBeUndefined()
  })

  it('clones a component into an empty conditional slot and copies its component condition with a fresh id', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.123456789).mockReturnValueOnce(0.23456789)
    const config = makeConfig()

    const result = cloneDashboardWidget(config, copyWidget(config), { rowIdx: 0, colIdx: 2, entryIdx: 1 })
    const clonedEntry = result.rows[0].columns[2].conditionalWidgets[1]

    expect(clonedEntry.widget).toBeTruthy()
    expect(clonedEntry.widget).toMatch(/^markup-include-[a-z0-9]{8}$/)
    expect(clonedEntry.widget).not.toContain('copy')
    expect(clonedEntry.dashboardCondition).toMatchObject({
      operator: 'columnHasAnyValue',
      datasetKey: 'condition-data',
      columnName: 'state',
      values: ['CA']
    })
    expect(clonedEntry.dashboardCondition.id).toMatch(/^condition-[a-z0-9]{8}$/)
    expect(clonedEntry.dashboardCondition.id).not.toBe('source-condition')
    expect(clonedEntry.dashboardCondition.id).not.toBe('row-condition')
  })

  it('avoids existing visualization keys when cloning', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.123456789).mockReturnValueOnce(0.23456789)
    const config = makeConfig()
    delete config.rows[0].columns[0].conditionalWidgets[0].dashboardCondition
    config.visualizations['markup-include-4fzzzxjy'] = {
      uid: 'markup-include-4fzzzxjy',
      type: 'markup-include',
      visualizationType: 'markup-include'
    }

    const result = cloneDashboardWidget(config, copyWidget(config), { rowIdx: 0, colIdx: 1 })

    expect(result.rows[0].columns[1].widget).toBe('markup-include-8fzzzbjm')
  })

  it('clones widget-scoped shared filter targets while leaving unknown and unscoped filters unchanged', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123456789)
    const config = makeConfig()

    const result = cloneDashboardWidget(config, copyWidget(config), { rowIdx: 0, colIdx: 2, entryIdx: 1 })
    const clonedEntry = result.rows[0].columns[2].conditionalWidgets[1]

    expect(result.dashboard.sharedFilters[0].usedBy).toEqual(['source-widget', clonedEntry.widget])
    expect(result.dashboard.sharedFilters[0].setBy).toBe('source-widget')
    expect(result.dashboard.sharedFilters[1].usedBy).toEqual(['legacy-footnote-target'])
    expect(result.dashboard.sharedFilters[2].usedBy).toBeUndefined()
    expect(result.dashboard.sharedFilters[3].usedBy).toEqual([])
    expect(result.dashboard.sharedFilters[4].usedBy).toEqual([0])
  })

  it('uses the copied snapshot instead of the source config at paste time', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123456789)
    const config = makeConfig()
    delete config.rows[0].columns[0].conditionalWidgets[0].dashboardCondition
    const copiedWidget = copyWidget(config)
    config.visualizations['source-widget'].contentEditor.title = 'Edited after copy'

    const result = cloneDashboardWidget(config, copiedWidget, { rowIdx: 0, colIdx: 1 })
    const clonedWidgetKey = result.rows[0].columns[1].widget

    expect(result.visualizations[clonedWidgetKey].contentEditor.title).toBe('Source')
  })

  it('clones a normal component across dashboards without copying shared filters or retargeting usedBy', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123456789)
    const sourceConfig = makeConfig()
    const targetConfig = {
      ...makeConfig(),
      activeDashboard: 1,
      dashboard: { sharedFilters: [{ key: 'target-only', usedBy: ['target-widget'] }] },
      rows: [{ columns: [{ width: 12 }], expandCollapseAllButtons: false }],
      visualizations: {}
    } as any

    const result = cloneDashboardWidget(
      targetConfig,
      copyWidget(sourceConfig, 'source-widget', 0),
      {
        rowIdx: 0,
        colIdx: 0
      },
      { isCrossDashboardPaste: true }
    )
    const clonedWidgetKey = result.rows[0].columns[0].conditionalWidgets?.[0].widget

    expect(clonedWidgetKey).toBeTruthy()
    expect(result.visualizations[clonedWidgetKey].contentEditor.title).toBe('Source')
    expect(result.dashboard.sharedFilters).toEqual([{ key: 'target-only', usedBy: ['target-widget'] }])
  })

  it('preserves valid same-dashboard dashboard filter indexes and drops missing indexes', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123456789)
    const config = makeConfig()
    config.visualizations['source-filter-widget'] = {
      uid: 'source-filter-widget',
      type: 'dashboardFilters',
      visualizationType: 'dashboardFilters',
      sharedFilterIndexes: [0, 9, 2]
    }

    const result = cloneDashboardWidget(config, copyWidget(config, 'source-filter-widget'), { rowIdx: 0, colIdx: 1 })
    const clonedWidgetKey = result.rows[0].columns[1].widget

    expect(result.visualizations[clonedWidgetKey].sharedFilterIndexes).toEqual([0, 2])
    expect(result.dashboard.sharedFilters).toHaveLength(5)
  })

  it('clones dashboard filter shared filters across dashboards and rewrites indexes in display order', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123456789)
    const sourceConfig = makeConfig()
    sourceConfig.dashboard.sharedFilters[1] = {
      key: 'parent',
      type: 'datafilter',
      columnName: 'state',
      parents: ['root'],
      apiFilter: { textSelector: 'name', valueSelector: 'id' },
      subGrouping: { columnName: 'group' },
      active: 'CA',
      queuedActive: 'NY'
    }
    sourceConfig.visualizations['source-filter-widget'] = {
      uid: 'source-filter-widget',
      type: 'dashboardFilters',
      visualizationType: 'dashboardFilters',
      sharedFilterIndexes: [1, 0, 99]
    }
    const targetConfig = {
      ...makeConfig(),
      activeDashboard: 1,
      dashboard: { sharedFilters: [{ key: 'target-existing' }] },
      rows: [{ columns: [{ width: 12 }], expandCollapseAllButtons: false }],
      visualizations: {}
    } as any

    const result = cloneDashboardWidget(
      targetConfig,
      copyWidget(sourceConfig, 'source-filter-widget', 0),
      {
        rowIdx: 0,
        colIdx: 0
      },
      { isCrossDashboardPaste: true }
    )
    const clonedWidgetKey = result.rows[0].columns[0].widget

    expect(result.visualizations[clonedWidgetKey].sharedFilterIndexes).toEqual([1, 2])
    expect(result.dashboard.sharedFilters).toHaveLength(3)
    expect(result.dashboard.sharedFilters[1]).toMatchObject({
      key: 'parent',
      parents: ['root'],
      apiFilter: { textSelector: 'name', valueSelector: 'id' },
      subGrouping: { columnName: 'group' },
      active: 'CA',
      queuedActive: 'NY'
    })
    expect(result.dashboard.sharedFilters[2].key).toBe('scoped-to-source')
  })
})
