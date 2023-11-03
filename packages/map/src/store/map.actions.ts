import { MapConfig } from '../types/MapConfig'
import { RuntimeLegend } from '../types/RuntimeLegend'

type Action<T, P> = { type: T; payload: P }

type SET_ACCESSIBLE_STATUS = Action<'SET_ACCESSIBLE_STATUS', string>
type SET_CONFIG = Action<'SET_CONFIG', MapConfig>
type SET_CONTAINER = Action<'SET_CONTAINER', any>
type SET_COVE_LOADED_HAS_RAN = Action<'SET_COVE_LOADED_HAS_RAN', boolean>
type SET_CURRENT_VIEWPORT = Action<'SET_CURRENT_VIEWPORT', string>
type SET_DIMENSIONS = Action<'SET_DIMENSIONS', any>
type SET_ERROR_MESSAGE = Action<'SET_ERROR_MESSAGE', string>
type SET_FILTERED_COUNTRY_CODE = Action<'SET_FILTERED_COUNTRY_CODE', string>
type SET_LOADING = Action<'SET_LOADING', boolean>
type SET_MODAL = Action<'SET_MODAL', any>
type SET_POSITION = Action<'SET_POSITION', Object>
type SET_RUNTIME_DATA = Action<'SET_RUNTIME_DATA', Record<string, Object>>
type SET_RUNTIME_FILTERS = Action<'SET_RUNTIME_FILTERS', Object[]>
type SET_RUNTIME_LEGEND = Action<'SET_RUNTIME_LEGEND', RuntimeLegend>

// prettier-ignore
type MapActions =
  | SET_ACCESSIBLE_STATUS
  | SET_CONFIG
  | SET_CONTAINER
  | SET_COVE_LOADED_HAS_RAN
  | SET_CURRENT_VIEWPORT
  | SET_DIMENSIONS
  | SET_ERROR_MESSAGE
  | SET_FILTERED_COUNTRY_CODE
  | SET_LOADING
  | SET_MODAL
  | SET_POSITION
  | SET_RUNTIME_DATA
  | SET_RUNTIME_FILTERS
  | SET_RUNTIME_LEGEND

export default MapActions
