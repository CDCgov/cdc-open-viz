import { MapConfig } from '../types/MapConfig'
import MapActions from './map.actions'

export type MapState = {
  config?: MapConfig
  data: Object
  filteredData: Object
  loading: boolean
  preview: boolean
  tabSelected: number
}

const reducer = (state: MapState, action: MapActions): MapState => {
  switch (action.type) {
    case 'SET_CONFIG': {
      return { ...state, config: action.payload }
    }
  }
}

export default reducer
