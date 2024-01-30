import type { DashboardConfig as Config } from '../types/DashboardConfig'

type Action<T, P> = { type: T; payload: P }

type SET_CONFIG = Action<'SET_CONFIG', Config>
type UPDATE_CONFIG = Action<'UPDATE_CONFIG', [Config, Object?]>
type SET_DATA = Action<'SET_DATA', Object>
type SET_LOADING = Action<'SET_LOADING', boolean>
type SET_PREVIEW = Action<'SET_PREVIEW', boolean>
type SET_FILTERED_DATA = Action<'SET_FILTERED_DATA', Object>
type SET_TAB_SELECTED = Action<'SET_TAB_SELECTED', number>

type DashboardActions = SET_CONFIG | UPDATE_CONFIG | SET_DATA | SET_LOADING | SET_PREVIEW | SET_FILTERED_DATA | SET_TAB_SELECTED
export default DashboardActions
