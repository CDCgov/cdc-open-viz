import { getUpdateConfig } from '../helpers/getUpdateConfig'
import { Config } from '../types/Config'
import DashboardActions from './dashboard.actions'

export type DashboardState = {
    config?: Config,
    data: Object,
    filteredData: Object,
    loading: boolean,
    preview: boolean
  }
const reducer = (state: DashboardState, action: DashboardActions): DashboardState => {
    switch(action.type) {
        case 'UPDATE_CONFIG': {
            const [config, filteredData] = getUpdateConfig(state)(...action.payload)
            return {...state, config, filteredData}
        }
        case 'SET_CONFIG': {
            return {...state, config: action.payload}
        }
        case 'SET_DATA': {
            return {...state, data: action.payload}
        }
        case 'SET_FILTERED_DATA': {
            return {...state, filteredData: action.payload}
        }
        case 'SET_LOADING': {
            return {...state, loading: action.payload}
        }
        case 'SET_PREVIEW': {
            return {...state, preview: action.payload}
        }
        default: return state;
    }
}

export default reducer;
