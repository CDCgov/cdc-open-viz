import { useContext } from 'react'
import ConfigContext from '../context'
import { getColumnNames } from '../helpers/getColumnNames'

const useColumnsRequiredChecker = () => {
  const { state, setRequiredColumns } = useContext(ConfigContext)

  const columnsRequiredChecker = () => {
    const { primaryColumnName, geoColumnName } = getColumnNames(state.columns)

    let columnList = []

    // Geo is always required
    if (!geoColumnName) {
      columnList.push('Geography')
    }

    // Primary is required if we're on a data map or a point map
    if ('navigation' !== state.general.type && '' === primaryColumnName) {
      columnList.push('Primary')
    }

    // Navigate is required for navigation maps
    if ('navigation' === state.general.type && '' === state.columns.navigate.name) {
      columnList.push('Navigation')
    }

    if (
      ('us-geocode' === state.general.type || 'world-geocode' === state.general.type) &&
      '' === state.columns.latitude.name
    ) {
      columnList.push('Latitude')
    }

    if (
      ('us-geocode' === state.general.type || 'world-geocode' === state.general.type) &&
      '' === state.columns.longitude.name
    ) {
      columnList.push('Longitude')
    }

    if (columnList.length === 0) columnList = null

    setRequiredColumns(columnList)
  }

  return { columnsRequiredChecker }
}

export default useColumnsRequiredChecker
