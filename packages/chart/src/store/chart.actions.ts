type Action<T, P = undefined, R = undefined> = {
  type: T
  payload?: P
}

// Action Types
type SET_CONFIG = Action<'SET_CONFIG', object>
type UPDATE_CONFIG = Action<'UPDATE_CONFIG', object>
type SET_COLOR_SCALE = Action<'SET_COLOR_SCALE', object>
type ChartActions = SET_CONFIG | UPDATE_CONFIG | SET_COLOR_SCALE

export default ChartActions
