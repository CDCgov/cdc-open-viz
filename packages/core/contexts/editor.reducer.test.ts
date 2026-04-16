import reducer, { type EditorState } from './editor.reducer'

describe('editor reducer dashboard datasets', () => {
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
})
