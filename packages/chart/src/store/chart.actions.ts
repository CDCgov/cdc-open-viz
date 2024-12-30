type Action<T, P = undefined, R = undefined> = {
  type: T
  payload?: P
}

// Action Types
type SET_CONFIG = Action<'SET_CONFIG', object>
type UPDATE_CONFIG = Action<'UPDATE_CONFIG', object>
type ChartActions = SET_CONFIG | UPDATE_CONFIG

export default ChartActions
