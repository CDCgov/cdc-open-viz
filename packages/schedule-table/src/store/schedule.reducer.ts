import { Config } from '../types/Config'
import ScheduleTableActions from './schedule.actions'

type ScheduleTableState = {
  config?: Config
  loading: boolean
  viewport: string
  coveLoadedHasRan: boolean
  container: any
}

const reducer = (state: ScheduleTableState, action: ScheduleTableActions): ScheduleTableState => {
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
