import _ from 'lodash'
import EditorActions from './editor.actions'
import { BaseVisualizationConfig } from '@cdc/core/types/BaseVisualizationConfig'
import { Datasets } from '@cdc/core/types/DataSet'
import { devToolsWrapper } from '@cdc/core/helpers/withDevTools'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'

// Config type that can have datasets (for dashboards)
type ConfigWithDatasets = BaseVisualizationConfig & {
  datasets?: Datasets
  multiDashboards?: any[]
  rows?: any[]
  visualizations?: Record<string, any>
}

export type EditorState = {
  config?: ConfigWithDatasets
  tempConfig?: ConfigWithDatasets | null
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
        delete config.datasets[oldDatasetKey]
      }
      Object.values(config.datasets).forEach((dataset: any) => {
        dataset.preview = false
      })
      config.datasets[datasetKey] = { ...oldDataset, ...dataset }
      return { ...state, config }
    }
    case 'DELETE_DASHBOARD_DATASET': {
      const { datasetKey } = action.payload
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
      delete config.datasets[datasetKey]
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

export default devToolsWrapper<EditorState, EditorActions>(reducer)
