import type { DashboardConfig as Config } from '../types/DashboardConfig'
import { type Action } from '@cdc/core/types/Action'
import { Tab } from '../types/Tab'
import { ConfigRow } from '../types/ConfigRow'
import { Visualization } from '@cdc/core/types/Visualization'
import Footnotes from '@cdc/core/types/Footnotes'
import { SharedFilter } from '../types/SharedFilter'

type ADD_FOOTNOTE = Action<'ADD_FOOTNOTE', { id: string; rowIndex: number; config: Footnotes }>
type SET_CONFIG = Action<'SET_CONFIG', Partial<Config>>
type UPDATE_CONFIG = Action<'UPDATE_CONFIG', [Config, Object?]>
type SET_DATA = Action<'SET_DATA', Record<string, any[]>>
type SET_LOADING = Action<'SET_LOADING', boolean>
type SET_PREVIEW = Action<'SET_PREVIEW', boolean>
type SET_FILTERED_DATA = Action<'SET_FILTERED_DATA', Object>
type SET_SHARED_FILTERS = Action<'SET_SHARED_FILTERS', SharedFilter[]>
type SET_TAB_SELECTED = Action<'SET_TAB_SELECTED', Tab>
type RENAME_DASHBOARD_TAB = Action<'RENAME_DASHBOARD_TAB', { current: string; new: string }>
type INITIALIZE_MULTIDASHBOARDS = Action<'INITIALIZE_MULTIDASHBOARDS', undefined>
type REMOVE_MULTIDASHBOARD_AT_INDEX = Action<'REMOVE_MULTIDASHBOARD_AT_INDEX', number>
type REORDER_MULTIDASHBOARDS = Action<'REORDER_MULTIDASHBOARDS', { currentIndex: number; newIndex: number }>
type ADD_NEW_DASHBOARD = Action<'ADD_NEW_DASHBOARD', undefined>
type SAVE_CURRENT_CHANGES = Action<'SAVE_CURRENT_CHANGES', undefined>
type SWITCH_CONFIG = Action<'SWITCH_CONFIG', number>
type TOGGLE_ROW = Action<'TOGGLE_ROW', { rowIndex: number; colIndex: number }>
type UPDATE_VISUALIZATION = Action<'UPDATE_VISUALIZATION', { vizKey: string; configureData: Partial<Visualization> }>
type UPDATE_ROW = Action<'UPDATE_ROW', { rowIndex: number; rowData: Partial<ConfigRow> }>

type DashboardActions =
  | ADD_FOOTNOTE
  | ADD_NEW_DASHBOARD
  | SET_CONFIG
  | UPDATE_CONFIG
  | REMOVE_MULTIDASHBOARD_AT_INDEX
  | RENAME_DASHBOARD_TAB
  | REORDER_MULTIDASHBOARDS
  | SAVE_CURRENT_CHANGES
  | SET_DATA
  | SET_LOADING
  | SET_PREVIEW
  | SET_FILTERED_DATA
  | SET_SHARED_FILTERS
  | SET_TAB_SELECTED
  | SWITCH_CONFIG
  | INITIALIZE_MULTIDASHBOARDS
  | TOGGLE_ROW
  | UPDATE_VISUALIZATION
  | UPDATE_ROW
export default DashboardActions
