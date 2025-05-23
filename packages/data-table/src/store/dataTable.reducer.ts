import DataTableActions from './dataTable.actions'
import defaults from '../data/initial-state.js'
import { Config } from '../types/Config'
import { Column } from '@cdc/core/types/Column'
import { Table } from '@cdc/core/types/Table'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { ViewportSize } from '@cdc/chart/src/types/ChartConfig'

export const getInitialState = (isEditor: boolean): State => {
  return {
    config: defaults,
    showEditorPanel: isEditor,
    columns: undefined,
    data: undefined,
    table: undefined,
    filters: undefined,
    currentViewport: 'lg',
    filterIntro: undefined
  }
}

export type State = {
  config: Config
  showEditorPanel: boolean
  columns: Record<string, Column>
  data: object[]
  table: Table
  filters: VizFilter[]
  currentViewport: ViewportSize
  filterIntro: string
}

export const reducer = (state: State, action: DataTableActions) => {
  switch (action.type) {
    case 'SET_CONFIG':
      return { ...state, config: { ...state.config, ...action.payload } }
    case 'SET_SHOW_EDITOR_PANEL':
      return { ...state, showEditorPanel: action.payload }
    case 'SET_COLUMNS':
      return { ...state, columns: action.payload }
    case 'SET_DATA':
      return { ...state, data: action.payload }
    case 'SET_TABLE':
      return { ...state, table: action.payload }
    case 'SET_FILTERS':
      return { ...state, filters: action.payload }
    case 'SET_CURRENT_VIEWPORT':
      return { ...state, currentViewport: action.payload }
    case 'SET_FILTER_INTRO':
      return { ...state, filterIntro: action.payload }
    default:
      throw new Error('Unknown action type')
  }
}
