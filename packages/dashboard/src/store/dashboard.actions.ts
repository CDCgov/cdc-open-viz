import type { DashboardConfig as Config } from '../types/DashboardConfig'
import { type Action } from '@cdc/core/types/Action'

type SET_CONFIG = Action<'SET_CONFIG', Config>
type UPDATE_CONFIG = Action<'UPDATE_CONFIG', [Config, Object?]>
type SET_DATA = Action<'SET_DATA', Object>
type SET_LOADING = Action<'SET_LOADING', boolean>
type SET_PREVIEW = Action<'SET_PREVIEW', boolean>
type SET_FILTERED_DATA = Action<'SET_FILTERED_DATA', Object>
type SET_TAB_SELECTED = Action<'SET_TAB_SELECTED', number>
type RENAME_DASHBOARD_TAB = Action<'RENAME_DASHBOARD_TAB', { current: string; new: string }>
type INITIALIZE_MULTIDASHBOARDS = Action<'INITIALIZE_MULTIDASHBOARDS', undefined>
type REMOVE_MULTIDASHBOARD_AT_INDEX = Action<'REMOVE_MULTIDASHBOARD_AT_INDEX', number>
type REORDER_MULTIDASHBOARDS = Action<'REORDER_MULTIDASHBOARDS', { currentIndex: number; newIndex: number }>
type ADD_NEW_DASHBOARD = Action<'ADD_NEW_DASHBOARD', undefined>
type SAVE_CURRENT_CHANGES = Action<'SAVE_CURRENT_CHANGES', undefined>
type SWITCH_CONFIG = Action<'SWITCH_CONFIG', number>

type DashboardActions = ADD_NEW_DASHBOARD | SET_CONFIG | UPDATE_CONFIG | REMOVE_MULTIDASHBOARD_AT_INDEX | RENAME_DASHBOARD_TAB | REORDER_MULTIDASHBOARDS | SAVE_CURRENT_CHANGES | SET_DATA | SET_LOADING | SET_PREVIEW | SET_FILTERED_DATA | SET_TAB_SELECTED | SWITCH_CONFIG | INITIALIZE_MULTIDASHBOARDS
export default DashboardActions
