type Action<T, P> = { type: T; payload: P }

type SET_CONFIG = Action<'SET_CONFIG', Config>
type SET_LOADING = Action<'SET_LOADING', boolean>
type SET_CURRENT_VIEWPORT = Action<'SET_CURRENT_VIEWPORT', string>
type SET_RUNTIME_FILTERS = Action<'SET_RUNTIME_FILTERS', Object[]>
type SET_RUNTIME_LEGEND = Action<'SET_RUNTIME_LEGEND', Object[]>
type SET_ACCESSIBLE_STATUS = Action<'SET_ACCESSIBLE_STATUS', string>
type SET_MODAL = Action<'SET_MODAL', any>

// prettier-ignore
type MapActions =
  | SET_CONFIG
  | SET_LOADING
  | SET_CURRENT_VIEWPORT
  | SET_RUNTIME_FILTERS
  | SET_RUNTIME_LEGEND
  | SET_ACCESSIBLE_STATUS
  | SET_MODAL

export default MapActions
