type Action<T, P = undefined, R = undefined> = {
  type: T
  payload?: P
}

// Action Types
type SET_CONFIG = Action<'SET_CONFIG', object>
type UPDATE_CONFIG = Action<'UPDATE_CONFIG', object>
type SET_COLOR_SCALE = Action<'SET_COLOR_SCALE', object>
type SET_STATE_DATA = Action<'SET_STATE_DATA', object>
type SET_EXCLUDED_DATA = Action<'SET_EXCLUDED_DATA', object>
type SET_FILTERED_DATA = Action<'SET_FILTERED_DATA', object>
type ChartActions =
  | SET_CONFIG
  | UPDATE_CONFIG
  | SET_COLOR_SCALE
  | SET_STATE_DATA
  | SET_EXCLUDED_DATA
  | SET_FILTERED_DATA

export default ChartActions
