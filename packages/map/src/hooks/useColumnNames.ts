import { useContext } from 'react'
import ConfigContext from '../context'

const useColumnNames = () => {
  const { state } = useContext(ConfigContext)
  const geoColumnName = state.columns.geo.name || null
  const primaryColumnName = state.columns.primary.name || null
  const latitudeColumnName = state.columns.latitude.name || null
  const longitudeColumnName = state.columns.longitude.name || null
  const categoricalColumnName = state.columns?.categorical?.name || null
  return { geoColumnName, primaryColumnName, latitudeColumnName, longitudeColumnName, categoricalColumnName }
}

export default useColumnNames
