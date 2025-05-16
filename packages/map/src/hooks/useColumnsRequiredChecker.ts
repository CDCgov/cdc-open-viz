import { useContext } from 'react'
import ConfigContext, { MapDispatchContext } from '../context'
import { getColumnNames } from '../helpers/getColumnNames'

const useColumnsRequiredChecker = () => {
  const { config } = useContext(ConfigContext)
  const dispatch = useContext(MapDispatchContext)

  const columnsRequiredChecker = () => {
    const { primaryColumnName, geoColumnName } = getColumnNames(config.columns)

    let columnList = []

    // Geo is always required
    if (!geoColumnName) {
      columnList.push('Geography')
    }

    // Primary is required if we're on a data map or a point map
    if ('navigation' !== config.general.type && '' === primaryColumnName) {
      columnList.push('Primary')
    }

    // Navigate is required for navigation maps
    if ('navigation' === config.general.type && '' === config.columns.navigate.name) {
      columnList.push('Navigation')
    }

    if (
      ('us-geocode' === config.general.type || 'world-geocode' === config.general.type) &&
      '' === config.columns.latitude.name
    ) {
      columnList.push('Latitude')
    }

    if (
      ('us-geocode' === config.general.type || 'world-geocode' === config.general.type) &&
      '' === config.columns.longitude.name
    ) {
      columnList.push('Longitude')
    }

    if (columnList.length === 0) columnList = null

    dispatch({ type: 'SET_REQUIRED_COLUMNS', payload: columnList })
  }

  return { columnsRequiredChecker }
}

export default useColumnsRequiredChecker
