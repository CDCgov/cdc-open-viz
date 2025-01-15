import ChartActions from './chart.actions'
import defaults from '../data/initial-state'
import { type ViewportSize } from '../types/ChartConfig'

export const initialState = {
  isLoading: true,
  config: defaults,
  stateData: [],
  colorScale: null,
  excludedData: [],
  filteredData: undefined,
  externalFilters: [],
  seriesHighlight: [],
  currentViewport: 'lg' as ViewportSize,
  dimensions: [0, 0] as [number, number],
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

type State = {
  isLoading: boolean
  config: typeof defaults
  stateData: object[]
  colorScale: object | null
  excludedData: object[]
  filteredData?: object[]
  externalFilters: any[]
  seriesHighlight: string[]
  currentViewport: ViewportSize
  dimensions: [number, number]
  container: HTMLElement | null
  coveLoadedEventRan: boolean
  isDraggingAnnotation: boolean
  imageId: string
  brushConfig: {
    data: object[]
    isActive: boolean
    isBrushing: boolean
  }
}

export const reducer = (state: State, action: ChartActions): State => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }

    case 'SET_CONFIG':
      return { ...state, config: action.payload }

    case 'UPDATE_CONFIG':
      return { ...state, config: { ...state.config, ...action.payload } }

    case 'SET_COLOR_SCALE':
      return { ...state, colorScale: action.payload }

    case 'SET_STATE_DATA':
      return { ...state, stateData: action.payload }

    case 'SET_EXCLUDED_DATA':
      return { ...state, excludedData: action.payload }

    case 'SET_FILTERED_DATA':
      return { ...state, filteredData: action.payload }

    case 'SET_EXTERNAL_FILTERS':
      return { ...state, externalFilters: action.payload }

    case 'SET_SERIES_HIGHLIGHT':
      return { ...state, seriesHighlight: action.payload }

    case 'SET_VIEWPORT':
      return { ...state, currentViewport: action.payload }

    case 'SET_DIMENSIONS':
      return { ...state, dimensions: action.payload }

    case 'SET_CONTAINER':
      return { ...state, container: action.payload }

    case 'SET_LOADED_EVENT':
      return { ...state, coveLoadedEventRan: action.payload }

    case 'SET_DRAG_ANNOTATIONS':
      return { ...state, isDraggingAnnotation: action.payload }

    case 'SET_BRUSH_CONFIG':
      return { ...state, brushConfig: { ...state.brushConfig, ...action.payload } }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
