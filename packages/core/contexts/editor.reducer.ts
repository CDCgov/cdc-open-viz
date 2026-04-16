import EditorActions from './editor.actions'
import { Visualization } from '@cdc/core/types/Visualization'
import { devToolsWrapper } from '@cdc/core/helpers/withDevTools'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'

export type EditorState = {
  config?: Visualization
  tempConfig?: Visualization | null
  errors: string[]
  currentViewport: string
  globalActive: number
  newViz?: boolean
}
const reducer = (state: EditorState, action: EditorActions): EditorState => {
  switch (action.type) {
    case 'EDITOR_SAVE': {
      return { ...state, config: action.payload, tempConfig: null }
    }
    case 'EDITOR_SET_CONFIG': {
      return { ...state, config: action.payload }
    }
    case 'SET_DASHBOARD_DATASET': {
      const { dataset, datasetKey, oldDatasetKey } = action.payload
      const oldDataset = oldDatasetKey ? state.config?.datasets[oldDatasetKey] : {}
      const config = cloneConfig(state.config)
      const nextDatasets = cloneDatasets(config.datasets, currentDataset => ({ ...currentDataset, preview: false }))
      if (oldDatasetKey) {
        const changeDatasets = _config => {
          _config.rows?.forEach(row => {
            if (row.dataKey === oldDatasetKey) {
              row.dataKey = datasetKey
            }
          })
          Object.values(_config.visualizations || {}).forEach((viz: any) => {
            if (viz.dataKey === oldDatasetKey) {
              viz.dataKey = datasetKey
            }
          })
        }
        applyMultiDashboards(config, changeDatasets)
        delete nextDatasets[oldDatasetKey]
      }
      nextDatasets[datasetKey] = { ...oldDataset, ...dataset }
      config.datasets = nextDatasets
      return { ...state, config }
    }
    case 'DELETE_DASHBOARD_DATASET': {
      const { datasetKey } = action.payload
      const wasPreviewDataset = !!state.config?.datasets?.[datasetKey]?.preview
      const deleteDatasetKeys = _config => {
        _config.rows?.forEach(row => {
          if (row.dataKey === datasetKey) {
            delete row.dataKey
          }
        })
        Object.values(_config.visualizations || {}).forEach((viz: any) => {
          if (viz.dataKey === datasetKey) {
            delete viz.dataKey
          }
        })
      }
      const config = cloneConfig(state.config)
      applyMultiDashboards(config, deleteDatasetKeys)
      const nextDatasets = cloneDatasets(config.datasets, currentDataset => currentDataset, datasetKey)
      if (wasPreviewDataset) {
        selectFallbackPreviewDataset(nextDatasets)
      }
      config.datasets = nextDatasets
      return { ...state, config }
    }
    case 'EDITOR_TEMP_SAVE': {
      return { ...state, tempConfig: action.payload }
    }
    case 'EDITOR_SET_ERRORS': {
      return { ...state, errors: action.payload }
    }
    case 'EDITOR_SET_VIEWPORT': {
      return { ...state, currentViewport: action.payload }
    }
    case 'EDITOR_SET_GLOBALACTIVE': {
      return { ...state, globalActive: action.payload }
    }
    default:
      return state
  }
}

const applyMultiDashboards = (config: Record<string, any>, mutationFunc: Function) => {
  if (config.multiDashboards) {
    config.multiDashboards.forEach(dashboard => {
      mutationFunc(dashboard)
    })
  }
  mutationFunc(config)
}

const cloneDatasets = (
  datasets: Record<string, any> = {},
  transform = dataset => dataset,
  omittedDatasetKey?: string
) =>
  // Rebuild the dataset map with fresh dataset objects so React can observe dataset-level changes.
  Object.fromEntries(
    Object.entries(datasets)
      .filter(([key]) => key !== omittedDatasetKey)
      .map(([key, dataset]) => [key, transform({ ...dataset })])
  )

const selectFallbackPreviewDataset = (datasets: Record<string, any>) => {
  // Keep preview ownership explicit after deletion so the editor never depends on stale flags.
  Object.values(datasets).forEach((dataset: any) => {
    dataset.preview = false
  })

  const nextPreviewDataset = Object.values(datasets).find((dataset: any) => Array.isArray(dataset.data))
  if (nextPreviewDataset) {
    nextPreviewDataset.preview = true
  }
}

export default devToolsWrapper<EditorState, EditorActions>(reducer)
