import { stateFipsToTwoDigit, supportedCounties } from '../data/supported-geos'
import { titleCase } from './titleCase'

const countyKeySet = new Set(Object.keys(supportedCounties))

export const formatLegendLocation = (key, runtimeLookup) => {
  let formattedName = ''

  const stateName = stateFipsToTwoDigit[key?.substring(0, 2)] || runtimeLookup || ''
  if (stateName) {
    formattedName += stateName
  }

  if (countyKeySet.has(key)) {
    formattedName += ', ' + titleCase(supportedCounties[key])
  }

  return formattedName
}
