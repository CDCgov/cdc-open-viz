import ChartActions from './chart.actions'
import defaults from '../data/initial-state.js'
import { type ViewportSize } from '../types/ChartConfig'
export const initialState = {
  config: defaults,
  stateData: [],
  colorScale: null,
  excludedData: [],
  filteredData: undefined,
  seriesHighlight: [],
  currentViewport: 'lg' as ViewportSize,
  dimensions: [],
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
type State = typeof initialState

export const reducer = (state: State, action: ChartActions) => {
  switch (action.type) {
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
