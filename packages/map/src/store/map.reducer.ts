import { MapConfig } from '../types/MapConfig'
import MapActions from './map.actions'

export type MapState = {
  accessibleStatus?: string
  config?: MapConfig
  container: any
  coveLoadedHasRan: boolean
  currentViewport?: string
  data?: Object
  dimensions: any
  filteredCountryCode: string
  filteredData?: Object
  loading?: boolean
  modal: any
  position: Object
  preview?: boolean
  runtimeData: Object[]
  runtimeFilters?: Object[]
  runtimeLegend?: Object[]
  tabSelected?: number
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
    case 'SET_RUNTIME_DATA': {
      return { ...state, runtimeData: action.payload }
    }
    case 'SET_POSITION': {
      return { ...state, position: action.payload }
    }
    case 'SET_COVE_LOADED_HAS_RAN': {
      return { ...state, coveLoadedHasRan: action.payload }
    }
    case 'SET_CONTAINER': {
      return { ...state, container: action.payload }
    }
    case 'SET_DIMENSIONS': {
      return { ...state, dimensions: action.payload }
    }
  }
}

export default reducer
