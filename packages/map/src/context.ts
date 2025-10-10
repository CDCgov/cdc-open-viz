import { createContext, Dispatch } from 'react'
import { MapContext } from './types/MapContext'
import MapActions from './store/map.actions'

export const MapDispatchContext = createContext<Dispatch<MapActions>>(() => {})

const ConfigContext = createContext({} as MapContext)

export default ConfigContext
