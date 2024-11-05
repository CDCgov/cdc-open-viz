import _ from 'lodash'
import { getUpdateConfig } from '../helpers/getUpdateConfig'
import { MultiDashboardConfig } from '../types/MultiDashboard'
import DashboardActions from './dashboard.actions'
import { devToolsWrapper } from '@cdc/core/helpers/withDevTools'
import { Tab } from '../types/Tab'
import { DashboardConfig } from '../types/DashboardConfig'
import { ConfigRow } from '../types/ConfigRow'
import { AnyVisualization } from '@cdc/core/types/Visualization'
import { initialState } from '../DashboardContext'

type BlankMultiConfig = {
  dashboard: Partial<DashboardConfig>
  rows: Partial<ConfigRow>[]
  visualizations: Record<string, Object>
  table: Object
}

const createBlankDashboard: () => BlankMultiConfig = () => ({
  dashboard: {},
  rows: [{ columns: [{ width: 12 }] }],
  visualizations: {},
  table: {
    label: 'Data Table',
    show: false,
    showDownloadUrl: false,
    showVertical: true
  }
})

export type DashboardState = {
  config: MultiDashboardConfig
  data: Record<string, any[]>
  filteredData: Object
  loading: boolean
  preview: boolean
  tabSelected: Tab
}

