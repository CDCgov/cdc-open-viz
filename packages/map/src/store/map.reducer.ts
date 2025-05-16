import { MapConfig } from '../types/MapConfig'
import MapActions from './map.actions'
import defaults from './../data/initial-state'
import { devToolsWrapper } from '@cdc/core/helpers/withDevTools'
import _ from 'lodash'

export const getInitialState = (configObj = {}): MapConfig => {
  return {
    config: _.merge({}, defaults, configObj),
    loading: false,
    accessibleStatus: '',
    coveLoadedHasRan: false,
    displayPanel: false,
    filteredCountryCode: '',
    isDraggingAnnotation: false,
    topoData: null,
    translate: [0, 0],
    position: { coordinates: [0, 0], zoom: 1 },
    projection: null,
    requiredColumns: [],
    scale: 1,
    modal: null,
    runtimeData: { init: true },
    runtimeFilters: [],
    runtimeLegend: [],
    stateToShow: ''
  }
}

export type MapState = {
  config: MapConfig
  loading: boolean
  accessibleStatus: string
  coveLoadedHasRan: boolean
  displayPanel: boolean
  filteredCountryCode: string
  isDraggingAnnotation: boolean
  topoData: object | null
  translate: number[]
  position: { coordinates: number[]; zoom: number }
  projection: object | null
  requiredColumns: string[]
  scale: number
  modal: object | null
  runtimeData: object
  runtimeFilters: object[]
  runtimeLegend: object[]
  stateToShow: string
  dataUrl: string
}

const reducer = (state: MapState, action: MapActions): MapState => {
  switch (action.type) {
    case 'SET_CONFIG':
      return { ...state, config: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_ACCESSIBLE_STATUS':
      return { ...state, accessibleStatus: action.payload }
    case 'SET_COVE_LOADED_HAS_RAN':
      return { ...state, coveLoadedHasRan: action.payload }
    case 'SET_DISPLAY_PANEL':
      return { ...state, displayPanel: action.payload }
    case 'SET_FILTERED_COUNTRY_CODE':
      return { ...state, filteredCountryCode: action.payload }
    case 'SET_IS_DRAGGING_ANNOTATION':
      return { ...state, isDraggingAnnotation: action.payload }
    case 'SET_TOPO_DATA':
      return { ...state, topoData: action.payload }
    case 'SET_TRANSLATE':
      return { ...state, translate: action.payload }
    case 'SET_POSITION':
      return { ...state, position: action.payload }
    case 'SET_REQUIRED_COLUMNS':
      return { ...state, requiredColumns: action.payload }
    case 'SET_SCALE':
      return { ...state, scale: action.payload }
    case 'SET_MODAL':
      return { ...state, modal: action.payload }
    case 'SET_RUNTIME_DATA':
      return { ...state, runtimeData: action.payload }
    case 'SET_RUNTIME_FILTERS':
      return { ...state, runtimeFilters: action.payload }
    case 'SET_RUNTIME_LEGEND':
      return { ...state, runtimeLegend: action.payload }
    case 'SET_STATE_TO_SHOW':
      return { ...state, stateToShow: action.payload }
    default:
      return state
  }
}

export const mapReducer = devToolsWrapper(reducer)

export type MapReducerType<MapState, MapActions> = (state: MapState, action: MapActions) => MapState
