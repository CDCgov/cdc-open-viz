import type { WaffleChartConfig } from '../types/WaffleChartConfig'

type Action<T, P> = { type: T; payload: P }

type SET_CONFIG = Action<'SET_CONFIG', WaffleChartConfig>
type SET_CONTAINER = Action<'SET_CONTAINER', any>
type SET_COVE_LOADED_HAS_RAN = Action<'SET_COVE_LOADED_HAS_RAN', boolean>
type SET_LOADING = Action<'SET_LOADING', boolean>
type SET_VIEWPORT = Action<'SET_VIEWPORT', string>

// prettier-ignore
type ChartActions =
  | SET_CONFIG
  | SET_CONTAINER
  | SET_COVE_LOADED_HAS_RAN
  | SET_LOADING
  | SET_VIEWPORT

export default ChartActions
