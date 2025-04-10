import { useContext } from 'react'
import { MapDispatchContext } from './../../src/context'
import { MapActions } from './../store/map.actions'

export const useMapDispatch = (): React.Dispatch<MapActions> => {
  const context = useContext(MapDispatchContext)
  if (context === undefined) {
    throw new Error('useMapDispatch must be used within a MapProvider')
  }
  return context
}

export default useMapDispatch
