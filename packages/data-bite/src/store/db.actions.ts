import type { DataBiteConfig } from '../types/DataBiteConfig'

type Action<T, P> = { type: T; payload: P }

type SET_CONFIG = Action<'SET_CONFIG', DataBiteConfig>
type SET_LOADING = Action<'SET_LOADING', boolean>
type SET_CURRENT_VIEWPORT = Action<'SET_CURRENT_VIEWPORT', string>
type SET_COVE_LOADED_HAS_RAN = Action<'SET_COVE_LOADED_HAS_RAN', boolean>
type SET_CONTAINER = Action<'SET_CONTAINER', any>

// prettier-ignore
type DataBiteActions =
  | SET_CONFIG
  | SET_LOADING
  | SET_CURRENT_VIEWPORT
  | SET_COVE_LOADED_HAS_RAN
  | SET_CONTAINER

export default DataBiteActions
