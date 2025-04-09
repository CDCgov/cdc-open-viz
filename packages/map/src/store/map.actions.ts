import { MapConfig, Coordinate, DataRow } from '../types/MapConfig'
import { GeneratedLegend } from '../hooks/useGenerateRuntimeLegend'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { type Action } from '@cdc/core/types/Action'
import { RuntimeData } from '../types/RuntimeData'
import { Modal } from '../types/Modal'

// Action Types
type SET_ACCESSIBLE_STATUS = Action<'SET_ACCESSIBLE_STATUS', string>
type SET_STATE = Action<'SET_STATE', MapConfig>
type SET_COVE_LOADED_HAS_RAN = Action<'SET_COVE_LOADED_HAS_RAN', boolean>
type SET_DISPLAY_PANEL = Action<'SET_DISPLAY_PANEL', boolean>
type SET_FILTERED_COUNTRY_CODE = Action<'SET_FILTERED_COUNTRY_CODE', string>
type SET_IS_DRAGGING_ANNOTATION = Action<'SET_IS_DRAGGING_ANNOTATION', boolean>
type SET_LOADING = Action<'SET_LOADING', boolean>
type SET_MODAL = Action<'SET_MODAL', Modal>
type SET_POSITION = Action<'SET_POSITION', { coordinates: Coordinate; zoom: number }>
type SET_REQUIRED_COLUMNS = Action<'SET_REQUIRED_COLUMNS', string[]>
type SET_RUNTIME_DATA = Action<'SET_RUNTIME_DATA', RuntimeData>
type SET_RUNTIME_FILTERS = Action<'SET_RUNTIME_FILTERS', VizFilter[]>
type SET_RUNTIME_LEGEND = Action<'SET_RUNTIME_LEGEND', GeneratedLegend | []>
type SET_SCALE = Action<'SET_SCALE', number>
type SET_STATE_TO_SHOW = Action<'SET_STATE_TO_SHOW', string>
type SET_TOPO_DATA = Action<'SET_TOPO_DATA', any>
type SET_TRANSLATE = Action<'SET_TRANSLATE', [number, number]>

export type MapActions =
  | SET_ACCESSIBLE_STATUS
  | SET_STATE
  | SET_COVE_LOADED_HAS_RAN
  | SET_DISPLAY_PANEL
  | SET_FILTERED_COUNTRY_CODE
  | SET_IS_DRAGGING_ANNOTATION
  | SET_LOADING
  | SET_MODAL
  | SET_POSITION
  | SET_REQUIRED_COLUMNS
  | SET_RUNTIME_DATA
  | SET_RUNTIME_FILTERS
  | SET_RUNTIME_LEGEND
  | SET_SCALE
  | SET_STATE_TO_SHOW
  | SET_TOPO_DATA
  | SET_TRANSLATE

export default MapActions
