import { MapConfig } from '../types/MapConfig'
import MapActions from './map.actions'

export type MapState = {
  config?: MapConfig
  data?: Object
  filteredData?: Object
  loading?: boolean
  preview?: boolean
  tabSelected?: number
  currentViewport?: string
  runtimeFilters?: Object[]
  runtimeLegend?: Object[]
  accessibleStatus?: string
  modal: any
  filteredCountryCode: string
}

const reducer = (state: MapState, action: MapActions): MapState => {
  switch (action.type) {
    case 'SET_CONFIG': {
      return { ...state, config: action.payload }
    }
    case 'SET_LOADING': {
      return { ...state, loading: action.payload }
    }
    case 'SET_CURRENT_VIEWPORT': {
      return { ...state, currentViewport: action.payload }
    }
    case 'SET_RUNTIME_FILTERS': {
      return { ...state, runtimeFilters: action.payload }
    }
    case 'SET_RUNTIME_LEGEND': {
      return { ...state, runtimeLegend: action.payload }
    }
    case 'SET_ACCESSIBLE_STATUS': {
      return { ...state, accessibleStatus: action.payload }
    }
    case 'SET_MODAL': {
      return { ...state, modal: action.payload }
    }
    case 'SET_FILTERED_COUNTRY_CODE': {
      return { ...state, filteredCountryCode: action.payload }
    }
  }
}

export default reducer
