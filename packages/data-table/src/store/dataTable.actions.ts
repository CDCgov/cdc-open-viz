import { Config } from '../types/Config'
import { VizFilter } from '@cdc/core/types/VizFilter'

type Action<T, P = undefined> = {
  type: T
  payload?: P
}

// Action Types
export type ActionType =
  | 'SET_CONFIG'
  | 'SET_SHOW_EDITOR_PANEL'
  | 'SET_COLUMNS'
  | 'SET_DATA'
  | 'SET_TABLE'
  | 'SET_FILTERS'
  | 'SET_FILTER_BEHAVIOR'
  | 'SET_CURRENT_VIEWPORT'
  | 'SET_FILTER_INTRO'

type SET_CONFIG = Action<'SET_CONFIG', Config>
type SET_SHOW_EDITOR_PANEL = Action<'SET_SHOW_EDITOR_PANEL', boolean>
type SET_COLUMNS = Action<'SET_COLUMNS', Record<string, unknown>>
type SET_DATA = Action<'SET_DATA', object[]>
type SET_TABLE = Action<'SET_TABLE', Record<string, unknown>>
type SET_FILTERS = Action<'SET_FILTERS', VizFilter[]>
type SET_FILTER_BEHAVIOR = Action<'SET_FILTER_BEHAVIOR', string>
type SET_CURRENT_VIEWPORT = Action<'SET_CURRENT_VIEWPORT', string>
type SET_FILTER_INTRO = Action<'SET_FILTER_INTRO', string>

type DataTableActions =
  | SET_CONFIG
  | SET_SHOW_EDITOR_PANEL
  | SET_COLUMNS
  | SET_DATA
  | SET_TABLE
  | SET_FILTERS
  | SET_FILTER_BEHAVIOR
  | SET_CURRENT_VIEWPORT
  | SET_FILTER_INTRO

export default DataTableActions
