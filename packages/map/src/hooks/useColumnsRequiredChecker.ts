import { useContext } from 'react'
import ConfigContext, { MapDispatchContext } from '../context'
import { getColumnNames } from '../helpers/getColumnNames'
import { getConfiguredBubbleLayers } from '../helpers/bubbleLayers'

const useColumnsRequiredChecker = () => {
  const { config } = useContext(ConfigContext)
  const dispatch = useContext(MapDispatchContext)

  const columnsRequiredChecker = () => {
    const { primaryColumnName, geoColumnName } = getColumnNames(config.columns)
    const hasBubbleLayers = getConfiguredBubbleLayers(config).length > 0
    const usesStructuredAlerts = ['data', 'map', 'navigation'].includes(config.general.type as string)

    let columnList = []

    // Bubble layers can supply the only mapped data columns for bubble-only maps.
    if (!hasBubbleLayers && !usesStructuredAlerts) {
      // Geo is always required
      if (!geoColumnName) {
        columnList.push('Geography')
      }

      // Primary is required for point maps
      if ('' === primaryColumnName) {
        columnList.push('Primary')
      }
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
