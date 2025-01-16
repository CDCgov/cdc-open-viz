import { DimensionsType } from '@cdc/core/types/Dimensions'
import { ViewportSize } from '../types/ChartConfig'

type Action<T, P = undefined, R = undefined> = {
  type: T
  payload?: P
}

// Action Types
type SET_CONFIG = Action<'SET_CONFIG', object>
type SET_LOADING = Action<'SET_LOADING', boolean>
type UPDATE_CONFIG = Action<'UPDATE_CONFIG', object>
type SET_COLOR_SCALE = Action<'SET_COLOR_SCALE', Function>
type SET_STATE_DATA = Action<'SET_STATE_DATA', object[]>
type SET_EXCLUDED_DATA = Action<'SET_EXCLUDED_DATA', object[]>
type SET_FILTERED_DATA = Action<'SET_FILTERED_DATA', object[]>
type SET_SERIES_HIGHLIGHT = Action<'SET_SERIES_HIGHLIGHT', string[]>
type SET_VIEWPORT = Action<'SET_VIEWPORT', ViewportSize>
type SET_DIMENSIONS = Action<'SET_DIMENSIONS', DimensionsType>
type SET_CONTAINER = Action<'SET_CONTAINER', HTMLElement>
type SET_LOADED_EVENT = Action<'SET_LOADED_EVENT', boolean>
type SET_DRAG_ANNOTATIONS = Action<'SET_DRAG_ANNOTATIONS', boolean>
type SET_BRUSH_CONFIG = Action<'SET_BRUSH_CONFIG', object>
type SET_EXTERNAL_FILTERS = Action<'SET_EXTERNAL_FILTERS', object[]>
type ChartActions =
  | SET_CONFIG
  | UPDATE_CONFIG
  | SET_COLOR_SCALE
  | SET_STATE_DATA
  | SET_EXCLUDED_DATA
  | SET_FILTERED_DATA
  | SET_SERIES_HIGHLIGHT
  | SET_VIEWPORT
  | SET_DIMENSIONS
  | SET_CONTAINER
  | SET_LOADED_EVENT
  | SET_DRAG_ANNOTATIONS
  | SET_BRUSH_CONFIG
  | SET_LOADING
  | SET_EXTERNAL_FILTERS

export default ChartActions
