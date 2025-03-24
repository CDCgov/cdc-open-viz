import { type Action } from '@cdc/core/types/Action'
import { type ViewPort } from '@cdc/core/types/ViewPort'
import { type Visualization } from '@cdc/core/types/Visualization'
import { DataSet } from '@cdc/dashboard/src/types/DataSet'

type EDITOR_SAVE = Action<'EDITOR_SAVE', Visualization>
type EDITOR_SET_CONFIG = Action<'EDITOR_SET_CONFIG', Visualization>
type EDITOR_TEMP_SAVE = Action<'EDITOR_TEMP_SAVE', Visualization>
type EDITOR_SET_ERRORS = Action<'EDITOR_SET_ERRORS', string[]>
type EDITOR_SET_VIEWPORT = Action<'EDITOR_SET_VIEWPORT', ViewPort>
type EDITOR_SET_GLOBALACTIVE = Action<'EDITOR_SET_GLOBALACTIVE', number>
type SET_DASHBOARD_DATASET = Action<
  'SET_DASHBOARD_DATASET',
  { datasetKey: string; oldDatasetKey?: string; dataset: DataSet }
>
type DELETE_DATASET = Action<'DELETE_DASHBOARD_DATASET', { datasetKey: string }>

type actions =
  | EDITOR_SAVE
  | EDITOR_TEMP_SAVE
  | EDITOR_SET_ERRORS
  | EDITOR_SET_VIEWPORT
  | EDITOR_SET_GLOBALACTIVE
  | EDITOR_SET_CONFIG
  | DELETE_DATASET
  | SET_DASHBOARD_DATASET

export default actions
