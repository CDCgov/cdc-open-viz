import { WaffleChartConfig } from '../types/WaffleChartConfig'
import ChartActions from './chart.actions'

type ChartState = {
  config?: WaffleChartConfig
  container: any
  coveLoadedHasRan: boolean
  loading: boolean
  preview: boolean
  viewport: string
}
const reducer = (state: ChartState, action: ChartActions): ChartState => {
  switch (action.type) {
    case 'SET_CONFIG': {
      return { ...state, config: action.payload }
    }
    case 'SET_LOADING': {
      return { ...state, loading: action.payload }
    }
    case 'SET_VIEWPORT': {
      return { ...state, viewport: action.payload }
    }
    case 'SET_COVE_LOADED_HAS_RAN': {
      return { ...state, coveLoadedHasRan: action.payload }
    }
    case 'SET_CONTAINER': {
      return { ...state, container: action.payload }
    }
  }
}

export default reducer
