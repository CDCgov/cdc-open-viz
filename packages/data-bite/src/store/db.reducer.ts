import { DataBiteConfig } from '../types/DataBiteConfig'
import DataBiteActions from './db.actions'

type DataBiteState = {
  config?: DataBiteConfig
  loading: boolean
  currentViewport: string
  coveLoadedHasRan: boolean
  container: any
}

const reducer = (state: DataBiteState, action: DataBiteActions): DataBiteState => {
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
    case 'SET_COVE_LOADED_HAS_RAN': {
      return { ...state, coveLoadedHasRan: action.payload }
    }
    case 'SET_CONTAINER': {
      return { ...state, container: action.payload }
    }
  }
}

export default reducer
