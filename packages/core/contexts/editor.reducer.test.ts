import reducer, { type EditorState } from './editor.reducer'

describe('editor reducer dashboard datasets', () => {
  const importedDataset = {
    data: [{ value: 'new-row' }],
    dataFileName: 'new.csv',
    dataFileSourceType: 'url',
    dataDescription: { horizontal: false, series: false },
    preview: true
  }

  const createState = (): EditorState =>
    ({
      config: {
        type: 'dashboard',
        datasets: {
          old_source: {
            data: [{ value: 'old-row' }],
            dataFileName: 'old.csv',
            dataFileSourceType: 'url',
            preview: true
          },
          secondary: {
            data: [{ value: 'secondary-row' }],
            dataFileName: 'secondary.csv',
            dataFileSourceType: 'url',
            preview: false
          }
        },
        rows: [{ dataKey: 'old_source' }],
        visualizations: {
          first: {
            dataKey: 'old_source'
          }
        }
      } as any,
      errors: [],
      currentViewport: 'lg',
      globalActive: 0
    }) satisfies EditorState

  const createEmptyDashboardState = (): EditorState =>
    ({
      config: {
        type: 'dashboard',
        datasets: {},
        rows: [],
        visualizations: {}
      } as any,
      errors: [],
      currentViewport: 'lg',
      globalActive: 0
    }) satisfies EditorState

  const createGeneratedTable = (dataKey: string, label = dataKey) => ({
    type: 'table',
    visualizationType: 'table',
    filters: [],
    filterBehavior: 'Filter Change',
    newViz: false,
    openModal: true,
    table: {
      show: true,
      showDatasetLink: false,
      showDownloadUrl: false,
      showVertical: true,
      expanded: false,
      collapsible: true,
      label
    },
    columns: {},
    dataFormat: {},
    dataKey,
    dataDescription: { horizontal: false, series: false },
    generatedBy: 'dataset-import'
  })

  const generatedTablesFor = (config: any, dataKey: string) =>
    Object.entries(config.visualizations || {}).filter(
      ([, viz]: [string, any]) => viz.generatedBy === 'dataset-import' && viz.dataKey === dataKey
    )

  it('creates one generated dashboard table row for a brand-new single-dashboard dataset', () => {
    const nextState = reducer(createEmptyDashboardState(), {
      type: 'SET_DASHBOARD_DATASET',
      payload: {
        datasetKey: 'new_source',
        dataset: importedDataset
      }
    } as any)

    expect(nextState.config.datasets.new_source.data).toEqual([{ value: 'new-row' }])
    expect(Object.keys(nextState.config.visualizations)).toEqual(['dashboard-table-new-source'])
    expect(nextState.config.visualizations['dashboard-table-new-source']).toMatchObject({
      type: 'table',
      visualizationType: 'table',
      filters: [],
      filterBehavior: 'Filter Change',
      newViz: false,
      openModal: true,
      columns: {},
      dataFormat: {},
      dataKey: 'new_source',
      dataDescription: { horizontal: false, series: false },
      generatedBy: 'dataset-import',
      table: {
        show: true,
        showDatasetLink: false,
        showDownloadUrl: false,
        showVertical: true,
        expanded: false,
        collapsible: true,
        label: 'new_source'
      }
    })
    expect(nextState.config.rows).toEqual([{ columns: [{ width: 12, widget: 'dashboard-table-new-source' }] }])
  })

  it('uses a numeric suffix when the generated table widget key already exists', () => {
    const state = createEmptyDashboardState()
    state.config.visualizations['dashboard-table-new-source'] = {
      type: 'chart',
      dataKey: 'other_source'
    }

    const nextState = reducer(state, {
      type: 'SET_DASHBOARD_DATASET',
      payload: {
        datasetKey: 'new_source',
        dataset: importedDataset
      }
    } as any)

    expect(nextState.config.visualizations['dashboard-table-new-source'].type).toBe('chart')
    expect(nextState.config.visualizations['dashboard-table-new-source-1']).toMatchObject({
      type: 'table',
      dataKey: 'new_source',
      generatedBy: 'dataset-import'
    })
    expect(nextState.config.rows[0].columns[0].widget).toBe('dashboard-table-new-source-1')
  })

  it('does not duplicate generated tables when replacing an existing dataset with the same key', () => {
    const state = createEmptyDashboardState()
    state.config.datasets.new_source = importedDataset
    state.config.visualizations['dashboard-table-new-source'] = createGeneratedTable('new_source')
    state.config.rows = [{ columns: [{ width: 12, widget: 'dashboard-table-new-source' }] }]

    const nextState = reducer(state, {
      type: 'SET_DASHBOARD_DATASET',
      payload: {
        datasetKey: 'new_source',
        dataset: { ...importedDataset, data: [{ value: 'replacement-row' }] }
      }
    } as any)

    expect(nextState.config.datasets.new_source.data).toEqual([{ value: 'replacement-row' }])
    expect(generatedTablesFor(nextState.config, 'new_source')).toHaveLength(1)
    expect(nextState.config.rows).toHaveLength(1)
  })

  it('updates generated table data keys on dataset rename while preserving user-edited labels', () => {
    const state = createState()
    state.config.visualizations.generatedDefault = createGeneratedTable('old_source')
    state.config.visualizations.generatedEdited = createGeneratedTable('old_source', 'Custom label')

    const nextState = reducer(state, {
      type: 'SET_DASHBOARD_DATASET',
      payload: {
        datasetKey: 'new_source',
        oldDatasetKey: 'old_source',
        dataset: importedDataset
      }
    } as any)

    expect(nextState.config.visualizations.generatedDefault.dataKey).toBe('new_source')
    expect(nextState.config.visualizations.generatedDefault.table.label).toBe('new_source')
    expect(nextState.config.visualizations.generatedEdited.dataKey).toBe('new_source')
    expect(nextState.config.visualizations.generatedEdited.table.label).toBe('Custom label')
  })

  it('replaces dashboard datasets immutably and marks the new source for preview', () => {
    const state = createState()
    const previousDatasets = state.config.datasets
    const previousSecondary = state.config.datasets.secondary

    const nextState = reducer(state, {
      type: 'SET_DASHBOARD_DATASET',
      payload: {
        datasetKey: 'new_source',
        oldDatasetKey: 'old_source',
        dataset: {
          data: [{ value: 'new-row' }],
          dataFileName: 'new.csv',
          dataFileSourceType: 'url',
          preview: true
        }
      }
    } as any)

    expect(nextState.config.datasets).not.toBe(previousDatasets)
    expect(nextState.config.datasets.secondary).not.toBe(previousSecondary)
    expect(nextState.config.datasets.old_source).toBeUndefined()
    expect(nextState.config.datasets.new_source.data).toEqual([{ value: 'new-row' }])
    expect(nextState.config.datasets.new_source.preview).toBe(true)
    expect(nextState.config.datasets.secondary.preview).toBe(false)
    expect(nextState.config.rows[0].dataKey).toBe('new_source')
    expect(nextState.config.visualizations.first.dataKey).toBe('new_source')
  })

  it('removes generated tables and their table-only rows when deleting a dataset', () => {
    const state = createState()
    state.config.rows = [
      { columns: [{ width: 12, widget: 'generatedTable' }] },
      { columns: [{ width: 12, widget: 'manualChart' }] },
      { columns: [{ width: 6, widget: 'generatedTable' }, { width: 6, widget: 'manualChart' }] }
    ]
    state.config.visualizations = {
      generatedTable: createGeneratedTable('old_source'),
      manualChart: {
        type: 'chart',
        dataKey: 'secondary'
      }
    }

    const nextState = reducer(state, {
      type: 'DELETE_DASHBOARD_DATASET',
      payload: { datasetKey: 'old_source' }
    } as any)

    expect(nextState.config.visualizations.generatedTable).toBeUndefined()
    expect(nextState.config.visualizations.manualChart).toBeDefined()
    expect(nextState.config.rows).toEqual([
      { columns: [{ width: 12, widget: 'manualChart' }] },
      { columns: [{ width: 6, widget: 'manualChart' }] }
    ])
  })

  it('does not remove unmarked manual table widgets when deleting a dataset', () => {
    const state = createState()
    state.config.rows = [{ columns: [{ width: 12, widget: 'manualTable' }] }]
    state.config.visualizations = {
      manualTable: {
        type: 'table',
        visualizationType: 'table',
        dataKey: 'old_source',
        table: { label: 'Manual table' }
      }
    }

    const nextState = reducer(state, {
      type: 'DELETE_DASHBOARD_DATASET',
      payload: { datasetKey: 'old_source' }
    } as any)

    expect(nextState.config.visualizations.manualTable).toBeDefined()
    expect(nextState.config.rows).toEqual([{ columns: [{ width: 12, widget: 'manualTable' }] }])
  })

  it('removes dashboard datasets immutably and falls back to another loaded preview dataset', () => {
    const state = createState()
    const previousDatasets = state.config.datasets
    const previousSecondary = state.config.datasets.secondary

    const nextState = reducer(state, {
      type: 'DELETE_DASHBOARD_DATASET',
      payload: { datasetKey: 'old_source' }
    } as any)

    expect(nextState.config.datasets).not.toBe(previousDatasets)
    expect(nextState.config.datasets.secondary).not.toBe(previousSecondary)
    expect(nextState.config.datasets.old_source).toBeUndefined()
    expect(nextState.config.datasets.secondary.data).toEqual([{ value: 'secondary-row' }])
    expect(nextState.config.datasets.secondary.preview).toBe(true)
    expect(nextState.config.rows[0].dataKey).toBeUndefined()
    expect(nextState.config.visualizations.first.dataKey).toBeUndefined()
  })

  it('does not assign preview when no remaining dataset is loaded', () => {
    const state = {
      ...createState(),
      config: {
        ...createState().config,
        datasets: {
          old_source: {
            data: [{ value: 'old-row' }],
            dataFileName: 'old.csv',
            dataFileSourceType: 'url',
            preview: true
          },
          remote_only: {
            dataUrl: '/next.csv',
            dataFileName: 'next.csv',
            dataFileSourceType: 'url',
            preview: false
          }
        }
      }
    } as EditorState

    const nextState = reducer(state, {
      type: 'DELETE_DASHBOARD_DATASET',
      payload: { datasetKey: 'old_source' }
    } as any)

    expect(nextState.config.datasets.remote_only.preview).toBe(false)
  })

  it('creates one generated table in every multi-dashboard tab and syncs the active top-level dashboard', () => {
    const state = createEmptyDashboardState()
    state.config.activeDashboard = 1
    state.config.dashboard = { sharedFilters: [] }
    state.config.multiDashboards = [
      {
        label: 'Tab A',
        dashboard: { sharedFilters: [] },
        rows: [{ columns: [{ width: 12, widget: 'chartA' }] }],
        visualizations: { chartA: { type: 'chart' } }
      },
      {
        label: 'Tab B',
        dashboard: { sharedFilters: [] },
        rows: [{ columns: [{ width: 12, widget: 'chartB' }] }],
        visualizations: { chartB: { type: 'chart' } }
      }
    ]
    state.config.rows = state.config.multiDashboards[1].rows
    state.config.visualizations = state.config.multiDashboards[1].visualizations

    const nextState = reducer(state, {
      type: 'SET_DASHBOARD_DATASET',
      payload: {
        datasetKey: 'new_source',
        dataset: importedDataset
      }
    } as any)

    expect(generatedTablesFor(nextState.config.multiDashboards[0], 'new_source')).toHaveLength(1)
    expect(generatedTablesFor(nextState.config.multiDashboards[1], 'new_source')).toHaveLength(1)
    expect(nextState.config.activeDashboard).toBe(1)
    expect(nextState.config.label).toBe('Tab B')
    expect(nextState.config.rows).toEqual(nextState.config.multiDashboards[1].rows)
    expect(nextState.config.visualizations).toEqual(nextState.config.multiDashboards[1].visualizations)
  })

  it('removes matching generated tables from every multi-dashboard tab when deleting a dataset', () => {
    const state = createEmptyDashboardState()
    state.config.datasets.old_source = importedDataset
    state.config.datasets.secondary = {
      data: [{ value: 'secondary-row' }],
      dataFileName: 'secondary.csv',
      dataFileSourceType: 'url',
      preview: false
    }
    state.config.activeDashboard = 1
    state.config.multiDashboards = [
      {
        label: 'Tab A',
        dashboard: { sharedFilters: [] },
        rows: [{ columns: [{ width: 12, widget: 'tableA' }] }],
        visualizations: { tableA: createGeneratedTable('old_source') }
      },
      {
        label: 'Tab B',
        dashboard: { sharedFilters: [] },
        rows: [
          { columns: [{ width: 12, widget: 'tableB' }] },
          { columns: [{ width: 12, widget: 'manualB' }] }
        ],
        visualizations: {
          tableB: createGeneratedTable('old_source'),
          manualB: { type: 'chart', dataKey: 'secondary' }
        }
      }
    ]
    state.config.rows = state.config.multiDashboards[1].rows
    state.config.visualizations = state.config.multiDashboards[1].visualizations

    const nextState = reducer(state, {
      type: 'DELETE_DASHBOARD_DATASET',
      payload: { datasetKey: 'old_source' }
    } as any)

    expect(nextState.config.multiDashboards[0].visualizations.tableA).toBeUndefined()
    expect(nextState.config.multiDashboards[0].rows).toEqual([])
    expect(nextState.config.multiDashboards[1].visualizations.tableB).toBeUndefined()
    expect(nextState.config.multiDashboards[1].visualizations.manualB).toBeDefined()
    expect(nextState.config.multiDashboards[1].rows).toEqual([{ columns: [{ width: 12, widget: 'manualB' }] }])
    expect(nextState.config.rows).toEqual(nextState.config.multiDashboards[1].rows)
    expect(nextState.config.visualizations).toEqual(nextState.config.multiDashboards[1].visualizations)
  })

  it('does not recreate a manually deleted generated table on later same-key dataset updates', () => {
    const importedState = reducer(createEmptyDashboardState(), {
      type: 'SET_DASHBOARD_DATASET',
      payload: {
        datasetKey: 'new_source',
        dataset: importedDataset
      }
    } as any)
    const manuallyDeletedState = {
      ...importedState,
      config: {
        ...importedState.config,
        rows: [],
        visualizations: {}
      }
    } as EditorState

    const nextState = reducer(manuallyDeletedState, {
      type: 'SET_DASHBOARD_DATASET',
      payload: {
        datasetKey: 'new_source',
        dataset: { ...importedDataset, data: [{ value: 'updated-row' }] }
      }
    } as any)

    expect(nextState.config.datasets.new_source.data).toEqual([{ value: 'updated-row' }])
    expect(nextState.config.visualizations).toEqual({})
    expect(nextState.config.rows).toEqual([])
  })
})