const reducer = (state: DashboardState, action: DashboardActions): DashboardState => {
  switch (action.type) {
    case 'ADD_FOOTNOTE': {
      const { id, rowIndex, config } = action.payload
      const newRows = state.config.rows.map((row, i) => (i === rowIndex ? { ...row, footnotesId: id } : row))
      return {
        ...state,
        config: { ...state.config, rows: newRows, visualizations: { ...state.config.visualizations, [id]: config } }
      }
    }
    case 'ADD_NEW_DASHBOARD': {
      const currentMultiDashboards = state.config.multiDashboards
      const label = 'New Dashboard ' + (currentMultiDashboards.length + 1)
      const newMultiDashboards = [...currentMultiDashboards, { ...createBlankDashboard(), label }]
      return applyMultiDashboards(state, newMultiDashboards)
    }
    case 'UPDATE_CONFIG': {
      const [config, filteredData] = getUpdateConfig(state)(...action.payload)
      return { ...state, config, filteredData }
    }
    case 'APPLY_CONFIG': {
      // using advanced editor. Wipe all existing data and apply new config
      const [config, filteredData] = getUpdateConfig(state)(...action.payload)
      // get the default data state
      const data = [...Object.values(config.visualizations), ...config.rows]
        .map(viz => viz.dataKey)
        .reduce((acc, key) => {
          const data = state.data[key] || state.config.datasets[key]?.data
          if (data) acc[key] = data
          return acc
        }, {})
      return { ...initialState, config, filteredData, data }
    }
    case 'SET_CONFIG': {
      return { ...state, config: { ...state.config, ...action.payload } }
    }
    case 'SET_DATA': {
      return { ...state, data: action.payload }
    }
    case 'SET_FILTERED_DATA': {
      return { ...state, filteredData: action.payload }
    }
    case 'SET_LOADING': {
      return { ...state, loading: action.payload }
    }
    case 'SET_PREVIEW': {
      return { ...state, preview: action.payload }
    }
    case 'SET_SHARED_FILTERS': {
      const newSharedFilters = action.payload
      const newDashboardConfig = { ...state.config.dashboard, sharedFilters: newSharedFilters }
      if (state.config.multiDashboards) {
        const saveSlot = state.config.activeDashboard
        const newMultiDashboards = _.cloneDeep(state.config.multiDashboards)
        newMultiDashboards[saveSlot].dashboard = newDashboardConfig
        const newState = applyMultiDashboards(state, newMultiDashboards)
        return { ...newState, config: { ...newState.config, dashboard: newDashboardConfig } }
      }
      return { ...state, config: { ...state.config, dashboard: newDashboardConfig } }
    }
    case 'SET_TAB_SELECTED': {
      return { ...state, tabSelected: action.payload }
    }
    case 'REMOVE_MULTIDASHBOARD_AT_INDEX': {
      const newMultiDashboards = [...state.config.multiDashboards]
      _.remove(newMultiDashboards, (_, index) => {
        return index === action.payload
      })
      const config = {
        ...state.config,
        multiDashboards: newMultiDashboards,
        ...newMultiDashboards[0],
        activeDashboard: 0
      }
      if (newMultiDashboards.length === 0) return { ...state, config: _.omit(state.config, 'multiDashboards') }
      return applyMultiDashboards({ ...state, config }, newMultiDashboards)
    }
    case 'RENAME_DASHBOARD_TAB': {
      const newMultiDashboards = state.config.multiDashboards.map(dashboard => {
        if (dashboard.label === action.payload.current) {
          dashboard.label = action.payload.new
        }
        return dashboard
      })
      const newConfig = { ...state.config, label: action.payload.new } // make sure active label is updated
      return applyMultiDashboards({ ...state, newConfig }, newMultiDashboards)
    }
    case 'REORDER_MULTIDASHBOARDS': {
      const { newIndex, currentIndex } = action.payload
      const newMultiDashboards = [...state.config.multiDashboards]
      newMultiDashboards.splice(newIndex, 0, newMultiDashboards.splice(currentIndex, 1)[0])
      // set activeDashboard to newIndex
      const config = { ...state.config, activeDashboard: newIndex }
      return applyMultiDashboards({ ...state, config }, newMultiDashboards)
    }
    case 'SAVE_CURRENT_CHANGES': {
      const saveSlot = state.config.activeDashboard
      const newMultiDashboards = [...state.config.multiDashboards]
      const label = newMultiDashboards[saveSlot].label
      const toSave = _.pick(state.config, ['dashboard', 'visualizations', 'rows'])
      newMultiDashboards[saveSlot] = { ...toSave, label }
      return applyMultiDashboards(state, newMultiDashboards)
    }
    case 'INITIALIZE_MULTIDASHBOARDS': {
      const label = 'New Dashboard 1'
      const toSave = _.pick(state.config, ['dashboard', 'visualizations', 'rows'])
      const newMultiDashboards = [{ ...toSave, label }]
      const config = { ...state.config, activeDashboard: 0 }
      return applyMultiDashboards({ ...state, config }, newMultiDashboards)
    }
    case 'SWITCH_CONFIG': {
      const slot = action.payload
      const newConfigFields = state.config.multiDashboards[slot]
      return { ...state, config: { ...state.config, ...newConfigFields, activeDashboard: slot } }
    }
    case 'TOGGLE_ROW': {
      const { rowIndex, colIndex } = action.payload
      const newRows = state.config.rows.map((row, index) => {
        if (index === rowIndex) {
          const newColumns = row.columns.map((col, i) => ({ ...col, hide: i === colIndex }))
          return { ...row, columns: newColumns }
        }
        return row
      })
      return { ...state, config: { ...state.config, rows: newRows } }
    }
    case 'ADD_VISUALIZATION': {
      const { newViz, rowIdx, colIdx } = action.payload
      const vizKey = newViz.uid
      const newRows = _.cloneDeep(state.config.rows)
      newRows[rowIdx].columns[colIdx].widget = vizKey
      return {
        ...state,
        config: { ...state.config, visualizations: { ...state.config.visualizations, [vizKey]: newViz }, rows: newRows }
      }
    }
    case 'MOVE_VISUALIZATION': {
      const { rowIdx, colIdx, widget } = action.payload
      const newRows = _.cloneDeep(state.config.rows)
      newRows[widget.rowIdx].columns[widget.colIdx].widget = null
      newRows[rowIdx].columns[colIdx].widget = widget.uid
      return {
        ...state,
        config: { ...state.config, rows: newRows }
      }
    }
    case 'UPDATE_VISUALIZATION': {
      const { vizKey, configureData } = action.payload
      const updatedViz = { ...state.config.visualizations[vizKey], ...configureData } as AnyVisualization
      return {
        ...state,
        config: { ...state.config, visualizations: { ...state.config.visualizations, [vizKey]: updatedViz } }
      }
    }
    case 'UPDATE_ROW': {
      const { rowIndex, rowData } = action.payload
      const newRows = state.config.rows.map((row, index) => {
        if (index === rowIndex) {
          return { ...row, ...rowData }
        }
        return row
      })
      return { ...state, config: { ...state.config, rows: newRows } }
    }
    case 'DELETE_WIDGET': {
      const { rowIdx, colIdx, uid } = action.payload
      const newRows = _.cloneDeep(state.config.rows)
      newRows[rowIdx].columns[colIdx].widget = null
      const newVisualizations = _.cloneDeep(state.config.visualizations)
      delete newVisualizations[uid]
      const newSharedFilters = _.cloneDeep(state.config.dashboard.sharedFilters)
      if (newSharedFilters && newSharedFilters.length > 0) {
        newSharedFilters.forEach(sharedFilter => {
          if (sharedFilter.usedBy && sharedFilter.usedBy.indexOf(uid) !== -1) {
            sharedFilter.usedBy.splice(sharedFilter.usedBy.indexOf(uid), 1)
          }
        })
      }
      return {
        ...state,
        config: {
          ...state.config,
          dashboard: { ...state.config.dashboard, sharedFilters: newSharedFilters },
          visualizations: newVisualizations,
          rows: newRows
        }
      }
    }
    default:
      return state
  }
}

const applyMultiDashboards = (state, newMultiDashboards) => ({
  ...state,
  config: { ...state.config, multiDashboards: newMultiDashboards }
})

export default devToolsWrapper<DashboardState, DashboardActions>(reducer)
