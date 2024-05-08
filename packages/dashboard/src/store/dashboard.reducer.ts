import _ from 'lodash'
import { getUpdateConfig } from '../helpers/getUpdateConfig'
import { MultiDashboardConfig } from '../types/MultiDashboard'
import DashboardActions from './dashboard.actions'
import { devToolsWrapper } from '@cdc/core/helpers/withDevTools'
import { Tab } from '../types/Tab'

const createBlankDashboard = () => ({
  dashboard: {
    theme: 'theme-blue'
  },
  rows: [[{ width: 12 }, {}, {}]],
  visualizations: {},
  table: {
    label: 'Data Table',
    show: true,
    showDownloadUrl: false,
    showVertical: true
  }
})

export type DashboardState = {
  config: MultiDashboardConfig
  data: Object
  filteredData: Object
  loading: boolean
  preview: boolean
  tabSelected: Tab
}

const reducer = (state: DashboardState, action: DashboardActions): DashboardState => {
  switch (action.type) {
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
    case 'SET_CONFIG': {
      return { ...state, config: action.payload }
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
    case 'SET_TAB_SELECTED': {
      return { ...state, tabSelected: action.payload }
    }
    case 'REMOVE_MULTIDASHBOARD_AT_INDEX': {
      const newMultiDashboards = [...state.config.multiDashboards]
      _.remove(newMultiDashboards, (_, index) => {
        return index === action.payload
      })
      if (newMultiDashboards.length === 0) return { ...state, config: _.omit(state.config, 'multiDashboards') }
      return applyMultiDashboards(state, newMultiDashboards)
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
    case 'UPDATE_VISUALIZATION': {
      const { vizKey, configureData } = action.payload
      return { ...state, config: { ...state.config, visualizations: { ...state.config.visualizations, [vizKey]: { ...state.config.visualizations[vizKey], ...configureData } } } }
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
    default:
      return state
  }
}

const applyMultiDashboards = (state, newMultiDashboards) => ({ ...state, config: { ...state.config, multiDashboards: newMultiDashboards } })

export default devToolsWrapper<DashboardState, DashboardActions>(reducer)
