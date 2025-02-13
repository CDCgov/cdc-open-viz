import ChartActions from './chart.actions'
import defaults from '../data/initial-state.js'
import { ChartConfig, type ViewportSize } from '../types/ChartConfig'
import { DimensionsType } from '@cdc/core/types/Dimensions'
import _ from 'lodash'

export const getInitialState = (configObj: ChartConfig) => {
  return {
    isLoading: true,
    config: defaults,
    stateData: _.cloneDeep(configObj?.data) || [],
    colorScale: null,
    excludedData: undefined,
    filteredData: undefined,
    seriesHighlight:
      configObj && configObj?.legend?.seriesHighlight?.length ? [...configObj?.legend?.seriesHighlight] : [],
    currentViewport: 'lg' as ViewportSize,
    dimensions: [0, 0] as DimensionsType,
    container: null as HTMLElement | null,
    coveLoadedEventRan: false,
    isDraggingAnnotation: false,
    imageId: `cove-${Math.random().toString(16).slice(-4)}`,
    brushConfig: {
      data: [],
      isActive: false,
      isBrushing: false
    }
  }
}

type State = {
  isLoading: boolean
  config: ChartConfig
  stateData: object[]
  colorScale: Function
  excludedData: object[]
  filteredData: object[]
  seriesHighlight: string[]
  currentViewport: ViewportSize
  dimensions: DimensionsType
  container: HTMLElement | null
  coveLoadedEventRan: boolean
  isDraggingAnnotation: boolean
  imageId: string
}

export const reducer = (state: State, action: ChartActions) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_CONFIG':
      return { ...state, config: action.payload }
    case 'UPDATE_CONFIG':
      return { ...state, config: action.payload }
    case 'SET_COLOR_SCALE':
      return { ...state, colorScale: action.payload }
    case 'SET_STATE_DATA':
      return { ...state, stateData: action.payload }
    case 'SET_EXCLUDED_DATA':
      return { ...state, excludedData: action.payload }
    case 'SET_FILTERED_DATA':
      return { ...state, filteredData: action.payload }
    case 'SET_SERIES_HIGHLIGHT':
      return { ...state, seriesHighlight: action.payload }
    case 'SET_VIEWPORT':
      return { ...state, currentViewpsort: action.payload }
    case 'SET_DIMENSIONS':
      return { ...state, dimensions: action.payload }
    case 'SET_CONTAINER':
      return { ...state, container: action.payload }
    case 'SET_LOADED_EVENT':
      return { ...state, coveLoadedEventRan: action.payload }
    case 'SET_DRAG_ANNOTATIONS':
      return { ...state, isDraggingAnnotation: action.payload }
    case 'SET_BRUSH_CONFIG':
      return { ...state, brushConfig: action.payload }
  }
}
